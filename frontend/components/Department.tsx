import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Edit3, Save, X } from 'lucide-react';

export default function Department() {
  const [isEditing, setIsEditing] = useState(false);
  const [departmentText, setDepartmentText] = useState(
    `Welcome to the Department of Physics at our esteemed university. Our department is dedicated to advancing the understanding of the fundamental principles that govern the natural world.

Our Mission:
To provide exceptional education in physics, conduct cutting-edge research, and foster scientific innovation that contributes to society's advancement.

Our Vision:
To be a leading center of excellence in physics education and research, inspiring the next generation of scientists and researchers.

Key Features:
• State-of-the-art laboratories and research facilities
• Experienced faculty with diverse research interests
• Comprehensive curriculum covering classical and modern physics
• Strong emphasis on both theoretical understanding and practical applications
• Active research programs in various fields of physics
• Collaborative partnerships with industry and research institutions

Research Areas:
Our faculty and students are actively engaged in research across multiple domains including condensed matter physics, quantum mechanics, thermodynamics, electromagnetism, optics, and modern physics applications.

Student Opportunities:
We offer undergraduate and graduate programs designed to prepare students for careers in academia, industry, and research. Our students have access to modern equipment, research opportunities, and mentorship from experienced faculty members.`
  );
  const [editText, setEditText] = useState(departmentText);

  const handleEdit = () => {
    setEditText(departmentText);
    setIsEditing(true);
  };

  const handleSave = () => {
    setDepartmentText(editText);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditText(departmentText);
    setIsEditing(false);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Department of Physics</h1>
          <p className="text-gray-600 mt-2">Learn about our department's mission, vision, and offerings</p>
        </div>
        {!isEditing && (
          <Button onClick={handleEdit} variant="outline" className="flex items-center space-x-2">
            <Edit3 className="h-4 w-4" />
            <span>Edit</span>
          </Button>
        )}
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            Department Information
            {isEditing && (
              <div className="flex space-x-2">
                <Button onClick={handleSave} size="sm" className="flex items-center space-x-1">
                  <Save className="h-4 w-4" />
                  <span>Save</span>
                </Button>
                <Button onClick={handleCancel} variant="outline" size="sm" className="flex items-center space-x-1">
                  <X className="h-4 w-4" />
                  <span>Cancel</span>
                </Button>
              </div>
            )}
          </CardTitle>
          <CardDescription>
            {isEditing ? 'Edit the department information below' : 'Overview of the Physics Department'}
          </CardDescription>
        </CardHeader>
        <CardContent>
          {isEditing ? (
            <Textarea
              value={editText}
              onChange={(e) => setEditText(e.target.value)}
              className="min-h-[400px] resize-none"
              placeholder="Enter department information..."
            />
          ) : (
            <div className="prose max-w-none">
              <div className="whitespace-pre-line text-gray-700 leading-relaxed">
                {departmentText}
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
