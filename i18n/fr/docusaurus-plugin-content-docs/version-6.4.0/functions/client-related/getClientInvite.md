---
title: '$getClientInvite'
description: '$getClientInvite retournera l''invitation de votre bot avec les permissions spécifiées.'
id: getClientInvite
---

`$getClientInvite` retournera l'invitation de votre bot avec les permissions spécifiées.

## Utilisation

```php
$getClientInvite[...permissions?]
```

## Paramètres

| Champ        | Type                | Description                                            | Obligatoire |
| ------------ | ------------------- | ------------------------------------------------------ |:-----------:|
| permissions? | chaîne de caractère | Permissions que vous voulez inclure dans l'invitation. |    faux     |

<details>
  <summary><h3> Autorisations de l'API Discord </h3></summary>

| Permissions             |                                                                                     |
| ----------------------- | ----------------------------------------------------------------------------------- |
| createinvite            | Permission de créer des invitations de serveur                                      |
| kickmembers             | Permission d'expulser les membres du serveur                                        |
| banmembers              | Permission de bannir les membres du serveur                                         |
| administrator           | Autorisations d'administrateur                                                      |
| managechannel           | Permission de gérer les salons du serveur                                           |
| manageserver            | Permissions de modifier les paramètres du serveur                                   |
| addreactions            | Permissions d'ajouter des réactions                                                 |
| viewauditlog            | Permission de voir les logs du serveur                                              |
| priorityspeaker         | Voix prioritaire                                                                    |
| stream                  | Permission de diffuser dans les salons vocaux                                       |
| viewchannel             | Permission de voir un certain salon                                                 |
| sendmessages            | Permission d'envoyer des messages dans un certain salon                             |
| sendttsmessages         | Autorisation d'envoyer des messages de synthèse vocale                              |
| managemessages          | Permission de gérer les messages                                                    |
| embedlinks              | Permission d'intégrer des liens                                                     |
| attachfiles             | Permission de joindre des fichiers                                                  |
| readmessagehistory      | Permission de lire l'historique des messages dans un certain salon                  |
| mentioneveryone         | Permission de mentionner `@everyone`/`@here` et tous les rôles                      |
| externalemojis          | Permission d'utiliser des émojis externes                                           |
| viewguildinsights       | Permission de voir les aperçus de la guilde                                         |
| connect                 | Permission de se connecter aux salons vocaux et aux conférences                     |
| mutemembers             | Permission de rendre muet les membres dans les salons vocaux                        |
| deafenmembers           | Permission de rendre sourds les membres dans les salons vocaux                      |
| movemembers             | Permission de déplacer les membres entre les salons vocaux                          |
| usevad                  | Permission d'utiliser la détection des activités vocales                            |
| changenickname          | Permission de changer votre propre pseudo                                           |
| managenicknames         | Autorisation de gérer les pseudos des autres membres                                |
| manageroles             | Permission de gérer les rôles                                                       |
| managewebhooks          | Permission de gérer les webhooks                                                    |
| manageemojisandstickers | Permission de gérer les émojis et les autocollants                                  |
| useappcmds              | Permission d'utiliser les commandes d'application                                   |
| requesttospeak          | Permission de demander la parole lors des conférences                               |
| manageevents            | Permission de gérer les événements                                                  |
| managethreads           | Permission de gérer les fils                                                        |
| createpublicthreads     | Permission d'utiliser des fils publics                                              |
| createprivatethreads    | Permission d'utiliser des fils privés                                               |
| createpublicthreads     | Permission de créer des fils de discussion publics                                  |
| createprivatethreads    | Permission de créer des fils de discussion privés                                   |
| externalstickers        | Permission d'utiliser des autocollants externes                                     |
| sendmessageinthreads    | Permission d'envoyer des messages dans les fils                                     |
| startembeddedactivities | Permission de démarrer des activités dans les salons vocaux                         |
| moderatemembers         | Permission d'exclure temporairement et d'arrêter l'exclusion des membres du serveur |

</details>

## Exemple(s)

Cela retournera l'invitation de votre bot avec les permissions d'administrateur :

```javascript
bot.command({
    name: 'getClientInvite',
    code: `
  Invitez-moi ici: $getClientInvite[administrator]
  `
});
```