import React, { useState, useCallback } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BookOpen, FileText, Users, ExternalLink, X } from 'lucide-react';
import PDFViewer from './PDFViewer';

interface TopicMapping {
  topic: string;
  type: string; // Generalized to support 'syllabus', 'study', 'assignment', 'practical', etc.
  pdfUrl: string;
}

interface SyllabusProps {
  selectedTopic?: string;
  selectedType?: string;
}

interface Module {
  id: string;
  title: string;
  syllabus: string[];
  studyModule: string[];
  assignment: string[];
  practical: string[];
}

export default function Syllabus({ selectedTopic, selectedType }: SyllabusProps) {
  const [currentTopic, setCurrentTopic] = useState<string | undefined>();
  const [currentType, setCurrentType] = useState<string | undefined>();
  const [showModal, setShowModal] = useState(false);
  const [expandedModules, setExpandedModules] = useState(new Set<string>());
  
  // This will be populated from backend API in the future
  const modules: Module[] = [
    {
      id: "m1",
      title: "Mechanics",
      syllabus: ["Kinematics", "Dynamics", "Work & Energy", "Rotational motion"],
      studyModule: ["Lecture notes", "Solved examples", "Tutorials"],
      assignment: ["Problem set 1", "Problem set 2"],
      practical: ["Experiment: Verification of equations of motion", "Lab report format"],
    },
    {
      id: "m2",
      title: "Electromagnetism",
      syllabus: ["Electrostatics", "Magnetostatics", "Maxwell's equations"],
      studyModule: ["Lecture notes", "Field mapping examples"],
      assignment: ["Assignment 1", "Assignment 2"],
      practical: ["Experiment: Resistivity measurement", "Oscilloscope lab"],
    },
    {
      id: "m3",
      title: "Thermodynamics",
      syllabus: ["Laws of thermodynamics", "Entropy", "Heat engines"],
      studyModule: ["Lecture notes", "Problem solving sessions"],
      assignment: ["Assignment 1"],
      practical: ["Experiment: Specific heat measurement"],
    },
    {
      id: "m4",
      title: "Optics",
      syllabus: ["Wave optics", "Interference", "Diffraction", "Polarization"],
      studyModule: ["Lecture notes", "Demonstrations"],
      assignment: ["Assignment 1"],
      practical: ["Experiment: Young's double slit", "Spectrometer lab"],
    },
    {
      id: "m5",
      title: "Modern Physics",
      syllabus: ["Photoelectric effect", "Atomic models", "Nuclear physics basics"],
      studyModule: ["Lecture notes", "Worked examples"],
      assignment: ["Assignment 1"],
      practical: ["Experiment: Millikan style (simulation)", "Radioactivity measurement lab"],
    },
    {
      id: "m6",
      title: "Solid State & Materials",
      syllabus: ["Crystal structures", "Band theory", "Semiconductors"],
      studyModule: ["Lecture notes", "Problem sets"],
      assignment: ["Assignment 1"],
      practical: ["Experiment: Hall effect (demo)"],
    },
    {
      id: "m7",
      title: "Electronics (Basic)",
      syllabus: ["Diodes", "Transistors", "Amplifiers"],
      studyModule: ["Lecture notes", "Circuit examples"],
      assignment: ["Assignment 1", "Assignment 2"],
      practical: ["Experiment: Diode characteristics", "Transistor biasing lab"],
    },
    {
      id: "m8",
      title: "Practical Laboratory (General)",
      syllabus: ["Safety", "Measurement techniques", "Error analysis"],
      studyModule: ["Lab manual", "Report templates"],
      assignment: ["Lab record submissions"],
      practical: ["List of all lab experiments", "Submission guidelines"],
    },
  ];

  // Filter out the general practical module for the theory section
  const theoryModulesData = modules.filter((module) => module.id !== "m8");

  // Define mappings (TODO: Populate with actual Google Drive URLs from backend)
  const mappings: TopicMapping[] = [
    // Example mappings - replace with real URLs
    { topic: "Mechanics Syllabus", type: "syllabus", pdfUrl: "https://drive.google.com/file/d/1EXAMPLE_Mechanics_Syllabus/view" },
    { topic: "Mechanics Study Module", type: "study", pdfUrl: "https://drive.google.com/file/d/1EXAMPLE_Mechanics_Study/view" },
    { topic: "Mechanics Assignment", type: "assignment", pdfUrl: "https://drive.google.com/file/d/1EXAMPLE_Mechanics_Assignment/view" },
    { topic: "Mechanics Practical", type: "practical", pdfUrl: "https://drive.google.com/file/d/1EXAMPLE_Mechanics_Practical/view" },
    // Add more mappings for other modules and sections as needed
    // e.g., { topic: "Electromagnetism Syllabus", type: "syllabus", pdfUrl: "..." },
  ];

  const toggleModule = useCallback((id: string) => {
    setExpandedModules((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  }, []);

  const handleTopicClick = (topic: string, type: string) => {
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
    return mappings.find((m) => m.topic === currentTopic && m.type === currentType);
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
              {/* Theory Modules - Now with expandable sections */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center space-x-2">
                  <FileText className="h-5 w-5 text-gray-600" />
                  <span>Theory Modules</span>
                </h3>
                <div className="space-y-4">
                  {theoryModulesData.map((module) => (
                    <div key={module.id} className="border rounded-lg overflow-hidden">
                      {/* Module Title - Click to toggle */}
                      <div 
                        className="p-3 bg-gray-50 font-medium cursor-pointer flex justify-between items-center hover:bg-gray-100 transition-colors"
                        onClick={() => toggleModule(module.id)}
                      >
                        <span className="text-gray-900">{module.title}</span>
                        <span className={`text-sm font-bold transition-transform ${expandedModules.has(module.id) ? 'rotate-180' : ''}`}>
                          ▼
                        </span>
                      </div>
                      
                      {/* Expandable Sections */}
                      {expandedModules.has(module.id) && (
                        <div className="p-3 space-y-2 bg-white border-t">
                          <div 
                            onClick={() => handleTopicClick(`${module.title} Syllabus`, 'syllabus')}
                            className="p-3 bg-gray-50 rounded-lg border border-gray-200 cursor-pointer hover:bg-gray-100 transition-colors flex items-center space-x-2"
                          >
                            <span className="font-medium text-gray-900">1. Syllabus</span>
                          </div>
                          
                          <div 
                            onClick={() => handleTopicClick(`${module.title} Study Module`, 'study')}
                            className="p-3 bg-gray-50 rounded-lg border border-gray-200 cursor-pointer hover:bg-gray-100 transition-colors flex items-center space-x-2"
                          >
                            <span className="font-medium text-gray-900">2. Study Module</span>
                          </div>
                          
                          <div 
                            onClick={() => handleTopicClick(`${module.title} Assignment`, 'assignment')}
                            className="p-3 bg-gray-50 rounded-lg border border-gray-200 cursor-pointer hover:bg-gray-100 transition-colors flex items-center space-x-2"
                          >
                            <span className="font-medium text-gray-900">3. Assignment</span>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Practical Experiments - Kept as flat list for now */}
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
                    <ExternalLink className="h-4 w-4" />
                    <span>Open in new tab</span>
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
