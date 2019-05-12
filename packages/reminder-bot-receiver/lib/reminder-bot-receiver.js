// packages/reminder-bot-receiver/lib/reminder-bot-receiver.js
exports.reminderBotReceiver = (event, context) => {
 const pubSubMessage = event;
 const name = pubSubMessage.data ?
  Buffer.from(pubSubMessage.data, 'base64').toString() :
  'World';
console.log(`Cześć, ${name}!`);
};
