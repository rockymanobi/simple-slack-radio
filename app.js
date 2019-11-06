const config = require('config');
const player = require('play-sound')();
const exec = require('child_process').exec;
const { RTMClient } = require('@slack/rtm-api');

const token = config.slackBotToken;
const rtm = new RTMClient(token);

rtm.start()
  .catch(console.error);
rtm.on('message', (event) => {
  console.log(event);
  if(event.type !== 'message'){ return }
  if(event.subtype){ return }
  if(!event.text){ return }
  play(event.text)
})
setTimeout(()=>{
  rtm.sendMessage('起動したよ', config.appChannelId)
},2000)

function play(text) {
  exec(`say "${text.replace(/<(?:[^<>]|<[^>]*>)*>/g,"")}"`)
}
