---
title: '$interactionPing'
description: '$interactionPing renverra la latence d''une interaction.'
id: interactionPing
---

`$interactionPing` renverra la latence d'une interaction.

## Utilisation

```php
$interactionPing
```

**Veuillez noter que vous avez besoin de `events: ["onInteractionCreate"]` dans votre fichier principal**

## Exemple(s)

Cela retournera la latence d'une interaction :

```javascript
bot.command({
    name: 'interactionPing',
    code: `
 $addButton[1;Test;primary;boutonTest;false]
 Cliquez sur moi !
  `
});

bot.interactionCommand({
    name: 'boutonTest',
    prototype: 'button',
    code: `
  $interactionUpdate[Cela m'a pris : $interactionPing Ms !]
  `
});
```
