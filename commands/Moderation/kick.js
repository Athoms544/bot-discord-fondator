const { MessageEmbed } = require("discord.js");

module.exports.run = (client, message, args) => {
    let user = message.mentions.users.first();
    let reason = (args.splice(1).join(' ') || "Aucune raison spécifiée");
    user ? message.guild.member(user).kick(reason) : message.channel.send("L'utilisateur n'exise pas !");

    const embed = new MessageEmbed()
        .setAuthor(`${user.username} (${user.id})`)
        .setColor("#ffa500")
        .setDescription(`**Action**: kick\n**Raison**: ${reason}`)
        .setThumbnail(user.avatarURL())
        .setTimestamp()
        .setFooter(message.author.username, message.author.avatarURL());

    client.channels.cache.get("851532450865348608").send(embed);
};

module.exports.help = {
    name: "kick",
    aliases: ["kick"],
    category: "moderation",
    description: "Kick un utilisateur",
    cooldown: 10,
    usage: "@user <raison>",
    isUserAdmin: true,
    permissions: true,
    args: true 
}