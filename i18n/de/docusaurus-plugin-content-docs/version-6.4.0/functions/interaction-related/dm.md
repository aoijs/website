---
title: '$dm'
description: '$dm wird eine Nachricht an Benutzer Direktnachrichten senden.'
id: dm
---

`$dm` wird eine Nachricht an Benutzer Direktnachrichten senden.

## Verwendung

```php
$dm[userID]
```

## Verwendung

| Feld   | Typ        | Beschreibung                            | Erforderlich |
| ------ | ---------- | --------------------------------------- |:------------:|
| userID | ganze Zahl | Der Benutzer, der das DM erhalten soll. |     wahr     |

**Wichtige**:
- Du bist nicht in der Lage, DM andere Bots.
- Du bist nicht in der Lage, DM Leute, die ihre DM geschlossen haben.

## Beispiel(e)

Dies wird Ihnen ein DM schicken, das "Hallo! Haben Sie wirklich gedacht, dass dies funktioniert?":

```javascript
bot.command({
    name: 'dm',
    code: `
  Hallo! Haben Sie wirklich gedacht, dass das funktioniert?
  $dm[$authorID]
  `
});
```