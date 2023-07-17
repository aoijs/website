---
title: '$clientTyping'
description: '$clientTyping fera écrire votre bot dans un salon (montrer qu''il est entrain d''écrire).'
id: clientTyping
---

`$clientTyping` fera écrire votre bot dans un salon (montrer qu'il est entrain d'écrire).

## Utilisation

```php
$clientTyping
```

## Exemple(s)

Ceci affichera votre bot entrain d'écrire puis enverra "Bonjour!" comme message :

```javascript
bot.command({
    name: 'clientTyping',
    code: `
  Bonjour !
  $clientTyping
  `
});
```
