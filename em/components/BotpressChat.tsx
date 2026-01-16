import Script from "next/script";

export default function BotpressChat() {
  return (
    <>
      <Script src="https://cdn.botpress.cloud/webchat/v3.5/inject.js" />

      <Script
        src="https://files.bpcontent.cloud/2026/01/15/16/20260115160015-Q3KUXXOF.js"
        strategy="lazyOnload"
        defer
      />
    </>
  );
}
