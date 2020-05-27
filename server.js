const Eris = require('eris');
const bot = new Eris(process.env.DISCORD_BOT_TOKEN);   // Replace DISCORD_BOT_TOKEN in .env with your bot accounts token
 
bot.on('ready', () => {                                // When the bot is ready
    console.log('the bot is online!');                             // Log "Ready!"
});
 
bot.on('messageCreate', (msg) => {                     // When a message is created
    if(msg.content.includes('cdc.help')) {                 // If the message content includes "1337"
        bot.createMessage(msg.channel.id, 'what do you need help with? do cdc.cmds or cdc.staffhelp');  // Send a message in the same channel with "damn it"
    }
     
});
 bot.on('messageCreate', (msg) => {
    if(msg.content.includes('cdc.cmds')) {                 // If the message content includes "1337"
       bot.createMessage(msg.channel.id, 'the commands are cdc.help cdc.staffhelp cdc.sevrer cdc.rules cdc.dayz-server');  // Send a message in the same channel with "damn it"
    }
 });
bot.connect();                                         // Get the bot to connect to Discordc