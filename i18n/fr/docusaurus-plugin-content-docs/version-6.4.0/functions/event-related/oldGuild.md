---
title: '$oldGuild'
description: '$oldGuild conserve les données du serveur avant sa mise à jour, ceci provient du cache de discord et peut être vide selon qu''il est mis en cache, donc utilisez une option partielle avant d''essayer d''accéder à n''importe quelle propriété. (évènement guildUpdate)'
id: oldGuild
---

`$oldGuild` conserve les données du serveur avant sa mise à jour, ceci provient du cache de discord et peut être vide selon qu'il est mis en cache, donc utilisez une option partielle avant d'essayer d'accéder à n'importe quelle propriété. (évènement guildUpdate)

## Utilisation

```php
$oldGuild[option]
```

## Paramètres

| Champ  | Type                 | Description         | Obligatoire |
| ------ | -------------------- | ------------------- |:-----------:|
| option | chaîne de caractères | Option à récupérer. |    vrai     |