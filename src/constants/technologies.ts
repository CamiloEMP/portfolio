export const technologies: ITechologies = {
  'react': {
    img: '/technologies/react.svg',
    name: 'React',
    category: 'main'
  },
  'nextjs': {
    img: '/technologies/nextjs.svg',
    name: 'NextJS',
    category: 'main'
  },
  'tailwind': {
    img: '/technologies/tailwindcss.svg',
    name: 'Tailwind',
    category: 'main'

  },
  'typescript': {
    img: '/technologies/typescript.svg',
    name: 'Typescript',
    category: 'main'

  },
  'nodejs': {
    img: '/technologies/nodejs.svg',
    name: 'Node.js',
    category: 'main'

  },
  'firebase': {
    img: '/technologies/firebase.svg',
    name: 'Firebase',
    category: 'worked'
  },
  'mongo': {
    img: '/technologies/mongodb.svg',
    name: 'MongoDB',
    category: 'worked'
  },
  'supabase': {
    img: '/technologies/supabase.svg',
    name: 'Supabase',
    category: 'worked'
  },
  'javascript': {
    img: '/technologies/javascript.svg',
    name: 'HTML5',
    category: 'scencials'
  },
  'html': {
    img: '/technologies/html5.svg',
    name: 'JavaScript',
    category: 'scencials'
  },
  'css': {
    img: '/technologies/css.svg',
    name: 'CSS3',
    category: 'scencials'
  },
}

export interface ITechnology {
  img: string
  name: string,
  category: 'main' | 'worked' | 'scencials'
}

interface ITechologies {
  [key: string]: ITechnology
}

export type KeysTechnologies = keyof typeof technologies