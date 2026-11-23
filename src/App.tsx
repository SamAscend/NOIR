import { useEffect, useState } from "react";
import { ArrowDown, ArrowLeft, ArrowRight, ArrowUpRight, Globe2, Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { siteCopy, type Language, type Page } from "./data";

const slugs = ["identity", "philosophy", "vision", "edge", "execution", "director"];

function getSlug() {
  const path = window.location.pathname.replace(/^\/+|\/+$/g, "");
  return slugs.includes(path) ? path : "";
}

export default function App() {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem("noir-language");
    return saved === "en" || saved === "ja" ? saved : "id";
  });
  const [slug, setSlug] = useState(getSlug);
  const [menuOpen, setMenuOpen] = useState(false);
  const copy = siteCopy[language];

  useEffect(() => {
    document.documentElement.lang = language;
    localStorage.setItem("noir-language", language);
  }, [language]);

  useEffect(() => {
    const onPop = () => setSlug(getSlug());
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, []);

  useEffect(() => {
    const page = slug ? copy.pages[slug] : null;
    document.title = page ? `${page.title} — NOIR` : "NOIR — Discipline in Silence";
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [slug, copy]);

  const navigate = (path: string) => {
    window.history.pushState({}, "", path ? `/${path}` : "/");
    setSlug(path);
    setMenuOpen(false);
  };

  return (
    <div className="site-shell">
      <header className="topbar">
        <button className="brand" type="button" onClick={() => navigate("")} aria-label="NOIR home"><span>NOIR</span><i>.</i></button>
        <nav className={`nav ${menuOpen ? "nav-open" : ""}`} aria-label={copy.navLabel}>
          {slugs.map((item) => (
            <button key={item} type="button" className={slug === item ? "active" : ""} onClick={() => navigate(item)}>{copy.nav[item]}</button>
          ))}
        </nav>
        <div className="topbar-actions">
          <label className="language-picker">
            <Globe2 aria-hidden="true" size={14} />
            <select value={language} onChange={(event) => setLanguage(event.target.value as Language)} aria-label="Language">
              <option value="id">ID</option><option value="en">EN</option><option value="ja">JP</option>
            </select>
          </label>
          <button className="menu-button" type="button" onClick={() => setMenuOpen((open) => !open)} aria-expanded={menuOpen}>
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      <AnimatePresence mode="wait">
        <motion.main key={`${language}-${slug || "home"}`} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.35 }}>
          {slug ? <DetailPage page={copy.pages[slug]} copy={copy} navigate={navigate} /> : <Home copy={copy} navigate={navigate} />}
        </motion.main>
      </AnimatePresence>

      <footer className="footer">
        <button type="button" onClick={() => navigate("")}>NOIR<span>.</span></button>
        <p>© {new Date().getFullYear()} · {copy.footer}</p>
      </footer>
    </div>
  );
}

function Home({ copy, navigate }: { copy: typeof siteCopy.id; navigate: (path: string) => void }) {
  return (
    <>
      <section className="hero">
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-copy">
          <motion.p className="eyebrow" initial={{ opacity: 0 }} animate={{ opacity: 1 }}><span />{copy.heroKicker}</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}>
            {copy.heroTitle.map((line, index) => <span key={line} className={index === 1 ? "accent" : ""}>{line}</span>)}
          </motion.h1>
          <motion.p className="hero-lead" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }}>{copy.heroLead}</motion.p>
          <motion.button className="primary-action" type="button" onClick={() => document.querySelector("#principles")?.scrollIntoView({ behavior: "smooth" })}>
            {copy.explore}<ArrowDown size={16} />
          </motion.button>
        </div>
        <motion.div className="hero-mark" aria-hidden="true" initial={{ opacity: 0, scale: 0.92 }} animate={{ opacity: 1, scale: 1 }}>
          <div className="mark-ring"><span>N</span></div><b>99</b><small>%</small>
        </motion.div>
        <div className="hero-index"><span>001</span><i /><span>{copy.scroll}</span></div>
      </section>

      <section className="about-section">
        <p className="section-label"><span>01</span>{copy.aboutKicker}</p>
        <div>
          <h2>{copy.aboutTitle.map((line) => <span key={line}>{line}</span>)}</h2>
          <p>{copy.aboutBody}</p>
        </div>
      </section>

      <section className="principles-section" id="principles">
        <div className="section-heading">
          <div>
            <p className="section-label"><span>02</span>{copy.indexKicker}</p>
            <h2>{copy.indexTitle.map((line) => <span key={line}>{line}</span>)}</h2>
          </div>
          <p className="section-aside">{copy.indexAside}</p>
        </div>
        <div className="chapter-list">
          {copy.cards.map((card, index) => (
            <button key={card.title} type="button" className="principle-card" onClick={() => navigate(slugs[index])}>
              <div><span>0{index + 1}</span><ArrowUpRight size={18} /></div>
              <h3>{card.title}</h3><p>{card.text}</p>
            </button>
          ))}
        </div>
      </section>

      <section className="closing-section">
        <p className="section-label"><span>03</span>{copy.closingKicker}</p>
        <div className="closing-line" />
        <h2>{copy.closingTitle.map((line) => <span key={line}>{line}</span>)}</h2>
        <p>{copy.closingBody}</p>
        <button type="button" onClick={() => navigate("director")}>{copy.closingButton}<ArrowRight size={16} /></button>
      </section>
    </>
  );
}

function DetailPage({ page, copy, navigate }: { page: Page; copy: typeof siteCopy.id; navigate: (path: string) => void }) {
  const index = slugs.indexOf(page.slug);
  const previous = index > 0 ? copy.pages[slugs[index - 1]] : null;
  const next = copy.pages[slugs[(index + 1) % slugs.length]];
  return (
    <article className="detail-page">
      <header className="detail-hero">
        <p className="eyebrow"><span />{page.number} / {page.label}</p>
        <h1>{page.title}</h1><p className="detail-intro">{page.intro}</p>
      </header>
      <div className="detail-content">
        {page.sections.map((section) => (
          <section className="detail-section" key={section.index}>
            <div className="detail-label"><span>{section.index}</span><h2>{section.title}</h2></div>
            <div className="detail-body">
              {section.body && <p>{section.body}</p>}
              {section.quote && <blockquote>{section.quote}</blockquote>}
              {section.items && <div className="detail-list">{section.items.map((item, itemIndex) => (
                <article key={item.title}><span>0{itemIndex + 1}</span><div><h3>{item.title}</h3><p>{item.text}</p></div></article>
              ))}</div>}
            </div>
          </section>
        ))}
      </div>
      <nav className="detail-pagination" aria-label={copy.navLabel}>
        {previous ? <button type="button" onClick={() => navigate(previous.slug)}><ArrowLeft size={16} /><span><small>{copy.previous}</small>{previous.title}</span></button> : <span />}
        <button type="button" onClick={() => navigate(next.slug)}><span><small>{copy.next}</small>{next.title}</span><ArrowRight size={16} /></button>
      </nav>
    </article>
  );
}
