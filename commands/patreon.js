const Discord = require("discord.js");
let inline = true

module.exports = {
    name: 'patreon',
    description: 'Provides a link to ium\'s patreon.',
    aliases: ['donate'],
	async execute(bot, message, args){
        let botEmbed = new Discord.RichEmbed()
        .setColor('#000000')
        .setDescription("ium's patreon: https://www.patreon.com/ium")
    
        message.channel.send(botEmbed);
	},
};