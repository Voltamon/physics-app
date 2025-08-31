import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { FileText, Settings, ExternalLink, Save, X } from 'lucide-react';
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
  const [mappings, setMappings] = useState<TopicMapping[]>([
    {
      topic: 'Mechanics',
      type: 'theory',
      pdfUrl: 'https://drive.google.com/file/d/1example/view?usp=sharing'
    }
  ]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [newMapping, setNewMapping] = useState({
    topic: '',
    type: 'theory' as 'theory' | 'practical',
    pdfUrl: ''
  });

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

  const handleSaveMapping = () => {
    if (!newMapping.topic || !newMapping.pdfUrl) return;

    const existingIndex = mappings.findIndex(
      m => m.topic === newMapping.topic && m.type === newMapping.type
    );

    if (existingIndex >= 0) {
      // Update existing mapping
      const updatedMappings = [...mappings];
      updatedMappings[existingIndex] = { ...newMapping };
      setMappings(updatedMappings);
    } else {
      // Add new mapping
      setMappings([...mappings, { ...newMapping }]);
    }

    setNewMapping({ topic: '', type: 'theory', pdfUrl: '' });
    setIsDialogOpen(false);
  };

  const handleEditMapping = (mapping: TopicMapping) => {
    setNewMapping({ ...mapping });
    setIsDialogOpen(true);
  };

  const handleDeleteMapping = (topic: string, type: 'theory' | 'practical') => {
    setMappings(mappings.filter(m => !(m.topic === topic && m.type === type)));
  };

  const currentMapping = getCurrentMapping();

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Physics Syllabus</h1>
          <p className="text-gray-600 mt-2">View course materials and manage PDF mappings</p>
        </div>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button className="flex items-center space-x-2">
              <Settings className="h-4 w-4" />
              <span>Manage Mappings</span>
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-md">
            <DialogHeader>
              <DialogTitle>PDF Mapping</DialogTitle>
              <DialogDescription>
                Map topics to Google Drive PDF links
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <div>
                <Label htmlFor="topic">Topic</Label>
                <Input
                  id="topic"
                  value={newMapping.topic}
                  onChange={(e) => setNewMapping({ ...newMapping, topic: e.target.value })}
                  placeholder="Enter topic name"
                />
              </div>
              <div>
                <Label htmlFor="type">Type</Label>
                <select
                  id="type"
                  value={newMapping.type}
                  onChange={(e) => setNewMapping({ ...newMapping, type: e.target.value as 'theory' | 'practical' })}
                  className="w-full p-2 border border-gray-300 rounded-md"
                >
                  <option value="theory">Theory</option>
                  <option value="practical">Practical</option>
                </select>
              </div>
              <div>
                <Label htmlFor="pdfUrl">Google Drive PDF URL</Label>
                <Input
                  id="pdfUrl"
                  value={newMapping.pdfUrl}
                  onChange={(e) => setNewMapping({ ...newMapping, pdfUrl: e.target.value })}
                  placeholder="https://drive.google.com/file/d/..."
                />
              </div>
              <div className="flex space-x-2">
                <Button onClick={handleSaveMapping} className="flex-1">
                  <Save className="h-4 w-4 mr-2" />
                  Save
                </Button>
                <Button 
                  variant="outline" 
                  onClick={() => {
                    setNewMapping({ topic: '', type: 'theory', pdfUrl: '' });
                    setIsDialogOpen(false);
                  }}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Mappings List */}
        <div className="lg:col-span-1">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">PDF Mappings</CardTitle>
              <CardDescription>
                Configured topic mappings
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {mappings.length === 0 ? (
                  <p className="text-sm text-gray-500">No mappings configured</p>
                ) : (
                  mappings.map((mapping, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-2 border rounded-md hover:bg-gray-50"
                    >
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium truncate">{mapping.topic}</p>
                        <Badge variant={mapping.type === 'theory' ? 'default' : 'secondary'} className="text-xs">
                          {mapping.type}
                        </Badge>
                      </div>
                      <div className="flex space-x-1">
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => handleEditMapping(mapping)}
                        >
                          <Settings className="h-3 w-3" />
                        </Button>
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => handleDeleteMapping(mapping.topic, mapping.type)}
                        >
                          <X className="h-3 w-3" />
                        </Button>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* PDF Viewer */}
        <div className="lg:col-span-3">
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
                        ? `No PDF mapped for ${selectedTopic} (${selectedType})`
                        : 'Select a topic from the sidebar to view notes'
                      }
                    </p>
                    {selectedTopic && (
                      <Button
                        className="mt-4"
                        onClick={() => {
                          setNewMapping({
                            topic: selectedTopic,
                            type: selectedType!,
                            pdfUrl: ''
                          });
                          setIsDialogOpen(true);
                        }}
                      >
                        Add PDF Mapping
                      </Button>
                    )}
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
