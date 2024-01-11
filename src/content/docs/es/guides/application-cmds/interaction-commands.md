---
title: Comandos de Interacción
description: Esta guía cubrirá los conceptos básicos sobre los Comandos de Interacción y su funcionalidad, así como todo lo que puedas necesitar saber.
id: interactioncommands
og_image: https://raw.githubusercontent.com/aoijs/website/main/src/images/og/3.png
sidebar:
  order: 1
---

<!-- omit from toc -->
### Tabla de Contenidos

- [Introducción](#introducción)
- [Empezando](#empezando)
  - [Invitar a tu bot con los permisos correctos](#invitar-a-tu-bot-con-los-permisos-correctos)
- [Importante](#importante)
- [Creando Comandos de Aplicación](#creando-comandos-de-aplicación)
    - [Tipos de Aplicación](#tipos-de-aplicación)
  - [Ejemplos de creación de Comandos de Aplicación](#ejemplos-de-creación-de-comandos-de-aplicación)
- [Conclusión](#conclusión)
- [Tipo de Opción de Comando de Aplicación](#tipo-de-opción-de-comando-de-aplicación)

---

## Introducción

Los Comandos de Aplicación facilitan el uso de nuestros bots favoritos en Discord. Todo lo que necesitas hacer es escribir `/` seguido del comando que deseas usar o hacer clic derecho en un mensaje, y tu bot favorito hará el resto.

Los Comandos de Aplicación hacen que sea más fácil para los usuarios descubrir qué puede hacer un bot, y también pueden encontrar nuevas funciones a medida que se agregan. La validación, los estados de error y una interfaz fácil de usar guían a los usuarios a través de los comandos, para que puedan obtener rápidamente los resultados que necesitan sin confusión ni frustración. Además, permiten a los usuarios mantener separado el modelo mental de cómo piensan sobre el bot de cómo realmente funciona, lo que facilita que todos comprendan y utilicen el bot.

El uso de Comandos de Aplicación ofrece algunos beneficios, como la capacidad de acceder de manera rápida y fácil a las funciones de un bot, una interfaz fácil de usar para guiar a los usuarios a través de los comandos y la capacidad de separar el modelo mental del usuario de los trabajos internos del bot. Todo esto hace que sea más fácil para los usuarios utilizar el bot y aprovechar al máximo.

## Empezando

### Invitar a tu bot con los permisos correctos

Para usar los Comandos de Aplicación, tu bot necesita el alcance `application.commands` que se puede encontrar en
el [Portal de Desarrolladores de Discord](https://discord.com/developers/applications/). No tienes que expulsar a tu bot ni
nada, simplemente vuelvelo a invitar.

![alcance](https://media.discordapp.net/attachments/1061712111052521493/1062539303386873929/image_5.png?width=1200&height=447)

## Importante

- Debido a las limitaciones de Discord, solo puedes tener hasta **50 comandos de barra inclinada (slash commands)** en tu bot/por servidor.
- Dos comandos de aplicación no pueden tener el **mismo nombre** en el mismo servidor.
- Los nombres de comandos de aplicación no pueden contener **símbolos especiales (esto incluye espacios)** y deben ser más cortos que **32 caracteres**.
- Necesitas `events: ["onMessage", "onInteractionCreate"]` en tu archivo principal.

![ejemplo-barra-inclinada](https://cdn.discordapp.com/attachments/1061712111052521493/1062559509601591427/image_6.png)

## Creando Comandos de Aplicación

```js
$createApplicationCommand[guildID/global;name;description;defaultPermission(true/false);type(slash/user/message);options?]
```

| Campo             | Tipo                                                                                                                                                                                                 | Descripción                                                                                                   | Requerido |
| ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | :-------: |
| guildID/global    | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String), [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | El tipo de comando de aplicación, ya sea para cada servidor (global) o para un servidor específico (guildID). |   true    |
| name              | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String), [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | El nombre real del comando de barra inclinada que será visible para el usuario.                               |   true    |
| description       | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String), [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | La descripción del comando de barra inclinada que será visible para el usuario.                               |   true    |
| defaultPermission | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)                                                                                                    | Si el comando de aplicación debe sincronizarse con los permisos por defecto.                                  |   true    |
| type              | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)                                                                                                    | El tipo de comando de aplicación (explicado a continuación)                                                   |   true    |
| options?          | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)                                                                                                    | [Opciones de comandos de barra inclinada](#ejemplos-de-creación-de-comandos-de-aplicación).                        |   true    |

#### Tipos de Aplicación

> - `message` — Crea un Comando de Aplicación que se puede ejecutar en un mensaje. ([documentación](https://discord.com/developers/docs/interactions/application-commands#message-commands))
> - `slash` — Crea un Comando de Aplicación como comando de barra inclinada. ([documentación](https://discord.com/developers/docs/interactions/application-commands))
> - `user` — Crea un Comando de Aplicación que se puede ejecutar en un usuario. ([documentación](https://discord.com/developers/docs/interactions/application-commands#user-commands))

### Ejemplos de creación de Comandos de Aplicación

```js
client.command({
  name: "createApplicationCommand",
  code: `
  $createApplicationCommand[guildID/global;example;¡Descripción del comando de barra inclinada!;true;slash]`
});
```

## Conclusión

Los Comandos de Interacción son una herramienta increíblemente útil para desarrollar bots interactivos. Se pueden utilizar para crear interacciones sól

idas con los usuarios y facilitar la gestión de comandos y funciones. Esperamos que esta guía haya sido útil para aprender cómo utilizar los Comandos de Interacción y los conceptos básicos de cómo funcionan.

## [Tipo de Opción de Comando de Aplicación](https://discord.com/developers/docs/interactions/application-commands#application-command-object-application-command-option-type)

| NOMBRE            | ID  | NOTA                                                                                      |
| ----------------- | --- | ----------------------------------------------------------------------------------------- |
| SUB_COMMAND       | 1   |                                                                                           |
| SUB_COMMAND_GROUP | 2   |                                                                                           |
| STRING            | 3   |                                                                                           |
| NUMBER            | 4   | Cualquier número entre -2^53 y 2^53                                                       |
| BOOLEAN           | 5   |                                                                                           |
| USER              | 6   |                                                                                           |
| CHANNEL           | 7   | Incluye todos los tipos de canales + categorías                                           |
| ROL               | 8   |                                                                                           |
| MENTIONABLE       | 9   | Incluye usuarios y roles                                                                  |
| NUMBER            | 10  | Cualquier doble entre -2^53 y 2^53                                                        |
| ADJUNTO           | 11  | Objeto [adjunto](https://discord.com/developers/docs/resources/channel#attachment-object) |
