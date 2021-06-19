const { MessageEmbed } = require("discord.js");

module.exports.run = (client, message, args) => {
    const user = args[0];
    const prix = args[1];
    const raison = args[2];

    const embed = new MessageEmbed()
        .setAuthor(message.mentions.users.first().username, message.mentions.users.first().avatarURL())
        .setTitle("Contravention")
        .setColor("#DC143C")
        .setDescription(`Le citoyen ${user} a reçu une contravention de la part de l'officier ${message.author}.`)
        .addField("Prix", `${prix} $`)
        .addField("Raison", `${raison}`)
        .setThumbnail("https://france3-regions.francetvinfo.fr/image/emFl9gyDWeNw0-7OWCWACibcVQM/600x400/regions/2020/06/09/5edf2c5e4e57b_maxstockworld345512-3143739.jpg")
        .setFooter("Payez au plus vite !");

    message.channel.send(embed);
}

module.exports.help = {
    name: "contravention",
    aliases: ["ammandes", "contrav"],
    category: "lspd",
    description: "Donne une ammandes à un joueur",
    cooldown: 10,
    usage: '<@user> <prix> <raison>',
    isUserAdmin: false,
    permissions: false,
    args: true
}