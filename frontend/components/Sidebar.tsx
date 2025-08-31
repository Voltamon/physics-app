import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import { X } from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  activeTab: string;
}

export default function Sidebar({ isOpen, onOpenChange, activeTab }: SidebarProps) {
  const sidebarRef = useRef<HTMLDivElement>(null);

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
          "fixed left-0 top-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-lg font-semibold text-gray-800">
            {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} Menu
          </h2>
          <button
            onClick={() => onOpenChange(false)}
            className="p-1 rounded-md hover:bg-gray-100 transition-colors"
          >
            <X className="h-5 w-5 text-gray-500" />
          </button>
        </div>

        <div className="p-4">
          <div className="space-y-2">
            <div className="text-sm text-gray-500 mb-4">
              {activeTab === 'department' && 'Department options will appear here'}
              {activeTab === 'faculty' && 'Faculty options will appear here'}
              {activeTab === 'syllabus' && 'Syllabus options will appear here'}
            </div>
            
            {/* Placeholder menu items */}
            <div className="space-y-1">
              <div className="p-2 rounded-md hover:bg-gray-100 cursor-pointer text-sm text-gray-600">
                Option 1
              </div>
              <div className="p-2 rounded-md hover:bg-gray-100 cursor-pointer text-sm text-gray-600">
                Option 2
              </div>
              <div className="p-2 rounded-md hover:bg-gray-100 cursor-pointer text-sm text-gray-600">
                Option 3
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
