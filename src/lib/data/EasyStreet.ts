import type { ColorName } from "./ColorName";

// Easy Street (from Main Street DX): resources that help entrepreneurs contextualize their business goals, using AI to derive insights to help them think about their business and improve their chances of success
export interface FreeResource {
  // slug of the resource, e.g. mainstreetdx.com/easy-street/free-resources/ideate
  href: string;

  // the main color of this free resource
  bg: ColorName;

  // the surface color of this free resource
  surface: ColorName;

  // the name of the resource, e.g. "Refine your idea" or "Build your MVP"
  name: string;

  /** instructions to the user, e.g.:
`The questions below help you understand your business idea from the market’s perspective.`,
`Answer each question the best you can, and AI will generate insights to help you achieve your goal.`
   */
  instructions: string[];

  // phase of business this belongs to, one of: Ideate, Validate, Launch, Optimize, Scale
  category: string;

  // example of a goal Main Street's services would help the user achieve, e.g.: "Develop and refine core business concept."
  exampleGoal: string;

  /**
   * Concepts are core offerings of Main street for this phase of business, e.g.:
`Brainstorming techniques`,
`Market research basics`,
`Identifying pain points`,
`Crafting value propositions`
   */
  concepts: string[];

  // three sections of questions to ask the user, with a prompt to run after each section to glean insights about their answers and offer advice to help them at their phase of business
  sections: FreeResourceSection[];
}

export interface FreeResourceSection {
  // short name of the section, to help contextualize or explain the questions or motivate the user
  headline: string;

  // instructions for this section, outlining why it matters
  instructions: string;

  // what prompt to run, using the question answers as context, that would give the user the most insight about achieving their goals and starting a business
  prompt: string;

  // insightful questions to ask the user, themed to this FreeResource
  questions: string[];
}

export type FreeResourceGenerateResponse =
  | {
      success: true;
      insights: string;
    }
  | {
      success: false;
    };

// helper class
export class FreeResourceUtils {
  static BASE_URL: string = `/easy-street/free-resources/`;

  static getHref(r: FreeResource) {
    return `${this.BASE_URL}${r.href}`;
  }

  static async generate(
    r: FreeResource,
    s: FreeResourceSection,
    a: string[]
  ): Promise<FreeResourceGenerateResponse> {
    try {
      const p = new Promise<FreeResourceGenerateResponse>((resolve) => {
        setTimeout(() => {
          resolve({
            success: true,
            insights: "Fascinating!"
          });
          // resolve({
          //   success: false
          // })
        }, 1000);
      });

      return p;
    } catch (e) {
      return {
        success: false
      };
    }
  }
}

/**
 * Begin each of the sections
 */

export const ESIdeate: FreeResource = {
  href: `ideate`,
  bg: "main-green",
  surface: "surface-green",
  name: `Refine your idea`,
  instructions: [
    `The questions below help you understand your business idea from the market's perspective.`,
    `Answer each question the best you can, considering industry-specific factors. AI will generate insights to help you achieve your goal.`
  ],
  category: `Ideate`,
  exampleGoal: `Develop and refine core business concept.`,
  concepts: [
    `Brainstorming techniques`,
    `Market research basics`,
    `Identifying pain points`,
    `Crafting value propositions`
  ],
  sections: [
    {
      headline: `Business background`,
      instructions: `Understanding your business's core concept and target audience is crucial for refining your idea. Be as specific as possible in your answers.`,
      prompt: `Based on the user's responses, identify the core value proposition of their business idea and suggest potential ways to strengthen it. Also, provide insights on the chosen target audience and any potential gaps or opportunities in addressing their needs.`,
      questions: [
        `What problem or need does your business idea address?`,
        `Who is your target audience or ideal customer?`,
        `What inspired you to pursue this particular business idea?`,
        `What potential risks or challenges do you foresee in developing this idea?`
      ]
    },
    {
      headline: `Market analysis`,
      instructions: `Analyzing your market and competition helps position your business for success. Consider both direct and indirect competitors in your answers.`,
      prompt: `Analyze the user's competitive positioning based on their responses. Highlight unique selling points and suggest areas where the idea could be further differentiated. Identify potential strategies to overcome the anticipated challenges.`,
      questions: [
        `What are the key features or benefits of your product/service?`,
        `Who are your main competitors, and how is your idea different?`,
        `What are the biggest challenges you anticipate in bringing this idea to market?`,
        `How do you plan to stay updated on industry trends and emerging technologies relevant to your idea?`
      ]
    },
    {
      headline: `Revenue & vision`,
      instructions: `A clear revenue model and long-term vision are essential for your business's sustainability. Be realistic yet ambitious in your projections.`,
      prompt: `Synthesize the user's responses to provide a comprehensive analysis of their business idea. Identify strengths, weaknesses, and opportunities for refinement. Suggest next steps for idea validation and development, including potential pivots or expansions based on the information provided. Offer insights on resource allocation and potential milestones for the next 6-12 months to move the idea forward.`,
      questions: [
        `How do you plan to generate revenue from this idea?`,
        `What resources (skills, funding, partnerships) do you currently have to support this idea?`,
        `How have you validated or tested your idea so far?`,
        `What's your vision for the business in 3-5 years?`
      ]
    }
  ]
};

