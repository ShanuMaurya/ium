const Discord = require("discord.js");
const fs = require("fs");

module.exports.noPerms = (message, perm) => {
    message.channel.send(`**You do not have permission to use the \`${perm}\` command.**`);
}

module.exports.noTetra = (message, dev) => {
    message.channel.send(`**Only my developer can use the \`${dev}\` command.**`);
}
