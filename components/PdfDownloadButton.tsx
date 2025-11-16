'use client';

import { useState } from 'react';

export default function PdfDownloadButton({
  lawSlug,
  lawTitle,
}: {
  lawSlug: string;
  lawTitle: string;
}) {
  const [isLoading, setIsLoading] = useState(false);

  const handleDownload = async () => {
    setIsLoading(true);
    try {
      const response = await fetch('/api/generate-pdf', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ lawSlug, lawTitle }),
      });

      if (!response.ok) {
        throw new Error('Neuspjelo generisanje PDF dokumenta');
      }

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `${lawSlug}.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error(error);
      alert('Trenutno nije moguće generisati PDF. Molimo pokušajte ponovo.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <button
      onClick={handleDownload}
      className="rounded-full bg-secondary px-6 py-3 font-semibold text-slate-900 transition hover:bg-amber-400"
      disabled={isLoading}
    >
      {isLoading ? 'Generišem PDF...' : 'Preuzmi PDF'}
    </button>
  );
}
