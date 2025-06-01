'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function BookAppointmentRedirect() {
  const router = useRouter();

  useEffect(() => {
    // Direct browser redirect
    window.location.href =
      'https://outlook.office.com/bookwithme/user/195137d238b14c778531ae743cf51d3e@synoptix.ai?anonymous&ep=pcard';
  }, []);

  return (
    <div>
      <p>Redirecting to booking page...</p>
    </div>
  );
}