export const ESValidate: FreeResource = {
  href: `validate`,
  bg: "main-yellow",
  surface: "surface-yellow",
  name: `Validate your concept`,
  instructions: [
    `The following questions will help you validate your business concept and prepare for building an MVP.`,
    `Answer thoughtfully, considering industry-specific factors, to receive AI-generated insights that will guide your validation process.`
  ],
  category: `Validate`,
  exampleGoal: `Develop and test a minimum-viable product (MVP) with users and gather feedback.`,
  concepts: [
    `Building a prototype or MVP`,
    `Customer discovery interviews`,
    `Competitive analysis`,
    `Financial projections`
  ],
  sections: [
    {
      headline: `MVP Planning`,
      instructions: `Your MVP is crucial for validating your concept. Focus on core features that solve your main customer problem and can be developed quickly.`,
      prompt: `Based on the user's responses, provide insights on their MVP strategy. Suggest improvements to their prototype plan and offer ideas for effective user testing methods.`,
      questions: [
        `What key features will your MVP include to solve your target audience's main problem?`,
        `How do you plan to build your prototype or MVP?`,
        `What methods will you use to gather user feedback on your MVP?`,
        `What's your estimated timeline for building and launching your MVP?`
      ]
    },
    {
      headline: `Customer Discovery`,
      instructions: `Direct customer feedback is invaluable. Aim to gather diverse perspectives and be open to surprising or unexpected insights.`,
      prompt: `Analyze the user's approach to customer discovery. Offer suggestions for improving their interview process and highlight potential areas for deeper customer insights.`,
      questions: [
        `How many potential customers have you interviewed about your concept?`,
        `What key insights have you gained from these customer discovery interviews?`,
        `How has customer feedback influenced your business concept so far?`,
        `What surprising or unexpected feedback have you received from potential customers?`
      ]
    },
    {
      headline: `Market & Financial Analysis`,
      instructions: `A thorough understanding of your market and realistic financial projections are crucial for validation. Be as detailed and data-driven as possible.`,
      prompt: `Evaluate the user's competitive analysis and financial projections. Identify potential gaps in their market understanding and suggest ways to strengthen their financial planning.`,
      questions: [
        `Who are your top 3 competitors and what sets your concept apart from theirs?`,
        `What is your estimated cost to build and launch your MVP?`,
        `What are your projected revenues for the first year after launch?`,
        `What potential risks have you identified in your validation process, and how do you plan to mitigate them?`
      ]
    }
  ]
};

export const ESLaunch: FreeResource = {
  href: `launch`,
  bg: "main-orange",
  surface: "surface-orange",
  name: `Build your MVP`,
  instructions: [
    `These questions will guide you through the process of building and launching your MVP.`,
    `Your answers, considering industry-specific factors, will help AI generate tailored insights to support your launch strategy.`
  ],
  category: `Launch`,
  exampleGoal: `Launching version 1 to the public.`,
  concepts: [
    "Hands-on full-stack development",
    "Marketing strategy",
    "Operations setup",
    "Funding options"
  ],
  sections: [
    {
      headline: `MVP Development`,
      instructions: `Your MVP should balance functionality with speed to market. Consider what's essential for launch versus what can be added later.`,
      prompt: `Based on the user's responses, provide insights on their development approach. Suggest ways to optimize their tech stack and development process for a successful MVP launch.`,
      questions: [
        `What technology stack have you chosen for your MVP, and why?`,
        `How are you managing the development process (e.g., agile, waterfall)?`,
        `What are the biggest technical challenges you're facing in building your MVP?`,
        `What features or functionality did you decide to leave out of your MVP, and why?`
      ]
    },
    {
      headline: `Marketing & Launch Strategy`,
      instructions: `A well-planned launch can significantly impact your MVP's success. Consider both pre-launch buzz and post-launch engagement strategies.`,
      prompt: `Analyze the user's marketing and launch plans. Offer suggestions to improve their go-to-market strategy and identify potential channels or tactics they may have overlooked.`,
      questions: [
        `What is your primary marketing strategy for your MVP launch?`,
        `Which channels do you plan to use to reach your target audience?`,
        `What specific metrics or milestones will you use to measure the success of your launch?`,
        `How do you plan to gather and incorporate early user feedback after launch?`
      ]
    },
    {
      headline: `Operations & Funding`,
      instructions: `Smooth operations and adequate funding are crucial for a successful launch. Plan for contingencies and unexpected challenges.`,
      prompt: `Evaluate the user's operational setup and funding strategy. Provide insights on potential improvements to their operations and suggest alternative funding options if applicable.`,
      questions: [
        `How have you structured your operations to support your MVP launch?`,
        `What key roles or skills do you still need to fill in your team?`,
        `How much funding have you secured for your launch, and from what sources?`,
        `What is your backup plan if you exceed your initial budget or face unexpected challenges?`
      ]
    }
  ]
};

