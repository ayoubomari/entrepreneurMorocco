-- 1. brochure_download
ALTER TABLE "brochure_download" ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Enable insert for anon" ON "brochure_download"
AS PERMISSIVE FOR INSERT
TO anon
WITH CHECK (true);

-- 2. contact_form
ALTER TABLE "contact_form" ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Enable insert for anon" ON "contact_form"
AS PERMISSIVE FOR INSERT
TO anon
WITH CHECK (true);

-- 3. custom_quote
ALTER TABLE "custom_quote" ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Enable insert for anon" ON "custom_quote"
AS PERMISSIVE FOR INSERT
TO anon
WITH CHECK (true);

-- 4. diagnostic_maroc_2030
ALTER TABLE "diagnostic_maroc_2030" ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Enable insert for anon" ON "diagnostic_maroc_2030"
AS PERMISSIVE FOR INSERT
TO anon
WITH CHECK (true);

-- 5. guide_download
ALTER TABLE "guide_download" ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Enable insert for anon" ON "guide_download"
AS PERMISSIVE FOR INSERT
TO anon
WITH CHECK (true);

-- 6. mini_test
ALTER TABLE "mini_test" ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Enable insert for anon" ON "mini_test"
AS PERMISSIVE FOR INSERT
TO anon
WITH CHECK (true);

-- 7. plan_selection
ALTER TABLE "plan_selection" ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Enable insert for anon" ON "plan_selection"
AS PERMISSIVE FOR INSERT
TO anon
WITH CHECK (true);

-- 8. profile_quiz
ALTER TABLE "profile_quiz" ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Enable insert for anon" ON "profile_quiz"
AS PERMISSIVE FOR INSERT
TO anon
WITH CHECK (true);