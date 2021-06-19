const { MessageEmbed } = require("discord.js")

module.exports.run = (client, message, args) => {
    const user = message.mentions.users.first();

    const embed = new MessageEmbed()
        .setAuthor(message.author.username, message.author.avatarURL())
        .setColor("#DB8DF9")
        .setTitle("Position")
        .setDescription(`${message.author} prends la position d'un joueur. Si le joueur accepte alors tu peut ouvrir sa maps pendant \`5\` sec max durant tout le chemin!`)
        .addField("Joueur:", `${user}`)

    message.channel.send(embed).then(async msg => {
        await msg.react('✅');
    })
}

module.exports.help = {
    name: "posjoueur",
    aliases: ["posjoueur"],
    category: "rp",
    description: "Prendre la position d'un joueur",
    cooldown: 300,
    usage: '<@user>',
    isUserAdmin: false,
    permissions: false,
    args: true
}