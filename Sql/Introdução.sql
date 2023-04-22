create table dadosPessoas(
	id serial,
	codigo integer,
	nome varchar(255),
	sobrenome varchar(255),
	idade integer,
	altura real,
	cpf integer,
	valor numeric(10,2),
	userAtivo boolean,
	curos varchar(255)
	);
	
select * from dadospessoas order by nome;

insert into dadospessoas (codigo,nome,sobrenome,idade,altura,cpf,valor,userAtivo,curos) values (001,'Pedro','Rodrigues',21,1.69,123456,15.2,true,'JavaScript');
insert into dadospessoas (codigo,nome,sobrenome,idade,altura,cpf,valor,userAtivo,curos) values (002,'Jorge','Astolfo',30,1.80,654987,15.2,true,'CSS');
insert into dadospessoas (codigo,nome,sobrenome,idade,altura,cpf,valor,userAtivo,curos) values (003,'Julia','Da silva',18,1.50,1454487,15.2,true,'Java');
insert into dadospessoas (codigo,nome,sobrenome,idade,altura,cpf,valor,userAtivo,curos) values (004,'João','Matias',18,1.70,745585,15.2,false,'JavaScript');
insert into dadospessoas (codigo,nome,sobrenome,idade,altura,cpf,valor,userAtivo,curos) values (005,'Amanda','Pinheiro',35,1.69,8599654,15.2,true,'HTML');

drop table dadospessoas;

create table dadosCurso(
	id serial,
	nome varchar(255),
	curosoAtivo boolean
	);
	
select * from dadosCurso order by id;

insert into dadosCurso (nome,curosoAtivo) values ('Java',TRUE);
insert into dadosCurso (nome,curosoAtivo) values ('JavaScript',TRUE);
insert into dadosCurso (nome,curosoAtivo) values ('HTML',TRUE);
insert into dadosCurso (nome,curosoAtivo) values ('CSS',TRUE);
insert into dadosCurso (nome,curosoAtivo) values ('Portugol',FALSE);

drop table dadosCurso;







