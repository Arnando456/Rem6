const help = (pushname, prefix, botName, ownerName, reqXp, getLevelingLevel, sender, _registered, uangku,) => {
        return `┌──「 *${botName}* 」
│        
├「 *USER STATUS* 」
│
├ NAMA : ${pushname}
├ UANG : Rp:${uangku}
├ XP : ${reqXp}
├ LEVEL:${getLevelingLevel(sender)}
├ USER ${botName} : ${_registered.length}
├ OWNER:${ownerName}
├ TOTAL FITUR: 330
│          
├「 *ABOUT BOT* 」
│
├ *${prefix}info*
├ *${prefix}ping*
├ *${prefix}donasi*
├ *${prefix}owner* 
│
├「 *LIST MENU* 」
│
├ *${prefix}simplemenu*
├ *${prefix}makermenu*
├ *${prefix}gabutmenu*
├ *${prefix}downloadmenu*
├ *${prefix}randommenu*
├ *${prefix}dompetmenu*
├ *${prefix}othermenu*
├ *${prefix}animemenu*
├ *${prefix}groupmenu*
├ *${prefix}soundmenu*
├ *${prefix}premiummenu*
├ *${prefix}ownermenu*
│
├「 *TQTO* 」
│
├ MrG{108P}*
├ Sofyan AMV
├ Mr.A43G
├//TQTO NYA JANGAN DIHAPUS BOGENK!!!
└──「 *REM BOT* 」`
}
exports.help = help
