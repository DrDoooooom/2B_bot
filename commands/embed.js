const Discord = require('discord.js');
module.exports = {
  name: 'embed',
  discription: 'Embeds',
  execute(message, args) {
    const newEmbed = new Discord.MessageEmbed()
    .setColor('#282352')
    .setTitle('Check')
    .setURL('https://tenor.com/view/ok-okay-ok-sign-fake-smile-gif-7441317')
    .setDescription('This is a embed for checking.')
    .addFields(
      {name: 'Testing 1', value: 'Testing'},
      {name: 'Testing 2', value: 'f'},
      {name: 'Testing 3', value: 'sed lyf'}
    )
    .setImage('https://miro.medium.com/max/875/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg')
    .setFooter('Make sure to f.');
    message.channel.send(newEmbed);
  }
}
