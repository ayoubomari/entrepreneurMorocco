CREATE TABLE `brochure_download` (
	`id` int AUTO_INCREMENT NOT NULL,
	`email` varchar(255) NOT NULL,
	`created_at` timestamp DEFAULT (now()),
	CONSTRAINT `brochure_download_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `custom_quote` (
	`id` int AUTO_INCREMENT NOT NULL,
	`full_name` varchar(255) NOT NULL,
	`email` varchar(255) NOT NULL,
	`phone` varchar(50),
	`services` json,
	`message` text,
	`created_at` timestamp DEFAULT (now()),
	CONSTRAINT `custom_quote_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `diagnostic_maroc_2030` (
	`id` int AUTO_INCREMENT NOT NULL,
	`first_name` varchar(100) NOT NULL,
	`last_name` varchar(100) NOT NULL,
	`email` varchar(255) NOT NULL,
	`phone` varchar(50) NOT NULL,
	`project_date` varchar(50) NOT NULL,
	`situation` varchar(50) NOT NULL,
	`family_status` varchar(50) NOT NULL,
	`children_count` varchar(50),
	`children_ages` varchar(255),
	`motivations` json NOT NULL,
	`main_skill` varchar(255) NOT NULL,
	`exp_years` varchar(50) NOT NULL,
	`revenue_gen` varchar(50) NOT NULL,
	`budget` varchar(50) NOT NULL,
	`runway` varchar(50) NOT NULL,
	`path` varchar(50) NOT NULL,
	`network` varchar(50) NOT NULL,
	`message` text,
	`call_opt_in` varchar(10) NOT NULL,
	`availabilities` json,
	`score` int,
	`result_label` varchar(100),
	`created_at` timestamp DEFAULT (now()),
	CONSTRAINT `diagnostic_maroc_2030_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `mini_test` (
	`id` int AUTO_INCREMENT NOT NULL,
	`project` varchar(100) NOT NULL,
	`obstacles` json,
	`email` varchar(255) NOT NULL,
	`created_at` timestamp DEFAULT (now()),
	CONSTRAINT `mini_test_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `plan_selection` (
	`id` int AUTO_INCREMENT NOT NULL,
	`selected_plan` varchar(50) NOT NULL,
	`full_name` varchar(255) NOT NULL,
	`email` varchar(255) NOT NULL,
	`phone` varchar(50),
	`result_email` varchar(255) NOT NULL,
	`message` text,
	`created_at` timestamp DEFAULT (now()),
	CONSTRAINT `plan_selection_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `profile_quiz` (
	`id` int AUTO_INCREMENT NOT NULL,
	`profile` varchar(100) NOT NULL,
	`stage` varchar(100) NOT NULL,
	`needs` json,
	`email` varchar(255) NOT NULL,
	`phone` varchar(20),
	`created_at` timestamp DEFAULT (now()),
	CONSTRAINT `profile_quiz_id` PRIMARY KEY(`id`)
);
