const { MessageEmbed } = require("discord.js");

module.exports.run = (client, message, args) => {
    const véhicule = args.join(" ");

    const embed = new MessageEmbed()
        .setAuthor(message.author.username, message.author.avatarURL())
        .setTitle("Fourrière")
        .setColor("#DC143C")
        .setDescription(`Un véhicule a été mis à la fourrière !\n<@&832283571069780059>`)
        .addField("Voiture", `${véhicule}`)
        .setThumbnail("https://data.photofunky.net/output/image/2/3/5/3/235354/photofunky.gif")
        .setFooter("Que le propriétaire aille la chercher");

    message.channel.send(embed);
}

module.exports.help = {
    name: "fourrière",
    aliases: ["four"],
    category: "lspd",
    description: "Mets un véhicule à la fourrière",
    cooldown: 10,
    usage: '<véhicule>',
    isUserAdmin: false,
    permissions: false,
    args: true
}