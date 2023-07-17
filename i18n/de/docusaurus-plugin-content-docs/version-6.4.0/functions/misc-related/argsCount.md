---
title: $argsCount
description: '$argsCount wird die Anzahl der angegebenen Argumente zurückgeben.'
id: argsCount
---

`$argsCount` gibt die Anzahl der angegebenen Argumente zurück.

## Verwendung

```php
$argsCount
```

## Beispiel(e)

Dies gibt die Anzahl der Argumente in Ihrer Nachricht zurück, zum Beispiel `[prefix]argsCount Hallo Bye` wird zwei zurückgeben:

```javascript
bot.command({
    name: 'argsCount',
    code: `
  $argsCount
  `
});
```
