const { MessageEmbed } = require("discord.js");

module.exports.run = (client, message, args) => {
    const pers_en_session = args.join(' ');

    const embed = new MessageEmbed()
        .setAuthor(message.author.username, message.author.avatarURL())
        .setTitle("Contrôle Map !")
        .setDescription("Nous demandons à tout le monde d'envoyer une photo de son écran pour la vérification !\n")
}

module.exports.help = {
    name: "controle-map",
    aliases: ["cmap"],
    category: "rp",
    description: "Annonce un contrôle map !",
    cooldown: 0,
    usage: '<pers_en_session',
    isUserAdmin: false,
    permissions: false,
    args: true
}