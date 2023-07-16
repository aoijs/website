---
title: '$modifyEmoji'
description: '$modifyEmoji wird ein bestimmtes benutzerdefiniertes Emoji ändern.'
id: modifyEmoji
---

`$modifyEmoji` wird ein bestimmtes benutzerdefiniertes Emoji ändern.

## Verwendung

```php
$modifyEmoji[guildID;emojiID;name;...roles?]
```

## Verwendung

| Feld       | Typ        | Beschreibung                                  | Erforderlich |
| ---------- | ---------- | --------------------------------------------- |:------------:|
| guildID    | ganze Zahl | Die ID der Gilde, wo sich die Emoji befinden. |     wahr     |
| emojiID    | ganze Zahl | Die Emoji-ID.                                 |     wahr     |
| name       | string     | Der neue Emoji-Name.                          |     wahr     |
| ...Rollen? | ganze Zahl | Rollen, die diesen Emoji verwenden können.    |    falsch    |

## Beispiel(e)

Dies wird ein bestehendes Emoji / den Namen in "Beispiel" ändern:

```javascript
bot.command({
    Name: 'modifyEmoji',
    Code: `
  $modifyEmoji[$guildID;emojiID;Example]
  `
});
```
