const { Client } = require('discord.js');
const client = new Client();
const prefix = process.env.PREFIX;
  client.on('ready', function() {
  console.log('Bot is ready!');
});

client.on('message', async function(msg) {
  if (!msg.content.startsWith(prefix) || msg.author.bot){
    return;
  }
  const [cmd, ...args] = msg.content.trim().substr(1).split(" ");
  if((cmd === 'spam' && args[0] != "<!@406586973776773121>")){
    if(args[0] === "<!@406586973776773121>")return;
    let spam = setInterval(repeat, 1100),counter = 1;
    let times = args[1];
    if(times > 999)times = 999;
    function repeat(){
      if(counter >= args[1]){
        clearInterval(spam);
      }
      msg.channel.send(args[0]);
      counter++;
    }
    return;
    console.log("Job is finished");
  }
  else if(cmd === 'stop'){
    return;
  }
  else if (cmd === 'add'){
    return msg.reply(args.map(Number).reduce((a, b) => a + b));
  }

   else if(cmd === '8ball'){
    let r = ["Without a doubt", "It is certain", "It is decidedly so", "Yes definitely", "You may rely on it", "Most likely", "Outlook good", "As I see it yes", "Yes", "Signs point to yes", "Very doubtful", "My reply is no", "Don't count on it", "Outlook not so good", "Better not tell you now", "My sources say no", "Ask again later", "Reply hazy, try again", "Cannot predict now"];
    let ans = Math.floor(Math.random()*r.length-1);
    return msg.reply(r[ans]);
  }
  else if(cmd === 'check'){
    msg.channel.send(`<@!${msg.mentions.users.first().id}>`);
    // (`${cmd} ${args}`);
  }
});

client.login(process.env.Token);