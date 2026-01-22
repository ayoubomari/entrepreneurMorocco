"use client";

import Script from "next/script";
import { useState } from "react";

export default function BotpressChat() {
  const [libraryLoaded, setLibraryLoaded] = useState(false);

  return (
    <>
      {/* 
        1. CHANGE: strategy="lazyOnload" 
        This prevents the 239KB file from blocking the initial page load.
        It will load during browser idle time.
      */}
      <Script
        src="https://cdn.botpress.cloud/webchat/v3.5/inject.js"
        strategy="lazyOnload"
        onLoad={() => {
          setLibraryLoaded(true);
        }}
      />

      {/* 2. Load configuration only after inject.js is ready */}
      {libraryLoaded && (
        <Script
          src="https://files.bpcontent.cloud/2026/01/15/16/20260115160015-Q3KUXXOF.js"
          strategy="lazyOnload" // Use lazyOnload here as well
        />
      )}
    </>
  );
}
