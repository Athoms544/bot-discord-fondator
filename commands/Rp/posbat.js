const { MessageEmbed } = require("discord.js")

module.exports.run = (client, message, args) => {
    const embed = new MessageEmbed()
        .setAuthor(message.author.username, message.author.avatarURL())
        .setColor("#8273F8")
        .setTitle("Position")
        .setDescription(`${message.author} prends la position d'un Batiment il peut ouvrir sa maps pendant \`5\` sec max durant tout le chemin!`)

    message.channel.send(embed);
}

module.exports.help = {
    name: "posbat",
    aliases: ["posbat"],
    category: "rp",
    description: "Prendre la position d'un lieux",
    cooldown: 300,
    usage: '',
    isUserAdmin: false,
    permissions: false,
    args: false
}