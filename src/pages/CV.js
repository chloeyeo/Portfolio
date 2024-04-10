const CV = () => {
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold my-8">CV / Resume</h1>
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-bold mb-4">Chloe Yeo</h2>
        <p className="text-lg text-gray-800 mb-6">
          Full Stack Software Developer
        </p>
        <div className="mb-6">
          <h3 className="text-lg font-bold mb-2">Education</h3>
          <p className="text-gray-700">
            Bachelor of Science in Computer Science - University of Glasgow
          </p>
          <p className="text-gray-700">Graduation Date: May 2025</p>
        </div>
        <div className="mb-6">
          <h3 className="text-lg font-bold mb-2">Work Experience</h3>
          <p className="text-gray-700">
            Software Engineer Intern - JPMorgan Chase & Co.
          </p>
          <p className="text-gray-700">Jun 2023 - Aug 2023</p>
          <ul className="list-disc list-inside text-gray-700 pl-4">
            <li>
              Developed backend applications using AWS Lambda and Java Spring
              Boot.
            </li>
            <li>
              Utilized Terraform and AWS Redis ElastiCache for data storage and
              retrieval.
            </li>
            <li>
              Collaborated with team members on software infrastructure
              projects.
            </li>
          </ul>
        </div>
        <div className="mb-6">
          <h3 className="text-lg font-bold mb-2">Skills</h3>
          <ul className="list-disc list-inside text-gray-700 pl-4">
            <li>JavaScript</li>
            <li>React</li>
            <li>Node.js</li>
            <li>Java</li>
            <li>Spring Boot</li>
            <li>MongoDB</li>
            {/* Add more skills as needed */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CV;
