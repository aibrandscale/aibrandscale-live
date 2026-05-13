"use client";

import { useState, useEffect, useRef, type FormEvent } from "react";
import Image from "next/image";
import {
  PurpleAlertNav,
  Eyebrow,
  GlowCard,
  TestimonialCard9x16,
  COLOR,
  CARD_INNER_GLOW,
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
  fullWidth = false,
}: {
  type?: "button" | "submit";
  onClick?: () => void;
  children: React.ReactNode;
  fullWidth?: boolean;
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
        padding: "14px clamp(22px, 6vw, 80px)",
        minHeight: 52,
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
          "linear-gradient(180deg, rgba(52,211,153,0.95) 0%, rgba(16,185,129,0.95) 50%, rgba(5,122,85,1) 100%)",
        border: "1px solid rgba(167,243,208,0.55)",
        outline: "none",
        maxWidth: fullWidth ? "none" : 600,
        width: fullWidth ? "100%" : "auto",
        whiteSpace: "nowrap",
      }}
    >
      <span style={{ position: "relative" }}>{children}</span>
    </button>
  );
}

function ScrollToFormCTA({ onOpen, fullWidth = false }: { onOpen?: () => void; fullWidth?: boolean }) {
  return (
    <ReserveCTAButton
      fullWidth={fullWidth}
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
          width: "min(880px, 105vw)",
          aspectRatio: "1 / 1",
          backgroundImage: "url(/hero-venelin.png)",
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          zIndex: -1,
        }}
      />
      <div style={{ maxWidth: 760, margin: "0 auto", position: "relative", marginTop: "clamp(170px, 36vw, 320px)" }}>
        <Image
          src="/exploit-logo.png"
          alt="AI Exploit Event"
          width={195}
          height={77}
          priority
          unoptimized
          style={{ width: "clamp(120px, 14vw, 180px)", height: "auto", display: "block", margin: "0 auto 18px", imageRendering: "auto" }}
        />
        <h1
          className="font-alfabet-black"
          style={{
            fontSize: "clamp(28px, 5vw, 48px)",
            lineHeight: 1.12,
            letterSpacing: "-0.015em",
            color: COLOR.fg,
            margin: 0,
            textShadow: "0 2px 24px rgba(0,0,0,0.6)",
            textWrap: "balance",
          }}
        >
          Предизвиквам те да изградиш бизнес, който прави <span style={{ color: COLOR.purple100 }}>€166 на ден</span> за 30 дни
        </h1>
        <p
          style={{
            marginTop: 20,
            fontSize: "clamp(15.5px, 2.2vw, 19px)",
            lineHeight: 1.55,
            fontWeight: 500,
            color: "#CDD0D7",
            fontFamily: "Manrope, sans-serif",
            maxWidth: 620,
            textWrap: "balance",
            marginLeft: "auto",
            marginRight: "auto",
            textShadow: "0 1px 16px rgba(0,0,0,0.7)",
          }}
        >
          Ще ти покажа как с няколко часа на ден изграждаш AI бизнес без технически умения и без предишен опит.
        </p>
        <div className="hero-cta-stack" style={{ marginTop: 26, display: "flex", flexDirection: "column", alignItems: "center", gap: 12, maxWidth: 460, marginLeft: "auto", marginRight: "auto" }}>
          <ScrollToFormCTA onOpen={onOpen} fullWidth />
          <button
            type="button"
            onClick={() => {
              const el = document.getElementById("benefits");
              el?.scrollIntoView({ behavior: "smooth", block: "start" });
            }}
            style={{
              position: "relative",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "14px clamp(22px, 6vw, 80px)",
              minHeight: 52,
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
              background: "rgba(123,47,190,0.10)",
              border: "1.5px solid rgba(168,108,224,0.65)",
              outline: "none",
              width: "100%",
              whiteSpace: "nowrap",
              backdropFilter: "blur(8px)",
              WebkitBackdropFilter: "blur(8px)",
              transition: "background 180ms ease, border-color 180ms ease",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(123,47,190,0.20)"; e.currentTarget.style.borderColor = "rgba(196,155,217,0.85)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(123,47,190,0.10)"; e.currentTarget.style.borderColor = "rgba(168,108,224,0.65)"; }}
          >
            Какво ще научиш
          </button>
        </div>
        <div style={{ marginTop: 18, display: "flex", flexWrap: "nowrap", justifyContent: "center", gap: "8px 14px", fontSize: "clamp(11.5px, 1.6vw, 15px)", fontFamily: "Manrope, sans-serif", color: COLOR.fg, fontWeight: 500, textShadow: "0 1px 10px rgba(0,0,0,0.7)", whiteSpace: "nowrap" }}>
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
        <div style={{ marginTop: 14, display: "flex", alignItems: "center", justifyContent: "center", gap: 12, flexWrap: "nowrap" }}>
          <div aria-hidden style={{ display: "inline-flex", flexShrink: 0 }}>
            {["/avatar-1.jpg", "/avatar-2.jpg", "/avatar-3.png"].map((src, idx) => (
              <span
                key={idx}
                style={{
                  display: "inline-block",
                  width: 28,
                  height: 28,
                  borderRadius: "50%",
                  overflow: "hidden",
                  border: "1px solid rgba(196,155,217,0.55)",
                  marginLeft: idx === 0 ? 0 : -10,
                  boxShadow: "0 1px 4px rgba(0,0,0,0.35)",
                  position: "relative",
                  background: "#1a0f24",
                }}
              >
                <Image
                  src={src}
                  alt=""
                  width={28}
                  height={28}
                  style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                  unoptimized
                />
              </span>
            ))}
          </div>
          <p style={{ margin: 0, fontFamily: "Manrope, sans-serif", fontSize: "clamp(13px, 3vw, 16px)", color: COLOR.fg, lineHeight: 1.4, textShadow: "0 1px 10px rgba(0,0,0,0.7)", maxWidth: 240, textAlign: "left", flexShrink: 1, minWidth: 0 }}>
            Вече над <strong style={{ fontWeight: 800 }}>80 души</strong> са записани · остават ограничен брой места
          </p>
        </div>
      </div>
    </section>
  );
}

