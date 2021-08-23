// Require
const { Client, Intents } = require('discord.js');

const bot = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
const { token }  = require('./config.json');



bot.once('ready', () => {
    console.log("Town Crier is online!");
});

bot.on("message", message => {
    if (message.content == "hello") {
        message.reply("Hear ye!");
    }
});


bot.login(token);