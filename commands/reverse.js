const Discord = require("discord.js")

module.exports = {
    name: 'reverse',
    description: 'Reverses text.',
    usage: '<text>',
    args: true,
	async execute(bot, message, args){
    message.channel.send(args.join(' ').split('').reverse().join(''));
	},
};