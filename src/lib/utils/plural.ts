export const plural = (count: number | string, singular: string, plural: string) => {
  return Number(count) === 1 ? singular : plural;
};
