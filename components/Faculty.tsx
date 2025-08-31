import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, User, Clock } from 'lucide-react';

interface FacultyMember {
  id: string;
  name: string;
  designation: string;
  experience: string;
  email: string;
  imagePath: string;
}

const facultyList: FacultyMember[] = [
  {
    id: '1',
    name: 'Dr. Rajesh Kumar',
    designation: 'Professor & Head of Department',
    experience: '15 years',
    email: 'rajesh.kumar@university.edu',
    imagePath: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face'
  },
  {
    id: '2',
    name: 'Dr. Priya Sharma',
    designation: 'Associate Professor',
    experience: '12 years',
    email: 'priya.sharma@university.edu',
    imagePath: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face'
  },
  {
    id: '3',
    name: 'Dr. Amit Singh',
    designation: 'Assistant Professor',
    experience: '8 years',
    email: 'amit.singh@university.edu',
    imagePath: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
  },
  {
    id: '4',
    name: 'Dr. Sunita Patel',
    designation: 'Assistant Professor',
    experience: '6 years',
    email: 'sunita.patel@university.edu',
    imagePath: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face'
  },
  {
    id: '5',
    name: 'Dr. Vikram Gupta',
    designation: 'Lecturer',
    experience: '4 years',
    email: 'vikram.gupta@university.edu',
    imagePath: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face'
  },
  {
    id: '6',
    name: 'Dr. Meera Joshi',
    designation: 'Lecturer',
    experience: '3 years',
    email: 'meera.joshi@university.edu',
    imagePath: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face'
  }
];

export default function Faculty() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Physics Faculty</h1>
        <p className="text-gray-600 mt-2">Meet our dedicated physics department faculty members</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {facultyList.map((faculty) => (
          <Card key={faculty.id} className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader className="text-center pb-4">
              <div className="flex justify-center mb-4">
                <img
                  src={faculty.imagePath}
                  alt={faculty.name}
                  className="w-24 h-24 rounded-full object-cover border-4 border-gray-100"
                />
              </div>
              <CardTitle className="text-lg">{faculty.name}</CardTitle>
              <CardDescription className="text-blue-600 font-medium">
                {faculty.designation}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <Clock className="h-4 w-4" />
                <span>{faculty.experience} of experience</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <Mail className="h-4 w-4" />
                <a 
                  href={`mailto:${faculty.email}`}
                  className="hover:text-blue-600 transition-colors truncate"
                >
                  {faculty.email}
                </a>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
