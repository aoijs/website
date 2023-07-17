---
title: '$createSticker'
description: '$createSticker wird einen Aufkleber erstellen.'
id: createSticker
---

`$createSticker` wird einen Aufkleber erstellen.

## Verwendung

```php
$createSticker[guildID;URL;name;returnSticker?;tags;description;reason]
```

## Verwendung

| Feld            | Typ        | Beschreibung                                                                                                    | Erforderlich |
| --------------- | ---------- | --------------------------------------------------------------------------------------------------------------- |:------------:|
| guildID         | ganze Zahl | Gilden-ID, wo der Aufkleber erstellt wird.                                                                      |     wahr     |
| URL             | string     | Bild-URL (**png nur**).                                                                                         |     wahr     |
| name            | string     | Der Aufklebername.                                                                                              |     wahr     |
| return Sticker? | boolean    | Gibt den Aufkleber nach seiner Erstellung zurück. <br /> 1. **true** <br /> 2. **false** (Standard) |    falsch    |
| tags?           | string     | Aufkleber-Tags.                                                                                                 |    falsch    |
| beschreibung?   | string     | Die Beschreibung des Aufklebers.                                                                                |    falsch    |
| warum?          | string     | Begründung, die im Audit-Log der Gilde angezeigt wird.                                                          |    falsch    |

## Beispiel(e)

Dies wird einen Aufkleber mit dem Namen `Imagine` erstellen:

```javascript
bot.command({
    Name: 'createSticker',
    Code: `
  $createSticker[$guildID;https://cdn.discordapp.com/attachments/1061712111052521493/1066397675278323734/692445926480150611.png;Imagine;true;money;Random sticker;Testing.]
  `
});
```
