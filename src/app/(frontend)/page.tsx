import { ArrowRight } from "lucide-react";

import Link from "next/link";

import { Button } from "@/components/ui/button";

export default async function Home() {
  return (
    <main className="container mx-auto px-4 py-16">
      {/* Hero Section */}
      <div className="mb-16 text-center">
        <h1 className="mb-4 text-4xl font-bold tracking-tight">
          PayloadCMS Starting Template
        </h1>
        <p className="text-muted-foreground mx-auto mb-8 max-w-2xl text-xl">
          A clean, well-structured starting point for creating a PayloadCMS app.
        </p>
        <div className="flex justify-center gap-4">
          <Button asChild>
            <Link href="/admin">
              Open Admin <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="https://payloadcms.com/docs" target="_blank">
              Documentation
            </Link>
          </Button>
        </div>
      </div>

      {/* Features List */}
      <div className="mx-auto max-w-2xl">
        <h2 className="mb-6 text-2xl font-bold tracking-tight">Features</h2>
        <ul className="space-y-4 text-lg">
          <li className="flex items-center">
            <span className="mr-2">•</span>
            Clear organization for config and utility files
          </li>
          <li className="flex items-center">
            <span className="mr-2">•</span>
            Postgres config already set up.
          </li>
          <li className="flex items-center">
            <span className="mr-2">•</span>
            Typesafe environment variables.
          </li>
          <li className="flex items-center">
            <span className="mr-2">•</span>
            Email system with local testing via MailHog
          </li>
          <li className="flex items-center">
            <span className="mr-2">•</span>
            Tailwind and Shadcn/UI
          </li>
          <li className="flex items-center">
            <span className="mr-2">•</span>
            Payload&apos;s beautiful admin dashboard.
          </li>
        </ul>
      </div>

      {/* Getting Started Section */}
      <div className="mt-16 text-center">
        <h2 className="mb-4 text-2xl font-bold tracking-tight">
          Ready to Get Started?
        </h2>
        <p className="text-muted-foreground mb-8">
          Clone this template and start building your next project in minutes.
        </p>
        <pre className="bg-muted inline-block rounded-lg p-4 text-left">
          <code>npx degit LearnPayload/payload-blank-template my-project</code>
        </pre>
      </div>
    </main>
  );
}
