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

  static tmp = `
  Section 1:
What problem or need does your business idea address?
Who is your target audience or ideal customer?
What inspired you to pursue this particular business idea?

Example prompt after Section 1:
"Based on the user's responses, identify the core value proposition of their business idea and suggest potential ways to strengthen it. Also, provide insights on the chosen target audience and any potential gaps or opportunities in addressing their needs."

Section 2:
4. What are the key features or benefits of your product/service?
5. Who are your main competitors, and how is your idea different?
6. What are the biggest challenges you anticipate in bringing this idea to market?

Example prompt after Section 2:
"Analyze the user's competitive positioning based on their responses. Highlight unique selling points and suggest areas where the idea could be further differentiated. Identify potential strategies to overcome the anticipated challenges."

Section 3:
7. How do you plan to generate revenue from this idea?
8. What resources (skills, funding, partnerships) do you currently have to support this idea?
9. How have you validated or tested your idea so far?
10. What's your vision for the business in 3-5 years?

Final analysis prompt:
"Synthesize the user's responses to provide a comprehensive analysis of their business idea. Identify strengths, weaknesses, and opportunities for refinement. Suggest next steps for idea validation and development, including potential pivots or expansions based on the information provided. Offer insights on resource allocation and potential milestones for the next 6-12 months to move the idea forward."`;

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
