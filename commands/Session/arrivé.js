const { MessageEmbed } = require("discord.js")

module.exports.run = (client, message, args) => {
    const now = new Date()
    const heure   = now.getHours();
    const minute  = now.getMinutes();
    
    const embed = new MessageEmbed()
        .setAuthor(message.author.username, message.author.avatarURL())
        .setColor("#9370DB")
        .setDescription(`${message.author} viens juste d'arriver en session !`)
        .addField("Heure:", `${heure}:${minute}`)
        .setFooter("Bon rp à toi !")
        .setThumbnail("https://cdn.discordapp.com/attachments/853973991465943060/854030821148983326/arrive.gif");

    message.channel.send(embed);
};

module.exports.help = {
    name: "arrivé",
    aliases: ["arrivé"],
    category: "session",
    description: "Annonce l'arrivée d'un joueur",
    cooldown: 30,
    usage: '',
    isUserAdmin: false,
    permissions: false,
    args: false
}
