---
title: $fetch
description: '$fetch wird Informationen über eine bestimmte Methode mit Discords API abrufen.'
id: fetch
---

`$fetch` wird Informationen über eine bestimmte Methode mit Discords API abrufen.

## Verwendung

```php
$fetch[method;query;...query]
```

## Verwendung

| Feld    | Typ    | Beschreibung                            | Erforderlich |
| ------- | ------ | --------------------------------------- |:------------:|
| Methode | string | Methode zum Abrufen (unten aufgeführt). |     wahr     |
| abfrage | string | Eingabe für die verwendete Methode.     |     wahr     |

<details>
  <summary><h3> Methoden </h3></summary>

| Methoden            |
| ------------------- |
| nachricht           |
| kanal               |
| benutzer            |
| einladen            |
| webhook             |
| anwendung           |
| befehl              |
| guildVorschau       |
| guildTemplate       |
| premiumStickerPacks |
| aufkleber           |
| guildBefehl         |
| Standard            |

</details>

## Beispiel(e)

Dies zeigt Informationen über die Anfangsnachricht mit der `Abruf` Funktion an:

```javascript
bot.command({
    name: 'fetch',
    code: `
  \`\`\`
  $fetch[message;$messageID]
  \`\`\`
  `
});
```
