let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • Indosat [085830009840]
╰────
╭─「 Hubungi 」
│ > Ingin donasi? Wa.me/6285830009840
╰────

Ini *#caranya untuk Donasi*
*Cara Donasi*:
1.) Beli ke pulsa/ konter terdekat semisal konter pulsa
2.) Bilang ke konter terdekat..
"Beli pulsa indosat"
3.)Dan terus masukkan nomor kami 085830009840
4.) Jika sudah kirim bukti ke sini.. Terimakasih
*Kalau tidak juga gak papa*👍🏻
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
