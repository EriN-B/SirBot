const Discord = require('discord.js')
const Version = Discord.version
const Bot = new Discord.Client();
const Prefix = "sir";
const token = "NzEyNzE1MjMwNDU0NjEyMDQw.XsWDcA.9T6euVSgr5DWLdeBxYEz8PEl_FA";



Bot.on("ready", () => {
    console.log("Bot is Onlie");
    console.log(token);
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

