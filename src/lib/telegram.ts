// Telegram Mini App (TMA) SDK Interface & Helpers

export interface TelegramUser {
  id: number;
  first_name: string;
  last_name?: string;
  username?: string;
  language_code?: string;
  is_premium?: boolean;
  photo_url?: string;
}

export interface TelegramWebApp {
  initData: string;
  initDataUnsafe: {
    query_id?: string;
    user?: TelegramUser;
    auth_date?: number;
    hash?: string;
    start_param?: string;
  };
  version: string;
  platform: string;
  colorScheme: "light" | "dark";
  themeParams: {
    bg_color?: string;
    text_color?: string;
    hint_color?: string;
    link_color?: string;
    button_color?: string;
    button_text_color?: string;
    secondary_bg_color?: string;
    header_bg_color?: string;
    bottom_bar_bg_color?: string;
    accent_text_color?: string;
    section_bg_color?: string;
    section_header_text_color?: string;
  };
  isExpanded: boolean;
  viewportHeight: number;
  viewportStableHeight: number;
  headerColor: string;
  backgroundColor: string;
  BackButton: {
    isVisible: boolean;
    onClick(callback: () => void): void;
    offClick(callback: () => void): void;
    show(): void;
    hide(): void;
  };
  MainButton: {
    text: string;
    color: string;
    textColor: string;
    isVisible: boolean;
    isActive: boolean;
    isProgressVisible: boolean;
    setText(text: string): void;
    onClick(callback: () => void): void;
    offClick(callback: () => void): void;
    show(): void;
    hide(): void;
    enable(): void;
    disable(): void;
    showProgress(leaveActive?: boolean): void;
    hideProgress(): void;
    setParams(params: {
      text?: string;
      color?: string;
      text_color?: string;
      is_active?: boolean;
      is_visible?: boolean;
    }): void;
  };
  HapticFeedback: {
    impactOccurred(style: "light" | "medium" | "heavy" | "rigid" | "soft"): void;
    notificationOccurred(type: "error" | "success" | "warning"): void;
    selectionChanged(): void;
  };
  ready(): void;
  expand(): void;
  close(): void;
  showScanQrPopup(params: { text?: string }, callback?: (data: string) => boolean | void): void;
  closeScanQrPopup(): void;
  openLink(url: string, options?: { try_instant_view?: boolean }): void;
  openTelegramLink(url: string): void;
  enableClosingConfirmation(): void;
  disableClosingConfirmation(): void;
  onEvent(eventType: "themeChanged" | "viewportChanged" | "mainButtonClicked" | "backButtonClicked", eventHandler: () => void): void;
  offEvent(eventType: "themeChanged" | "viewportChanged" | "mainButtonClicked" | "backButtonClicked", eventHandler: () => void): void;
  sendData(data: string): void;
}

declare global {
  interface Window {
    Telegram?: {
      WebApp: TelegramWebApp;
    };
  }
}

/**
 * Returns the Telegram WebApp instance if available in window
 */
export function getTelegramWebApp(): TelegramWebApp | null {
  if (typeof window !== "undefined" && window.Telegram?.WebApp) {
    return window.Telegram.WebApp;
  }
  return null;
}

/**
 * Determines whether the application is running inside a genuine Telegram Mini App container
 */
export function isTelegramMiniApp(): boolean {
  const tg = getTelegramWebApp();
  if (!tg) return false;
  // Has initData or platform indicates TMA client
  return Boolean(tg.initData && tg.initData.length > 0) || Boolean(tg.initDataUnsafe?.user?.id);
}

/**
 * Returns the Telegram user object if running inside Telegram
 */
export function getTelegramUser(): TelegramUser | null {
  const tg = getTelegramWebApp();
  if (tg?.initDataUnsafe?.user) {
    return tg.initDataUnsafe.user;
  }
  return null;
}

/**
 * Initializes the Telegram Mini App environment:
 * - Expands the viewport
 * - Signals ready to Telegram
 * - Enables closing confirmation
 * - Synchronizes theme colors
 */
export function initTelegramMiniApp(onThemeChange?: (scheme: "light" | "dark") => void): void {
  const tg = getTelegramWebApp();
  if (!tg) return;

  try {
    tg.ready();
    tg.expand();
    tg.enableClosingConfirmation();

    if (tg.colorScheme && onThemeChange) {
      onThemeChange(tg.colorScheme);
    }

    tg.onEvent("themeChanged", () => {
      if (tg.colorScheme && onThemeChange) {
        onThemeChange(tg.colorScheme);
      }
    });
  } catch (err) {
    console.warn("Telegram WebApp initialization error:", err);
  }
}

/**
 * Safe Haptic Feedback with web fallbacks
 */