function BrandsStrip() {
  const logos: { src: string; h: number }[] = [
    { src: "/brands/logo1.webp", h: 72 },
    { src: "/brands/logo2.webp", h: 110 },
    { src: "/brands/logo3.webp", h: 72 },
    { src: "/brands/logo4.webp", h: 110 },
    { src: "/brands/logo5.webp", h: 72 },
  ];
  // Triple the logos so even with a wide viewport we always have content to scroll into view
  const items = [...logos, ...logos, ...logos];
  const trackRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const node = trackRef.current;
    if (!node) return;

    let raf = 0;
    let cycleWidth = 0;
    const speed = 60; // px / second
    let last = performance.now();
    let x = 0;

    const measure = () => {
      // We render 3 copies; one cycle = 1/3 of total scrollWidth
      const w = node.scrollWidth;
      if (w > 0) cycleWidth = w / 3;
    };

    measure();

    const ro = typeof ResizeObserver !== "undefined" ? new ResizeObserver(measure) : null;
    if (ro) ro.observe(node);

    // Belt-and-braces: re-measure periodically until we get a stable non-zero value
    const interval = window.setInterval(() => {
      if (cycleWidth === 0) measure();
      else window.clearInterval(interval);
    }, 200);

    const tick = (now: number) => {
      const dt = Math.min(0.05, Math.max(0, (now - last) / 1000));
      last = now;
      if (cycleWidth > 0) {
        x -= speed * dt;
        if (x <= -cycleWidth) x += cycleWidth;
        const tx = `translate3d(${x}px, 0, 0)`;
        node.style.transform = tx;
        node.style.webkitTransform = tx;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      if (ro) ro.disconnect();
      window.clearInterval(interval);
    };
  }, []);
  return (
    <section style={{ padding: "clamp(56px, 8vw, 96px) clamp(16px, 4vw, 32px)", textAlign: "center" }}>
      <div style={{ marginBottom: 28 }}>
        <Eyebrow>Бизнеси и инфлуенсъри,<br />които ми се довериха</Eyebrow>
      </div>
      <div className="logo-ticker">
        <div ref={trackRef} className="logo-ticker__track">
          {items.map((logo, i) => (
            <span key={i} className="logo-ticker__item" style={{ height: logo.h }} aria-hidden={i >= logos.length}>
              {/* Plain <img> on purpose: bypasses next/image wrapper quirks on iOS */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={logo.src}
                alt={i < logos.length ? `Клиент ${i + 1}` : ""}
                height={logo.h}
                style={{ height: logo.h, width: "auto", display: "block" }}
                loading="lazy"
                decoding="async"
              />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function EventDetails({ onOpen }: { onOpen: () => void }) {
  const items: { label: string; live: boolean; headline: string; sub: string; body: string; icon: React.ReactNode }[] = [
    {
      label: "Какво",
      live: false,
      headline: "AI Challenge",
      sub: "100% безплатен",
      body: "На живо ще покажа как изграждаш печеливш AI бизнес от нулата, стъпка по стъпка.",
      icon: (
        <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          {/* AI sparkle — main + accents */}
          <path d="M32 8 L36.5 24.5 L53 29 L36.5 33.5 L32 50 L27.5 33.5 L11 29 L27.5 24.5 Z" />
          <path d="M50 10 L52 16 L58 18 L52 20 L50 26 L48 20 L42 18 L48 16 Z" strokeWidth="1.8" />
          <path d="M14 42 L15.5 47 L20.5 48.5 L15.5 50 L14 55 L12.5 50 L7.5 48.5 L12.5 47 Z" strokeWidth="1.6" />
        </svg>
      ),
    },
    {
      label: "На живо",
      live: true,
      headline: EVENT_DATE_LABEL,
      sub: `${EVENT_TIME_LABEL}`,
      body: "Има ограничен брой места за регистрация, но опитът на живо е несравним.",
      icon: (
        <img src="/icons/calendar.png" alt="" style={{ width: "85%", height: "85%", objectFit: "contain", display: "block", opacity: 0.08, filter: "brightness(0) saturate(100%) invert(74%) sepia(20%) saturate(700%) hue-rotate(240deg)" }} />
      ),
    },
    {
      label: "Къде",
      live: false,
      headline: "Zoom",
      sub: "Онлайн",
      body: "Линкът за достъп се изпраща на имейла ти веднага след като запазиш мястото си.",
      icon: (
        <img src="/icons/camera.png" alt="" style={{ width: "100%", height: "100%", objectFit: "contain", objectPosition: "center", display: "block", opacity: 0.08, filter: "brightness(0) saturate(100%) invert(74%) sepia(20%) saturate(700%) hue-rotate(240deg)", transform: "translateX(-6%)" }} />
      ),
    },
  ];
  return (
    <section style={{ padding: "clamp(56px, 8vw, 96px) clamp(16px, 4vw, 32px)" }}>
      <div style={{ textAlign: "center", marginBottom: 40 }}>
        <Eyebrow>Всички важни детайли</Eyebrow>
        <h2 className="font-alfabet-black" style={{ fontSize: "clamp(28px, 5vw, 48px)", color: COLOR.fg, marginTop: 16, lineHeight: 1.1, letterSpacing: "-0.01em" }}>
          Какво те очаква на живо
        </h2>
      </div>
      <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "clamp(12px, 2vw, 22px)" }}>
        {items.map((it) => (
          <div key={it.label} style={{ position: "relative", borderRadius: 16, overflow: "hidden", padding: 32, background: "rgba(255,255,255,0.002)", border: "1px solid rgba(255,255,255,0.30)", boxShadow: CARD_INNER_GLOW, textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center" }}>
            <div
              aria-hidden
              className="event-icon-bg"
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: "min(130px, 40%)",
                aspectRatio: "1 / 1",
                color: "rgba(196,155,217,0.08)",
                pointerEvents: "none",
                zIndex: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {it.icon}
            </div>
            <div style={{ position: "relative", display: "flex", flexDirection: "column", alignItems: "center", gap: 12 }}>
              <div style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 8, fontFamily: "Manrope, sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: COLOR.purple100 }}>
                <span style={{ width: 18, height: 1, background: COLOR.purple100 }} aria-hidden />
                {it.live && <span className="alert-live-dot" style={{ width: 7, height: 7, borderRadius: "50%", background: "#EF4444" }} aria-hidden />}
                {it.label}
                <span style={{ width: 18, height: 1, background: COLOR.purple100 }} aria-hidden />
              </div>
              <h3 className="font-alfabet-bold" style={{ fontSize: "clamp(24px, 2.6vw, 32px)", lineHeight: 1.15, color: COLOR.fg, margin: 0, letterSpacing: "-0.01em" }}>
                {it.headline}
              </h3>
              {it.sub && (
                <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: COLOR.purple100, fontFamily: "Manrope, sans-serif" }}>
                  {it.sub}
                </span>
              )}
              <p style={{ margin: 0, color: COLOR.fgMuted, fontFamily: "Manrope, sans-serif", fontSize: 15, lineHeight: 1.65 }}>
                {it.body}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div style={{ marginTop: 36, maxWidth: 1100, marginLeft: "auto", marginRight: "auto" }}>
        <ScrollToFormCTA onOpen={onOpen} fullWidth />
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
      body: "Тръгнах от 0, без капитал, без опит, без аудитория. Само с убеждение, че онлайн има начин.",
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
        { src: "/speaker/today-1.webp", rot: -5, top: 20, left: 20, w: 240 },
        { src: "/speaker/today-2.webp", rot: 4, top: 0, left: 200, w: 260 },
        { src: "/speaker/today-3.webp", rot: -3, top: 220, left: 110, w: 250 },
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
    <section className="speaker-timeline" style={{ padding: "clamp(56px, 8vw, 96px) clamp(16px, 4vw, 32px)" }}>
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
        <p className="speaker-banner__sub">Ще получиш потвърждение на имейла.</p>
        <div className="speaker-banner__cta">
          <ScrollToFormCTA onOpen={onOpen} fullWidth />
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
      headline: "Повече теория отколкото практика",
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
      headline: "Писна ти от гурута",
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
    <section style={{ padding: "clamp(56px, 8vw, 96px) clamp(16px, 4vw, 32px)" }}>
      <div style={{ textAlign: "center", marginBottom: 56 }}>
        <Eyebrow>Познато ли ти е?</Eyebrow>
        <h2 className="font-alfabet-black" style={{ fontSize: "clamp(28px, 5vw, 48px)", color: COLOR.fg, marginTop: 16, lineHeight: 1.1, letterSpacing: "-0.01em" }}>
          Опитваш всичко, но<br />нищо не се получава
        </h2>
      </div>
      <div className="problem-grid" style={{ maxWidth: 1100, margin: "0 auto" }}>
        {items.map((it, i) => (
          <GlowCard key={i} interactive className="problem-card">
            <span aria-hidden className="problem-icon" style={{ borderRadius: 12, background: `linear-gradient(135deg, rgba(168,108,224,0.55), rgba(118,64,178,0.6))`, border: `1px solid rgba(196,155,217,0.45)`, boxShadow: "inset 0 1px 0 rgba(255,255,255,0.12), inset 0 -8px 16px rgba(0,0,0,0.18)", color: COLOR.purple100, display: "inline-flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <span className="problem-icon-svg" style={{ display: "block" }}>{it.icon}</span>
            </span>
            <div className="problem-text">
              <h3 className="font-alfabet-black problem-headline" style={{ color: COLOR.fg, lineHeight: 1.25, letterSpacing: "-0.01em", margin: 0 }}>
                {it.headline}
              </h3>
              <p className="problem-body" style={{ margin: 0, color: COLOR.fgMuted, fontFamily: "Manrope, sans-serif", lineHeight: 1.55 }}>
                {it.body}
              </p>
            </div>
          </GlowCard>
        ))}
      </div>
    </section>
  );
}

function BenefitsSection() {
  const items = [
    {
      n: "1",
      title: "Ще разбереш AI AD системата",
      body: "Не теория. Реалната схема, по която обикновени хора правят €5K–€20K на месец, обслужвайки малки бизнеси с AI реклами. Стъпка по стъпка.",
    },
    {
      n: "2",
      title: "Ще видиш как намираш първи клиент",
      body: "За 7 дни. Без cold email спам. Без LinkedIn автоматизация. Без познати в семейството. Точният поток, който работи в България.",
    },
    {
      n: "3",
      title: "Ще се научиш как да правиш реклами с AI",
      body: "Практическо умение как можеш да правиш стотици реклами, от които бизнесите имат нужда на автопилот с AI.",
    },
  ];
  return (
    <section id="benefits" style={{ padding: "clamp(56px, 8vw, 96px) clamp(16px, 4vw, 32px)", scrollMarginTop: 32 }}>
      <div style={{ textAlign: "center", maxWidth: 1100, margin: "0 auto", marginBottom: 56 }}>
        <Eyebrow>Вътре в безплатното обучение</Eyebrow>
        <h2 style={{ fontFamily: "Manrope, sans-serif", fontWeight: 700, fontSize: "clamp(25px, 3.4vw, 42px)", color: COLOR.fg, marginTop: 18, lineHeight: 1.2, letterSpacing: "-0.02em", maxWidth: 1100, marginLeft: "auto", marginRight: "auto", textWrap: "balance" }}>
          Системата, която превръща AI в реален доход, а не просто още едно безполезно умение.
        </h2>
      </div>
      <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "clamp(12px, 2vw, 22px)" }}>
        {items.map((it) => (
          <div key={it.n} style={{ position: "relative", borderRadius: 16, overflow: "hidden", padding: 32, background: "rgba(255,255,255,0.002)", border: "1px solid rgba(255,255,255,0.30)", boxShadow: CARD_INNER_GLOW, textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center" }}>
            <div
              aria-hidden
              style={{
                position: "absolute",
                top: -8,
                right: 18,
                fontFamily: "Manrope, sans-serif",
                fontWeight: 800,
                fontSize: "clamp(80px, 8vw, 120px)",
                lineHeight: 1,
                letterSpacing: "-0.04em",
                background: "linear-gradient(180deg, rgba(196,155,217,0.22) 0%, rgba(196,155,217,0) 75%)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                WebkitTextFillColor: "transparent",
                userSelect: "none",
                pointerEvents: "none",
              }}
            >
              0{it.n}
            </div>
            <div style={{ position: "relative", display: "flex", flexDirection: "column", alignItems: "center", gap: 12 }}>
              <div style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 8, fontFamily: "Manrope, sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: COLOR.purple100 }}>
                <span style={{ width: 18, height: 1, background: COLOR.purple100 }} aria-hidden />
                Стъпка 0{it.n}
                <span style={{ width: 18, height: 1, background: COLOR.purple100 }} aria-hidden />
              </div>
              <h3 className="font-alfabet-bold" style={{ fontSize: "clamp(19px, 1.7vw, 23px)", lineHeight: 1.2, color: COLOR.fg, margin: 0 }}>
                {it.title}
              </h3>
              <p style={{ margin: 0, color: COLOR.fgMuted, fontFamily: "Manrope, sans-serif", fontSize: 15, lineHeight: 1.65 }}>
                {it.body}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div style={{ marginTop: 24, maxWidth: 1100, marginLeft: "auto", marginRight: "auto" }}>
        <span style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 12, padding: "18px 22px", borderRadius: 28, border: `1px solid ${COLOR.purple800}`, background: "rgba(85,43,105,0.18)", color: COLOR.fg, fontFamily: "Manrope, sans-serif", fontSize: "clamp(14.5px, 2.6vw, 18px)", fontWeight: 600, width: "100%", textAlign: "center", lineHeight: 1.4 }}>
          <span style={{ width: 8, height: 8, borderRadius: "50%", background: COLOR.purple100, boxShadow: `0 0 10px ${COLOR.purple100}`, flexShrink: 0 }} aria-hidden />
          Бонус: ресурси, които ще можеш да вземеш на обучението
        </span>
      </div>
    </section>
  );
}

function CountUp({ target, prefix = "", suffix = "", decimals = 0, durationMs = 1600 }: { target: number; prefix?: string; suffix?: string; decimals?: number; durationMs?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [val, setVal] = useState(0);
  const startedRef = useRef(false);
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) { setVal(target); return; }
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting && !startedRef.current) {
          startedRef.current = true;
          const start = performance.now();
          const tick = (now: number) => {
            const p = Math.min(1, (now - start) / durationMs);
            const eased = 1 - Math.pow(1 - p, 3);
            setVal(target * eased);
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
          io.disconnect();
        }
      });
    }, { threshold: 0.3 });
    io.observe(node);
    return () => io.disconnect();
  }, [target, durationMs]);
  const formatted = decimals > 0 ? val.toFixed(decimals) : Math.round(val).toLocaleString("bg-BG");
  return <span ref={ref}>{prefix}{formatted}{suffix}</span>;
}

function CredentialsStrip() {
  // NOTE: example numbers — replace with real metrics
  const items: { target: number; prefix?: string; suffix?: string; decimals?: number; label: string; icon: React.ReactNode }[] = [
    {
      target: 1.2, prefix: "€", suffix: "M+", decimals: 1, label: "Генерирани в реклами за клиенти",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <path d="M3 17l6-6 4 4 8-8" /><path d="M14 7h7v7" />
        </svg>
      ),
    },
    {
      target: 240, suffix: "+", label: "Студенти преминали през системата",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <path d="M17 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2" /><circle cx="10" cy="7" r="4" /><path d="M21 21v-2a4 4 0 0 0-3-3.87" /><path d="M17 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
    },
    {
      target: 80, suffix: "+", label: "Активни кампании в момента",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <path d="M3 11l18-8-8 18-2-8-8-2z" />
        </svg>
      ),
    },
    {
      target: 5, suffix: "+", label: "Години в paid ads",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <circle cx="12" cy="12" r="9" /><polyline points="12 7 12 12 15 14" />
        </svg>
      ),
    },
  ];
  return (
    <section
      style={{
        position: "relative",
        padding: "clamp(56px, 8vw, 96px) clamp(16px, 4vw, 32px)",
        background: "rgba(255,255,255,0.002)",
        borderTop: "1px solid rgba(196,155,217,0.45)",
        borderBottom: "1px solid rgba(196,155,217,0.45)",
        boxShadow: CARD_INNER_GLOW,
        overflow: "hidden",
      }}
    >
      <div style={{ textAlign: "center", marginBottom: 36, position: "relative" }}>
        <Eyebrow>Цифрите зад системата</Eyebrow>
      </div>
      <div className="credentials-grid" style={{ maxWidth: 1100, margin: "0 auto", position: "relative" }}>
        {items.map((it, idx) => (
          <div key={it.label} className="credentials-item" style={{ padding: "12px 24px", textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", gap: 14 }}>
            <span aria-hidden style={{ color: COLOR.purple100, opacity: 0.7, display: "inline-flex" }}>
              <span style={{ width: 22, height: 22, display: "block" }}>{it.icon}</span>
            </span>
            <span className="font-alfabet-black" style={{ fontSize: "clamp(40px, 9vw, 84px)", color: COLOR.fg, letterSpacing: "-0.04em", lineHeight: 0.95, background: "linear-gradient(180deg, #FFFFFF 0%, #C49BD9 100%)", WebkitBackgroundClip: "text", backgroundClip: "text", WebkitTextFillColor: "transparent", whiteSpace: "nowrap" }}>
              <CountUp target={it.target} prefix={it.prefix} suffix={it.suffix} decimals={it.decimals} />
            </span>
            <span style={{ fontSize: 15.5, fontFamily: "Manrope, sans-serif", color: COLOR.fgMuted, lineHeight: 1.45, letterSpacing: "0.01em", maxWidth: 200 }}>
              {it.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

function SuitabilitySection() {
  const oldItems = [
    "€3K–€5K само за да започнеш да тестваш, без гаранция за резултат",
    "6–12 месеца преди да видиш първото евро, ако изобщо стигнеш дотам",
    "Пренаситени пазари. Всеки „печеливш продукт“ вече има 500 копия",
    "Влизаш в директна битка с хора, започнали преди 10 години",
    "Една промяна в алгоритъма и всичко се срива за една нощ",
  ];
  const newItems = [
    "Първият клиент е възможен още в първите 30 дни",
    "Това е умение, а не продукт. Търсенето е огромно и постоянно",
    "AI скъсява пътя, който преди отнемаше 10 години, до няколко седмици фокусирана работа",
    "Свързано е директно с приходи. Бизнесите плащат, защото им носи реална възвращаемост",
    "Каквото и да става в платформите, бизнесите винаги ще трябват реклами",
  ];

  const RED = "#C44A4A";
  const RED_BORDER = "rgba(196,74,74,0.32)";
  const RED_GLOW =
    "inset 32.972px 5.495px 167.131px -4.375px rgba(120,40,40,0.45), inset 19.148px 3.191px 97.060px -3.750px rgba(120,40,40,0.55), inset 11.698px 1.950px 59.295px -3.125px rgba(120,40,40,0.6), inset 7.244px 1.207px 36.717px -2.500px rgba(120,40,40,0.65), inset 4.357px 0.726px 22.086px -1.875px rgba(120,40,40,0.7), inset 2.389px 0.398px 12.108px -1.250px rgba(120,40,40,0.78), inset 1.008px 0.168px 5.108px -0.625px rgba(120,40,40,0.85)";

  const cardBase = {
    borderRadius: 14,
    padding: "30px 28px",
    display: "flex",
    flexDirection: "column" as const,
    gap: 18,
  };

  const oldCardStyle = {
    ...cardBase,
    border: `1px solid ${RED_BORDER}`,
    boxShadow: RED_GLOW,
    background: "rgba(255,255,255,0.002)",
  };

  const Cross = () => (
    <span aria-hidden style={{ flexShrink: 0, width: 22, height: 22, borderRadius: "50%", border: `1px solid ${RED_BORDER}`, background: "rgba(196,74,74,0.12)", color: RED, display: "inline-flex", alignItems: "center", justifyContent: "center", marginTop: 1 }}>
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="6" x2="6" y2="18" />
        <line x1="6" y1="6" x2="18" y2="18" />
      </svg>
    </span>
  );
  const Check = () => (
    <span aria-hidden style={{ flexShrink: 0, width: 22, height: 22, borderRadius: "50%", border: `1px solid ${COLOR.purple800}`, background: "rgba(123,47,190,0.18)", color: COLOR.purple100, display: "inline-flex", alignItems: "center", justifyContent: "center", marginTop: 1 }}>
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="20 6 9 17 4 12" />
      </svg>
    </span>
  );

  const cardEyebrow = {
    display: "inline-flex",
    alignItems: "center",
    gap: 10,
    padding: "0 14px",
    fontFamily: "Manrope, sans-serif",
    fontWeight: 400,
    fontStyle: "italic" as const,
    fontSize: 11,
    letterSpacing: "0.18em",
    textTransform: "uppercase" as const,
    color: COLOR.fg,
    alignSelf: "center" as const,
    lineHeight: 1.4,
  };

  return (
    <section style={{ padding: "clamp(56px, 8vw, 96px) clamp(16px, 4vw, 32px)" }}>
      <div style={{ textAlign: "center", maxWidth: 920, margin: "0 auto", marginBottom: 28 }}>
        <Eyebrow>Ако си като повечето хора, които попадат на тази страница…</Eyebrow>
        <h2 className="font-alfabet-black" style={{ fontSize: "clamp(22px, 4.2vw, 42px)", color: COLOR.fg, marginTop: 18, lineHeight: 1.18, letterSpacing: "0", textTransform: "uppercase", textWrap: "balance" }}>
          Не си изостанал. Не си бил без късмет. Просто са ти продали грешната възможност.
        </h2>
        <p style={{ marginTop: 22, color: COLOR.fgMuted, fontFamily: "Manrope, sans-serif", fontSize: "clamp(14px, 2vw, 16px)", lineHeight: 1.65, maxWidth: 760, marginLeft: "auto", marginRight: "auto" }}>
          Дропшипинг. Amazon FBA. SMM агенции. Crypto. Faceless YouTube. Всяко едно от тях просто не е построено за начинаещи. AI рекламите обръщат играта. Влизаш на терен, изчистен от нула, и изпреварваш хора с години опит.
        </p>
      </div>

      <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 20 }}>
        {/* OLD MODELS — red tint */}
        <div style={oldCardStyle}>
          <span style={{ ...cardEyebrow, color: RED }}>Старите модели</span>
          <h3 className="font-alfabet-black" style={{ fontSize: "clamp(18px, 2.4vw, 22px)", color: COLOR.fg, lineHeight: 1.3, letterSpacing: "-0.01em", margin: 0, textAlign: "center" }}>
            Защо „старите“ онлайн бизнеси продължават да те разочароват
          </h3>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 12 }}>
            {oldItems.map((t, i) => (
              <li key={i} style={{ display: "flex", gap: 12, alignItems: "flex-start", color: COLOR.fgMuted, fontFamily: "Manrope, sans-serif", fontSize: 14.5, lineHeight: 1.55 }}>
                <Cross />
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* AI ADS — purple */}
        <GlowCard style={{ padding: "30px 28px", display: "flex", flexDirection: "column", gap: 18 }}>
          <span style={{ ...cardEyebrow, color: COLOR.purple100 }}>Защо AI рекламите са различни</span>
          <h3 className="font-alfabet-black" style={{ fontSize: "clamp(18px, 2.4vw, 22px)", color: COLOR.fg, lineHeight: 1.3, letterSpacing: "-0.01em", margin: 0, textAlign: "center" }}>
            Системата, която превръща AI в реален доход, не в поредното отворено tab-че
          </h3>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 12 }}>
            {newItems.map((t, i) => (
              <li key={i} style={{ display: "flex", gap: 12, alignItems: "flex-start", color: COLOR.fg, fontFamily: "Manrope, sans-serif", fontSize: 14.5, lineHeight: 1.55 }}>
                <Check />
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
  const videos = [
    { src: "https://player.vimeo.com/video/1184769287?h=e9fb6898ef&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479", title: "Testimonials Viktor" },
    { src: "https://player.vimeo.com/video/1184769055?h=1bc7cd923d&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479", title: "Testimonial 2 - Cristian" },
  ];
  const photos = [
    { rot: -5, label: "€7,200 / мес" },
    { rot: 3, label: "Напуснах работа" },
    { rot: -3, label: "€4,500 / 6 седмици" },
  ];
  return (
    <section style={{ padding: "clamp(56px, 8vw, 96px) clamp(16px, 4vw, 32px)" }}>
      <div style={{ textAlign: "center", marginBottom: 48 }}>
        <Eyebrow>Реални резултати</Eyebrow>
        <h2 className="font-alfabet-black" style={{ fontSize: "clamp(28px, 5vw, 48px)", color: COLOR.fg, marginTop: 16, lineHeight: 1.1, letterSpacing: "-0.01em" }}>
          Какво постигат хора,<br />които вече работят по системата
        </h2>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: "clamp(12px, 2vw, 20px)", maxWidth: 560, margin: "0 auto 32px" }}>
        {videos.map((v, i) => (
          <div
            key={i}
            style={{
              position: "relative",
              width: "100%",
              aspectRatio: "9 / 16",
              borderRadius: 14,
              overflow: "hidden",
              border: "1px solid rgba(196,155,217,0.35)",
              boxShadow: CARD_INNER_GLOW + ", 0 8px 24px rgba(0,0,0,0.4)",
              background: "#0f0a1a",
            }}
          >
            <iframe
              src={v.src}
              title={v.title}
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              style={{ position: "absolute", inset: 0, width: "100%", height: "100%", border: 0 }}
            />
          </div>
        ))}
      </div>
      <div className="testi-photos" style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: "clamp(8px, 2vw, 18px)", maxWidth: 900, margin: "0 auto", padding: "0 4px" }}>
        {photos.map((p, i) => (
          <div
            key={i}
            style={{
              position: "relative",
              aspectRatio: "4 / 5",
              borderRadius: 14,
              overflow: "hidden",
              border: "1px solid rgba(196,155,217,0.35)",
              boxShadow: CARD_INNER_GLOW + ", 0 8px 24px rgba(0,0,0,0.3)",
              background: "linear-gradient(160deg, rgba(123,47,190,0.18) 0%, rgba(30,18,52,0.6) 100%)",
              transform: `rotate(${p.rot}deg)`,
            }}
          >
            <div style={{ position: "absolute", left: 12, bottom: 12, right: 12, fontFamily: "Manrope, sans-serif", fontSize: 12, fontWeight: 700, color: "#fff", letterSpacing: "0.02em", textShadow: "0 1px 6px rgba(0,0,0,0.7)" }}>
              {p.label}
            </div>
          </div>
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
      q: "Кога получавам линка за Zoom?",
      a: "Мигновен достъп — линкът пристига на имейла ти веднага след регистрация. Напомняне 1 час преди старта. Ако не го виждаш, провери „Промоции“ или „Спам“.",
    },
  ];
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section style={{ padding: "clamp(56px, 8vw, 96px) clamp(16px, 4vw, 32px)" }}>
      <div style={{ textAlign: "center", marginBottom: 40 }}>
        <Eyebrow>ЧЗВ</Eyebrow>
        <h2 className="font-alfabet-black" style={{ fontSize: "clamp(28px, 5vw, 48px)", color: COLOR.fg, marginTop: 16, lineHeight: 1.1, letterSpacing: "-0.01em" }}>
          Често задавани въпроси
        </h2>
      </div>
      <div style={{ maxWidth: 760, margin: "0 auto", display: "flex", flexDirection: "column", gap: 12 }}>
        {items.map((it, i) => {
          const isOpen = open === i;
          return (
            <div key={i} style={{ position: "relative", borderRadius: 16, border: "1px solid rgba(255,255,255,0.30)", background: "rgba(255,255,255,0.002)", boxShadow: CARD_INNER_GLOW, overflow: "hidden" }}>
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : i)}
                aria-expanded={isOpen}
                style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16, padding: "20px 22px", background: "transparent", border: 0, color: COLOR.fg, fontFamily: "Manrope, sans-serif", fontSize: "clamp(15px, 2.2vw, 17px)", fontWeight: 600, textAlign: "left", cursor: "pointer", lineHeight: 1.4 }}
              >
                <span>{it.q}</span>
                <span aria-hidden style={{ flexShrink: 0, width: 30, height: 30, borderRadius: "50%", background: isOpen ? "rgba(196,155,217,0.9)" : "rgba(196,155,217,0.18)", border: "1px solid rgba(196,155,217,0.45)", color: isOpen ? COLOR.purple800 : COLOR.purple100, display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: 18, fontWeight: 700, transition: "transform 220ms ease, background 220ms ease, color 220ms ease", transform: isOpen ? "rotate(45deg)" : "rotate(0deg)" }}>
                  +
                </span>
              </button>
              <div
                style={{
                  display: "grid",
                  gridTemplateRows: isOpen ? "1fr" : "0fr",
                  transition: "grid-template-rows 320ms cubic-bezier(0.4, 0, 0.2, 1)",
                }}
              >
                <div style={{ overflow: "hidden" }}>
                  <div
                    style={{
                      padding: "0 22px 22px",
                      color: COLOR.fgMuted,
                      fontFamily: "Manrope, sans-serif",
                      fontSize: 15,
                      lineHeight: 1.65,
                      opacity: isOpen ? 1 : 0,
                      transform: isOpen ? "translateY(0)" : "translateY(-4px)",
                      transition: "opacity 240ms ease 60ms, transform 280ms cubic-bezier(0.4, 0, 0.2, 1)",
                    }}
                  >
                    {it.a}
                  </div>
                </div>
              </div>
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
    <section
      style={{
        position: "relative",
        padding: "clamp(56px, 8vw, 96px) clamp(16px, 4vw, 32px)",
        background: "rgba(255,255,255,0.002)",
        borderTop: "1px solid rgba(196,155,217,0.45)",
        borderBottom: "1px solid rgba(196,155,217,0.45)",
        boxShadow: CARD_INNER_GLOW,
        overflow: "hidden",
      }}
    >
      <div style={{ maxWidth: 760, margin: "0 auto", textAlign: "center", position: "relative" }}>
        <Eyebrow>Последен шанс</Eyebrow>
        <h2 className="font-alfabet-black" style={{ fontSize: "clamp(30px, 5.4vw, 52px)", color: COLOR.fg, marginTop: 16, lineHeight: 1.1, letterSpacing: "-0.02em" }}>
          Местата свършват
        </h2>
        <p style={{ marginTop: 16, color: COLOR.fgMuted, fontFamily: "Manrope, sans-serif", fontSize: "clamp(14px, 2vw, 16px)", lineHeight: 1.55, maxWidth: 520, marginLeft: "auto", marginRight: "auto", textWrap: "balance" }}>
          Регистрацията е безплатна, но местата са лимитирани. След {EVENT_DATE_LABEL} линкът изчезва.
        </p>
        <div style={{ marginTop: 40, display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 0, maxWidth: 380, marginLeft: "auto", marginRight: "auto" }}>
          {blocks.map((b) => (
            <div key={b.label} style={{ padding: "12px 4px", display: "flex", flexDirection: "column", gap: 6, alignItems: "center" }}>
              <span className="font-alfabet-black" style={{ fontSize: "clamp(32px, 7vw, 52px)", color: COLOR.fg, lineHeight: 1, fontVariantNumeric: "tabular-nums", letterSpacing: "-0.03em", background: "linear-gradient(180deg, #FFFFFF 0%, #C49BD9 100%)", WebkitBackgroundClip: "text", backgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                {String(b.val).padStart(2, "0")}
              </span>
              <span style={{ fontSize: 10.5, letterSpacing: "0.16em", color: "rgba(196,155,217,0.85)", fontFamily: "Manrope, sans-serif", fontWeight: 700, textTransform: "uppercase" }}>
                {b.label}
              </span>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 40, maxWidth: 380, marginLeft: "auto", marginRight: "auto" }}>
          <ScrollToFormCTA onOpen={onOpen} fullWidth />
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
    // Confetti burst
    try {
      const confetti = (await import("canvas-confetti")).default;
      const colors = ["#34D399", "#10B981", "#A86CE0", "#C49BD9", "#FFFFFF"];
      const fire = (originX: number) => {
        confetti({
          particleCount: 70,
          spread: 70,
          startVelocity: 45,
          origin: { x: originX, y: 0.5 },
          colors,
          zIndex: 9999,
          scalar: 0.95,
        });
      };
      fire(0.2);
      fire(0.8);
      setTimeout(() => {
        confetti({
          particleCount: 120,
          spread: 100,
          startVelocity: 35,
          origin: { x: 0.5, y: 0.4 },
          colors,
          zIndex: 9999,
          scalar: 1.1,
        });
      }, 180);
    } catch {
      // confetti is optional eye-candy — never block the flow
    }
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
        <div style={{ display: "flex", justifyContent: "center", marginBottom: 16 }}>
          <span style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "6px 14px", borderRadius: 999, background: "rgba(16,185,129,0.15)", border: "1px solid rgba(52,211,153,0.5)", fontFamily: "Manrope, sans-serif", fontSize: 11, fontWeight: 800, letterSpacing: "0.14em", textTransform: "uppercase", color: "#34D399" }}>
            <span aria-hidden style={{ width: 7, height: 7, borderRadius: "50%", background: "#34D399", boxShadow: "0 0 8px rgba(52,211,153,0.8)" }} />
            {status === "success" ? "Готово" : "Регистрация"}
          </span>
        </div>
        <h3 id="modal-title" className="font-alfabet-bold" style={{ fontSize: "clamp(22px, 3vw, 28px)", textAlign: "center", marginBottom: status === "success" ? 18 : 8, lineHeight: 1.2, letterSpacing: "-0.01em", color: COLOR.fg }}>
          {status === "success" ? "Записах те!" : "Запази си място безплатно"}
        </h3>
        {status !== "success" && (
          <p style={{ textAlign: "center", margin: "0 0 22px", fontFamily: "Manrope, sans-serif", fontSize: 13.5, color: COLOR.fgMuted, lineHeight: 1.5 }}>
            {EVENT_DATE_LABEL} · {EVENT_TIME_LABEL} · На живо в Zoom
          </p>
        )}

        {status === "success" ? (
          <div style={{ color: COLOR.fgMuted, textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", gap: 16 }}>
            <p style={{ margin: 0, lineHeight: 1.55, fontFamily: "Manrope, sans-serif" }}>
              ✓ Провери имейла си в следващите <strong style={{ color: COLOR.fg }}>60 секунди</strong> — линкът за Zoom идва веднага. Ако не го виждаш, провери „Промоции“ или „Спам“.
            </p>
            <button type="button" onClick={onClose} className="optin-submit" style={{ maxWidth: 200 }}>Затвори</button>
          </div>
        ) : (
          <form onSubmit={submit} noValidate style={{ display: "flex", flexDirection: "column", alignItems: "stretch", gap: 12, width: "100%" }}>
            {/* Name */}
            <div style={{ display: "flex", flexDirection: "column", gap: 4, alignItems: "stretch", width: "100%" }}>
              <label htmlFor="optin-name" style={{ fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: COLOR.fgMuted, fontFamily: "Manrope, sans-serif", fontWeight: 700, textAlign: "left", display: "block", width: "100%" }}>
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
                  placeholder="Твоето име"
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? "optin-name-err" : undefined}
                  className="field-input"
                />
              </div>
              {errors.name && <p id="optin-name-err" role="alert" className="field-err">{errors.name}</p>}
            </div>

            {/* Email */}
            <div style={{ display: "flex", flexDirection: "column", gap: 4, alignItems: "stretch", width: "100%" }}>
              <label htmlFor="optin-email" style={{ fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: COLOR.fgMuted, fontFamily: "Manrope, sans-serif", fontWeight: 700, textAlign: "left", display: "block", width: "100%" }}>
                Email
              </label>
              <div className={`field-shell${errors.email ? " is-error" : ""}`}>
                <input
                  id="optin-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => { setEmail(e.target.value); if (errors.email) setErrors((p) => ({ ...p, email: undefined })); }}
                  autoComplete="email"
                  placeholder="ime@example.com"
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? "optin-email-err" : undefined}
                  className="field-input"
                />
              </div>
              {errors.email && <p id="optin-email-err" role="alert" className="field-err">{errors.email}</p>}
            </div>

            {/* Phone */}
            <div style={{ display: "flex", flexDirection: "column", gap: 4, alignItems: "stretch", width: "100%" }}>
              <label htmlFor="optin-phone" style={{ fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: COLOR.fgMuted, fontFamily: "Manrope, sans-serif", fontWeight: 700, textAlign: "left", display: "block", width: "100%" }}>
                Телефон (за SMS напомняне)
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
              {status === "loading" ? "Изпращаме…" : <>Запиши ме в Zoom-а&nbsp;→</>}
            </button>

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
    <footer
      style={{
        position: "relative",
        padding: "clamp(64px, 9vw, 100px) clamp(16px, 4vw, 32px) clamp(36px, 5vw, 56px)",
        textAlign: "center",
        overflow: "hidden",
      }}
    >
      {/* Lamp — thin horizontal beam line full-width */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 1,
          background: "linear-gradient(90deg, transparent 0%, rgba(196,155,217,0.35) 25%, rgba(196,155,217,0.55) 50%, rgba(196,155,217,0.35) 75%, transparent 100%)",
          pointerEvents: "none",
        }}
      />
      {/* Lamp glow downward — wide elliptical wash beneath the line */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          top: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: "min(680px, 90%)",
          height: 320,
          background: "radial-gradient(ellipse 50% 50% at center top, rgba(196,155,217,0.55) 0%, rgba(168,108,224,0.28) 22%, rgba(123,47,190,0.12) 45%, transparent 75%)",
          pointerEvents: "none",
        }}
      />
      {/* Bulb hot spot — bright glow at line center */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          top: -10,
          left: "50%",
          transform: "translateX(-50%)",
          width: 220,
          height: 22,
          background: "radial-gradient(ellipse at center, rgba(255,255,255,0.9) 0%, rgba(232,200,245,0.6) 30%, transparent 70%)",
          filter: "blur(3px)",
          pointerEvents: "none",
        }}
      />
      <div style={{ maxWidth: 920, margin: "0 auto", position: "relative" }}>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 18, marginBottom: 18 }}>
          <a href="https://aibrandscale.io/privacy" target="_blank" rel="noopener noreferrer" style={{ fontFamily: "Manrope, sans-serif", fontSize: 14, fontWeight: 500, color: COLOR.fg, textDecoration: "none", letterSpacing: "0.01em" }}>
            Privacy Policy
          </a>
          <span aria-hidden style={{ width: 1, height: 16, background: "rgba(196,155,217,0.35)" }} />
          <a href="https://aibrandscale.io/terms" target="_blank" rel="noopener noreferrer" style={{ fontFamily: "Manrope, sans-serif", fontSize: 14, fontWeight: 500, color: COLOR.fg, textDecoration: "none", letterSpacing: "0.01em" }}>
            Terms &amp; Conditions
          </a>
        </div>
        <p style={{ margin: 0, fontSize: 11, color: COLOR.fgDim, fontFamily: "Manrope, sans-serif", lineHeight: 1.6, maxWidth: 720, marginLeft: "auto", marginRight: "auto" }}>
          Този сайт не е част от Facebook или Meta Platforms, Inc. FACEBOOK е регистрирана търговска марка на Meta Platforms, Inc.
        </p>
        <p style={{ marginTop: 22, marginBottom: 0, fontSize: 12, color: COLOR.fgDim, fontFamily: "Manrope, sans-serif", letterSpacing: "0.02em" }}>
          © {new Date().getFullYear()} aibrandscale.io
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
      <PurpleAlertNav text={`${EVENT_DATE_LABEL} · ${EVENT_TIME_LABEL}`} extraLabel="Безплатно обучение" />
      <main className="overflow-x-hidden w-full">
        <Hero onOpen={open} />
        <BrandsStrip />
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
