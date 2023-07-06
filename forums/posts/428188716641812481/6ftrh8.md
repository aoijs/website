---
title: "fetchInvite function"
description: "Easily fetch the information of Invites using custom functions!"
authors:
  name: "@faf4a"
  title: Member - 428188716641812481
  userid: "428188716641812481"
  url: https://discord.com/users/428188716641812481
  image_url: https://raw.githubusercontent.com/Faf4a/website/main/assets/images/avatars/428188716641812481.png
tags: ["aoi.js","v6","Other"]
hide_table_of_contents: true
enableComments: true
pagination_prev: null
pagination_next: null
---

## Usage

- Put the given code in your index.js
- `$fetchInvite[inviteCode;property]` for example, `$fetchInvite[czCgVfh4Hu;code]` which would return the invite code.

## Code

```js
bot.functionManager.createFunction({
  name: "$fetchInvite",
  type: "djs",
  code: async (d) => {
    const data = d.util.aoiFunc(d);
    const [inviteCode, property] = data.inside.splits;

    try {
      const response = await fetch(
        `https://discord.com/api/v10/invites/${inviteCode}?with_counts=true&with_expiration=true`
      );

      if (!response.ok) {
        throw new Error(response.statusText);
      }

      const inviteData = await response.json();

      const properties = property.split('.');
      let result = inviteData;
      for (const prop of properties) {
        if (result && result.hasOwnProperty(prop)) {
          result = result[prop];
        } else {
          return d.aoiError.fnError(d, 'custom', {}, 'property');
        }
      }

      data.result = result;

      return {
        code: d.util.setCode(data),
      };
    } catch (error) {
      console.error(error);
      return d.aoiError.fnError(d, 'custom', {}, 'invite');
    }
  },
});
```

---

## Preview

![preview](https://cdn.discordapp.com/attachments/1112002806686154752/1124848362710110281/image.png)