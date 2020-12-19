module.exports = {
  name: 'ping',
  discription: "You will be ponged!!",
  execute(message, args){

    message.channel.send('pong!');
  }
}
