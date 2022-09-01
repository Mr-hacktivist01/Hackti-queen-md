/* Copyright (C) MR. HACKTIVIST.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
*/
const {
    FancyRandom,
    getListFromCommand,
    skbuffer
  } = require("raganork-bot");
  const {
    Module,
    commands
  } = require('../main')
  const {
    MODE,
    ALIVE,
    BOT_INFO
  } = require('../config');
  const config = require('../config');
  const {
    parseAlive
  } = require('./misc/misc');
  let w = MODE == 'public' ? false : true
  var _0x2812ed=_0x3677;function _0x3677(_0x476363,_0x2b3418){var _0x2fbb31=_0x2fbb();return _0x3677=function(_0x367719,_0x2e5f11){_0x367719=_0x367719-0x8e;var _0x461eb7=_0x2fbb31[_0x367719];return _0x461eb7;},_0x3677(_0x476363,_0x2b3418);}(function(_0x244758,_0x1e3593){var _0xe8f516=_0x3677,_0x10f50a=_0x244758();while(!![]){try{var _0x74d44f=-parseInt(_0xe8f516(0x9f))/0x1*(-parseInt(_0xe8f516(0x9a))/0x2)+-parseInt(_0xe8f516(0x9c))/0x3+-parseInt(_0xe8f516(0x99))/0x4+parseInt(_0xe8f516(0x97))/0x5*(-parseInt(_0xe8f516(0xa2))/0x6)+parseInt(_0xe8f516(0xa1))/0x7+-parseInt(_0xe8f516(0x8f))/0x8+-parseInt(_0xe8f516(0x9e))/0x9*(-parseInt(_0xe8f516(0x9d))/0xa);if(_0x74d44f===_0x1e3593)break;else _0x10f50a['push'](_0x10f50a['shift']());}catch(_0x5b85be){_0x10f50a['push'](_0x10f50a['shift']());}}}(_0x2fbb,0xbd9d9));var os=require('os');const { lchown } = require("fs");
  const {spawnSync}=require(_0x2812ed(0x93)+_0x2812ed(0x90)+'pro'+_0x2812ed(0xa0)+'s'),child=spawnSync(_0x2812ed(0x95)+'fet'+'ch',[_0x2812ed(0x92)+_0x2812ed(0xa3)+'ut']);function bytesToSize(_0x42c818){var _0x55538a=_0x2812ed,_0x4fc952=[_0x55538a(0x9b)+'es','KB','MB','GB','TB'];if(_0x42c818==0x0)return'0\x20B'+'yte';var _0x1aa1c3=parseInt(Math['flo'+'or'](Math['log'](_0x42c818)/Math['log'](0x400)));return Math[_0x55538a(0x94)+'nd'](_0x42c818/Math[_0x55538a(0x8e)](0x400,_0x1aa1c3),0x2)+'\x20'+_0x4fc952[_0x1aa1c3];}var used=bytesToSize(os[_0x2812ed(0x96)+_0x2812ed(0x91)+'m']()),total=bytesToSize(os['tot'+_0x2812ed(0x98)+'em']());function _0x2fbb(){var _0xf10c15=['4304672KxZanY','5984IOOiuh','Byt','1824645uDmejr','3790EcSgQu','65763koNUnW','472SVmexJ','ces','3146514uYYRqZ','6ObUbhJ','tdo','pow','8408080LpvaFi','ld_','eme','--s','chi','rou','neo','fre','5595105XPsOXl','alm'];_0x2fbb=function(){return _0xf10c15;};return _0x2fbb();}
  Module({
    pattern: 'menu',
    fromMe: w,
    use: 'utility',
    desc: 'Is bot alive?'
  }, (async (message, match) => {
    var myid = message.client.user.id.split(":")[0]
    var buttons = [{
      urlButton: {
          displayText: 'Github',
          url: 'https://github.com/souravkl11/raganork'
      }
  }, {
    urlButton: {
      displayText: 'Contact Owner',
      url: 'https://wa.me/'+BOT_INFO.split(";")[2]+'?text=*Hey+'+BOT_INFO.split(";")[1]+'*'
      }
  }, {
      quickReplyButton: {
          displayText: 'All commands',
          id: 'commands'+myid
      }  
  }, {
      quickReplyButton: {
          displayText: 'Support group',
          id: 'support'+myid
      }
  }]
  var gc=commands.filter(a=>"group"===a.use),lgc=commands.filter(a=>"logo"===a.use),tc=commands.filter(a=>"textmaker"===a.use),oc=commands.filter(a=>"owner"===a.use),dc=commands.filter(a=>"download"===a.use),ec=commands.filter(a=>"edit"===a.use),sc=commands.filter(a=>"search"===a.use),uc=commands.filter(a=>"utility"===a.use),setarr=[...gc,...dc,...tc,...oc,...ec,...sc,...uc]
  var gmsg="",ownmsg="",dlmsg="",utilmsg="",srmsg="",tms="",lms="",edmsg="";
  for (var i in setarr) {
  if (setarr[i].use === 'group') {
    gmsg += `┃❁│ ${Math.floor(parseInt(i)+1)}. ${setarr[i].pattern.toString().match(/(\W*)([A-Za-zğüşıiöç1234567890 ]*)/)[2]} \n`
  }
  if (setarr[i].use === 'download') {
    dlmsg += `┃❁│ ${Math.floor(parseInt(i)+1)}. ${setarr[i].pattern.toString().match(/(\W*)([A-Za-zğüşıiöç1234567890 ]*)/)[2]} \n`
  }
  if (setarr[i].use === 'textmaker') {
    tms += `┃❁│ ${Math.floor(parseInt(i)+1)}. ${setarr[i].pattern.toString().match(/(\W*)([A-Za-zğüşıiöç1234567890 ]*)/)[2]} \n`
  }
  if (setarr[i].use === 'owner') {
    ownmsg += `┃❁│ ${Math.floor(parseInt(i)+1)}. ${setarr[i].pattern.toString().match(/(\W*)([A-Za-zğüşıiöç1234567890 ]*)/)[2]} \n`
  }
  if (setarr[i].use === 'edit') {
    edmsg += `┃❁│ ${Math.floor(parseInt(i)+1)}. ${setarr[i].pattern.toString().match(/(\W*)([A-Za-zğüşıiöç1234567890 ]*)/)[2]} \n`
  }
  if (setarr[i].use === 'search') {
    srmsg += `┃❁│ ${Math.floor(parseInt(i)+1)}. ${setarr[i].pattern.toString().match(/(\W*)([A-Za-zğüşıiöç1234567890 ]*)/)[2]} \n`
  }
  if (setarr[i].use === 'utility') {
    utilmsg += `┃❁│ ${Math.floor(parseInt(i)+1)}. ${setarr[i].pattern.toString().match(/(\W*)([A-Za-zğüşıiöç1234567890 ]*)/)[2]} \n`
  }
  }
    var menu = `╭═══〘 ${BOT_INFO.split(";")[0]} 〙═══⊷❍
  ┃𒊹︎︎︎╭──────────────❄︎
  ┃𒊹︎︎︎│
  ┃𒊹︎︎︎│ Owner : ${BOT_INFO.split(";")[1]}
  ┃𒊹︎︎︎│ User : ${message.senderName}
  ┃𒊹︎︎︎│ Mode : ${MODE}
  ┃𒊹︎︎︎│ Server : ${config.HEROKU.APP_NAME}
  ┃𒊹︎︎︎│ Total RAM: ${total}
  ┃𒊹︎︎︎│ Available RAM: ${used}
  ┃𒊹︎︎︎│ Disk Space: 620 GB
  ┃𒊹︎︎︎│ Version: ${config.VERSION}
  ┃𒊹︎︎︎│
  ┃𒊹︎︎︎│
  ┃𒊹︎︎︎│  ▎▍▌▌▉▏▎▌▉▐▏▌▎
  ┃𒊹︎︎︎│  ▎▍▌▌▉▏▎▌▉▐▏▌▎
  ┃𒊹︎︎︎│   ${BOT_INFO.split(";")[0]}
  ┃𒊹︎︎︎│ 
  ┃𒊹︎︎︎╰───────────────❄︎
  ┃  ❤️ᕼᗩᑕKTI-ᑫᑌᗴᗴᑎ-ᗰᗪ❤️
  ╰═════════════════⊷
  
  ╭════〘 Group 〙════⊷❍
  ┃❉╭─────────────────
  ┃❉│ 
  ${gmsg}
  ┃❉╰─────────────────
  ╰══════════════════⊷❍
  ╭════〘 Download 〙════⊷❍
  ┃❉╭─────────────────
  ┃❉│ 
  ${dlmsg}
  ┃❉╰─────────────────
  ╰══════════════════⊷❍
  ╭════〘 Logo Maker 〙════⊷❍
  ┃❉╭─────────────────
  ┃❉│ 
  ┃❉│ logo
  ${tms}
  ┃❉╰─────────────────
  ╰══════════════════⊷❍
  ╭════〘 Owner 〙════⊷❍
  ┃❉╭─────────────────
  ┃❉│ 
  ${ownmsg}
  ┃❉╰─────────────────
  ╰══════════════════⊷❍
  ╭════〘 Edit 〙════⊷❍
  ┃❉╭─────────────────
  ┃❉│ 
  ${edmsg}
  ┃❉╰─────────────────
  ╰══════════════════⊷❍
  ╭════〘 Search 〙════⊷❍
  ┃❉╭─────────────────
  ┃❉│ 
  ${srmsg}
  ┃❉╰─────────────────
  ╰══════════════════⊷❍`
  return await message.sendImageTemplate(await skbuffer(BOT_INFO.split(";")[3]),FancyRandom(menu),"All rights reserved "+BOT_INFO.split(";")[0],buttons);
  }))
  Module({
    pattern: 'alive',
    fromMe: w,
    desc: 'Is bot alive?'
  }, (async (message, match) => {
    await parseAlive(message, ALIVE)
  }))
  Module({
    on: 'button',
    fromMe: w,
   }, (async (message, match) => {
  var myid = message.client.user.id.split(":")[0]
  var {button} = message
  if (button) {
    if (button.includes(myid)&&button.startsWith("commands")) return await message.sendReply(FancyRandom(await getListFromCommand(commands)))
    if (button.includes(myid)&&button.startsWith("ping")) {
      const start = new Date().getTime()
      await message.client.sendMessage(message.jid, {
          text: FancyRandom('Ping!')
      })
      const end = new Date().getTime()
      await message.sendReply(FancyRandom('Pong!\n ```' + (end - start) + '``` *ms*')) 
    }
    if (button.includes(myid)&&button.startsWith("support")) return await message.sendReply(BOT_INFO.split(";")[4])
  } 
  }))
  Module({
    pattern: 'ping',
    fromMe: w,
    use: 'utility',
    desc: 'Measures ping'
  }, (async (message, match) => {
    const start = new Date().getTime()
    await message.client.sendMessage(message.jid, {
        text: '*❮ ᴛᴇsᴛɪɴɢ ᴘɪɴɢ ❯*'
    })
    const end = new Date().getTime()
    await message.client.sendMessage(message.jid, {
        text: '*ʀᴇsᴘᴏɴsᴇ ɪɴ ' + (end - start) + ' _ᴍs_*'
    }, {
        quoted: message.data
    })
  }));
  
