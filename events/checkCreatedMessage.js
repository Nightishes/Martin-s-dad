const { client } = require("../index.js");

function checkCreatedMessage(client) {
  client.on("messageCreate", (message) => {
    let userMessage = message.content.toLowerCase();

    function getRandomInt(max) {
      return Math.floor(Math.random() * max);
    }

    const badWordsDogshit = [
      "dogshit",
      "garbage",
      "i am bad",
      "read a guide",
      "so bad at videogames",
      "just press 1-2-3",
      "utter garbage",
      "just press 123",
      "I am just average",
    ];

    const pizzaReminder = ["promise", "pizza"];

    const ninaTrigger = ["nina", "fiancee", "minrin"];

    const messageDogshitArray = [
      "https://cdn.discordapp.com/attachments/826368743197900810/1131255391607607387/MARTIN.jpg?ex=66594c6f&is=6657faef&hm=150ad387db06da69389c55116fbbb0b112930a060a8372e30dbc3642090d4d4d&",
      "Don't make me post it, Martin.",
      "Insert fflogs parsing.",
    ];
    const proposalCompliment = [
      "Proposal: a word of appreciation is appropriate.",
    ];

    function dogshitPlayerMessage() {
      let randomMessage = getRandomInt(messageDogshitArray.length);
      message.channel.send(messageDogshitArray[randomMessage]);
    }

    if (message.author.id === "235817429031321601") {
      if (badWordsDogshit.find((x) => userMessage.includes(x))) {
        dogshitPlayerMessage();
      }

      if (pizzaReminder.find((x) => userMessage.includes(x))) {
        message.channel.send(
          "https://cdn.discordapp.com/attachments/772520066708799489/921469704357445632/Screenshot_20211217_193124.jpg?ex=66596ec9&is=66581d49&hm=a73144c1ba785f57a3eb71d8f2325637bccf09e6dce442442cf445b910902df9&"
        );
      }

      if (ninaTrigger.find((x) => userMessage.includes(x))) {
        message.channel.send(
          "Proposal: Continue to provide care for this person"
        );
      }
    }
  });
}

module.exports = { checkCreatedMessage };
