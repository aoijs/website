---
title: '$exec'
description: '$exec exécutera un code donné dans votre console.'
id: exec
---

`$exec` exécutera le code donné dans votre console.

## Utilisation

```php
$exec[code]
```

## Paramètres

| Champ | Type                 | Description                         | Obligatoire |
| ----- | -------------------- | ----------------------------------- |:-----------:|
| code  | chaîne de caractères | Code à exécuter dans votre console. |    vrai     |

## Exemple(s)

Ceci retournera la version actuelle de votre node :

```javascript
bot.command({
    name: "exec",
    code: `
    \`\`\`
    $exec[node -v]
    \`\`\`
  `
});
```