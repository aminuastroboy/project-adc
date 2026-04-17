"use client";

export default function ADCNationalCampaignWebsite() {
  const newsItems = [
    {
      title: "ADC National Platform Gains Momentum Across States",
      date: "Latest Update",
      text: "The campaign continues to grow its message of accountability, opportunity, and progress with stronger outreach, volunteer mobilization, and public engagement across multiple states.",
    },
    {
      title: "Volunteer Registration Opens for Nationwide Mobilization",
      date: "Campaign News",
      text: "Supporters can now join the movement through the national volunteer form, helping strengthen ward, LGA, state, and national coordination.",
    },
    {
      title: "Adamawa Focus Highlights Agriculture and Youth Empowerment",
      date: "State Update",
      text: "In Adamawa, the campaign is emphasizing agriculture, infrastructure, youth opportunities, education, healthcare, and practical development priorities.",
    },
    {
      title: "Technology Positioned as a Support Tool for Growth",
      date: "Policy Brief",
      text: "The platform maintains its traditional core pillars while applying technology as a practical support system for governance, jobs, security, agriculture, and education.",
    },
  ];
  const formspreeEndpoint = "https://formspree.io/f/mojydknk";

  async function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);

    try {
      const response = await fetch(formspreeEndpoint, {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formData,
      });

      if (!response.ok) throw new Error("Submit failed");
      alert("Volunteer form submitted successfully.");
      e.target.reset();
    } catch {
      alert("Submission failed. Please try again.");
    }
  }

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div>
            <div className="text-2xl font-black tracking-tight text-green-700">ADC National Platform</div>
            <div className="text-sm text-slate-600">A New Direction for Nigeria</div>
          </div>
          <nav className="hidden gap-6 text-sm md:flex">
            <a href="#hero">Home</a>
            <a href="#about">About</a>
            <a href="#pillars">Pillars</a>
            <a href="#technology">Technology</a>
            <a href="#adamawa">Adamawa</a>
            <a href="#volunteer">Volunteer</a>
            <a href="#news">News</a>
          </nav>
        </div>
      </header>

      <main>
        <section id="hero" className="bg-gradient-to-br from-green-900 via-green-800 to-slate-900 text-white">
          <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-2 md:py-24">
            <div className="flex flex-col justify-center">
              <div className="inline-flex w-fit rounded-full border border-white/20 bg-white/10 px-3 py-1 text-sm">
                ADC Presidential Platform
              </div>
              <h1 className="mt-6 text-4xl font-black leading-tight md:text-6xl">
                Alhaji Atiku Abubakar
              </h1>
              <p className="mt-4 text-xl text-green-100">Wazirin Adamawa</p>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/85">
                A national campaign platform built on accountability, opportunity, progress, and practical leadership for a stronger Nigeria.
              </p>
              <div className="mt-4 text-2xl font-semibold">Accountability • Opportunity • Progress</div>
              <div className="mt-8 flex flex-wrap gap-4">
                <a href="#pillars" className="rounded-2xl bg-white px-6 py-3 font-semibold text-green-800">Explore Manifesto</a>
                <a href="#volunteer" className="rounded-2xl border border-white/30 bg-white/10 px-6 py-3 font-semibold">Join Movement</a>
              </div>
            </div>
            <div className="rounded-[2rem] border border-white/10 bg-white/10 p-6 shadow-2xl">
              <div className="flex h-full min-h-[420px] items-center justify-center rounded-[1.5rem] bg-white/5 text-center text-white/70">
                <img src="/atiku1.jpg" alt="Atiku" className="h-full w-full rounded-[1.5rem] object-cover" />
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="mx-auto max-w-7xl px-6 py-16">
          <div className="max-w-4xl">
            <div className="text-sm font-semibold uppercase tracking-[0.2em] text-green-700">About the Platform</div>
            <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">Strong foundations. Smart innovation.</h2>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              The ADC National General Platform is built around the everyday priorities Nigerians understand clearly: governance and accountability, economy and job creation, security, agriculture, infrastructure, education, and healthcare. Technology supports these priorities quietly and effectively without overshadowing the values of service, trust, and visible development.
            </p>
          </div>
        </section>

        <section id="pillars" className="bg-slate-50 py-16">
          <div className="mx-auto max-w-7xl px-6">
            <div className="max-w-3xl">
              <div className="text-sm font-semibold uppercase tracking-[0.2em] text-green-700">Core Manifesto Pillars</div>
              <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">The main national priorities</h2>
            </div>
            <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {[
                ["Governance & Accountability", "Transparent leadership, anti-corruption enforcement, and public accountability at all levels."],
                ["Economy & Job Creation", "Support for SMEs, industrial growth, investment expansion, and youth employment."],
                ["Security", "Stronger national systems, community safety, and better intelligence coordination."],
                ["Agriculture", "Farmer support, food production, rural development, and stronger market access."],
                ["Infrastructure", "Roads, electricity, water supply, housing, and rural connectivity."],
                ["Education", "Better schools, stronger teachers, wider access, and technical training."],
                ["Healthcare", "Accessible healthcare, stronger hospitals, and affordable treatment."],
                ["National Unity", "Inclusive development, fairness, and policies that serve all Nigerians."],
              ].map(([title, text]) => (
                <div key={title} className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
                  <h3 className="text-xl font-bold tracking-tight">{title}</h3>
                  <p className="mt-3 leading-7 text-slate-600">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="technology" className="mx-auto max-w-7xl px-6 py-16">
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <div className="text-sm font-semibold uppercase tracking-[0.2em] text-green-700">Technology as Support</div>
              <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">Technology for better governance and growth</h2>
              <p className="mt-6 text-lg leading-8 text-slate-600">
                Technology is positioned as a support layer that improves transparency, creates jobs, strengthens security, helps farmers, and expands access to services. It is not the main front-facing message of the platform, but a practical tool for delivering results.
              </p>
            </div>
            <div className="grid gap-4">
              {[
                "Digital governance and transparent public systems",
                "Tech-enabled job opportunities for youth",
                "Smart security support and intelligence tools",
                "AgriTech for farmers and rural development",
                "Digital education and better telecom access",
              ].map((item) => (
                <div key={item} className="rounded-2xl border border-slate-200 bg-slate-50 p-4 shadow-sm">{item}</div>
              ))}
            </div>
          </div>
        </section>

        <section id="adamawa" className="bg-slate-950 py-16 text-white">
          <div className="mx-auto max-w-7xl px-6">
            <div className="max-w-3xl">
              <div className="text-sm font-semibold uppercase tracking-[0.2em] text-green-300">Adamawa State Focus</div>
              <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">National vision, state-level impact</h2>
              <p className="mt-6 text-lg leading-8 text-slate-300">
                In Adamawa State, the platform prioritizes agriculture, youth empowerment, infrastructure, education, healthcare, and practical development supported by strategic technology where useful.
              </p>
            </div>
            <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {[
                "Agriculture and rural development",
                "Youth empowerment and job creation",
                "Infrastructure and basic services",
                "Education and healthcare improvement",
              ].map((item) => (
                <div key={item} className="rounded-[2rem] border border-white/10 bg-white/5 p-6">{item}</div>
              ))}
            </div>
          </div>
        </section>

        <section id="volunteer" className="mx-auto max-w-7xl px-6 py-16">
          <div className="grid gap-10 md:grid-cols-[0.9fr_1.1fr]">
            <div>
              <div className="text-sm font-semibold uppercase tracking-[0.2em] text-green-700">Volunteer</div>
              <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">Join the national movement</h2>
              <p className="mt-6 text-lg leading-8 text-slate-600">
                Build support from national to ward level through community engagement, manifesto awareness, media support, youth mobilization, and grassroots outreach.
              </p>
            </div>
            <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6 shadow-sm">
              <div className="text-xl font-bold">Volunteer Form</div>
              <p className="mt-3 text-slate-600">Join the movement by filling the form below.</p>
              <form onSubmit={handleSubmit} className="mt-6 grid gap-4">
                <input name="full_name" required placeholder="Full name" className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3" />
                <input name="phone" required placeholder="Phone number" className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3" />
                <input name="state" placeholder="State" className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3" />
                <input name="lga" placeholder="LGA / Ward" className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3" />
                <select name="role" required className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3">
                  <option value="">Select volunteer role</option>
                  <option>National Volunteer</option>
                  <option>State Mobilizer</option>
                  <option>LGA Coordinator</option>
                  <option>Ward Volunteer</option>
                  <option>Media Support</option>
                  <option>Youth Outreach</option>
                </select>
                <textarea name="message" placeholder="Short message" className="min-h-[120px] rounded-2xl border border-slate-300 bg-white px-4 py-3" />
                <button type="submit" className="rounded-2xl bg-green-700 px-5 py-3 font-semibold text-white transition hover:bg-green-800">Submit Volunteer Form</button>
              </form>
            </div>
          </div>
        </section>

        <section id="sponsor" className="bg-green-50 py-16">
          <div className="mx-auto max-w-7xl px-6 grid gap-10 md:grid-cols-2 items-center">
            <div>
              <div className="text-sm font-semibold uppercase tracking-[0.2em] text-green-700">Sponsor</div>
              <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">Ahmad Rufai Abdulhamid</h2>
              <p className="mt-6 text-lg leading-8 text-slate-600">
                A committed supporter of the ADC vision, Ahmad Rufai Abdulhamid stands firmly behind this movement, contributing to grassroots mobilization, community engagement, and campaign growth across key regions.
              </p>
            </div>
            <div className="rounded-[2rem] overflow-hidden shadow-lg">
              <img src="/sponsor.jpg" alt="Ahmad Rufai Abdulhamid" className="w-full h-[420px] object-cover" />
            </div>
          </div>
        </section>

        <section id="news" className="bg-slate-50 py-16">
          <div className="mx-auto max-w-7xl px-6">
            <div className="text-sm font-semibold uppercase tracking-[0.2em] text-green-700">News / Updates</div>
            <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">Latest from the campaign</h2>
            <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {newsItems.map((item) => (
                <div key={item.title} className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
                  <div className="text-sm font-semibold text-green-700">{item.date}</div>
                  <h3 className="mt-3 text-xl font-bold tracking-tight">{item.title}</h3>
                  <p className="mt-3 leading-7 text-slate-600">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="gallery" className="bg-white py-16">
          <div className="mx-auto max-w-7xl px-6">
            <div className="text-sm font-semibold uppercase tracking-[0.2em] text-green-700">Gallery</div>
            <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">Campaign Moments</h2>
            <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {[
                "/atiku1.jpg",
                "/atiku2.jpg",
                "/atiku3.jpg",
                "/atiku4.jpg",
                "/atiku5.jpg",
                "/atiku6.jpg",
              ].map((src, i) => (
                <img key={i} src={src} className="h-[320px] w-full rounded-2xl object-cover" alt={`Campaign ${i + 1}`} />
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
