import type { ExperienceEntry } from '@/types';

export const experience: ExperienceEntry[] = [
  {
    role: 'Software Engineer',
    company: 'Retail IT (Pvt) Ltd',
    period: 'Aug 2025 — Present',
    highlights: [
      {
        text: 'Built and maintain an Electronic Shelf Label (ESL) management portal for MINEW hardware, with brand-wise configuration, using Angular and .NET Core Web API.',
        tags: ['Angular', '.NET Core Web API'],
      },
      {
        text: 'Developed a customer face-recognition system that flags loyalty customers and triggers personalized offer messages, integrated with the POS.',
        tags: ['Angular', '.NET Core Web API'],
      },
      {
        text: 'Contributed to the architecture and development of a web-based POS system using Angular, .NET Core Web API and PostgreSQL.',
        tags: ['Angular', '.NET Core Web API', 'PostgreSQL'],
      },
      {
        text: 'Contributed to the architecture and development of a web-based ERP system using Angular, .NET Core Web API and PostgreSQL.',
        tags: ['Angular', '.NET Core Web API', 'PostgreSQL'],
      },
      {
        text: 'Contributed to a Goods Received Note (GRN) web application built with React.',
        tags: ['React'],
      },
      {
        text: 'Maintained and upgraded the Flutter SDK and distribution across multiple mobile apps.',
        tags: ['Flutter'],
      },
    ],
  },
  {
    role: 'Software Engineer',
    company: 'Spil Labs (Pvt) Ltd',
    period: 'Feb 2025 — Aug 2025',
    highlights: [
      {
        text: 'Developed a C# library to send emails using OAuth2 authentication, replacing legacy SMTP basic authentication, and integrated it into an existing VB.NET ERP application.',
        tags: ['C#', 'OAuth2', 'VB.NET'],
      },
      {
        text: 'Leading code restructuring efforts to modernize the ERP system by converting the legacy VB.NET Windows Forms application into a .NET Core Web API backend with a ReactJS frontend.',
        tags: ['VB.NET', '.NET Core Web API', 'React'],
      },
    ],
  },
  {
    role: 'Associate Software Engineer',
    company: 'Vallibel Finance (Pvt) Ltd',
    period: 'Jan 2024 — Feb 2025',
    highlights: [
      {
        text: 'Developed a web application using .NET Core and React to streamline direct deposit management and enhance the receipting process.',
        tags: ['.NET Core', 'React'],
      },
      {
        text: 'Enhanced an existing web portal with new features and a PHP, JavaScript, and MySQL backend, improving user experience and system performance.',
        tags: ['PHP', 'JavaScript', 'MySQL'],
      },
      {
        text: 'Contributed to a new barcode system to improve file tracking and streamline rejection handling.',
        tags: [],
      },
    ],
  },
  {
    role: 'Software Engineer Intern',
    company: 'QualitApps Asia (Pvt) Ltd',
    period: 'Jul 2021 — Jan 2022',
    highlights: [
      {
        text: 'Collaborated with the .NET development team to build and enhance a Medical Center Management System, contributed to the Angular front end, and implemented a reporting module for operational insights.',
        tags: ['.NET', 'Angular'],
      },
    ],
  },
];
