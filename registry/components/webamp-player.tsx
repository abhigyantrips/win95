'use client';

import Webamp from 'webamp';

import * as React from 'react';

export interface WebampTrack {
  metaData: {
    artist: string;
    title: string;
    album?: string;
  };
  url: string;
  duration: number;
}

export interface WebampPlayerProps {
  tracks: WebampTrack[];
  onClose?: () => void;
  onMinimize?: () => void;
  onFocus?: () => void;
  initialZIndex?: number;
  className?: string;
}

export function WebampPlayer({
  tracks,
  onClose,
  onMinimize,
  onFocus,
  initialZIndex = 999,
  className,
}: WebampPlayerProps) {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const webampRef = React.useRef<Webamp | null>(null);
  const [isInitialized, setIsInitialized] = React.useState(false);

  // Initialize Webamp
  React.useEffect(() => {
    if (!Webamp.browserIsSupported() || isInitialized) {
      return;
    }

    const options = {
      initialTracks: tracks,
      zIndex: initialZIndex,
    };

    const webamp = new Webamp(options);
    webampRef.current = webamp;

    // Handle close
    webamp.onClose(() => {
      onClose?.();
      webamp.dispose();
      webampRef.current = null;
    });

    // Handle minimize
    webamp.onMinimize(() => {
      const webampElement = document.querySelector('#webamp');
      if (webampElement instanceof HTMLElement) {
        webampElement.style.opacity = '0';
        webampElement.style.pointerEvents = 'none';
        webampElement.style.zIndex = '-1';
      }
      onMinimize?.();
    });

    // Render
    if (containerRef.current) {
      webamp.renderWhenReady(containerRef.current);
      setIsInitialized(true);
    }

    return () => {
      if (webampRef.current) {
        webampRef.current.dispose();
        webampRef.current = null;
      }
    };
  }, [tracks, initialZIndex, isInitialized, onClose, onMinimize]);

  // Handle focus events
  React.useEffect(() => {
    const handleFocus = (event: MouseEvent | TouchEvent) => {
      const target = event.target as HTMLElement;
      if (target.closest('#webamp') && onFocus) {
        onFocus();
      }
    };

    document.addEventListener('mousedown', handleFocus);
    document.addEventListener('touchstart', handleFocus);

    return () => {
      document.removeEventListener('mousedown', handleFocus);
      document.removeEventListener('touchstart', handleFocus);
    };
  }, [onFocus]);

  return <div ref={containerRef} className={className} />;
}

// Utility hook for managing Webamp instance
export function useWebampControls() {
  const [isMinimized, setIsMinimized] = React.useState(false);
  const [isFocused, setIsFocused] = React.useState(false);

  const restore = React.useCallback(() => {
    const webampElement = document.querySelector('#webamp');
    if (webampElement instanceof HTMLElement) {
      webampElement.style.opacity = '1';
      webampElement.style.pointerEvents = 'auto';
      webampElement.style.zIndex = '999';
      setIsMinimized(false);
    }
  }, []);

  const handleMinimize = React.useCallback(() => {
    setIsMinimized(true);
    setIsFocused(false);
  }, []);

  const handleFocus = React.useCallback(() => {
    setIsFocused(true);
    if (isMinimized) {
      restore();
    }
  }, [isMinimized, restore]);

  return {
    isMinimized,
    isFocused,
    restore,
    handleMinimize,
    handleFocus,
  };
}
