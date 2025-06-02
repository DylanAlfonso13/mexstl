'use client';

import { useEffect } from 'react';

export default function PdfRedirectPage() {
  useEffect(() => {
    window.location.href = 'MEXICAN_CENTRAL_A_ST._LOUIS_RO.pdf';
  }, []);

  return (
    <div>
      <p>
        If you are not redirected,{' '}
        <a href="MEXICAN_CENTRAL_A_ST._LOUIS_RO.pdf">click here</a>.
      </p>
    </div>
  );
}
