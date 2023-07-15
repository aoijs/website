---
title: "Hack command"
description: "A advanced hack command… Made for fun check it out."
authors:
  name: "@ahoemi"
  title: Member - 715852000096419900
  userid: "715852000096419900"
  url: https://discord.com/users/715852000096419900
  image_url: https://raw.githubusercontent.com/Faf4a/website/main/assets/images/avatars/715852000096419900.png
tags: ["aoi.js","Other","v6"]
hide_table_of_contents: true
enableComments: true
pagination_prev: null
pagination_next: null
---

# code
```
module.exports={
  name: "hack",
  code:`
$djsEval[( async () => {
  
const filled = '■';
const empty = '□';
const last = '.──────────────────────────────────.\`\`\`'
const hack = []
const mg = await message.channel.send('\`\`\`js\\n.──────────────────────────────────.\\n|          HACKING PANEL           |\\n|                                  |\\n|   Hacking $username[$mentioned[1;false]]$repeatMessage[$math[23-$charCount[$username[$mentioned[1;false]]]]; ]|\\n|   [□□□□□□□□□] 0%                 |\\n|                                  |\\n'+last)

const randomTimeout = Math.floor(Math.random() * (5000 - 3500 + 1)) + 1000;
setTimeout(() => {

let i = 0;
for (let tries = 0; tries < 6 && i < 100; tries++) {
const randomIncrement = Math.floor(Math.random() * (21 - 10) + 10);
i += randomIncrement;

const progressBar = filled.repeat(i / 10) + empty.repeat((100 - i) / 10);

mg.edit('\`\`\`js\\n.──────────────────────────────────.\\n|          HACKING PANEL           |\\n|                                  |\\n|   Hacking $username[$mentioned[1;false]]$repeatMessage[$math[23-$charCount[$username[$mentioned[1;false]]]]; ]|\\n|   ['+progressBar+']'+\`\${i}%\${" ".repeat(19 - (i.toString()).length)}\`+'|\\n|                                  |\\n.──────────────────────────────────.\`\`\`')

  }

hack.push('\`\`\`js\\n.──────────────────────────────────.\\n|          HACKING PANEL           |\\n|                                  |\\n|  Hacking $username[$mentioned[1;false]]$repeatMessage[$math[24-$charCount[$username[$mentioned[1;false]]]]; ]|\\n|  [■■■■■■■■■■] 100%               |\\n|                                  |\\n|  Hacking Successful!             |\\n|  Retreiving user data...         |')

mg.edit(hack+last)
hack.push('|                                  |')
hack.push('|  Email:                          |')
hack.push('|   $getObjectProperty[email]$get[domain]$repeatMessage[$math[31-$charCount[$getObjectProperty[email]$get[domain]]]; ]|')

hack.push('|  Password: $randomString[7]$repeatMessage[15; ]|')
hack.push('|  IP: $random[100;200].$random[0;9].$random[0;9;false;false].$math[$random[1;10]-1]$repeatMessage[19; ]|\\n')

mg.edit(hack.join('\\n')+last)

}, randomTimeout);
})()]

$let[domain;@$randomText[hotmail;yahoo;gmail].com]
 
$createObject[$jsonRequest[https://emi9.repl.co/text/name-generator?apiKey=ahoemi&name=$username[$mentioned[1;false]]]]

$onlyIf[$mentioned[1;false]!=$authorID;You can't hack yourself!]
$onlyIf[$mentioned[1;false]!=;Please mention a user!]

  `
}
```
# Usage
`{prefix}hack @user`

# Example
![Example Video](https://media.discordapp.net/attachments/1118911532378640527/1128991780063420436/RPReplay_Final1689242802.mov)
### If any error occurs ping me at aoi.js os