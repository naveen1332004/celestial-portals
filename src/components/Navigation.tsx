import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { Download } from "lucide-react";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";

// Navigation items with added Resume
const NAV_ITEMS = [
  { path: "/", label: "Home" },
  { path: "/projects", label: "Projects" },
  { path: "/skills", label: "Skills" },
  { path: "/contact", label: "Contact" },
] as const;

const EMAIL_CONFIG = {
  SERVICE_ID: "service_3niiuwk",
  TEMPLATE_ID: "template_5wwhwag",
  PUBLIC_KEY: "ZoZ1SBPDe8inzgWUQ",
  TO_EMAIL: "naveen20thkids@gmail.com",
  RESUME_LINK: "https://drive.google.com/file/d/1Y2MDzzoKyDBdgGEjzNdJ_XyjdSLlsT1t/view?usp=sharing",
} as const;

export const Navigation = () => {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 inset-x-0 h-16 md:h-20 z-50 backdrop-blur-lg border-b border-border/40"
    >
      <div className="h-full max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Logo/Brand */}
        <NavLink to="/" className="font-bold text-lg md:text-xl">
          NK<span className="text-primary">.</span>
        </NavLink>

        {/* Navigation Links */}
        <div className="flex items-center gap-1 sm:gap-2">
          {NAV_ITEMS.map(({ path, label }) => (
            <NavLink
              key={path}
              to={path}
              className={({ isActive }) =>
                `px-3 py-2 text-sm rounded-md transition-colors ${
                  isActive
                    ? "text-primary font-medium"
                    : "text-muted-foreground hover:text-foreground"
                }`
              }
            >
              {label}
            </NavLink>
          ))}
          
          {/* Resume Download Button */}
          <Button
            variant="outline"
            size="sm"
            className="ml-2 hidden sm:inline-flex"
            onClick={() => window.open(EMAIL_CONFIG.RESUME_LINK, "_blank")}
          >
            <Download className="w-4 h-4 mr-2" />
            Resume
          </Button>
        </div>

        {/* Mobile Menu */}
        <Sheet>
          <SheetTrigger asChild className="sm:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="w-5 h-5" />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <div className="flex flex-col gap-4 mt-4">
              {NAV_ITEMS.map(({ path, label }) => (
                <NavLink
                  key={path}
                  to={path}
                  className={({ isActive }) =>
                    `px-4 py-2 text-sm rounded-md transition-colors ${
                      isActive
                        ? "text-primary font-medium bg-primary/10"
                        : "text-muted-foreground hover:text-foreground"
                    }`
                  }
                >
                  {label}
                </NavLink>
              ))}
              <Button
                variant="outline"
                className="mt-2"
                onClick={() => window.open(EMAIL_CONFIG.RESUME_LINK, "_blank")}
              >
                <Download className="w-4 h-4 mr-2" />
                Resume
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </motion.nav>
  );
};
