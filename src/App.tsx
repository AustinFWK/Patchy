import Hero from "./sections/hero/Hero";
import Instructions from "./sections/instructions/Instructions";
import Features from "./sections/features/Features";
import CallToAction from "./sections/cta/CallToAction";
import { ThemeProvider } from "./components/ThemeProvider";
import Footer from "./components/Footer";
import Statistics from "./components/Statistics";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Statistics />
      <Hero />
      <Features />
      <Instructions />
      <CallToAction />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
