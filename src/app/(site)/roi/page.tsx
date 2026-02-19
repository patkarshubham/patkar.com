"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import type { ReactNode } from "react";
// -----------------------------
// Industry-style pricing config
// You can tweak these numbers to match your market
// -----------------------------

const PRICING = {
  webType: {
    static: 300,
    dynamic: 800,
  },
  technologies: {
    wix: 200,
    wordpress: 350,
    htmlcss: 250,
    react: 600,
    nextjs: 700,
  },
  content: {
    client: 0,
    premium: 300,
  },
  backend: {
    none: 0,
    php: 250,
    dotnet: 400,
    java: 450,
    python: 350,
  },
  seo: 250,
  images: 150,
  analytics: 120,
  crm: 200,
  social: 180,
  maintenancePerYear: 150,
} as const;

// -----------------------------
// Strong Type Definitions (Fixes implicit any error)
// -----------------------------

type WebType = keyof typeof PRICING.webType;
type Technology = keyof typeof PRICING.technologies;
type ContentType = keyof typeof PRICING.content;
type BackendType = keyof typeof PRICING.backend;

interface CalculatorState {
  webType: WebType;
  technology: Technology;
  content: ContentType;
  backend: BackendType;
  seo: boolean;
  images: boolean;
  analytics: boolean;
  crm: boolean;
  social: boolean;
  maintenanceYears: number;
}

const defaultState: CalculatorState = {
  webType: "static",
  technology: "wix",
  content: "client",
  backend: "none",
  seo: false,
  images: false,
  analytics: false,
  crm: false,
  social: false,
  maintenanceYears: 1,
};

export default function ROICalculator() {
  const [state, setState] = useState<CalculatorState>(defaultState);

  const total = useMemo(() => {
    let cost = 0;

    cost += PRICING.webType[state.webType];
    cost += PRICING.technologies[state.technology];
    cost += PRICING.content[state.content];
    cost += PRICING.backend[state.backend];

    if (state.seo) cost += PRICING.seo;
    if (state.images) cost += PRICING.images;
    if (state.analytics) cost += PRICING.analytics;
    if (state.crm) cost += PRICING.crm;
    if (state.social) cost += PRICING.social;

    const maintenanceExtra = Math.max(0, state.maintenanceYears - 1);
    cost += maintenanceExtra * PRICING.maintenancePerYear;

    return cost;
  }, [state]);

  const roiEstimate = useMemo(() => {
    // simple ROI projection logic
    const projectedReturn = total * 2.5;
    const roi = ((projectedReturn - total) / total) * 100;

    return {
      projectedReturn: Math.round(projectedReturn),
      roi: Math.round(roi),
    };
  }, [total]);

  const update = <K extends keyof CalculatorState>(
    key: K,
    value: CalculatorState[K],
  ) => {
    setState((s) => ({ ...s, [key]: value }));
  };

  const reset = () => setState(defaultState);

  interface CheckboxProps {
    label: string;
    value: boolean;
    onChange: (value: boolean) => void;
  }

  const Checkbox = ({ label, value, onChange }: CheckboxProps) => (
    <label className="flex items-center gap-2 cursor-pointer">
      <input
        type="checkbox"
        checked={value}
        onChange={(e) => onChange(e.target.checked)}
      />
      {label}
    </label>
  );

  interface SectionProps {
    title: string;
    children: ReactNode;
  }

  const Section = ({ title, children }: SectionProps) => (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-primary-500 shadow-xl rounded-2xl p-4 space-y-3"
    >
      <h2 className="font-semibold text-lg">{title}</h2>
      {children}
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-6xl mx-auto space-y-6">
        <h1 className="text-3xl font-bold">Web Development ROI Calculator</h1>

        <div className="grid md:grid-cols-2 gap-6">
          <Section title="Core Setup">
            <select
              value={state.webType}
              onChange={(e) => update("webType", e.target.value as WebType)}
              className="w-full p-2 border rounded"
            >
              <option value="static">Static Website</option>
              <option value="dynamic">Dynamic Website</option>
            </select>

            <select
              value={state.technology}
              onChange={(e) =>
                update("technology", e.target.value as Technology)
              }
              className="w-full p-2 border rounded"
            >
              <option value="wix">Wix</option>
              <option value="wordpress">WordPress</option>
              <option value="htmlcss">HTML/CSS</option>
              <option value="react">React</option>
              <option value="nextjs">Next.js</option>
            </select>

            <select
              value={state.content}
              onChange={(e) => update("content", e.target.value as ContentType)}
              className="w-full p-2 border rounded"
            >
              <option value="client">Client Provides Content</option>
              <option value="premium">Premium SEO Content</option>
            </select>

            <select
              value={state.backend}
              onChange={(e) => update("backend", e.target.value as BackendType)}
              className="w-full p-2 border rounded"
            >
              <option value="none">No Backend</option>
              <option value="php">PHP</option>
              <option value="dotnet">.NET</option>
              <option value="java">Java</option>
              <option value="python">Python</option>
            </select>
          </Section>

          <Section title="Enhancements">
            <Checkbox
              label="SEO Optimization"
              value={state.seo}
              onChange={(v) => update("seo", v)}
            />
            <Checkbox
              label="Professional Images"
              value={state.images}
              onChange={(v) => update("images", v)}
            />
            <Checkbox
              label="Analytics Integration"
              value={state.analytics}
              onChange={(v) => update("analytics", v)}
            />
            <Checkbox
              label="Forms & CRM"
              value={state.crm}
              onChange={(v) => update("crm", v)}
            />
            <Checkbox
              label="Social Media Integration"
              value={state.social}
              onChange={(v) => update("social", v)}
            />
          </Section>
        </div>

        <Section title="Maintenance">
          <div className="space-y-2">
            <p>Maintenance Years: {state.maintenanceYears}</p>
            <input
              type="range"
              min="1"
              max="3"
              value={state.maintenanceYears}
              onChange={(e) =>
                update("maintenanceYears", Number(e.target.value))
              }
              className="w-full"
            />
            <p className="text-sm text-gray-600">
              First year free. Additional years charged.
            </p>
          </div>
        </Section>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="bg-black text-white rounded-2xl p-6 space-y-3"
        >
          <h2 className="text-xl font-semibold">Cost & ROI Summary</h2>
          <p>Total Estimated Cost: ${total}</p>
          <p>Projected Return: ${roiEstimate.projectedReturn}</p>
          <p>Estimated ROI: {roiEstimate.roi}%</p>

          <button
            onClick={reset}
            className="bg-white text-black px-4 py-2 rounded-xl font-medium"
          >
            Refresh Calculator
          </button>
        </motion.div>
      </div>
    </div>
  );
}
