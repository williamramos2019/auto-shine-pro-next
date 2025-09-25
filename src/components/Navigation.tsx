import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { 
  Home, 
  Calendar, 
  User, 
  Star, 
  Menu, 
  Car,
  Sparkles
} from "lucide-react";

const navItems = [
  { href: "/", label: "Início", icon: Home },
  { href: "/services", label: "Serviços", icon: Sparkles },
  { href: "/booking", label: "Agendar", icon: Calendar },
  { href: "/profile", label: "Perfil", icon: User },
  { href: "/reviews", label: "Avaliações", icon: Star },
];

export function Navigation() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const NavContent = () => (
    <nav className="flex flex-col space-y-2">
      {navItems.map((item) => {
        const Icon = item.icon;
        const isActive = location === item.href;
        
        return (
          <Link key={item.href} href={item.href}>
            <Button
              variant={isActive ? "premium" : "ghost"}
              className="w-full justify-start gap-3"
              onClick={() => setIsOpen(false)}
            >
              <Icon className="h-4 w-4" />
              {item.label}
            </Button>
          </Link>
        );
      })}
    </nav>
  );

  return (
    <>
      {/* Mobile Navigation */}
      <div className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between bg-card/80 backdrop-blur-md border-b border-border/50 p-4 md:hidden">
        <div className="flex items-center gap-2">
          <Car className="h-6 w-6 text-primary" />
          <span className="text-lg font-bold gradient-text">Auto Clean Shine</span>
        </div>
        
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-80">
            <div className="mb-6">
              <div className="flex items-center gap-2">
                <Car className="h-6 w-6 text-primary" />
                <span className="text-lg font-bold gradient-text">Auto Clean Shine</span>
              </div>
            </div>
            <NavContent />
          </SheetContent>
        </Sheet>
      </div>

      {/* Desktop Sidebar */}
      <div className="hidden md:flex fixed left-0 top-0 h-full w-64 bg-card/50 backdrop-blur-sm border-r border-border/50 p-6 flex-col">
        <div className="mb-8">
          <div className="flex items-center gap-2">
            <Car className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold gradient-text">Auto Clean Shine</span>
          </div>
          <p className="text-sm text-muted-foreground mt-2">
            Premium Car Detailing
          </p>
        </div>
        
        <NavContent />
      </div>

      {/* Bottom Navigation for Mobile */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-md border-t border-border/50 p-2 md:hidden">
        <div className="flex items-center justify-around">
          {navItems.slice(0, 4).map((item) => {
            const Icon = item.icon;
            const isActive = location === item.href;
            
            return (
              <Link key={item.href} href={item.href}>
                <Button
                  variant={isActive ? "premium" : "ghost"}
                  size="sm"
                  className="flex-col h-auto py-2 px-3"
                >
                  <Icon className="h-4 w-4" />
                  <span className="text-xs mt-1">{item.label}</span>
                </Button>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}