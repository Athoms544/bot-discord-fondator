const { MessageEmbed } = require('discord.js')

module.exports = (client, member) => {
  const embed = new MessageEmbed()
   .setAuthor(`${member.displayName} ( ${member.id} )`, member.user.displayAvatarURL())
   .setColor('#3cc751')
   .setFooter('Un utilisateur nous a quitté', client.user.avatarURL)
   .setTimestamp();


   client.channels.cache.get('851532450865348608').send(embed);
}