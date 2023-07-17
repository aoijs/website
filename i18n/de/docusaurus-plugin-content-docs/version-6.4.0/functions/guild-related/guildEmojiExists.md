---
title: $guildEmojiExists
description: '$guildEmojiExists wird überprüfen, ob der angegebene Emoji in der angegebenen Gilde existiert.'
id: guildEmojiExists
---

`$guildEmojiExists` wird überprüfen, ob der angegebene Emoji in der angegebenen Gilde existiert.

## Verwendung

```php
$guildEmojiExists[emojiResolver;guildId?]
```

## Verwendung

| Feld          | Typ        | Beschreibung                                         | Erforderlich |
| ------------- | ---------- | ---------------------------------------------------- |:------------:|
| emojiResolver | string     | Emoji, die du überprüfen möchtest, ob sie existiert. |     wahr     |
| guildID?      | ganze Zahl | ID der Gilde, in der die Emoji existieren.           |    falsch    |

## Beispiel(e)

Dies gibt `true` als die ![emoji](https://cdn.discordapp.com/emojis/1003365344724910191.webp?size=16&quality=lossless) Emoji existiert:

```javascript
bot.command({
    name: 'guildEmojiExists',
    code: `
  $guildEmojiExists[<:LerefMoney:1003365344724910191>;$guildID]
  `
});
```
