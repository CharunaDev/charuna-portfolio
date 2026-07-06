import {
  SiAngular,
  SiCplusplus,
  SiDotnet,
  SiFirebase,
  SiGit,
  SiGithub,
  SiGitlab,
  SiJavascript,
  SiJira,
  SiJquery,
  SiMysql,
  SiNextdotjs,
  SiPhp,
  SiPostgresql,
  SiReact,
  SiSharp,
  SiSourcetree,
} from 'react-icons/si';
import type { SkillGroup } from '@/types';

export const skillGroups: SkillGroup[] = [
  {
    category: 'Languages',
    items: [
      { name: 'C#', icon: SiSharp, color: '#a179dc' },
      { name: 'JavaScript', icon: SiJavascript, color: '#f7df1e' },
      { name: 'PHP', icon: SiPhp, color: '#777bb4' },
      { name: 'VB.NET', icon: null, color: '#a78bfa' },
      { name: 'C++', icon: SiCplusplus, color: '#00599c' },
    ],
  },
  {
    category: 'Frameworks & Libraries',
    items: [
      { name: 'Angular', icon: SiAngular, color: '#dd0031' },
      { name: '.NET Framework', icon: SiDotnet, color: '#512bd4' },
      { name: 'ASP.NET Core', icon: SiDotnet, color: '#512bd4' },
      { name: 'React', icon: SiReact, color: '#61dafb' },
      { name: 'Next.js', icon: SiNextdotjs, color: '#f5f5f7' },
      { name: 'jQuery', icon: SiJquery, color: '#0769ad' },
    ],
  },
  {
    category: 'Databases',
    items: [
      { name: 'SQL Server', icon: null, color: '#a78bfa' },
      { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169e1' },
      { name: 'MySQL', icon: SiMysql, color: '#4479a1' },
      { name: 'Firebase', icon: SiFirebase, color: '#ffca28' },
    ],
  },
  {
    category: 'Version Control',
    items: [
      { name: 'Git', icon: SiGit, color: '#f05032' },
      { name: 'GitHub', icon: SiGithub, color: '#f5f5f7' },
      { name: 'GitLab', icon: SiGitlab, color: '#fc6d26' },
      { name: 'Azure DevOps', icon: null, color: '#a78bfa' },
      { name: 'SourceTree', icon: SiSourcetree, color: '#0052cc' },
    ],
  },
  {
    category: 'Tools',
    items: [{ name: 'Jira', icon: SiJira, color: '#0052cc' }],
  },
];
