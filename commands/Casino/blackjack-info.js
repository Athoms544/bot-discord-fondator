const { MessageEmbed } = require("discord.js")

module.exports.run = (client, message, args) => {
    const embed = new MessageEmbed()
        .setAuthor(message.author.username, message.author.avatarURL())
        .setTitle("BlackJack")
        .setDescription("Tu peux miser pour gagner de l'argent !\nCommande: \`.blackjack <mise>\`")
        .addField("Comment jouer:", "Le but du black-jack et de battre la main du croupier, sans dépasser 21 et avec le moins de carte !")
        .setColor("#77b5fe")

    message.channel.send(embed);
}

module.exports.help = {
    name: "blackjack-info",
    aliases: ["bj-i"],
    category: "casino",
    description: "Affiche les explication du blackjack",
    cooldown: 10,
    usage: '',
    isUserAdmin: false,
    permissions: false,
    args: false
}