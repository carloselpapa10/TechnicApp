<?php

class technic{

	public function __construct(){
	}

	public function productList($id_category){	
		$query="SELECT product.*,
				category.name as category_name
				FROM `product`
				INNER JOIN category
					ON(category.id = product.id_category)
				WHERE product.id_category=$id_category AND product.`status`='A'";
		$outp = "[";
		if(mysql_num_rows(mysql_query($query))>0){			
			$peticion = mysql_query($query);
			while ($fila = mysql_fetch_array($peticion)) {
				if ($outp != "[") {$outp .= ",";}
								
				$outp .= '{"id":"' . $fila["id"] . '",';
				$outp .= '"name":"' . $fila["name"] . '",';
				$outp .= '"description":"' . $fila["description"] . '",';
				$outp .= '"image":"' . $fila["image"] . '",';
				$outp .= '"id_category":"' . $fila["id_category"] . '",';
				$outp .= '"category_name":"' . $fila["category_name"] . '",';
				$outp .= '"status":"A",';
				$outp .= '"error":"0"}';
			}
		}else{
			$outp .= '{"error":"1"}';
		}
		$outp .="]";
		
		return $outp;
	}
	
	public function categoryList(){	

		$query="SELECT * FROM `category` WHERE `status`='A'";
		$outp = "[";
		if(mysql_num_rows(mysql_query($query))>0){			
			$peticion = mysql_query($query);
			while ($fila = mysql_fetch_array($peticion)) {
				if ($outp != "[") {$outp .= ",";}
								
				$outp .= '{"id":"' . $fila["id"] . '",';
				$outp .= '"name":"' . $fila["name"] . '",';
				$outp .= '"description":"' . $fila["description"] . '",';
				$outp .= '"status":"A",';
				$outp .= '"error":"0"}';
			}
		}else{
			$outp .= '{"error":"1"}';
		}
		$outp .="]";
		
		return $outp;
	}
	
	public function login($username,$password){	
	
		$query="SELECT * FROM `user` WHERE `username`='$username' AND `status`='A'";
		$outp = "[";
		if(mysql_num_rows(mysql_query($query))>0){
			
			$peticion = mysql_query($query);
			while($fila=mysql_fetch_array($peticion)){
				if ($outp != "[") {$outp .= ",";}
				if(strcmp($fila['password'], $password)==0){
					$outp .= '{"id":"'  . $fila["id"] . '",';
					$outp .= '"name":"'. $fila["name"].'",';
					$outp .= '"lastname":"'   .  $fila["lastname"]. '",';
					$outp .= '"username":"'   .  $fila["username"]. '",';
					$outp .= '"phone":"'   .  $fila["phone"]. '",';
					$outp .= '"photo":"'   .$fila["photo"]. '",';
					$outp .= '"email":"'   .$fila["email"]. '",';
					$outp .= '"address":"'   .$fila["address"]. '",';
					$outp .= '"user_type":"'   .$fila["user_type"]. '",';
					$outp .= '"id_category":"'   .$fila["id_category"]. '",';
					$outp .= '"error":"0"}'; 
				}else{
					$outp .= '{"error":"1"}';
					break;
				}
			}
			
		}else{
			$outp .= '{"error":"1"}';
		}
		$outp .="]";
		
		return $outp;
	}
	