export const telegramHaptic = {
  impact: (style: "light" | "medium" | "heavy" | "rigid" | "soft" = "light") => {
    const tg = getTelegramWebApp();
    if (tg?.HapticFeedback?.impactOccurred) {
      tg.HapticFeedback.impactOccurred(style);
    } else if (typeof navigator !== "undefined" && "vibrate" in navigator) {
      const duration = style === "heavy" ? 40 : style === "medium" ? 25 : 12;
      navigator.vibrate?.(duration);
    }
  },
  notification: (type: "error" | "success" | "warning") => {
    const tg = getTelegramWebApp();
    if (tg?.HapticFeedback?.notificationOccurred) {
      tg.HapticFeedback.notificationOccurred(type);
    } else if (typeof navigator !== "undefined" && "vibrate" in navigator) {
      if (type === "success") navigator.vibrate?.([15, 30, 15]);
      else if (type === "error") navigator.vibrate?.([40, 40, 40]);
      else navigator.vibrate?.([20, 20]);
    }
  },
  selection: () => {
    const tg = getTelegramWebApp();
    if (tg?.HapticFeedback?.selectionChanged) {
      tg.HapticFeedback.selectionChanged();
    } else if (typeof navigator !== "undefined" && "vibrate" in navigator) {
      navigator.vibrate?.(8);
    }
  }
};

let currentBackHandler: (() => void) | null = null;

/**
 * Configures the Telegram Native BackButton
 */
export function configureTelegramBackButton(visible: boolean, onClick?: () => void): void {
  const tg = getTelegramWebApp();
  if (!tg?.BackButton) return;

  try {
    if (currentBackHandler) {
      tg.BackButton.offClick(currentBackHandler);
      currentBackHandler = null;
    }

    if (visible && onClick) {
      currentBackHandler = onClick;
      tg.BackButton.onClick(currentBackHandler);
      tg.BackButton.show();
    } else {
      tg.BackButton.hide();
    }
  } catch (err) {
    console.warn("Telegram BackButton config error:", err);
  }
}

let currentMainHandler: (() => void) | null = null;

/**
 * Configures the Telegram Native MainButton
 */
export function configureTelegramMainButton(config: {
  text?: string;
  isVisible?: boolean;
  onClick?: () => void;
  isProgress?: boolean;
  color?: string;
  textColor?: string;
}): void {
  const tg = getTelegramWebApp();
  if (!tg?.MainButton) return;

  try {
    if (currentMainHandler) {
      tg.MainButton.offClick(currentMainHandler);
      currentMainHandler = null;
    }

    if (config.text) {
      tg.MainButton.setText(config.text);
    }

    if (config.color || config.textColor) {
      tg.MainButton.setParams({
        color: config.color || "#173124",
        text_color: config.textColor || "#ffffff"
      });
    }

    if (config.isProgress) {
      tg.MainButton.showProgress(true);
    } else {
      tg.MainButton.hideProgress();
    }

    if (config.isVisible) {
      if (config.onClick) {
        currentMainHandler = config.onClick;
        tg.MainButton.onClick(currentMainHandler);
      }
      tg.MainButton.enable();
      tg.MainButton.show();
    } else {
      tg.MainButton.hide();
    }
  } catch (err) {
    console.warn("Telegram MainButton config error:", err);
  }
}

/**
 * Shares diagnostic text and link via Telegram's native share flow
 */
export function shareToTelegram(text: string, shareUrl?: string): void {
  const tg = getTelegramWebApp();
  const url = shareUrl || (typeof window !== "undefined" ? window.location.href : "https://t.me/AgriScanAIBot");
  const encodedText = encodeURIComponent(text);
  const encodedUrl = encodeURIComponent(url);
  const telegramShareLink = `https://t.me/share/url?url=${encodedUrl}&text=${encodedText}`;

  if (tg?.openTelegramLink) {
    tg.openTelegramLink(telegramShareLink);
  } else if (typeof window !== "undefined") {
    window.open(telegramShareLink, "_blank");
  }
}

/**
 * Triggers Telegram's native QR Scanner popup
 */
export function scanQrCodeWithTelegram(onResult: (text: string) => void, promptText = "Scan Specimen or Crop QR"): void {
  const tg = getTelegramWebApp();
  if (tg?.showScanQrPopup) {
    tg.showScanQrPopup({ text: promptText }, (data: string) => {
      onResult(data);
      tg.closeScanQrPopup();
      return true;
    });
  } else {
    // Fallback: ask for input if scanner not available
    const manualCode = prompt("Enter Plant Specimen ID or QR code text:");
    if (manualCode) onResult(manualCode);
  }
}

/**
 * Opens a Telegram chat with the AgriScan bot or agronomist
 */
export function openTelegramChat(botUsername = "AgriScanAIBot"): void {
  const tg = getTelegramWebApp();
  const link = `https://t.me/${botUsername.replace("@", "")}`;
  if (tg?.openTelegramLink) {
    tg.openTelegramLink(link);
  } else if (typeof window !== "undefined") {
    window.open(link, "_blank");
  }
}
