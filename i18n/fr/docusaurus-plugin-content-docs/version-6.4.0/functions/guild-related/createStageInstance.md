---
title: '$createStageInstance'
description: '$createStageInstance fera commencer une conférence.'
id: createStageInstance
---

`$createStageInstance` fera commencer une conférence.

## Utilisation

```php
$createStageInstance[IDsalon;sujet;type?]
```

## Paramètres

| Champ   | Type                 | Description                                       | Obligatoire |
| ------- | -------------------- | ------------------------------------------------- |:-----------:|
| IDsalon | entier               | l'ID du salon de conférence                       |    vrai     |
| sujet   | chaine de caractères | Le sujet du salon de conférence qui sera affiché. |    vrai     |
| type?   | entier               | Le type de conférence (listé ci-dessous)          |    faux     |

<details open>
  <summary><h3> Les types de conférence </h3></summary>

| TYPE    | VALEUR |
| ------- | ------ |
| PUBLIC  | 1      |
| PRIVATE | 2      |

</details>

## Exemple(s)

Cela va créer un nouveau salon de conférence:

```javascript
bot.command({
    name: 'créerUneConférence',
    code: `
  $createStageInstance[IDconférence;Testing!;1] 
  ` // remplacez "IDconférence" avec un salon de conférence actuel
});
```
