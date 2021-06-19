const { MessageEmbed } = require("discord.js")

module.exports.run = (client, message, args) => {
    const avec = args[0] || "personne";
    
    const embed = new MessageEmbed()
        .setColor("#dc143c")
        .setTitle("🤕 ・ Accident")
        .setDescription(`${message.author} a fait un accident !`)
        .addField("Avec qui ?:", `Avec ${avec}`, true)
        .addField("Séquelles:", "Il a très mal à la jambe droite et est un peu étourdis", true)
        .addField("Appel en cours", "☎️ <@&832641822600855602> •••\n☎️ <@&832645175515807784> •••")
        .setImage("https://cdn.discordapp.com/attachments/838382164571586570/853563982119829534/accident.gif")
        .setTimestamp();
    
    message.channel.send(embed);
}

module.exports.help = {
    name: "accident",
    aliases: ["acc"],
    category: "rp",
    description: "Préviens que qqn a fait un accident !",
    cooldown: 300,
    usage: '',
    isUserAdmin: false,
    permissions: false,
    args: false
}