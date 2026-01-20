import {
  mysqlTable,
  varchar,
  timestamp,
  json,
  text,
  int,
} from "drizzle-orm/mysql-core";

// Helper function to define the standard ID column
const commonId = () => int("id").autoincrement().primaryKey();

export const profileQuiz = mysqlTable("profile_quiz", {
  id: commonId(), // Changed from serial
  profile: varchar("profile", { length: 100 }).notNull(),
  stage: varchar("stage", { length: 100 }).notNull(),
  needs: json("needs"),
  email: varchar("email", { length: 255 }).notNull(),
  phone: varchar("phone", { length: 20 }),
  createdAt: timestamp("created_at").defaultNow(),
});

export const miniTest = mysqlTable("mini_test", {
  id: commonId(), // Changed from serial
  project: varchar("project", { length: 100 }).notNull(),
  obstacles: json("obstacles"),
  email: varchar("email", { length: 255 }).notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});

export const planSelection = mysqlTable("plan_selection", {
  id: commonId(), // Changed from serial
  selectedPlan: varchar("selected_plan", { length: 50 }).notNull(),
  fullName: varchar("full_name", { length: 255 }).notNull(),
  email: varchar("email", { length: 255 }).notNull(),
  phone: varchar("phone", { length: 50 }),
  resultEmail: varchar("result_email", { length: 255 }).notNull(),
  message: text("message"),
  createdAt: timestamp("created_at").defaultNow(),
});

export const brochureDownload = mysqlTable("brochure_download", {
  id: commonId(), // Changed from serial
  email: varchar("email", { length: 255 }).notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});

export const customQuote = mysqlTable("custom_quote", {
  id: commonId(), // Changed from serial
  fullName: varchar("full_name", { length: 255 }).notNull(),
  email: varchar("email", { length: 255 }).notNull(),
  phone: varchar("phone", { length: 50 }),
  services: json("services"),
  message: text("message"),
  createdAt: timestamp("created_at").defaultNow(),
});

export const diagnosticMaroc2030 = mysqlTable("diagnostic_maroc_2030", {
  id: commonId(), // Changed from serial
  firstName: varchar("first_name", { length: 100 }).notNull(),
  lastName: varchar("last_name", { length: 100 }).notNull(),
  email: varchar("email", { length: 255 }).notNull(),
  phone: varchar("phone", { length: 50 }).notNull(),
  projectDate: varchar("project_date", { length: 50 }).notNull(),
  situation: varchar("situation", { length: 50 }).notNull(),
  familyStatus: varchar("family_status", { length: 50 }).notNull(),
  childrenCount: varchar("children_count", { length: 50 }),
  childrenAges: varchar("children_ages", { length: 255 }),
  motivations: json("motivations").notNull(),
  mainSkill: varchar("main_skill", { length: 255 }).notNull(),
  expYears: varchar("exp_years", { length: 50 }).notNull(),
  revenueGen: varchar("revenue_gen", { length: 50 }).notNull(),
  budget: varchar("budget", { length: 50 }).notNull(),
  runway: varchar("runway", { length: 50 }).notNull(),
  path: varchar("path", { length: 50 }).notNull(),
  network: varchar("network", { length: 50 }).notNull(),
  message: text("message"),
  callOptIn: varchar("call_opt_in", { length: 10 }).notNull(),
  availabilities: json("availabilities"),
  score: int("score"),
  resultLabel: varchar("result_label", { length: 100 }),
  createdAt: timestamp("created_at").defaultNow(),
});

export const contactForm = mysqlTable("contact_form", {
  id: commonId(),
  firstName: varchar("first_name", { length: 100 }).notNull(),
  lastName: varchar("last_name", { length: 100 }).notNull(),
  email: varchar("email", { length: 255 }).notNull(),
  phone: varchar("phone", { length: 50 }),
  message: text("message"),
  sourcePage: varchar("source_page", { length: 500 }),
  createdAt: timestamp("created_at").defaultNow(),
});

export const guideDownload = mysqlTable("guide_download", {
  id: commonId(),
  firstName: varchar("first_name", { length: 100 }).notNull(),
  email: varchar("email", { length: 255 }).notNull(),
  guideName: varchar("guide_name", { length: 255 }),
  source: varchar("source", { length: 255 }),
  createdAt: timestamp("created_at").defaultNow(),
});
