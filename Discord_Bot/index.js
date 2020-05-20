const Discord = require('discord.js')
const Version = Discord.version
const Bot = new Discord.Client();
const Prefix = "sir";


const token = "NzEyNzE1MjMwNDU0NjEyMDQw.XsVnNg.uy6XW2Z_az9WXlyamBgkeZ4Hr7c";

Bot.on("ready", () => {
    console.log("Bot is Onlie");
})

Bot.on("message", msg=>{
    if(msg.content==="test"){
        msg.reply("The Bot is working propperly");
    }
})


Bot.on("message", message=>{
    
    let arg = message.content.substring(Prefix.length).split(" ");

    switch(arg[1]){
        case 'ping':
            message.channel.send('pong');
            break;
        case 'info':
            if(arg[4] === 'Version'){
                message.channel.send(Version);
            }    
    }
})

Bot.login(token);

