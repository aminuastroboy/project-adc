"use client";

export default function AhmadRufaiMovementWebsite() {
  const whatsappGroupLink = "https://chat.whatsapp.com/FencTUJFuhnCISEtNoE6sZ";
  const formspreeEndpoint = "https://formspree.io/f/mojydknk";

  const newsItems = [
    { title: "Movement gains stronger grassroots momentum", date: "Latest Update", text: "The movement continues to expand across Yola South through direct engagement, volunteer mobilization, and stronger community visibility." },
    { title: "Volunteer drive strengthens local structures", date: "Campaign News", text: "Supporters are joining ward-level and community-level coordination to build a more connected and responsive movement." },
    { title: "Community engagement remains the heart of the movement", date: "Field Update", text: "Meetings, outreach visits, and direct contact with residents continue to shape the tone of a people-first campaign." },
    { title: "EmpowerHer training expands the movement’s impact", date: "Community Program", text: "The upcoming digital skills training for women entrepreneurs reflects a practical empowerment agenda beyond politics." },
  ];

  const sponsorGallery = [
    ["/sponsor1.jpg", "Community mobilization and direct grassroots outreach in Yola South."],
    ["/sponsor2.jpg", "Supporting vulnerable women and strengthening compassion-driven leadership."],
    ["/sponsor3.jpg", "People-first engagement that keeps the movement close to ordinary citizens."],
    ["/sponsor4.jpg", "Visible presence in the field, listening and responding to community needs."],
    ["/sponsor5.jpg", "Strengthening local structures through practical political organization."],
    ["/sponsor6.jpg", "Empathy, service, and direct contact with communities across Yola South."],
    ["/sponsor7.jpg", "A movement rooted in action, connection, and community trust."],
  ];

  const communityGallery = [
    ["/impact1.jpg", "Direct connection with elders and respected voices in the community."],
    ["/impact2.jpg", "Grassroots meeting and listening engagement with residents."],
    ["/impact3.jpg", "Walking the community and staying present among the people."],
    ["/impact4.jpg", "Strengthening local networks through visible political organization."],
    ["/impact5.jpg", "Community dialogue built on respect, presence, and service."],
    ["/impact6.jpg", "Inclusive grassroots interaction with women, youth, and families."],
    ["/impact7.jpg", "Building stronger local relationships and trust across Yola South."],
    ["/impact8.jpg", "People-first leadership rooted in accessibility and community presence."],
  ];

  async function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    try {
      const response = await fetch(formspreeEndpoint, {
        method: "POST",
        headers: { Accept: "application/json" },
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
      <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <img src="/adc-logo.png" alt="ADC Logo" className="h-11 w-11 object-contain" />
            <div>
              <div className="text-2xl font-black tracking-tight text-green-700">Ahmad Rufai Abdulhamid Movement</div>
              <div className="text-sm text-slate-600">Yola South House of Assembly • ADC</div>
            </div>
          </div>
          <nav className="hidden gap-6 text-sm md:flex">
            <a href="#hero" className="hover:text-green-700">Home</a>
            <a href="#about" className="hover:text-green-700">About</a>
            <a href="#agenda" className="hover:text-green-700">Agenda</a>
            <a href="#community-impact" className="hover:text-green-700">Community</a>
            <a href="#event" className="hover:text-green-700">EmpowerHer</a>
            <a href="#why-vote" className="hover:text-green-700">Why Vote Ahmad</a>
            <a href="#news" className="hover:text-green-700">News</a>
          </nav>
        </div>
      </header>

      <main>
        <section id="hero" className="relative overflow-hidden bg-gradient-to-br from-green-950 via-green-800 to-slate-900 text-white">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.14),transparent_28%)]" />
          <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-[1.15fr_0.85fr] md:py-24">
            <div className="relative z-10 flex flex-col justify-center">
              <div className="inline-flex w-fit rounded-full border border-white/20 bg-white/10 px-3 py-1 text-sm">
                ADC • Yola South House of Assembly Movement
              </div>
              <h1 className="mt-6 text-4xl font-black leading-tight md:text-6xl">Ahmad Rufai Abdulhamid</h1>
              <p className="mt-4 text-xl text-green-100">Aspirant, Member Representing Yola South – Adamawa State House of Assembly</p>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/85">
                A people-driven movement focused on youth empowerment, child and maternal healthcare, and stronger community engagement across Yola South.
              </p>
              <div className="mt-4 text-2xl font-semibold text-white">Grassroots Leadership • Real Community Impact</div>
              <div className="mt-8 flex flex-wrap gap-4">
                <a href="#agenda" className="rounded-2xl bg-white px-6 py-3 font-semibold text-green-800 shadow-lg">View Agenda</a>
                <a href="#volunteer" className="rounded-2xl border border-white/30 bg-white/10 px-6 py-3 font-semibold text-white">Join Movement</a>
                <a href={whatsappGroupLink} target="_blank" rel="noreferrer" className="rounded-2xl bg-green-600 px-6 py-3 font-semibold text-white shadow-lg hover:bg-green-700">Join WhatsApp Group</a>
              </div>
              <div className="mt-10 grid max-w-2xl grid-cols-2 gap-4 md:grid-cols-4">
                {[
                  ["Focus", "Yola South"],
                  ["Agenda", "3 Priorities"],
                  ["Style", "Grassroots"],
                  ["Movement", "People First"],
                ].map(([label, value]) => (
                  <div key={label} className="rounded-2xl border border-white/15 bg-white/10 p-4 text-center">
                    <div className="text-xl font-bold">{value}</div>
                    <div className="mt-1 text-sm text-white/80">{label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative z-10 rounded-[2rem] border border-white/10 bg-white/10 p-6 shadow-2xl">
              <div className="flex h-full min-h-[440px] items-center justify-center overflow-hidden rounded-[1.5rem] bg-white/5">
                <img src="/sponsor.jpg" alt="Ahmad Rufai Abdulhamid" className="h-full w-full rounded-[1.5rem] object-cover" />
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="mx-auto max-w-7xl px-6 py-16">
          <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr]">
            <div>
              <div className="text-sm font-semibold uppercase tracking-[0.2em] text-green-700">About the Movement</div>
              <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">A local movement built around visible service</h2>
              <p className="mt-6 text-lg leading-8 text-slate-600">
                The Ahmad Rufai Abdulhamid Movement is centered on practical leadership in Yola South. It reflects a grassroots style of service where the candidate is seen in communities, engages directly with people, and responds to local needs with empathy, action, and accountability.
              </p>
              <p className="mt-4 text-lg leading-8 text-slate-600">
                While strongly aligned with the wider ADC national vision, this platform is first and foremost about Ahmad Rufai Abdulhamid’s commitment to the people of Yola South. The national presidential message remains visible as a supportive connection, but the heart of the website is his own leadership, agenda, and community impact.
              </p>
            </div>
            <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6 shadow-sm">
              <div className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Movement Snapshot</div>
              <div className="mt-6 space-y-4 text-slate-700">
                <div><div className="text-sm text-slate-500">Candidate</div><div className="font-semibold">Ahmad Rufai Abdulhamid</div></div>
                <div><div className="text-sm text-slate-500">Position</div><div className="font-semibold">Yola South House of Assembly Aspirant</div></div>
                <div><div className="text-sm text-slate-500">Platform</div><div className="font-semibold">ADC</div></div>
                <div><div className="text-sm text-slate-500">Approach</div><div className="font-semibold">Community First • Practical Impact</div></div>
              </div>
            </div>
          </div>
        </section>

        <section id="agenda" className="bg-slate-50 py-16">
          <div className="mx-auto max-w-7xl px-6">
            <div className="max-w-3xl">
              <div className="text-sm font-semibold uppercase tracking-[0.2em] text-green-700">Campaign Agenda</div>
              <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">Three people-centered priorities for Yola South</h2>
            </div>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {[
                ["Youth Empowerment", "Supporting young people through skills, entrepreneurship, opportunity creation, and practical empowerment initiatives that build long-term independence."],
                ["Child & Maternal Healthcare", "Promoting better healthcare access, stronger support for mothers and children, and more responsive health-focused community interventions."],
                ["Community Engagement", "Building direct connections with citizens, listening to real concerns, and ensuring the people remain part of leadership and decision-making."],
              ].map(([title, text]) => (
                <div key={title} className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
                  <h3 className="text-xl font-bold tracking-tight">{title}</h3>
                  <p className="mt-3 leading-7 text-slate-600">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="impact" className="mx-auto max-w-7xl px-6 py-16">
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <div className="text-sm font-semibold uppercase tracking-[0.2em] text-green-700">Movement Impact</div>
              <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">Visible presence in the community</h2>
              <p className="mt-6 text-lg leading-8 text-slate-600">
                This movement is not abstract. It is rooted in presence, compassion, and people-first engagement. The images and activities shown across the platform reflect a campaign identity shaped by direct outreach, giving, listening, and showing up where it matters most.
              </p>
            </div>
            <div className="grid gap-4">
              {[
                "Grassroots outreach and direct citizen interaction",
                "Support for vulnerable people and struggling households",
                "A visible youth-focused and community-driven presence",
                "Practical engagement beyond speeches and slogans",
              ].map((item) => (
                <div key={item} className="rounded-2xl border border-slate-200 bg-slate-50 p-4 shadow-sm">{item}</div>
              ))}
            </div>
          </div>
        </section>

        <section id="community-impact" className="bg-white py-16">
          <div className="mx-auto max-w-7xl px-6">
            <div className="text-sm font-semibold uppercase tracking-[0.2em] text-green-700">Community Impact</div>
            <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">Real engagement with the people</h2>
            <p className="mt-4 max-w-2xl text-lg text-slate-600">
              From sitting with elders to engaging youth and supporting communities, this movement is built on direct connection, trust, and action.
            </p>
            <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {communityGallery.map(([src, caption], i) => (
                <div key={i} className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
                  <img src={src} alt={`Community impact ${i + 1}`} className="h-[280px] w-full object-cover" />
                  <div className="p-4 text-sm leading-6 text-slate-600">{caption}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="event" className="bg-gradient-to-r from-emerald-50 to-orange-50 py-16">
          <div className="mx-auto grid max-w-7xl gap-10 px-6 md:grid-cols-[1.1fr_0.9fr] items-center">
            <div>
              <div className="text-sm font-semibold uppercase tracking-[0.2em] text-green-700">Upcoming Community Event</div>
              <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">EmpowerHer: Digital Skills Training for Women Entrepreneurs</h2>
              <p className="mt-6 text-lg leading-8 text-slate-600">
                A special community-focused training designed to equip women entrepreneurs with practical digital skills to grow visibility, attract customers, and improve sales using their phones and social platforms.
              </p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                  <div className="text-sm font-semibold text-green-700">Focus Areas</div>
                  <div className="mt-2 text-slate-600">WhatsApp Business, Facebook Pages, product promotion, and customer engagement.</div>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                  <div className="text-sm font-semibold text-green-700">Target Audience</div>
                  <div className="mt-2 text-slate-600">Local women-led small and medium businesses seeking growth through digital marketing.</div>
                </div>
              </div>
              <div className="mt-8 flex flex-wrap gap-4">
                <a href={whatsappGroupLink} target="_blank" rel="noreferrer" className="rounded-2xl bg-green-700 px-6 py-3 font-semibold text-white">Join Event Group</a>
                <a href="#volunteer" className="rounded-2xl border border-green-700 px-6 py-3 font-semibold text-green-700">Support the Program</a>
              </div>
            </div>
            <div className="rounded-[2rem] border border-white/60 bg-white p-8 shadow-xl">
              <div className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-600">Program Snapshot</div>
              <div className="mt-4 space-y-4 text-slate-700">
                <div><strong>Title:</strong> EmpowerHer: Digital Skills Training for Women Entrepreneurs</div>
                <div><strong>Format:</strong> One-day practical training session</div>
                <div><strong>Training Window:</strong> 10:00 AM – 2:00 PM</div>
                <div><strong>Powered by:</strong> Hon. Ahmad Rufai Abdulhamid & Astrovia Enterprise</div>
              </div>
            </div>
          </div>
        </section>

        <section id="why-vote" className="bg-white py-16">
          <div className="mx-auto max-w-7xl px-6">
            <div className="max-w-3xl">
              <div className="text-sm font-semibold uppercase tracking-[0.2em] text-green-700">Why Vote Ahmad Rufai</div>
              <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">A movement built on presence, service, and trust</h2>
            </div>
            <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {[
                ["Grassroots Presence", "He is visible among the people, listens directly, and stays connected to community realities."],
                ["People-Centered Agenda", "His campaign priorities are practical, relatable, and rooted in local needs."],
                ["Community Trust", "His outreach activities already reflect service, compassion, and meaningful engagement."],
                ["Strong ADC Alignment", "He combines local credibility with support for the broader presidential vision of ADC."],
              ].map(([title, text]) => (
                <div key={title} className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6 shadow-sm">
                  <h3 className="text-xl font-bold tracking-tight">{title}</h3>
                  <p className="mt-3 leading-7 text-slate-600">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="president" className="bg-slate-950 py-16 text-white">
          <div className="mx-auto grid max-w-7xl gap-10 px-6 md:grid-cols-[0.7fr_1.3fr] items-center">
            <div className="rounded-[2rem] overflow-hidden border border-white/10 bg-white/5">
              <img src="/atiku1.jpg" alt="Atiku Abubakar" className="h-[320px] w-full object-cover" />
            </div>
            <div>
              <div className="text-sm font-semibold uppercase tracking-[0.2em] text-green-300">National Alignment</div>
              <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">Supporting the presidential vision of ADC</h2>
              <p className="mt-6 text-lg leading-8 text-slate-300">
                Ahmad Rufai Abdulhamid’s movement stands with the wider ADC platform and supports the presidential direction of Alhaji Atiku Abubakar, Wazirin Adamawa. This national connection strengthens the message of accountability, opportunity, and progress while keeping the main focus on Yola South.
              </p>
              <div className="mt-4 text-lg font-semibold text-white">Local leadership with national alignment.</div>
            </div>
          </div>
        </section>

        <section id="volunteer" className="mx-auto max-w-7xl px-6 py-16">
          <div className="grid gap-10 md:grid-cols-[0.9fr_1.1fr]">
            <div>
              <div className="text-sm font-semibold uppercase tracking-[0.2em] text-green-700">Volunteer</div>
              <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">Join the movement</h2>
              <p className="mt-6 text-lg leading-8 text-slate-600">
                Build support from community to ward level through direct outreach, agenda awareness, media support, youth mobilization, and grassroots organization.
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
                  <option>Movement Volunteer</option>
                  <option>Ward Mobilizer</option>
                  <option>Community Coordinator</option>
                  <option>Media Support</option>
                  <option>Youth Outreach</option>
                </select>
                <textarea name="message" placeholder="Short message" className="min-h-[120px] rounded-2xl border border-slate-300 bg-white px-4 py-3" />
                <button type="submit" className="rounded-2xl bg-green-700 px-5 py-3 font-semibold text-white transition hover:bg-green-800">Submit Volunteer Form</button>
              </form>
            </div>
          </div>
        </section>

        <section id="candidate-profile" className="bg-green-50 py-16">
          <div className="mx-auto grid max-w-7xl gap-10 px-6 md:grid-cols-2 items-center">
            <div>
              <div className="text-sm font-semibold uppercase tracking-[0.2em] text-green-700">Candidate Profile</div>
              <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">Ahmad Rufai Abdulhamid</h2>
              <p className="mt-2 font-semibold text-green-700">Aspirant, Member Yola South – Adamawa State House of Assembly</p>
              <p className="mt-6 text-lg leading-8 text-slate-600">
                A committed grassroots leader focused on practical development and community impact across Yola South.
              </p>
              <div className="mt-6 space-y-3">
                <div className="flex items-start gap-3"><span className="mt-1 inline-block h-2 w-2 rounded-full bg-green-700" /><p><strong>Youth Empowerment:</strong> Skills development, entrepreneurship support, and job creation initiatives for young people.</p></div>
                <div className="flex items-start gap-3"><span className="mt-1 inline-block h-2 w-2 rounded-full bg-green-700" /><p><strong>Child & Maternal Healthcare:</strong> Improving access to quality healthcare for mothers and children across communities.</p></div>
                <div className="flex items-start gap-3"><span className="mt-1 inline-block h-2 w-2 rounded-full bg-green-700" /><p><strong>Community Engagement:</strong> Strengthening direct interaction with citizens and ensuring their voices shape policy and development.</p></div>
              </div>
            </div>
            <div className="rounded-[2rem] overflow-hidden shadow-lg">
              <img src="/sponsor.jpg" alt="Ahmad Rufai Abdulhamid" className="w-full h-[420px] object-cover" />
            </div>
          </div>
          <div className="mx-auto mt-12 max-w-7xl px-6">
            <div className="text-sm font-semibold uppercase tracking-[0.2em] text-green-700">Candidate Gallery</div>
            <div className="mt-6 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {sponsorGallery.map(([src, caption], i) => (
                <div key={i} className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
                  <img src={src} className="h-[260px] w-full object-cover" alt={`Sponsor ${i + 1}`} />
                  <div className="p-4 text-sm leading-6 text-slate-600">{caption}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="news" className="bg-slate-50 py-16">
          <div className="mx-auto max-w-7xl px-6">
            <div className="text-sm font-semibold uppercase tracking-[0.2em] text-green-700">News / Updates</div>
            <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">Latest from the movement</h2>
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
            <div className="text-sm font-semibold uppercase tracking-[0.2em] text-green-700">National Gallery</div>
            <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">Presidential campaign moments</h2>
            <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {["/atiku1.jpg","/atiku2.jpg","/atiku3.jpg","/atiku4.jpg","/atiku5.jpg","/atiku6.jpg"].map((src, i) => (
                <img key={i} src={src} className="h-[320px] w-full rounded-2xl object-cover" alt={`National ${i + 1}`} />
              ))}
            </div>
          </div>
        </section>

        <a href={whatsappGroupLink} target="_blank" rel="noreferrer" className="fixed bottom-6 right-6 z-30 rounded-full bg-green-700 px-6 py-4 font-semibold text-white shadow-2xl hover:bg-green-800">
          Join WhatsApp Group
        </a>

        <footer className="bg-slate-950 text-white">
          <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 md:grid-cols-3">
            <div>
              <div className="flex items-center gap-3">
                <img src="/adc-logo.png" alt="ADC Logo" className="h-10 w-10 object-contain" />
                <div>
                  <div className="text-xl font-bold">Ahmad Rufai Abdulhamid Movement</div>
                  <div className="text-sm text-slate-400">Yola South House of Assembly • ADC</div>
                </div>
              </div>
              <p className="mt-4 leading-7 text-slate-400">
                A people-driven movement focused on youth empowerment, child and maternal healthcare, and stronger community engagement across Yola South.
              </p>
            </div>
            <div>
              <div className="text-lg font-semibold">Quick Links</div>
              <div className="mt-4 space-y-2 text-slate-400">
                <div><a href="#agenda">Agenda</a></div>
                <div><a href="#community-impact">Community Impact</a></div>
                <div><a href="#event">EmpowerHer Event</a></div>
                <div><a href="#news">News & Updates</a></div>
              </div>
            </div>
            <div>
              <div className="text-lg font-semibold">Connect</div>
              <p className="mt-4 leading-7 text-slate-400">
                Join the official WhatsApp group for movement updates, event information, and community engagement.
              </p>
              <a href={whatsappGroupLink} target="_blank" rel="noreferrer" className="mt-4 inline-block rounded-2xl bg-green-700 px-5 py-3 font-semibold text-white">
                Join WhatsApp Group
              </a>
            </div>
          </div>
          <div className="border-t border-white/10 px-6 py-4 text-center text-sm text-slate-500">
            © 2026 Ahmad Rufai Abdulhamid Movement. Powered by Astrovia Enterprise.
          </div>
        </footer>
      </main>
    </div>
  );
}
