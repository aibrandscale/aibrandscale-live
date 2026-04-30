"use client";

import { useState, type FormEvent } from "react";
import Image from "next/image";
import {
  PurpleAlertNav,
  Eyebrow,
  GlowCard,
  CTAPill,
  COLOR,
} from "./_design";

/* ─────────── CONFIG ─────────── */
const EVENT_DATE_LABEL = "15 май 2026";
const EVENT_TIME_LABEL = "18:00 ч.";
const BRANDS = ["ICEPRO", "Minimart", "Vision Studios", "AI Brand Scale"];

/* ─────────── PRIMITIVES ─────────── */

function Logo() {
  return (
    <span className="font-alfabet-black tracking-tight text-lg" style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
      <Image src="/nav-icon.png" alt="" width={28} height={28} priority style={{ width: 28, height: 28, display: "block", borderRadius: "50%", objectFit: "cover" }} />
      <span style={{ color: "var(--text)" }}>AI Brand</span>{" "}
      <span style={{ color: "var(--accent)" }}>Scale</span>
      <span style={{ marginLeft: 8, padding: "2px 8px", fontSize: 10, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "#fff", background: COLOR.purple600, borderRadius: 999 }}>LIVE</span>
    </span>
  );
}

function ScrollToFormCTA({ big = false }: { big?: boolean }) {
  return (
    <CTAPill
      big={big}
      ariaLabel="Запази безплатно място"
      onClick={() => {
        const el = document.getElementById("register");
        el?.scrollIntoView({ behavior: "smooth", block: "start" });
        const first = document.getElementById("reg-name") as HTMLInputElement | null;
        setTimeout(() => first?.focus(), 600);
      }}
    >
      Запази безплатно място
    </CTAPill>
  );
}

/* ─────────── SECTIONS ─────────── */

function Header() {
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
        <ScrollToFormCTA />
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section style={{ position: "relative", padding: "clamp(48px, 9vw, 96px) clamp(16px, 4vw, 32px) clamp(40px, 7vw, 80px)", textAlign: "center", overflow: "hidden" }}>
      <div style={{ maxWidth: 920, margin: "0 auto" }}>
        <div style={{ marginBottom: 24 }}>
          <Eyebrow>ОНЛАЙН ОБУЧЕНИЕ НА ЖИВО · {EVENT_DATE_LABEL.toUpperCase()}</Eyebrow>
        </div>
        <h1
          className="font-alfabet-black"
          style={{
            fontSize: "clamp(34px, 6.4vw, 72px)",
            lineHeight: 1.05,
            letterSpacing: "-0.02em",
            color: COLOR.fg,
            margin: 0,
          }}
        >
          Challenge: изгради{" "}
          <span style={{ color: COLOR.purple100 }}>AI бизнес</span>
          <br />до <span style={{ color: COLOR.purple100 }}>€166/ден</span> за 30 дни
        </h1>
        <p
          style={{
            marginTop: 24,
            fontSize: "clamp(15px, 2.4vw, 19px)",
            lineHeight: 1.55,
            color: COLOR.fgMuted,
            fontFamily: "Manrope, sans-serif",
            maxWidth: 720,
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          За няколко часа на ден ще ти покажа точната AI система, с която обикновени хора стартират от 0 — <strong style={{ color: COLOR.fg }}>БЕЗ</strong> технически умения и <strong style={{ color: COLOR.fg }}>БЕЗ</strong> предишен опит.
        </p>
        <div style={{ marginTop: 36, display: "flex", justifyContent: "center" }}>
          <ScrollToFormCTA big />
        </div>
        <p style={{ marginTop: 18, fontSize: 13, color: COLOR.fgDim, fontFamily: "Manrope, sans-serif", fontStyle: "italic" }}>
          Не правя това обучение често. Местата са ограничени.
        </p>
      </div>
    </section>
  );
}

function BrandsStrip() {
  return (
    <section style={{ padding: "clamp(40px, 6vw, 80px) clamp(16px, 4vw, 32px)", textAlign: "center" }}>
      <div style={{ marginBottom: 28 }}>
        <Eyebrow>Бизнеси и инфлуенсъри, които ми се довериха</Eyebrow>
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "clamp(20px, 4vw, 60px)",
          maxWidth: 1100,
          margin: "0 auto",
          opacity: 0.75,
        }}
      >
        {BRANDS.map((b) => (
          <span
            key={b}
            className="font-alfabet-black"
            style={{
              fontSize: "clamp(18px, 3vw, 28px)",
              letterSpacing: "0.04em",
              color: COLOR.fgMuted,
              textTransform: "uppercase",
            }}
          >
            {b}
          </span>
        ))}
      </div>
      <div style={{ marginTop: 40, display: "flex", justifyContent: "center" }}>
        <ScrollToFormCTA />
      </div>
    </section>
  );
}

