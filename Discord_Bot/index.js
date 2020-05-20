const Discord = require('discord.js')
const Version = Discord.version
const Bot = new Discord.Client();
const Prefix = "/";
const token = "NzEyNzE1MjMwNDU0NjEyMDQw.XsWD3A.Y85VVihhh_l2FLkCwyk4Znyv-g4";



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

    switch(arg[0]){
        case 'ping':
            message.channel.send('pong');
            break;
        case 'github':
            message.channel.send("This is the Link to this Projects Github: https://github.com/EriN-B/SirBot");
        break;            
    }
})

Bot.login(token);

