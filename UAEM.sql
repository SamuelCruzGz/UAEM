create database UAEM

create table cita (
	id_cita int not null identity (1,1),
	fecha datetime,
	primary key (id_cita)
)


create table usuario (
	id_usuario int not null identity (1,1),
	nombres varchar (50),
	usuario varchar (50),
	pass varchar (50),
	id_cita int 
	primary key(id_usuario)
	foreign key (id_cita) references cita(id_cita)
)


