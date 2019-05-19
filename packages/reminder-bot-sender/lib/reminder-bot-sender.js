// packages/reminder-bot-sender/lib/reminder-bot-sender.js
exports.reminderBotSender = async (event, context) => {
  console.log(`Input received:
    Event: ${JSON.stringify(event)}
    Context: ${JSON.stringify(context)}`)
}
