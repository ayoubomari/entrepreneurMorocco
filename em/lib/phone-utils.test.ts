import { describe, it, expect } from "vitest";
import { parsePhoneToE164 } from "@/lib/phone-utils";

describe("Phone Helper - parsePhoneToE164", () => {
  // --- Standard MA Local Formats ---

  it("should convert valid MA local number (06...) to E.164", () => {
    // Standard mobile
    const result = parsePhoneToE164("0661234567");
    expect(result).toBe("+212661234567");
  });

  it("should convert valid MA local number (07...) to E.164", () => {
    // Newer mobile prefix
    const result = parsePhoneToE164("0701234567");
    expect(result).toBe("+212701234567");
  });

  it("should convert MA number without leading zero (6...)", () => {
    // User types "612..." instead of "0612..."
    const result = parsePhoneToE164("661234567");
    expect(result).toBe("+212661234567");
  });

  // --- Explicit E.164 Formats ---

  it("should handle number that is already in E.164 format (MA)", () => {
    const result = parsePhoneToE164("+212661234567");
    expect(result).toBe("+212661234567");
  });

  it("should handle number that is already in E.164 format (France)", () => {
    const result = parsePhoneToE164("+33612345678");
    expect(result).toBe("+33612345678");
  });

  // --- Smart Correction (Missing +) ---

  it("should detect International code without '+' (33... -> +33...)", () => {
    // Logic: User forgot '+', helper tries adding it, sees it's valid FR number
    const result = parsePhoneToE164("33612345678");
    expect(result).toBe("+33612345678");
  });

  it("should detect International code without '+' (1... USA)", () => {
    // Logic: User types "1 555...", helper adds '+' -> "+1 555..."
    const result = parsePhoneToE164("12025550123");
    expect(result).toBe("+12025550123");
  });

  // --- Formatting & Whitespace ---

  it("should handle input with spaces and dashes", () => {
    const result = parsePhoneToE164("06 61 23-45 67");
    expect(result).toBe("+212661234567");
  });

  it("should handle input with parentheses", () => {
    const result = parsePhoneToE164("(06) 61 23 45 67");
    expect(result).toBe("+212661234567");
  });

  // --- Invalid Cases ---

  it("should return null for empty input", () => {
    expect(parsePhoneToE164("")).toBeNull();
  });

  it("should return null for whitespace only", () => {
    expect(parsePhoneToE164("   ")).toBeNull();
  });

  it("should return null for null/undefined input", () => {
    // @ts-ignore - simulating runtime JS usage or API payloads
    expect(parsePhoneToE164(null)).toBeNull();
    // @ts-ignore
    expect(parsePhoneToE164(undefined)).toBeNull();
  });

  it("should return null for number that is too short", () => {
    expect(parsePhoneToE164("123")).toBeNull();
  });

  it("should return null for number that is too long", () => {
    // Exceeding standard length
    expect(parsePhoneToE164("061234567890123456")).toBeNull();
  });

  it("should return null for invalid characters (letters)", () => {
    expect(parsePhoneToE164("hello")).toBeNull();
  });

  // --- Edge Cases ---

  it("should prefer existing '+' validity over default country", () => {
    // If we have +33 (France), we should NOT try to force it into MA
    const result = parsePhoneToE164("+33612345678", "MA");
    expect(result).toBe("+33612345678");
  });
});
