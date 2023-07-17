---
title: '$roleId'
description: '$roleId wird die ID einer Rolle zurückgeben.'
id: roleId
---

`$roleId` gibt die ID einer Rolle zurück.

## Verwendung

```php
$roleId[roleResolver;guildID?]
```

## Verwendung

| Feld         | Typ    | Beschreibung                                   | Erforderlich |
| ------------ | ------ | ---------------------------------------------- |:------------:|
| roleResolver | string | Name der Rolle.                                |     wahr     |
| guildID?     | string | ID der Gilde, in der die Rolle erstellt wurde. |    falsch    |

## Beispiel(e)

Dies gibt die Rollen-ID einer Rolle mit dem Namen `Besitzer` zurück (dieses Beispiel wird nicht funktionieren, wenn du diese Rolle nicht hast):

```javascript
bot.command({
    name: 'roleId',
    code: `
  $roleId[Owner;$guildID]
  `
});
```