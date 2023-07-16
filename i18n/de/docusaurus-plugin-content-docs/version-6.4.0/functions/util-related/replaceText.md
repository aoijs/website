---
title: $replaceText
description: '$replaceText wird bestimmte Textsegmente ersetzen.'
id: replaceText
---

`$replaceText` wird bestimmte Textsegmente ersetzen.

## Verwendung

```php
$replaceText[text;replacer;replaceTo;times?]
```

## Verwendung

| Feld        | Typ    | Beschreibung                                                     | Erforderlich |
| ----------- | ------ | ---------------------------------------------------------------- |:------------:|
| text        | string | Text, den Sie ändern möchten.                                    |     wahr     |
| austauscher | string | Der Text, der ersetzt wird.                                      |     wahr     |
| ersetzen    | string | Der Text, der `Ersetzer` ersetzen soll.                          |     wahr     |
| mal?        | anzahl | Wie oft `ersetzt` den `Ersetzer`. / Benutze `-1` für die letzte. |    falsch    |

## Beispiel(e)

Dies ersetzt `M` durch `D` und die Ausgabe wird `Esel` sein:

```javascript
bot.command({
    name: 'replaceText',
    code: `
  $replaceText[Monkey;M;D]
  `
});
```

### Erweitertes Beispiel

Dies ersetzt das Wort `Kaffee` zweimal mit dem letzten [Feld](#parameters) von `$replaceText`:

```javascript
bot.command({
    name: 'replaceText',
    code: `
  $replaceText[Ich trinke gerne Kaffee, Kaffee gibt mir Macht! Kaffee ist schlecht für meine Gesundheit.;Kaffee;Orangensaft;2]
  `
});
```

Dies ersetzt `Ferel` und `sind` mit mehreren `$replaceText`:

```javascript
bot.command({
    name: 'replaceText',
    code: `
  $replaceText[$replaceText[Leref and Ferel are the same person.;Ferel;Ayaka];are;are nicht]
  `
});
```
