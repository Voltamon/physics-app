import React, { useState } from 'react';
import { AlertCircle, Loader2, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface PDFViewerProps {
  url: string;
}

export default function PDFViewer({ url }: PDFViewerProps) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const handleLoad = () => {
    setLoading(false);
    setError(false);
  };

  const handleError = () => {
    setLoading(false);
    setError(true);
  };

  const openInNewTab = () => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  if (!url) {
    return (
      <div className="flex items-center justify-center h-full bg-gray-50">
        <p className="text-gray-600">No PDF URL provided</p>
      </div>
    );
  }

  return (
    <div className="relative w-full h-full bg-gray-100">
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-white z-10">
          <div className="flex items-center space-x-2">
            <Loader2 className="h-6 w-6 animate-spin text-blue-600" />
            <span className="text-gray-600">Loading PDF...</span>
          </div>
        </div>
      )}

      {error && (
        <div className="absolute inset-0 flex items-center justify-center bg-white z-10">
          <div className="text-center space-y-4">
            <AlertCircle className="h-12 w-12 text-red-500 mx-auto" />
            <div>
              <p className="text-gray-800 font-medium">Failed to load PDF</p>
              <p className="text-gray-600 text-sm">The PDF could not be displayed in the viewer</p>
            </div>
            <Button onClick={openInNewTab} className="flex items-center space-x-2">
              <ExternalLink className="h-4 w-4" />
              <span>Open in New Tab</span>
            </Button>
          </div>
        </div>
      )}

      <iframe
        src={url}
        className="w-full h-full border-0"
        onLoad={handleLoad}
        onError={handleError}
        title="PDF Viewer"
        sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
      />

      {!loading && !error && (
        <Button
          onClick={openInNewTab}
          className="absolute top-4 right-4 z-20 bg-white/90 hover:bg-white text-gray-700 border"
          size="sm"
        >
          <ExternalLink className="h-4 w-4 mr-1" />
          Open
        </Button>
      )}
    </div>
  );
}
