type ProjectCardProps = {
  title: string;
  technologies: string;
  duration: string;
  achievements: string[];
};

const ProjectCard = ({ title, technologies, duration, achievements }: ProjectCardProps) => (
  <div className="card bg-base-200 shadow-lg p-6 hover:-translate-y-1 hover:shadow-xl transition-all duration-200">
    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4">
      <div>
        <h3 className="text-xl font-bold text-base-content">{title}</h3>
        <div className="text-sm text-primary font-semibold">{technologies}</div>
      </div>
      <div className="text-sm text-base-content/70 mt-2 sm:mt-0">
        {duration}
      </div>
    </div>
    <ul className="space-y-2 text-base text-base-content">
      {achievements.map((achievement, index) => (
        <li key={index} className="flex items-start">
          <span className="text-primary mr-2 mt-1">•</span>
          <span dangerouslySetInnerHTML={{ __html: achievement }} />
        </li>
      ))}
    </ul>
  </div>
);

const PortfolioSection = () => {
  const projects = [
    {
      title: "SpeakWare: Smart Wearable for Real-World Language Practice",
      technologies: "Embedded Systems, C++, Python",
      duration: "2025 - Present",
      achievements: [
        "Developing a <strong>wearable device</strong> that captures real-world speech to help non-native speakers improve fluency and pronunciation through everyday conversations",
        "Building a <strong>cloud-based system</strong> that provides automatic transcription, pronunciation analysis, and personalized language feedback from recorded audio",
        "Implementing <strong>privacy-first design</strong> with encryption and secure data handling to protect user conversations throughout the learning process"
      ]
    },
    {
      title: "Mini TPU on FPGA",
      technologies: "Verilog, FPGA, Digital Design, Python",
      duration: "2025",
      achievements: [
        "Developed a <strong>hardware-generating neural accelerator</strong> that converts trained PyTorch models into optimized <strong>Verilog pipelines</strong> for FPGA deployment",
        "Built and integrated a <strong>5-stage pipelined RISC CPU</strong> with <strong>hazard detection, forwarding, and modified Booth's multiplications",
        "Designed custom <strong>MAC, ReLU, and Argmax</strong> modules for parallel neural inference, verified through <strong>cycle-accurate simulation</strong> and FPGA debugging in Vivado",
        "Created Python tooling to <strong>generate layer-specific hardware and weights</strong>, enabling real-time, low-latency inference on a <strong>Xilinx FPGA</strong>"
      ]
    },
    {
      title: "Automatic Flag Raising System",
      technologies: "OnShape, KiCAD, C/C++, Arduino, HTML/CSS",
      duration: "2024-2025",
      achievements: [
        "Engineered an <strong>IoT-enabled flagpole device</strong> with motor-driven pulley system enabling remote flag raising and lowering through precise electronic control and embedded systems programming",
        "Built and tested circuits on solderable breadboards and designed matching <strong>PCB schematics using KiCAD</strong>",
        "Programmed <strong>ESP32 microcontroller in C++</strong> to host a secure web interface with password authentication, enabling real-time flag control via HTTPS requests and GPIO-driven motor actuation"
      ]
    },
    {
      title: "ML Venom Protein Screening Tool",
      technologies: "Python, TensorFlow",
      duration: "2022-2023",
      achievements: [
        "Designed and tuned an <strong>artificial neural network</strong> capable of screening de novo amino acid sequences of animal venom proteins, achieving <strong>96% prediction accuracy</strong> for molecular function",
        "Presented tool to industry experts and published a report on <strong>SSRN</strong> gaining 250+ views and 50+ downloads",
        "<strong>Awarded finalist at 2023 International Science and Engineering Fair</strong> in Computational Biology and Bioinformatics"
      ]
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4">
      <h2 className="text-4xl font-bold text-center mb-12">Portfolio</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            technologies={project.technologies}
            duration={project.duration}
            achievements={project.achievements}
          />
        ))}
      </div>
    </div>
  );
};

export default PortfolioSection;