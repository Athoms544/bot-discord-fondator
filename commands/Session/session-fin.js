const { MessageEmbed } = require("discord.js")

module.exports.run = (client, message, args) => {
    const raison = args.join(" ")
    const embed = new MessageEmbed()
        .setAuthor(message.author.username, message.author.avatarURL())
        .setTitle(`La session est finie !`)
        .setDescription(`J'espère que ça vous a plus !`)
        .addField("Raison:", `${raison}`)
        .setFooter("Merci et à la prochaine !")
        .setColor("#dc143c")
        .setThumbnail("https://i.pinimg.com/originals/04/8c/8e/048c8e251c1a6a1a9f8b35f68dcd8b52.gif")
        .setTimestamp(); 
    
    message.channel.send(embed);
}

module.exports.help = {
    name: "session-fin",
    aliases: ["fsess", "f-sess"],
    category: "session",
    description: "Lance la session",
    cooldown: 10,
    usage: '<raison>',
    isUserAdmin: false,
    permissions: false,
    args: true
}