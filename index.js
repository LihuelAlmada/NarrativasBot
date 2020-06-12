// NzE4MDc5NTc0MjA1NzkyMzM3.XtjqPQ.Hv3J4xTyP7fL3HFamMeBDjtx3T4

const Discord = require('discord.js');
//Client = bot
const client = new Discord.Client();

client.on('ready', () => {
    console.log(`Bot is ready as ${client.user.tag}!`);
});

client.on('message', message => {
    //recibiendo el mensaje
    console.log(message.content);
    if (message.content === 'ping') {
        message.reply('pong');
    }
});
client.login('NzE4MDc5NTc0MjA1NzkyMzM3.XtjqPQ.Hv3J4xTyP7fL3HFamMeBDjtx3T4');