---
title: $messageAttachment
description: '$messageAttachment wird je nach Index einen Nachrichtenanhang zurückgeben.'
id: messageAttachment
---

`$messageAttachment` wird je nach Index einen Nachrichtenanhang zurückgeben.

## Verwendung

```php
$messageAttachment[index?]
```

## Verwendung

| Feld   | Typ        | Beschreibung                                               | Erforderlich |
| ------ | ---------- | ---------------------------------------------------------- |:------------:|
| index? | ganze Zahl | Der Index für den Anhang der Nachricht wird zurückgegeben. |    falsch    |

## Beispiel(e)

Hiermit wird der angegebene Anhang zurückgegeben:

```javascript
bot.command({
    name: 'messageAttachment',
    code: `
  Du hast den folgenden Anhang in deiner Nachricht gefunden: $messageAttachment
  `
});
```
