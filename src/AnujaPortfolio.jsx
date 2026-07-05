import { useState, useEffect } from "react";
import chefbotImg from './chefbot.png';
import plantpal1 from './plantpal_1.png';
import plantpal2 from './plantpal_2.png';
import plantpal3 from './plantpal_3.png';
import plantpal4 from './plantpal_4.png';
import myPhoto from './Portfolioheropic.jpeg';

const style = `
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=DM+Sans:wght@300;400;500&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  :root {
    --cream: #FAF7F2;
    --warm-white: #F5F0E8;
    --ink: #1A1714;
    --blush: #E8C5B8;
    --terra: #C4785A;
    --muted: #7A6E67;
    --border: #E0D8CF;
  }

  html { scroll-behavior: smooth; }
  body { font-family: 'DM Sans', sans-serif; background: var(--cream); color: var(--ink); overflow-x: hidden; }

  nav {
    position: fixed; top: 0; left: 0; right: 0; z-index: 100;
    display: flex; align-items: center; justify-content: space-between;
    padding: 20px 60px;
    background: rgba(250,247,242,0.92); backdrop-filter: blur(12px);
    border-bottom: 1px solid var(--border);
  }
  .nav-logo { font-family: 'Cormorant Garamond', serif; font-size: 22px; font-weight: 600; color: var(--ink); text-decoration: none; }
  .nav-logo span { color: var(--terra); font-style: italic; }
  .nav-links { display: flex; gap: 36px; list-style: none; }
  .nav-links a { font-size: 12px; font-weight: 400; letter-spacing: 0.12em; text-transform: uppercase; color: var(--muted); text-decoration: none; transition: color 0.2s; }
  .nav-links a:hover { color: var(--terra); }

  .hero { min-height: 100vh; display: grid; grid-template-columns: 1fr 1fr; padding-top: 80px; position: relative; overflow: hidden; }
  .hero-left { display: flex; flex-direction: column; justify-content: center; padding: 80px 60px 80px 80px; }
  .hero-eyebrow { font-size: 11px; font-weight: 500; letter-spacing: 0.22em; text-transform: uppercase; color: var(--terra); margin-bottom: 20px; display: flex; align-items: center; gap: 12px; }
  .hero-eyebrow::before { content: ''; display: block; width: 32px; height: 1px; background: var(--terra); }
  .hero-name { font-family: 'Cormorant Garamond', serif; font-size: clamp(52px, 6vw, 82px); font-weight: 300; line-height: 1.05; color: var(--ink); margin-bottom: 8px; }
  .hero-name em { font-style: italic; color: var(--terra); }
  .hero-title { font-family: 'Cormorant Garamond', serif; font-size: clamp(17px, 2vw, 24px); font-weight: 300; font-style: italic; color: var(--muted); margin-bottom: 28px; line-height: 1.5; }
  .hero-desc { font-size: 15px; line-height: 1.8; color: var(--muted); max-width: 420px; margin-bottom: 44px; }
  .hero-ctas { display: flex; gap: 16px; align-items: center; flex-wrap: wrap; }

  .btn-primary { display: inline-flex; align-items: center; gap: 10px; background: var(--terra); color: white; padding: 14px 32px; font-size: 12px; letter-spacing: 0.1em; text-transform: uppercase; text-decoration: none; font-weight: 500; transition: all 0.25s; clip-path: polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px)); }
  .btn-primary:hover { background: var(--ink); transform: translateY(-2px); }
  .btn-outline { display: inline-flex; align-items: center; gap: 8px; color: var(--ink); font-size: 12px; letter-spacing: 0.1em; text-transform: uppercase; text-decoration: none; font-weight: 500; border: 1px solid var(--border); padding: 13px 28px; transition: all 0.2s; }
  .btn-outline:hover { border-color: var(--terra); color: var(--terra); }

  .hero-right { position: relative; display: flex; align-items: flex-end; justify-content: center; background: linear-gradient(160deg, var(--warm-white) 0%, var(--blush) 60%, #D4967A 100%); overflow: hidden; }
  .hero-accent-circle { position: absolute; width: 280px; height: 280px; border-radius: 50%; border: 1px solid rgba(255,255,255,0.4); top: 18%; left: 8%; pointer-events: none; }
  .hero-accent-circle2 { position: absolute; width: 140px; height: 140px; border-radius: 50%; background: rgba(255,255,255,0.1); bottom: 12%; right: 6%; pointer-events: none; }
  .hero-photo-wrap { position: relative; width: 100%; max-width: 500px; z-index: 2; }
  .hero-photo { width: 100%; aspect-ratio: 3/4; object-fit: cover; object-position: top center; display: block; }
  .hero-photo-placeholder { width: 100%; aspect-ratio: 3/4; background: linear-gradient(180deg, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0.06) 100%); border: 1.5px dashed rgba(255,255,255,0.35); border-bottom: none; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 10px; }
  .hero-photo-placeholder span { color: rgba(255,255,255,0.45); font-size: 12px; letter-spacing: 0.14em; text-transform: uppercase; text-align: center; padding: 0 20px; }
  .hero-photo-placeholder small { color: rgba(255,255,255,0.25); font-size: 11px; }

  .resume-banner { background: var(--ink); padding: 20px 80px; display: flex; align-items: center; justify-content: space-between; gap: 24px; flex-wrap: wrap; }
  .resume-banner-text { font-size: 13px; letter-spacing: 0.08em; color: rgba(250,247,242,0.5); text-transform: uppercase; }
  .resume-banner-text strong { color: var(--cream); font-weight: 500; }
  .resume-btn { display: inline-flex; align-items: center; gap: 10px; padding: 12px 28px; border: 1px solid rgba(255,255,255,0.2); color: var(--cream); font-size: 12px; letter-spacing: 0.12em; text-transform: uppercase; text-decoration: none; transition: all 0.25s; }
  .resume-btn:hover { background: var(--terra); border-color: var(--terra); }

  section { padding: 100px 80px; }
  .section-header { margin-bottom: 64px; }
  .section-num { font-size: 11px; letter-spacing: 0.2em; text-transform: uppercase; color: var(--terra); display: flex; align-items: center; gap: 12px; margin-bottom: 16px; }
  .section-num::after { content: ''; display: block; width: 48px; height: 1px; background: var(--terra); }
  .section-title { font-family: 'Cormorant Garamond', serif; font-size: clamp(36px, 4vw, 54px); font-weight: 300; line-height: 1.1; color: var(--ink); }
  .section-title em { font-style: italic; color: var(--terra); }

  .about { background: var(--warm-white); }
  .about-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: start; }
  .about-text p { font-size: 15px; line-height: 1.9; color: var(--muted); margin-bottom: 18px; }
  .about-text p strong { color: var(--ink); font-weight: 500; }
  .about-stats { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-top: 44px; }
  .stat-card { padding: 26px 22px; border: 1px solid var(--border); background: var(--cream); position: relative; overflow: hidden; }
  .stat-card::before { content: ''; position: absolute; top: 0; left: 0; width: 3px; height: 100%; background: var(--terra); }
  .stat-card-num { font-family: 'Cormorant Garamond', serif; font-size: 34px; font-weight: 600; color: var(--terra); display: block; }
  .stat-card-label { font-size: 11px; letter-spacing: 0.1em; text-transform: uppercase; color: var(--muted); margin-top: 4px; }
  .skill-category { margin-bottom: 28px; }
  .skill-cat-title { font-size: 11px; letter-spacing: 0.15em; text-transform: uppercase; color: var(--terra); margin-bottom: 10px; font-weight: 500; }
  .skill-tags { display: flex; flex-wrap: wrap; gap: 8px; }
  .skill-tag { font-size: 12px; padding: 5px 13px; border: 1px solid var(--border); color: var(--muted); letter-spacing: 0.04em; transition: all 0.2s; cursor: default; }
  .skill-tag:hover { border-color: var(--terra); color: var(--terra); }

  .experience { background: var(--cream); }
  .exp-timeline { position: relative; }
  .exp-timeline::before { content: ''; position: absolute; left: 0; top: 0; bottom: 0; width: 1px; background: var(--border); }
  .exp-item { padding-left: 40px; padding-bottom: 52px; position: relative; }
  .exp-item::before { content: ''; position: absolute; left: -4px; top: 6px; width: 9px; height: 9px; border-radius: 50%; background: var(--terra); border: 2px solid var(--cream); }
  .exp-meta { display: flex; align-items: baseline; gap: 20px; margin-bottom: 6px; flex-wrap: wrap; }
  .exp-company { font-family: 'Cormorant Garamond', serif; font-size: 22px; font-weight: 600; color: var(--ink); }
  .exp-date { font-size: 11px; letter-spacing: 0.1em; text-transform: uppercase; color: var(--terra); }
  .exp-role { font-size: 13px; font-style: italic; color: var(--muted); margin-bottom: 14px; }
  .exp-bullets { list-style: none; }
  .exp-bullets li { font-size: 14px; line-height: 1.7; color: var(--muted); margin-bottom: 7px; padding-left: 16px; position: relative; }
  .exp-bullets li::before { content: '-'; position: absolute; left: 0; color: var(--terra); }

  .projects { background: var(--ink); }
  .projects .section-num { color: var(--blush); }
  .projects .section-num::after { background: var(--blush); }
  .projects .section-title { color: var(--cream); }
  .projects .section-title em { color: var(--blush); }
  .projects-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1px; background: rgba(255,255,255,0.07); }
  .project-card { background: var(--ink); padding: 0; transition: background 0.3s; position: relative; overflow: hidden; display: flex; flex-direction: column; }
  .project-card::before { content: ''; position: absolute; top: 0; left: 0; right: 0; height: 2px; background: var(--terra); transform: scaleX(0); transform-origin: left; transition: transform 0.35s ease; z-index: 2; }
  .project-card:hover { background: rgba(255,255,255,0.03); }
  .project-card:hover::before { transform: scaleX(1); }
  .project-img-wrap { width: 100%; aspect-ratio: 16/9; overflow: hidden; position: relative; }
  .project-img-wrap img { width: 100%; height: 100%; object-fit: cover; display: block; filter: brightness(0.85); transition: filter 0.3s; }
  .project-card:hover .project-img-wrap img { filter: brightness(1); }
  .project-img-placeholder { width: 100%; height: 100%; background: rgba(255,255,255,0.04); border: 1.5px dashed rgba(255,255,255,0.12); display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 8px; }
  .project-img-placeholder span { font-size: 11px; letter-spacing: 0.14em; text-transform: uppercase; color: rgba(255,255,255,0.2); text-align: center; padding: 0 16px; }
  .project-body { padding: 32px 30px 36px; flex: 1; display: flex; flex-direction: column; }
  .project-num { font-family: 'Cormorant Garamond', serif; font-size: 44px; font-weight: 300; color: rgba(255,255,255,0.06); position: absolute; top: 16px; right: 20px; line-height: 1; pointer-events: none; }
  .project-tag { font-size: 10px; letter-spacing: 0.18em; text-transform: uppercase; color: var(--terra); margin-bottom: 12px; }
  .project-name { font-family: 'Cormorant Garamond', serif; font-size: 24px; font-weight: 600; color: var(--cream); margin-bottom: 10px; line-height: 1.2; }
  .project-desc { font-size: 13px; line-height: 1.7; color: rgba(250,247,242,0.45); margin-bottom: 20px; flex: 1; }
  .project-techs { display: flex; flex-wrap: wrap; gap: 7px; margin-bottom: 20px; }
  .project-tech { font-size: 10px; padding: 4px 10px; border: 1px solid rgba(255,255,255,0.1); color: rgba(250,247,242,0.35); letter-spacing: 0.05em; }
  .project-links { display: flex; gap: 12px; }
  .project-link { font-size: 11px; letter-spacing: 0.12em; text-transform: uppercase; text-decoration: none; color: rgba(250,247,242,0.4); border-bottom: 1px solid rgba(255,255,255,0.12); padding-bottom: 2px; transition: color 0.2s, border-color 0.2s; }
  .project-link:hover { color: var(--terra); border-color: var(--terra); }


  .honors { background: var(--cream); }
  .honors-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 24px; }
  .honor-card { padding: 32px 28px; background: var(--warm-white); border: 1px solid var(--border); position: relative; overflow: hidden; }
  .honor-card::before { content: ''; position: absolute; top: 0; left: 0; width: 3px; height: 100%; background: var(--terra); }
  .honor-title { font-family: 'Cormorant Garamond', serif; font-size: 20px; font-weight: 600; color: var(--ink); margin-bottom: 6px; }
  .honor-sub { font-size: 11px; letter-spacing: 0.1em; text-transform: uppercase; color: var(--terra); margin-bottom: 10px; }
  .honor-desc { font-size: 13px; line-height: 1.7; color: var(--muted); }

  .leadership { background: var(--warm-white); }
  .leadership-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
  .lead-card { padding: 32px 26px; background: var(--cream); border: 1px solid var(--border); transition: transform 0.25s, box-shadow 0.25s; }
  .lead-card:hover { transform: translateY(-4px); box-shadow: 0 16px 40px rgba(0,0,0,0.06); }
  .lead-org { font-family: 'Cormorant Garamond', serif; font-size: 18px; font-weight: 600; color: var(--ink); margin-bottom: 6px; }
  .lead-role { font-size: 11px; letter-spacing: 0.08em; color: var(--terra); text-transform: uppercase; margin-bottom: 12px; }
  .lead-desc { font-size: 13px; line-height: 1.7; color: var(--muted); }

  .contact { background: linear-gradient(135deg, var(--ink) 0%, #2C2420 100%); text-align: center; padding: 120px 80px; position: relative; overflow: hidden; }
  .contact::before { content: 'HELLO'; position: absolute; font-family: 'Cormorant Garamond', serif; font-size: 200px; font-weight: 700; color: rgba(255,255,255,0.02); top: 50%; left: 50%; transform: translate(-50%, -50%); pointer-events: none; white-space: nowrap; }
  .contact .section-num { justify-content: center; color: var(--blush); }
  .contact .section-num::after { background: var(--blush); }
  .contact .section-title { color: var(--cream); margin-bottom: 20px; }
  .contact .section-title em { color: var(--blush); }
  .contact-sub { font-size: 15px; color: rgba(250,247,242,0.45); margin-bottom: 52px; line-height: 1.8; max-width: 500px; margin-left: auto; margin-right: auto; }
  .contact-links { display: flex; justify-content: center; gap: 16px; flex-wrap: wrap; }
  .contact-link { display: inline-flex; align-items: center; gap: 10px; padding: 13px 26px; border: 1px solid rgba(255,255,255,0.16); color: var(--cream); text-decoration: none; font-size: 12px; letter-spacing: 0.1em; text-transform: uppercase; transition: all 0.25s; }
  .contact-link:hover { background: var(--terra); border-color: var(--terra); }
  .contact-link.primary { background: var(--terra); border-color: var(--terra); }
  .contact-link.primary:hover { background: #B56A4C; }

  footer { background: var(--ink); border-top: 1px solid rgba(255,255,255,0.06); padding: 24px 80px; display: flex; align-items: center; justify-content: center; }
  footer p { font-size: 11px; color: rgba(250,247,242,0.28); letter-spacing: 0.08em; }
  footer a { color: rgba(250,247,242,0.28); text-decoration: none; transition: color 0.2s; }
  footer a:hover { color: var(--terra); }

  .fade-in { opacity: 0; transform: translateY(22px); transition: opacity 0.65s ease, transform 0.65s ease; }
  .fade-in.visible { opacity: 1; transform: translateY(0); }

  @media (max-width: 900px) {
    nav { padding: 16px 24px; }
    .nav-links { display: none; }
    .hero { grid-template-columns: 1fr; }
    .hero-left { padding: 100px 28px 48px; }
    .hero-right { height: 60vw; min-height: 300px; }
    section { padding: 72px 24px; }
    .about-grid, .research-grid { grid-template-columns: 1fr; gap: 40px; }
    .projects-grid { grid-template-columns: 1fr; }
    .honors-grid { grid-template-columns: 1fr; }
    .leadership-grid { grid-template-columns: 1fr 1fr; }
    .resume-banner { padding: 16px 24px; }
    footer { padding: 20px 24px; }
  }
`;

