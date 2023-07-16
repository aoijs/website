---
title: "callAwaited Custom Function"
description: "Calls an awaited command."
authors:
  name: "@cyberghxst"
  title: Member - 590267498192961540
  userid: "590267498192961540"
  url: https://discord.com/users/590267498192961540
  image_url: https://raw.githubusercontent.com/Faf4a/website/main/assets/images/avatars/590267498192961540.png
tags: ["v6","aoi.js"]
hide_table_of_contents: true
enableComments: true
pagination_prev: null
pagination_next: null
---

*This function calls an awaited command.*

**Usage:**
> $callAwaited[awaited name]

This is like `$awaitFunc` of the bot creater app.
```js
<client>.functionManager.createFunction({
  name: "$callAwaited",
  type: "djs",
  code: async function(d) {
    const data = d.util.aoiFunc(d);
    if (data.err) return d.error(data.err);
    let [command] = data.inside.splits;
    if (command == undefined) return d.aoiError.fnError(d, "custom", {}, "Missing awaited command provided.",)
    const cmd = d.client.cmd.awaited.find((x) => x.name.toLowerCase() === command.toLowerCase());
    if (!cmd) return d.aoiError.fnError(d, "custom", {},  `Invalid awaited command: '${command}' provided.`,);
    await d.interpreter(
      d.client,
      d.message,
      d.args,
      cmd,
      d.client.db,
      false,
      undefined,
      d.data,
    );
    return {
      code: d.util.setCode(data),
    };
  }
});
```