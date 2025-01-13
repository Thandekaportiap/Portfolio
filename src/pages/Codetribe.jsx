import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";

const Codetribe = () => {
  const skills = [
    { name: 'HTML', level: 'Intermediate', notes: 'Used in multiple projects' },
    { name: 'CSS', level: 'Advanced', notes: 'Styled responsive layouts' },
    { name: 'JavaScript', level: 'Intermediate', notes: 'Built dynamic web applications' },
    { name: 'React Native', level: 'Intermediate', notes: 'Developed mobile apps' },
    { name: 'TypeScript', level: 'Beginner', notes: 'Applied in API integrations' }
  ];

  const individualProjects = [
    {
      title: 'E-commerce Platform',
      description: 'A full-featured online shopping platform with user authentication and payment integration',
      techStack: ['React.js', 'Node.js', 'MongoDB', 'Express'],
      features: ['User authentication', 'Product catalog', 'Shopping cart', 'Payment integration'],
      challenges: 'Implementing real-time inventory updates - Solved using WebSocket connections'
    },
    {
      title: 'Weather Application',
      description: 'Real-time weather tracking application with location services',
      techStack: ['React.js', 'Weather API', 'Tailwind CSS'],
      features: ['Location detection', 'Five-day forecast', 'Weather alerts'],
      challenges: 'API rate limiting - Implemented caching solution'
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
          <CardTitle className="text-3xl font-bold mb-4">Codetribe </CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <h2 className="text-xl font-semibold">Thandeka Portia P Mazibuko</h2>
          <p>CodeTribe Location: Pietermaritzburg</p>
          <p>Program: Web Development Track</p>
          <p>Email: thandekportiap05@gmail.com</p>
          <p>Phone: +27 826325121</p>
          <p>Last Updated: January 13, 2025</p>
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
              <div key={index} className="border rounded-lg p-4">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="mb-2">{project.description}</p>
                <div className="mb-2">
                  <h4 className="font-semibold">Tech Stack:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, i) => (
                      <span key={i} className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">
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
                <li>Build a personal blog using Next.js</li>
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