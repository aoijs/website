---
title: $databasePing
description: '$databasePing wird das Datenbankping zurückgeben.'
id: databasePing
---

`$databasePing` wird Ihre Datenbank pingen.

## Verwendung

```php
$databasePing
```

## Beispiel(e)

Dies gibt deine Datenbank ping:

```javascript
bot.command({
    Name: 'databasePing',
    code: `
  Meine Datenbank Ping ist: $databasePing MS!
  `
});
```