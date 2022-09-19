export type Routes = {
  id: number;
  path: string;
  label: string;
  active: boolean;
};

export type Work = {
  id: number;
  image: string;
  title: string;
  cardDescription: string;
  dialogDescription: string;
  tools: string[];
  link: { demoBoolean: boolean; sourceCode: string; demoSite: string };
};

export type Skill = {
  id: number;
  title: string;
  items: { name: string; image: string; rating: number }[];
};
