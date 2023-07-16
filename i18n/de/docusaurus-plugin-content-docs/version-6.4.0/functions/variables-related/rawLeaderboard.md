---
title: '$rawLeaderboard'
description: '$rawLeaderboard wird eine Rangliste des angegebenen Typs zurückgeben.'
id: rawLeaderboard
---

`$rawLeaderboard` gibt eine Rangliste des angegebenen Typs zurück.

## Verwendung

```php
$rawLeaderboard[variable;order?;type?;custom?;list?;page?;table?]
```

## Verwendung

| Feld              | Typ    | Beschreibung                                                                                                                       | Erforderlich |
| ----------------- | ------ | ---------------------------------------------------------------------------------------------------------------------------------- |:------------:|
| variabel          | string | Variablenname.                                                                                                                     |     wahr     |
| typ               | string | Variablentyp <br /> 1. **globalUser** <br /> 2. **Benutzer** <br /> 3. **Server** <br /> 4. **Kanal**      |     wahr     |
| bestellung        | string | In welcher Reihenfolge wird es zurückgegeben <br /> 1. **asc** (aufsteigend / Standard) <br /> 2. **dsc** (absteigend) |     wahr     |
| kundenspezifisch? | string | Formatieren.                                                                                                                       |    falsch    |
| listen?           | anzahl | Wie viele aufgelistet werden sollen.                                                                                               |    falsch    |
| seite?            | anzahl | Welche Seite aufzulisten.                                                                                                          |    falsch    |
| Tabelle?          | string | Variable Tabelle.                                                                                                                  |    falsch    |

| Optionen    | Retouren           |                                                      |
| ----------- | ------------------ | ---------------------------------------------------- |
| **{top}**   | anzahl             | Gibt die Position des Benutzers zurück.              |
| **{name}**  | string             | Gibt den Benutzernamen zurück.                       |
| **{tag}**   | string             | Gibt den Benutzernamen und den Diskriminator zurück. |
| **{id}**    | ganze Zahl         | Gibt die Benutzer-ID zurück.                         |
| **{value}** | nummer, ganze Zahl | Gibt den Variablenwert zurück.                       |

## Beispiel(e)

Dies gibt eine Rangliste der "Beispiel-Variable" zurück:

```javascript
bot.command({
    name: "rawLeaderboard",
    code: `
    $rawLeaderboard[Example;asc;globalUser;{top} - {username} - {value};10;1;main]
    `
});
```