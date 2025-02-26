CREATE DATABASE db_amazon;

USE db_amazon;

CREATE TABLE `tb_produtos`(
	`id` INT AUTO_INCREMENT PRIMARY KEY, 
    `nome` VARCHAR(100) NOT NULL, 
    `categoria` VARCHAR(100) NOT NULL, 
    `preco` DOUBLE NOT NULL 
);

INSERT INTO `tb_produtos`(`nome`, `categoria`, `preco`) VALUES ('confete', 'artigos para festa', 29.99), 
('água', 'bebidas', 10.00), ('protetor solar', 'cosméticos', 89.90);

SELECT * FROM `tb_produtos`;

UPDATE `tb_produtos` SET `nome` = 'máscara', `categoria` = 'acessórios', `preco` = 49.50 WHERE `id` = 1;