const Discord = require("discord.js");
const colors = require("../colors");
const botconfig = require("../botconfig");

module.exports.run = async (bot, message, args) => {
  let reason = args.join(" ");
  if(!reason) return;

  let embed = new Discord.RichEmbed()
    .setTitle(`Suggestion`)
    .setColor(colors.green)
    .setDescription(reason)
    .addField("Suggestion By", `<@${message.author.id}>`, true);

  let suggestChannel = message.guild.channels.find(`name`, "suggestions");
  if (!suggestChannel)
    return message.channel.send("Couldn't find a suggestions channel!");

  suggestChannel.send(embed).then(m => {
    m.react("👍")
      .then(() => m.react("🤔"))
      .then(() => m.react("👎"));
  });
  message.channel.bulkDelete(1);
};

module.exports.help = {
  name: "suggest"
};
