const Discord = require('discord.js');
const bot = new Discord.Client();

const PREFIX = '!'; 

bot.on('ready', () => {
    console.log('ready');
})


bot.on('message',message=>{

    let args = message.content.substring(PREFIX.length).split(" ");

    switch(args[0]){

        case 'info':
            message.channel.sendMessage('Voting will be closed at 10 pm EST today guys, please vote whenever u get the chance '
            +'\nOver at **#event-voting-channel** and **#time-voting-channel**'
            +'\n \nIts one of the **#the-ten-commandments** of the server to vote, so please vote whenever u get the chance'
            +' \n \nWe try to make everything easy for u guys, so you dont have to spend too much time on here:heart::heart: '
            +'\nand check out **#online-player-challenges** for amazing and fun challenges \n\n\nshimmy shanga !!');

        break;
    }
})

   
Client.login(process.env.BOT_TOKEN);
