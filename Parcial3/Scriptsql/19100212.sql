CREATE DATABASE IF NOT EXISTS `19100212` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `19100212`;
--
-- Estructura de tabla para la tabla `empleado`
--

CREATE TABLE `empleado` (
  `ID` int(11) NOT NULL,
  `Nombre` varchar(30) NOT NULL,
  `Ap_Paterno` varchar(30) NOT NULL,
  `Ap_Materno` varchar(30) NOT NULL,
  `Estado_Civil` varchar(30) NOT NULL,
  `Tipo_Empleo` varchar(30) NOT NULL,
  `Correo_Per` varchar(30) NOT NULL,
  `Telefono` varchar(30) NOT NULL,
  `Correo_Emp` varchar(30) NOT NULL,
  `Contraseña` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO `empleado` (`ID`, `Nombre`, `Ap_Paterno`, `Ap_Materno`, `Estado_Civil`, `Tipo_Empleo`, `Correo_Per`, `Telefono`, `Correo_Emp`, `Contraseña`) VALUES
(1, 'Andrea Joana', 'Martinez', 'Limon', 'Soltero', 'De tiempo parcial', 'joandymart_lim@hotmail.com', '8671565371', 'ajml@alahas.com', 'ajml'),
(2, 'Barbara', 'Brown', '', 'Casado', 'De planta', 'babs@hotmail.com', '8671565371', 'babs@alahas.com', 'babs');

ALTER TABLE `empleado`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `empleado`
--
ALTER TABLE `empleado`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--