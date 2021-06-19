const { MessageEmbed } = require("discord.js")

module.exports.run = (client, message, args) => {
    const user = args[0]
    const moto = args[1]
    const prix = args[2]

    const embed = new MessageEmbed()
        .setColor("dc143c")
        .setTitle("Nouvel achat de moto !")
        .setThumbnail("https://cdn.discordapp.com/attachments/853973991465943060/854289861313691658/moto.gif")
        .setDescription(`🛵 | ${user} vient d’acheter une moto et obtient le certificat d’achat ! \n
        Voiture : ${moto} \n
        Prix : ${prix} \n
        Vendeur : ${message.author}`)
    
    message.channel.send(embed)
}

module.exports.help = {
    name: "achat-moto",
    aliases: ["a-m"],
    category: "concess",
    description: "Valide un achat moto",
    cooldown: 10,
    usage: '@user <moto> <prix>',
    isUserAdmin: false,
    permissions: false,
    args: true
}