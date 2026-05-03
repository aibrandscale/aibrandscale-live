"use client";

import { useState, useEffect, useRef, type FormEvent } from "react";
import Image from "next/image";
import {
  PurpleAlertNav,
  Eyebrow,
  GlowCard,
  COLOR,
} from "./_design";

/* ─────────── CONFIG ─────────── */
const EVENT_DATE_LABEL = "15 май 2026";
const EVENT_TIME_LABEL = "18:00 ч.";

/* ─────────── PRIMITIVES ─────────── */

function Logo() {
  return (
    <span className="font-alfabet-black tracking-tight text-lg" style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
      <Image src="/nav-icon.png" alt="" width={28} height={28} priority style={{ width: 28, height: 28, display: "block", borderRadius: "50%", objectFit: "cover" }} />
      <span style={{ color: "var(--text)" }}>AI Brand</span>{" "}
      <span style={{ color: "var(--accent)" }}>Scale</span>
    </span>
  );
}

function ReserveCTAButton({
  type = "button",
  onClick,
  children,
}: {
  type?: "button" | "submit";
  onClick?: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      aria-label="Запази безплатно място"
      className="hero-cta-pulse"
      style={{
        position: "relative",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px clamp(22px, 6vw, 80px)",
        minHeight: 64,
        borderRadius: 1000,
        cursor: "pointer",
        fontFamily: "Manrope, sans-serif",
        fontWeight: 800,
        fontSize: "clamp(13px, 3.2vw, 17px)",
        letterSpacing: "0.02em",
        color: "#fff",
        textAlign: "center",
        lineHeight: 1.25,
        textTransform: "uppercase",
        background:
          "linear-gradient(180deg, rgba(123,47,190,0.35) 0%, rgba(85,43,105,0.30) 50%, rgba(30,18,52,0.45) 100%)",
        border: "1px solid rgba(255,255,255,0.30)",
        outline: "none",
        maxWidth: 600,
        width: "auto",
        whiteSpace: "nowrap",
      }}
    >
      <span style={{ position: "relative" }}>{children}</span>
    </button>
  );
}

function ScrollToFormCTA({ onOpen }: { onOpen?: () => void }) {
  return (
    <ReserveCTAButton
      onClick={() => {
        if (onOpen) {
          onOpen();
          return;
        }
        const el = document.getElementById("register");
        el?.scrollIntoView({ behavior: "smooth", block: "start" });
        const first = document.getElementById("reg-name") as HTMLInputElement | null;
        setTimeout(() => first?.focus(), 600);
      }}
    >
      Запази безплатно място
    </ReserveCTAButton>
  );
}

/* ─────────── SECTIONS ─────────── */

function Header({ onOpen }: { onOpen: () => void }) {
  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        background: "rgba(10,6,18,0.85)",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "16px clamp(16px, 4vw, 32px)", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <Logo />
        <ScrollToFormCTA onOpen={onOpen} />
      </div>
    </header>
  );
}

