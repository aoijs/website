---
title: $emojiExists
description: '$emojiExists wird prüfen, ob die angegebene Emoji existiert.'
id: emojiExists
---

`$emojiExists` wird überprüfen, ob der angegebene Emoji existiert.

## Verwendung

```php
$emojiExists[emojiResolver]
```

## Verwendung

| Feld          | Typ    | Beschreibung                                         | Erforderlich |
| ------------- | ------ | ---------------------------------------------------- |:------------:|
| emojiResolver | string | Emoji, die du überprüfen möchtest, ob sie existiert. |     wahr     |

## Beispiel(e)

Dies gibt `true` als die ![emoji](https://cdn.discordapp.com/emojis/1003365344724910191.webp?size=16&quality=lossless) Emoji existiert:

```javascript
bot.command({
    name: 'emojiExists',
    code: `
  $emojiExists[<:LerefMoney:1003365344724910191>]
  `
});
```
