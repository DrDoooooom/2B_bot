const Discord = require('discord.js');

const client = new Discord.Client(); //creating a new discord client.

client.once('ready', () =>{
  console.log('Power on!!');
});                                   //for turning on the bot.

const {prefix, token} = require('./config.json');

const fs = require('fs');            //file save is required.

client.commands = new Discord.Collection(); //collection of commands.

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js')); //checking only .js files.
for(const file of commandFiles){
   const command = require(`./commands/${file}`); //to loop .js files.

   client.commands.set(command.name, command);
}

client.on('message', message =>{

  if(!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).split(/ +/);
  const commandName = args.shift().toLowerCase();

  if (!client.commands.has(commandName,)) return;

  const command = client.commands.get(commandName)

  try {
      command.execute(message, args);
  } catch (error) {
      console.error(error);
      message.reply('there was an error trying to execute that command!');
}
});
// login to discord application
client.login(token);
