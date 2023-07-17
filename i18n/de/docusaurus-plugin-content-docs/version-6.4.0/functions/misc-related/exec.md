---
title: '$exec'
description: '$exec wird den angegebenen Code in Ihrer Konsole ausführen.'
id: exec
---

`$exec` wird den angegebenen Code in Ihrer Konsole ausführen.

## Verwendung

```php
$exec[code]
```

## Verwendung

| Feld | Typ    | Beschreibung                                      | Erforderlich |
| ---- | ------ | ------------------------------------------------- |:------------:|
| kode | string | Code der in Ihrer Konsole ausgeführt werden soll. |     wahr     |

## Beispiel(e)

Dies gibt die aktuelle Knotenversion zurück:

```javascript
bot.command({
    name: "exec",
    code: `
    \`\`\`
    $exec[node -v]
    \`\`\`
  `
});
```