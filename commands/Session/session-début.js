const { MessageEmbed } = require("discord.js")

module.exports.run = (client, message, args) => {
    const lanceur = args[0]

    const embed = new MessageEmbed()
    .setAuthor(message.mentions.users.first().username, message.mentions.users.first().avatarURL())
        .setTitle(`La session a été lancée !`)
        .setDescription(`Demadez ${lanceur} en amis et rejoignez sa session !\n<@&832283571069780059>`)
        .setFooter("Bon rp à tous")
        .setColor("#dc143c")
        .setThumbnail("https://i.pinimg.com/originals/04/8c/8e/048c8e251c1a6a1a9f8b35f68dcd8b52.gif")
        .setTimestamp(); 
    
    message.channel.send(embed);
}

module.exports.help = {
    name: "session-début",
    aliases: ["dsess", "d-sess"],
    category: "session",
    description: "Lance la session",
    cooldown: 10,
    usage: '<@lanceur>',
    isUserAdmin: false,
    permissions: false,
    args: true
}