function Hero({ onOpen }: { onOpen: () => void }) {
  return (
    <section style={{ position: "relative", padding: "clamp(80px, 14vw, 160px) clamp(16px, 4vw, 32px) clamp(64px, 11vw, 130px)", textAlign: "center", overflow: "hidden", isolation: "isolate", minHeight: "min(820px, 100vw)" }}>
      {/* Audience wall background — clear, no dark overlay */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "min(820px, 100vw)",
          backgroundImage: "url(/hero-audience.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          opacity: 0.85,
          zIndex: -3,
        }}
      />
      {/* Venelin portrait centered behind text */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          left: "50%",
          top: "min(410px, 50vw)",
          transform: "translate(-50%, -52%)",
          width: "min(760px, 95vw)",
          aspectRatio: "1 / 1",
          backgroundImage: "url(/hero-venelin.png)",
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          zIndex: -1,
        }}
      />
      <div style={{ maxWidth: 760, margin: "0 auto", position: "relative", marginTop: "clamp(150px, 32vw, 300px)" }}>
        <Image
          src="/exploit-logo.png"
          alt="AI Exploit Event"
          width={195}
          height={77}
          priority
          unoptimized
          style={{ width: "clamp(90px, 11vw, 140px)", height: "auto", display: "block", margin: "0 auto 18px", imageRendering: "auto" }}
        />
        <div style={{ display: "inline-flex", alignItems: "center", gap: 10, padding: "6px 14px", borderRadius: 999, background: "rgba(10,6,18,0.55)", backdropFilter: "blur(8px)", marginBottom: 22 }}>
          <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#ff3b3b", boxShadow: "0 0 10px rgba(255,59,59,0.7)", flexShrink: 0 }} aria-hidden />
          <span style={{ fontSize: 11, letterSpacing: "0.16em", textTransform: "uppercase", color: COLOR.fg, fontFamily: "Manrope, sans-serif", fontWeight: 600 }}>
            Онлайн обучение на живо · {EVENT_DATE_LABEL.toUpperCase()}
          </span>
        </div>
        <h1
          className="font-alfabet-black"
          style={{
            fontSize: "clamp(16px, 2.6vw, 28px)",
            lineHeight: 1.15,
            letterSpacing: "-0.01em",
            color: COLOR.fg,
            margin: 0,
            textShadow: "0 2px 24px rgba(0,0,0,0.6)",
          }}
        >
          Предизвиквам те да изградиш бизнес,<br />
          който прави <span style={{ color: COLOR.purple100 }}>€166 на ден</span> за 30 дни
        </h1>
        <p
          style={{
            marginTop: 18,
            fontSize: "clamp(13px, 1.7vw, 15px)",
            lineHeight: 1.55,
            color: COLOR.fg,
            fontFamily: "Manrope, sans-serif",
            maxWidth: 580,
            marginLeft: "auto",
            marginRight: "auto",
            textShadow: "0 1px 16px rgba(0,0,0,0.7)",
          }}
        >
          Ще ти покажа точно как със само няколко часа на ден изграждаш печеливш AI бизнес — без технически умения и без предишен опит.
        </p>
        <div style={{ marginTop: 26, display: "flex", justifyContent: "center" }}>
          <ScrollToFormCTA onOpen={onOpen} />
        </div>
        <div style={{ marginTop: 18, display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "8px 24px", fontSize: "clamp(13px, 1.5vw, 15px)", fontFamily: "Manrope, sans-serif", color: COLOR.fg, fontWeight: 500, textShadow: "0 1px 10px rgba(0,0,0,0.7)" }}>
          <span style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={COLOR.purple100} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden style={{ flexShrink: 0 }}>
              <polyline points="16 18 22 12 16 6" />
              <polyline points="8 6 2 12 8 18" />
              <line x1="3" y1="21" x2="21" y2="3" />
            </svg>
            БЕЗ технически умения
          </span>
          <span style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={COLOR.purple100} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden style={{ flexShrink: 0 }}>
              <path d="M22 10 12 5 2 10l10 5 10-5Z" />
              <path d="M6 12v5c2 2 4 3 6 3s4-1 6-3v-5" />
              <line x1="3" y1="21" x2="21" y2="3" />
            </svg>
            БЕЗ нужен предишен опит
          </span>
        </div>
      </div>
    </section>
  );
}

function BrandsStrip({ onOpen }: { onOpen: () => void }) {
  const logos: { src: string; h: number }[] = [
    { src: "/brands/logo1.webp", h: 72 },
    { src: "/brands/logo2.webp", h: 110 },
    { src: "/brands/logo3.webp", h: 72 },
    { src: "/brands/logo4.webp", h: 110 },
    { src: "/brands/logo5.webp", h: 72 },
  ];
  const items = [...logos, ...logos];
  return (
    <section style={{ padding: "clamp(40px, 6vw, 80px) clamp(16px, 4vw, 32px)", textAlign: "center" }}>
      <div style={{ marginBottom: 28 }}>
        <Eyebrow>Бизнеси и инфлуенсъри, които ми се довериха</Eyebrow>
      </div>
      <div className="logo-ticker">
        <div className="logo-ticker__track">
          {items.map((logo, i) => (
            <span key={i} className="logo-ticker__item" style={{ height: logo.h }} aria-hidden={i >= logos.length}>
              <Image
                src={logo.src}
                alt={i < logos.length ? `Клиент ${i + 1}` : ""}
                width={Math.round(logo.h * 3.5)}
                height={logo.h}
                style={{ height: logo.h, width: "auto" }}
                unoptimized
              />
            </span>
          ))}
        </div>
      </div>
      <div style={{ marginTop: 40, display: "flex", justifyContent: "center" }}>
        <ScrollToFormCTA onOpen={onOpen} />
      </div>
    </section>
  );
}

