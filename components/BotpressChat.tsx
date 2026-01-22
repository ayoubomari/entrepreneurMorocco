"use client";

import Script from "next/script";
import { useState } from "react";

export default function BotpressChat() {
  const [libraryLoaded, setLibraryLoaded] = useState(false);

  return (
    <>
      {/* 1. Load the main Botpress Inject library first */}
      <Script
        src="https://cdn.botpress.cloud/webchat/v3.5/inject.js"
        onLoad={() => {
          setLibraryLoaded(true);
        }}
      />

      {/* 2. Only load the configuration script once the library is ready */}
      {libraryLoaded && (
        <Script
          src="https://files.bpcontent.cloud/2026/01/15/16/20260115160015-Q3KUXXOF.js"
          strategy="afterInteractive"
        />
      )}
    </>
  );
}
