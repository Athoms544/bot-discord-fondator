const { MessageEmbed } = require("discord.js")

module.exports.run = (client, message, args) => {
    const motif = args.join(" ")
    const heure = () => Math.floor(Math.random() * 120) + 1;
    
    const embed = new MessageEmbed()
        .setColor("#dc143c")
        .setTitle("🤕 ・ Coma")
        .setDescription(`${message.author} est dans le coma !`)
        .addField("Motif:", `${motif}`, true)
        .addField("Séquelles:", `Il oublie ce qu'il s'est passé les \`${heure()}\` minutes précédant l'acte !`, true)
        .addField("Appel en cours", "☎️ <@&832641822600855602> •••\n☎️ <@&832645175515807784> •••")
        .setImage("https://media1.tenor.com/images/407a435d179a40d371f0fc15920d18bc/tenor.gif")
        .setTimestamp();
    
    message.channel.send(embed);
}

module.exports.help = {
    name: "coma",
    aliases: ["coma"],
    category: "rp",
    description: "Préviens que qqn est dans le coma !",
    cooldown: 300,
    usage: '<motif>',
    isUserAdmin: false,
    permissions: false,
    args: true
}