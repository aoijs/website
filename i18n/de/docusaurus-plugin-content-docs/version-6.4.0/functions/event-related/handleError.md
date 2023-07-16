---
title: '$handleError'
description: '$handleError gibt Informationen über einen aufgetretenen Fehler zurück.'
id: handleError
---

`$handleError` gibt Informationen über einen aufgetretenen Fehler zurück.

## Verwendung

```php
$handleError[option]
```

## Verwendung

| Feld      | Typ    | Beschreibung                                                                                                                                                              | Erforderlich |
| --------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |:------------:|
| variieren | string | Was sollen die Daten zurückgeben. <br /> 1. **Funktion** - Funktionsname <br /> 2. **Befehl** - Befehlsname <br /> 3. **Fehler** - aufgetretener Fehler |     wahr     |

## Beispiel(e)

**Sie benötigen `Ereignisse: ["onFunctionError"]` in Ihrer Hauptdatei, um diese Funktion nutzen zu können!**

```javascript
bot.functionErrorCommand({
    Kanal: "channelID (optional)",
    Code: `Etwas ist schiefgelaufen in Ihrem "$handleError[command]" Befehl! Die Funktion "$handleError[function]" hat den Fehler "$handleError[error]"!`
});
```
