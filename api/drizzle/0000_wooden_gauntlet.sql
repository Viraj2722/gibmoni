CREATE TABLE `milestones` (
	`id` text PRIMARY KEY NOT NULL,
	`project_id` text NOT NULL,
	`milestone_index` integer NOT NULL,
	`title` text NOT NULL,
	`description` text NOT NULL,
	`proof_url` text,
	`proof_notes` text,
	`updated_at` integer,
	FOREIGN KEY (`project_id`) REFERENCES `projects`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `projects` (
	`id` text PRIMARY KEY NOT NULL,
	`creator_wallet` text NOT NULL,
	`title` text NOT NULL,
	`tagline` text NOT NULL,
	`description` text NOT NULL,
	`cover_image_url` text,
	`category` text,
	`created_at` integer NOT NULL,
	FOREIGN KEY (`creator_wallet`) REFERENCES `users`(`wallet_address`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `users` (
	`wallet_address` text PRIMARY KEY NOT NULL,
	`alias` text NOT NULL,
	`avatar_url` text,
	`github_url` text,
	`twitter_handle` text,
	`bio` text,
	`created_at` integer NOT NULL
);