const PROJECTS = [
  {
    tag: "Full-Stack / IoT / Team Project",
    name: "PlantPal",
    desc: "A full-stack smart plant care web application built with a team. Features include Supabase authentication, user accounts, a personalized plant dashboard, an AI chatbot, weather API integration, automated email alerts, charts and analytics, and a responsive design. Sensor data is collected via ESP32 hardware and stored in a cloud PostgreSQL database.",
    tech: ["React", "Node.js", "Express", "Supabase", "PostgreSQL", "ESP32", "REST APIs", "Git"],
    github: "https://github.com/anujadhumma/Plantpal",
    demo: null,
    imgSrc: [plantpal4, plantpal2, plantpal3, plantpal1],
    imgAlt: "PlantPal dashboard screenshot",
  },
  {
    tag: "AI / Full-Stack",
    name: "ChefBot",
    desc: "An AI-powered recipe assistant that generates ingredient-based recipes through a conversational interface. Built with prompt engineering techniques to guide the model toward accurate, useful cooking suggestions. Deployed on Railway with a React frontend and Node.js backend.",
    tech: ["React", "Node.js", "OpenRouter API", "Prompt Engineering", "Railway"],
    github: "https://github.com/anujadhumma/chefbot-cooking-assistant",
    demo: null,
    imgSrc: chefbotImg,
    imgAlt: "ChefBot screenshot",
  },
  {
    tag: "Java / OOP",
    name: "Bank System",
    desc: "A Java application for managing loan accounts and calculating balances. Designed with object-oriented programming principles including encapsulation, inheritance, and abstraction to produce clean, maintainable code.",
    tech: ["Java", "OOP", "Data Structures"],
    github: null,
    demo: null,
    imgSrc: null,
    imgAlt: "",
  },
];

