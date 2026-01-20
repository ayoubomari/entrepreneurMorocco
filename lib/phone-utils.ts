import { parsePhoneNumberFromString, CountryCode } from "libphonenumber-js";

/**
 * Smartly parses a phone number to E.164.
 * 1. Checks exact match (already has +).
 * 2. Tries adding a + (user forgot it).
 * 3. Falls back to default country (MA) logic.
 */
export function parsePhoneToE164(
  phone: string | null | undefined,
  defaultCountry: CountryCode = "MA",
): string | null {
  if (!phone || phone.trim() === "") return null;

  const raw = phone.trim();

  // 1. If it starts with +, validate directly
  if (raw.startsWith("+")) {
    const parsed = parsePhoneNumberFromString(raw);
    return parsed?.isValid() ? parsed.number : null;
  }

  // 2. Try adding a '+' (User entered "33612345678" instead of "+33...")
  const withPlus = `+${raw}`;
  const parsedWithPlus = parsePhoneNumberFromString(withPlus);
  if (parsedWithPlus?.isValid()) {
    return parsedWithPlus.number;
  }

  // 3. Fallback: User entered local format (e.g. "0612345678"), assume defaultCountry (MA)
  const parsedLocal = parsePhoneNumberFromString(raw, defaultCountry);
  return parsedLocal?.isValid() ? parsedLocal.number : null;
}
