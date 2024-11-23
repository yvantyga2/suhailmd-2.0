const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_02_21_11_23_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICA4MyxcbiAgICAgICAgMTQyLFxuICAgICAgICAxMzgsXG4gICAgICAgIDgzLFxuICAgICAgICA5NyxcbiAgICAgICAgMTgsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTM2LFxuICAgICAgICAxMTksXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjMxLFxuICAgICAgICA3OCxcbiAgICAgICAgNjQsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTY0LFxuICAgICAgICAzOCxcbiAgICAgICAgMzAsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNzIsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjQzLFxuICAgICAgICA2OSxcbiAgICAgICAgMTUzLFxuICAgICAgICA4OCxcbiAgICAgICAgMTU4LFxuICAgICAgICAxMzQsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMCxcbiAgICAgICAgMTE4LFxuICAgICAgICAxMTAsXG4gICAgICAgIDExN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1LFxuICAgICAgICA0NSxcbiAgICAgICAgMjI2LFxuICAgICAgICA0MSxcbiAgICAgICAgMTU5LFxuICAgICAgICAxNjIsXG4gICAgICAgIDY3LFxuICAgICAgICAyNDcsXG4gICAgICAgIDk0LFxuICAgICAgICAxNzcsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNjcsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTIzLFxuICAgICAgICA1NixcbiAgICAgICAgMTgyLFxuICAgICAgICAxODEsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjM1LFxuICAgICAgICAxMjcsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTgwLFxuICAgICAgICAxMzcsXG4gICAgICAgIDY1LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTkyLFxuICAgICAgICA3NyxcbiAgICAgICAgOTAsXG4gICAgICAgIDc4LFxuICAgICAgICA4N1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTk1LFxuICAgICAgICAxMTYsXG4gICAgICAgIDIxNCxcbiAgICAgICAgODgsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjM0LFxuICAgICAgICAxOTIsXG4gICAgICAgIDgsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTQzLFxuICAgICAgICA1MixcbiAgICAgICAgMjEzLFxuICAgICAgICAxMTgsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTg3LFxuICAgICAgICAzOSxcbiAgICAgICAgMTkzLFxuICAgICAgICAxMzEsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjM0LFxuICAgICAgICA3NCxcbiAgICAgICAgMjM0LFxuICAgICAgICAxLFxuICAgICAgICA4OCxcbiAgICAgICAgOTcsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTk3LFxuICAgICAgICA4OSxcbiAgICAgICAgMjksXG4gICAgICAgIDc0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxMSxcbiAgICAgICAgOTgsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjM1LFxuICAgICAgICA5NyxcbiAgICAgICAgMTczLFxuICAgICAgICAxOTQsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjAsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTE3LFxuICAgICAgICAzNCxcbiAgICAgICAgNjgsXG4gICAgICAgIDcyLFxuICAgICAgICAyNDYsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjI0LFxuICAgICAgICA4NixcbiAgICAgICAgMTM0LFxuICAgICAgICAxNCxcbiAgICAgICAgOTYsXG4gICAgICAgIDU0LFxuICAgICAgICAxMDYsXG4gICAgICAgIDg1LFxuICAgICAgICA4MyxcbiAgICAgICAgMzAsXG4gICAgICAgIDk5LFxuICAgICAgICA5LFxuICAgICAgICA5NyxcbiAgICAgICAgMjM0LFxuICAgICAgICAxODksXG4gICAgICAgIDQyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4OCxcbiAgICAgICAgODYsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTUzLFxuICAgICAgICAxMDksXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjM2LFxuICAgICAgICA0NixcbiAgICAgICAgNDgsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNjgsXG4gICAgICAgIDQzLFxuICAgICAgICAyMzAsXG4gICAgICAgIDE1MixcbiAgICAgICAgNCxcbiAgICAgICAgMTUyLFxuICAgICAgICA3MSxcbiAgICAgICAgNDMsXG4gICAgICAgIDE4NixcbiAgICAgICAgODIsXG4gICAgICAgIDIsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjEwLFxuICAgICAgICAyMjYsXG4gICAgICAgIDI0MSxcbiAgICAgICAgODMsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjQzLFxuICAgICAgICAyMTgsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjksXG4gICAgICAgIDg1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDMyLFxuICAgICAgICAzOCxcbiAgICAgICAgNDcsXG4gICAgICAgIDQ2LFxuICAgICAgICAxOTgsXG4gICAgICAgIDEyMixcbiAgICAgICAgOTYsXG4gICAgICAgIDksXG4gICAgICAgIDU5LFxuICAgICAgICA4NSxcbiAgICAgICAgMjM1LFxuICAgICAgICAyNTUsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTE4LFxuICAgICAgICAyNDIsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMzEsXG4gICAgICAgIDcsXG4gICAgICAgIDgzLFxuICAgICAgICAxMSxcbiAgICAgICAgMTQsXG4gICAgICAgIDU5LFxuICAgICAgICAxMjUsXG4gICAgICAgIDYxLFxuICAgICAgICA0MixcbiAgICAgICAgNTcsXG4gICAgICAgIDMzLFxuICAgICAgICA2NCxcbiAgICAgICAgODYsXG4gICAgICAgIDY0LFxuICAgICAgICAyMTcsXG4gICAgICAgIDYwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE2LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMixcbiAgICAgICAgICA0NixcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgOTBcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDEyNlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTc2LFxuICAgICAgICAxMTMsXG4gICAgICAgIDY5LFxuICAgICAgICA3OSxcbiAgICAgICAgMTYzLFxuICAgICAgICAxNDksXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTQyLFxuICAgICAgICAyMTksXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTU4LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTA1LFxuICAgICAgICAxNTQsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjQzLFxuICAgICAgICAxMzEsXG4gICAgICAgIDg5LFxuICAgICAgICA2OCxcbiAgICAgICAgMjM0LFxuICAgICAgICA1OSxcbiAgICAgICAgNjMsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTYwLFxuICAgICAgICA1NixcbiAgICAgICAgNjcsXG4gICAgICAgIDI3LFxuICAgICAgICA5MixcbiAgICAgICAgMTA5LFxuICAgICAgICAyMTcsXG4gICAgICAgIDE2MSxcbiAgICAgICAgODIsXG4gICAgICAgIDU1LFxuICAgICAgICA5OSxcbiAgICAgICAgMTkyLFxuICAgICAgICAxODYsXG4gICAgICAgIDIxMixcbiAgICAgICAgODUsXG4gICAgICAgIDEwNixcbiAgICAgICAgOSxcbiAgICAgICAgNDksXG4gICAgICAgIDE2NyxcbiAgICAgICAgNDksXG4gICAgICAgIDQxLFxuICAgICAgICAyOCxcbiAgICAgICAgNjUsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTQxLFxuICAgICAgICAyMDQsXG4gICAgICAgIDg3LFxuICAgICAgICAyMDcsXG4gICAgICAgIDYzLFxuICAgICAgICAxMDcsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNDgsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNzAsXG4gICAgICAgIDE1MyxcbiAgICAgICAgOTcsXG4gICAgICAgIDE4LFxuICAgICAgICAxNjUsXG4gICAgICAgIDNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE1NCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJha1FrK0UyaCs1dmF4dmM1R1JqUmtjc1VsL3VYd1daWUZ4QzhxbGFaYU5rPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIyNTg4NDAwNTczQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIxMjAwRjk5MDYxNTAzOEU3REE2NjFBOUU3OENBRjIxOVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MzIzMjg1MDNcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwibGhJcjB6TURSeWlZV0lWRnJxZGdDQVwiLFxuICBcInBob25lSWRcIjogXCI1ZTAzMmEzYS1mYTZjLTQzOWMtODM5MS0yYTRkNzU3Mjc2NzFcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjUwLFxuICAgICAgNzksXG4gICAgICA1MyxcbiAgICAgIDI1LFxuICAgICAgNjEsXG4gICAgICA5OSxcbiAgICAgIDEwOCxcbiAgICAgIDE2MCxcbiAgICAgIDExNSxcbiAgICAgIDEwMCxcbiAgICAgIDk1LFxuICAgICAgMjA5LFxuICAgICAgMTY4LFxuICAgICAgMjM2LFxuICAgICAgOTAsXG4gICAgICAxNjYsXG4gICAgICAxODQsXG4gICAgICAxNTAsXG4gICAgICA4LFxuICAgICAgMTg4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogZmFsc2UsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA1NSxcbiAgICAgIDIxOSxcbiAgICAgIDIwOSxcbiAgICAgIDEyMyxcbiAgICAgIDEwNCxcbiAgICAgIDMxLFxuICAgICAgNTAsXG4gICAgICAzNyxcbiAgICAgIDMyLFxuICAgICAgMTY2LFxuICAgICAgMTYsXG4gICAgICAxOCxcbiAgICAgIDQ3LFxuICAgICAgMTYwLFxuICAgICAgMjA3LFxuICAgICAgMTUsXG4gICAgICAzMCxcbiAgICAgIDQ3LFxuICAgICAgMTYyLFxuICAgICAgMTgxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSkNydHNjR0VLejRoTG9HR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJHNEhHRThpZ051Sm55aFJDa2tOUTBuTnhxU1NUSHFZazVFVFFQUmxXWUZzPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlFpTmZCeFExZnRtMlB2ZmJOTlU3RFpZNlRTRHV0WWFCUW84WGRaZlFVZy8yOXRPTXc4OXBWRjRlczZWaDhzUXVOSDRmREI3OVBpeWs4WVYyY0xoSEFRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjV4M2VqUGlBY0Y3Q2p4L1FvUlhxa21wVCtyZ1dPY3BrMmNIZjJjT1U0OXhHZXUra2N6bWgwNGJOZ3NjNVlWSE54a1NjV2RHSVJtUTZhakFEYmVEMUFRPT1cIlxuICB9LFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjI1ODg0MDA1NzM6OEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjcyMTI5NDYzNDM5MzkxOjhAbGlkXCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMjU4ODQwMDU3Mzo4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICA2NyxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAzNixcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDkxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzIzMjg0OTcsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFDanNcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUNqci5qc29uIjogIntcImtleURhdGFcIjpcIjFhaDdadUUrUnR6ZU1rR3lJZlVETUdzUlNIQzBIVWk2cHg0c0pjTmo5ZUU9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTc2MDQwMDc4MixcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQ2pzLmpzb24iOiAie1wia2V5RGF0YVwiOlwibUZCcUdhRUtUUVFVbUFla1UybUpsNE9rTitPMk51NmI3Ti9KOHNVeEwwYz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNzYwNDAwNzgyLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMF19LFwidGltZXN0YW1wXCI6XCIxNzMyMzI1NDAzNDExXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQ2p0Lmpzb24iOiAie1wia2V5RGF0YVwiOlwieXFKSCtPektlUkFaQXJVV3ZUVTRITEs1Y0NSaWNNTE5LKzdYNVpteC96ST1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNzYwNDAwNzgzLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFDanUuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCIxV29HWnlZMktyT0VTMTB1eVE2QkxkWHZ3bENLUDl2ekFwaGkwVHFpOHhnPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE3NjA0MDA3ODMsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MzIzMjg0ODk3ODlcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
