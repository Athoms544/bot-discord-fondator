module.exports.run = (client, message, args) => {
    message.channel.send(args.join(" "))
}

module.exports.help = {
    name: "say",
    aliases: ["repeat", "rep"],
    category: "autres",
    description: "Répéte le message d'un utilisateur !",
    cooldown: 10,
    usage: "<votre message>",
    isUserAdmin: false,
    permissions: false,
    args: true 
}