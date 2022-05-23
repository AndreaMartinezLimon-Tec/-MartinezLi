CREATE DATABASE [19100212];
USE [19100212];

CREATE TABLE empleado (
  ID int NOT NULL IDENTITY(1,1) PRIMARY KEY,
  Nombre varchar(30) NOT NULL,
  Ap_Paterno varchar(30) NOT NULL,
  Ap_Materno varchar(30),
  Estado_Civil varchar(30) NOT NULL,
  Tipo_Empleo varchar(30) NOT NULL,
  Correo_Per varchar(30) NOT NULL,
  Telefono varchar(30) NOT NULL,
  Correo_Emp varchar(30) NOT NULL,
  Contraseña varchar(30) NOT NULL
);

inser into empleado (Nombre,Ap_Paterno,Ap_Materno,Estado_Civil,Tipo_Empleo,Correo_Per,Telefono,Correo_Emp,Contraseña)
values('Andrea Joana','Martinez','Limon','Soltero','De tiempo parcial','joandymart_lim@hotmail.com','8671565371','ajml@alahas.com','ajml');

insert into empleado (Nombre,Ap_Paterno,Ap_Materno,Estado_Civil,Tipo_Empleo,Correo_Per,Telefono,Correo_Emp,Contraseña)
values('Barbara','Brown','','Casado','De planta','babs@hotmail.com','8671565371','babs@alahas.com','babs');