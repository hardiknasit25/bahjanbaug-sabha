import { useState, useEffect } from "react";
import { Download, X } from "lucide-react";
import { Button } from "./ui/button";
import { isPWAInstalled } from "../utils/pwa";

export const InstallPWA = () => {
  const [showInstallPrompt, setShowInstallPrompt] = useState(false);
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);

  useEffect(() => {
    // Check if PWA is already installed
    const isInstalled = isPWAInstalled();
    console.log("PWA installed check:", isInstalled);

    if (isInstalled) {
      console.log("PWA already installed, not showing prompt");
      return;
    }

    // Listen for beforeinstallprompt event
    const handleBeforeInstallPrompt = (e: Event) => {
      console.log("beforeinstallprompt event fired!");
      e.preventDefault();
      setDeferredPrompt(e);
      setShowInstallPrompt(true);
    };

    // Listen for appinstalled event
    const handleAppInstalled = () => {
      console.log("PWA was installed");
      setShowInstallPrompt(false);
      setDeferredPrompt(null);
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
    window.addEventListener("appinstalled", handleAppInstalled);

    console.log("InstallPWA component mounted, listening for install event");

    return () => {
      window.removeEventListener(
        "beforeinstallprompt",
        handleBeforeInstallPrompt
      );
      window.removeEventListener("appinstalled", handleAppInstalled);
    };
  }, []);

  const handleDismiss = () => {
    setShowInstallPrompt(false);
  };

  const handleInstallClick = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      if (outcome === "accepted") {
        console.log("User accepted the install prompt");
      } else {
        console.log("User dismissed the install prompt");
      }
      setDeferredPrompt(null);
      setShowInstallPrompt(false);
    }
  };

  if (!showInstallPrompt) {
    return null;
  }

  return (
    <div className="fixed bottom-24 left-3 right-3 z-50 bg-primaryColor rounded-lg shadow-lg p-4 animate-in slide-in-from-bottom-2 md:bottom-4">
      <div className="flex justify-between items-center gap-2">
        <div className="space-y-1">
          <h3 className="font-semibold text-sm text-white">
            Install Bhajanbaug Sabha App
          </h3>
          <p className="text-xs text-textLightColor font-normal">
            Add to home screen for quick access
          </p>
        </div>
        <div className="flex items-center">
          <Button
            variant="default"
            onClick={handleInstallClick}
            size="sm"
            className="bg-white hover:bg-white text-textColor"
          >
            Install
          </Button>
          <Button
            onClick={handleDismiss}
            variant="default"
            size="sm"
            className="text-white bg-transparent"
          >
            <X className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};
