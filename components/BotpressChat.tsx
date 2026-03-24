"use client";

import Script from "next/script";
import { useState } from "react";
import "./botpress-chat.css";

export default function BotpressChat() {
  const [libraryLoaded, setLibraryLoaded] = useState(false);

  return (
    <>
      <Script
        src="/scripts/botpress/inject.js"
        strategy="lazyOnload"
        onLoad={() => {
          setLibraryLoaded(true);
        }}
      />

      {libraryLoaded && (
        <Script
          src="/scripts/botpress/config.js"
          strategy="lazyOnload"
        />
      )}
    </>
  );
}
