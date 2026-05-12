import Hero from "./sections/hero/Hero";
import Instructions from "./sections/instructions/Instructions";
import Features from "./sections/features/Features";
import CallToAction from "./sections/cta/callToAction";
import { ThemeProvider } from "./components/themeProvider";
import Footer from "./components/Footer";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Hero />
      <Features />
      <Instructions />
      <CallToAction />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
