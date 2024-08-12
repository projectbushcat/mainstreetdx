import { writable } from "svelte/store";
import { z } from "zod";

// We hired Main Street to…
export const AllProjectOutcomes = [
  // Digital Presence & Marketing
  "revamp our website for better UX",
  "optimize our landing pages",
  "elevate our Google listing",
  "set up analytics for post-launch optimization",
  "redesign our Shopify store",
  "handle our digital product launch",

  // Customer Engagement & Retention
  "implement a customer loyalty program",
  "launch a refer-a-friend promotion",
  "implement a chatbot system",
  "create a customer feedback loop",
  "develop a community partnership program",

  // Sales & Revenue Optimization
  "streamline our sales funnel",
  "develop upselling strategies",
  "optimize our pricing strategy",
  "build a custom Stripe integration",

  // Technology & Development
  "develop a prototype",
  "integrate an API",
  "build out a design system",
  "tackle accessibility compliance",

  // Strategy & Innovation
  "give a workshop on AI",
  "advise on overall business strategy",
  "evaluate a new CRM system",
  "augment our staff with specialized expertise",
  "conduct market validation for new ideas"
];

// Our ... in 90 days.
export const AllProjectGoals = [
  "online engagement increased by 20%",
  "website conversion rate is up 10%",
  "customer retention rate improved by 15%",
  "average order value increased by 12%",
  "new product launched successfully with 1000+ pre-orders",
  "customer support response times decreased by 50%",
  "operational costs reduced by 5% through automation",
  "organic web traffic is up 30%",
  "customer satisfaction score improved by 25%",
  "mobile app usage increased by 40%",
  "newsletter subscription rate grew by 35%"
];

export const ProjectHourlyRate = 149;
export const ProjectBookAnIntroCallHref = `https://calendly.com/mainstreetdx/30min`;
export const ProjectEmailAddress = `studio@mainstreetdx.com`;

export const ProjectOutcomeValidator = z.string().min(3);
export const ProjectOutcomesValidator = z.array(ProjectOutcomeValidator);
export const ProjectGoalValidator = z.string().min(3);
export const ProjectHoursValidator = z.string();
export const ProjectWeeksValidator = z.string();
export const ProjectFeasibilityValidator = z.string();
export const ProjectQuestionValidator = z.object({
  id: z.string(),
  question: z.string(),
  answer: z.string().min(3)
});
export const ProjectActionItemsValidator = z.array(z.string());
export const ProjectQuestionsValidator = z.array(ProjectQuestionValidator).max(3);
export const ProjectEmailValidator = z.string().email();
export const ProjectValidator = z.object({
  outcomes: ProjectOutcomesValidator,
  goal: ProjectGoalValidator,
  hours: ProjectHoursValidator,
  weeks: ProjectWeeksValidator,
  action_items: ProjectActionItemsValidator,
  feasibility: ProjectFeasibilityValidator,
  questions: ProjectQuestionsValidator,
  email: ProjectEmailValidator
});

export type ProjectOutcome = z.infer<typeof ProjectOutcomeValidator>;
export type ProjectOutcomes = z.infer<typeof ProjectOutcomesValidator>;
export type ProjectGoal = z.infer<typeof ProjectGoalValidator>;
export type ProjectHours = z.infer<typeof ProjectHoursValidator>;
export type ProjectWeeks = z.infer<typeof ProjectWeeksValidator>;
export type ProjectFeasibility = z.infer<typeof ProjectFeasibilityValidator>;
export type ProjectActionItems = z.infer<typeof ProjectActionItemsValidator>;
export type ProjectQuestion = z.infer<typeof ProjectQuestionValidator>;
export type ProjectQuestions = z.infer<typeof ProjectQuestionsValidator>;
export type ProjectEmail = z.infer<typeof ProjectEmailValidator>;
export type Project = z.infer<typeof ProjectValidator>;

export class ProjectUtils {
  static random() {
    return 0.5 - Math.random();
  }

  static randomLen() {
    return Math.round(Math.random() * 2) + 1;
  }

  static shuffleOutcomes(len?: number): ProjectOutcomes {
    let shuffled: ProjectOutcomes;

    try {
      shuffled = AllProjectOutcomes.toSorted(this.random);
    } catch {
      shuffled = [...AllProjectOutcomes].sort(this.random);
    }

    return shuffled.slice(0, len || this.randomLen());
  }

  static shuffleGoals(len?: number): ProjectGoal[] {
    let shuffled: ProjectGoal[];

    try {
      shuffled = AllProjectGoals.toSorted(this.random);
    } catch {
      shuffled = [...AllProjectGoals].sort(this.random);
    }

    return len ? shuffled.slice(0, len) : shuffled;
  }

  static shuffleGoal(): ProjectGoal {
    return this.shuffleGoals()[0];
  }

  static getBriefTemplate(outcomes: string[], goal: string) {
    return `Outcomes:
${outcomes.map((o) => `- ${o}`).join("\n")}

Goal: ${goal}
`;
  }
}

export interface PlanAnalyzeData {
  feasibility: string;
  action_items: string[];
  clarifying_questions: string[];
}

interface ProjectStoreAddons {
  editable: boolean;
  onMountTriggersAnalyze: boolean;
}

export const ProjectStore = writable<Project & ProjectStoreAddons>({
  outcomes: ProjectUtils.shuffleOutcomes(),
  goal: ProjectUtils.shuffleGoal(),
  hours: "8",
  weeks: "2",
  feasibility: "",
  action_items: [],
  questions: [],
  email: "",
  editable: true,
  onMountTriggersAnalyze: true
});
