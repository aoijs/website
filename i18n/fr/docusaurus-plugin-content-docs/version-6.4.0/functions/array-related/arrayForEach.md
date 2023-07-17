---
title: '$arrayForEach'
description: '$arrayForEach exécutera une commande attendue pour chaque élément du tableau.'
id: arrayForEach
---

`$arrayForEach` exécutera une commande attendue pour chaque élément du tableau.

## Utilisation

```php
$arrayForEach[nom;commandeAttendue;donnéesAttendues?]
```

## Paramètres

| Champ             | Type                 | Description             | Obligatoire |
| ----------------- | -------------------- | ----------------------- |:-----------:|
| nom               | chaîne de caractères | Nom du tableau.         |    vrai     |
| commandeAttendue  | chaîne de caractères | La commande à exécuter. |    vrai     |
| donnéesAttendues? | chaîne de caractères | Données attendues.      |    faux     |