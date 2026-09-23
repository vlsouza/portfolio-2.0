// Images are still served from the original Wix media CDN.
// To self-host: download them into /public/images and swap the URLs here.
const wix = (id: string) => `https://static.wixstatic.com/media/595997_${id}`;

export const assets = {
  heroPhoto: wix('dae1521889d8456c94c301da52670cfb~mv2.jpg'),
  console3ds: wix('b0201e64106c46d1b1854d31fbea55da~mv2.png'),
  legoRed: wix('5439c4076102429783ae1b5cfdcfb713~mv2.png'),
  legoYellow: wix('d6658cfc80bd497685bba1e9e14403c2~mv2.png'),
};

export const person = {
  name: 'Vinicius Souza',
  email: 'viniciuslcsouza@gmail.com',
  location: 'Lisbon, Portugal',
  roleLine: [
    { text: 'Software Engineer | Backend | ', highlight: false },
    { text: 'Claude Code & AI Agent Workflows', highlight: true },
  ],
  badge: ['European residence', 'Remote/Hybrid', 'first'],
};

export const heroStripes = [
  { emoji: '🤖', text: 'Building AI Agent Workflows', color: 'blue' },
  { emoji: '👨‍💻', text: '10+ years of experience as a Backend Software Engineer (Go, Node.js)', color: 'red' },
  { emoji: '🎱', text: 'Server engineer at Miniclip, building 8 Ball Pool in Erlang', color: 'yellow' },
  { emoji: '🎓', text: 'Always learning: AI bootcamp, Game Design post-degree', color: 'black' },
] as const;

export const socialLinks = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/vinicius-souza-9895b185/', icon: wix('6ce6141f8c064fd78c4cac1320d444b7~mv2.png') },
  { label: 'GitHub', href: 'https://github.com/vlsouza', icon: wix('a3a4effb65c0484fade1b3db3fcbc9f5~mv2.png') },
  { label: 'Itch.io', href: 'https://vvlsouza.itch.io/', icon: wix('e683088ad1c14320abc9f9cffe309f5a~mv2.png') },
  { label: 'Discord', href: 'https://discordapp.com/users/694660340851671122', icon: wix('bb69fdafe40b4041a7ac6db596e3a0b8~mv2.png') },];

export const quickFacts = [
  { value: '10+', title: 'Years of Experience', caption: 'in software engineering teams' },
  { value: '10+', title: 'Years in Backend', caption: 'building APIs and services' },
  { value: '8', title: 'Years with Distributed Systems', caption: 'designing and running services in production' },
  { value: '6', title: 'Years with Go', caption: 'my main language for backend' },
  { value: '3', title: 'Years with Node.js', caption: 'APIs, bots and serverless functions' },
  { value: '10+', title: 'Programming Languages', caption: 'Golang, NodeJS, C# .NET, Scala, Ruby on Rails, Erlang, and more' },
];

export const education = [
  // TODO: fill in the bootcamp name, school and dates
  { flag: '🤖', school: 'AI Bootcamp', kind: 'Bootcamp', course: 'Applied AI / LLM engineering', period: 'TBD' },
  { flag: '🇵🇹', school: 'IADE Lisbon', kind: 'Postgraduate degree', course: 'Game Design and Interactive Media Design', period: 'Nov 2022 – Jul 2023' },
  { flag: '🇧🇷', school: 'FATEC SP', kind: "Bachelor's degree", course: 'Analysis and Systems Development', period: 'Jan 2015 – Dec 2017' },
  { flag: '🇧🇷', school: 'UNIMONTE', kind: 'Technical course', course: 'Digital Games Development', period: 'Jan 2014 – Dec 2015' },
  { flag: '🇧🇷', school: 'ETEC', kind: 'Technical course', course: 'Computing', period: 'Jan 2013 – Dec 2014' },
];

export const languages = ['Portuguese native', 'English fluent', 'Spanish reader'];

// Full career history for the About page. `href` links to the experience page when there is one.
export const experience: { company: string; href?: string; roles: [string, string][] }[] = [
  { company: 'Miniclip · 8 Ball Pool', href: '/experience/miniclip', roles: [['Software Engineer (Server)', 'Oct 2025 – Present']] },
  {
    company: 'Wellhub (formerly Gympass)',
    href: '/experience/wellhub',
    roles: [
      ['Senior Software Engineer', 'Feb 2022 – Mar 2025'],
      ['Software Engineer', 'Apr 2019 – Feb 2022'],
    ],
  },
  { company: 'Avanade · Santander', href: '/experience/avanade', roles: [['Software Engineer', 'Oct 2017 – Apr 2019']] },
  { company: 'FCamara · Unimed', href: '/experience/fcamara', roles: [['Full-stack Developer', 'Mar 2016 – Sep 2017']] },
  { company: 'High Tech Software Technology', roles: [['Web Developer', 'Dec 2014 – Nov 2015']] },
  { company: 'Ponik Real State', roles: [['Computer Technician', 'Jun 2014 – Nov 2014']] },
  { company: 'Personal projects', roles: [['AI Agent Workflows', '2025 – Present'], ['Game Designer and Game Dev', 'Nov 2022 – Present']] },
];

export const favoriteGames = [
  ['The Legend of Zelda: Breath of the Wild', '435bb46675bc492784cb25732cf1f263~mv2.jpg'],
  ['Animal Crossing: New Horizons', 'dd2c69c2ab2b41b8a936793a35e8beea~mv2.jpg'],
  ['Dragon Quest XI S', '34f1b0d76bf5458eb620e70e1b5fc7bc~mv2.jpg'],
  ['Super Mario Galaxy', '28dc7ce6e89a48c696cd0176e3cb4a78~mv2.jpg'],
  ['Paper Mario', '830b0ccc7b1f4ed9b0b519817456af79~mv2.jpg'],
  ['The Last of Us Part II', '73551f0bc4714c14a38f00b0ec87e4af~mv2.jpg'],
  ['Final Fantasy Tactics Advance', '7b0e85a6d0604fef8474e29232dc418e~mv2.jpg'],
  ['Ragnarok Online', '9ba7a8c33de54b7598040c0848037253~mv2.png'],
  ['Pokémon Diamond & Pearl', '02cdb7ad296a4dac965391cf6f0cad90~mv2.jpg'],
  ['SimCity', 'a0685222359e4889af507f8f1c415365~mv2.jpg'],
  ['The Witcher 3: Wild Hunt', 'eec3c5080a4a463a9ba2bff4e0042c29~mv2.jpg'],
  ['Dragon Ball Z Budokai 3', 'a6c07b905e4a41859ac63e06188dec9a~mv2.png'],
].map(([title, id]) => ({ title, src: wix(id) }));

export { wix };
