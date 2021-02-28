let handler = function (m) {
  // this.sendContact(m.chat, '6285830009840', 'KING', m)
  this.sendContact(m.chat, '6285830009840', 'My Owner BOT', m)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler
