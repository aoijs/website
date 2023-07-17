---
title: '$broadcastEval'
description: '$broadcastEval wird einen Code in allen Gilden aller Scherben ausführen.'
id: broadcastEval
---

`$broadcastEval` wird einen Code in allen Gilden aller Scherben ausführen. (erfordert Scherben)

## Verwendung

```php
$broadcastEval[function]
```

## Parameter

| Feld     | Typ    | Beschreibung                             | Erforderlich |
| -------- | ------ | ---------------------------------------- |:------------:|
| funktion | string | Funktion oder Code, der ausgeführt wird. |     wahr     |

## Beispiel(e)

**Erfordert Freigabe - Überprüfe die Freigabeanleitung, wenn du eine Erklärung benötigst**

Dies gibt die Anzahl der Server zurück, die Ihr Bot ist:

```javascript
bot.command({
    Name: 'broadcastEval',
    Code: `
  $broadcastEval[$guildCount]
  `
});
```
