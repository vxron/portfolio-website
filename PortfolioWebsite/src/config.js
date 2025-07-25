export const config = {
  title: "Veronica's Portfolio...",
  sections: ["home", "skills", "experience", "projects", "contact"],
  home: {
    title: "VERONICA",
    subtitle: "MARROCCO",
  },
  skills: [
    {
      name: "Firmware & Test Development",
      details: "Python, C, C++, TCL",
      icon: "icons/coding.png",
      level: 75,
    },
    {
      name: "Circuit Design",
      details: "Spice Simulations, Schematic Design, PCB Layout",
      icon: "icons/circuit2.png",
      level: 85,
    },
    {
      name: "UX",
      details:
        "HTML, CSS, JavaScript, React, Blender, Adobe Illustrator, After Effects",
      icon: "icons/webdev.png",
      level: 60,
    },
    {
      name: "Electrical & Computer Testing",
      details:
        "Oscilloscopes, DMM, Network Analyzers, Waveform Generators, Traffic Generators",
      icon: "icons/oscilloscope2.png",
      level: 80,
    },
    {
      name: "Systems Integration",
      details: "Microcontrollers, Peripherals Interfacing, Embedded C",
      icon: "icons/controller1.png",
      level: 90,
    },
  ],
  experience: [
    {
      company: "Tesla",
      name: "Firmware Integration Intern",
      date: "Jan-Aug 2025",
      location: "Palo Alto, CA",
      bullets: [
        "Developing drive inverter firmware in C/C++ to support new vehicle hardware bringup, and improved autopilot feature handling.",
        "Developing Python test coverage to support the new variants in Tesla's extensive FW test repository.",
        "Testing & validating new variants and DI in SIL and over-the-air on factory models, inspecting CAN traces to debug failures.",
      ],
      image: "",
      link: "",
    },
    {
      company: "Nokia",
      name: "Service Router & Optical Module Test Platform Developer",
      date: "May-Aug 2024",
      location: "Ottawa, ON",
      bullets: [
        "Created comprehensive test plans to validate new optics under various traffic conditions, using network testing tools (Ixia, Spirent).",
        "Developed regression test automation in TCL for Nokia's large-scale Linux router test platform, adding coverage for new optics.",
        "Reproduced, characterized and resolved regression failures, collaborating closely with the software development team.",
      ],
      image: "exp_images/pink-bg.jpg",
      link: "",
    },
    {
      company: "McMaster University",
      name: "Embedded Systems & Programming TA",
      date: "Jan-May, Sept-Dec 2024",
      location: "Hamilton, ON",
      bullets: [
        "Led lab sessions of 50+ students for an embedded systems and microprocessors course (COMPENG 2DX3).",
        "Led Python tutorials for a freshman engineering course (IBEHS 1P10).",
        "Provided lab instruction and assisted students in hardware & software debugging (Assembly, Embedded C, Python).",
      ],
      image: "",
      link: "",
    },
    {
      company: "MDA Space",
      name: "Power Electronics Intern",
      date: "Aug-Dec 2023",
      location: "Montreal, QC",
      bullets: [
        "Assisted in the design of three switching power supplies & associated regulator circuitry for Canadarm3.",
        "Performed component selection, schematic design, and some PCB layout for the supplies using Xpedition Enterprise.",
        "Tested and validated subsystems for efficiency, failure mode (FMECA), and worst case analysis (WCA).",
      ],
      image: "",
      link: "",
    },
    {
      company: "McMaster University",
      name: "Research Study Assistant",
      date: "Jan-April 2023",
      location: "Hamilton, ON",
      bullets: [
        "Reviewed & triaged studies for a network meta-analysis comparing mechanical ventilator operation modes for patient outcome.",
      ],
      image: "",
      link: "",
    },
    {
      name: "Clinical Process Engineering Intern",
      company: "University Health Network",
      date: "May-Aug 2022",
      location: "Toronto, ON",
      bullets: [
        "Provided on-unit support in Toronto Western Hospital's Emergency Dept. to facilitate the launch of a new health information system.",
        "Documented 100+ bugs in new software (Epic) and implemented hardware/network fixes where applicable.",
      ],
      image: "",
      link: "",
    },
  ],
  projects: [
    {
      name: "3D Spatial Mapper",
      description: "",
      image: "projects/3d-spatial-mapper.png",
      link: "pdfs/spatial-mapper-slides.pdf",
      tags: [],
    },
    {
      name: "Monitor & Alarm System for Neck Posture",
      description: "",
      image: "projects/monitor-alarm.png",
      link: "pdfs/neck-monitor.pdf",
      tags: [],
    },
    {
      name: "ADC module for Neural Recording",
      description: "",
      image: "projects/ADC-module.png",
      link: "pdfs/adc-module-for-neural-recording.pdf",
      tags: [],
    },
    {
      name: "Python Algorithm for Channel Capacity",
      description: "",
      image: "projects/blahut-arimoto.png",
      link: "pdfs/blahut-arimoto.pdf",
      tags: [],
    },
    {
      name: "Synthetic Biological Circuit for Lactose Intolerance",
      description: "",
      image: "projects/lactose-intolerance.png",
      link: "pdfs/lactose-intolerance.pdf",
      tags: [],
    },
    {
      name: "E. Coli Biosensor Design",
      description: "",
      image: "projects/ecoli-biosensor.png",
      link: "pdfs/ecoli-biosensor.pdf",
      tags: [],
    },
    {
      name: "Wearable Anklet",
      description: "",
      image: "projects/wearable-anklet.png",
      link: "pdfs/ankle-monitor.pdf",
      tags: [],
    },
  ],
  contact: {
    name: "Veronica Marrocco",
    location: "Toronto, ON",
    socials: {
      linkedin: "https://www.linkedin.com/in/vlmarrocco/",
      github: "https://github.com/vxron",
      mail: "vlmarrocco@gmail.com",
      phone: "905-243-2030",
    },
    resume: "",
  },
};
