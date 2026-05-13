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
<html lang="bg"><body style="margin:0;padding:0;background:#0a0612;font-family:-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif;color:#f9f9f9;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#0a0612;padding:36px 16px;">
  <tr><td align="center">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:600px;background:#1a1024;border:1px solid rgba(196,155,217,0.18);border-radius:18px;overflow:hidden;">
      <tr><td style="background:linear-gradient(135deg,#552B69 0%,#903CA5 100%);padding:30px 36px;">
        <div style="font-size:11px;letter-spacing:.18em;text-transform:uppercase;color:rgba(255,255,255,0.85);font-weight:700;">AI Brand Scale · Challenge</div>
        <div style="font-size:24px;font-weight:800;letter-spacing:-.01em;margin-top:8px;line-height:1.2;">Здравей, ${safeName} 👋</div>
      </td></tr>
      <tr><td style="padding:30px 36px 12px;font-size:15.5px;line-height:1.65;color:#f9f9f9;">
        <p style="margin:0 0 16px;">Поздравления за решението да се запишеш на събитието!</p>
        <p style="margin:0 0 18px;">Силно ти препоръчвам да влезеш във Viber групата, за да не изпуснеш нещо важно:</p>

        <table role="presentation" cellpadding="0" cellspacing="0" align="center" style="margin:0 auto 26px;"><tr><td align="center">
          <a href="${VIBER_INVITE}" style="display:inline-block;background:linear-gradient(135deg,#7360F2 0%,#5B49D4 100%);color:#ffffff;font-weight:800;text-decoration:none;padding:16px 32px;border-radius:999px;letter-spacing:.04em;font-size:14px;text-transform:uppercase;">
            👉 Влез във Вайбър групата
          </a>
        </td></tr></table>

        <p style="margin:0 0 16px;">Преди няколко години, когато проявих интерес да започна да правя пари, не вярвах, че онлайн може да се постигне нещо. Бях опитал няколко неща — всичките обещаваха бързи и лесни пари, но познайте: нито едно не ми донесе и евро.</p>
        <p style="margin:0 0 16px;">После открих модела, който ще ти покажа. Как с AI можеш да правиш реклами за мащаб, който дори не съм предполагал, че някога ще съществува.</p>
        <p style="margin:0 0 16px;">Днес работя по собствени проекти и обучавам други хора по същата система. Българи, които също като мен нямаха технически умения, нито капитал, нито връзки.</p>
        <p style="margin:0 0 22px;">Ти също като мен може да преобразиш живота си само за няколко месеца — с правилните знания, усилия и желание.</p>

        <p style="margin:0 0 14px;font-weight:600;color:#fff;">Отново ти напомням: за да не пропуснеш нищо важно преди петък, влез във Viber групата сега —</p>

        <table role="presentation" cellpadding="0" cellspacing="0" align="center" style="margin:0 auto 24px;"><tr><td align="center">
          <a href="${VIBER_INVITE}" style="display:inline-block;background:linear-gradient(135deg,#7360F2 0%,#5B49D4 100%);color:#ffffff;font-weight:800;text-decoration:none;padding:16px 32px;border-radius:999px;letter-spacing:.04em;font-size:14px;text-transform:uppercase;">
            👉 Влез във Вайбър групата
          </a>
        </td></tr></table>

        <p style="margin:24px 0 0;font-size:14px;color:rgba(255,255,255,0.7);">Очаквам те с нетърпение,<br/><strong style="color:#fff;">Венелин</strong></p>
      </td></tr>
      <tr><td style="background:rgba(255,255,255,0.02);border-top:1px solid rgba(255,255,255,0.06);padding:16px 36px;font-size:11px;color:rgba(255,255,255,0.4);text-align:center;">
        © ${new Date().getFullYear()} AI Brand Scale · <a href="https://aibrandscale.io" style="color:rgba(255,255,255,0.5);text-decoration:none;">aibrandscale.io</a>
      </td></tr>
    </table>
  </td></tr>
</table></body></html>`;
}
