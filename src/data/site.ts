export const site = {
  name: 'Talha Enes Ayranci',
  title: 'Talha Enes Ayranci',
  description:
    'PhD Candidate in Computing Science at the University of Glasgow.',
  url: 'https://talhayranci.com',
  email: 't.ayranci.1@research.gla.ac.uk',
  social: {
    github: 'https://github.com/claretb',
    linkedin: 'https://www.linkedin.com/in/talhayranci/',
    x: 'https://twitter.com/talhayranci',
    musavver: 'https://www.musavver.com/author/talhayranci/',
  },
  about: [
    'I am a PhD candidate in Computing Science at the University of Glasgow, under the supervision of Dr. Gerardo Aragon-Camarasa and Dr. Mireilla Bikanga Ada. My research focuses on accessible, low-cost robotic systems and software platforms for artificial intelligence and robotics education.',
    'Apart from research, I enjoy writing, watching and playing football, and exploring Scotland. I also have a growing interest in the philosophy of science.',
  ],
  extendedAbout: [
    'You can find a brief overview of my background below. For a detailed CV, follow the résumé link.',
    "Don't hesitate to reach out through any of the contact channels above. I am always open to conversations around research, education and technology.",
  ],
  resumeUrl: '/Talha_Enes_Ayranci_CV.pdf',
  updates: [
    {
      date: '2026-07-10',
      title: 'Our FIE 2026 paper was accepted!',
      description:
        'Our paper on Curio was accepted for publication at the 2026 Frontiers in Education Conference.',
    },
    {
      date: '2026-06-15',
      title: 'We completed our second Curio case study',
      description: 'Another important step in evaluating Curio in practice.',
    },
    {
      date: '2025-10-10',
      title: 'I passed my third APR',
      description: 'My third PhD Annual Progress Review is complete.',
    },
    {
      date: '2024-11-29',
      title: 'We completed our first Curio case study',
      description:
        'Our first case study with Curio was completed with 23 participants.',
    },
    {
      date: '2024-10-15',
      title: 'I passed my second APR',
      description: 'My second PhD Annual Progress Review is complete.',
    },
    {
      date: '2024-08-29',
      title: 'Our ICALT paper was published!',
      description:
        'Our first paper about Curio was published at ICALT 2024. Hooray!',
    },
    {
      date: '2024-05-10',
      title: 'My daughter was born',
      description: 'A very special moment for our family. ❤️',
    },
    {
      date: '2023-09-15',
      title: 'My new website is live!',
      description:
        'I renewed my personal website. It is now more informative and minimalistic.',
    },
    {
      date: '2023-08-29',
      title: 'I passed my first APR',
      description: 'I am now a second-year PhD researcher.',
    },
  ],
  education: [
    {
      period: 'Nov 2022 – Present',
      title: 'Doctor of Philosophy',
      description: 'School of Computing Science, University of Glasgow',
    },
    {
      period: 'Sep 2021 – Sep 2022',
      title: "Master's Degree",
      description:
        'Robotics and Artificial Intelligence, University of Glasgow',
    },
    {
      period: 'Jul 2015 – Jun 2019',
      title: "Bachelor's Degree",
      description: 'Computer Engineering, Konya Technical University',
    },
  ],
  experience: [
    {
      period: 'Sep 2023 – Present',
      title: 'Teaching Assistant',
      description: 'University of Glasgow',
    },
    {
      period: 'Jun 2023 – Present',
      title: 'Software Developer',
      description: 'University of Glasgow Software Services',
    },
    {
      period: 'Feb 2020 – Sep 2021',
      title: 'Software Engineer',
      description: 'PostDICOM',
    },
  ],
} as const;

export const navigation = [
  { href: '/', label: 'Home' },
  { href: '/about/', label: 'About' },
  { href: '/projects/', label: 'Projects' },
  { href: '/blog/', label: 'Blog' },
  { href: '/aesthetics/', label: 'Aesthetics' },
] as const;
