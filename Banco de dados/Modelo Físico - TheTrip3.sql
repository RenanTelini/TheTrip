create database TheTrip;

use TheTrip;

CREATE TABLE Clientes(
	id_cliente int PRIMARY KEY IDENTITY(1,1) NOT NULL,
	nome_cliente nvarchar(max) NOT NULL,
	cidade_cliente nvarchar(max) NOT NULL,
	estado_cliente nvarchar(max) NOT NULL,
	fkcontato int NULL,
	fkdestino int NULL, 
	fkpromocao int);


CREATE TABLE Contatos(
	id_contato int PRIMARY KEY IDENTITY(1,1) NOT NULL,
	email_contato nvarchar (max) NOT NULL,
	telefone_contato nvarchar(max) NOT NULL, );


CREATE TABLE Destinos(
	id_destino int PRIMARY KEY IDENTITY(1,1) NOT NULL,
	cidade_destino nvarchar(max) NOT NULL,
	estado_destino nvarchar(max) NOT NULL,);


CREATE TABLE Promocoes(
	id_promocao int PRIMARY KEY IDENTITY(1,1) NOT NULL,
	valor_promocao float NOT NULL, );
	
	
	alter table Clientes add foreign key (fkcontato) references Contatos (id_contato);
	alter table Clientes add foreign key (fkdestino) references Destinos (id_destino);
	alter table Clientes add foreign key (fkpromocao) references Promocoes (id_promocao);


SELECT cli.id_cliente, cli.nome_cliente, cli.cidade_cliente, cli.estado_cliente,
c.email_contato, c.telefone_contato, ds.cidade_destino, ds.estado_destino,
p.valor_promocao FROM Clientes as cli
inner join Contatos as c on cli.fkcontato = c.id_contato
inner join Destinos as ds on cli.fkdestino = ds.id_destino
inner join Promocoes as p on cli.fkpromocao = p.id_promocao