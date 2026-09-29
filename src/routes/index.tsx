import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Premium Cafe Menu | Bake ñ Love" },
      { name: "description", content: "Browse the Bake ñ Love menu, explore food and drinks, and view each item's details." },
      { property: "og:title", content: "Premium Cafe Menu | Bake ñ Love" },
      { property: "og:description", content: "Browse the Bake ñ Love menu, explore food and drinks, and view each item's details." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <iframe
      title="Bake ñ Love menu"
      src="/cafe/menu.html"
      allow="autoplay"
      className="block h-dvh w-full border-0"
    />
  );
}
