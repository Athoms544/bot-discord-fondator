const { MessageEmbed } = require("discord.js")

module.exports.run = (client, message, args) => {
    const jour = args[0] || "Non défini"
    const heure = args[1] || "Non défini"

    const embed = new MessageEmbed()

        .setAuthor("LSPD")
        .setColor("#6171FD")
        .setTitle(`<:athomscity:853959116929105920>  Annonce Session ${jour} à ${heure}  <:athomscity:853959116929105920>`)
        .setDescription(`Qui sera présent ? \n\nAbsent : ❌ \n\n DEA : 🚔 \n\n FBI : 🛩️ \n\n SWATT : 🚛`)
        .setThumbnail("https://cdn.discordapp.com/attachments/838382164571586570/852141241109184562/Logo.jpg")
        .setTimestamp()

    jour != "Non défini" && heure != "Non défini" ? message.channel.send(embed).then(async msg => {
        await msg.react('❌');
        await msg.react('🚔');
        await msg.react('🛩️');
        await msg.react('🚛');
    }) : message.reply("Commande mal effectuée !")
}

module.exports.help = {
    name: "session-lspd",
    aliases: ["sess-lspd", "game-lspd", "vote-lspd"],
    category: "lspd",
    description: "Fait un vote session lspd",
    cooldown: 10,
    usage: '<jour> <heure>',
    isUserAdmin: false,
    permissions: false,
    args: true
}