import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { ExternalLink, Download } from "lucide-react";

const Codetribe = () => {
  const skills = [
    { name: 'HTML', level: 'Intermediate', notes: 'Used in multiple projects' },
    { name: 'CSS', level: 'Advanced', notes: 'Styled responsive layouts' },
    { name: 'JavaScript', level: 'Intermediate', notes: 'Built dynamic web applications' },
    { name: 'React Js', level: 'Intermediate', notes: 'Built dynamic web applications' },
    { name: 'React Native', level: 'Intermediate', notes: 'Developed mobile apps' },
    { name: 'Node JS/ Express', level: 'Beginner', notes: 'Built APIs' },
    { name: 'MongoDB', level: 'Beginner', notes: 'Built databases' },
    { name: 'TypeScript', level: 'Beginner', notes: 'Applied in API integrations' }
  ];

  const handleDownloadResume = () => {
    // Replace this URL with the actual path to your resume PDF
    const resumeUrl = '../../public/Thandeka-Portia-Penelope-Mazibuko.pdf';
    
    // Create a temporary link element
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'Thandeka_Portia_P_Mazibuko_Resume.pdf'; // Replace with your name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const individualProjects = [
    {
      title: 'Shop-easy',
      description: 'An online marketplace for electronics with features like user authentication, product management, a shopping cart, and secure payments.',
      techStack: ['React.js', 'Tailwind CSS', 'Redux', 'Firebase SDK', 'Node.js', 'Express', 'Firestore'],
      features: ['User authentication', 'Product catalog', 'Shopping cart', 'Real-time database updates'],
      challenges: 'Integrating Firebase authentication and Firestore for seamless cart updates and checkout.',
      link: 'https://shopeasy-io.vercel.app/',
    },
    {
      title: 'Hotel Booking App',
      description: 'A hotel booking application enabling users to browse and book accommodations while administrators manage bookings and inventory.',
      techStack: ['React.js', 'Tailwind CSS', 'Redux', 'Firebase'],
      features: ['User authentication', 'Booking management', 'Real-time availability updates'],
      challenges: 'Implementing booking conflict resolution and real-time updates using Firebase.',
      link: 'https://hotel-app-alpha.vercel.app/',
    },
    {
      title: 'Todo List App',
      description: 'A full-stack to-do list application that allows users to create, edit, and manage tasks with a responsive and clean UI.',
      techStack: ['React.js', 'Tailwind CSS', 'SQLite', 'Node.js', 'Express'],
      features: ['Task management', 'Offline support', 'Responsive design'],
      challenges: 'Synchronizing local task data with the backend database during offline scenarios.',
      link: 'https://to-do-list-app-wpzq.vercel.app/',
    },
    {
      title: 'Recipe App',
      description: 'An interactive recipe application where users can explore, save, and manage recipes with detailed instructions and nutritional information.',
      techStack: ['React.js', 'Tailwind CSS', 'JSON Server'],
      features: ['Recipe search', 'Category-based browsing', 'User-friendly interface'],
      challenges: 'Preventing overlapping UI elements in responsive design and ensuring smooth navigation between categories.',
      link: 'https://task-9-online-recipe.vercel.app/',
    },
    {
      title: 'Weather App',
      description: 'A real-time weather tracking application that provides location-based weather forecasts and alerts.',
      techStack: ['React.js', 'SheCodes Weather API', 'Tailwind CSS'],
      features: ['Location-based weather', 'Five-day forecast', 'Weather alerts'],
      challenges: 'Handling API rate limits by implementing a caching mechanism for frequent requests.',
      link: 'https://to-do-list-app-wpzq.vercel.app/',
    }
  ];
  

  const assessments = [
    { name: 'HTML & CSS', date: '2024-11-15', score: '85%', notes: 'Strong understanding of responsive design' },
    { name: 'JavaScript', date: '2024-12-01', score: '90%', notes: 'Excellent grasp of async programming' },
    { name: 'React Native', date: '2024-12-15', score: '88%', notes: 'Successfully completed complex mobile app' }
  ];

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      {/* Cover Page */}
      <Card className="text-center p-8">
        <CardHeader>
        <h2 className="text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-pink-600 to-purple-600">
  My journey at CodeTribe Academy
</h2>

        </CardHeader>
        <CardContent className="space-y-2">

          <p>CodeTribe Location: Pietermaritzburg</p>
          <p>Program: Web/Mobile Development Track</p>
          <p>Email: thandekaportiap05@gmail.com</p>
          <p>Phone: +27 826325121</p>
          <p>Last Updated: January 13, 2025</p>
          <button
            onClick={handleDownloadResume}
            className="mt-4 inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors"
          >
            <Download size={20} />
            Download Resume
          </button>
          
        </CardContent>
      </Card>

      {/* Personal Introduction */}
      {/* <Card>
        <CardHeader>
          <CardTitle>Personal Introduction</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-start gap-6">
            <img 
              src="/api/placeholder/150/150" 
              alt="Profile"
              className="rounded-full w-32 h-32"
            />
            <p className="text-lg">
              I am a passionate web developer with a keen interest in creating responsive 
              and user-friendly applications. My journey at CodeTribe Academy has equipped 
              me with both technical skills and practical experience in modern web 
              development technologies.
            </p>
          </div>
        </CardContent>
      </Card> */}

      {/* Skills Matrix */}
      <Card>
        <CardHeader>
          <CardTitle>Skills Matrix</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-2">Skill</th>
                  <th className="text-left p-2">Proficiency Level</th>
                  <th className="text-left p-2">Notes</th>
                </tr>
              </thead>
              <tbody>
                {skills.map((skill, index) => (
                  <tr key={index} className="border-b">
                    <td className="p-2">{skill.name}</td>
                    <td className="p-2">
                      <span className={`px-2 py-1 rounded ${
                        skill.level === 'Advanced' ? 'bg-green-100 text-green-800' :
                        skill.level === 'Intermediate' ? 'bg-blue-100 text-blue-800' :
                        'bg-gray-100 text-gray-800'
                      }`}>
                        {skill.level}
                      </span>
                    </td>
                    <td className="p-2">{skill.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Individual Projects */}
      <Card>
        <CardHeader>
          <CardTitle>Individual Projects</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
         
            {individualProjects.map((project, index) => (
              <div key={index} className="border   rounded-lg p-4">
                 <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800"
                  >
                    <span>View Project</span>
                    <ExternalLink size={20} />
                  </a>
                </div>
                <p className="mb-2">{project.description}</p>
                <div className="mb-2">
                  <h4 className="font-semibold">Tech Stack:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, i) => (
                      <span key={i} className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm hover:animate-shake">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="mb-2">
                  <h4 className="font-semibold">Key Features:</h4>
                  <ul className="list-disc pl-5">
                    {project.features.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold">Challenges & Solutions:</h4>
                  <p>{project.challenges}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Assessments */}
      <Card>
        <CardHeader>
          <CardTitle>Assessments</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-2">Assessment</th>
                  <th className="text-left p-2">Date</th>
                  <th className="text-left p-2">Score</th>
                  <th className="text-left p-2">Notes</th>
                </tr>
              </thead>
              <tbody>
                {assessments.map((assessment, index) => (
                  <tr key={index} className="border-b">
                    <td className="p-2">{assessment.name}</td>
                    <td className="p-2">{assessment.date}</td>
                    <td className="p-2">
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded">
                        {assessment.score}
                      </span>
                    </td>
                    <td className="p-2">{assessment.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Post-Program Goals */}
      <Card>
        <CardHeader>
          <CardTitle>Post-Program Goals</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-lg mb-2">Short-Term Goals</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Secure a position as a junior web developer</li>
                <li>Build a personal blog using React.js</li>
                <li>Contribute to at least one open-source project</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">Long-Term Goals</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Advance to a senior developer role within 5 years</li>
                <li>Mentor other aspiring developers</li>
                <li>Specialize in cloud architecture and DevOps</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Codetribe;