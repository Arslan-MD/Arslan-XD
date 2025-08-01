// config.js
const fs = require("fs");
require("dotenv").config();

const config = {
  SESSION_ID: process.env.SESSION_ID || "ARSLAN-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib1AxcHMxUGZkb05vcHRoVkFzL3U1aVVaNzAvVDZEZlNVTFZDTzJPd2NXST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSmF4c20yY21xK2pGbXNkNTdKNzhmNHlzcDNwN0x5U0FmeE9VZDhaK21pbz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJXQ0szY3Q2WVU1SVpYRTJ4T0gwZDk5NHN3dGU1REdqY2Z0ZWtxMmlyaEgwPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJXQjc1TmlCWFkxS0NWS2xGdzArYk85TDg0d2MrbndGd1J5a2pBZEsrR21JPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IitDbXczZkpkWTB6aHlXZkEzcGJDSDZBQkVkTzFMZHJlV3M4QjlqSGd2RWM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImhRekxJUDhxZHVZbjRRaVRHRmxyaHQwL1lJUWVUQXhZdENab3hMcWJKMnc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSUo5cHdPdEZPM2JldnB6dVpneS8rUVdHNy9KYktENWZtSmJNV0pXaVIwND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSjJ4RzRJTm1oa1cvdmhyNGVhUlRyd1hjV0VlMVdCTEIyK0FzMDY4RG53dz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im50SDd0VGJ3ZHEvOWZ6Z2FaK3Y4ZTdCd3MxK2NoSWd1aUQ4Q2VXbWVpaXN5ZXB5Rm5QTDJjb280TUVlMjdidy9OQzRDR1AwREZhNXhqbUZLY3FYYkNRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6OTksImFkdlNlY3JldEtleSI6IkRocllWV0wrWW14d05CMFhXczJBOXlySGxqOWZ1S1JiUmZGZHE2Y3dyYmM9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJyZWdpc3RlcmVkIjp0cnVlLCJwYWlyaW5nQ29kZSI6IlhEOVQ4QU5XIiwibWUiOnsiaWQiOiI5MjMzOTI2MTYyNjM6NTZAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiYXJzbGFuIiwibGlkIjoiMTYzMDg5MDg1NDI3ODk2OjU2QGxpZCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDUGJZdytvQ0VPV1Jzc1FHR0FJZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiSmI0NmxVNEd1M2s5Z1cycG1Zak9IZVlFUGpiVGtrUWVFbGhYd09aeU9YRT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiWm50Wkx4Wlg5M2hjR0lQK2djQUx5U0pJTW9IWE1jUGxOQVNSY2tQN3BMYUhoeXpCS2YzN1pqNFNEd201OGF0RkV3VlRJaGlYS2ptYU9WeVo1cGxxRFE9PSIsImRldmljZVNpZ25hdHVyZSI6IjhUQ25na2Zic0tzcEpZYkw0bTlLREJpUUYzVzJPTVJFYUF6VXVMa1RnK3h5Zm05Z29YU2hMK0VOL2t0WUR2RUt5c0lYcVVpc1IwYTQ0U2M3NW4wbkFnPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTIzMzkyNjE2MjYzOjU2QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlNXK09wVk9CcnQ1UFlGdHFabUl6aDNtQkQ0MjA1SkVIaEpZVjhEbWNqbHgifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBSUlDQT09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc1NDA0MDU1MSwibGFzdFByb3BIYXNoIjoiUFdrNUIiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUU3WiJ9",
  AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN !== undefined ? process.env.AUTO_STATUS_SEEN === 'true' : true, 
  AUTO_DL: process.env.AUTO_DL !== undefined ? process.env.AUTO_DL === 'true' : false,
  AUTO_READ: process.env.AUTO_READ !== undefined ? process.env.AUTO_READ === 'true' : false,
  AUTO_TYPING: process.env.AUTO_TYPING !== undefined ? process.env.AUTO_TYPING === 'true' : false,
  AUTO_RECORDING: process.env.AUTO_RECORDING !== undefined ? process.env.AUTO_RECORDING === 'true' : false,
  ALWAYS_ONLINE: process.env.ALWAYS_ONLINE !== undefined ? process.env.ALWAYS_ONLINE === 'true' : false,
  AUTO_REACT: process.env.AUTO_REACT !== undefined ? process.env.AUTO_REACT === 'true' : false,
   /*auto block only for 212 */
  AUTO_BLOCK: process.env.AUTO_BLOCK !== undefined ? process.env.AUTO_BLOCK === 'true' : true,
  
  
  REJECT_CALL: process.env.REJECT_CALL !== undefined ? process.env.REJECT_CALL === 'true' : false, 
  NOT_ALLOW: process.env.NOT_ALLOW !== undefined ? process.env.NOT_ALLOW === 'true' : true,
  MODE: process.env.MODE || "public",
  OWNER_NAME: process.env.OWNER_NAME || "",
  OWNER_NUMBER: process.env.OWNER_NUMBER || "",
  GEMINI_KEY: process.env.GEMINI_KEY || "AIzaSyCUPaxfIdZawsKZKqCqJcC-GWiQPCXKTDc",
  WELCOME: process.env.WELCOME !== undefined ? process.env.WELCOME === 'true' : false, 
};


module.exports = config;