const EXPERIENCE = [
  {
    company: "First Solar",
    role: "Manufacturing Integration Intern, Trinity, AL",
    date: "Jun 2024 - Dec 2024",
    bullets: [
      "Automated daily operations tracking with JMP/SQL scripts, improving workflow efficiency by 35%.",
      "Delivered daily presentations to cross-functional teams, improving clarity and decision-making speed.",
      "Monitored scrap data trends and collaborated with engineers on interface improvements, contributing to a 15% reduction in recurring issues.",
    ],
  },
  {
    company: "First Solar",
    role: "Manufacturing Integration Intern, Perrysburg, OH",
    date: "Sept 2023 - Dec 2023",
    bullets: [
      "Developed Python scripts to automate daily manufacturing data reporting from JMP/SQL into Excel and PowerPoint, improving reporting efficiency by 40%.",
      "Analyzed scrap data to identify defect trends and proposed actionable solutions with cross-functional teams, increasing defect identification speed by 25%.",
    ],
  },
  {
    company: "University of Toledo, IT Help Desk (ECC)",
    role: "IT Help Desk Assistant",
    date: "Aug 2022 - Present",
    bullets: [
      "Provide technical support for desktops, printers, mobile devices, and software across academic and administrative departments.",
      "Deploy and maintain OS images, support system maintenance, machine refreshes, and user onboarding for new IT tools.",
      "Resolve an average of 40+ tickets per semester, reducing downtime by 20% through effective troubleshooting.",
    ],
  },
  {
    company: "Adaptive RF & Plasma Lab, University of Toledo",
    role: "Undergraduate Research Assistant",
    date: "Mar 2025 - Dec 2025",
    bullets: [
      "Assisted with experimental setup, data collection, and analysis for research on plasma activated water for urinary sepsis treatment.",
      "Performed literature reviews and contributed to RF and plasma engineering research across 3 active projects.",
      "Received the Academic Student Research Award for contributions to undergraduate research.",
    ],
  },
];

