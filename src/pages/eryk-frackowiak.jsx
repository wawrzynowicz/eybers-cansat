import React from 'react';
import { Helmet } from 'react-helmet';

export default function ErykFrackowiak() {
  return (
    <>
      <Helmet>
        <title>Eryk Frąckowiak - Team Leader - EYBERS CanSat</title>
        <meta name="description" content="Eryk Frąckowiak, Team Leader & Electrical Engineer of EYBERS CanSat Competition team" />
      </Helmet>
      <div className="min-h-screen flex items-center justify-center bg-slate-950 p-4">
        <img 
          src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6931f02077d600a24db95382/45ddb6bc7_Screenshot2026-01-03at154901.png"
          alt="Eryk Frąckowiak - Team Leader & Electrical Engineer - EYBERS CanSat Team"
          title="Eryk Frąckowiak - Team Leader - EYBERS CanSat Competition"
          className="max-w-full max-h-screen object-contain"
        />
      </div>
    </>
  );
}