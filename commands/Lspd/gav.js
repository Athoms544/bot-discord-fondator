const { MessageEmbed } = require("discord.js");

module.exports.run = (client, message, args) => {
    const now = new Date()
    const heure = now.getHours();
    const minute = now.getMinutes();

    const minuteFin = minute + 15
    const heureFin = heure
    
    if (minuteFin > 59) {
        heureFin2 = heureFin + 1
        minuteFin2 = minuteFin - 60 

        const user = args[0];
        const raison = args[1];

        const embed = new MessageEmbed()
            .setAuthor(message.mentions.users.first().username, message.mentions.users.first().avatarURL())
            .setTitle("Garde à vue")
            .setColor("#DC143C")
            .setDescription(`Le citoyen ${user} a été mis en garde à vue par l'officier ${message.author}.`)
            .addField("Raison", `${raison}`)
            .addField("Début:", `${heure}:${minute}`)
            .addField("Fin:", `${heureFin2}:${minuteFin2}`)
            .setThumbnail("https://www.info-juri.fr/wp-content/uploads/2015/07/Tout-savoir-sur-la-proc%C3%A9dure-de-garde-%C3%A0-vue.jpg")
            .setFooter("Attendez 15 min !");

        message.channel.send(embed);
    } else {
        const user = args[0];
        const raison = args[1];

        const embed = new MessageEmbed()
            .setAuthor(message.mentions.users.first().username, message.mentions.users.first().avatarURL())
            .setTitle("Garde à vue")
            .setColor("#DC143C")
            .setDescription(`Le citoyen ${user} a été mis en garde à vue par l'officier ${message.author}.`)
            .addField("Raison", `${raison}`)
            .addField("Début:", `${heure}:${minute}`)
            .addField("Fin:", `${heureFin}:${minuteFin}`)
            .setThumbnail("https://www.info-juri.fr/wp-content/uploads/2015/07/Tout-savoir-sur-la-proc%C3%A9dure-de-garde-%C3%A0-vue.jpg")
            .setFooter("Attendez 15 min !");

        message.channel.send(embed);
    }
    
    
}

module.exports.help = {
    name: "gav",
    aliases: ["gav"],
    category: "lspd",
    description: "Mets un joueur en gav",
    cooldown: 10,
    usage: '<@user> <raison>',
    isUserAdmin: false,
    permissions: false,
    args: true
}