const { MessageEmbed } = require("discord.js");

module.exports.run = (client, message, args) => {
    const lapinRole = message.guild.roles.cache.get("855336729095569419");
    const waaRole = message.guild.roles.cache.get("855336763346255874");
    const lapinEmoji = message.guild.emojis.cache.get("855342287747940362")
    const waaEmoji = message.guild.emojis.cache.get("855342262694051890")

    const embed = new MessageEmbed()
        .setTitle("Rôles")
        .setDescription("Cliquez sur une des réactions ci-dessous pour obtenir le rôle correspondant")
        .setColor("#dc143c")
        .addField(
            "Rôles disponnibles:",
            `
            ${lapinEmoji} - ${lapinRole.toString()}
            ${waaEmoji} - ${waaRole.toString()}
            `
        );

    message.channel.send(embed).then(async msg => {
        await msg.react(lapinEmoji);
        await msg.react(waaEmoji);
    })
}

module.exports.help = {
    name: "allroles",
    aliases: ["allroles"],
    category: "reactions",
    description: "Renvoie un message avec des réaction !",
    cooldown: 10,
    usage: '',
    isUserAdmin: false,
    permissions: true,
    args: false
}