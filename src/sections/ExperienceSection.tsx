type ExperienceCardProps = {
  company: string;
  role: string;
  duration: string;
  location: string;
  description: string;
  link?: string;
};

const ExperienceCard = ({ company, role, duration, location, description, link }: ExperienceCardProps) => (
  <div className="card bg-base-200 shadow-lg p-6 hover:-translate-y-1 hover:shadow-xl transition-all duration-200">
    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4">
      <div>
        <h3 className="text-xl font-bold">
          {link ? (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-base-content hover:text-primary transition-colors duration-200 inline-flex items-center gap-1"
            >
              {company}
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
          ) : (
            <span className="text-base-content">{company}</span>
          )}
        </h3>
        <h4 className="text-lg font-semibold text-primary">{role}</h4>
      </div>
      <div className="text-sm text-base-content/70 mt-2 sm:mt-0 sm:text-right">
        <div>{duration}</div>
        <div>{location}</div>
      </div>
    </div>
    <p className="text-base-content/80 mt-3">{description}</p>
  </div>
);

const ExperienceSection = () => {
  const experiences = [
    {
      company: "Duke Aero",
      role: "Avionics Engineer",
      duration: "Sept 2025 – Present",
      location: "Durham, NC",
      description: `
        Duke Aero is Duke's rocketry team, which designs and launches a 30k-ft apogee rocket for the International Rocket Engineering Competition each year.
        As an avionics engineer, I work on the custom Eris Epsilon flight computer, focusing on the design of the power distribution board that converts battery input into multiple regulated voltage rails for onboard electronics.
        My work includes PCB design and validation in KiCAD, testing of sensors, radio and telemetry systems, and embedded programming for flight data acquisition and event control.
      `,
      link: "https://dukerocketry.com/"
    },
    {
      company: "Cyber-Physical Systems Lab",
      role: "Embedded Systems & Machine Learning Researcher",
      duration: "Aug 2025 – Present",
      location: "Durham, NC",
      description: `
        The Cyber-Physical Systems Lab is Duke's research group focused on the intersection of embedded systems, AI, and control theory for safety-critical applications including autonomous systems and medical devices.
        As a researcher, I work on adaptive deep brain stimulation (aDBS) systems that use sensor-driven control for patient-specific therapeutic adjustments.
        My research involves analyzing accelerometer and biosignal data from wearable sensors like the Apple Watch for activity classification and tremor detection, developing embedded real-time control firmware for closed-loop neurostimulation, and integrating machine learning algorithms directly into implanted medical devices to enable personalized treatment.
      `,
      link: "https://cpsl.pratt.duke.edu/"
    },
    {
      company: "Duke University",
      role: "Teaching Assistant – Data Structures and Algorithms",
      duration: "Aug 2025 – Present",
      location: "Durham, NC",
      description: `
        Supporting undergraduate students in learning fundamental computer science concepts, conducting office hours, and grading assignments.
      `,
      link: "https://cs.duke.edu/"
    },
    {
      company: "Centennial Technologies",
      role: "Software Engineering Intern",
      duration: "Jun 2025 – Aug 2025",
      location: "Leesburg, VA",
      description: `
        Centennial Technologies is a software and data solutions company that develops intelligent, large-scale platforms for enterprise and government clients.
        During my internship, I worked on CHAAP (chaap.ai), an AI-driven platform that automates regulatory and compliance documentation workflows for the pharmaceutical and medical device industries.
        My responsibilities included modernizing backend infrastructure by transitioning legacy .NET services to Flask-based REST APIs and integrating them with Azure Cosmos DB for scalable, low-latency data storage.
        I also developed Python and PowerShell automation scripts to streamline document validation and PDF processing, improving overall reliability and reducing manual effort across the CHAAP platform.
      `,
      link: "https://www.centennialtechnologies.com/"
    },
    // {
    //   company: "RRK Foods Inc",
    //   role: "Business Systems Intern",
    //   duration: "Apr 2024 – Jan 2025",
    //   location: "Coppell, TX",
    //   description: `
    //     Supported business systems optimization and process improvement initiatives in the food industry.
    //   `,
    //   link: "https://rrkfoods.com/"
    // }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4">
      <h2 className="text-4xl font-bold text-center mb-12">Experience</h2>
      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <ExperienceCard
            key={index}
            company={exp.company}
            role={exp.role}
            duration={exp.duration}
            location={exp.location}
            description={exp.description}
            link={exp.link}
          />
        ))}
      </div>
    </div>
  );
};

export default ExperienceSection;