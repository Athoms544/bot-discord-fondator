const { MessageEmbed } = require("discord.js")

module.exports.run = (client, message, args) => {
    const now = new Date()
    const heure   = now.getHours();
    const minute  = now.getMinutes();

    const embed = new MessageEmbed()
        .setAuthor(message.author.username, message.author.avatarURL())
        .setColor("#B8860B")
        .setDescription(`${message.author} viens juste de partir de la session !`)
        .addField("Heure:", `${heure}:${minute}`)
        .setFooter("J'espère que ça ta plus !")
        .setThumbnail("https://cdn.discordapp.com/attachments/853973991465943060/854031564602474506/parti.gif");

    message.channel.send(embed);
};

module.exports.help = {
    name: "parti",
    aliases: ["parti"],
    category: "session",
    description: "Annonce le départ d'un joueur",
    cooldown: 10,
    usage: '',
    isUserAdmin: false,
    permissions: false,
    args: false
}