const {
  messageDadHome,
  messageDogshitArray,
  pizzaReminderDay,
  erpReminderDay,
  ninaCompliment,
  randomMartinMoment,
  proposalCompliment,
} = require("../helpers/dictionnaryQuote");

const { dadJokeDictionnary } = require("../helpers/dadDictionnary");

const { getRandomInt } = require("../helpers/randomHelpers");

const {
  badWordsDogshit,
  pizzaReminder,
  randomMartinFact,
  erpTrigger,
  ninaTrigger,
  dadIsComingHome,
  sproutSpotted,
  triggerBotKnowledge,
  AUTHOR_WHITELIST,
  dadJokeTrigger,
  dadNegationTrigger,
} = require("../helpers/dictionaryKeywords");

const handleCreatedMessage = (message) => {
  const messageContent = message.content.toLowerCase();
  if (!AUTHOR_WHITELIST.includes(message.author.id)) {
    return;
  }

  const isSubjectSelf = (messageContent) => {
    let testingMessageContent = new RegExp(/(\bi'?\s*a?m?\b)\s/gi);

    return testingMessageContent.test(messageContent);
  };

  const isMessageTrigger = (messageContent, dictionary) => {
    return dictionary.some((word) => messageContent.includes(word));
  };

  const isAboutSelf = isSubjectSelf(messageContent);
  const isGettingDogshit = isMessageTrigger(messageContent, badWordsDogshit);
  const isGettingErp = isMessageTrigger(messageContent, erpTrigger);
  const isGettingPizza = isMessageTrigger(messageContent, pizzaReminder);
  const isGettingNina = isMessageTrigger(messageContent, ninaTrigger);
  const isGettingDadHome = isMessageTrigger(messageContent, dadIsComingHome);
  const isGettingSprout = isMessageTrigger(messageContent, sproutSpotted);
  const isGettingKnowledge = isMessageTrigger(
    messageContent,
    triggerBotKnowledge
  );
  const isGettingRandom = isMessageTrigger(messageContent, randomMartinFact);
  const isGettingDadJoke = isMessageTrigger(messageContent, dadJokeTrigger);
  const isGettingNoU = isMessageTrigger(messageContent, dadNegationTrigger);

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

  function dadJokePlayerMessage() {
    let randomMessage = getRandomInt(dadJokeDictionnary.length);
    message.channel.send(dadJokeDictionnary[randomMessage]);
  }

  const arrayCommand = [
    dogshitPlayerMessage,
    dadPlayerMessage,
    sproutPlayerMessage,
    pizzaPlayerMessage,
    ninaComplimentPlayerMessage,
    erpPlayerMessage,
    randomMartinPlayerMessage,
    dadJokePlayerMessage,
  ];

  if (AUTHOR_WHITELIST[0].includes(message.author.id)) {
    if (isAboutSelf && isGettingDogshit) {
      dogshitPlayerMessage();
    }

    if (isGettingPizza) {
      pizzaPlayerMessage();
    }
    if (isGettingErp) {
      erpPlayerMessage();
    }

    if (isGettingDadHome) {
      dadPlayerMessage();
    }

    if (isGettingSprout) {
      sproutPlayerMessage();
    }

    if (isGettingNina) {
      ninaComplimentPlayerMessage();
    }
  }

  function randomCommand() {
    let randomMessage = getRandomInt(arrayCommand.length);
    arrayCommand[randomMessage]();
  }

  if (AUTHOR_WHITELIST.includes(message.author.id)) {
    if (isGettingKnowledge) {
      randomCommand();
    }

    if (isGettingRandom) {
      randomMartinPlayerMessage();
    }

    if (isGettingDadJoke) {
      dadJokePlayerMessage();
    }

    if (isGettingNoU) {
      message.channel.send("No u");
    }
  }
};

function checkCreatedMessage(client) {
  client.on("messageCreate", handleCreatedMessage);
}

module.exports = { checkCreatedMessage };
