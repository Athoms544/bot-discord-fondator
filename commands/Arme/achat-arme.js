const { MessageEmbed } = require("discord.js")

module.exports.run = (client, message, args) => {
    const user = args[0]
    const arme = args[1]
    const prix = args[2]

    const embed = new MessageEmbed()
        .setColor("dc143c")
        .setTitle("Nouvel achat d' arme !")
        .setThumbnail("https://cdn.discordapp.com/attachments/832284733987749923/854299558204014632/arme.gif")
        .setDescription(`🔫 | ${user} vient d’acheter une arme et obtient le certificat d’achat ! \n
        Arme : ${arme} \n
        Prix : ${prix} \n
        Vendeur : ${message.author}`)
    
    message.channel.send(embed)
}

module.exports.help = {
    name: "achat-arme",
    aliases: ["a-a"],
    category: "arme",
    description: "Valide un achat arme",
    cooldown: 10,
    usage: '@user <arme> <prix>',
    isUserAdmin: false,
    permissions: false,
    args: true
}