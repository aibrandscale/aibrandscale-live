const VIBER_INVITE =
  "https://invite.viber.com/?g2=AQBWqAEw5aBBAVaFlLfexB1wlZXqeSP4sgPv%2BTeT1RUT5Lxl8UdVqUTPQM3n7wd2";

function escapeHtml(s: string) {
  return s.replace(/[&<>"']/g, (c) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]!),
  );
}

export function welcomeEmailSubject() {
  return "Записан си за събитието — следваща стъпка вътре";
}

export function welcomeEmailText(name: string) {
  const n = name?.trim() || "приятел";
  return `Здравей, ${n},

Поздравления за решението да се запишеш на събитието!

Силно ти препоръчвам да влезеш във Viber групата, за да не изпуснеш нещо важно:

👉 ВЛЕЗ ВЪВ ВАЙБЪР ГРУПАТА: ${VIBER_INVITE}

Преди няколко години когато проявих интерес да започна да правя пари не вярвах, че онлайн може да се постигне нещо. Бях опитал няколко неща, всичките обещаваха бързи и лесни пари, но познайте — нито едно не ми донесе и евро.

После открих модела, който ще ти покажа. Как с AI можеш да правиш реклами за мащаб, който не съм предполагал, че някога ще съществува.

Днес работя по собствени проекти и обучавам други хора по същата система. Българи, които също като мен нямаха технически умения, нито капитал, нито връзки.

Ти също като мен може да преобразиш живота си само за няколко месеца с правилните знания, усилия и желание.

Отново ти напомням, за да не пропуснеш нищо важно преди петък — влез във Viber групата сега:

👉 ${VIBER_INVITE}

Очаквам те с нетърпение,
Венелин`;
}

export function welcomeEmailHtml(name: string) {
  const safeName = escapeHtml(name?.trim() || "приятел");
  return `<!doctype html>
<html lang="bg">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<meta name="color-scheme" content="light only" />
<meta name="supported-color-schemes" content="light only" />
<title>AI Brand Scale</title>
<style>
  /* Force light styling even in dark-mode-aware email clients */
  :root { color-scheme: light only; supported-color-schemes: light only; }
  body, table, td, div, p, a { font-family: -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif; }
  @media (prefers-color-scheme: dark) {
    .body-bg { background-color: #f4f3f8 !important; }
    .card-bg { background-color: #ffffff !important; }
    .text-primary { color: #1a1024 !important; }
    .text-secondary { color: #4b5563 !important; }
    .text-muted { color: #9ca3af !important; }
    .hairline { border-color: #ececef !important; }
  }
  /* Outlook / generic dark-mode color overrides */
  [data-ogsc] .body-bg { background-color: #f4f3f8 !important; }
  [data-ogsc] .card-bg { background-color: #ffffff !important; }
  [data-ogsc] .text-primary { color: #1a1024 !important; }
  [data-ogsc] .text-secondary { color: #4b5563 !important; }
</style>
</head>
<body class="body-bg" style="margin:0;padding:0;background-color:#f4f3f8;-webkit-font-smoothing:antialiased;">
<div style="display:none;max-height:0;overflow:hidden;opacity:0;color:transparent;">Поздравления за решението да се запишеш на събитието! Влез в Viber групата за следващи стъпки.</div>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#f4f3f8;padding:36px 16px;">
  <tr><td align="center">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" class="card-bg" style="max-width:600px;background-color:#ffffff;border-radius:18px;overflow:hidden;box-shadow:0 8px 28px rgba(85,43,105,0.08);">
      <tr><td style="background:linear-gradient(135deg,#552B69 0%,#903CA5 100%);padding:30px 36px;color:#ffffff;">
        <div style="font-size:11px;letter-spacing:.18em;text-transform:uppercase;color:#e9d8f3;font-weight:700;">AI Brand Scale · Challenge</div>
        <div style="font-size:24px;font-weight:800;letter-spacing:-.01em;margin-top:8px;line-height:1.2;color:#ffffff;">Здравей, ${safeName} 👋</div>
      </td></tr>
      <tr><td style="padding:30px 36px 12px;font-size:15.5px;line-height:1.65;">
        <p class="text-primary" style="margin:0 0 16px;color:#1a1024;">Поздравления за решението да се запишеш на събитието!</p>
        <p class="text-primary" style="margin:0 0 18px;color:#1a1024;">Силно ти препоръчвам да влезеш във Viber групата, за да не изпуснеш нещо важно:</p>

        <table role="presentation" cellpadding="0" cellspacing="0" align="center" style="margin:0 auto 26px;"><tr><td align="center" bgcolor="#7360F2" style="border-radius:999px;">
          <a href="${VIBER_INVITE}" style="display:inline-block;background:#7360F2;color:#ffffff !important;font-weight:800;text-decoration:none;padding:16px 32px;border-radius:999px;letter-spacing:.04em;font-size:14px;text-transform:uppercase;mso-padding-alt:0;">
            👉 Влез във Вайбър групата
          </a>
        </td></tr></table>

        <p class="text-secondary" style="margin:0 0 16px;color:#3f3550;">Преди няколко години, когато проявих интерес да започна да правя пари, не вярвах, че онлайн може да се постигне нещо. Бях опитал няколко неща — всичките обещаваха бързи и лесни пари, но познайте: нито едно не ми донесе и евро.</p>
        <p class="text-secondary" style="margin:0 0 16px;color:#3f3550;">После открих модела, който ще ти покажа. Как с AI можеш да правиш реклами за мащаб, който дори не съм предполагал, че някога ще съществува.</p>
        <p class="text-secondary" style="margin:0 0 16px;color:#3f3550;">Днес работя по собствени проекти и обучавам други хора по същата система. Българи, които също като мен нямаха технически умения, нито капитал, нито връзки.</p>
        <p class="text-secondary" style="margin:0 0 22px;color:#3f3550;">Ти също като мен може да преобразиш живота си само за няколко месеца — с правилните знания, усилия и желание.</p>

        <p class="text-primary" style="margin:0 0 14px;font-weight:600;color:#1a1024;">Отново ти напомням: за да не пропуснеш нищо важно преди петък, влез във Viber групата сега —</p>

        <table role="presentation" cellpadding="0" cellspacing="0" align="center" style="margin:0 auto 24px;"><tr><td align="center" bgcolor="#7360F2" style="border-radius:999px;">
          <a href="${VIBER_INVITE}" style="display:inline-block;background:#7360F2;color:#ffffff !important;font-weight:800;text-decoration:none;padding:16px 32px;border-radius:999px;letter-spacing:.04em;font-size:14px;text-transform:uppercase;mso-padding-alt:0;">
            👉 Влез във Вайбър групата
          </a>
        </td></tr></table>

        <p class="text-secondary" style="margin:24px 0 0;font-size:14px;color:#4b5563;">Очаквам те с нетърпение,<br/><strong class="text-primary" style="color:#1a1024;">Венелин</strong></p>
      </td></tr>
      <tr><td class="hairline" style="background-color:#fafaff;border-top:1px solid #ececef;padding:16px 36px;font-size:11px;color:#9ca3af;text-align:center;">
        © ${new Date().getFullYear()} AI Brand Scale · <a href="https://aibrandscale.io" style="color:#9ca3af;text-decoration:none;">aibrandscale.io</a>
      </td></tr>
    </table>
  </td></tr>
</table></body></html>`;
}
