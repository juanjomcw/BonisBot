const Discord = require("discord.js");
const  client = new Discord.Client();

client.on("ready", () => {
   console.log("Estoy listo!");
   
   client.user.setGame(prefix+'help | Raccoon★Army');

});

 client.on("guildMemberAdd", (member) => 
 {
     messageToSend = "Bienvenido " + member.user + " a la Raccoon★Army ▹!  disfruta tu estadia <:karly:331439541892284417> revisa nuestras reglas en <#262072325019664385> <:RaccAttack:268179348828323841> !";
     client.channels.get('433510888188805132').sendMessage(messageToSend);
 });
