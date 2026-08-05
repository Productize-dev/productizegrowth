export type Locale = "es" | "en";

export type Messages = {
  meta: {
    title: string;
    description: string;
  };
  langSelect: {
    title: string;
    subtitle: string;
    english: string;
    spanish: string;
  };
  hero: {
    badge: string;
    headlineBefore: string;
    headlineAccent: string;
    headlineAfter: string;
    subheadline: string;
    cta: string;
    trust: string;
    showcaseLabel: string;
    showcaseItems: { title: string; detail: string }[];
  };
  steps: {
    eyebrow: string;
    title: string;
    titleAccent: string;
    intro: string;
    footer: string;
    connector: string;
    items: {
      number: string;
      title: string;
      outcome: string;
      description: string;
      detail: string;
      window: string;
    }[];
  };
  testimonials: {
    eyebrow: string;
    title: string;
    comingSoon: string;
  };
  proof: {
    eyebrow: string;
    title: string;
    titleAccent: string;
    intro: string;
    stats: {
      value: string;
      label: string;
    }[];
    researchTitle: string;
    research: {
      value: string;
      text: string;
      citation: string;
    }[];
    footer: string;
  };
  compare: {
    title: string;
    subtitle: string;
    headers: {
      feature: string;
      agency: string;
      diy: string;
      us: string;
    };
    rows: {
      feature: string;
      agency: string;
      diy: string;
      us: string;
    }[];
  };
  finalCta: {
    tagline: string;
    title: string;
    titleAccent: string;
    subtitle: string;
    rejectsLabel: string;
    rejects: string[];
    deliversLabel: string;
    delivers: string[];
    cta: string;
    trust: string;
    sticker: string;
  };
  booking: {
    title: string;
    subtitle: string;
    eventName: string;
    duration: string;
    description: string;
    selectDate: string;
    comingSoon: string;
    comingSoonHint: string;
  };
  footer: {
    privacy: string;
    terms: string;
    email: string;
    location: string;
    rights: string;
  };
  header: {
    cta: string;
  };
  pip: {
    label: string;
    minimize: string;
    expand: string;
  };
  marquee: string[];
  stickers: {
    upOnly: string;
    shipIt: string;
    productized: string;
  };
  windows: {
    auto: string;
    web: string;
    ads: string;
    growth: string;
  };
};
