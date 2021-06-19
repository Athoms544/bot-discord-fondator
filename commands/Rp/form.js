const { MessageEmbed } = require("discord.js")

module.exports.run = (client, message, args) => {
    const user = message.mentions.users.first() || "les <@&832277871250112544>"

    const embed = new MessageEmbed()
        .setTitle("Demande d'inscription")
        .setDescription(`Salut ${user} ! \nEst-ce que c'est possible que tu fasses ta candidature en complétant le formulaire dans <#832341584389341204> s'il te plait.\nTu as juste à cliquer sur le lien du google form et nous t'accepterons 😀 !`)
        .setColor("#dc143c")
        .setFooter(message.author.username, message.author.avatarURL());

    message.channel.send(embed);
}

module.exports.help = {
    name: "form",
    aliases: ["f", "formulaire"],
    category: "rp",
    description: "Demande à qqn de faire sa candidaure écrite !",
    cooldown: 0,
    usage: '<@user>',
    isUserAdmin: false,
    permissions: false,
    args: false
}