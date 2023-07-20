---
title: '$title'
description: '$title ajoute un titre à un embed.'
id: title
---

`$title` ajoute un titre à un embed.

## Utilisation

```php
$title[index?;titre;URL?]
```

## Paramètres

| Champ  | Type                 | Description                      | Obligatoire |
| ------ | -------------------- | -------------------------------- |:-----------:|
| index? | nombre               | L'index de l'embed.              |    Faux     |
| title  | chaîne de caractères | Le contenu du titre de l'embed.  |    vrai     |
| URL?   | chaîne de caractères | URL qui sera le lien hypertexte. |    Faux     |

## Exemple(s)

Cela va créer un embed avec un titre :

```javascript
bot.command({
    name: 'title',
    code: `
   $title[Bonjour !;https://aoi.js.org]
   $description[Ce titre contient un hyperlien !]`
});
```