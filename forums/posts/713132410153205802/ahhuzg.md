---
title: 'multipleReplaceText custom function'
description: 'A simple function that avoids putting lots of $replacetext in $replacetext to change several words in the same text'
authors:
  name: '@p4olo.'
  title: Member - 713132410153205802
  userid: '713132410153205802'
  url: https://discord.com/users/713132410153205802
  image_url: https://raw.githubusercontent.com/Faf4a/website/main/assets/images/avatars/713132410153205802.png
    tags: ["aoi.js","v6","Other"]
    hide_table_of_contents: true
    enableComments: true
pagination_prev: null
pagination_next: null
---
    
### Function:
$multipleReplaceText[text;replacer1 --> replaceto1, replacer2 --> replaceto2...]

This this function avoids putting replacetext in replacetext in replacetext ...

### Code:
```js
bot.functionManager.createFunction({
  name: "$multipleReplaceText",
  type: "djs",
  code: async (d) => {
    const data = d.util.aoiFunc(d);
    const [text, replacements] = data.inside.splits;
    const replacementsList = replacements.split(',');
  
    let resultText = text;
  
    for (const replacementPair of replacementsList) {
      const [oldWord, newWord] = replacementPair.split('-->');
      const regex = new RegExp(oldWord.trim(), 'g');
      resultText = resultText.replace(regex, newWord.trim());
    }
  
    data.result = resultText;
    return {
      code: d.util.setCode(data),
    };
  },
});
```

### Example:
https://media.discordapp.net/attachments/1100434750558175242/1135692150273736734/image.png?width=868&height=655
