CREATE TABLE `migrations` (
	`id` int PRIMARY KEY AUTO_INCREMENT,
	`migration` varchar(191) NOT NULL,
	`batch` int NOT NULL
) ENGINE = InnoDB DEFAULT CHARSET = latin1;

CREATE TABLE `password_resets` (
	`id` int PRIMARY KEY AUTO_INCREMENT,
	`email` varchar(191) NOT NULL,
	`token` varchar(191) NOT NULL,
	`created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE = InnoDB DEFAULT CHARSET = latin1;

CREATE TABLE `users` (
	`id` int PRIMARY KEY AUTO_INCREMENT,
	`name` varchar(191) NOT NULL,
	`cpf` char(14) NOT NULL UNIQUE,
	`email` varchar(64) NOT NULL UNIQUE,
	`email_verified_at` timestamp NULL,
	`password` varchar(191) NOT NULL,
	`remember_token` varchar(100) DEFAULT NULL,
	`permissao` enum('ADMINISTRADOR', 'USUARIO', 'INATIVO') NOT NULL,
	`created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
	`updated_at` timestamp NULL DEFAULT NULL
) ENGINE = InnoDB DEFAULT CHARSET = latin1;

create table failed_jobs (
	`id` int PRIMARY KEY AUTO_INCREMENT,
	`uuid`  varchar(191) UNIQUE,
	`connection`  TEXT,
	`queue` TEXT,
	`payload` TEXT,
	`exception` TEXT,
	`failed_at`  timestamp NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE = InnoDB DEFAULT CHARSET = latin1;