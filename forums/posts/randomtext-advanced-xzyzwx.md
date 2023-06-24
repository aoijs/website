---
title: "randomText advanced"
description: "A custom function to get random/specified number of words."
authors:
  name: "@ahoemi"
  title: Member
  url: https://discord.com/users/715852000096419900
  image_url: https://cdn.discordapp.com/avatars/715852000096419900/4dd9ab5b17ca6c07e4da71746cd0eca9.png
tags: ["v6","Other"]
hide_table_of_contents: false
enableComments: true
pagination_prev: null
pagination_next: null
---

## Content

```js
bot.functionManager.createFunction({
  name: "$randomWord",
  type: "djs",
  code: async (d) => {
  const functionName = "$randomWord";
  const data = d.util.aoiFunc(d);
  const [ words, numb = 1 ] = data.inside.splits;

if (!words || words === "") {
 let error = `\`\`\`elixir\nRei.js Error\n${functionName}: Words were not provided!\`\`\``
  data.result = error
} else {
  let wordArr = words.split(':');
  let num = numb > wordArr.length ? wordArr.length : numb;
  var randWords = [];
  for (let i = 0; i < num; i++) {
    let newRandom;
    do {
      let rand = Math.floor(Math.random() * wordArr.length);
      newRandom = wordArr[rand];
    } while (randWords.includes(newRandom));
    randWords.push(newRandom);
  }
const output = randWords.join(', ')
data.result = output
}
    return {
      code: d.util.setCode(data),
    };
  }
})
```
### Usage 
`$randomWord[Hi:Hello:Bye:Sayonara;2]`
will return 2 random words from Hi, Hello, Bye and Sayonara

### Where do i use it?
- Paste it at bottom of your main file.
- You can also edit it and use in handler
Mention me in support server for any help.
