const { MessageEmbed } = require("discord.js");

module.exports.run = (client, message, args) => {
    const note = args[0];
    const avis = args.splice(1).join(' ');
    
    const embed = new MessageEmbed()
        .setAuthor(message.author.username, message.author.avatarURL())
        .setColor('#64B3F0')
        .setTitle("Nouvel avis !")
        .setDescription(`${message.author} a posté un nouvel avis ! Merci à toi !`)
        .addField("Avis:", `${avis}`);


        if (note === "0") {
            message.channel.send(embed).then(async msg => {
                await msg.react('0️⃣');
            })
        } else if (note === "1") {
            message.channel.send(embed).then(async msg => {
                await msg.react('1️⃣');
            })
        } else if (note === "2") {
            message.channel.send(embed).then(async msg => {
                await msg.react('2️⃣')
            })
        } else if (note === "3") {
            message.channel.send(embed).then(async msg => {
                await msg.react('3️⃣')
            })
        } else if (note === "4") {
            message.channel.send(embed).then(async msg => {
                await msg.react('4️⃣')
            })
        } else if (note === "5") {
            message.channel.send(embed).then(async msg => {
                await msg.react('5️⃣')
            })
        } else if (note === "6") {
            message.channel.send(embed).then(async msg => {
                await msg.react('6️⃣')
            })
        } else if (note === "7") {
            message.channel.send(embed).then(async msg => {
                await msg.react('7️⃣')
            })
        } else if (note === "8") {
            message.channel.send(embed).then(async msg => {
                await msg.react('8️⃣')
            })
        } else if (note === "9") {
            message.channel.send(embed).then(async msg => {
                await msg.react('9️⃣')
            })
        } else if (note === "10") {
            message.channel.send(embed).then(async msg => {
                await msg.react('🔟')
            })
        } else {
            message.channel.send("Commande mal effectuée !")
        }

        message.delete();
    }

module.exports.help = {
    name: "avis",
    aliases: ["av"],
    category: "repertoire",
    description: "Mets un avis",
    cooldown: 5,
    usage: '<note (max. 10)> <avis>',
    isUserAdmin: false,
    permissions: false,
    args: true
}