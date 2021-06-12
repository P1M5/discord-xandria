const { Client } = require("discord.js");
const dotenv = require("dotenv").config();
const client = new Client();

client.on("message", function(message) {
	if(!message.content.startsWith(process.env.prefix) || message.author.bot) return;
	if(message.content.toLowerCase() === "--hello") {
		message.reply("Hi, I am a music bot in development");
	}
});


client.login(process.env.BOT_TOKEN);
