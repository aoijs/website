---
title: '$createScheduledEvent'
description: '$createScheduledEvent va créer un événement planifié.'
id: createScheduledEvent
---

`$createScheduledEvent` va créer un événement planifié.

## Utilisation

```php
$createScheduledEvent[IDsalon;nom;description;débutEvènement;finEvènement?;MétadonnéesType?;MétadonnéesEntité?;image?;raison?]
```

## Paramètres

| Champ              | Type                 | Description                                           | Obligatoire |
| ------------------ | -------------------- | ----------------------------------------------------- |:-----------:|
| IDsalon            | entier               | Là où aura lieu l'évènement l'événement.              |    vrai     |
| nom                | chaine de caractères | Le titre d'événement                                  |    vrai     |
| description        | chaine de caractères | La description de l'évènement.                        |    vrai     |
| débutEvènement     | chaîne de caractères | Quand l'événement commencera.                         |    vrai     |
| finEvènement?      | chaine de caractères | Quand l'événement se terminera.                       |    faux     |
| MétadonnéesType?   | chaîne de caractères | Type d'événement                                      |    faux     |
| MétadonnéesEntité? | chaîne de caractères | Métadonnées de l’événement                            |    faux     |
| image?             | chaine de caractères | Image/Vignette de l'événement planifié.               |    faux     |
| raison?            | chaine de caractères | La raison qui sera affichée dans les logs du serveur. |    faux     |
