import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Router, Route, Switch } from "wouter";
import { Layout } from "./components/Layout";

// Pages
import Home from "./pages/Home";
import Services from "./pages/Services";
import Booking from "./pages/Booking";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <Router>
        <Layout>
          <Switch>
            <Route path="/" component={Home} />
            <Route path="/services" component={Services} />
            <Route path="/booking" component={Booking} />
            <Route path="/profile">
              <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                  <h1 className="text-2xl font-bold mb-4">Perfil do Cliente</h1>
                  <p className="text-muted-foreground">Em desenvolvimento...</p>
                </div>
              </div>
            </Route>
            <Route path="/reviews">
              <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                  <h1 className="text-2xl font-bold mb-4">Avaliações</h1>
                  <p className="text-muted-foreground">Em desenvolvimento...</p>
                </div>
              </div>
            </Route>
            <Route component={NotFound} />
          </Switch>
        </Layout>
      </Router>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;