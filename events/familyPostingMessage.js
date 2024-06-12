const handleCreatedMessage = (message) => {
  const messageContent = message.content.toLowerCase();

  if (/family/.test(messageContent)) {
    let reply = {
      stickers: ["1023208164595863673"],
    };
    message.channel.send(reply);
  }
};

function familyPostingMessage(client) {
  client.on("messageCreate", handleCreatedMessage);
}

module.exports = { familyPostingMessage };
