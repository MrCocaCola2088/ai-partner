'use client';

import {MoonStar, SunMedium} from 'lucide-react';
import {useTheme} from 'next-themes';
import {useEffect, useState} from 'react';
import {Button} from '@/components/ui/button';

export function ThemeToggle() {
  const {resolvedTheme, setTheme} = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return <div className="size-10 rounded-full border border-white/10 bg-white/6" />;
  }

  const isDark = resolvedTheme === 'dark';

  return (
    <Button
      aria-label={isDark ? 'Cambiar a modo claro' : 'Switch to dark mode'}
      size="icon"
      variant="secondary"
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      type="button"
    >
      {isDark ? <SunMedium className="size-4" /> : <MoonStar className="size-4" />}
    </Button>
  );
}
