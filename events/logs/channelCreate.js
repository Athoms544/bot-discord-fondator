const { MessageEmbed } = require("discord.js");

module.exports = async (client, channel) => {
    const fetchGuildAuditLogs = await channel.guild.fetchAuditLogs({
        limit: 1,
        type: "CHANNEL_CREATE"
    });

    const latestChannelCreated = fetchGuildAuditLogs.entries.first();
    const { executor } = latestChannelCreated;

    const embed = new MessageEmbed()
        .setAuthor("Création d'un nouveau salon")
        .setColor("#fd7aff")
        .setDescription(`**Action**: création de salon\n**Salon créé**: ${channel.name}`)
        .setTimestamp()
        .setFooter(executor.username, executor.displayAvatarURL());

    client.channels.cache.get("851532450865348608").send(embed);
}

