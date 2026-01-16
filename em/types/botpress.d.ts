// types/botpress.d.ts
interface BotpressConfig {
  botId: string;
  clientId: string;
  configuration?: {
    botName?: string;
    botAvatar?: string;
    botDescription?: string;
    website?: object;
    email?: object;
    phone?: object;
    termsOfService?: object;
    privacyPolicy?: object;
    variant?: "solid" | "soft";
    themeMode?: "light" | "dark";
    fontFamily?: string;
  };
}

interface Botpress {
  init: (config: BotpressConfig) => void;
  open: () => void;
  close: () => void;
  toggle: () => void;
  on: (event: string, callback: () => void) => void;
  sendEvent: (event: any) => void;
  sendPayload: (payload: any) => void;
  mergeConfig: (config: Partial<BotpressConfig>) => void;
}

interface Window {
  botpress: Botpress;
}
