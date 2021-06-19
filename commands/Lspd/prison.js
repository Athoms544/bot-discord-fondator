const { MessageEmbed } = require("discord.js");

module.exports.run = (client, message, args) => {
    const user = args[0];
    const temps = args[1];
    const raison = args[2];

    const embed = new MessageEmbed()
        .setAuthor(message.mentions.users.first().username, message.mentions.users.first().avatarURL())
        .setTitle("Prison")
        .setColor("#DC143C")
        .setDescription(`Le citoyen ${user} a été mis en prison par l'officier ${message.author}.`)
        .addField("Temps:", `${temps}`)
        .addField("Raison", `${raison}`)
        .setThumbnail("https://www.info-juri.fr/wp-content/uploads/2015/07/Tout-savoir-sur-la-proc%C3%A9dure-de-garde-%C3%A0-vue.jpg")
        .setFooter(`Attendez ${temps}`);

    message.channel.send(embed);
}

module.exports.help = {
    name: "prison",
    aliases: ["prison"],
    category: "lspd",
    description: "Mets un joueur en prison",
    cooldown: 10,
    usage: '<@user> <temps> <raison>',
    isUserAdmin: false,
    permissions: false,
    args: true
}