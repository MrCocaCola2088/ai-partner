'use client';

import {ArrowUp} from 'lucide-react';
import {useEffect, useState} from 'react';
import {Button} from '@/components/ui/button';

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!visible) {
    return null;
  }

  return (
    <Button
      type="button"
      size="icon"
      className="fixed bottom-24 right-4 z-40 shadow-2xl"
      onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
    >
      <ArrowUp className="size-4" />
    </Button>
  );
}
