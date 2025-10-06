import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import { X, ChevronDown, ChevronRight } from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  activeTab: string;
  onTopicSelect: (topic: string, type: 'theory' | 'practical') => void;
}

export default function Sidebar({ isOpen, onOpenChange, activeTab, onTopicSelect }: SidebarProps) {
  const sidebarRef = useRef<HTMLDivElement>(null);
  const [expandedSections, setExpandedSections] = React.useState<Record<string, boolean>>({
    theory: true,
    practical: true
  });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Open sidebar when cursor is near the left edge
      if (e.clientX <= 10 && !isOpen) {
        onOpenChange(true);
      }
      
      // Close sidebar when cursor moves away from sidebar area
      if (isOpen && sidebarRef.current) {
        const sidebarRect = sidebarRef.current.getBoundingClientRect();
        if (e.clientX > sidebarRect.right + 50) {
          onOpenChange(false);
        }
      }
    };

    const handleTouchStart = (e: TouchEvent) => {
      const touch = e.touches[0];
      if (touch.clientX <= 20 && !isOpen) {
        onOpenChange(true);
      }
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (isOpen) {
        const touch = e.touches[0];
        if (sidebarRef.current) {
          const sidebarRect = sidebarRef.current.getBoundingClientRect();
          if (touch.clientX > sidebarRect.right + 50) {
            onOpenChange(false);
          }
        }
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('touchstart', handleTouchStart);
    document.addEventListener('touchmove', handleTouchMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('touchstart', handleTouchStart);
      document.removeEventListener('touchmove', handleTouchMove);
    };
  }, [isOpen, onOpenChange]);

  const toggleSection = (section: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const theoryModules = [
    'Mechanics',
    'Thermodynamics',
    'Waves & Oscillations',
    'Electricity & Magnetism',
    'Optics',
    'Modern Physics'
  ];

  const practicalExperiments = [
    'Young\'s Modulus',
    'Rigidity Modulus (Static Method)',
    'Solar Cell Expt',
    'Band Gap (Four Probe)',
    'Frank Hertz Expt',
    'Cymatics Expt',
    'Newton\'s Ring Expt'
  ];

  const handleTopicClick = (topic: string, type: 'theory' | 'practical') => {
    onTopicSelect(topic, type);
  };

  return (
    <>
      {/* Invisible trigger area for opening sidebar */}
      <div
        className="fixed left-0 top-0 w-4 h-full z-40 bg-transparent"
      />

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/20 z-40 lg:hidden"
          onClick={() => onOpenChange(false)}
        />
      )}

      {/* Sidebar */}
      <div
        ref={sidebarRef}
        className={cn(
          "fixed left-0 top-0 h-full w-80 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 overflow-y-auto",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-lg font-semibold text-gray-800">
            Physics Syllabus
          </h2>
          <button
            onClick={() => onOpenChange(false)}
            className="p-1 rounded-md hover:bg-gray-100 transition-colors"
          >
            <X className="h-5 w-5 text-gray-500" />
          </button>
        </div>

        <div className="p-4">
          <div className="space-y-4">
            {/* Theory Section */}
            <div>
              <button
                onClick={() => toggleSection('theory')}
                className="flex items-center justify-between w-full p-3 rounded-lg bg-blue-50 hover:bg-blue-100 transition-colors"
              >
                <span className="font-medium text-blue-900">Theory</span>
                {expandedSections.theory ? (
                  <ChevronDown className="h-4 w-4 text-blue-700" />
                ) : (
                  <ChevronRight className="h-4 w-4 text-blue-700" />
                )}
              </button>
              
              {expandedSections.theory && (
                <div className="mt-2 ml-4 space-y-1">
                  {theoryModules.map((module, index) => (
                    <div
                      key={index}
                      onClick={() => handleTopicClick(module, 'theory')}
                      className="p-2 rounded-md hover:bg-blue-50 cursor-pointer text-sm text-gray-700 border-l-2 border-blue-200 pl-4 transition-colors"
                    >
                      {index + 1}. {module}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Practical Section */}
            <div>
              <button
                onClick={() => toggleSection('practical')}
                className="flex items-center justify-between w-full p-3 rounded-lg bg-green-50 hover:bg-green-100 transition-colors"
              >
                <span className="font-medium text-green-900">Practical</span>
                {expandedSections.practical ? (
                  <ChevronDown className="h-4 w-4 text-green-700" />
                ) : (
                  <ChevronRight className="h-4 w-4 text-green-700" />
                )}
              </button>
              
              {expandedSections.practical && (
                <div className="mt-2 ml-4 space-y-1">
                  {practicalExperiments.map((experiment, index) => (
                    <div
                      key={index}
                      onClick={() => handleTopicClick(experiment, 'practical')}
                      className="p-2 rounded-md hover:bg-green-50 cursor-pointer text-sm text-gray-700 border-l-2 border-green-200 pl-4 transition-colors"
                    >
                      {index + 1}. {experiment}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
