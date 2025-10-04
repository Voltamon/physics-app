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
    imagePath: 'https://lh3.googleusercontent.com/eo8wP-fN1g-WD1f9nqsOFAcTjMSl0s2mOnVWx9J6_psbk6JIxTytS3dH8_Ki0cJZO8QB7TXePD5GEVpgZ5uaosHygtTReZjKAyXT0v9-PKR0eudhj2-9Y-Y8e4wFfbUF6gpuGRbBY4RaJSfSaUDack0CRWfFlAvJk0jgabkDPgTiSSF1gU51jw=w1280'
  },
  {
    id: '2',
    name: 'Prof. Koyel Ganguly',
    designation: 'Associate Professor',
    experience: '13 years',
    email: 'koyel.ganguly@iem.edu.in',
    imagePath: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face'
  },
  {
    id: '3',
    name: 'Prof. Soumyadipta Pal',
    designation: 'Associate Professor',
    experience: '9 years',
    email: 'soumyadipta.pal@iem.edu.in',
    imagePath: 'https://lh5.googleusercontent.com/EAHzSiJlus6ov9cD5uXDx0RGkdDcg8X6Yn4GXSTXJVUVokMjT-W_sAGHvnBRQNXLbPEjb1Y5aI4zplnAUxgDET3Tv_enJYea3xWPMefb2JOnTiHRn2FINDoBM3AlVJBesnuATNdQnRA1LeoIe5EYCI3GBgptyDAeAPJAPoEP8HFdnKi6HxjelQ=w1280'
  },
  {
    id: '4',
    name: 'Prof. Arnab Basu',
    designation: 'Associate Professor',
    experience: '8 years',
    email: 'arnab.basu@iem.edu.in',
    imagePath: 'https://lh6.googleusercontent.com/4stlpPqoDUEvr0MtaYxop1iLS_Vws26zJeNoaWRVvpX40TV_5Gr6LQU0yBFi6SCYSt9z0G_B5FW-ca9A1bVIPBFzaIjWO0iqE2VJHgo_VnLhnsf4fpi1Nb8eBJYUjIVIvoui5ekfHGhrvHiwfS1waEZZk268ZZml7AFHwgfB-H_IJMinzAiwdA=w1280'
  },
  {
    id: '5',
    name: 'Prof. Ranabir Banik',
    designation: 'Associate Professor',
    experience: '5 years',
    email: 'ranabir.banik@iem.edu.in',
    imagePath: 'https://lh6.googleusercontent.com/Cm5zmbmRzwJhyeWEiSCcIVJD5rwg8IOMu0Ny8EXUbdUip6fCMz-6igkq4Udr2D7e46cfeaIEa1WRIn25xu3l6_LZ-dxZccl-oeLOtBkxGmRAUvjPFSB-2LAtCm7dfA4fxAd0-mlVWUQqVwim5ZimaWnu3AXj2ke8iw_HbrP4IaRt9bj6NCrXrQ=w1280'
  },
  {
    id: '6',
    name: 'Prof. Subarna Datta',
    designation: 'Associate Professor',
    experience: '2 years',
    email: 'subarna.datta@iem.edu.in',
    imagePath: 'https://lh6.googleusercontent.com/SnynIqqOv4Fc5KKoZVLADJtLoBVDbWTzZOzAFi_1OTWwy56nWVlMIYmcXE3N4OjOuht0S4Orh2icMW42WQyPAknux3gUvIrej6OyJA9qZEpmhiEQVJYKABPFgUZpfytCxYlhvsufttfk1sSHx3FTiiw1Xxy07AD6biQI6AQE79K-ymYFYf_DsA=w1280'
  },
  {
    id: '7',
    name: 'Prof. Sayan Paul',
    designation: 'Technical Assistant',
    experience: '3 years',
    email: 'sayan.paul@iem.edu.in',
    imagePath: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face'
  },
  {
    id: '8',
    name: 'Prof. Saikat Chakrabarty',
    designation: 'Associate Professor',
    experience: '7 years',
    email: 'saikat@iem.edu.in',
    imagePath: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
  },
  {
    id: '9',
    name: 'Prof. Sangeeta Das',
    designation: 'Faculty Member',
    experience: 'N/A',
    email: 'Contact via department',
    imagePath: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face'
  },
  {
    id: '10',
    name: 'Prof. Kaustav Pal',
    designation: 'Faculty Member',
    experience: 'N/A',
    email: 'Contact via department',
    imagePath: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face'
  },
  {
    id: '11',
    name: 'Prof. Amit Nandi',
    designation: 'Senior Technical Assistant',
    experience: '11 years',
    email: 'amit.nandi@iem.edu.in',
    imagePath: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face'
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
