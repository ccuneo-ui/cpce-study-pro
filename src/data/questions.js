import ethics from "./bank/ethics.js";
import diversity from "./bank/diversity.js";
import development from "./bank/development.js";
import career from "./bank/career.js";
import helping from "./bank/helping.js";
import group from "./bank/group.js";
import assessment from "./bank/assessment.js";
import research from "./bank/research.js";

// The eight CACREP common-core areas, named and ordered as in CCE's CPCE content outline.
export const DOMAINS = [
  { key: "ethics", short: "Ethics", name: "Professional Counseling Orientation and Ethical Practice", items: ethics },
  { key: "diversity", short: "Diversity", name: "Social and Cultural Diversity", items: diversity },
  { key: "development", short: "Development", name: "Human Growth and Development", items: development },
  { key: "career", short: "Career", name: "Career Development", items: career },
  { key: "helping", short: "Helping", name: "Counseling and Helping Relationships", items: helping },
  { key: "group", short: "Group", name: "Group Counseling and Group Work", items: group },
  { key: "assessment", short: "Assessment", name: "Assessment and Testing", items: assessment },
  { key: "research", short: "Research", name: "Research and Program Evaluation", items: research },
];

const FREE_SLOTS = new Set([0, 8, 16, 24, 32]); // five per domain, spread across topics

// Each question: { id, d (domain key), t (topic), q, o (o[0] is correct), r, form ("A"|"B"), free }
export const QUESTIONS = DOMAINS.flatMap((dom) =>
  dom.items.map((it, i) => ({ ...it, d: dom.key, form: i % 2 === 0 ? "A" : "B", free: FREE_SLOTS.has(i) }))
);

export const BY_ID = Object.fromEntries(QUESTIONS.map((q) => [q.id, q]));
export const DOMAIN_BY_KEY = Object.fromEntries(DOMAINS.map((d) => [d.key, d]));
export const FREE_COUNT = QUESTIONS.filter((q) => q.free).length;
