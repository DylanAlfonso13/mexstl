'use client';

import { useEffect } from 'react';

export default function PdfRedirectPage() {
  useEffect(() => {
    window.location.href = 'St_Louis_Post_Dispatch_1895_02_20_Page_4_copy.pdf';
  }, []);

  return (
    <div>
      <p>
        If you are not redirected,{' '}
        <a href="St_Louis_Post_Dispatch_1895_02_20_Page_4_copy.pdf">click here</a>.
      </p>
    </div>
  );
}
