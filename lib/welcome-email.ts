const VIBER_INVITE =
  "https://invite.viber.com/?g2=AQBWqAEw5aBBAVaFlLfexB1wlZXqeSP4sgPv%2BTeT1RUT5Lxl8UdVqUTPQM3n7wd2";

function escapeHtml(s: string) {
  return s.replace(/[&<>"']/g, (c) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]!),
  );
}

export function welcomeEmailSubject() {
  return "Записан си за AI Challenge — следващи стъпки 🚀";
}

export function welcomeEmailText(name: string) {
  return `Здрасти ${name || "приятел"},\n\nТова е потвърждение че си записан за AI Challenge.\n\nКакво следва:\n• Влез в нашата Viber група: ${VIBER_INVITE}\n• Очакваме те на онлайн обучението на 15 май 2026, 19:00ч.\n• Линкът за Zoom ще пристигне 1 час преди старта.\n\nЕдин съвет: всичко най-важно ще се случва във Viber групата. Записванията там стартират по-рано.\n\nДо скоро,\nЕкипът на AI Brand Scale\nhttps://aibrandscale.io`;
}

export function welcomeEmailHtml(name: string) {
  const safeName = escapeHtml(name || "приятел");
  return `<!doctype html>
<html lang="bg"><body style="margin:0;padding:0;background:#0a0612;font-family:-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif;color:#f9f9f9;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#0a0612;padding:36px 16px;">
  <tr><td align="center">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;background:#1a1024;border:1px solid rgba(196,155,217,0.18);border-radius:18px;overflow:hidden;">
      <tr><td style="background:linear-gradient(135deg,#552B69 0%,#903CA5 100%);padding:28px 32px;">
        <div style="font-size:11px;letter-spacing:.18em;text-transform:uppercase;color:rgba(255,255,255,0.8);font-weight:700;">AI Brand Scale · Challenge</div>
        <div style="font-size:24px;font-weight:800;letter-spacing:-.01em;margin-top:6px;line-height:1.2;">Записан си! 🎉</div>
      </td></tr>
      <tr><td style="padding:28px 32px;font-size:15px;line-height:1.6;color:#f9f9f9;">
        <p style="margin:0 0 18px;">Здрасти ${safeName},</p>
        <p style="margin:0 0 18px;">Това е потвърждение, че мястото ти за <strong>AI Challenge</strong> е запазено.</p>
        <div style="background:rgba(196,155,217,0.08);border:1px solid rgba(196,155,217,0.25);border-radius:12px;padding:16px 18px;margin:0 0 22px;">
          <div style="font-size:11px;letter-spacing:.14em;text-transform:uppercase;color:#c49bd9;font-weight:700;margin-bottom:8px;">Кога</div>
          <div style="font-size:16px;font-weight:700;">15 май 2026 · 19:00ч.</div>
          <div style="font-size:13px;color:rgba(255,255,255,0.7);margin-top:4px;">Онлайн на живо в Zoom</div>
        </div>
        <p style="margin:0 0 14px;font-weight:600;color:#fff;">Следваща стъпка — влез в Viber групата:</p>
        <table role="presentation" cellpadding="0" cellspacing="0" style="margin:0 0 24px;"><tr><td>
          <a href="${VIBER_INVITE}" style="display:inline-block;background:linear-gradient(135deg,#34D399 0%,#10B981 100%);color:#06281b;font-weight:800;text-decoration:none;padding:14px 26px;border-radius:999px;letter-spacing:.02em;">
            Влез във Viber групата →
          </a>
        </td></tr></table>
        <p style="margin:0 0 12px;font-size:13px;color:rgba(255,255,255,0.7);line-height:1.6;">
          Във Viber групата ще получаваш напомняния за обучението, exclusive материали и отговори на въпроси. Линкът за Zoom ще пристигне 1 час преди старта на 15 май.
        </p>
        <p style="margin:18px 0 0;font-size:13px;color:rgba(255,255,255,0.6);">До скоро,<br/>Венелин · AI Brand Scale</p>
      </td></tr>
      <tr><td style="background:rgba(255,255,255,0.02);border-top:1px solid rgba(255,255,255,0.06);padding:14px 32px;font-size:11px;color:rgba(255,255,255,0.4);text-align:center;">
        © ${new Date().getFullYear()} AI Brand Scale · <a href="https://aibrandscale.io" style="color:rgba(255,255,255,0.5);text-decoration:none;">aibrandscale.io</a>
      </td></tr>
    </table>
  </td></tr>
</table></body></html>`;
}
