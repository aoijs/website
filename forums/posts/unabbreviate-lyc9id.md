---
title: "Unabbreviate"
description: "Just a function to shorten numbers"
authors:
  name: "@Artz_"
  title: Member
  url: https://discord.com/users/1079517122822152272
  image_url: https://cdn.discordapp.com/avatars/1079517122822152272/d9d4fe8b7bf6e572e53f04296863dcc2.png
tags: ["v6","aoi.js"]
hide_table_of_contents: false
enableComments: true
pagination_prev: null
pagination_next: null
---

Unabbreviate numbers

### Content

```javascript
bot.functionManager.createFunction({
name: '$unabbreviate',
type: 'djs',
code: async d => {
    const data = d.util.aoiFunc(d);
    const [number] = data.inside.splits;
    const u = require('util-stunks')
    const code = u.unabbreviate(number)
    data.result = code
    return {
      code: d.util.setCode(data)
    } 
  }
});
```
