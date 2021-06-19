const { MessageEmbed } = require("discord.js")

module.exports.run = (client, message, args) => {
    const user = args[0]
    const commentaire = args[1]

    const embed = new MessageEmbed()
        .setColor("dc143c")
        .setTitle("Nouveau permis !")
        .setThumbnail("https://cap.img.pmdstatic.net/fit/http.3A.2F.2Fprd2-bone-image.2Es3-website-eu-west-1.2Eamazonaws.2Ecom.2Fcap.2F2018.2F11.2F20.2F2d75bdb1-5180-487f-8504-635732b9f6a0.2Ejpeg/750x375/background-color/ffffff/quality/70/ornikar-lauto-ecole-a-prix-casse-1316743.jpg")
        .setDescription(`🚛 | ${user} vient de passer le permis camion ! \n
        Commentaire : ${commentaire} \n
        Moniteur : ${message.author}`)
    
    message.channel.send(embed)
}

module.exports.help = {
    name: "permis-camion",
    aliases: ["p-c"],
    category: "concess",
    description: "Valide un permis camion",
    cooldown: 10,
    usage: '@user <commentaire>',
    isUserAdmin: false,
    permissions: false,
    args: true
}