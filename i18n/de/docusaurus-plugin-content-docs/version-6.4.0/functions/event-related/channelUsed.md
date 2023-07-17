---
title: $channelUsed
description: '$channelUsed gibt die Kanal-ID zurück, wo das Ereignis ausgelöst wurde.'
id: channelUsed
---

`$channelUsed` gibt die Kanal-ID zurück, wo das Ereignis ausgelöst wurde.

## Verwendung

```php
$channelUsed
```

## Beispiel(e)

Dies gibt die Anzahl der Rollen deiner Gilde zurück:

**Sie benötigen `onMessageDelete` in Ihrer Hauptdatei, um dieses Beispiel nutzen zu können!**

```javascript
bot.deletedCommand({
    Kanal: "channelID",
    Code: `$userTag hat eine Nachricht in <#$channelUsed>!`
});
```
