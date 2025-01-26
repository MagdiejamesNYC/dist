import { useEffect, useRef } from 'react';
import { siteConfig } from '../config';

interface AdUnitProps {
  className?: string;
}

export default function AdUnit({ className }: AdUnitProps) {
  const adRef = useRef<HTMLDivElement>(null);
  const isLoaded = useRef(false);

  useEffect(() => {
    // Only proceed if we have a valid publisher ID
    if (!siteConfig.googleAdsenseId || siteConfig.googleAdsenseId === 'YOUR_PUBLISHER_ID') {
      console.warn('Google AdSense ID not configured');
      return;
    }

    // Prevent multiple loads for the same ad unit
    if (isLoaded.current || !adRef.current) {
      return;
    }

    try {
      const adsbygoogle = (window as any).adsbygoogle || [];
      adsbygoogle.push({});
      isLoaded.current = true;
    } catch (err) {
      console.error('AdSense error:', err);
    }
  }, []);

  // Don't render the ad unit if AdSense isn't configured
  if (!siteConfig.googleAdsenseId || siteConfig.googleAdsenseId === 'YOUR_PUBLISHER_ID') {
    return (
      <div className={className}>
        <div className="text-gray-400 text-sm text-center">
          Advertisement Space
        </div>
      </div>
    );
  }

  return (
    <div className={className}>
      <ins
        ref={adRef}
        className="adsbygoogle"
        style={{ display: 'block', minWidth: '300px', minHeight: '250px' }}
        data-ad-client={`ca-pub-${siteConfig.googleAdsenseId}`}
        data-ad-slot={siteConfig.googleAdsenseSlot}
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  );
}
