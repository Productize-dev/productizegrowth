export type Locale = "es" | "en";

export type ServiceSlug = "sistema" | "automatizacion" | "web" | "ads";

export type ServiceNavItem = {
  slug: ServiceSlug;
  short: string;
  label: string;
};

export type ChatLine = {
  from: "lead" | "system";
  time: string;
  text: string;
};

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
    showcaseItems: { title: string; detail: string; href: ServiceSlug }[];
  };
  steps: {
    eyebrow: string;
    title: string;
    titleAccent: string;
    intro: string;
    footer: string;
    connector: string;
    open: string;
    systemCta: string;
    items: {
      number: string;
      title: string;
      outcome: string;
      description: string;
      detail: string;
      window: string;
      href: ServiceSlug;
    }[];
  };
  testimonials: {
    eyebrow: string;
    title: string;
    titleAccent: string;
    name: string;
    meta: string;
    summary: string;
    beforeLabel: string;
    before: string;
    afterLabel: string;
    after: string;
    points: { label: string; text: string }[];
    siteLabel: string;
    siteUrl: string;
    windowLabel: string;
    imageAlt: string;
    sticker: string;
    moreLabel: string;
  };
  homeCases: {
    eyebrow: string;
    title: string;
    titleAccent: string;
    lede: string;
    open: string;
    swipe: string;
  };
  services: {
    navLabel: string;
    nav: ServiceNavItem[];
    sistema: {
      metaTitle: string;
      metaDescription: string;
      eyebrow: string;
      title: string;
      titleAccent: string;
      lede: string;
      handsLabel: string;
      open: string;
      close: string;
      pieces: {
        number: string;
        title: string;
        line: string;
        body: string;
        hands: string;
        slug: ServiceSlug;
      }[];
    };
    automatizacion: {
      metaTitle: string;
      metaDescription: string;
      eyebrow: string;
      title: string;
      titleAccent: string;
      lede: string;
      windowLabel: string;
      youLabel: string;
      systemLabel: string;
      next: string;
      replay: string;
      note: string;
      lines: ChatLine[];
      installsTitle: string;
      installs: string[];
      close: string;
    };
    web: {
      metaTitle: string;
      metaDescription: string;
      eyebrow: string;
      title: string;
      titleAccent: string;
      lede: string;
      googleLabel: string;
      siteLabel: string;
      profileName: string;
      profileMeta: string;
      profileRows: { label: string; text: string }[];
      profileNote: string;
      siteCaption: string;
      siteUrl: string;
      siteLink: string;
      imageAlt: string;
      installsTitle: string;
      installs: string[];
      close: string;
    };
    ads: {
      metaTitle: string;
      metaDescription: string;
      eyebrow: string;
      title: string;
      titleAccent: string;
      lede: string;
      windowLabel: string;
      steps: { title: string; body: string; visual: string }[];
      installsTitle: string;
      installs: string[];
      caseKicker: string;
      caseIntro: string;
      casePieces: { slug: ServiceSlug; label: string }[];
      rateNote: string;
      adCases: {
        id: string;
        tags: string[];
        value: string;
        title: string;
        detail: string;
        strip: string;
        rows: { value: string; text: string }[];
        plainLabel: string;
        plain: string;
        source: string;
        image: string;
        imageAlt: string;
        imageWidth: number;
        imageHeight: number;
        windowLabel: string;
      }[];
      close: string;
    };
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
