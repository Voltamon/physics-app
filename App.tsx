import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { cn } from '@/lib/utils';
import Sidebar from './components/Sidebar';
import Department from './components/Department';
import Faculty from './components/Faculty';
import Syllabus from './components/Syllabus';

export default function App() {
  const [activeTab, setActiveTab] = useState('department');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState<string | undefined>();
  const [selectedType, setSelectedType] = useState<'theory' | 'practical' | undefined>();

  const handleTabChange = (value: string) => {
    setActiveTab(value);
    setSidebarOpen(false);
  };

  const handleTopicSelect = (topic: string, type: 'theory' | 'practical') => {
    setSelectedTopic(topic);
    setSelectedType(type);
    setSidebarOpen(false);
  };

  const shouldShowSidebar = false; // Sidebar removed from all tabs

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {shouldShowSidebar && (
        <Sidebar 
          isOpen={sidebarOpen} 
          onOpenChange={setSidebarOpen}
          activeTab={activeTab}
          onTopicSelect={handleTopicSelect}
        />
      )}
      
      <div className={cn(
        "flex-1 flex flex-col transition-all duration-300",
        shouldShowSidebar && sidebarOpen && "blur-sm"
      )}>
        <header className="bg-white shadow-sm border-b">
          <div className="px-6 py-4 flex items-center justify-between">
            {/* Left side - IEM logo */}
            <div className="flex items-center">
              <div className="w-20 h-10 flex items-center justify-center">
                <img 
                  src="https://cdn.brandfetch.io/id22X14dMP/w/751/h/460/theme/dark/logo.png?c=1bxid64Mup7aczewSAYMX&t=1755282519912" 
                  alt="IEM Logo" 
                  className="max-h-10 max-w-20 w-auto h-auto object-contain"
                />
              </div>
            </div>

            {/* Center - Navigation tabs */}
            <div className="flex-1 flex justify-center">
              <Tabs value={activeTab} onValueChange={handleTabChange} className="w-auto">
                <TabsList className="grid grid-cols-3 w-auto">
                  <TabsTrigger value="department">Department</TabsTrigger>
                  <TabsTrigger value="faculty">Faculty</TabsTrigger>
                  <TabsTrigger value="syllabus">Syllabus</TabsTrigger>
                </TabsList>
              </Tabs>
            </div>

            {/* Right side - UEM logo */}
            <div className="flex items-center">
              <div className="w-20 h-10 flex items-center justify-center"> 
                <img 
                  src="https://cdn.brandfetch.io/iddVcdJNqX/w/751/h/460/theme/dark/logo.png?c=1bxid64Mup7aczewSAYMX&t=1745353813183" 
                  alt="UEM Logo" 
                  className="max-h-10 max-w-20 w-auto h-auto object-contain"
                />  
              </div>
            </div>
          </div>
        </header>

        <main className="flex-1 p-6">
          <Tabs value={activeTab} onValueChange={handleTabChange}>
            <TabsContent value="department" className="mt-0">
              <Department />
            </TabsContent>
            <TabsContent value="faculty" className="mt-0">
              <Faculty />
            </TabsContent>
            <TabsContent value="syllabus" className="mt-0">
              <Syllabus selectedTopic={selectedTopic} selectedType={selectedType} />
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  );
}
