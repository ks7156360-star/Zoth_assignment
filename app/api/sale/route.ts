import { NextResponse } from "next/server";
import type { SaleApiResponse } from "@/types/sale";

export async function GET() {
  const targetDate = new Date(Date.now() + (14 * 24 * 60 * 60 + 8 * 60 * 60 + 32 * 60 + 45) * 1000);

  const mockData: SaleApiResponse = {
    status: "success",
    announcement: {
      text: "Demo Demo",
      linkUrl: "#",
    },
    hero: {
      badge: "Lorem ipsum",
      title: "Lorem ipsum dolor",
      description:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et",
      mainMetric: {
        leftLabel: "Demo",
        rightLabel: "Lorem ipsum",
        leftValue: "[XX]",
        rightValue: "[XX]",
        progressPercent: 42,
        bottomLeft: "[XX]",
        bottomRight: "[XX]",
      },
      dualMetrics: [
        {
          leftLabel: "[XX]",
          rightLabel: "[XX]",
          progressPercent: 68,
          bottomLeft: "[XX]",
          bottomRight: "[XX]",
        },
        {
          leftLabel: "[XX]",
          rightLabel: "[XX]",
          progressPercent: 55,
          bottomLeft: "[XX]",
          bottomRight: "[XX]",
        },
      ],
      largeMetric: {
        label: "Demo",
        value: "[XX]",
      },
      countdown: {
        targetTimestamp: targetDate.toISOString(),
        title: "Lorem ipsum dolor",
        subtitle: "Lorem ipsum dolor sit amet consectetur",
      },
      actionPanel: {
        badge: "LOREM IPSUM",
        description: "Lorem ipsum dolor sit amet consectetur adipiscing",
        primaryButtonText: "Lorem ipsum",
        secondaryButtonText: "Lorem ipsum",
        footnote: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do",
      },
    },
    partners: [
      { name: "Borderless", type: "logo", variant: "borderless" },
      { name: "TAISU", type: "text", variant: "taisu" },
      { name: "BLOCKCHAIN", type: "logo", variant: "blockchain" },
      { name: "Chainlink", type: "logo", variant: "chainlink" },
      { name: "coinbase", type: "text", variant: "coinbase" },
      { name: "MINDFULNESS", type: "text", variant: "mindfulness" },
      { name: "Globe", type: "logo", variant: "globe" },
    ],
    content: {
      leftHeading: "Lorem ipsum",
      leftDescription:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor",
      leftCardTitle: "Lorem ipsum dolor",
      leftCardRows: [
        { label: "Lorem ipsum", value: "Demo" },
        { label: "Lorem ipsum", value: "Demo" },
        { label: "Lorem ipsum", value: "Demo" },
      ],
      timeline: [
        {
          id: 1,
          status: "active",
          eyebrow: "Demo",
          title: "Lorem ipsum",
          subtitle: "[XX]",
          highlight: true,
        },
        {
          id: 2,
          status: "upcoming",
          title: "DEMO",
          subtitle: "Lorem ipsum",
        },
        {
          id: 3,
          status: "upcoming",
          title: "Demo",
          subtitle: "Lorem ipsum",
        },
        {
          id: 4,
          status: "upcoming",
          title: "DEMO",
          subtitle: "Lorem ipsum",
        },
      ],
      infoRows: [
        {
          id: 1,
          iconName: "shield",
          label: "Demo",
          value: "DEMO",
        },
        {
          id: 2,
          iconName: "globe",
          label: "Lorem ipsum",
          value: "DEMO",
          hasGlobeIcon: true,
        },
        {
          id: 3,
          iconName: "key",
          label: "Lorem ipsum",
          value: "[XX]",
        },
        {
          id: 4,
          iconName: "flower",
          label: "Demo",
          value: "[XX]",
          subRow: {
            label: "Demo",
            value: "Lorem ipsum",
          },
        },
        {
          id: 5,
          iconName: "file",
          label: "Lorem ipsum",
          value: "Demo",
          isLink: true,
        },
      ],
    },
    footer: {
      description: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed",
      newsletterPlaceholder: "[XX]",
      newsletterButton: "DEMO",
      disclaimer:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna.",
      disclaimerCode: "[XX]",
    },
  };

  return NextResponse.json(mockData);
}

