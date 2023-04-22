create database alura;

create table aluno(
	id serial primary key,
	primeiro_nome varchar(255),
	ultimo_nome varchar(255),
	data_nascimento date not null
	);
create table categoria(
	id serial primary key,
	nome varchar(255) not null
	);
create table curso(
	id serial primary key,
	nome varchar(255) not null,
	categoria_id integer not null references categoria(id)
	);
/* tabela relacionamento */
create table aluno_curso(
	aluno_id integer not null references aluno(id),
	curso_id integer not null references curso(id),
	primary key (aluno_id, curso_id)/* foreig key (aluno_id) references aluno(id)*/
	);
INSERT INTO aluno (primeiro_nome, ultimo_nome, data_nascimento) VALUES (
    'Vinicius', 'Dias', '1997-10-15'
), (
    'Patrícia', 'Freitas', '1996-10-25'
), (
    'Diogo', 'Oliveira', '1994-08-27'
), (
    'Maria', 'Rosa', '1985-01-01'
);

INSERT INTO categoria (nome) VALUES ('Front-End'), ('Programação'), ('Banco de dados'), ('Data Science');
INSERT INTO curso (nome, categoria_id) VALUES
    ('HTML',1),
    ('CSS',1),
    ('JS',1),
    ('PHP',2),
    ('Java',2),
    ('C++',2),
    ('PostgreSQL',3),
    ('MySQL',3),
    ('Oracle',3),
    ('SQL Server',3),
    ('SQLite',3),
    ('Pandas',4),
    ('Machine Learning',4),
    ('Power BI',4);
INSERT INTO aluno_curso VALUES (1,4), (1,11), (2,1), (2,2), (3,4), (3,3),(4,4),(4,6),(4,5);

 
 select aluno.primeiro_nome,
 		aluno.ultimo_nome,
 		count (aluno_curso.curso_id) numero_cursos
 	from aluno
 	join aluno_curso on aluno_curso.aluno_id = aluno.id
group by 1,2
order by numero_cursos desc;
 

/*Cursos mais requisitados*/
select curso.nome,
	count(aluno_curso.aluno_id) numero_alunos
	from curso 
							/*Criterio de Junção*/
	join aluno_curso on aluno_curso.curso_id = curso.id
	/*Agrupando*/
group by 1
	/*Ordenando*/
order by numero_alunos desc;
 
/*Categoria mais requisitados*/
select categoria.nome,
	count(curso.categoria_id) numero_alunos
	from categoria 
							/*Criterio de Junção*/
	join curso on curso.categoria_id = categoria.id
	/*Agrupando*/
group by 1
	/*Ordenando*/
order by numero_alunos desc;


