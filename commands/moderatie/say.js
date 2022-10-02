const discord = require("discord.js");
const botConfig = require("../../botconfig.json");

module.exports.run = async(Client, message, args) =>{

    const say = args.join(" ").slice(0);;

    let foutembed = new discord.MessageEmbed()
    .setColor(botConfig.colors.error)
    .setDescription(':x: Je moet iets opgeven wat de bot moet zeggen!');
    if (!say) return message.channel.send(foutembed);

    let fout1embed = new discord.MessageEmbed()
    .setColor(botConfig.colors.error)
    .setDescription(':x: Je hebt hier geen permissies voor!');
    if (!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send(fout1embed);


    message.delete()

    var Sayembed = new discord.MessageEmbed()
    .setDescription(say)
    .setColor(botConfig.colors.normal)
     .setFooter(botConfig.bot.footer, Client.user.displayAvatarURL())


    return message.channel.send(Sayembed);

}

module.exports.help = {
    name: "say",
    description: "Laat de bot iets zeggen",
    category: "Admin"
}