let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
  if (!(isAdmin || isOwner)) {
  global.dfail('admin', m, conn)
  throw false
  }
  let pesan = args.join` `
  let oi = `*MENCIÓN:* ${pesan}`
  let teks = `*Aparezcan pedazos de gorreadxs👹*\n\n ${oi}\n\n➥ _*@Liz Dzn:*_\n`
  for (let mem of participants) {
  teks += `🥷🏼 @${mem.id.split('@')[0]}\n`}
  teks += `└ *Chajitabot ⇝ @Liz Dzn*`
  conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )
  }
  handler.help = ['tagall <mesaje>','invocar <mesaje>']
  handler.tags = ['group']
  handler.command = /^(tagall|invocar|invocacion|todos|invocación|aviso|despierten|putos|animales)$/i
  handler.admin = true
  handler.group = true
  export default handler