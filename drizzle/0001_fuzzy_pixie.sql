CREATE TABLE `contact_form` (
	`id` int AUTO_INCREMENT NOT NULL,
	`first_name` varchar(100) NOT NULL,
	`last_name` varchar(100) NOT NULL,
	`email` varchar(255) NOT NULL,
	`phone` varchar(50),
	`message` text,
	`source_page` varchar(500),
	`created_at` timestamp DEFAULT (now()),
	CONSTRAINT `contact_form_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `guide_download` (
	`id` int AUTO_INCREMENT NOT NULL,
	`first_name` varchar(100) NOT NULL,
	`email` varchar(255) NOT NULL,
	`guide_name` varchar(255),
	`source` varchar(255),
	`created_at` timestamp DEFAULT (now()),
	CONSTRAINT `guide_download_id` PRIMARY KEY(`id`)
);
