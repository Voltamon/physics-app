import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { BookOpen, FileText, Users, ExternalLink, X } from 'lucide-react';
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
  const [currentTopic, setCurrentTopic] = useState<string | undefined>();
  const [currentType, setCurrentType] = useState<'theory' | 'practical' | undefined>();
  const [showModal, setShowModal] = useState(false);
  
  // This will be populated from backend API in the future
  const [mappings] = useState<TopicMapping[]>([
    {
      topic: 'Mechanics',
      type: 'theory',
      pdfUrl: 'https://drive.google.com/file/d/12atHLqxiyCqhhr_QTyOmSDVUpo1nTBaj/view?usp=sharing'
    },
    {
      topic: 'Thermodynamics',
      type: 'theory',
      pdfUrl: 'https://drive.google.com/file/d/12atHLqxiyCqhhr_QTyOmSDVUpo1nTBaj/view?usp=sharing'
    },
    {
      topic: 'Waves & Oscillations',
      type: 'theory',
      pdfUrl: 'https://drive.google.com/file/d/1example3/view?usp=sharing'
    },
    {
      topic: 'Electricity & Magnetism',
      type: 'theory',
      pdfUrl: 'https://drive.google.com/file/d/1example4/view?usp=sharing'
    },
    {
      topic: 'Optics',
      type: 'theory',
      pdfUrl: 'https://drive.google.com/file/d/1example5/view?usp=sharing'
    },
    {
      topic: 'Modern Physics',
      type: 'theory',
      pdfUrl: 'https://drive.google.com/file/d/1example6/view?usp=sharing'
    },
    {
      topic: 'Young\'s Modulus',
      type: 'practical',
      pdfUrl: 'https://drive.google.com/file/d/1practical1/view?usp=sharing'
    },
    {
      topic: 'Rigidity Modulus (Static Method)',
      type: 'practical',
      pdfUrl: 'https://drive.google.com/file/d/1practical2/view?usp=sharing'
    },
    {
      topic: 'Solar Cell Experiment',
      type: 'practical',
      pdfUrl: 'https://drive.google.com/file/d/1practical3/view?usp=sharing'
    },
    {
      topic: 'Band Gap (Four Probe)',
      type: 'practical',
      pdfUrl: 'https://drive.google.com/file/d/1practical4/view?usp=sharing'
    },
    {
      topic: 'Frank Hertz Experiment',
      type: 'practical',
      pdfUrl: 'https://drive.google.com/file/d/1practical5/view?usp=sharing'
    },
    {
      topic: 'Cymatics Experiment',
      type: 'practical',
      pdfUrl: 'https://drive.google.com/file/d/1practical6/view?usp=sharing'
    },
    {
      topic: 'Newton\'s Ring Experiment',
      type: 'practical',
      pdfUrl: 'https://drive.google.com/file/d/1practical7/view?usp=sharing'
    }
  ]);

  const handleTopicClick = (topic: string, type: 'theory' | 'practical') => {
    setCurrentTopic(topic);
    setCurrentType(type);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setCurrentTopic(undefined);
    setCurrentType(undefined);
  };

  const convertGoogleDriveUrl = (url: string): string => {
    // Convert Google Drive sharing URL to embeddable URL
    const match = url.match(/\/file\/d\/([a-zA-Z0-9-_]+)/);
    if (match) {
      return `https://drive.google.com/file/d/${match[1]}/preview`;
    }
    return url;
  };

  const getCurrentMapping = (): TopicMapping | undefined => {
    if (!currentTopic || !currentType) return undefined;
    return mappings.find(m => m.topic === currentTopic && m.type === currentType);
  };

  const currentMapping = getCurrentMapping();

  // Default syllabus overview with modal for PDF viewing
  const syllabusData = {
    theoryModules: [
      'Mechanics',
      'Thermodynamics', 
      'Waves & Oscillations',
      'Electricity & Magnetism',
      'Optics',
      'Modern Physics'
    ],
    practicalExperiments: [
      'Young\'s Modulus',
      'Rigidity Modulus (Static Method)',
      'Solar Cell Experiment',
      'Band Gap (Four Probe)',
      'Frank Hertz Experiment',
      'Cymatics Experiment',
      'Newton\'s Ring Experiment'
    ]
  };

  return (
    <>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Physics Syllabus</h1>
            <p className="text-gray-600 mt-2">B.Tech 1st Year Physics Course Overview</p>
          </div>
        </div>

      {/* Course Information */}
      <Card>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Theory Modules */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center space-x-2">
                <FileText className="h-5 w-5 text-gray-600" />
                <span>Theory Modules</span>
              </h3>
              <div className="space-y-2">
                {syllabusData.theoryModules.map((module, index) => (
                  <div 
                    key={index} 
                    onClick={() => handleTopicClick(module, 'theory')}
                    className="p-3 bg-gray-50 rounded-lg border-l-4 border-gray-400 cursor-pointer hover:bg-gray-100 transition-colors"
                  >
                    <span className="font-medium text-gray-900">{index + 1}. {module}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Practical Experiments */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center space-x-2">
                <Users className="h-5 w-5 text-gray-600" />
                <span>Practical Experiments</span>
              </h3>
              <div className="space-y-2">
                {syllabusData.practicalExperiments.map((experiment, index) => (
                  <div 
                    key={index} 
                    onClick={() => handleTopicClick(experiment, 'practical')}
                    className="p-3 bg-gray-50 rounded-lg border-l-4 border-gray-400 cursor-pointer hover:bg-gray-100 transition-colors"
                  >
                    <span className="font-medium text-gray-900">{index + 1}. {experiment}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>

    {/* PDF Modal Overlay */}
    {showModal && (
      <div 
        className="fixed inset-0 bg-white bg-opacity-80 backdrop-blur-sm flex items-center justify-center z-50 p-4"
        onClick={handleCloseModal}
      >
        <div 
          className="bg-white rounded-3xl shadow-xl w-full h-full max-w-6xl max-h-[90vh] flex flex-col"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Modal Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-200 rounded-t-3xl">
            <div className="flex items-center space-x-2">
              <FileText className="h-5 w-5 text-gray-600" />
              <h2 className="text-lg font-semibold text-gray-900">
                {currentTopic}
              </h2>
            </div>
            <div className="flex items-center space-x-4">
              {currentMapping && (
                <a
                  href={currentMapping.pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 flex items-center space-x-1 text-sm"
                >
                </a>
              )}
              <button
                onClick={handleCloseModal}
                className="p-1 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="h-5 w-5 text-gray-500" />
              </button>
            </div>
          </div>
          
          {/* Modal Content */}
          <div className="flex-1 p-0 overflow-hidden rounded-b-3xl">
            {currentMapping ? (
              <PDFViewer url={convertGoogleDriveUrl(currentMapping.pdfUrl)} />
            ) : (
              <div className="flex items-center justify-center h-full bg-gray-50">
                <div className="text-center">
                  <FileText className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600">
                    Study material for {currentTopic} will be available soon
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    )}
  </>
  );
}
