// @vitest-environment node
/**
 * E2E API Route Tests
 *
 * These tests call the actual Next.js API route handlers directly,
 * connecting to the real MySQL database configured in DATABASE_URL.
 * Run with: npm test
 */

import { describe, it, expect, afterAll } from "vitest";
import { POST as brochurePost } from "@/app/api/brochure-download/route";
import { POST as contactPost } from "@/app/api/contact-form/route";
import { POST as guidePost } from "@/app/api/guide-download/route";
import { POST as miniTestPost } from "@/app/api/mini-test/route";
import { POST as planPost } from "@/app/api/plan-selection/route";
import { POST as quotePost } from "@/app/api/custom-quote/route";
import { POST as diagnosticPost } from "@/app/api/diagnostic-maroc-2030/route";
import { POST as profilePost } from "@/app/api/profile-quiz/route";
import { db } from "@/db";
import {
  brochureDownload,
  contactForm,
  guideDownload,
  miniTest,
  planSelection,
  customQuote,
  diagnosticMaroc2030,
  profileQuiz,
} from "@/db/schema";
import { desc } from "drizzle-orm";

function makeRequest(body: unknown): Request {
  return new Request("http://localhost/api/test", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
}

// Cleanup inserted test rows after all tests
afterAll(async () => {
  await db.delete(brochureDownload);
  await db.delete(contactForm);
  await db.delete(guideDownload);
  await db.delete(miniTest);
  await db.delete(planSelection);
  await db.delete(customQuote);
  await db.delete(diagnosticMaroc2030);
  await db.delete(profileQuiz);
});

describe("POST /api/brochure-download", () => {
  it("inserts a brochure download record and returns 201", async () => {
    const req = makeRequest({ email: "test-brochure@example.com" });
    const res = await brochurePost(req);
    expect(res.status).toBe(201);

    const rows = await db.select().from(brochureDownload).orderBy(desc(brochureDownload.id)).limit(1);
    expect(rows[0].email).toBe("test-brochure@example.com");
  });

  it("returns 400 for invalid email", async () => {
    const req = makeRequest({ email: "not-an-email" });
    const res = await brochurePost(req);
    expect(res.status).toBe(400);
  });
});

describe("POST /api/contact-form", () => {
  it("inserts a contact form record and returns 201", async () => {
    const payload = {
      firstName: "Jean",
      lastName: "Dupont",
      email: "test-contact@example.com",
      phone: "+33612345678",
      message: "Bonjour, j'ai une question.",
      sourcePage: "https://example.com/contact",
    };
    const req = makeRequest(payload);
    const res = await contactPost(req);
    expect(res.status).toBe(201);

    const rows = await db.select().from(contactForm).orderBy(desc(contactForm.id)).limit(1);
    expect(rows[0].email).toBe("test-contact@example.com");
    expect(rows[0].firstName).toBe("Jean");
  });

  it("returns 400 for missing required fields", async () => {
    const req = makeRequest({ email: "test@example.com" });
    const res = await contactPost(req);
    expect(res.status).toBe(400);
  });
});

describe("POST /api/guide-download", () => {
  it("inserts a guide download record and returns 201", async () => {
    const payload = {
      firstName: "Marie",
      email: "test-guide@example.com",
      guideName: "7 Erreurs à Éviter",
      source: "Site Web",
    };
    const req = makeRequest(payload);
    const res = await guidePost(req);
    expect(res.status).toBe(201);

    const rows = await db.select().from(guideDownload).orderBy(desc(guideDownload.id)).limit(1);
    expect(rows[0].email).toBe("test-guide@example.com");
    expect(rows[0].firstName).toBe("Marie");
  });

  it("returns 400 for missing firstName", async () => {
    const req = makeRequest({ email: "test@example.com" });
    const res = await guidePost(req);
    expect(res.status).toBe(400);
  });
});

describe("POST /api/mini-test", () => {
  it("inserts a mini-test record and returns 201", async () => {
    const payload = {
      project: "create",
      obstacles: ["tax", "info"],
      email: "test-mini@example.com",
    };
    const req = makeRequest(payload);
    const res = await miniTestPost(req);
    expect(res.status).toBe(201);

    const rows = await db.select().from(miniTest).orderBy(desc(miniTest.id)).limit(1);
    expect(rows[0].email).toBe("test-mini@example.com");
    expect(rows[0].project).toBe("create");
  });

  it("returns 400 for missing project", async () => {
    const req = makeRequest({ email: "test@example.com" });
    const res = await miniTestPost(req);
    expect(res.status).toBe(400);
  });
});

describe("POST /api/plan-selection", () => {
  it("inserts a plan selection record and returns 201", async () => {
    const payload = {
      selectedPlan: "starter",
      fullName: "Ahmed Benali",
      email: "test-plan@example.com",
      phone: "+212612345678",
      resultEmail: "result@example.com",
      message: "Je suis intéressé.",
    };
    const req = makeRequest(payload);
    const res = await planPost(req);
    expect(res.status).toBe(201);

    const rows = await db.select().from(planSelection).orderBy(desc(planSelection.id)).limit(1);
    expect(rows[0].email).toBe("test-plan@example.com");
    expect(rows[0].selectedPlan).toBe("starter");
  });

  it("returns 400 for missing resultEmail", async () => {
    const req = makeRequest({ selectedPlan: "starter", fullName: "Test", email: "t@t.com" });
    const res = await planPost(req);
    expect(res.status).toBe(400);
  });
});

describe("POST /api/custom-quote", () => {
  it("inserts a custom quote record and returns 201", async () => {
    const payload = {
      fullName: "Fatima Zahra",
      email: "test-quote@example.com",
      phone: null,
      services: ["site", "seo"],
      message: "Je voudrais un devis.",
    };
    const req = makeRequest(payload);
    const res = await quotePost(req);
    expect(res.status).toBe(201);

    const rows = await db.select().from(customQuote).orderBy(desc(customQuote.id)).limit(1);
    expect(rows[0].email).toBe("test-quote@example.com");
  });

  it("returns 400 for missing fullName", async () => {
    const req = makeRequest({ email: "t@t.com" });
    const res = await quotePost(req);
    expect(res.status).toBe(400);
  });
});

describe("POST /api/diagnostic-maroc-2030", () => {
  it("inserts a diagnostic record and returns 201", async () => {
    const payload = {
      firstName: "Karim",
      lastName: "El Idrissi",
      email: "test-diag@example.com",
      phone: "+212661234567",
      projectDate: "3_6",
      situation: "entrepreneur",
      familyStatus: "seul",
      motivations: ["Créer ou développer un business"],
      mainSkill: "Développement web",
      expYears: "plus_5",
      revenueGen: "regulier",
      budget: "15_30",
      runway: "6_12",
      path: "creation",
      network: "contacts",
      callOptIn: "non",
      availabilities: [],
      score: 75,
      resultLabel: "Projet Solide",
    };
    const req = makeRequest(payload);
    const res = await diagnosticPost(req);
    expect(res.status).toBe(201);

    const rows = await db.select().from(diagnosticMaroc2030).orderBy(desc(diagnosticMaroc2030.id)).limit(1);
    expect(rows[0].email).toBe("test-diag@example.com");
    expect(rows[0].score).toBe(75);
  });

  it("returns 400 for missing required fields", async () => {
    const req = makeRequest({ firstName: "Test", email: "t@t.com" });
    const res = await diagnosticPost(req);
    expect(res.status).toBe(400);
  });
});

describe("POST /api/profile-quiz", () => {
  it("inserts a profile quiz record and returns 201", async () => {
    const payload = {
      profile: "mre",
      stage: "prep",
      needs: ["creation", "tax"],
      email: "test-quiz@example.com",
      phone: "+33698765432",
    };
    const req = makeRequest(payload);
    const res = await profilePost(req);
    expect(res.status).toBe(201);

    const rows = await db.select().from(profileQuiz).orderBy(desc(profileQuiz.id)).limit(1);
    expect(rows[0].email).toBe("test-quiz@example.com");
    expect(rows[0].profile).toBe("mre");
  });

  it("returns 400 for missing profile", async () => {
    const req = makeRequest({ stage: "prep", email: "t@t.com" });
    const res = await profilePost(req);
    expect(res.status).toBe(400);
  });
});
