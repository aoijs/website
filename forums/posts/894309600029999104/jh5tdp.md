---
title: "Simple avatar command"
description: "Simple avatar command for aoi.js v6"
authors:
  name: "@mikashiiiok"
  title: Member - 894309600029999104
  userid: "894309600029999104"
  url: https://discord.com/users/894309600029999104
  image_url: https://raw.githubusercontent.com/Faf4a/website/main/assets/images/avatars/894309600029999104.png
tags: ["aoi.js","v6"]
hide_table_of_contents: true
enableComments: true
pagination_prev: null
pagination_next: null
---

The command is simple to use, you just need to execute the command [prefix]avatar [username] (optional) and it will display the user's avatar along with different image formats. If you mention or type the name/ID of a user, their avatar will be shown; otherwise, the avatar of the user who executed the command will be displayed.

```module.exports = ({
	name: "avatar",
    code: `
	$author[1;$username;$userAvatar[$authorID]]
	$description[1;**Formats:**
[**\`Jpg\`**]($userAvatar[$findMember[$message[1;true]];2048;true;jpg]) | [**\`Png\`**]($userAvatar[$findMember[$message[1;true]];2048;true;png]) | [**\`Jpeg\`**]($userAvatar[$findMember[$message[1;true]];2048;true;jpeg]) | [**\`Webp\`**]($userAvatar[$findMember[$message[1;true]];2048;true;webp])]
	$image[1;$userAvatar[$findMember[$message[1;true]];2048]]
	$color[1;Green]
`
})
