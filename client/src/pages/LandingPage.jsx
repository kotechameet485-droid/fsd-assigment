import { useNavigate } from 'react-router-dom';
import {
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Compass,
  Sliders,
} from 'lucide-react';
import Navbar from '../layouts/Navbar';
import Button from '../components/Button';
import Card from '../components/Card';

export function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-surface-warm flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <main className="flex-1 flex flex-col justify-center">
        <section className="pt-16 pb-10 md:pt-24 md:pb-14 text-center">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-50 border border-brand-200/80 text-brand-800 text-xs font-semibold tracking-wide shadow-subtle">
              <Sparkles className="w-3.5 h-3.5 text-brand-600" />
              <span>Smart Roommate Compatibility</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-charcoal leading-[1.15]">
              Find a roommate who fits{' '}
              <span className="text-brand-600 underline decoration-brand-200 decoration-wavy decoration-2">
                your life.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-stone-600 max-w-xl mx-auto leading-relaxed">
              NestMatch pairs university students based on sleep rhythms, cleanliness standards, budget limits, and study habits—making campus living simple and conflict-free.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-2">
              <Button
                size="lg"
                onClick={() => navigate('/register')}
                className="w-full sm:w-auto shadow-sm gap-2"
              >
                <span>Find Your Match</span>
                <ArrowRight className="w-4 h-4" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => navigate('/login')}
                className="w-full sm:w-auto"
              >
                Sign In
              </Button>
            </div>
          </div>
        </section>

        {/* 3 Core Feature Cards */}
        <section id="features" className="py-10 md:py-14">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="p-6 space-y-3 text-center md:text-left hover:shadow-cardHover transition-all">
                <div className="w-10 h-10 rounded-xl bg-brand-50 text-brand-700 flex items-center justify-center mx-auto md:mx-0">
                  <Sliders className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-base text-charcoal">Lifestyle Matching</h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  Match by sleep habits, noise tolerance, and daily routines instead of random allocations.
                </p>
              </Card>

              <Card className="p-6 space-y-3 text-center md:text-left hover:shadow-cardHover transition-all">
                <div className="w-10 h-10 rounded-xl bg-brand-50 text-brand-700 flex items-center justify-center mx-auto md:mx-0">
                  <Compass className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-base text-charcoal">Budget & Locality Parity</h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  Filter by realistic rent brackets and campus commute corridors so finances are aligned upfront.
                </p>
              </Card>

              <Card className="p-6 space-y-3 text-center md:text-left hover:shadow-cardHover transition-all">
                <div className="w-10 h-10 rounded-xl bg-brand-50 text-brand-700 flex items-center justify-center mx-auto md:mx-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-base text-charcoal">Verified Student Peers</h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  Connect safely with verified campus classmates through secure, mutual roommate requests.
                </p>
              </Card>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default LandingPage;
