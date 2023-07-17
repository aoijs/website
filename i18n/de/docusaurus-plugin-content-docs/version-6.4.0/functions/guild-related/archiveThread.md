---
title: '$archiveThread'
description: '$archiveThread wird einen bestimmten Thread archivieren oder dearchivieren.'
id: archiveThread
---

`$archiveThread` wird einen bestimmten Thread archivieren oder dearchivieren.

## Verwendung

```php
$archiveThread[threadID;channelID?;archive?;reason?]
```

## Verwendung

| Feld         | Typ        | Beschreibung                                           | Erforderlich |
| ------------ | ---------- | ------------------------------------------------------ |:------------:|
| threadID     | ganze Zahl | Thread-ID.                                             |     wahr     |
| channelID?   | ganze Zahl | Kanal-ID, wo sich der Thread befindet.                 |    falsch    |
| archivieren? | boolean    | Den gegebenen Thread archivieren?                      |    falsch    |
| warum?       | string     | Begründung, die im Audit-Log der Gilde angezeigt wird. |    falsch    |

## Beispiel(e)

Dies archiviert den erstellten Thread:

```javascript
bot.command({
    name: 'archiveThread',
    code: `
  $archiveThread[$channelID;$get[id];true;testing]
  $let[id;$createThread[$channelID;example;1440;public;$messageID;true]]  
  `
});
```
