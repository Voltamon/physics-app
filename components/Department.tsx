import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function Department() {
  const departmentText = `Welcome to the Department of Physics at our esteemed university. Our department is dedicated to advancing the understanding of the fundamental principles that govern the natural world.

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
We offer undergraduate and graduate programs designed to prepare students for careers in academia, industry, and research. Our students have access to modern equipment, research opportunities, and mentorship from experienced faculty members.`;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Department of Physics</h1>
          <p className="text-gray-600 mt-2">Learn about our department's mission, vision, and offerings</p>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Department Information</CardTitle>
          <CardDescription>Overview of the Physics Department</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="prose max-w-none">
            <div className="whitespace-pre-line text-gray-700 leading-relaxed">
              {departmentText}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
