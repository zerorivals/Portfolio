import { ThemeToggle } from "../components/ThemeToggle";
import { PixelBackground } from "@/components/PixelBackground";
import { Navbar } from "@/components/NavBar";

export const Home = () => {
    return <div className="min-h-screen bg-background text-foreground overflow-x-hidden"> 
        {/* Theme toggle */}
        <ThemeToggle />
        {/* Backgound effects */}
        <PixelBackground />
        {/* Navbar */}
        <Navbar />
        {/* Main content */}
        {/* Footer */}
        </div>
};