const HONORS = [
  {
    title: "Dean's List",
    sub: "University of Toledo, Spring 2025",
    desc: "Recognized for academic excellence with a GPA qualifying for the Dean's List in the College of Engineering.",
  },
  {
    title: "Academic Student Research Award",
    sub: "University of Toledo, Fall 2025",
    desc: "Awarded for outstanding contributions to undergraduate research in the Adaptive RF & Plasma Lab under Dr. Abbas Semnani.",
  },
];

const LEADERSHIP = [
  {
    org: "Phi Sigma Rho",
    role: "Director of Recruitment, Fundraising Chair, Apparel Chair",
    desc: [
      "Planned and executed Recruitment Week as Director of Recruitment (Spring 2026), coordinating events, working with local businesses, and managing all logistics and promotional materials.",
      "Organized the Valentine's Day fundraiser supporting Blood Cancer United as Fundraising Chair.",
      "Managed chapter apparel orders and vendor coordination as Apparel Chair.",
      "Strengthened leadership, communication, and organizational skills across all three roles.",
    ],
  },
  {
    org: "University of Toledo Engineering Council (UTEC)",
    role: "Event Management Committee",
    desc: [
      "Supported a STEM outreach event for elementary and high school students.",
      "Assisted with the Engineering Leadership Summit.",
      "Represented the University of Toledo at the NASEC Conference at the University of Pittsburgh.",
      "Participated in professional development workshops and industry tours.",
    ],
  },
  {
    org: "University of Toledo",
    role: "Student Leader & Volunteer",
    desc: [
      "Served as a student panelist for a Professional Development course.",
      "Participated in a Town Hall for prospective engineering students.",
      "Volunteered at the Engineering Career Fair.",
      "Volunteered at the Summer Engineering Camp for high school students.",
    ],
  },
];
function Carousel({ images, alt }) {
  const [current, setCurrent] = useState(0);
  return (
    <div style={{ position: "relative", width: "100%", height: "100%" }}>
      <img
        src={images[current]}
        alt={alt}
        style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", filter: "brightness(0.85)", transition: "opacity 0.3s" }}
      />
      <div style={{ position: "absolute", bottom: 10, left: 0, right: 0, display: "flex", justifyContent: "center", gap: 6 }}>
        {images.map((_, i) => (
          <button key={i} onClick={() => setCurrent(i)} style={{ width: 7, height: 7, borderRadius: "50%", border: "none", cursor: "pointer", background: i === current ? "var(--terra)" : "rgba(255,255,255,0.35)", padding: 0, transition: "background 0.2s" }} />
        ))}
      </div>
      <button onClick={() => setCurrent((current - 1 + images.length) % images.length)}
        style={{ position: "absolute", left: 8, top: "50%", transform: "translateY(-50%)", background: "rgba(0,0,0,0.35)", border: "none", color: "white", cursor: "pointer", padding: "4px 9px", fontSize: 16 }}>‹</button>
      <button onClick={() => setCurrent((current + 1) % images.length)}
        style={{ position: "absolute", right: 8, top: "50%", transform: "translateY(-50%)", background: "rgba(0,0,0,0.35)", border: "none", color: "white", cursor: "pointer", padding: "4px 9px", fontSize: 16 }}>›</button>
    </div>
  );
}
export default function Portfolio() {
  useEffect(() => {
    const els = document.querySelectorAll(".fade-in");
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.08 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <style>{style}</style>

      {/* NAV */}
      <nav>
        <a href="#home" className="nav-logo">Anuja <span>Dhumma</span></a>
        <ul className="nav-links">
          {["About", "Experience", "Projects", "Honors", "Leadership", "Contact"].map((l) => (
            <li key={l}><a href={`#${l.toLowerCase()}`}>{l}</a></li>
          ))}
        </ul>
      </nav>

      {/* HERO */}
      <section className="hero" id="home">
        <div className="hero-left">
          <p className="hero-eyebrow">Computer Science &amp; Electrical Engineering Student</p>
          <h1 className="hero-name">Anuja<br /><em>Dhumma.</em></h1>
          <p className="hero-title">Aspiring Cloud Engineer, IT Systems, and Data Analytics</p>
          <p className="hero-desc">
            Dual-degree student at the University of Toledo with hands-on experience in manufacturing automation at First Solar,
            IT systems support, and undergraduate research in RF and plasma engineering.
            Focused on cloud computing, IT systems, and data-driven solutions.
          </p>
          <div className="hero-ctas">
            <a href="#contact" className="btn-primary">Get In Touch</a>
            <a href="#projects" className="btn-outline">View Projects</a>
          </div>
        </div>

        <div className="hero-right">
          <div className="hero-accent-circle" />
          <div className="hero-accent-circle2" />
          <div className="hero-photo-wrap">
            <img src={myPhoto} alt="Anuja Dhumma" className="hero-photo" style={{ objectFit: "contain", objectPosition: "center center", background: "transparent" }} />
          </div>
        </div>
      </section>

      {/* RESUME BANNER */}
      <div className="resume-banner">
        <p className="resume-banner-text"><strong>My Resume</strong> - View or download my full CV</p>
        <div style={{ display: "flex", gap: 12 }}>
          <a href="/AnujaDhumma_Resume.pdf" target="_blank" rel="noreferrer" className="resume-btn">
            View Resume
          </a>
          <a href="/AnujaDhumma_Resume.pdf" download="AnujaDhumma_Resume.pdf" className="resume-btn">
            Download
          </a>
        </div>
      </div>

      {/* ABOUT */}
      <section className="about" id="about">
        <div className="section-header fade-in">
          <p className="section-num">01</p>
          <h2 className="section-title">About <em>Me</em></h2>
        </div>
        <div className="about-grid">
          <div>
            <div className="about-text fade-in">
              <p>
                I am a dual-degree senior at the University of Toledo pursuing a B.S. in both Computer Science and Electrical Engineering.
                Studying both disciplines has given me a strong foundation in software development, hardware systems, and how the two work together.
              </p>
              <p>
                My interest in engineering was shaped early by my father, whose career and philanthropic work providing bioengineering equipment to underserved communities showed me how technology can have a direct impact on people's lives.
              </p>
              <p>
                Balancing three internship rotations at First Solar, IT support work, undergraduate research, and multiple leadership roles has strengthened my time management, adaptability, and ability to work through complex problems.
                I am actively seeking opportunities in cloud computing, IT systems, systems engineering, and data analytics.
              </p>
            </div>
            <div className="about-stats fade-in">
              {[
                { num: "May 2027", label: "Expected Graduation" },
                { num: "3x", label: "First Solar Intern" },
                { num: "4+", label: "Years IT Experience" },
                { num: "3+", label: "Leadership Roles" },
              ].map((s) => (
                <div className="stat-card" key={s.label}>
                  <span className="stat-card-num">{s.num}</span>
                  <span className="stat-card-label">{s.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="fade-in">
            {[
              { cat: "Programming", tags: ["Python", "SQL", "Java", "C", "C++", "JavaScript", "HTML", "CSS", "MATLAB"] },
              { cat: "Cloud & IT", tags: ["Active Directory", "SCCM", "Intune", "OS Imaging", "RDP", "Cloud Fundamentals"] },
              { cat: "Data & Analytics", tags: ["Power BI", "JMP", "Excel", "PostgreSQL", "Automation", "Data Visualization"] },
              { cat: "Development", tags: ["React", "Node.js", "Express", "REST APIs", "Supabase", "Git & GitHub"] },
              { cat: "Engineering", tags: ["OOP", "Data Structures", "Operating Systems", "Machine Learning","Computer Security","Database Management", "Network Security", "Computer Architecture", "Digital Logic", "Feedback Control", "SPICE", "SolidWorks"] },
            ].map(({ cat, tags }) => (
              <div className="skill-category" key={cat}>
                <p className="skill-cat-title">{cat}</p>
                <div className="skill-tags">
                  {tags.map((t) => <span className="skill-tag" key={t}>{t}</span>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="experience" id="experience">
        <div className="section-header fade-in">
          <p className="section-num">02</p>
          <h2 className="section-title">Work <em>Experience</em></h2>
        </div>
        <div className="exp-timeline">
          {EXPERIENCE.map((exp, i) => (
            <div className="exp-item fade-in" key={i}>
              <div className="exp-meta">
                <span className="exp-company">{exp.company}</span>
                <span className="exp-date">{exp.date}</span>
              </div>
              <p className="exp-role">{exp.role}</p>
              <ul className="exp-bullets">
                {exp.bullets.map((b, j) => <li key={j}>{b}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section className="projects" id="projects">
        <div className="section-header fade-in">
          <p className="section-num">03</p>
          <h2 className="section-title">Technical <em>Projects</em></h2>
        </div>
        <div className="projects-grid">
          {PROJECTS.map((p, i) => (
            <div className="project-card fade-in" key={i}>
              <span className="project-num">0{i + 1}</span>
              <div className="project-img-wrap">
  {!p.imgSrc ? null : Array.isArray(p.imgSrc) ? (
    <Carousel images={p.imgSrc} alt={p.imgAlt} />
  ) : (
    <img src={p.imgSrc} alt={p.imgAlt} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", filter: "brightness(0.85)" }} />
  )}
</div>
              <div className="project-body">
                <p className="project-tag">{p.tag}</p>
                <h3 className="project-name">{p.name}</h3>
                <p className="project-desc">{p.desc}</p>
                <div className="project-techs">
                  {p.tech.map((t) => <span className="project-tech" key={t}>{t}</span>)}
                </div>
                <div className="project-links">
                  {p.github && (
                    <a href={p.github} target="_blank" rel="noreferrer" className="project-link">GitHub</a>
                  )}
                  {p.demo && (
                    <a href={p.demo} target="_blank" rel="noreferrer" className="project-link">Live Demo</a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* HONORS */}
      <section className="honors" id="honors">
        <div className="section-header fade-in">
          <p className="section-num">04
          </p>
          <h2 className="section-title">Honors &amp; <em>Recognition</em></h2>
        </div>
        <div className="honors-grid">
          {HONORS.map((h, i) => (
            <div className="honor-card fade-in" key={i}>
              <h3 className="honor-title">{h.title}</h3>
              <p className="honor-sub">{h.sub}</p>
              <p className="honor-desc">{h.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* LEADERSHIP */}
      <section className="leadership" id="leadership">
        <div className="section-header fade-in">
          <p className="section-num">05</p>
          <h2 className="section-title">Leadership &amp; <em>Involvement</em></h2>
        </div>
        <div className="leadership-grid">
          {LEADERSHIP.map((l, i) => (
            <div className="lead-card fade-in" key={i}>
              <h3 className="lead-org">{l.org}</h3>
              <p className="lead-role">{l.role}</p>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
  {l.desc.map((point, j) => (
    <li key={j} style={{ fontSize: 13, lineHeight: 1.7, color: "var(--muted)", marginBottom: 6, paddingLeft: 14, position: "relative" }}>
      <span style={{ position: "absolute", left: 0, color: "var(--terra)" }}>-</span>
      {point}
    </li>
  ))}
</ul>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section className="contact" id="contact">
        <p className="section-num" style={{ justifyContent: "center" }}>06</p>
        <h2 className="section-title" style={{ marginBottom: 20 }}>Let's <em>Connect</em></h2>
        <p className="contact-sub">
          I am currently seeking internships and full-time opportunities in cloud computing, IT systems, systems engineering, data analytics, and solutions engineering.
        </p>
        <div className="contact-links">
          <a href="mailto:Anuja.Dhumma@rockets.utoledo.edu" className="contact-link primary">Email Me At anuja.dhumma@rockets.utoledo.edu</a>
          <a href="https://www.linkedin.com/in/anuja-dhumma-1bb579206/" target="_blank" rel="noreferrer" className="contact-link">LinkedIn</a>
          <a href="https://github.com/anujadhumma" target="_blank" rel="noreferrer" className="contact-link">GitHub</a>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
      </footer>
    </>
  );
}