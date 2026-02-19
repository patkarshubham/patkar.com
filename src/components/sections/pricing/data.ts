export const BILLING_PERIODS = [
  {
    label: 'Monthly',
    key: 'monthly',
    saving: null,
  },
  {
    label: 'Annually',
    key: 'yearly',
    saving: '20%',
  },
] as const;

const AMOUNTS = {
  free: {
    monthly: 0,
    yearly: 0,
  },
  plus: {
    monthly: 15,
    yearly: 144,
  },
  pro: {
    monthly: 40,
    yearly: 384,
  },
  enterprise: {
    monthly: null,
    yearly: null,
  },
};

export type TBILLING_PLAN = (typeof BILLING_PLANS)[number];
export const BILLING_PLANS = [
  {
    name: 'Free',
    description:
      'For hobbyists exploring AI—get started with essential features and a small token allowance.',
    pricing: {
      monthly: {
        amount: AMOUNTS['free']['monthly'],
        formattedPrice: '$' + AMOUNTS['free']['monthly'],
        stripeId: null,
      },
      yearly: {
        amount: AMOUNTS['free']['yearly'],
        formattedPrice: '$' + AMOUNTS['free']['yearly'],
        stripeId: null,
      },
    },
    features: [
      'Basic AI model access',
      'Up to 25,000 tokens / month',
      'Limited to 3 projects',
      'No API key support',
      'Community support only',
    ],
    cta: 'Try it for free',
    popular: false,
  },
  {
    name: 'Plus plan',
    description:
      'For developers building real products—higher limits and more flexible usage.',
    pricing: {
      monthly: {
        amount: AMOUNTS['plus']['monthly'],
        formattedPrice: '$' + AMOUNTS['plus']['monthly'],
        stripeId: process.env.NEXT_PUBLIC_PLUS_MONTHLY_PRICE_ID!,
      },
      yearly: {
        amount: AMOUNTS['plus']['yearly'],
        formattedPrice: '$' + AMOUNTS['plus']['yearly'],
        stripeId: process.env.NEXT_PUBLIC_PLUS_YEARLY_PRICE_ID!,
      },
    },
    features: [
      'Everything in Free',
      'Up to 250,000 tokens / month',
      'Unlimited projects',
      'Bring your own OpenAI API key',
      'Basic analytics dashboard',
      'Email support',
    ],
    cta: 'Subscribe Now',
    popular: true,
  },
  {
    name: 'Pro plan',
    description:
      'For teams and power users who need generous token limits and advanced tooling.',
    pricing: {
      monthly: {
        amount: AMOUNTS['pro']['monthly'],
        formattedPrice: '$' + AMOUNTS['pro']['monthly'],
        stripeId: process.env.NEXT_PUBLIC_PRO_MONTHLY_PRICE_ID!,
      },
      yearly: {
        amount: AMOUNTS['pro']['yearly'],
        formattedPrice: '$' + AMOUNTS['pro']['yearly'],
        stripeId: process.env.NEXT_PUBLIC_PRO_YEARLY_PRICE_ID!,
      },
    },
    features: [
      'Everything in Plus',
      'Up to 1 million tokens / month',
      'Advanced model selection (GPT-4, Claude 3)',
      'Priority support',
      'Team collaboration tools',
      'Exportable usage reports',
    ],
    cta: 'Subscribe Now',
    popular: false,
  },
  {
    name: 'Enterprise',
    description:
      'Tailored for companies with high-volume needs and advanced security.',
    pricing: {
      monthly: {
        amount: AMOUNTS['enterprise']['monthly'],
        formattedPrice: "Let's talk",
        stripeId: null,
      },
      yearly: {
        amount: AMOUNTS['enterprise']['yearly'],
        formattedPrice: "Let's talk",
        stripeId: null,
      },
    },
    features: [
      'Everything in Pro',
      'Unlimited tokens',
      'Dedicated AI instance (optional)',
      'SLA-backed support (24/7)',
      'SSO & audit logging',
    ],
    cta: 'Contact sales',
    popular: false,
  },
];
