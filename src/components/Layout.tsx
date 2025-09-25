import { ReactNode } from "react";
import { Navigation } from "./Navigation";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-gradient-hero">
      <Navigation />
      <main className="md:ml-64 pt-16 md:pt-0 pb-20 md:pb-0">
        {children}
      </main>
    </div>
  );
}