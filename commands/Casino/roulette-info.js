const { MessageEmbed } = require("discord.js")

module.exports.run = (client, message, args) => {
    const embed = new MessageEmbed()
        .setAuthor(message.author.username, message.author.avatarURL())
        .setTitle("Roulette")
        .setDescription("Tu peux placer plusieur mises sur le plateau\nCommande: \`.roulette <mise> <place>\`")
        .addField("Multiplicateurs de paiement:", 
        "[x36] 1 nombre\n [x 3] Douzaine (1-12, 13-24, 25-36)\n[x 3] Collones (1st, 2nd, 3rd)\n[x 2] Moitiés (1-18, 19-36)\n[x 2] impair, pair (Odd/Even) \n[x 2] Couleurs (red, black)")
        .setImage("https://cdn.discordapp.com/attachments/506838906872922145/839184445453369374/unknown.png")
        .setColor("#77b5fe")

    message.channel.send(embed);
}

module.exports.help = {
    name: "roulette-info",
    aliases: ["r-i"],
    category: "casino",
    description: "Affiche les différante case de la roulette",
    cooldown: 10,
    usage: '',
    isUserAdmin: false,
    permissions: false,
    args: false
}