const Discord = require("discord.js");
const moment = require('moment');
var ffmpeg = require('ffmpeg');
 
const client = new Discord.Client();
const config = require("./config.json");
const package = require("./package.json");
 const getUserFromMention = (mention, client) => {
  if (!mention) return;
  if (mention.startsWith('<@') && mention.endsWith('>')) {
      mention = mention.slice(2, -1);
      if (mention.startsWith('!')) {
          mention = mention.slice(1);
      }
      return client.users.cache.get(mention);
  }
}

  

client.login(config.token);
