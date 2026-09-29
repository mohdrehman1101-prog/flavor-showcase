import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Premium Cafe Menu | Coffee House" },
      { name: "description", content: "Browse the Coffee House menu, explore food and drinks, and view each item's details." },
      { property: "og:title", content: "Premium Cafe Menu | Coffee House" },
      { property: "og:description", content: "Browse the Coffee House menu, explore food and drinks, and view each item's details." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <iframe
      title="Coffee House menu"
      src="/cafe/menu.html"
      className="block h-dvh w-full border-0"
    />
  );
}
