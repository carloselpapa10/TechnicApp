-- phpMyAdmin SQL Dump
-- version 4.3.11
-- http://www.phpmyadmin.net
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 22-06-2017 a las 17:01:23
-- Versión del servidor: 5.6.24
-- Versión de PHP: 5.6.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de datos: `technic_bd`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `attention_service`
--

CREATE TABLE IF NOT EXISTS `attention_service` (
  `id` int(11) NOT NULL,
  `payment_method` enum('1','0') NOT NULL DEFAULT '0',
  `cost` int(11) DEFAULT NULL,
  `date` date DEFAULT NULL,
  `service` enum('r','w','m','i') DEFAULT NULL,
  `image` varchar(50) DEFAULT NULL,
  `location` varchar(200) DEFAULT NULL,
  `id_user` varchar(20) DEFAULT NULL,
  `id_technic` varchar(20) DEFAULT NULL,
  `id_product` int(11) DEFAULT NULL,
  `status` enum('0','1','2','3') DEFAULT '0'
) ENGINE=InnoDB AUTO_INCREMENT=32 DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `attention_service`
--

INSERT INTO `attention_service` (`id`, `payment_method`, `cost`, `date`, `service`, `image`, `location`, `id_user`, `id_technic`, `id_product`, `status`) VALUES
(1, '1', 1000, '2017-05-08', 'r', '', '', '1082941566', '3030', 1, '0'),
(7, '1', NULL, '2017-05-15', 'w', '', 'latitude =>42.3594218 longitude =>13.398830499999999', '1082941566', NULL, 1, '0'),
(8, '1', NULL, '2017-05-15', 'i', '', 'latitude =>42.3594305 longitude =>13.3988251', '1082941566', NULL, 4, '0'),
(9, '0', NULL, '2017-05-15', 'm', '', 'latitude =>42.359422699999996 longitude =>13.398831600000001', '1082941566', NULL, 3, '0'),
(10, '0', NULL, '2017-05-15', 'w', '', 'latitude =>42.3594188 longitude =>13.3988303', '1082941566', NULL, 4, '0'),
(11, '0', NULL, '2017-05-15', 'r', '', 'latitude =>42.3594188 longitude =>13.3988303', '1082941566', NULL, 3, '0'),
(12, '1', NULL, '2017-05-15', 'i', '', 'latitude =>42.3594375 longitude =>13.398831300000001', '1082941566', NULL, 2, '0'),
(13, '1', NULL, '2017-05-15', 'm', '', 'latitude =>42.3594375 longitude =>13.3988322', '1082941566', NULL, 4, '0'),
(14, '', NULL, '2017-05-16', '', '', '', '1082941566', NULL, 1, '0'),
(15, '', NULL, '2017-05-16', '', '', 'latitude =>42.3590446 longitude =>13.3986542', '1082941566', NULL, 1, '0'),
(16, '1', NULL, '2017-05-16', 'r', '', '', '1082941566', NULL, 2, '0'),
(17, '1', NULL, '2017-05-16', 'r', '', 'latitude =>42.359041399999995 longitude =>13.398637', '2020', NULL, 1, '0'),
(18, '0', NULL, '2017-05-16', 'w', '', 'latitude =>42.359041399999995 longitude =>13.398637', '2020', NULL, 2, '0'),
(19, '0', NULL, '2017-05-16', 'r', 'd0d0ef24-7b8c-361a-e787-d8c824ce17b1.jpg', 'latitude =>42.3595132 longitude =>13.3986355', '1082941566', NULL, 1, '0'),
(20, '0', NULL, '2017-05-16', 'm', 'c887a509-4d6b-04fb-4e80-0670f7d76b32.jpg', 'latitude =>42.3595132 longitude =>13.3986355', '1082941566', NULL, 1, '0'),
(21, '1', NULL, '2017-05-16', 'r', '06cf2a5b-e143-e2e5-0976-1c99c766e3c1.jpg', 'latitude =>42.3595132 longitude =>13.3986355', '2020', NULL, 3, '0'),
(22, '1', NULL, '2017-05-18', 'r', '', '', '9999', NULL, 3, '0'),
(23, '1', NULL, '2017-05-18', 'w', '', 'latitude =>42.3687699 longitude =>13.3493298', '9999', NULL, 2, '0'),
(24, '1', NULL, '2017-05-18', 'i', '6e5aba05-2f18-2610-97bf-adf382f2464a.jpg', 'latitude =>42.3576113 longitude =>13.4018749', '2020', NULL, 4, '0'),
(25, '0', NULL, '2017-05-18', 'r', 'e9ef3f1a-7e06-1b81-a668-870d36a8af28.jpg', '', '56556556', NULL, 1, '0'),
(26, '0', NULL, '2017-05-18', 'w', '', '', '56556556', NULL, 2, '0'),
(27, '1', NULL, '2017-05-18', 'i', '', 'latitude =>42.3594877 longitude =>13.398651', '56556556', NULL, 5, '0'),
(28, '1', NULL, '2017-05-18', 'w', '', 'latitude =>42.3594877 longitude =>13.398651', '1122', NULL, 5, '0'),
(29, '1', NULL, '2017-05-27', 'r', '4a3432d7-dd91-504e-e97b-cbd88f204ae4.jpg', 'latitude =>42.3594877 longitude =>13.398651', '2020', NULL, 6, '0'),
(30, '0', NULL, '2017-06-07', 'r', 'b71d9659-0fa9-a944-37de-75ee2073f09f.jpg', 'latitude =>42.3594877 longitude =>13.398651', '10827', NULL, 6, '0'),
(31, '1', NULL, '2017-06-22', 'r', '474f9b59-d3e8-e5bc-f53d-adf76f1b4002.jpg', 'latitude =>42.3594798 longitude =>13.3986383', '123434', NULL, 3, '0');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `category`
--

