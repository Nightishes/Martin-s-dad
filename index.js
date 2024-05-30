const fs = require("node:fs");
const path = require("node:path");
const { Client, Collection, GatewayIntentBits } = require("discord.js");
const { token } = require("./config.json");

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMessages,
  ],
});

client.commands = new Collection();
const foldersPath = path.join(__dirname, "commands");
const commandFolders = fs.readdirSync(foldersPath);

for (const folder of commandFolders) {
  const commandsPath = path.join(foldersPath, folder);
  const commandFiles = fs
    .readdirSync(commandsPath)
    .filter((file) => file.endsWith(".js"));
  for (const file of commandFiles) {
    const filePath = path.join(commandsPath, file);
    const command = require(filePath);
    if ("data" in command && "execute" in command) {
      client.commands.set(command.data.name, command);
    } else {
      console.log(
        `[WARNING] The command at ${filePath} is missing a required "data" or "execute" property.`
      );
    }
  }
}

const eventsPath = path.join(__dirname, "events");
const eventFiles = fs
  .readdirSync(eventsPath)
  .filter((file) => file.endsWith(".js"));

for (const file of eventFiles) {
  const filePath = path.join(eventsPath, file);
  const event = require(filePath);
  if (event.once) {
    client.once(event.name, (...args) => event.execute(...args));
  } else {
    client.on(event.name, (...args) => event.execute(...args));
  }
}

client.on("messageCreate", (message) => {
  let splitMessage = message.content.toLowerCase().split(" ");

  const badWordsDogshit = ["dogshit", "garbage"];

  const pizzaReminder = ["promise", "pizza"];

  if (message.author.id === "1204195877208465421") {
    if (
      (splitMessage != 1 &&
        splitMessage.some((x) => badWordsDogshit.includes(x))) ||
      message.content.toLowerCase().includes("read a guide") ||
      message.content.toLowerCase().includes("so bad at videogames") ||
      message.content.toLowerCase().includes("just press 1-2-3") ||
      message.content.toLowerCase().includes("just press 123") ||
      message.content.toLowerCase().includes("utter garbage") ||
      message.content.toLowerCase().includes("I am just average")
    ) {
      message.channel.send(
        "https://cdn.discordapp.com/attachments/826368743197900810/1131255391607607387/MARTIN.jpg?ex=66594c6f&is=6657faef&hm=150ad387db06da69389c55116fbbb0b112930a060a8372e30dbc3642090d4d4d&"
      );
    }

    if (
      splitMessage != 1 &&
      splitMessage.some((x) => pizzaReminder.includes(x))
    ) {
      message.channel.send(
        "https://cdn.discordapp.com/attachments/772520066708799489/921469704357445632/Screenshot_20211217_193124.jpg?ex=66596ec9&is=66581d49&hm=a73144c1ba785f57a3eb71d8f2325637bccf09e6dce442442cf445b910902df9&"
      );
    }

    if (splitMessage != 1 && splitMessage.includes("Nina")) {
      message.channel.send(
        "Proposal: Continue to provide care for this person"
      );
    }
  }
});

client.login(token);
