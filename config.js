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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_11_31_12_04_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDExMCxcbiAgICAgICAgNCxcbiAgICAgICAgMTMsXG4gICAgICAgIDU1LFxuICAgICAgICAyMzcsXG4gICAgICAgIDgyLFxuICAgICAgICAxMzIsXG4gICAgICAgIDkyLFxuICAgICAgICAyMjUsXG4gICAgICAgIDk2LFxuICAgICAgICAxNTgsXG4gICAgICAgIDU5LFxuICAgICAgICAxODksXG4gICAgICAgIDE5NixcbiAgICAgICAgMTMwLFxuICAgICAgICAxNTYsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTYyLFxuICAgICAgICAxOTYsXG4gICAgICAgIDY4LFxuICAgICAgICAyMDYsXG4gICAgICAgIDExMyxcbiAgICAgICAgOCxcbiAgICAgICAgMTc3LFxuICAgICAgICA5MixcbiAgICAgICAgMTQzLFxuICAgICAgICAxMTQsXG4gICAgICAgIDg2LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE2NixcbiAgICAgICAgNzNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjgsXG4gICAgICAgIDkyLFxuICAgICAgICAyNTUsXG4gICAgICAgIDczLFxuICAgICAgICAxODQsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjIwLFxuICAgICAgICAxMTMsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNTUsXG4gICAgICAgIDIwOSxcbiAgICAgICAgNTEsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjcsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTM2LFxuICAgICAgICAxNjMsXG4gICAgICAgIDUxLFxuICAgICAgICA2NixcbiAgICAgICAgMjMwLFxuICAgICAgICAyMjAsXG4gICAgICAgIDkzLFxuICAgICAgICAxMzIsXG4gICAgICAgIDE5MyxcbiAgICAgICAgNjYsXG4gICAgICAgIDk4LFxuICAgICAgICAyMTgsXG4gICAgICAgIDEzMSxcbiAgICAgICAgNzksXG4gICAgICAgIDE5LFxuICAgICAgICA2MixcbiAgICAgICAgMTRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY0LFxuICAgICAgICAxNzUsXG4gICAgICAgIDYxLFxuICAgICAgICAyNTEsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTEsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjMyLFxuICAgICAgICAxMjEsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMixcbiAgICAgICAgNjQsXG4gICAgICAgIDcxLFxuICAgICAgICAyMDAsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjU1LFxuICAgICAgICAxNjMsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTI3LFxuICAgICAgICAxMCxcbiAgICAgICAgMTY1LFxuICAgICAgICAxMDgsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjM0LFxuICAgICAgICAyNTQsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNDEsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTAsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMjRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNyxcbiAgICAgICAgMTYsXG4gICAgICAgIDkwLFxuICAgICAgICAyMTUsXG4gICAgICAgIDgyLFxuICAgICAgICAxOTQsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNzIsXG4gICAgICAgIDEzOSxcbiAgICAgICAgNjAsXG4gICAgICAgIDQ5LFxuICAgICAgICAxNjIsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjA5LFxuICAgICAgICA0NSxcbiAgICAgICAgMTM5LFxuICAgICAgICAzMCxcbiAgICAgICAgMTMxLFxuICAgICAgICAxNzYsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTY1LFxuICAgICAgICAyNDgsXG4gICAgICAgIDg1LFxuICAgICAgICA5OCxcbiAgICAgICAgMTMsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTg4LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjA5LFxuICAgICAgICAyMTQsXG4gICAgICAgIDEwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAwLFxuICAgICAgICAxNTQsXG4gICAgICAgIDI5LFxuICAgICAgICA3MCxcbiAgICAgICAgODIsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMixcbiAgICAgICAgMTczLFxuICAgICAgICAyMzYsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTkzLFxuICAgICAgICA5MyxcbiAgICAgICAgMTg5LFxuICAgICAgICA3NixcbiAgICAgICAgMjE5LFxuICAgICAgICAyMTUsXG4gICAgICAgIDg3LFxuICAgICAgICAxMjcsXG4gICAgICAgIDY3LFxuICAgICAgICAyNDEsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTcwLFxuICAgICAgICA0MCxcbiAgICAgICAgMTU2LFxuICAgICAgICA1MyxcbiAgICAgICAgMTYzLFxuICAgICAgICAxNzgsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTg4LFxuICAgICAgICAxNTEsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTExXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzLFxuICAgICAgICA0NyxcbiAgICAgICAgMSxcbiAgICAgICAgMixcbiAgICAgICAgMTQ3LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE5LFxuICAgICAgICAyMjUsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjIyLFxuICAgICAgICAxMDIsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjA5LFxuICAgICAgICA5MyxcbiAgICAgICAgMzUsXG4gICAgICAgIDE0NSxcbiAgICAgICAgOTQsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNzQsXG4gICAgICAgIDU2LFxuICAgICAgICAxOTIsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjMxLFxuICAgICAgICA2MCxcbiAgICAgICAgMjQyLFxuICAgICAgICAxODgsXG4gICAgICAgIDUwLFxuICAgICAgICAxMjcsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTQzLFxuICAgICAgICAzOCxcbiAgICAgICAgMTIzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDY0LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgNixcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDY0XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEwMSxcbiAgICAgICAgICA0MixcbiAgICAgICAgICA3LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICA4OSxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDEwMFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjM4LFxuICAgICAgICAxMTYsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTk1LFxuICAgICAgICAxMjEsXG4gICAgICAgIDk5LFxuICAgICAgICAxNDQsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTE5LFxuICAgICAgICAxOTAsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjE5LFxuICAgICAgICAyMzgsXG4gICAgICAgIDk1LFxuICAgICAgICAyMzYsXG4gICAgICAgIDIzOCxcbiAgICAgICAgODIsXG4gICAgICAgIDIzNyxcbiAgICAgICAgNzAsXG4gICAgICAgIDE2LFxuICAgICAgICA1MSxcbiAgICAgICAgMTU0LFxuICAgICAgICAxMzksXG4gICAgICAgIDUsXG4gICAgICAgIDkyLFxuICAgICAgICAxNzEsXG4gICAgICAgIDcsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjAsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjA1LFxuICAgICAgICAyMDIsXG4gICAgICAgIDIwOSxcbiAgICAgICAgOTAsXG4gICAgICAgIDIyLFxuICAgICAgICAxODMsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjQxLFxuICAgICAgICA4MixcbiAgICAgICAgOTIsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNTEsXG4gICAgICAgIDMsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTQzLFxuICAgICAgICAxMzYsXG4gICAgICAgIDk0LFxuICAgICAgICAxOTgsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTIxLFxuICAgICAgICAxMDYsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTk1LFxuICAgICAgICAzNCxcbiAgICAgICAgMTc4LFxuICAgICAgICAyMDEsXG4gICAgICAgIDU1LFxuICAgICAgICAxMTUsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTI0LFxuICAgICAgICAxODUsXG4gICAgICAgIDIwLFxuICAgICAgICAxMzFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDU4LFxuICBcImFkdlNlY3JldEtleVwiOiBcIkhWUkMzQnRZZEdBYTlJWW5DOXZPSEZBSUU3UGFnVmhMSVIwZTBPTWhjT3M9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjI1ODg0MDA1NzNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjA5NUM5NDA0NDZBMDlGNERDMEYzRkZBODJBOEI3RDJDXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTczMzMxMTg2MFxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIyNTg4NDAwNTczQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJFMjY5NjY3NzdCQjg0RTYzREZBMDAzRUMxQzEzNkM3N1wiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MzMzMTE4NjVcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwidzZESHlETDlTOGFac2JLc3FPOWhxQVwiLFxuICBcInBob25lSWRcIjogXCJjMmQ3NjYwNS01YjUxLTQ4MDUtOWQxNy1iODFiMTNlMjQ5YTVcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjU0LFxuICAgICAgMTk5LFxuICAgICAgMTcxLFxuICAgICAgMTc1LFxuICAgICAgMTA5LFxuICAgICAgMTkwLFxuICAgICAgMjMyLFxuICAgICAgMTgsXG4gICAgICAyMzQsXG4gICAgICAxMjcsXG4gICAgICAzOCxcbiAgICAgIDEyNixcbiAgICAgIDYyLFxuICAgICAgMTE1LFxuICAgICAgMTQwLFxuICAgICAgMTIzLFxuICAgICAgMTIwLFxuICAgICAgMzcsXG4gICAgICAyMTgsXG4gICAgICAyMThcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiBmYWxzZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDk4LFxuICAgICAgMjMsXG4gICAgICAxNjUsXG4gICAgICA3NCxcbiAgICAgIDQ2LFxuICAgICAgNjYsXG4gICAgICAxMDIsXG4gICAgICAyMTYsXG4gICAgICAxNDIsXG4gICAgICA5OSxcbiAgICAgIDEyNCxcbiAgICAgIDQwLFxuICAgICAgMjEzLFxuICAgICAgMjE4LFxuICAgICAgMTA3LFxuICAgICAgMTc5LFxuICAgICAgMjA3LFxuICAgICAgNDYsXG4gICAgICAyNDUsXG4gICAgICA1NFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0oycnRzY0dFTzM2d0xvR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiRzRIR0U4aWdOdUpueWhSQ2trTlEwbk54cVNTVEhxWWs1RVRRUFJsV1lGcz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJ2VlAzWFI2aE1vWUNIWGxxUkZNVUdVWVdWc2JVZjFDbUJqOFg5UVJxMXk1bWlCQ3ZXdTNkOHBMcjFJdHBxS05ITWJWYVQ4SkxaOG9nanJqcW41bk1BZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJLblB5Yzd2YzE3T1dQK0hsbHlWdDlKR1VkeTJTc3RBdTlBSFNQOW10OVh1UGU0UVNtV2FpRTRXdWErUUM0NFIyLzAxNGo3WHpwQ0plOGhSOUxtMWtoZz09XCJcbiAgfSxcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIyNTg4NDAwNTczOjI1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyNzIxMjk0NjM0MzkzOTE6MjVAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwi4KaU4KejzaHNnOKDn82izaHhjZ3wnZi+8J+RkeKDn+KDnfCdmYnhrLzig5/wn5yL8J2RqM+I8J2SgvCdko/DuPCdkozguY/wnZKLyahcIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIyNTg4NDAwNTczOjI1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICA2NyxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAzNixcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDkxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzMzMTE4NTcsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFDVCtcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUNUKy5qc29uIjogIntcImtleURhdGFcIjpcIkxneU9aL2hDa0RpNk9VRzRnd1VzNld3UVhUK256Vmc4V2JQNU84K29zU009XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTc2MDQwMDc5NyxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzMzMzExODU5OTY2XCJ9Igp9"  // PUT your SESSION_ID 


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
