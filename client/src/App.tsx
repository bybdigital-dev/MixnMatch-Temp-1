import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Gallery from "@/pages/Gallery";
import FAQ from "@/pages/FAQ";
import Contact from "@/pages/Contact";
import CurtainsBlinds from "@/pages/CurtainsBlinds";
import Upholstery from "@/pages/Upholstery";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/curtains-blinds" component={CurtainsBlinds} />
      <Route path="/upholstery" component={Upholstery} />
      <Route path="/fabrics" component={NotFound} />
      <Route path="/bedding-linen" component={NotFound} />
      <Route path="/yarns-wool" component={NotFound} />
      <Route path="/about" component={About} />
      <Route path="/gallery" component={Gallery} />
      <Route path="/faq" component={FAQ} />
      <Route path="/contact" component={Contact} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
