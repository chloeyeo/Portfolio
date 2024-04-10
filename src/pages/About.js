import GitHubCalendar from "react-github-calendar";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiGit,
  DiSass,
} from "react-icons/di";
import { SiTypescript, SiRedux, SiAmazonaws } from "react-icons/si";
import { BiLogoSpringBoot } from "react-icons/bi";

const About = () => {
  return (
    <div className="main bg-gray-100 min-h-screen py-10 mb-16">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h1 className="text-2xl font-bold mb-8">About Me</h1>
          <div className="bg-gray-200 rounded-lg p-6 mb-8">
            <p className="text-lg text-gray-800">
              Greetings, <br />I am{" "}
              <span className="font-semibold">Chloe Yeo</span>, a dedicated{" "}
              <span className="font-semibold">
                full-stack software engineer
              </span>{" "}
              hailing from <span className="font-semibold">South Korea</span>.
              Currently, I am in my final year, pursuing a Bachelor of Science
              in Computer Science at the esteemed{" "}
              <span className="font-semibold">University of Glasgow</span>.
            </p>
            <br />
            <p className="text-lg text-gray-800">
              Throughout my academic journey, I've actively engaged in practical
              work experiences and hackathons, honing my skills and fostering a
              deep understanding of software development.
            </p>
            <br />
            <p className="text-lg text-gray-800">
              During my time at University, I've had the privilege of
              participating in major hackathons such as Athena London Hackathon
              and Do you have the GUTS? Hackathon, where I showcased my
              innovative projects and problem-solving abilities.
            </p>
            <br />
            <p className="text-lg text-gray-800">
              These experiences have allowed me to collaborate with diverse
              teams, tackle real-world challenges, and develop innovative
              solutions.
            </p>
          </div>
          <h1 className="text-2xl font-bold mb-8">Work Experience</h1>

          <div className="work-experience mb-8 bg-gray-200 rounded-lg p-6">
            <div className="work-item">
              <div className="flex justify-between items-center mb-4">
                <div>
                  <img
                    src="../assets/images/jp_logo.png"
                    alt="JPMorgan Chase & Co. Logo"
                    className="h-8"
                  />
                  <span className="font-semibold ml-2">
                    Software Engineer Intern
                  </span>
                </div>
                <div className="text-sm">
                  <span className="font-semibold">Jun 2023 - Aug 2023</span>
                  <span className="mx-1">•</span>
                  <span className="text-gray-500">3 mos</span>
                </div>
              </div>
              <p className="text-base text-gray-800 mb-4">
                Worked under Research Distribution as a Backend Developer intern
                at JPMorgan Chase & Co., utilizing AWS Lambda and Java Spring
                Boot to build the base of the application. Implemented Terraform
                and AWS Redis ElastiCache to retrieve and store companies' data
                from an internal endpoint, allowing quick retrieval of data from
                cache by clients and ensuring up-to-date data.
              </p>
              <div className="skills">
                <span className="badge">AWS Lambda</span>
                <span className="badge">Java</span>
                <span className="badge">Spring Boot</span>
                <span className="badge">Terraform</span>
                <span className="badge">AWS Redis ElastiCache</span>
                <span className="badge">Software Infrastructure</span>
                <span className="badge">Jira</span>
                <span className="badge">TDD</span>
                {/* Add more skills as needed */}
              </div>
            </div>

            <div className="work-item mt-8">
              <div className="flex justify-between items-center mb-4">
                <div>
                  <img
                    src="../assets/images/jp_logo.png"
                    alt="JPMorgan Chase & Co. Logo"
                    className="h-8"
                  />
                  <span className="font-semibold ml-2">
                    Software Engineer Intern
                  </span>
                </div>
                <div className="text-sm">
                  <span className="font-semibold">Jun 2022 - Aug 2022</span>
                  <span className="mx-1">•</span>
                  <span className="text-gray-500">3 mos</span>
                </div>
              </div>
              <p className="text-base text-gray-800 mb-4">
                Worked under Public Cloud as a Full Stack Developer intern at
                JPMorgan Chase & Co., utilizing AWS, React.js, Java Spring Boot,
                and CSS/HTML to enable clients to view their historic
                transactions data based on selecting their account number or
                name.
              </p>
              <div className="skills">
                <span className="badge">JavaScript</span>
                <span className="badge">Java</span>
                <span className="badge">Spring Boot</span>
                <span className="badge">React.js</span>
                <span className="badge">Amazon Web Services (AWS)</span>
                <span className="badge">Software Development</span>
                <span className="badge">Jenkins</span>
                {/* Add more skills as needed */}
              </div>
            </div>
          </div>
          <h2 className="text-2xl font-bold mb-6">Tech Stack</h2>
          <div className="flex flex-wrap justify-center mb-8 bg-gray-200 rounded-lg p-6">
            <SkillIcon icon={<DiJavascript1 />} text="JavaScript" />
            <SkillIcon icon={<SiTypescript />} text="TypeScript" />
            <SkillIcon icon={<DiNodejs />} text="Node.js" />
            <SkillIcon icon={<DiReact />} text="React" />
            <SkillIcon icon={<DiMongodb />} text="MongoDB" />
            <SkillIcon icon={<DiSass />} text="Sass" />
            <SkillIcon icon={<SiAmazonaws />} text="AWS" />
            <SkillIcon icon={<SiRedux />} text="Redux" />
            <SkillIcon icon={<BiLogoSpringBoot />} text="SpringBoot" />
            <SkillIcon icon={<DiGit />} text="Git" />
          </div>
          <hr className="border-gray-300 my-8" />
          <h2 className="text-2xl font-bold mb-6">GitHub Activity</h2>
          <div className="flex justify-center">
            <GitHubCalendar
              username="chloeyeo"
              blockSize={15}
              blockMargin={5}
              fontSize={15}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const SkillIcon = ({ icon, text }) => {
  return (
    <div className="flex items-center justify-center w-1/5 p-4">
      {icon}
      <span className="ml-2">{text}</span>
    </div>
  );
};

export default About;
