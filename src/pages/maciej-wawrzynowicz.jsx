import React from 'react';
import { Helmet } from 'react-helmet';

export default function MaciejWawrzynowicz() {
  return (
    <>
      <Helmet>
        <title>Maciej Wawrzynowicz - Software Engineer - EYBERS CanSat</title>
        <meta name="description" content="Maciej Wawrzynowicz, Software Engineer & PR Officer of EYBERS CanSat Competition team" />
      </Helmet>
      <div className="min-h-screen flex items-center justify-center bg-slate-950 p-4">
        <img 
          src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6931f02077d600a24db95382/d03cc7de8_Screenshot2026-01-03at154855.png"
          alt="Maciej Wawrzynowicz - Software Engineer & PR Officer - EYBERS CanSat Team"
          title="Maciej Wawrzynowicz - Software Engineer - EYBERS CanSat Competition"
          className="max-w-full max-h-screen object-contain"
        />
      </div>
    </>
  );
}