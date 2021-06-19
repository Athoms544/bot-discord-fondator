const { MessageEmbed } = require("discord.js");

module.exports.run = (client, message, args) => {
    const user = args[0];
    const prix = args[1];
    const raison = args.splice(2).join(' ');

    const embed = new MessageEmbed()
        .setColor("#dc143c")
        .setTitle("Facture")
        .setDescription(`${user} a une facture !`)
        .addField("De qui", `${message.author}`)
        .addField("Prix", `${prix}`)
        .addField("Pourquoi", `${raison}`)
        .setThumbnail("https://thumbs.dreamstime.com/b/le-document-affiche-l-ic%C3%B4ne-de-paiement-facture-pi%C3%A8ces-dessin-vecteur-115465600.jpg")
    
    message.channel.send(embed);
}

module.exports.help = {
    name: "facture",
    aliases: ["facture"],
    category: "rp",
    description: "Donne une facture à un joueur",
    cooldown: 10,
    usage: '<@user> <prix> <raison>',
    isUserAdmin: false,
    permissions: false,
    args: true
}