function EventDetails() {
  const items = [
    {
      label: "КАКВО",
      title: "100% безплатен AI challenge",
      body: "На живо ще покажа как изграждаш печеливш AI бизнес от нулата — стъпка по стъпка, без вода.",
    },
    {
      label: "КОГА",
      title: `${EVENT_DATE_LABEL} · ${EVENT_TIME_LABEL}`,
      body: "Едно събитие на живо. Ще има limited reply за регистрираните, но опитът на живо е несравним.",
    },
    {
      label: "КЪДЕ",
      title: "Онлайн (Google Meet)",
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
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: "clamp(16px, 2.5vw, 28px)",
        }}
      >
        {items.map((it) => (
          <GlowCard key={it.label} minHeight={220}>
            <div style={{ padding: "clamp(20px, 3vw, 32px)", display: "flex", flexDirection: "column", height: "100%" }}>
              <span style={{ fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", color: COLOR.purple100, fontFamily: "Manrope, sans-serif", fontWeight: 700 }}>
                {it.label}
              </span>
              <h3 className="font-alfabet-black" style={{ fontSize: "clamp(20px, 3vw, 26px)", color: COLOR.fg, marginTop: 10, lineHeight: 1.2 }}>
                {it.title}
              </h3>
              <p style={{ marginTop: 12, fontSize: 15, lineHeight: 1.55, color: COLOR.fgMuted, fontFamily: "Manrope, sans-serif" }}>
                {it.body}
              </p>
            </div>
          </GlowCard>
        ))}
      </div>
      <div style={{ marginTop: 48, display: "flex", justifyContent: "center" }}>
        <ScrollToFormCTA big />
      </div>
    </section>
  );
}

function SpeakerTimeline() {
  const items = [
    {
      year: "2022",
      title: "Започна от едно усещане…",
      body: "Тръгнах от 0 — без капитал, без опит, без аудитория. Само с убеждение, че онлайн има начин.",
    },
    {
      year: "2023 – 2025",
      title: "С времето…",
      body: "Изградих няколко проекта от нулата. Работих с десетки бизнеси и инфлуенсъри. Видях какво наистина работи и какво е губене на време.",
    },
    {
      year: "Днес",
      title: "След години опит…",
      body: "Открих модел, който позволява на обикновени хора да изградят печеливш AI бизнес само за няколко часа на ден. Това е, което ще покажа на живо.",
    },
  ];
  return (
    <section style={{ padding: "clamp(48px, 8vw, 96px) clamp(16px, 4vw, 32px)" }}>
      <div style={{ textAlign: "center", marginBottom: 40 }}>
        <Eyebrow>Защо да ме слушаш</Eyebrow>
        <h2 className="font-alfabet-black" style={{ fontSize: "clamp(28px, 5vw, 48px)", color: COLOR.fg, marginTop: 16, lineHeight: 1.1, letterSpacing: "-0.01em" }}>
          Венелин Йорданов
        </h2>
      </div>
      <div style={{ maxWidth: 800, margin: "0 auto", display: "flex", flexDirection: "column", gap: 24 }}>
        {items.map((it) => (
          <GlowCard key={it.year}>
            <div style={{ padding: "clamp(20px, 3vw, 28px)", display: "flex", gap: 20, alignItems: "flex-start", flexWrap: "wrap" }}>
              <span
                className="font-alfabet-black"
                style={{
                  fontSize: "clamp(18px, 2.5vw, 22px)",
                  color: COLOR.purple100,
                  letterSpacing: "0.04em",
                  flexShrink: 0,
                  minWidth: 110,
                }}
              >
                {it.year}
              </span>
              <div style={{ flex: 1, minWidth: 200 }}>
                <h3 className="font-alfabet-black" style={{ fontSize: "clamp(18px, 2.6vw, 22px)", color: COLOR.fg, lineHeight: 1.25 }}>
                  {it.title}
                </h3>
                <p style={{ marginTop: 8, fontSize: 15, lineHeight: 1.55, color: COLOR.fgMuted, fontFamily: "Manrope, sans-serif" }}>
                  {it.body}
                </p>
              </div>
            </div>
          </GlowCard>
        ))}
      </div>
      <div style={{ marginTop: 48, display: "flex", justifyContent: "center" }}>
        <ScrollToFormCTA big />
      </div>
    </section>
  );
}

const inputStyle = {
  width: "100%",
  padding: "14px 16px",
  borderRadius: 14,
  border: `1px solid ${COLOR.purple800}`,
  background: "rgba(255,255,255,0.04)",
  color: COLOR.fg,
  fontFamily: "Manrope, sans-serif",
  fontSize: 16,
  outline: "none",
  appearance: "none" as const,
};

const errorStyle = {
  color: "#ff8a8a",
  fontSize: 13,
  fontFamily: "Manrope, sans-serif",
  marginTop: -6,
};

function RegisterForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneDigits, setPhoneDigits] = useState("");
  const [hp, setHp] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");
  const [errors, setErrors] = useState<{ name?: string; email?: string; phone?: string; form?: string }>({});

  const nameValid = name.trim().length >= 2;
  const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i.test(email.trim());
  const phoneValid = /^[2-9][0-9]{8}$/.test(phoneDigits);
  const canSubmit = nameValid && emailValid && phoneValid && status !== "loading";

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (hp) return;
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

  return (
    <section id="register" style={{ padding: "clamp(48px, 8vw, 96px) clamp(16px, 4vw, 32px)", textAlign: "center" }}>
      <div style={{ maxWidth: 560, margin: "0 auto" }}>
        <Eyebrow>Запази мястото си по-долу</Eyebrow>
        <h2 className="font-alfabet-black" style={{ fontSize: "clamp(28px, 5vw, 44px)", color: COLOR.fg, marginTop: 16, lineHeight: 1.1, letterSpacing: "-0.01em" }}>
          Запази безплатно място
        </h2>
        <p style={{ marginTop: 14, fontSize: 15, lineHeight: 1.55, color: COLOR.fgMuted, fontFamily: "Manrope, sans-serif" }}>
          След потвърждение получаваш имейл с линка за Google Meet и напомняне 1 час преди старта.
        </p>

        {status === "success" ? (
          <div style={{ marginTop: 32, padding: 28, border: `1px solid ${COLOR.purple800}`, borderRadius: 18, background: "rgba(85,43,105,0.18)" }}>
            <h3 className="font-alfabet-black" style={{ fontSize: 22, color: COLOR.fg, lineHeight: 1.2 }}>
              Готово! ✓
            </h3>
            <p style={{ marginTop: 10, fontSize: 15, color: COLOR.fgMuted, fontFamily: "Manrope, sans-serif", lineHeight: 1.55 }}>
              Записах те. Провери имейла си — линкът за Google Meet идва на момента (понякога попада в Promotions).
            </p>
          </div>
        ) : (
          <form onSubmit={onSubmit} style={{ marginTop: 32, display: "flex", flexDirection: "column", gap: 14, textAlign: "left" }}>
            <input type="text" name="company" value={hp} onChange={(e) => setHp(e.target.value)} tabIndex={-1} autoComplete="off" style={{ position: "absolute", left: -10000, opacity: 0, pointerEvents: "none" }} aria-hidden />

            <label htmlFor="reg-name" style={{ fontSize: 11, letterSpacing: "0.16em", textTransform: "uppercase", color: COLOR.fgMuted, fontFamily: "Manrope, sans-serif", fontWeight: 600 }}>
              Име
            </label>
            <input
              id="reg-name"
              type="text"
              value={name}
              onChange={(e) => { setName(e.target.value); if (errors.name) setErrors((p) => ({ ...p, name: undefined })); }}
              placeholder="Иван Иванов"
              autoComplete="given-name"
              required
              style={inputStyle}
            />
            {errors.name && <span style={errorStyle}>{errors.name}</span>}

            <label htmlFor="reg-email" style={{ fontSize: 11, letterSpacing: "0.16em", textTransform: "uppercase", color: COLOR.fgMuted, fontFamily: "Manrope, sans-serif", fontWeight: 600, marginTop: 6 }}>
              Имейл
            </label>
            <input
              id="reg-email"
              type="email"
              value={email}
              onChange={(e) => { setEmail(e.target.value); if (errors.email) setErrors((p) => ({ ...p, email: undefined })); }}
              placeholder="example@email.com"
              autoComplete="email"
              required
              style={inputStyle}
            />
            {errors.email && <span style={errorStyle}>{errors.email}</span>}

            <label htmlFor="reg-phone" style={{ fontSize: 11, letterSpacing: "0.16em", textTransform: "uppercase", color: COLOR.fgMuted, fontFamily: "Manrope, sans-serif", fontWeight: 600, marginTop: 6 }}>
              Телефон
            </label>
            <div style={{ display: "flex", gap: 10 }}>
              <span style={{ ...inputStyle, width: 78, display: "inline-flex", alignItems: "center", justifyContent: "center", color: COLOR.fgMuted, flexShrink: 0 }}>+359</span>
              <input
                id="reg-phone"
                type="tel"
                inputMode="numeric"
                value={phoneDigits}
                onChange={(e) => {
                  const v = e.target.value.replace(/\D/g, "").slice(0, 9);
                  setPhoneDigits(v);
                  if (errors.phone) setErrors((p) => ({ ...p, phone: undefined }));
                }}
                placeholder="888123456"
                autoComplete="tel-national"
                required
                style={{ ...inputStyle, flex: 1 }}
              />
            </div>
            {errors.phone && <span style={errorStyle}>{errors.phone}</span>}

            <div style={{ marginTop: 24, display: "flex", justifyContent: "center" }}>
              <CTAPill type="submit" big ariaLabel="Запази безплатно място">
                {status === "loading" ? "Записване…" : "Запази безплатно място"}
              </CTAPill>
            </div>

            {errors.form && <p style={{ ...errorStyle, textAlign: "center", marginTop: 8 }}>{errors.form}</p>}
            {!canSubmit && status !== "loading" && (
              <p style={{ marginTop: 4, fontSize: 12, color: COLOR.fgDim, fontFamily: "Manrope, sans-serif", textAlign: "center" }}>
                Попълни всички полета, за да продължиш.
              </p>
            )}
          </form>
        )}
      </div>
    </section>
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
  return (
    <>
      <PurpleAlertNav text={`ОНЛАЙН ОБУЧЕНИЕ НА ЖИВО · ${EVENT_DATE_LABEL.toUpperCase()} · ${EVENT_TIME_LABEL}`} />
      <Header />
      <main className="overflow-x-hidden w-full">
        <Hero />
        <BrandsStrip />
        <EventDetails />
        <SpeakerTimeline />
        <RegisterForm />
      </main>
      <Footer />
    </>
  );
}
