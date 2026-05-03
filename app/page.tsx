"use client";

import { useState, useEffect, useRef, type FormEvent } from "react";
import Image from "next/image";
import {
  PurpleAlertNav,
  Eyebrow,
  GlowCard,
  TestimonialCard9x16,
  COLOR,
} from "./_design";

/* ─────────── CONFIG ─────────── */
const EVENT_DATE_LABEL = "15 май 2026";
const EVENT_TIME_LABEL = "18:00 ч.";
const EVENT_ISO = "2026-05-15T18:00:00+03:00";

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


function ProblemSection() {
  const items: { headline: string; body: string; icon: React.ReactNode }[] = [
    {
      headline: "Гледаш как другите печелят",
      body: "€5K, €10K на месец онлайн. Не разбираш какво всъщност правят.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <path d="M3 17l6-6 4 4 8-8" />
          <path d="M14 7h7v7" />
        </svg>
      ),
    },
    {
      headline: "Повече термини, не повече пари",
      body: "Започвал си курсове, гледал си видеа. В края знаеш по-малко, не повече.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <path d="M4 19.5A2.5 2.5 0 016.5 17H20" />
          <path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" />
          <line x1="9" y1="7" x2="15" y2="7" />
        </svg>
      ),
    },
    {
      headline: "Няма капитал за пореден риск",
      body: "Не можеш да хвърлиш още пари в „проект, който трябваше да сработи“.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <rect x="2" y="6" width="20" height="13" rx="2" />
          <path d="M2 11h20" />
          <line x1="6" y1="15" x2="10" y2="15" />
        </svg>
      ),
    },
    {
      headline: "AI ти изглежда сложно",
      body: "Не си технически. Мислиш, че всичко това е за програмисти.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <rect x="4" y="4" width="16" height="16" rx="3" />
          <path d="M9 9h6v6H9z" />
          <path d="M9 2v2M15 2v2M9 20v2M15 20v2M2 9h2M2 15h2M20 9h2M20 15h2" />
        </svg>
      ),
    },
    {
      headline: "Не искаш фалшива агенция",
      body: "Която обещава, не доставя, пали клиентите си за 2 месеца.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
          <line x1="12" y1="9" x2="12" y2="13" />
          <line x1="12" y1="17" x2="12.01" y2="17" />
        </svg>
      ),
    },
    {
      headline: "Времето ти изтича",
      body: "Приятелите ти вече „имат нещо“. Ти още опитваш.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <path d="M6 2h12M6 22h12M7 2v5a5 5 0 0010 0V2M7 22v-5a5 5 0 0110 0v5" />
        </svg>
      ),
    },
  ];
  return (
    <section style={{ padding: "clamp(48px, 8vw, 96px) clamp(16px, 4vw, 32px)" }}>
      <div style={{ textAlign: "center", marginBottom: 56 }}>
        <Eyebrow>Познато ли ти е?</Eyebrow>
        <h2 className="font-alfabet-black" style={{ fontSize: "clamp(28px, 5vw, 48px)", color: COLOR.fg, marginTop: 16, lineHeight: 1.1, letterSpacing: "-0.01em" }}>
          Опитваш всичко, но<br />нищо не задържа
        </h2>
      </div>
      <div className="problem-grid" style={{ maxWidth: 1100, margin: "0 auto" }}>
        {items.map((it, i) => (
          <GlowCard key={i} interactive style={{ padding: "26px 24px", display: "flex", flexDirection: "column", gap: 14 }}>
            <span aria-hidden style={{ width: 48, height: 48, borderRadius: 12, background: `linear-gradient(135deg, rgba(123,47,190,0.32), rgba(85,43,105,0.45))`, border: `1px solid ${COLOR.purple800}`, color: COLOR.purple100, display: "inline-flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <span style={{ width: 24, height: 24, display: "block" }}>{it.icon}</span>
            </span>
            <h3 className="font-alfabet-black" style={{ fontSize: "clamp(16px, 2.2vw, 19px)", color: COLOR.fg, lineHeight: 1.25, letterSpacing: "-0.01em", margin: 0 }}>
              {it.headline}
            </h3>
            <p style={{ margin: 0, color: COLOR.fgMuted, fontFamily: "Manrope, sans-serif", fontSize: 14, lineHeight: 1.55 }}>
              {it.body}
            </p>
          </GlowCard>
        ))}
      </div>
    </section>
  );
}

function BenefitsSection() {
  const items = [
    {
      n: "01",
      title: "Ще разбереш AI ad системата",
      body: "Не теория. Реалната схема, по която обикновени хора правят €5K–€20K на месец, обслужвайки малки бизнеси с AI реклами. Стъпка по стъпка, без вода.",
    },
    {
      n: "02",
      title: "Ще видиш как намираш първи клиент",
      body: "За 7 дни. Без cold email спам. Без LinkedIn автоматизация. Без позната в семейството. Точният поток, който работи в България.",
    },
    {
      n: "03",
      title: "Ще научиш как да задържиш клиента",
      body: "За да плаща €1500–€5000 на месец без да се пазари. Какво обещаваш, какво доставяш и какво НЕ обещаваш.",
    },
  ];
  return (
    <section style={{ padding: "clamp(48px, 8vw, 96px) clamp(16px, 4vw, 32px)" }}>
      <div style={{ textAlign: "center", marginBottom: 56 }}>
        <Eyebrow>Вътре в безплатното обучение</Eyebrow>
        <h2 className="font-alfabet-black" style={{ fontSize: "clamp(22px, 3.6vw, 38px)", color: COLOR.fg, marginTop: 18, lineHeight: 1.18, letterSpacing: "0", textTransform: "uppercase", maxWidth: 980, marginLeft: "auto", marginRight: "auto" }}>
          Системата, която превръща AI в реален доход,<br />
          а не в още едно отворено ChatGPT tab-че.
        </h2>
      </div>
      <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 18 }}>
        {items.map((it) => (
          <GlowCard key={it.n} interactive style={{ padding: "28px 24px", display: "flex", flexDirection: "column", gap: 12, position: "relative", overflow: "hidden", minHeight: 240 }}>
            <span
              aria-hidden
              style={{
                position: "absolute",
                top: -16,
                right: 4,
                fontFamily: "Manrope, sans-serif",
                fontWeight: 900,
                fontSize: "clamp(96px, 14vw, 160px)",
                lineHeight: 1,
                letterSpacing: "-0.05em",
                color: COLOR.purple100,
                opacity: 0.13,
                pointerEvents: "none",
                userSelect: "none",
              }}
            >
              {it.n}
            </span>
            <span style={{ fontFamily: "Inter, Manrope, sans-serif", fontWeight: 400, fontStyle: "italic", fontSize: 11, letterSpacing: "0.18em", color: COLOR.purple100, textTransform: "uppercase", position: "relative", zIndex: 1 }}>
              Стъпка {it.n}
            </span>
            <h3 className="font-alfabet-black" style={{ fontSize: "clamp(18px, 2.4vw, 22px)", color: COLOR.fg, lineHeight: 1.2, letterSpacing: "-0.01em", margin: 0, marginTop: 4, position: "relative", zIndex: 1 }}>
              {it.title}
            </h3>
            <p style={{ margin: 0, color: COLOR.fgMuted, fontFamily: "Manrope, sans-serif", fontSize: 14.5, lineHeight: 1.55, position: "relative", zIndex: 1 }}>{it.body}</p>
          </GlowCard>
        ))}
      </div>
      <div style={{ marginTop: 36, display: "flex", justifyContent: "center" }}>
        <span style={{ display: "inline-flex", alignItems: "center", gap: 10, padding: "10px 20px", borderRadius: 999, border: `1px solid ${COLOR.purple800}`, background: "rgba(85,43,105,0.18)", color: COLOR.fg, fontFamily: "Manrope, sans-serif", fontSize: 14, fontWeight: 600 }}>
          <span style={{ width: 8, height: 8, borderRadius: "50%", background: COLOR.purple100, boxShadow: `0 0 10px ${COLOR.purple100}` }} aria-hidden />
          Бонус: Ще пусна реална кампания от 0 пред теб на живо
        </span>
      </div>
    </section>
  );
}

