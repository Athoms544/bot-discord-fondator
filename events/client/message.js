const { Collection } = require('discord.js');
const { PREFIX } = require("../../config");

module.exports = (client, message) => {
    if(!message.content.startsWith(PREFIX) || message.author.bot) return;
    const args = message.content.slice(PREFIX.length).split(/ +/);
    const commandName = args.shift().toLowerCase();
    const user = message.mentions.users.first();

    const command = client.commands.get(commandName) || client.commands.find(cmd => cmd.help.aliases && cmd.help.aliases.includes(commandName));
    if(!command) return;    
    
    if (command.help.permissions && !message.member.hasPermission("BAN_MEMBERS")) return message.reply("Tu n'as pas les permissions pour taper cette commande!")

    if (command.help.args && !args.length) {
      let noArgsReply = `Il me faut des arguments pour cette commande, ${message.author}!`

      if (command.help.usage) noArgsReply += `\nVoici comment utiliser la commande: \`${PREFIX}${command.help.name} ${command.help.usage}\``
      
      return message.channel.send(noArgsReply);
    }

    if (command.help.isUserAdmin && !user) return message.reply('il faut mentioner un utilisateur.')
    if (command.help.isUserAdmin && message.guild.member(user).hasPermission("BAN_MEMBERS")) return message.reply("Tu ne peux pas utiliser cette commande sur cet utilisateur !")

    if (!client.cooldowns.has(command.help.name)) {
      client.cooldowns.set(command.help.name, new Collection());
    }

    const timeNow = Date.now();
    const tStamps = client.cooldowns.get(command.help.name);
    const cdAmount = (command.help.cooldown || 0) * 1000; 

    if (tStamps.has(message.author.id)) {
      const cdExpirationTime = tStamps.get(message.author.id) + cdAmount;

      if(timeNow < cdExpirationTime) {
        timeLeft = (cdExpirationTime - timeNow) / 1000;
        if (timeLeft > 59) {
          message.reply(`merci d'attendre ${timeLeft.toFixed(0) / 60} minutes avant de réuiliser la commande \`${command.help.name}\`!`)
        } else {
          return message.reply(`merci d'attendre ${timeLeft.toFixed(0)} secondes avant de réuiliser la commande \`${command.help.name}\`!`)
        }
      }
    }

    tStamps.set(message.author.id, timeNow);
    setTimeout(() => tStamps.delete(message.author.id), cdAmount);

    command.run(client, message, args);
}