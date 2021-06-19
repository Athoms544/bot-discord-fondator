const { MessageEmbed } = require("discord.js");

module.exports.run = (client, message, args) => {
    const qui = args[0];
    const raison = args.splice(1).join(' ');

    const embed = new MessageEmbed()
        .setAuthor(message.author.username, message.author.avatarURL())
        .setColor("#F05B5B")
        .setTitle("🚓 ・ Appel d'urgence")
        .setDescription(`${message.author} a composé le numéro d'urgence du **${qui}**.`)
        .addField("Raison:", `${raison}`)
        .addField(`${qui}:`, `Vous avez reçu la localisation de ${message.author} sur votre GPS !`)
        .setTimestamp("https://cdn.discordapp.com/attachments/778713489144938516/795098641094017024/police2.gif");

    message.channel.send("||<@&832645175515807784>||");
        
    message.channel.send(embed);
} 

module.exports.help = {
    name: "urgence",
    aliases: ["u"],
    category: "lspd",
    description: "Fait un appel d'urgence!",
    cooldown: 0,
    usage: '<fbi | dea | swat> <raison>',
    isUserAdmin: false,
    permissions: false,
    args: true
}