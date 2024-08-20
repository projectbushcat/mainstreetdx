import type { ColorName } from "./ColorName";

export class FreeResource {
  static BASE_URL: string = `/easy-street/free-resources/`;
  static href: string;
  static bg: ColorName;
  static surface: ColorName;
  static name: string;
  static category: string;
  static exampleGoal: string;
  static concepts: string[];

  static getHref() {
    return `${this.BASE_URL}${this.href}`;
  }

  constructor() {}
}

export class ESIdeate extends FreeResource {
  static href: string = `ideate`;
  static bg: ColorName = "main-green";
  static surface: ColorName = "surface-green";
  static name = `Refine your idea`;
  static category = `Ideate`;
  static exampleGoal = `Develop and refine core business concept.`;
  static concepts = [
    `Brainstorming techniques`,
    `Market research basics`,
    `Identifying pain points`,
    `Crafting value propositions`
  ];

  constructor() {
    super();
  }
}

export class ESValidate extends FreeResource {
  static href: string = `validate`;
  static bg: ColorName = "main-yellow";
  static surface: ColorName = "surface-yellow";
  static name = `Develop a strategy`;
  static category = `Validate`;
  static exampleGoal = `Develop and test a minimum-viable product (MVP) with users and gather feedback.`;
  static concepts = [
    `Building a prototype or MVP`,
    `Customer discovery interviews`,
    `Competitive analysis`,
    `Financial projections`
  ];
}

export class ESLaunch extends FreeResource {
  static href: string = `launch`;
  static bg: ColorName = "main-orange";
  static surface: ColorName = "surface-orange";
  static name: string = `Build your own MVP`;
  static category: string = `Launch`;
  static exampleGoal: string = `Launching version 1 to the public.`;
  static concepts = [
    "Hands-on full-stack development",
    "Marketing strategy",
    "Operations setup",
    "Funding options"
  ];
}

export class ESOptimize extends FreeResource {
  static href: string = `optimize`;
  static bg: ColorName = "main-gray";
  static surface: ColorName = "surface-gray";
  static name: string = `Analyze feedback`;
  static category: string = `Optimize`;
  static exampleGoal: string = `Improve one key business metric by 20%.`;
  static concepts = [
    "Web analytics integration",
    "Customer feedback loops",
    "Process improvement",
    "Team building"
  ];
}

export class ESScale extends FreeResource {
  static bg: ColorName = "main-blue";
  static surface: ColorName = "surface-blue";
  static href: string = `scale`;
  static name: string = `Launch & grow`;
  static category: string = `Scale`;
  static exampleGoal: string = `Increase customer base or revenue by 30%.`;
  static concepts = [
    "Growth strategies",
    "Automation and efficiency",
    "Expanding product/service lines",
    "Market expansion"
  ];
}

export const AllResources = [ESIdeate, ESValidate, ESLaunch, ESOptimize, ESScale];
