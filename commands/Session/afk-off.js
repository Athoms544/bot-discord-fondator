const { MessageEmbed } = require("discord.js");

module.exports.run = (client, message, args) => {
    const embed = new MessageEmbed()
        .setAuthor(message.author.username, message.author.avatarURL())
        .setTitle("AFK OFF")
        .setDescription(`${message.author} n'est plus AKF !\n<@&846803744569032755>`)
        .setThumbnail("https://cdn.discordapp.com/attachments/853973991465943060/853981884442476544/afkoff.jpeg")
        .setColor("#FFD700")
        .setFooter("Bon rp à toi !");

    message.channel.send(embed);
}

module.exports.help = {
    name: "afk-off",
    aliases: ["AFK-off"],
    category: "session",
    description: "Finir le AFK",
    cooldown: 10,
    usage: '',
    isUserAdmin: false,
    permissions: false,
    args: false
}