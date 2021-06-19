const { MessageEmbed } = require("discord.js")

module.exports.run = (client, message, args) => {
    const nHeure = args[0];
    const prix = args[1];
    const métier = args.splice(2).join(' ');

    const embed = new MessageEmbed()
        .setAuthor(message.author.username, message.author.avatarURL())
        .setTitle("Demande de salaire")
        .setDescription(`${message.author} fait une demande de salaire\n<@&846803744569032755>`)
        .addField("Nombre d'heure:", `${nHeure} heure(s)`)
        .addField("Prix:", `${prix}`)
        .addField("Métier:", `${métier}`)
        .setColor("#5DF2A0")
        .setFooter("Merci et bonne journée !");

    message.channel.send(embed);
}

module.exports.help = { 
    name: "salaire",
    aliases: ["sal", "dm-sal"],
    category: "session",
    description: "Demande un salaire !",
    cooldown: 10,
    usage: "<nbr_d'heure> <prix> <métier>",
    isUserAdmin: false,
    permissions: false,
    args: true
}