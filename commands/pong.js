module.exports = {
  name: 'pong',
  discription: "You will be pinged!!",
  execute(message, args){

    message.channel.send('ping!');
  }
}
