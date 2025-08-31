import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { FileText, ExternalLink } from 'lucide-react';
import PDFViewer from './PDFViewer';

interface TopicMapping {
  topic: string;
  type: 'theory' | 'practical';
  pdfUrl: string;
}

interface SyllabusProps {
  selectedTopic?: string;
  selectedType?: 'theory' | 'practical';
}

export default function Syllabus({ selectedTopic, selectedType }: SyllabusProps) {
  // This will be populated from backend API in the future
  const [mappings] = useState<TopicMapping[]>([
    {
      topic: 'Mechanics',
      type: 'theory',
      pdfUrl: 'https://drive.google.com/file/d/1example/view?usp=sharing'
    }
  ]);

  const convertGoogleDriveUrl = (url: string): string => {
    // Convert Google Drive sharing URL to embeddable URL
    const match = url.match(/\/file\/d\/([a-zA-Z0-9-_]+)/);
    if (match) {
      return `https://drive.google.com/file/d/${match[1]}/preview`;
    }
    return url;
  };

  const getCurrentMapping = (): TopicMapping | undefined => {
    if (!selectedTopic || !selectedType) return undefined;
    return mappings.find(m => m.topic === selectedTopic && m.type === selectedType);
  };

  const currentMapping = getCurrentMapping();

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Physics Syllabus</h1>
          <p className="text-gray-600 mt-2">View course materials and study notes</p>
        </div>
      </div>

      <div className="w-full">
        {/* PDF Viewer */}
        <Card className="h-[600px]">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <FileText className="h-5 w-5" />
              <span>
                {selectedTopic ? `${selectedTopic} (${selectedType})` : 'Select a topic from sidebar'}
              </span>
            </CardTitle>
            {currentMapping && (
              <CardDescription className="flex items-center space-x-2">
                <span>PDF Source:</span>
                <a
                  href={currentMapping.pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 flex items-center space-x-1"
                >
                  <span>Google Drive</span>
                  <ExternalLink className="h-3 w-3" />
                </a>
              </CardDescription>
            )}
          </CardHeader>
          <CardContent className="h-full p-0">
            {currentMapping ? (
              <PDFViewer url={convertGoogleDriveUrl(currentMapping.pdfUrl)} />
            ) : (
              <div className="flex items-center justify-center h-full bg-gray-50">
                <div className="text-center">
                  <FileText className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600">
                    {selectedTopic 
                      ? `Study material for ${selectedTopic} (${selectedType}) will be available soon`
                      : 'Select a topic from the sidebar to view study materials'
                    }
                  </p>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
