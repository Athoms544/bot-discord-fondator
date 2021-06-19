const { MessageEmbed } = require("discord.js");

module.exports.run = (client, message, args) => {
    const min = args[0];
    const embed = new MessageEmbed()
        .setAuthor(message.author.username, message.author.avatarURL())
        .setTitle("AFK")
        .setDescription(`${message.author} est AKF\n<@&846803744569032755>`)
        .addField("Durée:", `${min} minutes`)
        .setThumbnail("https://cdn.discordapp.com/attachments/853973991465943060/853974231565467668/afk.gif")
        .setColor("#ff8000")
        .setFooter("/!\\ Pas plus de deux fois par session !");

    message.channel.send(embed);
}

module.exports.help = {
    name: "afk",
    aliases: ["AFK"],
    category: "session",
    description: "Se mettre AFK",
    cooldown: 300,
    usage: '<minutes>',
    isUserAdmin: false,
    permissions: false,
    args: true
}