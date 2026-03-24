"use client";

import Script from "next/script";
import { useState } from "react";
import "./botpress-chat.css";

export default function BotpressChat() {
  const [libraryLoaded, setLibraryLoaded] = useState(false);

  return (
    <>
      <Script
        src="https://cdn.botpress.cloud/webchat/v3.5/inject.js"
        strategy="lazyOnload"
        onLoad={() => {
          setLibraryLoaded(true);
        }}
      />

      {libraryLoaded && (
        <Script
          src="https://files.bpcontent.cloud/2026/01/15/16/20260115160015-Q3KUXXOF.js"
          strategy="lazyOnload"
        />
      )}
    </>
  );
}
