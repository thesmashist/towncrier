// Require
require('dotenv').config();
const TOKEN = process.env.TOKEN;

// Required
const { Client, Intents, Collection } = require('discord.js');

// Initialize bot
const bot = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

const prefix = '-';
const fs = require('fs');

bot.commands = new Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles) {
    const command = require(`./commands/${file}`);

    bot.commands.set(command.name, command);
}

bot.once('ready', () => {
    console.log("Town Crier is online!");
});

bot.on("message", message => {
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if (command == "hello") {
        bot.commands.get('hello').execute(message, args);
    }
});


bot.login(TOKEN);