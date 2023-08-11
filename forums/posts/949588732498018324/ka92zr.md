---
title: 'removeTimeout Custom func'
description: 'This is the custom function to remove the timeout of a person. '
authors:
  name: '@nanotechpikachu'
  title: Member - 949588732498018324
  userid: '949588732498018324'
  url: https://discord.com/users/949588732498018324
  image_url: https://raw.githubusercontent.com/Faf4a/website/main/assets/images/avatars/949588732498018324.png
tags: ["v6","aoi.js","Other"]
hide_table_of_contents: true
enableComments: true
pagination_prev: null
pagination_next: null
---
    
Hi to all! This custom function is to remove the timeout of a user. When I was checking for a `$removeTimeout` command, I came to know there isn't any and the way to do the same in aoi is `$timeoutMember[$guildID;$authorID;0;reason]` yeah, put 0 in the time space. So, I came with the idea to make a custom function.

### Code
The code is in below
**Syntax**: `$removeTimeout[guildID;userID;reason?]`


```js
bot.functionManager.createFunction({
  name: "$removeTimeout",
  type: "djs",
  code: async d => {
  const data = d.util.aoiFunc(d);
  const [guildID = d.guild?.id, memberId = d.author?.id, reason = "Timeout Remove"] = data.inside.splits;

  const guild = await d.util.getGuild(d, guildID);
  const member = await d.util.getMember(guild, memberId);

  if (!guild || !member ) {
    return d.aoiError.fnError(d, !guild ? 'guild' : 'member', {inside: data.inside});

  }
 
  const mem = await member
    .timeout(null, reason)
    .catch((err) => { return d.aoiError.fnError(d, "custom", {}, `Failed To unTimeout The Member With Reason:${err}`);
  });

  return {
        code: d.util.setCode(data),
    };
}
});
```

### Credits
This custom func wouldn't have been possible if I didn't get help.
- **aho_emi** - She helped with with the errors and encountered and made the custom func better. Very much thanks to her.
- **Fafa** - He was the one who gave the idea when I was looking for a `$removeTimeout` command in support server. He said there isn't any and told the normal syntax due to which I made this.
- Last but not the least, thanks to the Aoi team.

### Contact me
You can contact me in discord
**Discord ID:** @nanotechpikachu


Thanks for reading!