	public function register($id,$name,$lastname,$username,$password,$phone,$photo,$email,$address,$id_category){	
		
		$query="SELECT * FROM `user` WHERE `id`='$id'";		
		if(mysql_num_rows(mysql_query($query))>0){
			return 1;
		}else{
			$peticion = mysql_query("INSERT INTO `user`(`id`, `name`, `lastname`, `username`, `password`, `phone`, `photo`, `email`, `address`, `id_category`) 
			VALUES('$id','$name','$lastname','$username','$password','$phone','$photo','$email','$address',$id_category)");
			if(!$peticion){echo mysql_error();die('No he podido conecta: '.mysql_error());return -1;}
			return 0;
		}
	}
	
	public function generateService($payment_method,$service,$image,$location,$id_user,$id_product){	
		$peticion = mysql_query("INSERT INTO `attention_service`(`payment_method`, `date`, `service`, `image`, `location`, `id_user`, `id_product`) 
		VALUES('$payment_method',CURRENT_TIMESTAMP,'$service','$image','$location','$id_user',$id_product)");
		if(!$peticion){echo mysql_error();die('No he podido conecta: '.mysql_error());return -1;}
		return 0;
	}
	
	public function serviceList($user){
		$query = "    SELECT 
                `attention_service`.*,
                `product`.`id` as id_product,
				`product`.`name` as name_product,
				`product`.`description` as description_product,
				`product`.`image` as image_product,
				`product`.`id_category` as id_category_product
            FROM `attention_service` 
                LEFT JOIN `user` 
                    ON (`attention_service`.`id_user` = `user`.`id`) 
                LEFT JOIN `product`
                    ON (`attention_service`.`id_product` = `product`.`id`) 
            WHERE `attention_service`.`id_user`='$user' AND `attention_service`.`status`!='3' ORDER BY `attention_service`.`id` DESC";

		$outp = "[";
		if(mysql_num_rows(mysql_query($query))>0){
			
			$peticion = mysql_query($query);
			while ($fila = mysql_fetch_array($peticion)) {
				if ($outp != "[") {$outp .= ",";}
				
				if($fila["status"]=='0')$status='Waiting';
				else if($fila["status"]=='1') $status='Assigned';
				else $status='Done';
				
				$technic_data = return_technic_data($fila["id_technic"]);	
				list($technic_name, $technic_id, $technic_phone) = split('[;]', $technic_data);
				
				if($fila["payment_method"]=='0')$payment_method='Cash';
				else $payment_method='Card';
				
				if($fila["service"]=='r')$service='Repair';
				else if($fila["service"]=='w')$service='Warranty';
				else if($fila["service"]=='m')$service='Maintenance';
				else $service='Install';
				
				$outp .= '{"id":"' . $fila["id"] . '",';
				$outp .= '"product_id":"' . $fila["id_product"] . '",';
				$outp .= '"technic_id":"' . $technic_id . '",';
				$outp .= '"payment_method":"' . $payment_method . '",';
				$outp .= '"date":"' . $fila["date"] . '",';
				$outp .= '"product_name":"' . $fila["name_product"] . '",';
				$outp .= '"product_image":"' . $fila["image_product"] . '",';
				$outp .= '"technic_name":"' . html_entity_decode($technic_name) . '",';
				$outp .= '"technic_phone":"' . $technic_phone . '",';
				$outp .= '"service":"' . $service . '",';
				$outp .= '"cost":"' . $fila["cost"]. '",';
				$outp .= '"status":"' . $status. '",';
				$outp .= '"error":"0"}';
			}
		}else{
			$outp .= '{"error":"1"}';
		}
		$outp .="]";
		
		return $outp;
	}	

	public function addComment($message,$id_user,$id_attention_service){
		$peticion = mysql_query("INSERT INTO `comment`(`message`, `date`, `id_user`, `id_attention_service`) 
		VALUES ('$message',CURRENT_TIMESTAMP,'$id_user',$id_attention_service)");
		if (!$peticion) {
			die('No he podido conecta: ' . mysql_error());
			return -1;
		}
		return 0;		
	}

	public function CommentList($id_category){
		$query="SELECT 
				`user`.`id` as id_user,
				`user`.`username` as name_user,
				`user`.`photo` as photo_user,
				attention_service.service as service_name,
				`comment`.*
			 FROM `comment` 
				INNER JOIN `user` ON (`comment`.`id_user` = `user`.`id`)
				INNER JOIN `category` ON (`category`.`id` = `user`.`id_category`)
				INNER JOIN attention_service ON (attention_service.id = comment.id_attention_service)
				INNER JOIN product ON (product.id = attention_service.id_product)
			 WHERE `comment`.`status`='A' AND product.id_category=$id_category order by `id` desc";

		$outp = "[";
		if(mysql_num_rows(mysql_query($query))>0){
			
			$peticion = mysql_query($query);
			while ($fila = mysql_fetch_array($peticion)) {
				if ($outp != "[") {$outp .= ",";}
				
				if($fila["service_name"]=='r')$service_name='Repair';
				else if($fila["service_name"]=='w')$service_name='Warranty';
				else if($fila["service_name"]=='m')$service_name='Maintenance';
				else $service_name='Install';
				
				$outp .= '{"id":"' . $fila["id"] . '",';
				$outp .= '"user_id":"' . $fila["id_user"] . '",';
				$outp .= '"user_name":"' . html_entity_decode($fila["name_user"]) . '",';
				$outp .= '"user_photo":"' . $fila["photo_user"] . '",';
				$outp .= '"message":"' . html_entity_decode($fila["message"]) . '",';
				$outp .= '"date":"' . $fila["date"] . '",';
				$outp .= '"id_attention_service":"' . $fila["id_attention_service"] . '",';
				$outp .= '"service_name":"' . $service_name . '",';
				$outp .= '"error":"0"}';
			}
		}else{
			$outp .= '{"error":"1"}';
		}
		$outp .="]";
		return $outp;
	}

	public function deleteComment($id,$id_user){
		$peticion = mysql_query("UPDATE `comment` SET `status`='I' WHERE `id`=$id AND `id_user`= '$id_user'");
		if (!$peticion) {
			return -1;
		}else{
			return 0;
		}
	}

	public function recoveryPassword($id){
		$query = "SELECT * FROM `user` WHERE `id`='$id' AND `status`='A'";
		if(mysql_num_rows(mysql_query($query))>0){
			$newPassword = generaPass();
			$password = md5('t1'+$newPassword);			
			$peticion = mysql_query("UPDATE `user` SET `password`='$password' WHERE `id`='$id'");
			if(!$peticion){echo mysql_error();die('No he podido conecta: '.mysql_error());return -1;}
			return $newPassword;
		}
		return 0;
	}
	
	public function changeCategory($id,$id_category){
		$query = "UPDATE `user` SET `id_category`=$id_category WHERE `id`='$id' ";
		$peticion = mysql_query($query);
		if (!$peticion) {
			return -1;
		}else{
			return 0;
		}
	}
	
	public function changePassword($id, $password1, $password2){
		
		$query = "UPDATE `user` SET `password`='$password2' WHERE `password`='$password1' AND `id`='$id'";
		$peticion = mysql_query($query);
		if (!$peticion) {
			return -1;
		}else{
			return 0;
		}		
	}
	
	
	public function changePhoto($id, $image){
		
		$query = "UPDATE `user` SET `photo`='$image' WHERE `id`='$id'";
		$peticion = mysql_query($query);
		if (!$peticion) {
			return -1;
		}else{
			return 0;
		}		
	}
}
	function generaPass() {
		//Se define una cadena de caractares. Te recomiendo que uses esta.
		$cadena = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890";
		//Obtenemos la longitud de la cadena de caracteres
		$longitudCadena = strlen($cadena);

		//Se define la variable que va a contener la contraseña
		$pass = "";
		//Se define la longitud de la contraseña, en mi caso 10, pero puedes poner la longitud que quieras
		$longitudPass = 6;

		//Creamos la contraseña
		for ($i = 1; $i <= $longitudPass; $i++) {
			//Definimos numero aleatorio entre 0 y la longitud de la cadena de caracteres-1
			$pos = rand(0, $longitudCadena - 1);

			//Vamos formando la contraseña en cada iteraccion del bucle, añadiendo a la cadena $pass la letra correspondiente a la posicion $pos en la cadena de caracteres definida.
			$pass .= substr($cadena, $pos, 1);
		}
		return $pass;
	}
	
	function return_technic_data($id_technic){
		$query2 = 'SELECT * FROM `user` WHERE `id`="'.$id_technic.'" and `user_type`="T"';
		if(mysql_num_rows(mysql_query($query2))>0){
			$peticion2 = mysql_query($query2);
			while ($fila2 = mysql_fetch_array($peticion2)) {
				return $fila2["name"]." ".$fila2["lastname"].";".$fila2["id"].";".$fila2["phone"];
			}
		}else{
			return "---;---;---";
		}
	}
?>