function EventDetails({ onOpen }: { onOpen: () => void }) {
  const items = [
    {
      label: "КАКВО",
      live: false,
      headline: "AI Challenge",
      sub: "100% безплатен",
      body: "На живо ще покажа как изграждаш печеливш AI бизнес от нулата — стъпка по стъпка, без вода.",
    },
    {
      label: "НА ЖИВО",
      live: true,
      headline: EVENT_DATE_LABEL,
      sub: `${EVENT_TIME_LABEL}`,
      body: "Едно събитие на живо. Ще има limited reply за регистрираните, но опитът на живо е несравним.",
    },
    {
      label: "КЪДЕ",
      live: false,
      headline: "Google Meet",
      sub: "Онлайн",
      body: "Линкът за достъп се изпраща на имейла ти веднага след като запазиш мястото си.",
    },
  ];
  return (
    <section style={{ padding: "clamp(48px, 8vw, 96px) clamp(16px, 4vw, 32px)" }}>
      <div style={{ textAlign: "center", marginBottom: 40 }}>
        <Eyebrow>Всички важни детайли</Eyebrow>
        <h2 className="font-alfabet-black" style={{ fontSize: "clamp(28px, 5vw, 48px)", color: COLOR.fg, marginTop: 16, lineHeight: 1.1, letterSpacing: "-0.01em" }}>
          Какво те очаква на живо
        </h2>
      </div>
      <div className="trust-pills-grid" style={{ maxWidth: 1100 }}>
        {items.map((it) => (
          <div key={it.label} className="trust-pill" style={{ justifyContent: "space-between", minHeight: 240 }}>
            <div className="trust-pill__top">
              <span className={`trust-pill__badge${it.live ? " live" : ""}`}>
                {it.live && <span className="trust-pill__dot" />}
                {it.label}
              </span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }}>
              <span className="trust-pill__big" style={{ fontSize: "clamp(28px, 3.4vw, 38px)", fontFamily: "Manrope, sans-serif", fontWeight: 800, letterSpacing: "-0.01em" }}>
                {it.headline}
              </span>
              {it.sub && (
                <span style={{ fontSize: 13, fontWeight: 600, letterSpacing: "0.04em", textTransform: "uppercase", color: "rgba(255,255,255,0.62)", fontFamily: "Manrope, sans-serif" }}>
                  {it.sub}
                </span>
              )}
            </div>
            <p className="trust-pill__copy" style={{ width: "100%", textAlign: "center", fontSize: 12.5, lineHeight: 1.5 }}>{it.body}</p>
          </div>
        ))}
      </div>
      <div style={{ marginTop: 48, display: "flex", justifyContent: "center" }}>
        <ScrollToFormCTA onOpen={onOpen} />
      </div>
    </section>
  );
}

