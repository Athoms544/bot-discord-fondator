const { MessageEmbed } = require("discord.js")

module.exports.run = (client, message, args) => {
    const embed = new MessageEmbed()
        .setAuthor(message.author.username, message.author.avatarURL())
        .setTitle("Machine à sous")
        .setDescription("Tu peux miser pour gagner de l'argent !\nCommande: \`.slot-machine <mise>\`")
        .addField("Comment jouer:", "Il faut juste miser de l'argent et ensuite essayer d'alligner 3 couleurs !")
        .setColor("#77b5fe")

    message.channel.send(embed);
}

module.exports.help = {
    name: "machine-info",
    aliases: ["m-i"],
    category: "casino",
    description: "Affiche les explication de la machine à sous !",
    cooldown: 10,
    usage: '',
    isUserAdmin: false,
    permissions: false,
    args: false
}