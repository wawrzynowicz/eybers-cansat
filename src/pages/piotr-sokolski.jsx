import React from 'react';
import { Helmet } from 'react-helmet';

export default function PiotrSokolski() {
  return (
    <>
      <Helmet>
        <title>Piotr Sokólski - Software Engineer - EYBERS CanSat</title>
        <meta name="description" content="Piotr Sokólski, Software Engineer & Telecommunications Officer of EYBERS CanSat Competition team" />
      </Helmet>
      <div className="min-h-screen flex items-center justify-center bg-slate-950 p-4">
        <img 
          src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6931f02077d600a24db95382/dddfa9c24_Screenshot2026-01-03at154914.png"
          alt="Piotr Sokólski - Software Engineer & Telecommunications Officer - EYBERS CanSat Team"
          title="Piotr Sokólski - Software Engineer - EYBERS CanSat Competition"
          className="max-w-full max-h-screen object-contain"
        />
      </div>
    </>
  );
}