---
title: '$slashOption'
description: '$slashOption gibt Daten einer Schrägstrich Befehlsoption zurück.'
id: slashOption
---

`$slashOption` gibt Daten einer Schrägstrich Befehlsoption zurück.

## Verwendung

```php
$slashOption[option]
```

## Verwendung

| Feld      | Typ    | Beschreibung | Erforderlich |
| --------- | ------ | ------------ |:------------:|
| variieren | string | Optionsname. |     wahr     |

## Beispiel(e)

```javascript
$createApplicationCommand[global;exampleslash;Einfache Beispiel Schrägstrich Befehl.;true;slash;[{
    "name": "exampleOption",
    "description": "example slash command option",
    "required": true,
    "type": 3
}]]
```

```javascript
bot.command({
    name: 'exampleslash',
    type: 'interaction',
    prototype: 'slash',
    code: `
    $interactionReply[Was für ein großartiges Beispiel! Du hast $slashOption[exampleOption]!]`
});
```