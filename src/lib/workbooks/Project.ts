import { writable } from "svelte/store";
import { z } from "zod";

// We hired Main Street to…
export const AllProjectOutcomes = [
  "get us up to speed on AI",
  "redesign our Shopify",
  "build a custom Stripe integration",
  "augment our staff",
  "advise on strategy",
  "evaluate a new CRM",
  "tackle accessibility compliance",
  "elevate our Google listing",
  "integrate an API",
  "revamp our website",
  "build out a design system",
  "handle our digital launch"
];
// Our … in 90 days.
export const AllProjectGoals = [
  "revenue is up 20%",
  "traffic doubled",
  "engagement increased 20%",
  "inbound is up 15%",
  "MVP launched successfully"
];
export const ProjectHourlyRate = 149;
export const ProjectBookAnIntroCallHref = `https://calendly.com`;

export const ProjectOutcomeValidator = z.string().min(3);
export const ProjectOutcomesValidator = z.array(ProjectOutcomeValidator);
export const ProjectGoalValidator = z.string().min(3);
export const ProjectHoursValidator = z.string();
export const ProjectWeeksValidator = z.string();
export const ProjectInsightValidator = z.string();
export const ProjectQuestionValidator = z.object({
  id: z.string(),
  question: z.string(),
  answer: z.string().min(3)
});
export const ProjectQuestionsValidator = z.array(ProjectQuestionValidator).max(3);
export const ProjectEmailValidator = z.string().email();
export const ProjectValidator = z.object({
  outcomes: ProjectOutcomesValidator,
  goal: ProjectGoalValidator,
  hours: ProjectHoursValidator,
  weeks: ProjectWeeksValidator,
  insight: ProjectInsightValidator,
  questions: ProjectQuestionsValidator,
  email: ProjectEmailValidator
});

export type ProjectOutcome = z.infer<typeof ProjectOutcomeValidator>;
export type ProjectOutcomes = z.infer<typeof ProjectOutcomesValidator>;
export type ProjectGoal = z.infer<typeof ProjectGoalValidator>;
export type ProjectHours = z.infer<typeof ProjectHoursValidator>;
export type ProjectWeeks = z.infer<typeof ProjectWeeksValidator>;
export type ProjectInsight = z.infer<typeof ProjectInsightValidator>;
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
}

export const ProjectStore = writable<Project>({
  outcomes: ProjectUtils.shuffleOutcomes(),
  goal: ProjectUtils.shuffleGoal(),
  hours: "8",
  weeks: "2",
  insight: "",
  questions: [],
  email: ""
});
