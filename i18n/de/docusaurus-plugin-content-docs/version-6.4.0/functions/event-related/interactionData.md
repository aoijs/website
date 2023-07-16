---
title: '$interactionData'
description: '$interactionData wird die angegebenen Argumente einer Interaktion zurückgeben.'
id: interactionData
---

`$interactionData` wird die angegebenen Argumente einer Interaktion zurückgeben.

## Verwendung

```php
$interactionData[data]
```

## Verwendung

| Feld  | Typ    | Beschreibung     | Erforderlich |
| ----- | ------ | ---------------- |:------------:|
| daten | string | Abrufbare Daten. |     wahr     |

## Beispiel(e)

```php
$interactionData[customId]
// gibt die benutzerdefinierte ID der Interaktion zurück.
```

```php
$interactionData[author.id]
// gibt die Autoren-ID der Interaktion zurück.
```

```php
$interactionData[message.id]
// gibt die ID der Interaktion zurück.
```

Das sind nur einige Beispiele, es gibt noch viel mehr.