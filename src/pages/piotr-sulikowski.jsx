import React from 'react';
import { Helmet } from 'react-helmet';

export default function PiotrSulikowski() {
  return (
    <>
      <Helmet>
        <title>Piotr Sulikowski - Electrical Engineer - EYBERS CanSat</title>
        <meta name="description" content="Piotr Sulikowski, Electrical Engineer of EYBERS CanSat Competition team" />
      </Helmet>
      <div className="min-h-screen flex items-center justify-center bg-slate-950 p-4">
        <img 
          src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6931f02077d600a24db95382/4f79b9387_Screenshot2026-01-03at154910.png"
          alt="Piotr Sulikowski - Electrical Engineer - EYBERS CanSat Team"
          title="Piotr Sulikowski - Electrical Engineer - EYBERS CanSat Competition"
          className="max-w-full max-h-screen object-contain"
        />
      </div>
    </>
  );
}