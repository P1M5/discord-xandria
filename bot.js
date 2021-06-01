const { Client } = require("discord.js");
const config = require("./config.json");
const client = new Client();

client.on("message", function (message) {
    if(!message.content.startsWith(config.prefix) || message.author.bot) return;
    if(message.content.toLowerCase() === "--hello") {
        message.reply("Hi, I am a music bot in development");
    };
})


client.login(config.BOT_TOKEN);
