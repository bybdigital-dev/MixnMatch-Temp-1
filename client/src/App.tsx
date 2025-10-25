import { Router as WouterRouter, Switch, Route } from "wouter";
import { useHashLocation } from "wouter/use-hash-location";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/Home";
import Services from "@/pages/Services";
import CurtainsBlinds from "@/pages/CurtainsBlinds";
import Upholstery from "@/pages/Upholstery";
import Fabrics from "@/pages/Fabrics";
import BeddingLinen from "@/pages/BeddingLinen";
import YarnsWool from "@/pages/YarnsWool";
import About from "@/pages/About";
import Gallery from "@/pages/Gallery";
import Contact from "@/pages/Contact";
import NotFound from "@/pages/not-found";
import ScrollToTop from "@/components/ScrollToTop";

function Routes() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/services" component={Services} />
      <Route path="/curtains-blinds" component={CurtainsBlinds} />
      <Route path="/upholstery" component={Upholstery} />
      <Route path="/fabrics" component={Fabrics} />
      <Route path="/bedding-linen" component={BeddingLinen} />
      <Route path="/yarns-wool" component={YarnsWool} />
      <Route path="/about" component={About} />
      <Route path="/gallery" component={Gallery} />
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
        {/* Hash-based router for static hosting (e.g., GitHub Pages) */}
        <WouterRouter hook={useHashLocation}>
          <ScrollToTop />
          <Routes />
        </WouterRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
