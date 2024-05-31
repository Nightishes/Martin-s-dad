const { client } = require("../index.js");

function checkCreatedMessage(client) {
  client.on("messageCreate", (message) => {
    let userMessage = message.content.toLowerCase();

    function getRandomInt(max) {
      return Math.floor(Math.random() * max);
    }

    const triggerBotKnowledge = ["tell me dad, what is your wisdom today?"];

    const badWordsDogshit = [
      "dogshit",
      "garbage",
      "i am bad",
      "read a guide",
      "so bad at videogames",
      "just press 1-2-3",
      "utter garbage",
      "just press 123",
      "i am just average",
      "i'm just average",
      "im so fucking bad at the game",
      "trash",
      "bad at the game",
      "im a retard",
      "i'm a retard",
      "better than me",
      "game is just easy",
      "me being a bad player",
      "average player",
      "everyone here is a better player than me",
      "incredibly easy game",
      "easy game",
      "anyone can do what i do",
      "the very proof",
      "everyone can be as good as me",
      "braindead",
    ];

    const pizzaReminder = ["promise", "pizza"];

    const randomMartinFact = ["a fun fact about martin"];

    const erpTrigger = [
      "i don't erp",
      "im reformed",
      "i am reformed",
      "I quit erping",
      "erp",
      "uwu",
    ];

    const ninaTrigger = [
      "nina",
      "fiancee",
      "minrin",
      "@231755306928046080",
      "fluffy",
    ];

    const dadIsComingHome = ["milk", "dad"];

    const sproutSpotted = ["watching cutscenes", "sprout", "new player"];

    const messageDadHome = [
      "Hey, I'm finally back from the sto- What are you doing my son?!",
      "A moment please, dearest son, I require some milk. Be sure to wait for me!",
      "https://tenor.com/view/kratos-dad-came-home-with-gif-27372972",
      "https://tenor.com/view/failure-gif-23242816",
      "https://cdn.discordapp.com/attachments/938012257751797831/1246061826156789814/Martins_Dad.jpg?ex=665b0502&is=6659b382&hm=b1f8987c4296ed7c0f4db61160e79cb3f568ff0fc5d12e35f29f3cf0bd24921f&",
    ];

    const messageDogshitArray = [
      "https://cdn.discordapp.com/attachments/826368743197900810/1131255391607607387/MARTIN.jpg?ex=66594c6f&is=6657faef&hm=150ad387db06da69389c55116fbbb0b112930a060a8372e30dbc3642090d4d4d&",
      "Don't make me post it, Martin.",
      "Insert fflogs parsing.",
      "https://cdn.discordapp.com/attachments/668268259702865923/1245643167349608591/image.png?ex=665ad09a&is=66597f1a&hm=3e15425e244c84cb8d49bd04e62c2c894b2c8066adc336829862e900628fdadd&",
      "https://cdn.discordapp.com/attachments/826368743197900810/1199691492680278118/image.png?ex=665a6a85&is=66591905&hm=cbf184232c7b1d52e05e10d98d5edce3703f7c0939f22c657762f4e5b5d23178&",
      "An opinion is a judgment, viewpoint, or statement that is not conclusive, rather than facts, which are true statements.",
      "Proposals are merely recommendations based on data provided by unit Martin.",
      "Proposal: Needlessly repeating conversations on the same topic is a waste of energy resources.",
    ];

    const pizzaReminderDay = [
      "https://cdn.discordapp.com/attachments/772520066708799489/921469704357445632/Screenshot_20211217_193124.jpg?ex=66596ec9&is=66581d49&hm=a73144c1ba785f57a3eb71d8f2325637bccf09e6dce442442cf445b910902df9&",
      "https://cdn.discordapp.com/attachments/668283306349166612/1246029992362643519/image.png?ex=665ae75c&is=665995dc&hm=6d5a4fbae6766dbce95218fcd3a908e3fbb57108f1050a891ba4040159705ae9&",
    ];
    const erpReminderDay = [
      "https://cdn.discordapp.com/attachments/668283306349166612/1246030156305399888/image.png?ex=665ae783&is=66599603&hm=ff6349f9cf75c654c61099368e4891c9fc8d2320a9cc4b22a946edf674683d40&",
      ":suspicious~2:",
      "https://cdn.discordapp.com/attachments/1127954716370944001/1237000620343300188/image.png?ex=665a5ada&is=6659095a&hm=754fbf4ff963b0c3867821211e1fe20787754cd598a153df27f79aa3e45fbf5c&",
      "https://tenor.com/view/hornyjail-bonk-baseballbat-kitty-cat-gif-19401897",
      "https://cdn.discordapp.com/attachments/905222590065442887/1246080302133153833/RDT_20240531_1536532069944591037616351.jpg?ex=665b1637&is=6659c4b7&hm=b7d35c8cb8619244a4091c3994d53ba9f61cf307a2cbce4ac35d0f9227d21228&",
    ];
    const proposalCompliment = [
      "Proposal: a word of appreciation is appropriate.",
      "Proposal: Let people enjoy their game.",
      "Proposal: Needlessly repeating conversations on the same topic is a waste of energy resources.",
      "Analysis: This area is composed of crystallized sprouts and dead mentors. Hypothesis: The enemy must have placed them here deliberately.",
      "Analysis: A sprout is currently watching a cutscene. Proposal: Pat the sprout. This objective has been assigned top priority.",
    ];

    const ninaCompliment = [
      "Proposal: Continue to provide care for this person.",
      "Proposal: This Ahri figurine will perfectly suit her desk.",
      "Proposal: Give attention to this person.",
      "Look, that ultimate Risen Legend Ahri skin isn't gonna buy itself...",
    ];

    const randomMartinMoment = [
      "https://youtu.be/w-FcFuCb4uw?si=aq-eazV_wLKCtaY1",
      "https://cdn.discordapp.com/attachments/1149839176578105484/1185940059476733962/Screenshot_20220909-002845_Discord.jpg?ex=665a7c7f&is=66592aff&hm=47bad4fe425565fcd9fac685d1dbc0de1734143f38ce738a8ce3e7d25287b793&",
      "https://youtu.be/pQ00U0v6S9s",
      "https://cdn.discordapp.com/attachments/1149839176578105484/1168976035652583536/Tera_2023.10.31_-_19.10.53.04.DVR.mp4?ex=665abc05&is=66596a85&hm=fb03d492c9eb849b6ca39b6f41895479e0490737a572dbf91ae21cda46647f77&",
      "https://cdn.discordapp.com/attachments/1149839176578105484/1160636500556394577/Untitled.mp4122.mp4?ex=665ab7b9&is=66596639&hm=ca8ae1719b043c7b68fd83f8b6bf5d44eaf5a0eeb8dde73802ed08b8db727af3&",
      "https://media.discordapp.net/attachments/826368743197900810/1013954611993923674/raiton_these_nuts.mp4?ex=665b0711&is=6659b591&hm=8d7809a9fe5f8d59ad67d5c586e36873259bd8a1b8ffbc4e01dfc87f8eab61e4&",
      "https://youtu.be/7wMnhOYbQas",
      "https://cdn.discordapp.com/attachments/1246084001366544435/1246092696825892894/exodia.png?ex=665b21c2&is=6659d042&hm=b578b5f272e7e9d7a6d2e66f35acc4bd73c7c1b0a4b537536877cddb96139e1e&",
    ];

    function dadPlayerMessage() {
      let randomMessage = getRandomInt(messageDadHome.length);
      messageDadHome[randomMessage]();
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

    const arrayCommand = [
      dogshitPlayerMessage,
      dadPlayerMessage,
      sproutPlayerMessage,
      pizzaPlayerMessage,
      ninaComplimentPlayerMessage,
      erpPlayerMessage,
      randomMartinPlayerMessage,
    ];

    function randomCommand() {
      let randomMessage = getRandomInt(arrayCommand.length);
      arrayCommand[randomMessage]();
    }

    if (message.author.id === "235817429031321601") {
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
