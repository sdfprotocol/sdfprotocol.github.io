// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

export default defineConfig({
  site: "https://sdfprotocol.org",
  integrations: [
    starlight({
      title: "SDF Protocol",
      description:
        "The open protocol for structured, agent-readable web content.",
      logo: {
        light: "./src/assets/sdf-logo-light.svg",
        dark: "./src/assets/sdf-logo-dark.svg",
        replacesTitle: false,
      },
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/sdfprotocol",
        },
      ],
      customCss: ["./src/styles/custom.css"],
      head: [
        {
          tag: "meta",
          attrs: {
            property: "og:image",
            content: "https://sdfprotocol.org/og.png",
          },
        },
      ],
      sidebar: [
        {
          label: "Overview",
          items: [
            { label: "What is SDF?", slug: "" },
            { label: "Why SDF?", slug: "overview/why" },
            { label: "Quick Example", slug: "overview/example" },
          ],
        },
        {
          label: "Specification",
          items: [
            { label: "Protocol v0.2", slug: "spec/protocol" },
            { label: "Document Model", slug: "spec/document-model" },
            { label: "Type System", slug: "spec/type-system" },
            { label: "Provenance", slug: "spec/provenance" },
            { label: "Content Negotiation", slug: "spec/content-negotiation" },
            { label: "Well-Known Discovery", slug: "spec/well-known" },
          ],
        },
        {
          label: "Type Reference",
          items: [
            { label: "Type Taxonomy", slug: "types/taxonomy" },
            { label: "article", slug: "types/article" },
            { label: "documentation", slug: "types/documentation" },
            { label: "commerce", slug: "types/commerce" },
            { label: "discussion", slug: "types/discussion" },
            { label: "reference", slug: "types/reference" },
            { label: "data", slug: "types/data" },
            { label: "code", slug: "types/code" },
            { label: "profile", slug: "types/profile" },
            { label: "event", slug: "types/event" },
            { label: "media", slug: "types/media" },
          ],
        },
        {
          label: "Schemas",
          items: [
            { label: "Schema Overview", slug: "schemas/overview" },
            { label: "SDF Document Schema", slug: "schemas/document" },
          ],
        },
        {
          label: "Research",
          items: [
            { label: "Key Findings", slug: "research/findings" },
            { label: "Downstream Evaluation", slug: "research/downstream" },
          ],
        },
      ],
    }),
  ],
});
