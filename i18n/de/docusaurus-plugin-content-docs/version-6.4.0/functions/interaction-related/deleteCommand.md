---
title: $deleteCommand
description: '$deleteCommand wird die erste Befehlsmeldung löschen.'
id: deleteCommand
---

`$deleteCommand` löscht die erste Befehlsmeldung.

## Verwendung

```php
$deleteCommand
```

## Beispiel(e)

Dies löscht die erste Befehlsmeldung:

```javascript
bot.command({
    name: 'deleteCommand',
    code: `
  Hallo!
  $deleteCommand
  `
});
```
