import { GradientText } from "@/components/magic-ui/gradient-text";
import { ShineBorder } from "@/components/magic-ui/shine-border";

const stats = [
  { value: "4-6 weeks", label: "Average MVP timeline" },
  { value: "45%+", label: "Typical conversion lift" },
  { value: "24/7", label: "AI support coverage" },
];

const services = [
  {
    title: "Funnel & landing pages",
    description: "Messaging, UX, and CRO optimization that turns traffic into leads.",
    bullets: [
      "Conversion-focused UX/UI",
      "Analytics + A/B testing plan",
      "Marketing automation setup",
    ],
  },
  {
    title: "Web development",
    description: "Modern, secure web applications built for speed and scale.",
    bullets: ["React & Next.js builds", "Headless CMS + integrations", "Performance & SEO"],
  },
  {
    title: "App development",
    description: "Native and cross-platform mobile apps with delightful UX.",
    bullets: ["iOS, Android, and Flutter", "Product strategy + roadmap", "Launch support"],
  },
  {
    title: "AI chatbot & automation",
    description: "Deploy customer-facing AI that solves issues and books revenue.",
    bullets: [
      "Custom GPT-style assistants",
      "Knowledge base + CRM sync",
      "Continuous prompt tuning",
    ],
  },
];

const plans = [
  {
    title: "Launch Sprint",
    price: "$6,000",
    bullets: ["Funnel strategy + design", "Landing page build", "Analytics dashboard"],
    cta: "Start sprint",
  },
  {
    title: "Growth Partner",
    price: "$12,500",
    bullets: ["Web app or mobile MVP", "AI chatbot deployment", "Weekly optimization"],
    cta: "Book discovery",
    featured: true,
  },
  {
    title: "Enterprise Build",
    price: "Custom",
    bullets: ["Multi-team product squads", "Complex integrations", "Dedicated AI research"],
    cta: "Talk to sales",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      <header className="bg-gradient-to-b from-white via-[#eef1ff] to-frost px-6 pb-16 pt-8 md:px-16">
        <nav className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-6">
          <div className="text-xl font-bold text-ink">PixelForge</div>
          <div className="flex flex-wrap items-center gap-4 text-sm font-medium text-slate-600">
            <a href="#services" className="transition hover:text-ink">
              Services
            </a>
            <a href="#proof" className="transition hover:text-ink">
              Results
            </a>
            <a href="#pricing" className="transition hover:text-ink">
              Plans
            </a>
            <button className="rounded-full border border-ink px-4 py-2 text-ink">
              Book a Demo
            </button>
          </div>
        </nav>

        <div className="mx-auto mt-12 grid max-w-6xl gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-primary">
              Full-stack studio + AI lab
            </p>
            <h1 className="mt-4 text-4xl font-semibold leading-tight text-ink md:text-5xl">
              Launch web, app, and <GradientText>AI chatbot</GradientText> experiences that
              convert.
            </h1>
            <p className="mt-5 max-w-xl text-base text-slate-600 md:text-lg">
              We design, build, and ship high-converting funnels, scalable web apps, and AI-powered
              customer experiences. One expert team for strategy, development, and growth.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <button className="shiny-button rounded-full px-6 py-3 text-sm font-semibold text-white shadow-lg">
                Get a free funnel audit
              </button>
              <button className="rounded-full border border-slate-200 px-6 py-3 text-sm font-semibold text-ink">
                See case studies
              </button>
            </div>
            <div className="mt-8 grid gap-6 sm:grid-cols-3">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="text-lg font-semibold text-ink">{stat.value}</p>
                  <p className="text-sm text-slate-500">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <ShineBorder className="bg-white/90 p-8 shadow-glow">
            <div className="flex h-full flex-col gap-5">
              <div>
                <h2 className="text-xl font-semibold text-ink">Book your strategy call</h2>
                <p className="mt-2 text-sm text-slate-500">
                  Tell us what you need and we will respond within 24 hours.
                </p>
              </div>
              <form className="flex flex-col gap-4 text-sm text-ink">
                <label className="flex flex-col gap-2">
                  Full name
                  <input
                    className="rounded-xl border border-slate-200 px-4 py-3"
                    placeholder="Taylor James"
                    type="text"
                  />
                </label>
                <label className="flex flex-col gap-2">
                  Work email
                  <input
                    className="rounded-xl border border-slate-200 px-4 py-3"
                    placeholder="taylor@company.com"
                    type="email"
                  />
                </label>
                <label className="flex flex-col gap-2">
                  Project focus
                  <select className="rounded-xl border border-slate-200 px-4 py-3">
                    <option>Web development</option>
                    <option>App development</option>
                    <option>AI chatbot</option>
                    <option>Full funnel build</option>
                  </select>
                </label>
                <button className="shiny-button rounded-full px-6 py-3 text-sm font-semibold text-white">
                  Request proposal
                </button>
                <p className="text-xs text-slate-400">
                  By submitting, you agree to receive communications from PixelForge.
                </p>
              </form>
            </div>
          </ShineBorder>
        </div>
      </header>

      <main className="mx-auto flex max-w-6xl flex-col gap-16 px-6 pb-20 pt-10 md:px-16">
        <section className="text-center text-sm font-semibold text-slate-500">
          Trusted by teams shipping bold digital products
          <div className="mt-4 flex flex-wrap justify-center gap-6 text-base font-semibold text-slate-400">
            <span>Northwind</span>
            <span>HelioPay</span>
            <span>BrightLabs</span>
            <span>CloudBridge</span>
            <span>NovaCore</span>
          </div>
        </section>

        <section id="services" className="section-card p-10 md:p-12">
          <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <h2 className="text-2xl font-semibold text-ink">
                Everything you need to build, launch, and scale
              </h2>
              <p className="mt-4 text-base text-slate-600">
                From high-converting funnels to complex platforms, our specialists align strategy,
                design, and engineering around your growth goals.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {services.map((service) => (
                <article
                  key={service.title}
                  className="rounded-2xl bg-[#f4f5ff] p-6 shadow-sm"
                >
                  <h3 className="text-lg font-semibold text-ink">{service.title}</h3>
                  <p className="mt-2 text-sm text-slate-600">{service.description}</p>
                  <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-slate-500">
                    {service.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          id="proof"
          className="section-card grid gap-8 bg-gradient-to-r from-white to-[#eef1ff] p-10 md:grid-cols-[1.1fr_0.9fr] md:p-12"
        >
          <div>
            <h2 className="text-2xl font-semibold text-ink">Results that feel like a growth sprint</h2>
            <p className="mt-4 text-base text-slate-600">
              Our team blends product design, engineering, and AI experimentation so your launch is
              faster and your funnel keeps converting long after.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              {[
                { value: "12+", label: "Funnels optimized" },
                { value: "38%", label: "Average CAC reduction" },
                { value: "120k", label: "Automated chats monthly" },
              ].map((metric) => (
                <div key={metric.label}>
                  <p className="text-xl font-semibold text-ink">{metric.value}</p>
                  <p className="text-sm text-slate-500">{metric.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="grid gap-4">
            {[
              {
                title: "HealthTech SaaS",
                description:
                  "Rebuilt their onboarding funnel and AI assistant, boosting demo requests by 63%.",
              },
              {
                title: "Marketplace Startup",
                description:
                  "Delivered a web + mobile MVP in 5 weeks with 4.8★ app store rating at launch.",
              },
            ].map((item) => (
              <article key={item.title} className="rounded-2xl bg-white p-6 shadow-md">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
                  Case Study
                </p>
                <h3 className="mt-2 text-lg font-semibold text-ink">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="pricing" className="section-card p-10 md:p-12">
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-semibold text-ink">
              Choose the engagement that fits your roadmap
            </h2>
            <p className="text-base text-slate-600">Flexible packages for high-growth teams and founders.</p>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {plans.map((plan) => (
              <article
                key={plan.title}
                className={`flex h-full flex-col gap-4 rounded-2xl border px-6 py-8 shadow-sm ${
                  plan.featured
                    ? "border-transparent bg-ink text-white shadow-lg"
                    : "border-slate-200 bg-white"
                }`}
              >
                <div>
                  <h3 className="text-lg font-semibold">{plan.title}</h3>
                  <p className="mt-3 text-2xl font-semibold">{plan.price}</p>
                </div>
                <ul
                  className={`list-disc space-y-2 pl-5 text-sm ${
                    plan.featured ? "text-white/80" : "text-slate-500"
                  }`}
                >
                  {plan.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
                <button
                  className={`mt-auto rounded-full px-5 py-2 text-sm font-semibold ${
                    plan.featured
                      ? "bg-white text-ink"
                      : "border border-slate-200 text-ink"
                  }`}
                >
                  {plan.cta}
                </button>
              </article>
            ))}
          </div>
        </section>

        <section className="section-card flex flex-wrap items-center justify-between gap-6 bg-ink p-10 text-white md:p-12">
          <div>
            <h2 className="text-2xl font-semibold">
              Ready to turn your ideas into a high-performing product?
            </h2>
            <p className="mt-3 text-sm text-white/70">
              Get a complete plan for your funnel, product, and AI roadmap in one call.
            </p>
          </div>
          <button className="shiny-button rounded-full px-6 py-3 text-sm font-semibold text-white">
            Schedule my call
          </button>
        </section>
      </main>

      <footer className="bg-midnight px-6 py-12 text-sm text-slate-400 md:px-16">
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3">
          <div>
            <h4 className="text-base font-semibold text-white">PixelForge</h4>
            <p className="mt-3">
              Web development, app development, and AI chatbot systems for ambitious teams.
            </p>
          </div>
          <div>
            <h4 className="text-base font-semibold text-white">Contact</h4>
            <p className="mt-3">hello@pixelforge.studio</p>
            <p>+1 (415) 555-0198</p>
          </div>
          <div>
            <h4 className="text-base font-semibold text-white">Location</h4>
            <p className="mt-3">San Francisco · Remote worldwide</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
