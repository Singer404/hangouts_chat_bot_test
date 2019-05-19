const chrono = require('chrono-node')
const { sendMessage } = require('../pubsub')

const formatReminderDate = (userInput) => chrono.parseDate(userInput).toLocaleString();

module.exports = async (chatEventBody) => {
  console.log('Processing response for event type MESSAGE')

  await sendMessage({
    spaceName: chatEventBody.space.name,
    threadName: chatEventBody.message.thread.name,
    message: `Mam to! Przypomne Ci o tym ${formatReminderDate(chatEventBody.message.text)}`
  })
} 
