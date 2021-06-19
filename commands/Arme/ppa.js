const { MessageEmbed } = require("discord.js")

module.exports.run = (client, message, args) => {
    const user = args[0]
    const commentaire = args[1]

    const embed = new MessageEmbed()
        .setColor("dc143c")
        .setTitle("Nouveau permis !")
        .setThumbnail("https://cdn.discordapp.com/attachments/853973991465943060/854321338352664597/arme.gif")
        .setDescription(`🔫 | ${user} vient de passer le permis ppa ! \n
        Commentaire : ${commentaire} \n
        Armurier : ${message.author}`);
    
    message.channel.send(embed)
}

module.exports.help = {
    name: "ppa",
    aliases: ["ppa"],
    category: "arme",
    description: "Valide un permis ppa",
    cooldown: 10,
    usage: '<@user> <commentaire>',
    isUserAdmin: false,
    permissions: false,
    args: true
}