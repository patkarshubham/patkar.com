import * as icons from "@/assets/homepage/core-features";
import { FaRobot, FaCrown, FaBolt, FaLightbulb, FaComments } from "react-icons/fa";
import { FcBusinessman  } from "react-icons/fc";

export const CORE_FEATURES = [
  {
    title: "Seamless Content Creation AI",
    description:
      "Let our AI-powered service simplify your content creation process. Start using AI today!",
    icon: FcBusinessman, // ✅ no <>
  },
  {
    title: "Your Ideas, Powered by Our Technology",
    description:
      "Discover how AI can transform your ideas into captivating content.",
    icon: FaLightbulb,
  },
  {
    title: "Intelligent Writing by Powerful AI",
    description:
      "Effortlessly access AI-generated content for blogs and websites.",
    icon: FaRobot,
  },
  {
    title: "AI Generation Made Life Easier",
    description:
      "Experience effortless content creation with our AI service.",
    icon: FaComments,
  },
  {
    title: "Premium AI-Generated Content",
    description:
      "Get expertly crafted content in no time with our AI service.",
    icon: FaCrown,
  },
  {
    title: "Super Fast AI Writing Companion",
    description:
      "Partner with AI to create content that connects.",
    icon: FaBolt,
  },
];

