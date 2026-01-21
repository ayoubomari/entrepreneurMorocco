import {
  pgTable,
  uuid,
  text,
  timestamp,
  jsonb,
  integer,
} from "drizzle-orm/pg-core";

// Helper function to define the standard ID column
// Matches the UUID style from your Supabase context example
const commonId = () => uuid("id").defaultRandom().primaryKey();

export const profileQuiz = pgTable("profile_quiz", {
  id: commonId(),
  profile: text("profile").notNull(),
  stage: text("stage").notNull(),
  needs: jsonb("needs"),
  email: text("email").notNull(),
  phone: text("phone"),
  createdAt: timestamp("created_at", { withTimezone: true, mode: "date" })
    .defaultNow()
    .notNull(),
});

export const miniTest = pgTable("mini_test", {
  id: commonId(),
  project: text("project").notNull(),
  obstacles: jsonb("obstacles"),
  email: text("email").notNull(),
  createdAt: timestamp("created_at", { withTimezone: true, mode: "date" })
    .defaultNow()
    .notNull(),
});

export const planSelection = pgTable("plan_selection", {
  id: commonId(),
  selectedPlan: text("selected_plan").notNull(),
  fullName: text("full_name").notNull(),
  email: text("email").notNull(),
  phone: text("phone"),
  resultEmail: text("result_email").notNull(),
  message: text("message"),
  createdAt: timestamp("created_at", { withTimezone: true, mode: "date" })
    .defaultNow()
    .notNull(),
});

export const brochureDownload = pgTable("brochure_download", {
  id: commonId(),
  email: text("email").notNull(),
  createdAt: timestamp("created_at", { withTimezone: true, mode: "date" })
    .defaultNow()
    .notNull(),
});

export const customQuote = pgTable("custom_quote", {
  id: commonId(),
  fullName: text("full_name").notNull(),
  email: text("email").notNull(),
  phone: text("phone"),
  services: jsonb("services"),
  message: text("message"),
  createdAt: timestamp("created_at", { withTimezone: true, mode: "date" })
    .defaultNow()
    .notNull(),
});

export const diagnosticMaroc2030 = pgTable("diagnostic_maroc_2030", {
  id: commonId(),
  firstName: text("first_name").notNull(),
  lastName: text("last_name").notNull(),
  email: text("email").notNull(),
  phone: text("phone").notNull(),
  projectDate: text("project_date").notNull(),
  situation: text("situation").notNull(),
  familyStatus: text("family_status").notNull(),
  childrenCount: text("children_count"),
  childrenAges: text("children_ages"),
  motivations: jsonb("motivations").notNull(),
  mainSkill: text("main_skill").notNull(),
  expYears: text("exp_years").notNull(),
  revenueGen: text("revenue_gen").notNull(),
  budget: text("budget").notNull(),
  runway: text("runway").notNull(),
  path: text("path").notNull(),
  network: text("network").notNull(),
  message: text("message"),
  callOptIn: text("call_opt_in").notNull(),
  availabilities: jsonb("availabilities"),
  score: integer("score"),
  resultLabel: text("result_label"),
  createdAt: timestamp("created_at", { withTimezone: true, mode: "date" })
    .defaultNow()
    .notNull(),
});

export const contactForm = pgTable("contact_form", {
  id: commonId(),
  firstName: text("first_name").notNull(),
  lastName: text("last_name").notNull(),
  email: text("email").notNull(),
  phone: text("phone"),
  message: text("message"),
  sourcePage: text("source_page"),
  createdAt: timestamp("created_at", { withTimezone: true, mode: "date" })
    .defaultNow()
    .notNull(),
});

export const guideDownload = pgTable("guide_download", {
  id: commonId(),
  firstName: text("first_name").notNull(),
  email: text("email").notNull(),
  guideName: text("guide_name"),
  source: text("source"),
  createdAt: timestamp("created_at", { withTimezone: true, mode: "date" })
    .defaultNow()
    .notNull(),
});
