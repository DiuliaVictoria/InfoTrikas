create database info_trikas;

use info_trikas;

create table usuarios
(idUsuario int primary key auto_increment,
nome varchar(90),
sobrenome varchar(90),
cpf varchar(20),
telefone varchar (15),
email varchar(80),
usuario varchar(20),
senha varchar (50));

create table quiz
(idResultado int auto_increment,
FK_Usuario int,
foreign key (FK_Usuario) references usuarios (idUsuario),
primary key (idResultado, FK_Usuario),
qntd_acertos int,
data_hora datetime default current_timestamp);

select * from usuarios;

select * from quiz;

select round(avg(qntd_acertos),2) from quiz;

select qntd_acertos from quiz;


select qntd_acertos as "quantida de Acertos" ,count(qntd_acertos) "quantida de Jogadas" from quiz group by qntd_acertos

