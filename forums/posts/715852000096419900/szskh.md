---
title: "Emoji Progress Bar"
description: "A js function to make a progression bar using emojis."
authors:
  name: "@ahoemi"
  title: Member - 715852000096419900
  userid: "715852000096419900"
  url: https://discord.com/users/715852000096419900
  image_url: https://raw.githubusercontent.com/Faf4a/website/main/assets/images/avatars/715852000096419900.png
tags: ["aoi.js","v6","Other"]
hide_table_of_contents: true
enableComments: true
pagination_prev: null
pagination_next: null
---

# Code
```js
bot.functionManager.createFunction({
  name: "$emojiProgressBar",
  type: "djs",
  code: async (d) => {
  const data = d.util.aoiFunc(d);
  const [fullStart, emptyStart, fullBar, emptyBar, fullEnd, emptyEnd, value, maxValue, size] = data.inside.splits;

let errors = []

!fullStart || fullStart == '' ? errors.push('"fullStart" - Param 1 is not provided!') : !emptyStart || emptyStart == '' ? errors.push('"emptyStart" - Param 2 is not provided!') : !fullBar || fullBar == '' ? errors.push('"fullBar" - Param 3 is not provided!') : !emptyBar || emptyBar == '' ? errors.push('"emptyBar" - Param 4 is not provided!') : !fullEnd || fullEnd == '' ? errors.push('"fullEnd" - Param 5 is not provided!') : !emptyEnd || emptyEnd == '' ? errors.push('"emptyEnd" - Param 6 is not provided!') : !size || size == '' || parseInt(size) < 10 ? errors.push('"size" cannot be less than 10 or empty') : null

console.log(errors)
if(errors.length >= 1) {
 data.result = errors.join('\n')
} else {

let barArr = [];
let full = Math.round(size * (value / maxValue > 1 ? 1 : value / maxValue));
let empty = size - full > 0 ? size - full : 0;
for (let i = 1; i <= full; i++) barArr.push(fullBar);
for (let i = 1; i <= empty; i++) barArr.push(emptyBar);
barArr[0] = barArr[0] == fullBar ? fullStart : emptyStart;
barArr[barArr.length - 1] = barArr[barArr.length - 1] == fullBar ? fullEnd : emptyEnd;
const bar = barArr.join(``);


data.result = bar + ` ${Math.floor((value*100)/maxValue)}%`
}
    return {
      code: d.util.setCode(data),
    };

  }
})
```
# Usage
```js
$emojiProgressBar[fullStart;emptyStart;fullBar;emptyBar;fullEnd;emptyEnd;value;maxValue;size]
```
# Example
![Emoji Progress Bar Example](https://media.discordapp.net/attachments/902553397281030208/1126912042255794278/ezgif.com-video-to-gif.gif)

# Bye 🥰