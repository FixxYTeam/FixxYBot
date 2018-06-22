const Discord = require("discord.js");

var bot = new Discord.Client();

bot.on("ready", function() {
    bot.user.setGame("FixxYBot, $help");
    console.log("le bot a bien ete connecter");
});

bot.login("NDU5NzEzNTA2ODkyMTg1NjMw.Dg6NGg.R7DtasM_NZ9i2kQUQoCO5uD772E");
