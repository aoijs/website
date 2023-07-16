---
title: "commandExists Custom Function"
description: "Check if a command exists through its type and name."
authors:
  name: "@cyberghxst"
  title: Member - 590267498192961540
  userid: "590267498192961540"
  url: https://discord.com/users/590267498192961540
  image_url: https://raw.githubusercontent.com/Faf4a/website/main/assets/images/avatars/590267498192961540.png
tags: ["aoi.js","v6"]
hide_table_of_contents: true
enableComments: true
pagination_prev: null
pagination_next: null
---

Check if a command exists through its type and name.
### Usage
> `$commandExists[name;type]`

⚠️ The command type should the **Command Handler Type**!

To check available command types, [click here](https://aoi.js.org/docs/guides/client/events)

### Code
```js
bot.functionManager.createFunction({
    name: "$commandExists",
    type: "djs",
    code: async function (d) {
        const data = d.util.aoiFunc(d);
        const [name, type] = data.inside.splits;
        if (!name)
            return d.aoiError.fnError(d, "custom", {}, "Missing command name in");
        if (!d.client.cmd.types.includes(type))
            return d.aoiError.fnError(d, "custom", {}, "Invalid command type provided in");
        data.result = d.client.cmd[type].some(x => x.name.toLowerCase() === name.toLowerCase());
        return {
            code: d.util.setCode(data)
        }
    }
});
```