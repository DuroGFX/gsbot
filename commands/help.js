const Discord = require("discord.js");
const colors = require("../colors")
const botconfig = require("../botconfig")

module.exports.run = async (bot, message, args) => {
  
  const embed = new Discord.RichEmbed()
  .setTitle("Help Command")
  .setColor(colors.yellow)
  .setDescription("Note: You must have Developer mode enabled on Discord to get message IDs.")
  .addField('Giveaway Commands', `=giveaway (channel) (time) (amount of winners) (prize) - Start a giveaway\n=reroll (message id) -  Re-roll a giveaway\n=end (message id) - Cut a giveaway short`)
  .addField("Suggestion Command", `=suggest (suggestion) - Make a suggestion to the server!`)
  
  message.channel.send(embed);
  
};

module.exports.help = {
  name: "stop"
};
