const infographicData = {
  infoSecurity: {
    title: "Information Security",
    sections: [
      {
        title: "Definition and Importance",
        content: [
          {
            subtitle: "What is Information Security?",
            text: "Information Security (InfoSec) is the practice of protecting information by mitigating information risks. It involves preventing, detecting, and responding to unauthorized access, use, disclosure, disruption, modification, or destruction of information."
          },
          {
            subtitle: "Importance in Organizations",
            text: "InfoSec is crucial for organizations to protect sensitive data, maintain customer trust, comply with regulations, and safeguard their reputation and financial assets."
          }
        ]
      },
      {
        title: "Goals of Information Security",
        content: [
          {
            subtitle: "Confidentiality",
            text: "Ensuring that information is accessible only to those authorized to have access."
          },
          {
            subtitle: "Integrity",
            text: "Maintaining and assuring the accuracy and completeness of data over its entire lifecycle."
          },
          {
            subtitle: "Availability",
            text: "Ensuring that information is accessible to authorized users when needed."
          }
        ]
      },
      {
        title: "Information Security Principles",
        content: [
          {
            subtitle: "Least Privilege",
            text: "Users should only be given the minimum levels of access necessary to perform their job functions."
          },
          {
            subtitle: "Defense in Depth",
            text: "Implementing multiple layers of security controls to protect assets."
          },
          {
            subtitle: "Fail-Safe Defaults",
            text: "The default state of a system should be secure, requiring explicit permissions for access."
          }
        ]
      },
      {
        title: "Information Security Management",
        content: [
          {
            subtitle: "Risk Management",
            text: "Identifying, assessing, and mitigating risks to information assets."
          },
          {
            subtitle: "Compliance and Legal Requirements",
            text: "Adhering to industry standards and legal regulations regarding data protection and privacy."
          },
          {
            subtitle: "Security Policies and Procedures",
            text: "Developing and implementing guidelines for secure information handling and system use."
          }
        ]
      }
    ]
  },
  cyberUmbrella: {
    title: "Cyber Security Umbrella",
    sections: [
      {
        title: "Overview of Cyber Security",
        content: [
          {
            subtitle: "Definition and Scope",
            text: "Cybersecurity is the practice of protecting systems, networks, and programs from digital attacks. It encompasses a wide range of technologies, processes, and practices."
          },
          {
            subtitle: "Importance of Cyber Security",
            text: "As digital transformation accelerates, cybersecurity becomes critical in safeguarding personal data, business operations, and national security."
          }
        ]
      },
      {
        title: "Categories of Cyber Security",
        content: [
          {
            subtitle: "Network Security",
            text: "Protecting the integrity of network and infrastructure from unauthorized access or attacks."
          },
          {
            subtitle: "Application Security",
            text: "Ensuring software applications are free from threats that could access or modify sensitive information."
          },
          {
            subtitle: "Endpoint Security",
            text: "Securing end-user devices such as desktops, laptops, and mobile devices."
          },
          {
            subtitle: "Data Security",
            text: "Protecting the confidentiality, integrity, and availability of data in storage and in transit."
          }
        ]
      },
      {
        title: "Cyber Security Frameworks",
        content: [
          {
            subtitle: "NIST Cybersecurity Framework",
            text: "A set of guidelines for private sector organizations to assess and improve their ability to prevent, detect, and respond to cyber attacks."
          },
          {
            subtitle: "ISO/IEC 27001",
            text: "An international standard for managing information security, providing requirements for an information security management system (ISMS)."
          },
          {
            subtitle: "CIS Controls",
            text: "A set of 20 critical security controls that organizations should implement to defend against common cyber attacks."
          }
        ]
      },
      {
        title: "Threat Landscape",
        content: [
          {
            subtitle: "Types of Threats",
            text: "Common threats include malware (viruses, worms, trojans), phishing attacks, denial-of-service attacks, and man-in-the-middle attacks."
          },
          {
            subtitle: "Current Trends and Emerging Threats",
            text: "Emerging threats include AI-powered attacks, IoT vulnerabilities, ransomware as a service (RaaS), and supply chain attacks."
          }
        ]
      }
    ]
  },
  securityElements: {
    title: "Cyber Security Elements",
    sections: [
      {
        title: "Access Control",
        content: [
          {
            subtitle: "Authentication",
            text: "Verifying the identity of a user, process, or device, often as a prerequisite to allowing access to resources in an information system."
          },
          {
            subtitle: "Authorization",
            text: "The process of granting or denying specific requests to obtain and use information and related information processing services."
          },
          {
            subtitle: "Accounting (AAA)",
            text: "The tracking of the consumption of network resources by users. This information may be used for management, planning, billing, or other purposes."
          }
        ]
      },
      {
        title: "Encryption",
        content: [
          {
            subtitle: "Types of Encryption",
            text: "Symmetric encryption uses the same key for encryption and decryption, while asymmetric encryption uses a public key for encryption and a private key for decryption."
          },
          {
            subtitle: "Key Management",
            text: "The management of cryptographic keys in a cryptosystem, including dealing with the generation, exchange, storage, use, crypto-shredding and replacement of keys."
          }
        ]
      },
      {
        title: "Network Security",
        content: [
          {
            subtitle: "Firewalls",
            text: "A network security device that monitors incoming and outgoing network traffic and decides whether to allow or block specific traffic based on a defined set of security rules."
          },
          {
            subtitle: "Intrusion Detection Systems (IDS)",
            text: "A device or software application that monitors a network or systems for malicious activity or policy violations."
          },
          {
            subtitle: "Virtual Private Networks (VPNs)",
            text: "Extends a private network across a public network, enabling users to send and receive data across shared or public networks as if their computing devices were directly connected to the private network."
          }
        ]
      },
      {
        title: "Incident Response",
        content: [
          {
            subtitle: "Incident Handling Procedures",
            text: "A set of instructions that an organization follows when responding to a cyber attack, data breach or other security incident."
          },
          {
            subtitle: "Forensics",
            text: "The application of investigation and analysis techniques to gather and preserve evidence from a computer or network incident in a way that is suitable for presentation in a court of law."
          }
        ]
      },
      {
        title: "Security Audits and Monitoring",
        content: [
          {
            subtitle: "Log Management",
            text: "The collective processes and policies used to administer and facilitate the generation, transmission, analysis, storage, archiving and ultimate disposal of large volumes of log data."
          },
          {
            subtitle: "Security Information and Event Management (SIEM)",
            text: "A system that collects and analyzes log data from various sources across an organization's IT infrastructure to identify potential security threats in real-time."
          }
        ]
      }
    ]
  },
  keyTerminologies: {
    title: "Key Terminologies",
    terms: [
      {
        term: "Malware",
        definition: "Malicious software designed to disrupt, damage, or gain unauthorized access to a computer system. Types include viruses (self-replicating programs), worms (self-propagating malware), trojans (malware disguised as legitimate software), and ransomware (malware that encrypts files and demands payment for decryption)."
      },
      {
        term: "Phishing",
        definition: "A cyberattack that uses disguised email as a weapon. The goal is to trick the email recipient into believing that the message is something they want or need and to click a link or download an attachment. Spear phishing targets specific individuals or organizations, while whaling specifically targets senior executives and other high-profile targets."
      },
      {
        term: "Firewall",
        definition: "A network security system that monitors and controls incoming and outgoing network traffic based on predetermined security rules. Types include network firewalls (protecting traffic between networks) and host-based firewalls (protecting traffic in and out of a single device)."
      },
      {
        term: "Encryption",
        definition: "The process of converting information or data into a code to prevent unauthorized access. Symmetric encryption uses the same key for encryption and decryption, while asymmetric encryption uses a public key for encryption and a private key for decryption."
      },
      {
        term: "Intrusion Detection System (IDS)",
        definition: "A device or software application that monitors a network or systems for malicious activity or policy violations. Network IDS monitors network traffic, while Host IDS monitors the internals of a computing system."
      },
      {
        term: "Vulnerability",
        definition: "A weakness in an information system, system security procedures, internal controls, or implementation that could be exploited by a threat source. Vulnerability assessment is the process of identifying, quantifying, and prioritizing vulnerabilities in a system. Patch management involves regularly updating software to address known vulnerabilities."
      },
      {
        term: "Penetration Testing",
        definition: "An authorized simulated cyberattack on a computer system, performed to evaluate the security of the system. Black box testing is conducted without prior knowledge of the system's internals, while white box testing is performed with full knowledge of the system's architecture and components."
      },
      {
        term: "Social Engineering",
        definition: "The psychological manipulation of people into performing actions or divulging confidential information. Techniques include pretexting (creating a fabricated scenario), baiting, tailgating, and phishing. Prevention involves employee education, implementing strict security policies, and regular security awareness training."
      }
    ]
  }
};