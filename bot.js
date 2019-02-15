const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  console.log('')
  console.log('')
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`[Start] ${new Date()}`);
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════════════════════════════]╗');
  console.log(`Logged in as * [ " ${client.user.username} " ]`);
  console.log('')
  console.log('Informations :')
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log('╚[════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════]╗')
  console.log(' Bot Is Online')
  console.log('╚[════════════]╝')
  console.log('')
  console.log('')
});

giftKeys = {};
let devs = ["525434548939653151"];
client.on("message", msg =>{
  let args = msg.content.split(" ").slice(1)[0];
  let cmd = msg.content.split(' ')[0]
  if(cmd === `${prefix}giftR`){
  let roleW = msg.mentions.roles.first();
  if(!devs.includes(msg.author.id)){
    let embed = new Discord.RichEmbed()
    .setColor("#111111")
    .setTitle(`:x: - انت لاتمتلك الصلاحية`);
    msg.reply(embed).then( z => z.delete(3000));
     return
  }
  if(!roleW) {
    let embed = new Discord.RichEmbed()
    .setColor("#111111")
    .setTitle(`:x: - منشن الرتبة \`${prefix}giftR <@admin-role>\``);
    msg.reply(embed).then( z => z.delete(3000)); return
  };
  let role = msg.guild.roles.find(`name`, roleW.name);
  if(!role) {
    let embed = new Discord.RichEmbed()
    .setColor("#42f4f4")
    .setTitle(`:x: - Could't find \`${roleW.name}\` role.`);
  msg.reply(embed).then( msgs => msgs.delete(3000));
  return
  }
  var randomkeys = ["SdkdKIkfgjhg50","vdfgkfgKKndf030","xjgJBskkjd652"]
  var gift = "";
  for (var y = 0; y < 16; y++) {   ///16
    gift +=  `${randomkeys.charAt(Math.floor(Math.random() * randomkeys.length))}`;
  }
  giftKeys[gift] = role;
  let embed = new Discord.RichEmbed()
  .setColor("#111111")
  .setTitle(`:ok_hand: - **تم ارسآل الكود على الخاص**`);
  msg.reply(embed);
  let embed2= new Discord.RichEmbed()
  .setAuthor(msg.author.username, msg.author.displayAvatarURL)
  .setThumbnail(msg.author.avatarURL)
  .addField("**Key Of Gift**", gift,true)
  .addField("Role",giftKeys[gift].name,true)
  .addField("This Key Made by", msg.author, true)
  .addField("The Room", msg.channel , true)
  .setTimestamp()
  .setFooter(client.user.username,client.user.displayAvatarURL)  
  msg.author.send(embed2);
};
if( cmd === `${prefix}used`){
 
  if(!args) {  
    let embed = new Discord.RichEmbed()
    .setColor("#111111")
    .setTitle(`:x: - **الرجاء ادخال كود الهدية** \`${prefix}used <Key>\``)
    msg.reply(embed).then( z => z.delete(3000));
    return
}
let embed = new Discord.RichEmbed()
.setTitle(`**جاري التحقق من الكود**`)
.setColor("#111111")
  msg.reply(embed).then( msgs =>{
  if(giftKeys[args]){
    let hav = msg.member.roles.find(`name`, giftKeys[args].name);
    if(hav){
    let embed = new Discord.RichEmbed()
    .setTitle(`:x: - **انت تمتلك هذه الرتبة مسبقًا**  \`${giftKeys[args].name}\``)
    .setColor("#111111")
    msgs.edit(embed)
    return
    }
    let embed = new Discord.RichEmbed()
    .setTitle(`:tada: - **مبروك تم اعطائك رتبة** \`${giftKeys[args].name}\``)
    .setColor("#111111")
    msgs.edit(embed)
    msg.member.addRole(giftKeys[args]);
    delete giftKeys[args]
  }else{
    let embed = new Discord.RichEmbed()
    .setTitle(`:x: - **الكود غير صيحيح أو انه مستعمل من قبل**`)
    .setColor("#111111")
    msgs.edit(embed)
  }});
};
});

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("ready", () => { // كود رينبو
  function lol() {
    client.guilds.get('537260282502709249').roles.find("name", "Js - Vip Rainbow").setColor("RANDOM");
  };
  setInterval(lol, 1000);
});

client.login(process.env.BOT_TOKEN);
