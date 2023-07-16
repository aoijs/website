---
title: $mentionedChannels
description: '$mentionedChannels gibt die ID eines Kanals zurück, der von der Erwähnung abgerufen wurde.'
id: mentionedChannels
---

`$mentionedChannels` gibt die ID eines Kanals zurück, der von der Erwähnung abgerufen wurde.

## Verwendung

```php
$mentionedChannels[index;returnSelf?]
```

## Verwendung

| Feld          | Typ     | Beschreibung                                                                                            | Erforderlich |
| ------------- | ------- | ------------------------------------------------------------------------------------------------------- |:------------:|
| index         | anzahl  | Der Index des Arguments.                                                                                |     wahr     |
| zurückkehren? | boolean | Gibt die ID des Kanals zurück, in dem der Befehl ausgeführt wurde, wenn der Kanal nicht gefunden wurde. |    falsch    |

## Beispiel(e)

Dies gibt die ID der **ersten** Erwähnung zurück, wenn Sie versuchen, einen Kanal in diesem Befehl zu erwähnen, oder es wird die Kanal-ID des Kanals zurückgeben, in dem der Befehl ausgeführt wurde:

```javascript
bot.command({
    name: 'mentionedChannels',
    code: `
  $mentionedChannels[1;true]
  `
});
```
