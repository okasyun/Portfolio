export type Routes = {
  readonly id: number;
  path: string;
  label: string;
  active: boolean;
};

export type Work = {
  readonly id: number;
  image: string;
  title: string;
  cardDescription: string;
  dialogDescription: string;
  tools: string[];
  link: { demoBoolean: boolean; sourceCode: string; demoSite: string };
};

export type Skill = {
  readonly id: number;
  title: string;
  items: { name: string; image: string; rating: number }[];
};
