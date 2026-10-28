export interface SaleMetric {
  label: string;
  value: string;
  subValue?: string;
  progressPercent?: number;
  highlight?: boolean;
}

export interface MetricCardData {
  leftLabel: string;
  rightLabel: string;
  progressPercent: number;
  bottomLeft: string;
  bottomRight: string;
}

export interface TimelineStep {
  id: number;
  status: "active" | "upcoming" | "completed";
  eyebrow?: string;
  title: string;
  subtitle?: string;
  highlight?: boolean;
}

export interface InfoRowItem {
  id: number;
  iconName: "shield" | "globe" | "key" | "flower" | "file";
  label: string;
  value: string;
  hasGlobeIcon?: boolean;
  subRow?: {
    label: string;
    value: string;
  };
  isLink?: boolean;
}

export interface PartnerLogo {
  name: string;
  type: "text" | "logo";
  variant?: string;
}

export interface SaleApiResponse {
  status: "success";
  announcement: {
    text: string;
    linkUrl: string;
  };
  hero: {
    badge: string;
    title: string;
    description: string;
    mainMetric: {
      leftLabel: string;
      rightLabel: string;
      leftValue: string;
      rightValue: string;
      progressPercent: number;
      bottomLeft: string;
      bottomRight: string;
    };
    dualMetrics: MetricCardData[];
    largeMetric: {
      label: string;
      value: string;
    };
    countdown: {
      targetTimestamp: string;
      title: string;
      subtitle: string;
    };
    actionPanel: {
      badge: string;
      description: string;
      primaryButtonText: string;
      secondaryButtonText: string;
      footnote: string;
    };
  };
  partners: PartnerLogo[];
  content: {
    leftHeading: string;
    leftDescription: string;
    leftCardTitle: string;
    leftCardRows: Array<{ label: string; value: string }>;
    timeline: TimelineStep[];
    infoRows: InfoRowItem[];
  };
  footer: {
    description: string;
    newsletterPlaceholder: string;
    newsletterButton: string;
    disclaimer: string;
    disclaimerCode: string;
  };
}

