import React from 'react';
import { Helmet } from 'react-helmet';

export default function AmeliaMroz() {
  return (
    <>
      <Helmet>
        <title>Amelia Mróz - Mechanical Engineer - EYBERS CanSat</title>
        <meta name="description" content="Amelia Mróz, Mechanical Engineer of EYBERS CanSat Competition team" />
      </Helmet>
      <div className="min-h-screen flex items-center justify-center bg-slate-950 p-4">
        <img 
          src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6931f02077d600a24db95382/c2285186f_Screenshot2026-01-03at154918.png"
          alt="Amelia Mróz - Mechanical Engineer - EYBERS CanSat Team"
          title="Amelia Mróz - Mechanical Engineer - EYBERS CanSat Competition"
          className="max-w-full max-h-screen object-contain"
        />
      </div>
    </>
  );
}