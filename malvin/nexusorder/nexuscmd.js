import moment from 'moment-timezone';
import fs from 'fs';
import os from 'os';
import pkg, { prepareWAMessageMedia } from '@whiskeysockets/baileys';
const { generateWAMessageFromContent, proto } = pkg;
import config from '../../config.cjs';

const alive = async (m, sock) => {
  const prefix = config.PREFIX;
  const mode = config.MODE;
  const pushName = m.pushName || 'User';

  const cmd = m.body.startsWith(prefix)
    ? m.body.slice(prefix.length).split(' ')[0].toLowerCase()
    : '';

  if (cmd === "menu") {
    await m.React('⏳'); // React with a loading icon
    // Calculate uptime

    const uptimeSeconds = process.uptime();
    const days = Math.floor(uptimeSeconds / (24 * 3600));
    const hours = Math.floor((uptimeSeconds % (24 * 3600)) / 3600);
    const minutes = Math.floor((uptimeSeconds % 3600) / 60);
    const seconds = Math.floor(uptimeSeconds % 60);

    
    // Get real time
    const realTime = moment().tz("Africa/Harare").format("HH:mm:ss");
    const xtime = moment.tz("Africa/Harare").format("HH:mm:ss");
    const xdate = moment.tz("Africa/Harare").format("DD/MM/YYYY");
    const time2 = moment().tz("Afeica/Harare").format("HH:mm:ss");
let pushwish = "";

if (time2 < "05:00:00") {
  pushwish = `Good Morning 🌄`;
} else if (time2 < "11:00:00") {
  pushwish = `Good Morning 🌄`;
} else if (time2 < "15:00:00") {
  pushwish = `Good Afternoon 🌅`;
} else if (time2 < "18:00:00") {
  pushwish = `Good Evening 🌃`;
} else if (time2 < "19:00:00") {
  pushwish = `Good Evening 🌃`;
} else {
  pushwish = `Good Night 🌌`;
}

    const aliveMessage = `╭┈───────────────•*
 *⇆𝙷𝙴𝙻𝙻𝙾 ᴜsᴇʀ⇆*
          *${pushName}* _${pushwish}_
  *⇆ ✨ ɴᴇxᴜs ᴍᴅ 𝙲ᴍᴅ 𝙻𝙸𝚂𝚃 ✨ ⇆*
*╰┈───────────────•*
*╭┈───────────────•* 
*┊  ◦* ʙᴏᴛ ɴᴀᴍᴇ: ɴᴇxᴜs ᴍᴅ
*┊  ◦* ᴠᴇʀsɪᴏɴ: 2.0.1
*┊  ◦* ᴅᴇᴠ: ᴛᴇᴄʜʟᴏʀᴅ
*┊  ◦* ᴘʀᴇғɪx: *${prefix}*
*┊  ◦* ᴍᴏᴅᴇ: *${mode}*
*┊  ◦* ᴜᴘᴛɪᴍᴇ: *${days}d ${hours}h ${minutes}m ${seconds}s*
*┊  ◦* ᴄᴜʀʀᴇɴᴛ ᴛɪᴍᴇ: *${realTime}*
*╰┈───────────────•*
*♡︎•━━━┉┉┉┉┉☻┉┉┉┉┉┉┉━━•♡︎*

    *[ • 🤴 𝙾𝚆𝙽𝙴𝚁 𝙲𝙼𝙳 🤴 ‎• ]*
*╭┈───────────────•*
*┋* *${prefix}ʙʟᴏᴄᴋ*
*┋* *${prefix}ᴜɴʙʟᴏᴄᴋ*
*┋* *${prefix}ᴊᴏɪɴ*
*┋* *${prefix}ʟᴇᴀᴠᴇ*
*┋* *${prefix}sᴇᴛᴠᴀʀ*
*┋* *${prefix}ʀᴇsᴛᴀʀᴛ*
*┋* *${prefix}ᴘᴘ*
*┋* *${prefix}sʜᴜᴛᴅᴏᴡɴ*
*╰┈───────────────•*

    *[ • 🔎 𝚂𝙴𝙰𝚁𝙲𝙷 𝙲𝙼𝙳 🔍 ‎• ]*
*╭┈───────────────•*
*┋* *${prefix}ʏᴛs*
*┋* *${prefix}ɢᴏᴏɢʟᴇ*
*┋* *${prefix}ɪᴍɢ*
*┋* *${prefix}ɪᴍᴅʙ*
*┋* *${prefix}ᴘʟᴀʏsᴛᴏʀᴇ*
*┋* *${prefix}ᴡᴇᴀᴛʜᴇʀ*
*┋* *${prefix}ɴᴇᴡs*
*╰┈───────────────•*

      *[ • 🧠 𝙰𝙸 𝙲𝙼𝙳 🧠  ‎• ]*
*╭┈───────────────•*
*┋* *${prefix}ʙʟᴀᴄᴋʙᴏxᴀɪ*
*┋* *${prefix}ᴠɪsɪᴛ*
*┋* *${prefix}ɢᴘᴛ*
*╰┈───────────────•*

  *[ • 📥 DOWNLOADER-CMD 📥 ‎• ]*
*╭┈───────────────•*
*┋* *${prefix}ғʙ*
*┋* *${prefix}ɪɴꜱᴛᴀ*
*┋* *${prefix}ᴠɪᴅᴇᴏ*
*┋* *${prefix}ɢᴅʀɪᴠᴇ*
*┋* *${prefix}ᴛᴡɪᴛᴛᴇʀ*
*┋* *${prefix}ᴛɪᴋᴛᴏᴋ*
*┋* *${prefix}ᴍᴇᴅɪᴀғɪʀᴇ*
*┋* *${prefix}ꜱᴏɴɢ*
*┋* *${prefix}ᴠɪᴅᴇᴏ*
*┋* *${prefix}ᴀᴘᴋ*
*┋* *${prefix}ᴛᴛᴀᴜᴅɪᴏ*
*╰┈───────────────•*

    *[ • 🚻 GROUP-CMD 🚻 ‎• ]*
*╭┈───────────────•*
*┋*⛔️ *${prefix}ᴅᴇʟ <ʀᴇᴘʟʏ ғᴏʀ ᴅᴇʟᴇᴛᴇ sᴍs>*
*┋*🤝 *${prefix}ᴀᴅᴅ*
*┋*🦵 *${prefix}ᴋɪᴄᴋ*
*┋*🤗 *${prefix}ᴡᴇʟᴄᴏᴍᴇ 𝚘𝚗*
*┋*🤗 *${prefix}ᴡᴇʟᴄᴏᴍᴇ 𝚘𝚏𝚏*
*┋*🫅 *${prefix}ᴘʀᴏᴍᴏᴛᴇ*
*┋*🤵 *${prefix}ᴅᴇᴍᴏᴛᴇ*
*┋*🎳 *${prefix}ᴛᴀɢᴀʟʟ*
*┋*📛 *${prefix}𝚑𝚒𝚍𝚎𝚝𝚊𝚐*
*┋*♻️ *${prefix}ɪɴᴠɪᴛᴇ*
*┋*🔇 *${prefix}ᴍᴜᴛᴇ*
*┋*🔊 *${prefix}ᴜɴᴍᴜᴛᴇ*
*┋*🔒 *${prefix}ɢʀᴏᴜᴘ 𝚘𝚙𝚎𝚗*
*┋*🔓 *${prefix}ɢʀᴏᴜᴘ 𝚌𝚕𝚘𝚜𝚎*
*┋*😞 *${prefix}ʟᴇᴀᴠᴇ*
*╰┈───────────────•*

    *[ • 🎙️ 𝙰𝚄𝙳𝙸𝙾 𝙲𝙼𝙳 🎙️ ‎• ]*
*╭┈───────────────•*
*┋* *${prefix}ᴅᴇᴇᴘ*
*┋* *${prefix}ʙᴀss*
*┋* *${prefix}ʀᴏʙᴏᴛ*
*┋* *${prefix}𝚁ᴇᴠᴇʀsᴇ*
*┋* *${prefix}sʟᴏᴡ*
*┋* *${prefix}sᴍᴏᴏᴛʜ*
*┋* *${prefix}ɴɪɢʜᴛᴄᴏʀᴇ*
*╰┈───────────────•*

    *[ • ☣ 𝚂𝚃𝙸𝙲𝙺𝙴𝚁 𝙲𝙼𝙳 ☣ ‎• ]*
*╭┈───────────────•*
*┋* *${prefix}ᴘᴏᴋᴇ*
*┋* *${prefix}ᴅᴀɴᴄᴇ*
*┋* *${prefix}ʜᴀᴘᴘʏ*
*┋* *${prefix}ᴡɪɴᴋ*
*┋* *${prefix}ᴋɪʟʟ*
*┋* *${prefix}ᴋɪᴄᴋ*
*┋* *${prefix}ʙɪᴛᴇ*
*┋* *${prefix}sʟᴀᴘ*
*┋* *${prefix}ʏᴇᴇᴛ*
*┋* *${prefix}sᴍɪʟᴇ*
*┋* *${prefix}ᴡᴀᴠᴇ*
*┋* *${prefix}ʜɪɢʜғɪᴠᴇ*
*┋* *${prefix}ʙʟᴜsʜ*
*┋* *${prefix}ɴᴏᴍ*
*┋* *${prefix}ʙᴏɴᴋ*
*┋* *${prefix}sᴍᴜɢ*
*┋* *${prefix}ᴘᴀᴛ*
*┋* *${prefix}ʟɪᴄᴋ*
*┋* *${prefix}ᴋɪss*
*┋* *${prefix}ᴀᴡᴏᴏ*
*┋* *${prefix}ʜᴜɢ*
*┋* *${prefix}ᴄʀʏ*
*┋* *${prefix}ᴄᴜᴅᴅʟᴇ*
*┋* *${prefix}ʙᴜʟʟʏ*
*╰┈───────────────•*

     *[ • 🤓 𝙾𝚃𝙷𝙴𝚁 𝙲𝙼𝙳 🤓 ‎• ]*
*╭┈───────────────•*
*┋* *${prefix}ғᴀɴᴄʏ*
*┋* *${prefix}ᴇʙɪɴᴀʀʏ*
*┋* *${prefix}ᴅʙɪɴᴀʀʏ*
*┋* *${prefix}ɢᴇᴛ*
*┋* *${prefix}ғᴇᴛᴄʜ*
*┋* *${prefix}ᴜᴘᴅᴀᴛᴇɴᴏᴡ*
*┋* *${prefix}ᴍᴘ3*
*┋* *${prefix}ᴛᴛs*
*┋* *${prefix}sʜᴏʀᴛᴇɴ /sᴜʀʟ*
*┋* *${prefix}ᴛᴇᴍᴘᴍᴀɪʟ*
*┋* *${prefix}ᴄʜᴇᴄᴋᴍᴀɪʟ*
*╰┈───────────────•*

   *[ • 🤓 𝚂𝚃𝙰𝙻𝙺𝙴𝚁 𝙲𝙼𝙳 🤓 ‎• ]*
*╭┈───────────────•*
*┋* *${prefix}ɢɪᴛsᴛᴀʟᴋ*
*┋* *${prefix}ᴛɪᴋsᴛᴀʟᴋ*
*┋* *${prefix}ɴᴘᴍsᴛᴀʟᴋ*
*┋* *${prefix}ᴘᴏᴘɪɴғᴏ*
*┋* *${prefix}ʟᴏᴏᴋᴜᴘ*
*┋* *${prefix}ᴡᴀᴄʜᴀɴɴᴇʟ*
*╰┈───────────────•*

    *[ • 🤵𝙷𝙴𝚁𝙾𝙺𝚄 𝙲𝙻𝙸𝙴𝙽𝚃🤵 ‎• ]*
*╭┈───────────────•*
*┋* *${prefix}ᴍᴏᴅᴇ <𝙿𝚄𝙱𝙻𝙸𝙲/𝙿𝚁𝙸𝚅𝙰𝚃𝙴>*
*┋* *${prefix}ᴘʀᴇғɪx <𝚂𝚈𝙼𝙱𝙾𝙻>*
*┋* *${prefix}ᴀᴜᴛᴏsᴠɪᴇᴡ <𝙾𝙽/𝙾𝙵𝙵>*
*┋* *${prefix}ᴀᴜᴛᴏʀᴇᴀᴄᴛ <𝙾𝙽/𝙾𝙵𝙵>*
*┋* *${prefix}ᴀʟᴡᴀʏsᴏɴʟɪɴᴇ <𝙾𝙽/𝙾𝙵𝙵>*
*┋* *${prefix}ᴀᴜᴛᴏʀᴇᴀᴅ <𝙾𝙽/𝙾𝙵𝙵>*
*┋* *${prefix}ᴀᴜᴛᴏʙʟᴏᴄᴋ <𝙾𝙽/𝙾𝙵𝙵>*
*┋* *${prefix}ᴀɴᴛɪᴄᴀʟʟ <𝙾𝙽/𝙾𝙵𝙵>*
*┋* *${prefix}ᴀᴜᴛᴏʀᴇᴄᴏʀᴅɪɴɢ <𝙾𝙽/𝙾𝙵𝙵>*
*┋* *${prefix}ᴀᴜᴛᴏᴛʏᴘɪɴɢ <𝙾𝙽/𝙾𝙵𝙵>*
*╰┈───────────────•*

> 👾 ᴍᴏʀᴇ ᴄᴍᴅs sᴏᴏɴ ᴏʀ ʟᴀᴛᴇʀ 🤖`;

    await m.React('✅'); // React with a success icon

    sock.sendMessage(
      m.from,
      {
        text: aliveMessage,
        contextInfo: {
          isForwarded: false,
          forwardedNewsletterMessageInfo: {
            newsletterJid: '@newsletter',
            newsletterName: "Nexus-MD",
            serverMessageId: -1,
          },
          forwardingScore: 999, // Score to indicate it has been forwarded
          externalAdReply: {
            title: "🚀 Nexus-MD 🚀",
            body: "Nexus Menu",
            thumbnailUrl: 'https://files.catbox.moe/ktd1l4.jpg', // Add thumbnail URL if required
            sourceUrl: 'https://whatsapp.com/channel/0029Vac8SosLY6d7CAFndv3Z', // Add source URL if necessary
            mediaType: 1,
            renderLargerThumbnail: true,
          },
        },
      },
      { quoted: m }
    );
  }
};

export default alive;
