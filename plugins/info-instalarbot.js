import fs from 'fs'
let handler  = async (m, { conn, command, args, usedPrefix, DevMode }) => {
let text = `
*—◉ 𝚃𝚄𝚃𝙾𝚁𝙸𝙰𝙻 𝙱𝙾T 𝙷𝙾𝚂𝚃*
> Tutorial: https://y
> Pagina Oficial:
> Dashboard: https:/
> Panel: https:/
> Soporte: h

------------------------------------

*—◉ Información*
> 

------------------------------------

`.trim()   
conn.reply(m.chat, text, m, {
contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, 
title: '𝙸𝙽𝙵𝙾𝚁𝙼𝙰𝙲𝙸𝙾𝙽 - 𝙸𝙽𝚂𝚃𝙰𝙻𝙰𝚁𝙱𝙾𝚃',
body: 'ᴛʜᴇ ᴍʏsᴛᴄ ﹣ ʙᴏᴛ',         
previewType: 0, thumbnail: fs.readFileSync("./Menu2.jpg"),
sourceUrl: `https://github.com/BrunoSobrino/TheMystic-Bot-MD`}}})   
}
handler.command = /^(instalarbot)/i
export default handler
