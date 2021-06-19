const { MessageEmbed } = require("discord.js")

module.exports.run = (client, message, args) => {
    const jour = args[0] || "Non défini"
    const heure = args[1] || "Non défini"
    const lanceur = message.mentions.users.first() || "On sais pas encore !"

    const embed = new MessageEmbed()

        .setAuthor("Athoms City")
        .setColor("dc143c")
        .setTitle(`<:athomscity:853959116929105920>  Annonce Session ${jour} à ${heure}  <:athomscity:853959116929105920>`)
        .setDescription(`Ajouter le lanceur : ${lanceur} \n\n Présent : ✅ \n\n Absent : ❌ \n\n LSPD : 🚔 \n\n EMS : 🚑 \n\n En retard : ⏰ \n\n Je ne sais pas : 🤷‍♂️ \n\n A moins de 10 ✅ la session ne sera pas lancée, <@&832283571069780059>.`)
        .addField("Attention:", "Les <@&832645175515807784> et <@&832641822600855602> lorsque vous votez :oncoming_police_car: ou :ambulance:  votez aussi le :white_check_mark: ou le :alarm_clock: !")
        .setThumbnail("https://cdn.discordapp.com/attachments/838382164571586570/852141241109184562/Logo.jpg")
        .setTimestamp()

    jour != "Non défini" && heure != "Non défini" ? message.channel.send(embed).then(async msg => {
        await msg.react('✅');
        await msg.react('❌');
        await msg.react('🚔');
        await msg.react('🚑');
        await msg.react('⏰');
        await msg.react('🤷‍♂️');
    }) : message.reply("Commande mal effectuée")
}

module.exports.help = {
    name: "session",
    aliases: ["sess", "game", "vote"],
    category: "session",
    description: "Fait un vote session",
    cooldown: 10,
    usage: '<jour> <heure> <lanceur>',
    isUserAdmin: false,
    permissions: false,
    args: true
}