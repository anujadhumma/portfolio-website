import { useState, useEffect } from "react";
import chefbotImg from './chefbot.png';
import plantpal1 from './plantpal_1.png';
import plantpal2 from './plantpal_2.png';
import plantpal3 from './plantpal_3.png';
import plantpal4 from './plantpal_4.png';
import myPhoto from './Portfolioheropic.jpeg';



const style = `
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=DM+Sans:wght@300;400;500;600&display=swap');

  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

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

  body {
    font-family: 'DM Sans', sans-serif;
    background: var(--cream);
    color: var(--ink);
    overflow-x: hidden;
  }

  /* NAV */
  nav {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 100;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 60px;
    background: rgba(250,247,242,0.94);
    backdrop-filter: blur(12px);
    border-bottom: 1px solid var(--border);
  }

  .nav-logo {
    font-family: 'Cormorant Garamond', serif;
    font-size: 22px;
    font-weight: 600;
    color: var(--ink);
    text-decoration: none;
  }

  .nav-logo span {
    color: var(--terra);
    font-style: italic;
  }

  .nav-links {
    display: flex;
    gap: 36px;
    list-style: none;
  }

  .nav-links a {
    font-size: 12px;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--muted);
    text-decoration: none;
    transition: color 0.2s;
  }

  .nav-links a:hover {
    color: var(--terra);
  }

  .menu-toggle {
    display: none;
    width: 38px;
    height: 34px;
    border: none;
    background: transparent;
    cursor: pointer;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 6px;
  }

  .menu-toggle span {
    display: block;
    width: 26px;
    height: 2px;
    background: var(--ink);
  }

  /* HERO */
  .hero {
    min-height: 100vh;
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding-top: 80px;
    overflow: hidden;
  }

  .hero-left {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 80px 60px 80px 80px;
  }

  .hero-eyebrow {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 20px;
    font-size: 11px;
    font-weight: 500;
    letter-spacing: 0.22em;
    text-transform: uppercase;
    color: var(--terra);
  }

  .hero-eyebrow::before {
    content: '';
    width: 32px;
    height: 1px;
    background: var(--terra);
    flex-shrink: 0;
  }

  .hero-name {
    font-family: 'Cormorant Garamond', serif;
    font-size: clamp(52px, 6vw, 82px);
    font-weight: 300;
    line-height: 1.05;
    margin-bottom: 8px;
  }

  .hero-name em {
    color: var(--terra);
  }

  .hero-title {
    font-family: 'Cormorant Garamond', serif;
    font-size: clamp(17px, 2vw, 24px);
    font-weight: 300;
    font-style: italic;
    color: var(--muted);
    margin-bottom: 28px;
    line-height: 1.5;
  }

  .hero-desc {
    max-width: 420px;
    font-size: 15px;
    line-height: 1.8;
    color: var(--muted);
    margin-bottom: 44px;
  }

  .hero-ctas {
    display: flex;
    gap: 16px;
    flex-wrap: wrap;
  }

  .btn-primary,
  .btn-outline {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    text-transform: uppercase;
    font-size: 12px;
    font-weight: 500;
    letter-spacing: 0.1em;
    transition: all 0.25s;
  }

  .btn-primary {
    background: var(--terra);
    color: white;
    padding: 14px 32px;
    clip-path: polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px));
  }

  .btn-primary:hover {
    background: var(--ink);
    transform: translateY(-2px);
  }

  .btn-outline {
    color: var(--ink);
    border: 1px solid var(--border);
    padding: 13px 28px;
  }

  .btn-outline:hover {
    border-color: var(--terra);
    color: var(--terra);
  }

  .hero-right {
    position: relative;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    background: linear-gradient(160deg, var(--warm-white) 0%, var(--blush) 60%, #D4967A 100%);
    overflow: hidden;
  }

  .hero-accent-circle,
  .hero-accent-circle2 {
    position: absolute;
    pointer-events: none;
  }

  .hero-accent-circle {
    width: 280px;
    height: 280px;
    border-radius: 50%;
    border: 1px solid rgba(255,255,255,0.4);
    top: 18%;
    left: 8%;
  }

  .hero-accent-circle2 {
    width: 140px;
    height: 140px;
    border-radius: 50%;
    background: rgba(255,255,255,0.1);
    bottom: 12%;
    right: 6%;
  }

  .hero-photo-wrap {
    position: relative;
    width: 100%;
    max-width: 500px;
    z-index: 2;
  }

  .hero-photo {
    width: 100%;
    aspect-ratio: 3 / 4;
    object-fit: contain;
    object-position: center;
    display: block;
  }

  /* RESUME */
  .resume-banner {
    background: var(--ink);
    padding: 20px 80px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 24px;
    flex-wrap: wrap;
  }

  .resume-banner-text {
    font-size: 13px;
    letter-spacing: 0.08em;
    color: rgba(250,247,242,0.5);
    text-transform: uppercase;
  }

  .resume-banner-text strong {
    color: var(--cream);
    font-weight: 500;
  }

  .resume-actions {
    display: flex;
    gap: 12px;
  }

  .resume-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 12px 28px;
    border: 1px solid rgba(255,255,255,0.2);
    color: var(--cream);
    font-size: 12px;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    text-decoration: none;
    transition: all 0.25s;
  }

  .resume-btn:hover {
    background: var(--terra);
    border-color: var(--terra);
  }

  /* SHARED SECTIONS */
  section {
    padding: 100px 80px;
  }

  .section-header {
    margin-bottom: 64px;
  }

  .section-num {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 16px;
    font-size: 11px;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--terra);
  }

  .section-num::after {
    content: '';
    width: 48px;
    height: 1px;
    background: var(--terra);
  }

  .section-title {
    font-family: 'Cormorant Garamond', serif;
    font-size: clamp(36px, 4vw, 54px);
    font-weight: 300;
    line-height: 1.1;
  }

  .section-title em {
    color: var(--terra);
  }

  /* ABOUT */
  .about {
    background: var(--warm-white);
  }

  .about-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 80px;
    align-items: start;
  }

  .about-text p {
    font-size: 15px;
    line-height: 1.9;
    color: var(--muted);
    margin-bottom: 18px;
  }

  .about-stats {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    margin-top: 44px;
  }

  .stat-card {
    position: relative;
    padding: 26px 22px;
    border: 1px solid var(--border);
    background: var(--cream);
    overflow: hidden;
  }

  .stat-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 3px;
    height: 100%;
    background: var(--terra);
  }

  .stat-card-num {
    display: block;
    font-family: 'Cormorant Garamond', serif;
    font-size: 34px;
    font-weight: 600;
    color: var(--terra);
  }

  .stat-card-label {
    display: block;
    margin-top: 4px;
    font-size: 11px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--muted);
  }

  .skill-category {
    margin-bottom: 28px;
  }

  .skill-cat-title {
    margin-bottom: 10px;
    font-size: 11px;
    font-weight: 500;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: var(--terra);
  }

  .skill-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  }

  .skill-tag {
    font-size: 12px;
    padding: 5px 13px;
    border: 1px solid var(--border);
    color: var(--muted);
    letter-spacing: 0.04em;
  }

  .about-carousel {
  position: relative;
  width: min(760px, 100%);
  margin: 56px auto 0;
  border: none;
  background: var(--warm-white);
}

.about-carousel img {
  width: 100%;
  aspect-ratio: 16 / 9;
  object-fit: cover;
  display: block;
}

.about-carousel-caption {
  padding: 14px 22px 8px;
  color: var(--muted);
  font-size: 13px;
  line-height: 1.5;
  text-align: center;
  background: var(--warm-white);
  border-top: 1px solid var(--border);
}

.about-carousel-dots {
  display: flex;
  justify-content: center;
  gap: 7px;
  padding: 8px 0 16px;
  background: var(--warm-white);
}

.about-carousel-dots button {
  width: 7px;
  height: 7px;
  border: none;
  border-radius: 999px;
  background: var(--border);
  cursor: pointer;
}

.about-carousel-dots button.active {
  background: var(--terra);
}

.about-carousel-btn {
  position: absolute;
  top: calc((100% - 58px) / 2);
  transform: translateY(-50%);
  width: 34px;
  height: 34px;
  border: 1px solid rgba(250,247,242,0.45);
  background: rgba(26,23,20,0.38);
  color: var(--warm-white);
  font-size: 22px;
  cursor: pointer;
  transition: background 0.2s, border-color 0.2s;
}

.about-carousel-btn:hover {
  background: var(--terra);
  border-color: var(--terra);
}

.about-carousel-btn.prev {
  left: 14px;
}

.about-carousel-btn.next {
  right: 14px;
}

  /* EXPERIENCE */
  .experience {
    background: var(--cream);
  }

  .exp-timeline {
    position: relative;
  }

  .exp-timeline::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 1px;
    background: var(--border);
  }

  .exp-item {
    position: relative;
    padding-left: 40px;
    padding-bottom: 52px;
  }

  .exp-item::before {
    content: '';
    position: absolute;
    left: -4px;
    top: 6px;
    width: 9px;
    height: 9px;
    border-radius: 50%;
    background: var(--terra);
    border: 2px solid var(--cream);
  }

  .exp-meta {
    display: flex;
    align-items: baseline;
    gap: 20px;
    margin-bottom: 6px;
    flex-wrap: wrap;
  }

  .exp-company {
    font-family: 'Cormorant Garamond', serif;
    font-size: 22px;
    font-weight: 600;
  }

  .exp-date {
    font-size: 11px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--terra);
  }

  .exp-role {
    font-size: 13px;
    font-style: italic;
    color: var(--muted);
    margin-bottom: 14px;
  }

  .exp-bullets {
    list-style: none;
  }

  .exp-bullets li {
    position: relative;
    padding-left: 16px;
    margin-bottom: 7px;
    font-size: 14px;
    line-height: 1.7;
    color: var(--muted);
  }

  .exp-bullets li::before {
    content: '-';
    position: absolute;
    left: 0;
    color: var(--terra);
  }

  /* PROJECTS */
  .projects {
    background: var(--ink);
  }

  .projects .section-num {
    color: var(--blush);
  }

  .projects .section-num::after {
    background: var(--blush);
  }

  .projects .section-title {
    color: var(--cream);
  }

  .projects .section-title em {
    color: var(--blush);
  }

  .projects-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1px;
    background: var(--ink);
    align-items: start;
  }

  .project-card {
    position: relative;
    display: flex;
    flex-direction: column;
    background: var(--ink);
    border-top: 2px solid var(--terra);
    overflow: hidden;
    transition: background 0.25s;
  }

  .project-card:hover {
    background: rgba(255,255,255,0.03);
  }

  .project-img-wrap {
    width: 100%;
    aspect-ratio: 16 / 9;
    overflow: hidden;
    position: relative;
  }

  .project-img-wrap img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    filter: brightness(0.86);
    transition: filter 0.3s;
  }

  .project-card:hover .project-img-wrap img {
    filter: brightness(1);
  }

  .project-body {
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 32px 30px 36px;
  }

  .project-card-text-only {
    align-self: start;
    background: var(--ink);
  }

  .project-card-text-only .project-body {
    min-height: auto;
    padding: 38px 34px 40px;
  }

  .project-card-text-only .project-desc {
    flex: initial;
  }

  .project-card-text-only .project-techs {
    margin-top: 28px;
  }

  .project-num {
    position: absolute;
    top: 16px;
    right: 20px;
    font-family: 'Cormorant Garamond', serif;
    font-size: 44px;
    font-weight: 300;
    line-height: 1;
    color: rgba(255,255,255,0.06);
    pointer-events: none;
  }

  .project-tag {
    margin-bottom: 12px;
    font-size: 10px;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: var(--terra);
  }

  .project-name {
    font-family: 'Cormorant Garamond', serif;
    font-size: 24px;
    font-weight: 600;
    color: var(--cream);
    margin-bottom: 10px;
    line-height: 1.2;
  }

  .project-desc {
    flex: 1;
    margin-bottom: 20px;
    font-size: 13px;
    line-height: 1.7;
    color: rgba(250,247,242,0.48);
  }

  .project-techs {
    display: flex;
    flex-wrap: wrap;
    gap: 7px;
    margin-bottom: 20px;
  }

  .project-tech {
    font-size: 10px;
    padding: 4px 10px;
    border: 1px solid rgba(255,255,255,0.1);
    color: rgba(250,247,242,0.38);
    letter-spacing: 0.05em;
  }

  .project-links {
    display: flex;
    gap: 12px;
  }

  .project-link {
    display: inline-flex;
    align-items: center;
    width: fit-content;
    padding-bottom: 4px;
    border-bottom: 1px solid var(--terra);
    color: var(--cream);
    font-size: 12px;
    font-weight: 600;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    text-decoration: none;
    transition: color 0.2s, border-color 0.2s, transform 0.2s;
  }

  .project-link:hover {
    color: var(--blush);
    border-color: var(--blush);
    transform: translateY(-1px);
  }

  /* HONORS + LEADERSHIP */
  .honors {
    background: var(--cream);
  }

  .honors-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
  }

  .honor-card,
  .lead-card {
    border: 1px solid var(--border);
    position: relative;
    overflow: hidden;
  }

  .honor-card {
    padding: 32px 28px;
    background: var(--warm-white);
  }

  .honor-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 3px;
    height: 100%;
    background: var(--terra);
  }

  .honor-title,
  .lead-org {
    font-family: 'Cormorant Garamond', serif;
    font-weight: 600;
    color: var(--ink);
    margin-bottom: 6px;
  }

  .honor-title { font-size: 20px; }
  .lead-org { font-size: 18px; }

  .honor-sub,
  .lead-role {
    font-size: 11px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--terra);
    margin-bottom: 10px;
  }

  .honor-desc,
  .lead-desc {
    font-size: 13px;
    line-height: 1.7;
    color: var(--muted);
  }

  .leadership {
    background: var(--warm-white);
  }

  .leadership-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
  }

  .lead-card {
    padding: 32px 26px;
    background: var(--cream);
    transition: transform 0.25s, box-shadow 0.25s;
  }

  .lead-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 16px 40px rgba(0,0,0,0.06);
  }

  /* CONTACT */
  .contact {
    position: relative;
    overflow: hidden;
    text-align: center;
    padding: 120px 80px;
    background: linear-gradient(135deg, var(--ink) 0%, #2C2420 100%);
  }

  .contact::before {
    content: 'HELLO';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-family: 'Cormorant Garamond', serif;
    font-size: 200px;
    font-weight: 700;
    color: rgba(255,255,255,0.02);
    pointer-events: none;
    white-space: nowrap;
  }

  .contact .section-num {
    justify-content: center;
    color: var(--blush);
  }

  .contact .section-num::after {
    background: var(--blush);
  }

  .contact .section-title {
    color: var(--cream);
    margin-bottom: 20px;
  }

  .contact .section-title em {
    color: var(--blush);
  }

  .contact-sub {
    max-width: 500px;
    margin: 0 auto 52px;
    font-size: 15px;
    line-height: 1.8;
    color: rgba(250,247,242,0.45);
  }

  .contact-links {
    display: flex;
    justify-content: center;
    gap: 16px;
    flex-wrap: wrap;
  }

  .contact-link {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 13px 26px;
    border: 1px solid rgba(255,255,255,0.16);
    color: var(--cream);
    text-decoration: none;
    font-size: 12px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    transition: all 0.25s;
  }

  .contact-link:hover,
  .contact-link.primary {
    background: var(--terra);
    border-color: var(--terra);
  }

  footer {
    background: var(--ink);
    border-top: 1px solid rgba(255,255,255,0.06);
    padding: 24px 80px;
  }

  .fade-in {
    opacity: 0;
    transform: translateY(22px);
    transition: opacity 0.65s ease, transform 0.65s ease;
  }

  .fade-in.visible {
    opacity: 1;
    transform: translateY(0);
  }

  /* TABLET + MOBILE */
  @media (max-width: 900px) {
    nav {
      padding: 16px 24px;
    }

    .menu-toggle {
      display: flex;
    }

    .nav-links {
      position: absolute;
      top: 100%;
      left: 0;
      right: 0;
      display: none;
      flex-direction: column;
      gap: 0;
      background: rgba(250,247,242,0.98);
      border-bottom: 1px solid var(--border);
    }

    .nav-links.open {
      display: flex;
    }

    .nav-links li {
      border-top: 1px solid var(--border);
    }

    .nav-links a {
      display: block;
      padding: 16px 24px;
    }

    .hero {
      grid-template-columns: 1fr;
      min-height: auto;
    }

    .hero-left {
      padding: 100px 28px 48px;
    }

    .hero-right {
      height: auto;
      min-height: 300px;
      padding: 0 24px 42px;
    }

    .hero-photo-wrap {
      max-width: 360px;
    }

    section {
      padding: 72px 24px;
    }

    .about-grid,
    .projects-grid,
    .honors-grid {
      grid-template-columns: 1fr;
    }

    .leadership-grid {
      grid-template-columns: 1fr 1fr;
    }

    .resume-banner {
      padding: 16px 24px;
    }

    .about-carousel {
  width: 100%;
  margin-top: 44px;
}

.about-carousel img {
  aspect-ratio: 16 / 10;
}
  }

  /* PHONE */
  @media (max-width: 600px) {
    nav {
      padding: 14px 18px;
    }

    .nav-logo {
      font-size: 20px;
    }

    .hero {
      padding-top: 64px;
    }

    .hero-left {
      padding: 56px 20px 36px;
    }

    .hero-eyebrow {
      font-size: 10px;
      line-height: 1.5;
      letter-spacing: 0.14em;
      align-items: flex-start;
    }

    .hero-eyebrow::before {
      width: 24px;
      margin-top: 8px;
    }

    .hero-name {
      font-size: 48px;
    }

    .hero-title {
      font-size: 18px;
      margin-bottom: 20px;
    }

    .hero-desc {
      font-size: 14px;
      line-height: 1.7;
      margin-bottom: 30px;
    }

    .hero-ctas,
    .resume-actions {
      flex-direction: column;
      align-items: stretch;
      width: 100%;
    }

    .btn-primary,
    .btn-outline,
    .resume-btn,
    .contact-link {
      width: 100%;
      text-align: center;
    }

    .hero-right {
      min-height: 0;
      padding: 0 20px 36px;
    }

    .hero-photo-wrap {
      max-width: 320px;
    }

    .hero-photo {
      aspect-ratio: 4 / 5;
    }

    .hero-accent-circle,
    .hero-accent-circle2 {
      display: none;
    }

    section {
      padding: 64px 20px;
    }

    .section-header {
      margin-bottom: 36px;
    }

    .section-title {
      font-size: 36px;
    }

    .about-grid {
      gap: 40px;
    }

    .about-stats {
      grid-template-columns: 1fr;
    }

   .about-carousel {
  margin-top: 38px;
}

.about-carousel img {
  aspect-ratio: 16 / 10;
}
    .exp-item {
      padding-left: 28px;
      padding-bottom: 42px;
    }

    .exp-meta {
      flex-direction: column;
      gap: 6px;
    }

    .exp-company {
      font-size: 20px;
    }

    .project-body,
    .project-card-text-only .project-body {
      padding: 26px 22px 30px;
    }

    .project-num {
      font-size: 34px;
      top: 12px;
      right: 14px;
    }

    .leadership-grid {
      grid-template-columns: 1fr;
    }

    .honor-card,
    .lead-card {
      padding: 26px 22px;
    }

    .contact {
      padding: 72px 20px;
    }

    .contact::before {
      font-size: 96px;
    }

    .contact-sub {
      font-size: 14px;
      margin-bottom: 34px;
    }

    .contact-link.primary {
      overflow-wrap: anywhere;
    }

    footer {
      padding: 20px 24px;
    }
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
function AboutCarousel({ maxImages = 12 }) {
  const [images, setImages] = useState([]);
  const [current, setCurrent] = useState(0);
const captions = [
  "NASEC Conference at University of Pittsburgh, representing the University of Toledo Engineering Council (UTEC) in 2023",
  "NASEC Conference at University of Pittsburgh, representing the University of Toledo Engineering Council (UTEC) in 2023",
  "Phi Sigma Rho Recruitment Week 2026, organized and executed by me as Director of Recruitment",
  "Phi Sigma Rho Recruitment Week 2026, organized and executed by me as Director of Recruitment",
  "First Solar Inuagration Ceremony, Trinity, AL, 2024",
  "First Solar Inuagration Ceremony, Trinity, AL, 2024",
];
  useEffect(() => {
    let active = true;
    const extensions = ["jpg", "jpeg", "png", "webp"];

    const checkImage = (src) =>
      new Promise((resolve) => {
        const img = new Image();
        img.onload = () => resolve(src);
        img.onerror = () => resolve(null);
        img.src = src;
      });

    async function loadImages() {
      const found = [];

      for (let i = 1; i <= maxImages; i++) {
        const options = await Promise.all(
          extensions.map((ext) => checkImage(`/aboutme${i}.${ext}`))
        );

        const match = options.find(Boolean);
        if (match) found.push(match);
      }

      if (active) setImages(found);
    }

    loadImages();

    return () => {
      active = false;
    };
  }, [maxImages]);
useEffect(() => {
  if (images.length <= 1) return;

  const timer = setInterval(() => {
    setCurrent((prev) => (prev + 1) % images.length);
  }, 3500);

  return () => clearInterval(timer);
}, [images.length]);
  if (!images.length) return null;

  return (
    <div className="about-carousel">
      <img src={images[current]} alt="Anuja's leadership and internship moments" />
<p className="about-carousel-caption">{captions[current]}</p>
      {images.length > 1 && (
        <>
          <button
            className="about-carousel-btn prev"
            onClick={() => setCurrent((current - 1 + images.length) % images.length)}
          >
            ‹
          </button>

          <button
            className="about-carousel-btn next"
            onClick={() => setCurrent((current + 1) % images.length)}
          >
            ›
          </button>

          <div className="about-carousel-dots">
            {images.map((_, i) => (
              <button
                key={i}
                className={i === current ? "active" : ""}
                onClick={() => setCurrent(i)}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
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

  <button
    className="menu-toggle"
    onClick={() => setMenuOpen(!menuOpen)}
    aria-label="Toggle navigation menu"
  >
    <span></span>
    <span></span>
    <span></span>
  </button>

  <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
    {["About", "Experience", "Projects", "Honors", "Leadership", "Contact"].map((l) => (
      <li key={l}>
        <a href={`#${l.toLowerCase()}`} onClick={() => setMenuOpen(false)}>
          {l}
        </a>
      </li>
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
        <div className="resume-actions">
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
        <AboutCarousel /> 
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
           <div className={`project-card fade-in ${!p.imgSrc ? "project-card-text-only" : ""}`} key={i}>
              <span className="project-num">0{i + 1}</span>
              {p.imgSrc && (
  <div className="project-img-wrap">
    {Array.isArray(p.imgSrc) ? (
      <Carousel images={p.imgSrc} alt={p.imgAlt} />
    ) : (
      <img
        src={p.imgSrc}
        alt={p.imgAlt}
        style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", filter: "brightness(0.85)" }}
      />
    )}
  </div>
)}
              <div className="project-body">
                <p className="project-tag">{p.tag}</p>
                <h3 className="project-name">{p.name}</h3>
                <p className="project-desc">{p.desc}</p>
                <div className="project-techs">
                  {p.tech.map((t) => <span className="project-tech" key={t}>{t}</span>)}
                </div>
                <div className="project-links">
                  {p.github && (
                    <a href={p.github} target="_blank" rel="noreferrer" className="project-link">GitHub Link</a>
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