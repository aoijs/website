---
title: $modifyRole
description: Modifies a role by using their ID.
---

With this function you can modify an eisting role by editing it's name/color/mentionability/hoist

Raw usage: `$modifyRole[roleID;name (optional);color(optional);mentionable(optional);hoisted(optional)]`

Example Usage:

This command changes the role name and it's color:

```text
bot.command({
name: "editrole",
code: `
$modifyRole[837765028031234098;Bot;700505]
`
})
```

you can use `RANDOM` in the color field for a random role color 😉
 



