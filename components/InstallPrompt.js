'use client';

import { useEffect, useState } from 'react';

export default function InstallPrompt() {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onBeforeInstallPrompt = (event) => {
      event.preventDefault();
      setDeferredPrompt(event);
      setVisible(true);
    };

    window.addEventListener('beforeinstallprompt', onBeforeInstallPrompt);
    return () => window.removeEventListener('beforeinstallprompt', onBeforeInstallPrompt);
  }, []);

  const install = async () => {
    if (!deferredPrompt) return;
    deferredPrompt.prompt();
    await deferredPrompt.userChoice;
    setVisible(false);
    setDeferredPrompt(null);
  };

  if (!visible) return null;

  return (
    <div className="install-banner">
      <div className="row">
        <div>
          <strong>Install MT-Sub</strong>
          <div style={{ opacity: .82, fontSize: '.86rem', marginTop: '.2rem' }}>
            Add MT-Sub to your phone for a faster app-like experience.
          </div>
        </div>
        <button className="btn btn-primary" onClick={install}>Install</button>
      </div>
    </div>
  );
}
