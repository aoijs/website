---
title: "Member count with image"
description: "A custom function to show the data of server members."
authors:
  name: "@ahoemi"
  title: Member - 715852000096419900
  userid: "715852000096419900"
  url: https://discord.com/users/715852000096419900
  image_url: https://raw.githubusercontent.com/Faf4a/website/main/assets/images/avatars/715852000096419900.png
tags: ["v6","Other"]
hide_table_of_contents: true
enableComments: true
pagination_prev: null
pagination_next: null
---

# Code
```js
bot.functionManager.createFunction({
  name: "$members",
  type: "djs",
  code: async (d) => {
    const data = d.util.aoiFunc(d);
    const [type='bar'] = data.inside.splits;

    const Jimp = require('jimp');
    const { AttachmentBuilder } = require('discord.js')

    async function exc(func) {
      let p = await d.interpreter(d.client, {}, [], {code: func }, d.client.db, true);
      return p.code
    }

    const dataAr = [
      await exc(`$membersCount[${d.guild.id}]`),
      await exc(`$membersCount[${d.guild.id};all;false]`),
      await exc(`$guildBotCount[${d.guild.id}]`),
      await exc(`$membersCount[${d.guild.id};online]`),
      await exc(`$membersCount[${d.guild.id};dnd]`),
      await exc(`$membersCount[${d.guild.id};idle]`),
      await exc(`$membersCount[${d.guild.id};invisible]`)
    ]


const chartURL = `https://quickchart.io/chart?c=${encodeURIComponent(
    JSON.stringify({
      type: type,
      data: {
        labels: ['Total', 'Humans', 'Bots', 'Online', 'DnD', 'Idle', 'Invisible'],
        datasets: [{
          label: 'Server Members Count',
          data: dataAr,
          datalabels: {
            align: 'center',
            anchor: 'center',
          },
          backgroundColor: [
            'rgba(83, 95, 201, 0.4)',
            'rgba(240, 231, 98, 0.4)',
            'rgba(192, 192, 192, 0.4)',
            'rgba(0, 255, 0, 0.4)',
            'rgba(255, 0, 0, 0.4)',
            'rgba(238, 150, 69, 0.4)',
            'rgba(78, 82, 90, 0.4)'
          ],
          borderColor: [
            'rgba(83, 95, 201)',
            'rgba(240, 231, 98)',
            'rgba(192, 192, 192)',
            'rgba(0, 255, 0)',
            'rgba(255, 0, 0)',
            'rgba(238, 150, 69)',
            'rgba(78, 82, 90)'
          ],
          borderWidth: 1,
        }]
      },
      options: {
        plugins: {
          datalabels: {
            color: 'black'
          }
        }
      }
    })
  )}`


const chart = await Jimp.read(chartURL)
const bg = await Jimp.read(`https://media.discordapp.net/attachments/902553397281030208/1127435367193256006/Untitled81_20230709085015.png`)

bg.composite(chart, 0, 0)

const buffer = await bg.getBufferAsync(Jimp.MIME_PNG);

const attachment = new AttachmentBuilder(buffer, {name:'members.png'});

d.message.channel.send({
  files: [attachment]
})


  return { code: d.util.setCode(data)}
    
  }
})
```
# Usage
`$members`  
`$members[bar]`   
`$members[horizontalBar]`   

# Example
### Bar 
![Bar Type](https://media.discordapp.net/attachments/902553397281030208/1127471713844744322/members.png)

### horizontalBar
![horizontalBar Type](https://media.discordapp.net/attachments/902553397281030208/1127471714159300669/members.png)

# Ping for any help 😴