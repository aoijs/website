---
title: '$alwaysExecute'
description: '$alwaysExecute wird immer emittiert, wenn ein Nachrichtenereignis ausgelöst wird'
id: alwaysExecute
---

`$alwaysExecute` emittiert immer, wenn ein Nachrichtenereignis ausgelöst wird.

## Verwendung

```php
$alwaysExecute
```

## Beispiel(e)

Die angegebene Nachricht wird jedes Mal gesendet, wenn Sie eine Nachricht senden:

```javascript
bot.command({
  name: "$alwaysExecute",
  code: `Hallo!`
})
```