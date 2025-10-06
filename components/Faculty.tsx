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
    name: 'Prof. Saswati Barman',
    designation: 'Research Professor',
    experience: '28 years',
    email: 'saswati.barman@iem.edu.in',
    imagePath: 'https://github.com/NotFound77/Images/blob/5f32b406f8d680d32356d513910a5cc40983c15f/43257266-ec91-48b8-9487-731b54a938a8.jpg?raw=true'
  },
  {
    id: '2',
    name: 'Prof. Koyel Ganguly',
    designation: 'Associate Professor',
    experience: '13 years',
    email: 'koyel.ganguly@iem.edu.in',
    imagePath: 'https://github.com/NotFound77/Images/blob/main/6deb4766-558d-4e00-a417-a6fe32dd4cbd.jpg?raw=true'
  },
  {
    id: '3',
    name: 'Prof. Soumyadipta Pal',
    designation: 'Associate Professor',
    experience: '9 years',
    email: 'soumyadipta.pal@iem.edu.in',
    imagePath: 'https://github.com/NotFound77/Images/blob/main/1d8fb2a4-09e7-4085-9506-5d7345a163f3.jpg?raw=true'
  },
  {
    id: '4',
    name: 'Prof. Arnab Basu',
    designation: 'Associate Professor',
    experience: '8 years',
    email: 'arnab.basu@iem.edu.in',
    imagePath: 'https://github.com/NotFound77/Images/blob/main/78128dc9-d3d0-4728-b9b5-80423694e94f.jpg?raw=true'
  },
  {
    id: '5',
    name: 'Prof. Ranabir Banik',
    designation: 'Associate Professor',
    experience: '5 years',
    email: 'ranabir.banik@iem.edu.in',
    imagePath: 'https://github.com/NotFound77/Images/blob/main/89307c75-b554-4dc6-b051-41cd81305220.jpg?raw=true'
  },
  {
    id: '6',
    name: 'Prof. Subarna Datta',
    designation: 'Associate Professor',
    experience: '2 years',
    email: 'subarna.datta@iem.edu.in',
    imagePath: 'https://github.com/NotFound77/Images/blob/main/f7617df4-52b6-4115-b4a1-2dfc7a9b38cb.jpg?raw=true'
  },
  {
    id: '7',
    name: 'Prof. Sayan Paul',
    designation: 'Technical Assistant',
    experience: '3 years',
    email: 'sayan.paul@iem.edu.in',
    imagePath: 'https://github.com/NotFound77/Images/blob/main/60305097-f1a8-4314-90eb-d1473123a06c.jpg?raw=true'
  },
  {
    id: '8',
    name: 'Prof. Saikat Chakrabarty',
    designation: 'Associate Professor',
    experience: '7 years',
    email: 'saikat@iem.edu.in',
    imagePath: 'https://github.com/NotFound77/Images/blob/main/86070119-7ef5-4a37-9eac-28ae6003f3d4.jpg?raw=true'
  },
  {
    id: '9',
    name: 'Prof. Sangeeta Das',
    designation: 'Faculty Member',
    experience: 'N/A',
    email: 'Contact via department',
    imagePath: 'https://github.com/NotFound77/Images/blob/main/5983132d-ea41-4898-97a1-909b34357caa.jpg?raw=true'
  },
  {
    id: '10',
    name: 'Prof. Kaustav Pal',
    designation: 'Faculty Member',
    experience: 'N/A',
    email: 'Contact via department',
    imagePath: '/images/faculty/prof_kaustav.jpg'
  },
  {
    id: '11',
    name: 'Prof. Amit Nandi',
    designation: 'Senior Technical Assistant',
    experience: '11 years',
    email: 'amit.nandi@iem.edu.in',
    imagePath: 'https://github.com/NotFound77/Images/blob/main/afe1e108-a1d6-4996-9af0-ff3ce51bebb0.jpg?raw=true'
  }
];

export default function Faculty() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Physics Faculty</h1>
        <p className="text-gray-600 mt-2">Meet our dedicated IEM Physics Department faculty members</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {facultyList.map((faculty) => (
          <Card key={faculty.id} className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader className="text-center pb-4">
              <div className="flex justify-center mb-4">
                <img
                  src={faculty.imagePath}
                  alt={faculty.name}
                  width={96}
                  height={96}
                  className="rounded-full object-cover border-4 border-gray-100"
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
                {faculty.email.includes('@') ? (
                  <a 
                    href={`mailto:${faculty.email}`}
                    className="hover:text-blue-600 transition-colors truncate"
                  >
                    {faculty.email}
                  </a>
                ) : (
                  <span className="text-gray-500">{faculty.email}</span>
                )}
              </div>
 </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
} 