function SpeakerTimeline({ onOpen }: { onOpen: () => void }) {
  const items = [
    {
      n: "01",
      year: "2022",
      title: "Започна от едно усещане…",
      body: "Тръгнах от 0 — без капитал, без опит, без аудитория. Само с убеждение, че онлайн има начин.",
      photos: [
        { src: "/speaker/p1.webp", rot: -4, top: 0, left: 20, w: 340 },
        { src: "/speaker/p2.webp", rot: 6, top: 200, left: 280, w: 220 },
        { src: "/speaker/p3.webp", rot: -8, top: 260, left: 40, w: 220 },
      ],
    },
    {
      n: "02",
      year: "2023 – 2025",
      title: "С времето…",
      body: "Изградих няколко проекта от нулата. Работих с десетки бизнеси и инфлуенсъри. Видях какво наистина работи и какво е губене на време.",
      photos: [
        { src: "/assets/testimonial-thumb-4.png", rot: 9, top: 110, left: 290, w: 230 },
        { src: "/assets/testimonial-thumb-1.png", rot: -6, top: 0, left: 20, w: 220 },
        { src: "/assets/testimonial-thumb-2.png", rot: 6, top: 10, left: 280, w: 220 },
        { src: "/assets/testimonial-thumb-3.png", rot: -3, top: 170, left: 110, w: 290 },
      ],
    },
    {
      n: "03",
      year: "Днес",
      title: "След години опит…",
      body: "Открих модел, който позволява на обикновени хора да изградят печеливш AI бизнес само за няколко часа на ден. Това е, което ще покажа на живо.",
      photos: [
        { src: "/hero-venelin.png", rot: 4, top: 0, left: 20, w: 360 },
      ],
    },
  ];
  const wrapRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    let raf = 0;
    const update = () => {
      raf = 0;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight || document.documentElement.clientHeight;
      const anchor = vh * 0.55;
      const total = rect.height;
      const passed = anchor - rect.top;
      const p = Math.max(0, Math.min(1, passed / total));
      el.style.setProperty("--p", String(p));
    };
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section className="speaker-timeline" style={{ padding: "clamp(48px, 8vw, 96px) clamp(16px, 4vw, 32px)" }}>
      <div style={{ textAlign: "center", marginBottom: 56 }}>
        <Eyebrow>Защо да ме слушаш</Eyebrow>
        <h2 className="font-alfabet-black" style={{ fontSize: "clamp(28px, 5vw, 48px)", color: COLOR.fg, marginTop: 16, lineHeight: 1.1, letterSpacing: "-0.01em" }}>
          Защо трябва да те слушам?
        </h2>
      </div>
      <div className="speaker-timeline__wrap" ref={wrapRef}>
        <span className="speaker-timeline__diamond speaker-timeline__diamond--top" aria-hidden />
        <span className="speaker-timeline__diamond speaker-timeline__diamond--bottom" aria-hidden />
        <span className="speaker-timeline__fill" aria-hidden />
        {items.map((it, i) => {
          const flip = i % 2 === 1;
          return (
            <div key={it.n} className={`speaker-row${flip ? " speaker-row--flip" : ""}`}>
              <span className="speaker-row__node" aria-hidden />
              <div className="speaker-row__text">
                <div className="speaker-row__num">{it.year}</div>
                <h3 className="font-felt speaker-row__title">{it.title}</h3>
                <p className="speaker-row__body">{it.body}</p>
              </div>
              <div className="speaker-row__photos">
                {it.photos.map((p, k) => (
                  <Image
                    key={k}
                    src={p.src}
                    alt=""
                    width={p.w}
                    height={Math.round(p.w * 1.1)}
                    className="speaker-row__photo"
                    style={{
                      transform: `rotate(${p.rot}deg)`,
                      top: p.top,
                      left: p.left,
                      width: p.w,
                      zIndex: k + 1,
                    }}
                    unoptimized
                  />
                ))}
              </div>
            </div>
          );
        })}
      </div>
      <div className="speaker-banner">
        <span className="speaker-banner__beam" aria-hidden />
        <div className="speaker-banner__pill">
          <span className="speaker-banner__pill-dot" aria-hidden />
          ВАЖНО
        </div>
        <h3 className="speaker-banner__title">ЗАПАЗИ МЯСТОТО СИ ПО-ДОЛУ</h3>
        <p className="speaker-banner__sub">Ще получиш потвърждение изпратено на имейла ти.</p>
        <div className="speaker-banner__cta">
          <ScrollToFormCTA onOpen={onOpen} />
        </div>
      </div>
    </section>
  );
}


function RegisterModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [hp, setHp] = useState("");
  const [errors, setErrors] = useState<{ name?: string; email?: string; phone?: string; form?: string }>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  const phoneDigits = phone.replace(/\D/g, "").replace(/^0+/, "").slice(0, 9);
  const phoneFormatted = phoneDigits.replace(/^(\d{3})(\d{0,3})(\d{0,3}).*/, (_m, a, b, c) =>
    [a, b, c].filter(Boolean).join(" "),
  );
  const nameValid = name.trim().length >= 2;
  const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i.test(email.trim());
  const phoneValid = phoneDigits.length === 9 && /^[2-9]/.test(phoneDigits);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    const scrollY = window.scrollY;
    const body = document.body;
    body.style.position = "fixed";
    body.style.top = `-${scrollY}px`;
    body.style.left = "0";
    body.style.right = "0";
    body.style.width = "100%";
    body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      body.style.position = "";
      body.style.top = "";
      body.style.left = "";
      body.style.right = "";
      body.style.width = "";
      body.style.overflow = "";
      window.scrollTo({ top: scrollY, left: 0, behavior: "instant" as ScrollBehavior });
    };
  }, [open, onClose]);

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    if (hp || status === "loading") return;
    const next: typeof errors = {};
    if (!nameValid) next.name = "Моля, въведи името си.";
    if (!emailValid) next.email = "Невалиден имейл адрес.";
    if (!phoneValid) next.phone = phoneDigits.length !== 9 ? "Трябват 9 цифри след +359." : "Невалиден български номер.";
    if (Object.keys(next).length) {
      setErrors(next);
      return;
    }
    setErrors({});
    setStatus("loading");
    // TODO: wire to /api/optin once tracking is set up.
    await new Promise((r) => setTimeout(r, 600));
    setStatus("success");
  };

  if (!open) return null;
  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true" aria-labelledby="modal-title">
      <button onClick={(e) => { e.stopPropagation(); onClose(); }} aria-label="Затвори" className="modal-close-page" type="button">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </button>
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        <span className="modal-eyebrow">{status === "success" ? "Готово" : "Безплатно обучение"}</span>
        <h3 id="modal-title" className="font-alfabet-bold" style={{ fontSize: "clamp(24px, 3vw, 30px)", textAlign: "center", marginBottom: 18, lineHeight: 1.15, letterSpacing: "-0.01em", textTransform: status === "success" ? "none" : "uppercase", color: COLOR.fg }}>
          {status === "success" ? "Записах те!" : "Запази мястото си"}
        </h3>

        {status === "success" ? (
          <div style={{ color: COLOR.fgMuted, textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", gap: 16 }}>
            <p style={{ margin: 0, lineHeight: 1.55, fontFamily: "Manrope, sans-serif" }}>
              ✓ Провери имейла си в следващите <strong style={{ color: COLOR.fg }}>60 секунди</strong> — линкът за Google Meet идва веднага. Ако не го виждаш, провери „Промоции“ или „Спам“.
            </p>
            <button type="button" onClick={onClose} className="optin-submit" style={{ maxWidth: 200 }}>Затвори</button>
          </div>
        ) : (
          <form onSubmit={submit} noValidate style={{ display: "flex", flexDirection: "column", alignItems: "stretch", gap: 12, width: "100%" }}>
            {/* Name */}
            <div style={{ display: "flex", flexDirection: "column", gap: 4, alignItems: "stretch", width: "100%" }}>
              <label htmlFor="optin-name" style={{ fontSize: 11, letterSpacing: "0.16em", textTransform: "uppercase", color: COLOR.fgMuted, fontFamily: "Manrope, sans-serif", fontWeight: 600, textAlign: "center", display: "block", width: "100%" }}>
                Име
              </label>
              <div className={`field-shell${errors.name ? " is-error" : ""}`}>
                <input
                  id="optin-name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => { setName(e.target.value); if (errors.name) setErrors((p) => ({ ...p, name: undefined })); }}
                  autoComplete="given-name"
                  placeholder="Име и фамилия"
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? "optin-name-err" : undefined}
                  className="field-input"
                />
              </div>
              {errors.name && <p id="optin-name-err" role="alert" className="field-err">{errors.name}</p>}
            </div>

            {/* Email */}
            <div style={{ display: "flex", flexDirection: "column", gap: 4, alignItems: "stretch", width: "100%" }}>
              <label htmlFor="optin-email" style={{ fontSize: 11, letterSpacing: "0.16em", textTransform: "uppercase", color: COLOR.fgMuted, fontFamily: "Manrope, sans-serif", fontWeight: 600, textAlign: "center", display: "block", width: "100%" }}>
                Имейл
              </label>
              <div className={`field-shell${errors.email ? " is-error" : ""}`}>
                <input
                  id="optin-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => { setEmail(e.target.value); if (errors.email) setErrors((p) => ({ ...p, email: undefined })); }}
                  autoComplete="email"
                  placeholder="example@email.com"
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? "optin-email-err" : undefined}
                  className="field-input"
                />
              </div>
              {errors.email && <p id="optin-email-err" role="alert" className="field-err">{errors.email}</p>}
            </div>

            {/* Phone */}
            <div style={{ display: "flex", flexDirection: "column", gap: 4, alignItems: "stretch", width: "100%" }}>
              <label htmlFor="optin-phone" style={{ fontSize: 11, letterSpacing: "0.16em", textTransform: "uppercase", color: COLOR.fgMuted, fontFamily: "Manrope, sans-serif", fontWeight: 600, textAlign: "center", display: "block", width: "100%" }}>
                Телефон
              </label>
              <div className={`field-shell${errors.phone ? " is-error" : ""}`}>
                <span className="field-prefix" aria-hidden>
                  <span className="field-flag" role="img" aria-label="България">
                    <span style={{ background: "#FFFFFF" }} />
                    <span style={{ background: "#00966E" }} />
                    <span style={{ background: "#D62612" }} />
                  </span>
                  +359
                </span>
                <input
                  id="optin-phone"
                  type="tel"
                  required
                  value={phoneFormatted}
                  onChange={(e) => {
                    const d = e.target.value.replace(/\D/g, "").replace(/^0+/, "").slice(0, 9);
                    setPhone(d);
                    if (errors.phone) setErrors((p) => ({ ...p, phone: undefined }));
                  }}
                  inputMode="numeric"
                  autoComplete="tel-national"
                  placeholder="888 123 456"
                  aria-invalid={!!errors.phone}
                  aria-describedby={errors.phone ? "optin-phone-err" : undefined}
                  maxLength={11}
                  className="field-input"
                  style={{ letterSpacing: "0.05em" }}
                />
              </div>
              {errors.phone && <p id="optin-phone-err" role="alert" className="field-err">{errors.phone}</p>}
            </div>

            <input type="text" name="company" tabIndex={-1} autoComplete="off" value={hp}
              onChange={(e) => setHp(e.target.value)} aria-hidden="true"
              style={{ position: "absolute", left: "-9999px", width: 1, height: 1 }} />

            {errors.form && <p role="alert" className="field-err" style={{ textAlign: "center", marginTop: 4 }}>{errors.form}</p>}

            <button
              type="submit"
              disabled={status === "loading"}
              aria-busy={status === "loading"}
              className="optin-submit"
              style={{ marginTop: 4, opacity: status === "loading" ? 0.7 : 1, cursor: status === "loading" ? "wait" : "pointer" }}
            >
              {status === "loading" ? "Изпращаме…" : <>Запази безплатно място&nbsp;→</>}
            </button>

            <ul style={{
              margin: "4px 0 0",
              padding: 0,
              listStyle: "none",
              fontSize: 12,
              lineHeight: 1.5,
              color: COLOR.fgMuted,
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              justifyItems: "start",
              alignItems: "start",
              columnGap: 12,
              rowGap: 8,
              textAlign: "left",
              maxWidth: 360,
              marginInline: "auto",
              fontFamily: "Manrope, sans-serif",
            }}>
              {["100% безплатно", "Мигновен достъп", "Без кредитна карта", "Линк за Google Meet"].map((t, i) => (
                <li key={i} style={{ display: "inline-flex", alignItems: "flex-start", gap: 6 }}>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke={COLOR.purple100} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    <path d="M5 12l5 5L20 7" />
                  </svg>
                  {t}
                </li>
              ))}
            </ul>
            <p style={{ margin: "6px auto 0", fontSize: 11, lineHeight: 1.5, color: COLOR.fgMuted, textAlign: "center", opacity: 0.75, fontFamily: "Manrope, sans-serif" }}>
              С натискането на бутона приемаш{" "}
              <a href="https://aibrandscale.io/privacy" target="_blank" rel="noopener noreferrer" style={{ color: COLOR.fg, textDecoration: "underline", whiteSpace: "nowrap" }}>политиката за поверителност</a>.
            </p>
          </form>
        )}
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer style={{ borderTop: "1px solid rgba(255,255,255,0.06)", padding: "clamp(32px, 5vw, 56px) clamp(16px, 4vw, 32px)", textAlign: "center" }}>
      <div style={{ maxWidth: 800, margin: "0 auto" }}>
        <p style={{ fontSize: 12, color: COLOR.fgDim, fontFamily: "Manrope, sans-serif", lineHeight: 1.6 }}>
          Този сайт не е свързан с Meta™, Facebook™ или Instagram™. Всички права запазени.
        </p>
        <p style={{ marginTop: 12, fontSize: 12, color: COLOR.fgDim, fontFamily: "Manrope, sans-serif" }}>
          © {new Date().getFullYear()} AI Brand Scale ·{" "}
          <a href="https://aibrandscale.io/privacy" style={{ color: COLOR.fgMuted, textDecoration: "underline" }}>Privacy</a>{" · "}
          <a href="https://aibrandscale.io/terms" style={{ color: COLOR.fgMuted, textDecoration: "underline" }}>Terms</a>
        </p>
      </div>
    </footer>
  );
}

/* ─────────── PAGE ─────────── */

export default function Page() {
  const [modalOpen, setModalOpen] = useState(false);
  const open = () => setModalOpen(true);
  const close = () => setModalOpen(false);
  return (
    <>
      <PurpleAlertNav text={`ОНЛАЙН ОБУЧЕНИЕ НА ЖИВО · ${EVENT_DATE_LABEL.toUpperCase()} · ${EVENT_TIME_LABEL}`} />
      <main className="overflow-x-hidden w-full">
        <Hero onOpen={open} />
        <BrandsStrip onOpen={open} />
        <EventDetails onOpen={open} />
        <SpeakerTimeline onOpen={open} />
      </main>
      <Footer />
      <RegisterModal open={modalOpen} onClose={close} />
    </>
  );
}