function CredentialsStrip() {
  // NOTE: example numbers — replace with real metrics
  const items = [
    { big: "€1.2M+", label: "Генерирани в реклами за клиенти" },
    { big: "240+", label: "Менторанти преминали през системата" },
    { big: "80+", label: "Активни кампании в момента" },
    { big: "5+", label: "Години в paid ads" },
  ];
  return (
    <section style={{ padding: "clamp(40px, 6vw, 80px) clamp(16px, 4vw, 32px)" }}>
      <div style={{ textAlign: "center", marginBottom: 40 }}>
        <Eyebrow>Цифрите зад системата</Eyebrow>
      </div>
      <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 16 }}>
        {items.map((it) => (
          <div key={it.label} style={{ padding: "26px 18px", borderRadius: 14, border: "1px solid rgba(255,255,255,0.08)", background: "rgba(255,255,255,0.02)", textAlign: "center", display: "flex", flexDirection: "column", gap: 8 }}>
            <span className="font-alfabet-black" style={{ fontSize: "clamp(34px, 5vw, 48px)", color: COLOR.fg, letterSpacing: "-0.02em", lineHeight: 1 }}>
              {it.big}
            </span>
            <span style={{ fontSize: 12, fontFamily: "Manrope, sans-serif", color: COLOR.fgMuted, lineHeight: 1.5, letterSpacing: "0.02em" }}>
              {it.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

function SuitabilitySection() {
  const yes = [
    "Искаш реален онлайн доход, не пасивна приказка",
    "Готов си да научиш система, не да гониш hack-ове",
    "Имаш 7 дни търпение преди първия клиент",
    "Не се срамуваш да напишеш на бизнес собственик",
    "Гледаш на 90 минути обучение като инвестиция",
  ];
  const no = [
    "Търсиш бутон „натисни → парите потичат“",
    "Решил си предварително, че „AI е булшит“",
    "Очакваш €10,000 на първия ден",
    "Не можеш да отделиш 90 минути за обучението",
    "Дойде да те „впечатли“, после да си гледаш Reels-ите",
  ];
  const Check = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={COLOR.purple100} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden style={{ flexShrink: 0, marginTop: 2 }}>
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
  const Cross = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgba(255,138,138,0.85)" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden style={{ flexShrink: 0, marginTop: 2 }}>
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
  return (
    <section style={{ padding: "clamp(48px, 8vw, 96px) clamp(16px, 4vw, 32px)" }}>
      <div style={{ textAlign: "center", marginBottom: 48 }}>
        <Eyebrow>Провери дали е за теб</Eyebrow>
        <h2 className="font-alfabet-black" style={{ fontSize: "clamp(28px, 5vw, 48px)", color: COLOR.fg, marginTop: 16, lineHeight: 1.1, letterSpacing: "-0.01em" }}>
          За кого е и за кого НЕ е
        </h2>
      </div>
      <div style={{ maxWidth: 1000, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20 }}>
        <GlowCard style={{ padding: "28px 26px" }}>
          <h3 className="font-alfabet-black" style={{ fontSize: 20, color: COLOR.fg, margin: 0, marginBottom: 16, letterSpacing: "-0.01em" }}>
            За теб е, ако
          </h3>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 12 }}>
            {yes.map((t, i) => (
              <li key={i} style={{ display: "flex", gap: 12, alignItems: "flex-start", color: COLOR.fg, fontFamily: "Manrope, sans-serif", fontSize: 14.5, lineHeight: 1.5 }}>
                <Check />
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </GlowCard>
        <GlowCard style={{ padding: "28px 26px" }}>
          <h3 className="font-alfabet-black" style={{ fontSize: 20, color: COLOR.fg, margin: 0, marginBottom: 16, letterSpacing: "-0.01em" }}>
            НЕ е за теб, ако
          </h3>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 12 }}>
            {no.map((t, i) => (
              <li key={i} style={{ display: "flex", gap: 12, alignItems: "flex-start", color: COLOR.fgMuted, fontFamily: "Manrope, sans-serif", fontSize: 14.5, lineHeight: 1.5 }}>
                <Cross />
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </GlowCard>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  // NOTE: example placeholder cards — replace with real client video testimonials
  const items = [
    { duration: "1:24", caption: "Първи клиент за 9 дни — €1,800/мес" },
    { duration: "2:08", caption: "От 0 до €4,500/мес за 6 седмици" },
    { duration: "1:42", caption: "Напуснах работа след 3-я клиент" },
    { duration: "1:55", caption: "€7,200 в първия месец след старта" },
  ];
  return (
    <section style={{ padding: "clamp(48px, 8vw, 96px) clamp(16px, 4vw, 32px)" }}>
      <div style={{ textAlign: "center", marginBottom: 48 }}>
        <Eyebrow>Реални резултати</Eyebrow>
        <h2 className="font-alfabet-black" style={{ fontSize: "clamp(28px, 5vw, 48px)", color: COLOR.fg, marginTop: 16, lineHeight: 1.1, letterSpacing: "-0.01em" }}>
          Какво постигат хора,<br />които вече работят по системата
        </h2>
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 18, maxWidth: 1100, margin: "0 auto" }}>
        {items.map((it, i) => (
          <TestimonialCard9x16 key={i} duration={it.duration} caption={it.caption} />
        ))}
      </div>
    </section>
  );
}

function FAQSection() {
  const items = [
    {
      q: "Колко струва обучението?",
      a: "0 лв. Безплатно е, защото вярвам, че част от хората, които видят какво показвам, ще искат да продължат с мен. Останалите ще си тръгнат със свободен план за €5K на месец. Никой не те задължава.",
    },
    {
      q: "Има ли запис, ако пропусна?",
      a: "Да, има limited replay за регистрираните до 48 часа след събитието. После се сваля. Опитът на живо е несравним — препоръчвам да дойдеш на 15 май.",
    },
    {
      q: "Трябват ли ми технически умения?",
      a: "Не. Ако можеш да напишеш съобщение в Messenger, имаш достатъчно. AI прави тежката част.",
    },
    {
      q: "Колко време трае?",
      a: "90 минути. Без вода, без 30 минути въведения. Идваш с тефтер.",
    },
    {
      q: "Това продажба ли е накрая?",
      a: "Накрая ще представя как можеш да продължиш да работиш с мен. Но дори да вземеш само безплатната част, ще си тръгнеш с конкретен план. Никой не те задължава.",
    },
    {
      q: "Кога получавам линка за Google Meet?",
      a: "Мигновен достъп — линкът пристига на имейла ти веднага след регистрация. Напомняне 1 час преди старта. Ако не го виждаш, провери „Промоции“ или „Спам“.",
    },
  ];
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section style={{ padding: "clamp(48px, 8vw, 96px) clamp(16px, 4vw, 32px)" }}>
      <div style={{ textAlign: "center", marginBottom: 48 }}>
        <Eyebrow>ЧЗВ</Eyebrow>
        <h2 className="font-alfabet-black" style={{ fontSize: "clamp(28px, 5vw, 48px)", color: COLOR.fg, marginTop: 16, lineHeight: 1.1, letterSpacing: "-0.01em" }}>
          Често задавани въпроси
        </h2>
      </div>
      <div style={{ maxWidth: 760, margin: "0 auto", display: "flex", flexDirection: "column", gap: 12 }}>
        {items.map((it, i) => {
          const isOpen = open === i;
          return (
            <div key={i} style={{ borderRadius: 14, border: "1px solid rgba(255,255,255,0.1)", background: "rgba(255,255,255,0.02)", overflow: "hidden" }}>
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : i)}
                aria-expanded={isOpen}
                style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16, padding: "18px 22px", background: "transparent", border: 0, color: COLOR.fg, fontFamily: "Manrope, sans-serif", fontSize: "clamp(15px, 2.2vw, 17px)", fontWeight: 600, textAlign: "left", cursor: "pointer", lineHeight: 1.4 }}
              >
                <span>{it.q}</span>
                <span aria-hidden style={{ flexShrink: 0, width: 28, height: 28, borderRadius: "50%", background: COLOR.pink100, color: COLOR.purple800, display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: 18, fontWeight: 700, transition: "transform 200ms ease", transform: isOpen ? "rotate(45deg)" : "rotate(0deg)" }}>
                  +
                </span>
              </button>
              {isOpen && (
                <div style={{ padding: "0 22px 22px", color: COLOR.fgMuted, fontFamily: "Manrope, sans-serif", fontSize: 14.5, lineHeight: 1.6 }}>
                  {it.a}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}

function CountdownSection({ onOpen }: { onOpen: () => void }) {
  const [now, setNow] = useState(() => Date.now());
  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);
  const target = new Date(EVENT_ISO).getTime();
  const diff = Math.max(0, target - now);
  const days = Math.floor(diff / 86_400_000);
  const hours = Math.floor((diff / 3_600_000) % 24);
  const mins = Math.floor((diff / 60_000) % 60);
  const secs = Math.floor((diff / 1000) % 60);
  const blocks = [
    { val: days, label: "ДНИ" },
    { val: hours, label: "ЧАСА" },
    { val: mins, label: "МИНУТИ" },
    { val: secs, label: "СЕКУНДИ" },
  ];
  return (
    <section style={{ padding: "clamp(56px, 9vw, 110px) clamp(16px, 4vw, 32px)" }}>
      <div style={{ maxWidth: 760, margin: "0 auto", textAlign: "center" }}>
        <Eyebrow>Последен шанс</Eyebrow>
        <h2 className="font-alfabet-black" style={{ fontSize: "clamp(28px, 5vw, 48px)", color: COLOR.fg, marginTop: 16, lineHeight: 1.1, letterSpacing: "-0.01em" }}>
          Местата свършват
        </h2>
        <p style={{ marginTop: 16, color: COLOR.fgMuted, fontFamily: "Manrope, sans-serif", fontSize: "clamp(14px, 2vw, 16px)", lineHeight: 1.55, maxWidth: 560, marginLeft: "auto", marginRight: "auto" }}>
          Регистрацията е безплатна, но местата са лимитирани. След {EVENT_DATE_LABEL} линкът изчезва.
        </p>
        <div style={{ marginTop: 36, display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "clamp(8px, 2vw, 16px)", maxWidth: 560, marginLeft: "auto", marginRight: "auto" }}>
          {blocks.map((b) => (
            <div key={b.label} style={{ padding: "18px 8px", borderRadius: 14, border: `1px solid ${COLOR.purple800}`, background: "rgba(85,43,105,0.18)", display: "flex", flexDirection: "column", gap: 4, alignItems: "center" }}>
              <span className="font-alfabet-black" style={{ fontSize: "clamp(28px, 6vw, 44px)", color: COLOR.fg, lineHeight: 1, fontVariantNumeric: "tabular-nums", letterSpacing: "-0.02em" }}>
                {String(b.val).padStart(2, "0")}
              </span>
              <span style={{ fontSize: 11, letterSpacing: "0.14em", color: COLOR.fgMuted, fontFamily: "Manrope, sans-serif", fontWeight: 600 }}>
                {b.label}
              </span>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 40, display: "flex", justifyContent: "center" }}>
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
        <ProblemSection />
        <BenefitsSection />
        <EventDetails onOpen={open} />
        <CredentialsStrip />
        <SpeakerTimeline onOpen={open} />
        <SuitabilitySection />
        <TestimonialsSection />
        <FAQSection />
        <CountdownSection onOpen={open} />
      </main>
      <Footer />
      <RegisterModal open={modalOpen} onClose={close} />
    </>
  );
}