export const ESOptimize: FreeResource = {
  href: `optimize`,
  bg: "main-gray",
  surface: "surface-gray",
  name: `Optimize your MVP`,
  instructions: [
    `These questions will help you identify areas for improvement in your MVP and business operations.`,
    `Your responses, considering industry-specific factors, will be used to generate AI-powered insights for optimizing your product and processes.`
  ],
  category: `Optimize`,
  exampleGoal: `Improve one key business metric by 20%.`,
  concepts: [
    "Web analytics integration",
    "Customer feedback loops",
    "Process improvement",
    "Team building"
  ],
  sections: [
    {
      headline: `Performance Metrics`,
      instructions: `Tracking the right metrics is crucial for optimization. Focus on metrics that directly relate to your business goals and user satisfaction.`,
      prompt: `Analyze the user's current metrics and KPIs. Suggest additional metrics they should consider tracking and provide insights on how to improve their most critical metrics.`,
      questions: [
        `What are the top 3 metrics you're currently tracking for your MVP?`,
        `Which metric is underperforming the most, and why do you think that is?`,
        `How often do you review and act on your analytics data?`,
        `What customer behaviors or actions are you trying to encourage with your current MVP?`
      ]
    },
    {
      headline: `Customer Feedback & Iteration`,
      instructions: `Continuous improvement based on user feedback is key to optimization. Develop a systematic approach to collecting and acting on feedback.`,
      prompt: `Evaluate the user's approach to gathering and acting on customer feedback. Offer suggestions for improving their feedback loops and prioritizing product improvements.`,
      questions: [
        `How are you currently collecting customer feedback on your MVP?`,
        `What is the most common piece of feedback you've received from users?`,
        `How do you prioritize which feedback to act on for your next iteration?`,
        `What strategies are you using to retain existing customers while acquiring new ones?`
      ]
    },
    {
      headline: `Team & Process Optimization`,
      instructions: `Efficient processes and a well-functioning team are crucial for scaling. Regularly assess and improve your operational practices.`,
      prompt: `Based on the user's responses, provide insights on improving team efficiency and business processes. Suggest ways to enhance collaboration and streamline operations.`,
      questions: [
        `What is the biggest operational challenge your team is currently facing?`,
        `How do you measure and improve your team's productivity?`,
        `What processes have you implemented to ensure consistent quality in your product or service?`,
        `What tools or software are you using to manage your team and workflows?`
      ]
    }
  ]
};

export const ESScale: FreeResource = {
  href: `scale`,
  bg: "main-blue",
  surface: "surface-blue",
  name: `Scale your business`,
  instructions: [
    `The following questions will help you plan and execute your business scaling strategy.`,
    `Your answers, considering industry-specific factors, will be used to generate AI-powered insights to support your growth initiatives.`
  ],
  category: `Scale`,
  exampleGoal: `Increase customer base or revenue by 30%.`,
  concepts: [
    "Growth strategies",
    "Automation and efficiency",
    "Expanding product/service lines",
    "Market expansion"
  ],
  sections: [
    {
      headline: `Growth Strategy`,
      instructions: `A clear growth strategy is essential for sustainable scaling. Consider both short-term wins and long-term sustainability in your plans.`,
      prompt: `Analyze the user's growth strategy. Provide insights on potential opportunities they may have overlooked and suggest ways to optimize their approach for sustainable scaling.`,
      questions: [
        `What is your primary strategy for scaling your business in the next 12 months?`,
        `Which aspect of your business do you believe has the most potential for growth?`,
        `How do you plan to maintain or enhance your competitive advantage as you scale?`,
        `What are the biggest obstacles you anticipate in scaling your business?`
      ]
    },
    {
      headline: `Operational Efficiency`,
      instructions: `Maintaining efficiency as you scale is crucial. Identify processes that can be automated or optimized to support growth without compromising quality.`,
      prompt: `Evaluate the user's plans for maintaining and improving efficiency as they scale. Offer suggestions for automation and process improvements to support their growth.`,
      questions: [
        `Which areas of your business have you identified for automation or improved efficiency?`,
        `How do you plan to maintain product/service quality as you scale operations?`,
        `What key performance indicators (KPIs) will you use to measure operational efficiency during scaling?`,
        `How will you allocate resources (financial, human, technological) to support your scaling efforts?`
      ]
    },
    {
      headline: `Market & Product Expansion`,
      instructions: `Expanding into new markets or product lines can drive significant growth. Ensure your expansion plans align with your core competencies and market demands.`,
      prompt: `Based on the user's responses, provide insights on their market and product expansion plans. Suggest potential risks and opportunities in their approach and offer ideas for successful expansion.`,
      questions: [
        `Are you planning to expand into new markets or customer segments? If so, which ones and why?`,
        `How do you plan to expand your product or service line to support your scaling efforts?`,
        `What research have you conducted to validate your expansion plans?`,
        `How will you ensure your company culture and values scale alongside your business operations?`
      ]
    }
  ]
};

/**
 * End each of the sections
 */

// Export them in order of business phase for use around the site; this same data drives the homepage's "Our Services" section, and the Easy Street section.
export const AllResources: FreeResource[] = [ESIdeate, ESValidate, ESLaunch, ESOptimize, ESScale];
