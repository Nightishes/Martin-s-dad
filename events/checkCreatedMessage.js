const {
  messageDadHome,
  messageDogshitArray,
  pizzaReminderDay,
  erpReminderDay,
  ninaCompliment,
  randomMartinMoment,
  proposalCompliment,
} = require("../helpers/dictionnaryQuote");

const {
  badWordsDogshit,
  pizzaReminder,
  randomMartinFact,
  erpTrigger,
  ninaTrigger,
  dadIsComingHome,
  sproutSpotted,
  triggerBotKnowledge,
} = require("../helpers/dictionaryKeywords");

function checkCreatedMessage(client) {
  client.on("messageCreate", (message) => {
    let userMessage = message.content.toLowerCase();

    function getRandomInt(max) {
      return Math.floor(Math.random() * max);
    }

    function dadPlayerMessage() {
      let randomMessage = getRandomInt(messageDadHome.length);
      message.channel.send(messageDadHome[randomMessage]);
    }

    function sproutPlayerMessage() {
      let randomMessage = getRandomInt(proposalCompliment.length);
      message.channel.send(proposalCompliment[randomMessage]);
    }

    function randomMartinPlayerMessage() {
      let randomMessage = getRandomInt(randomMartinMoment.length);
      message.channel.send(randomMartinMoment[randomMessage]);
    }

    function pizzaPlayerMessage() {
      let randomMessage = getRandomInt(pizzaReminderDay.length);
      message.channel.send(pizzaReminderDay[randomMessage]);
    }

    function ninaComplimentPlayerMessage() {
      let randomMessage = getRandomInt(ninaCompliment.length);
      message.channel.send(ninaCompliment[randomMessage]);
    }
    function erpPlayerMessage() {
      let randomMessage = getRandomInt(erpReminderDay.length);
      message.channel.send(erpReminderDay[randomMessage]);
    }

    function dogshitPlayerMessage() {
      let randomMessage = getRandomInt(messageDogshitArray.length);
      message.channel.send(messageDogshitArray[randomMessage]);
    }

    const arrayCommand = [
      dogshitPlayerMessage,
      dadPlayerMessage,
      sproutPlayerMessage,
      pizzaPlayerMessage,
      ninaComplimentPlayerMessage,
      erpPlayerMessage,
      randomMartinPlayerMessage,
    ];

    if (message.author.id === "1204195877208465421") {
      if (badWordsDogshit.find((x) => userMessage.includes(x))) {
        dogshitPlayerMessage();
      }

      if (pizzaReminder.find((x) => userMessage.includes(x))) {
        pizzaPlayerMessage();
      }
      if (erpTrigger.find((x) => userMessage.includes(x))) {
        erpPlayerMessage();
      }

      if (dadIsComingHome.find((x) => userMessage.includes(x))) {
        dadPlayerMessage();
      }

      if (sproutSpotted.find((x) => userMessage.includes(x))) {
        sproutPlayerMessage();
      }

      if (ninaTrigger.find((x) => userMessage.includes(x))) {
        ninaComplimentPlayerMessage();
      }
    }

    function randomCommand() {
      let randomMessage = getRandomInt(arrayCommand.length);
      arrayCommand[randomMessage]();
    }

    if (
      message.author.id === "235817429031321601" ||
      message.author.id === "231755306928046080" ||
      message.author.id === "185436977305354240"
    ) {
      if (triggerBotKnowledge.find((x) => userMessage.includes(x))) {
        randomCommand();
      }

      if (randomMartinFact.find((x) => userMessage.includes(x))) {
        randomMartinPlayerMessage();
      }
    }
  });
}

module.exports = { checkCreatedMessage };
