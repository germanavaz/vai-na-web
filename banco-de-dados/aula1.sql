CREATE DATABASE db_vai_na_web;

USE db_vai_na_web;

CREATE TABLE `alunos`(
	`id` INT AUTO_INCREMENT PRIMARY KEY, 
    `nome` VARCHAR(30) NOT NULL, 
    `idade` INT(4) NOT NULL,
    `cidade` VARCHAR(30) NOT NULL
);

INSERT INTO `alunos` (`nome`, `idade`, `cidade`) VALUES ('germana', '28', 'rio de janeiro'),  ('marina', '28', 'rio de janeiro'), ('vini', '20', 'salvador');

SELECT * FROM `alunos`;