CREATE TABLE IF NOT EXISTS `category` (
  `id` int(11) NOT NULL,
  `name` varchar(50) DEFAULT NULL,
  `description` varchar(100) DEFAULT NULL,
  `status` enum('A','I') NOT NULL DEFAULT 'A'
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `category`
--

INSERT INTO `category` (`id`, `name`, `description`, `status`) VALUES
(1, 'Technology', 'Computer description', 'A'),
(2, 'Women cosmetic', 'Women cosmetic description', 'A');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `comment`
--

CREATE TABLE IF NOT EXISTS `comment` (
  `id` int(11) NOT NULL,
  `message` text,
  `date` date DEFAULT NULL,
  `id_user` varchar(50) DEFAULT NULL,
  `id_attention_service` int(11) DEFAULT NULL,
  `status` enum('A','I') NOT NULL DEFAULT 'A'
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `comment`
--

INSERT INTO `comment` (`id`, `message`, `date`, `id_user`, `id_attention_service`, `status`) VALUES
(4, 'Hello', '2017-05-08', '1082941566', 1, 'A'),
(5, 'How are you', '2017-05-08', '1082941566', 1, 'A'),
(6, 'Hello', '2017-05-08', '1082941566', 1, 'A'),
(7, 'bye', '2017-05-12', '1082941566', 1, 'A'),
(8, 'test message', '2017-05-27', '2020', 21, 'I'),
(9, 'i am waiting too much to the technician.. i wanna know when he will arrive... thnks', '2017-05-27', '2020', 24, 'A'),
(10, 'this is a new comment', '2017-05-27', '2020', 18, 'A'),
(11, 'test the app', '2017-05-27', '2020', 24, 'A'),
(12, 'hi to all...', '2017-06-07', '10827', 30, 'A'),
(13, 'helooo sjssjsjsj shsbshs shs ', '2017-06-22', '123434', 31, 'I');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `product`
--

CREATE TABLE IF NOT EXISTS `product` (
  `id` int(11) NOT NULL,
  `name` varchar(50) DEFAULT NULL,
  `description` varchar(100) DEFAULT NULL,
  `image` varchar(50) DEFAULT NULL,
  `id_category` int(11) NOT NULL,
  `status` enum('A','I') NOT NULL DEFAULT 'A'
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `product`
--

INSERT INTO `product` (`id`, `name`, `description`, `image`, `id_category`, `status`) VALUES
(1, 'Desktop', 'Desktop description', 'desktop.jpg', 1, 'A'),
(2, 'Laptop', 'Laptop description', 'laptop.jpg', 1, 'A'),
(3, 'Printer', 'Printer description', 'printer.jpg', 1, 'A'),
(4, 'Network', 'Network description', 'network.jpg', 1, 'A'),
(5, 'Camera', 'Camera description', 'camera.jpg', 1, 'A'),
(6, 'Smartphone', 'smartphone description', 'smartphone.jpg', 1, 'A');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `technic_product`
--

CREATE TABLE IF NOT EXISTS `technic_product` (
  `id` int(11) NOT NULL,
  `id_user` varchar(20) DEFAULT NULL,
  `id_product` int(11) DEFAULT NULL
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `technic_product`
--

INSERT INTO `technic_product` (`id`, `id_user`, `id_product`) VALUES
(1, '3030', 1),
(2, '3030', 2),
(3, '3030', 3),
(4, '3030', 4);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `user`
--

CREATE TABLE IF NOT EXISTS `user` (
  `id` varchar(20) NOT NULL,
  `name` varchar(50) DEFAULT NULL,
  `lastname` varchar(50) DEFAULT NULL,
  `username` varchar(50) DEFAULT NULL,
  `password` varchar(50) DEFAULT NULL,
  `phone` varchar(50) DEFAULT NULL,
  `photo` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `address` varchar(50) NOT NULL,
  `user_type` enum('P','T') NOT NULL DEFAULT 'P',
  `id_category` int(11) NOT NULL,
  `status` enum('A','I') NOT NULL DEFAULT 'A'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `user`
--

INSERT INTO `user` (`id`, `name`, `lastname`, `username`, `password`, `phone`, `photo`, `email`, `address`, `user_type`, `id_category`, `status`) VALUES
('10203040', 'ricardo', 'avendano', 'ricar', 'e10adc3949ba59abbe56e057f20f883e', '', 'fotoDefecto.png', 'ricar@gmail.com', 'LAquila', 'P', 1, 'A'),
('10827', 'lope', 'lope', 'lope', 'e10adc3949ba59abbe56e057f20f883e', '', 'fotoDefecto.png', 'c.avendano10@gmail.com', 'LAquila', 'P', 1, 'A'),
('1082941566', 'Carlos', 'Avendano', 'carloselpapa', 'e10adc3949ba59abbe56e057f20f883e', '3003940576', 'Carlos.jpg', 'c.avendano10@gmail.com', 'L''Aquila', 'P', 1, 'A'),
('1122', 'charlos', 'pendeho', 'charlotte', 'cfcd208495d565ef66e7dff9f98764da', '', 'fotoDefecto.png', 'charlos@fucker.in', 'LAquila', 'P', 1, 'A'),
('123434', 'pepo', 'pepo', 'pepo', 'e10adc3949ba59abbe56e057f20f883e', '', 'fotoDefecto.png', 'carlosaven-10@hotmail.com', 'LAquila', 'P', 1, 'A'),
('123456', 'ana', 'sofia', 'sofia', 'e10adc3949ba59abbe56e057f20f883e', '', 'fotoDefecto.png', 'anasofia@gmail.com', 'LAquila', 'P', 2, 'A'),
('2020', 'Martha', 'Caro', 'martha', 'e10adc3949ba59abbe56e057f20f883e', '3003940576', 'fotoDefecto.png', 'martha@gmail.com', 'Laquila', 'P', 1, 'A'),
('3030', 'Martha', 'Caro', 'martha20', 'e10adc3949ba59abbe56e057f20f883e', '3003940576', 'martha.jpg', 'martha@gmail.com', 'Laquila', 'T', 1, 'A'),
('401020', 'Claudio', 'DiSipio', 'claudio', 'e10adc3949ba59abbe56e057f20f883e', '3003940576', 'martha.jpg', 'martha@gmail.com', 'Laquila', 'P', 1, 'A'),
('5555', 'mirian', 'arango', 'mirian', 'e10adc3949ba59abbe56e057f20f883e', '', 'fotoDefecto.png', 'miriab@gmail.com', 'LAquila', 'P', 1, 'A'),
('56556556', 'luz', 'avila', 'luz', 'e10adc3949ba59abbe56e057f20f883e', '', 'fotoDefecto.png', 'luzmarinaavilaortiz@hotmail.com', 'LAquila', 'P', 1, 'A'),
('654321', 'luz', 'marina', 'luzma', 'e10adc3949ba59abbe56e057f20f883e', '', 'fotoDefecto.png', 'luzma@gmail.com', 'LAquila', 'P', 1, 'A'),
('9999', 'claudio', 'di sipio', 'claudio', 'e10adc3949ba59abbe56e057f20f883e', '', 'fotoDefecto.png', 'claudio@gmail.com', 'LAquila', 'P', 1, 'A');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `attention_service`
--
ALTER TABLE `attention_service`
  ADD PRIMARY KEY (`id`), ADD KEY `id_product` (`id_product`), ADD KEY `id_technic` (`id_technic`);

--
-- Indices de la tabla `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `comment`
--
ALTER TABLE `comment`
  ADD PRIMARY KEY (`id`), ADD KEY `id_user` (`id_user`), ADD KEY `id_attention_service` (`id_attention_service`);

--
-- Indices de la tabla `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`id`), ADD KEY `id_category` (`id_category`);

--
-- Indices de la tabla `technic_product`
--
ALTER TABLE `technic_product`
  ADD PRIMARY KEY (`id`), ADD KEY `id_user` (`id_user`), ADD KEY `id_product` (`id_product`);

--
-- Indices de la tabla `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`), ADD KEY `id_category` (`id_category`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `attention_service`
--
ALTER TABLE `attention_service`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=32;
--
-- AUTO_INCREMENT de la tabla `category`
--
ALTER TABLE `category`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT de la tabla `comment`
--
ALTER TABLE `comment`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=14;
--
-- AUTO_INCREMENT de la tabla `product`
--
ALTER TABLE `product`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=7;
--
-- AUTO_INCREMENT de la tabla `technic_product`
--
ALTER TABLE `technic_product`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=5;
--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `attention_service`
--
ALTER TABLE `attention_service`
ADD CONSTRAINT `attention_service_ibfk_1` FOREIGN KEY (`id_product`) REFERENCES `product` (`id`),
ADD CONSTRAINT `attention_service_ibfk_2` FOREIGN KEY (`id_technic`) REFERENCES `user` (`id`);

--
-- Filtros para la tabla `comment`
--
ALTER TABLE `comment`
ADD CONSTRAINT `comment_ibfk_1` FOREIGN KEY (`id_user`) REFERENCES `user` (`id`),
ADD CONSTRAINT `comment_ibfk_2` FOREIGN KEY (`id_attention_service`) REFERENCES `attention_service` (`id`);

--
-- Filtros para la tabla `product`
--
ALTER TABLE `product`
ADD CONSTRAINT `product_ibfk_1` FOREIGN KEY (`id_category`) REFERENCES `category` (`id`);

--
-- Filtros para la tabla `technic_product`
--
ALTER TABLE `technic_product`
ADD CONSTRAINT `technic_product_ibfk_1` FOREIGN KEY (`id_user`) REFERENCES `user` (`id`),
ADD CONSTRAINT `technic_product_ibfk_2` FOREIGN KEY (`id_product`) REFERENCES `product` (`id`);

--
-- Filtros para la tabla `user`
--
ALTER TABLE `user`
ADD CONSTRAINT `user_ibfk_1` FOREIGN KEY (`id_category`) REFERENCES `category` (`id`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
