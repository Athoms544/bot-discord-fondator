const { MessageEmbed } = require("discord.js");

module.exports.run = (client, message, args) => {
    const user = message.mentions.users.first();
    
    const embed = new MessageEmbed()
        .setAuthor(message.mentions.users.first().username, message.mentions.users.first().avatarURL())
        .setTitle("Visite médicale")
        .setColor("#DC143C")
        .setDescription(`Le citoyen ${user} a reçu sa visite médicale de la part de le médecin ${message.author}.`)
        .setThumbnail("https://images.prismic.io/cadremploi-edito/0f96587e-6159-4d41-8bf3-8f651f052c43_shutterstock_1703608693.jpg?auto=compress,format&rect=0,26,1000,500&w=800&h=400")
        .setFooter("Bravo !");

    message.channel.send(embed);
}

module.exports.help = {
    name: "vm",
    aliases: ["vm"],
    category: "ems",
    description: "Valide la visite médicale d'un membre",
    cooldown: 10,
    usage: '<@user>',
    isUserAdmin: false,
    permissions: false,
    args: true
}