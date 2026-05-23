import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import {
  BusinessModel,
  ProblemSolution,
  Services,
  TargetMarket,
  Validation,
  ValueProposition,
} from './components/Sections.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-brand-ink">
      <Header />
      <main>
        <Hero />
        <ProblemSolution />
        <ValueProposition />
        <Services />
        <BusinessModel />
        <TargetMarket />
        <Validation />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
