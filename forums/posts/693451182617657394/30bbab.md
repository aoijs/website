---
title: "Reloading the Commands "
description: "Before restarting your bot, you can reinstall the commands folder that you have already set and run your commands."
authors:
  name: "@valentineu0"
  title: Member - 693451182617657394
  userid: "693451182617657394"
  url: https://discord.com/users/693451182617657394
  image_url: https://raw.githubusercontent.com/Faf4a/website/main/assets/images/avatars/693451182617657394.png
tags: ["v6","aoi.js","Other"]
hide_table_of_contents: true
enableComments: true
pagination_prev: null
pagination_next: null
---

Reloads and executes all commands without restarting your bot (changes are also applied).

## Requirements

- Loader (LoadCommands) - <https://aoi.js.org/docs/guides/commandhandler#starting-off-with-modifying-your-main-file>

### Warning

> The **old version** of the $if function was used here. For more information, check out
> the [documentation](https://aoi.js.org/docs/functions/misc-related/if) of the $if function.

---

```js
module.exports = {
    name: "reload",
    aliases: ["rr"],
    $if: "old",
    code: `
    $if[$authorID==$clientOwnerIDs]
        $updateCommands
        $reply[$messageID;true]
        :white_check_mark: Reload completed.
    $endif
    `
}
```

---

### Images

![Discord](https://assets.valentineu.xyz/aoi.png)

![Reload](https://assets.valentineu.xyz/aoi2.png)
