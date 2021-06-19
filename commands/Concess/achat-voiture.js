const { MessageEmbed } = require("discord.js")

module.exports.run = (client, message, args) => {
    const user = args[0]
    const voiture = args[1]
    const prix = args[2]

    const embed = new MessageEmbed()
        .setColor("dc143c")
        .setTitle("Nouvel achat de voiture !")
        .setThumbnail("https://data.photofunky.net/output/image/2/3/5/3/235354/photofunky.gif")
        .setDescription(`🚗 | ${user} vient d’acheter une voiture et obtient le certificat d’achat ! \n
        Voiture : ${voiture} \n
        Prix : ${prix} \n
        Vendeur : ${message.author}`)
    
    message.channel.send(embed)
}

module.exports.help = {
    name: "achat-voiture",
    aliases: ["a-v"],
    category: "misc",
    description: "Valide un achat voiture",
    cooldown: 10,
    usage: '@user <voiture> <prix>',
    isUserAdmin: false,
    permissions: false,
    args: true
}