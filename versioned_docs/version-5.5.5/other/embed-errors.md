---
title: Embed Errors
description: Function internal functions aka Embed Errors are special functions that can be used inside message fields of functions to build the message as an embed message or to execute awaited commands with it.
---

* `{title:text}` => embed's
* `{url:link}` => embed's title hyperlink url
* `{footer:text:url}` => embed's footer text and optional embed's icon image url, embed needs title
* `{description:text}` => embed's description
* `{color:hex}` => embed's hex color code
* `{author:text:url}` => the embed's author and optional author image uld
* `{thumbnail:url}` => the embed's thumbail image url
* `{field:name:value:inline}` => embed field with optional inline field (yes/no)
* `{timestamp:ms}` => embed timestamp with optional ms field
* `{execute:awaited command name}` => execute awaited command when the function gets executed
* `{image:url}` => the embed's image url
* `{reactions:emoji,emoji2,...}` => emojis that will be added as reaction to the bot's message
* `{suppress:yes/no}` => to suppress the error message
* `{delete:time}` => delete the message after given time
* `{attachment:name.extension:url}` => send an attachment with the message
* `{edit:duration:{new message}:{new message}:{...}}` => edit the message after given time

#### Where to use

You can use the embed error functions inside all functions they have message or error message field in it. Among users the following functions:

* [$sendMessage](../functions/sendmessage.md)
* [$channelSendMessage](../functions/channelsendmessage.md)
* [$sendDM](../functions/senddm.md)
* [$sendCrosspostingMessgae](../functions/sendcrosspostingmessage.md)
* [$sendWebhook](../functions/sendwebhook.md)
* [$onlyIf](../functions/onlyif.md)
* [$onlyPerms](../functions/onlyperms.md)
* [$onlyBotPerms](../functions/onlybotperms.md)
* [$onlyIfMessageContains](../functions/onlyifmessagecontains.md)
* [$suppressErrors](../functions/suppresserrors.md)
* [$argsCheck](../functions/argscheck.md)
* [$onlyForIDs](../functions/onlyforids.md) and other ID limiters
* [$cooldown](../functions/cooldown.md) and other cooldown functions