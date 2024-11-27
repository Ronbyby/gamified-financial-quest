import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { Link, useLocation } from "react-router-dom";
import Index from "./pages/Index";
import WaitlistAdmin from "./pages/admin/Waitlist";
import ResultsAdmin from "./pages/admin/Results";

const queryClient = new QueryClient();

const Navigation = () => {
  const location = useLocation();
  
  return (
    <div className="w-full border-b mb-4">
      <div className="max-w-4xl mx-auto py-2 px-4">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link to="/" className="text-sm font-medium hover:text-primary transition-colors">
                Home
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>About</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="w-48 p-2">
                  <a 
                    href="http://moedin.com.br"
                    target="_blank"
                    rel="noopener noreferrer" 
                    className="block px-2 py-1 text-sm rounded hover:bg-accent transition-colors"
                  >
                    About Us
                  </a>
                  <Link 
                    to="/admin/waitlist" 
                    className="block px-2 py-1 text-sm rounded hover:bg-accent transition-colors"
                  >
                    Admin Waitlist
                  </Link>
                  <Link 
                    to="/admin/results" 
                    className="block px-2 py-1 text-sm rounded hover:bg-accent transition-colors"
                  >
                    Admin Results
                  </Link>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </div>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/admin/waitlist" element={<WaitlistAdmin />} />
          <Route path="/admin/results" element={<ResultsAdmin />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;