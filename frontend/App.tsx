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

  const handleTabChange = (value: string) => {
    setActiveTab(value);
    setSidebarOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar 
        isOpen={sidebarOpen} 
        onOpenChange={setSidebarOpen}
        activeTab={activeTab}
      />
      
      <div className={cn(
        "flex-1 flex flex-col transition-all duration-300",
        sidebarOpen && "blur-sm"
      )}>
        <header className="bg-white shadow-sm border-b">
          <div className="px-6 py-4">
            <Tabs value={activeTab} onValueChange={handleTabChange} className="w-full">
              <TabsList className="grid w-full grid-cols-3 max-w-md">
                <TabsTrigger value="department">Department</TabsTrigger>
                <TabsTrigger value="faculty">Faculty</TabsTrigger>
                <TabsTrigger value="syllabus">Syllabus</TabsTrigger>
              </TabsList>
            </Tabs>
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
              <Syllabus />
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  );
}
