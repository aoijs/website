---
title: '$commandInfo'
description: '$commandInfo wird den angegebenen Text eines Objekts zurückgeben.'
id: commandInfo
---

`$commandInfo` wird den angegebenen Text einer Eigenschaft zurückgeben.

## Verwendung

```php
$commandInfo[name;option]
```

## Verwendung

| Feld      | Typ    | Beschreibung            | Erforderlich |
| --------- | ------ | ----------------------- |:------------:|
| Name      | string | Befehlsname oder Alias. |     wahr     |
| variieren | string | Abrufbares Eigentum.    |     wahr     |

## Beispiel(e)

Dies gibt die Verwendung (definiert durch hinzugefügte Eigenschaften) des Befehls zurück:

* Sie können alles hinzufügen, was Sie möchten, zum Beispiel "Benutzung" wie unten.
* Sie können Aliase oder den Befehlsnamen verwenden, um seine Informationen zurückzugeben.

```javascript
bot.command({
    name: 'commandInfo',
    aliases: ["ci", "cmdInfo"],
    usage: "commandInfo [command]",
    code: `
  Verwendung: $commandInfo[ci;usage]
  `
});
```