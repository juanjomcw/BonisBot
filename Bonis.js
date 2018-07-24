const Discord = require("discord.js");
const  client = new Discord.Client();

client.on("ready", () => {
   console.log("Estoy listo!");
   
   client.user.setGame(prefix+'help | #BonisArmy');

});

 client.on("guildMemberAdd", (member) => 
 {
     messageToSend = "Bienvenido " + member.user + " a la #BonisArmy!  disfruta tu estadia!";
     client.channels.get('459447414999482368').sendMessage(messageToSend);
 });
 client.on("guildMemberRemove", (member) => 
 {
     messageToSend = member.user.username + " ha salido del servidor, te extrañaremos! <:FeelsBadMan:464842674260934657>";
     client.channels.get('459447414999482368').sendMessage(messageToSend);
 });

let prefix = process.env.PREFIX;

client.on("message", (message) => {
    if (!message.content.startsWith(prefix)) return;
    if (message.author.bot) return;

   if (message.content.startsWith(prefix + "twitter")){
   message.channel.send('https://twitter.com/AntonellaAservi');
 }else
  if (message.content.startsWith(prefix + 'del')) {
  if (!message.member.roles.find("name", "BONIS MOD")) return message.reply('No tienes permiso de usar este comando.');{
    const user = message.mentions.users.first();
    const amount = !!parseInt(message.content.split(' ')[1]) ? parseInt(message.content.split(' ')[1]) : parseInt(message.content.split(' ')[2])
    if (!amount) return message.reply('Especifica la cantidad de mensajes que deseas borrar');
    if (!amount && !user) return message.reply('Especifica un usuario y cantidad de mensajes');
    message.channel.fetchMessages({
        limit: amount,
    }).then((messages) => {
        if (user) {
            const filterBy = user ? user.id : Client.user.id;
            messages = messages.filter(m => m.author.id === filterBy).arary().slice(0, amount);
        }
        message.channel.bulkDelete(messages).catch(error => console.log(error.stack));
       //Puede eliminar el message.channel.send que se encuentra abajo si lo desea, es opcional.
        message.channel.send("¡Adios popo :poop: !");
    });
}}else
 if (message.content.startsWith(prefix + "insta")){
   message.channel.send('https://www.instagram.com/antonella.aservi');
 }else
 if (message.content.startsWith(prefix + "twitch")){
   message.channel.send('https://www.twitch.tv/antonellaaservi');
 
}else
    if (message.content.startsWith(prefix +"horario")){
    message.channel.send({embed: {
      color: 3447003,
      description:  '**ESTOS SON LOS HORARIOS DE STREAM**.\n'+
                    '----------------------------------------------------------------------------\n'+
                    'MARTES - JUEVES - VIERNES - DOMINGOS.\n'+
                    '**HORA**: 8PM PERU :flag_pe: | 8PM MEXICO :flag_mx: | 10PM ARGENTINA :flag_ar: |    9PM CHILE :flag_cl: | 8PM COLOMBIA :flag_co: | \n'+
                    '----------------------------------------------------------------------------\n'+
                    'DOMINGOS - EN CANAL DE AMD_LATAM | **8PM PERU**\n'+
                    'https://www.twitch.tv/amd_latam \n'+
                    '----------------------------------------------------------------------------\n'+
                    'CUALQUIER __CAMBIO__ SE DARA A CONOCER EN LA **FANPAGE DE FACEBOOK** O EN EL **DISCORD**\n'
                                        
    }});
}else
 if (message.content.startsWith(prefix + "yt")){
   message.channel.send('https://www.youtube.com/channel/UCN9cqxp4VjfXsEGj_sRk3jQ');
 }else
    if (message.content.startsWith(prefix +"musica")){
    message.channel.send({embed: {
      color: 3447003,
      description: 'Para poner musica sigue los siguientes pasos.\n'+
                    ':one:  ir al canal de voz de __musica__.\n'+
                    ':two:  ir al canal de <#468816716806488084> para poder poner musica.\n'+
                    ':three:  para poner canciones usa el comando **;;p cancion** \n'+
                    ':four:  escoger una cancion de la lista obtenida usando **;;numero de la lista**\n'+
                    '----------------------------------------------------------------------------\n'+
                    '__**COMANDOS ADICIONALES**__\n'+
                    '**;;list** | muestra lista de reproducion\n'+
                    '**;;s** o **;;skip** | saltar la cancion (__haganlo cuando sea necesario__)\n'+
                    '**;;nowplaying** | cancion actual\n'+
                    '----------------------------------------------------------------------------\n'+
                    'En caso de tener preguntas no duden en decirle a un __**MOD**__ o alguna persona del server\n'
    }});
}else
 if (message.content.startsWith(prefix + "fb")){
   message.channel.send('https://www.facebook.com/groups/230383897539133/');
 }else
 if (message.content.startsWith(prefix + "discord")){
   message.channel.send('https://discord.gg/RRSsaFE');
 }else
 if(message.content.startsWith(prefix + 'avatar')){
   let img = message.mentions.users.first()
   if (!img) {

       const embed = new Discord.RichEmbed()
       .setImage(`${message.author.avatarURL}`)
       .setColor(10371071)
       .setFooter(`Avatar de ${message.author.username}#${message.author.discriminator}`);
       message.channel.send({ embed });

   } else if (img.avatarURL === null) {

       message.channel.sendMessage("El usuario ("+ img.username +") no tiene avatar!");

   } else {
       
       const embed = new Discord.RichEmbed()
       .setImage(`${img.avatarURL}`)
       .setColor(10371071)
       .setFooter(`Avatar de ${img.username}#${img.discriminator}`);
       message.channel.send({ embed });
       }
 }else
    if(message.content.startsWith(prefix + 'caracola')){

       var rpts = ["Sí", "No", "Tal vez", "No sé", "Definitivamente NO", " ¡Claro! "," Sí "," No "," Por supuesto! "," Por supuesto que no ", "Definitivamente NO"];
       if (!arguments) return message.reply(`Escriba una pregunta.`);
       message.channel.send(message.member.user+' Mi respuesta es: `'+ rpts[Math.floor(Math.random() * rpts.length)]+'`');
   
   }else
    if (message.content.startsWith(prefix + "banned")){
      message.channel.send("", {file:"https://cdn.discordapp.com/attachments/421867754480599050/468529032494055454/O3DHIA5.gif"});
       
}else 
    if(message.content.startsWith(prefix + 'love')){
        let users = message.mentions.users.map(m => m.username).join(' y ');
     if(!users) return message.channel.send('Mencione a dos usuarios para calcular');
    
     const random = Math.floor(Math.random() * 100);
     let heard = "";
 
    if(random < 50){
        heard=':broken_heart:';

    }else if(random < 80){
        heard=':sparkling_heart: ';
        
    }else if(random < 101){
        heard=':heart:';

    }
            
      const embed = new Discord.RichEmbed()
          .setAuthor('El porcentaje de amor de '+users+' es:')
          .setDescription(heard+' **'+random+' %**'+' '+heard)
          .setColor(10371071)

        message.channel.send({embed});
    }else
        if(message.content.startsWith(prefix + "help")){
     
   message.channel.send('**'+message.author.username+'**, Revisa tus mensajes privados.');
   message.author.send('**Comandos de RaccoonBot**\n'+
                       '-> '+prefix+'avatar <@user> | Muestra el avatar de un usuario.\n'+
                       '-> '+prefix+'caracola <pregunta> | El bot respondera a tus preguntas (8ball).\n'+
                       '-> '+prefix+'love <@user> y <@user> | Muestra el amor que tienes entre dos personas .\n'+
                       '-> '+prefix+'insta | Instagram Antonella.\n'+
                       '-> '+prefix+'twitter | Twitter Antonella.\n'+
                       '-> '+prefix+'fb | Grupo de fb.\n'+
                       '-> '+prefix+'twitch | Twitch antonella.\n'+
                       '-> '+prefix+'yt | YouTube Antonella.\n'+
                       '-> '+prefix+'musica | Como poner musica en el bot.\n'+
                       '-> '+prefix+'discord | invitacion de discord para compartirla.\n'+
                       '-> '+prefix+'del <cantidad> | borra los mensajes (SOLO MODERADORES).\n'+
                       '-------------------------------------------------------------------------------------\n'+
                       '**BonisBot - Bot Oficial del servidor**\n');
        }
});
client.login(process.env.TOKEN);
