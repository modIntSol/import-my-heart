import { useEffect } from "react";
import { Button } from "@/components/ui/button";

const Index = () => {
  useEffect(() => {
    // SEO: title and meta description
    document.title = "Import My Heart – Home";
    const metaDesc = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
    if (metaDesc) metaDesc.content = "Import My Heart homepage – start building with React, Vite, and shadcn-ui.";

    // Canonical tag
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.href = `${window.location.origin}${window.location.pathname}`;

    // Simple JSON-LD (WebSite)
    const ldId = "ld-json-home";
    let ld = document.getElementById(ldId) as HTMLScriptElement | null;
    const payload = {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'Import My Heart',
      url: window.location.origin,
      description: 'Import My Heart homepage built with React, Vite, Tailwind, and shadcn-ui.'
    };
    if (!ld) {
      ld = document.createElement("script");
      ld.type = "application/ld+json";
      ld.id = ldId;
      document.head.appendChild(ld);
    }
    ld.text = JSON.stringify(payload);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b">
        <nav className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
          <a href="/" className="font-semibold">Import My Heart</a>
          <div className="flex items-center gap-3">
            <Button asChild variant="secondary">
              <a href="https://github.com/modIntSol/import-my-heart" target="_blank" rel="noopener noreferrer">GitHub Repo</a>
            </Button>
          </div>
        </nav>
      </header>

      <main>
        <section className="mx-auto max-w-6xl px-6 py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <article>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Import My Heart – Start Building</h1>
              <p className="text-lg text-muted-foreground mb-8">
                Your project is connected. This is a live homepage using your current codebase.
                Edit this page at <code className="font-mono">src/pages/Index.tsx</code> or push changes to GitHub to see them here.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button asChild>
                  <a href="/" aria-label="Start building now">Get Started</a>
                </Button>
                <Button asChild variant="outline">
                  <a href="https://docs.lovable.dev/user-guides/quickstart" target="_blank" rel="noopener noreferrer">Lovable Quickstart</a>
                </Button>
              </div>
            </article>
            <aside className="rounded-lg border p-6">
              <h2 className="text-xl font-semibold mb-3">What happened?</h2>
              <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                <li>Your GitHub repo currently contains the default starter page.</li>
                <li>This updated homepage replaces the placeholder and is ready to customize.</li>
                <li>Push changes to the repo or edit here to update instantly.</li>
              </ul>
            </aside>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Index;
