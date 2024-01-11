---
title: Eventos de la API
description: Esta página contiene todos los eventos disponibles en aoi.js.
id: clientevents
og_image: https://raw.githubusercontent.com/aoijs/website/main/src/images/og/15.png
---

<!-- omitir del índice -->
### Tabla de Contenidos

- [Tipos de Eventos](#tipos-de-eventos)
  - [Eventos Basados en Mensajes](#eventos-basados-en-mensajes)
  - [Eventos Basados en el Servidor](#eventos-basados-en-el-servidor)
  - [Eventos Basados en Miembros del Servidor](#eventos-basados-en-miembros-del-servidor)
  - [Eventos basados en usuarios](#eventos-basados-en-usuarios)
  - [Eventos personalizados](#eventos-personalizados)
- [Uso de eventos](#uso-de-eventos)
    - [Ejemplo de uso de eventos sin manejador](#ejemplo-de-uso-de-eventos-sin-manejador)
    - [Ejemplo de uso de eventos en el manejador](#ejemplo-de-uso-de-eventos-en-el-manejador)

---

:::caution[Reorganización]

Esta página será reorganizada en el futuro.

:::

**aoi.js** tiene varios oyentes de eventos, conocidos como "eventos", que cubren la mayoría de los eventos proporcionados por la API de Discord.

Cada uno de ellos tiene su propio uso y tipo de comando para ejecutar tareas específicas (por ejemplo, para fines de registro).

Los eventos no son obligatorios, aparte de **`onMessage`** (que es necesario para que el bot lea y envíe mensajes), pero
si deseas utilizarlos, deben incluirse en tu archivo principal para que el bot escuche esos eventos.
Esto es necesario para poder utilizar los diferentes tipos de comandos.

Es importante tener en cuenta que para utilizar ciertos eventos, necesitarás activar tus intenciones en el Portal de Desarrolladores de Discord.

## Tipos de Eventos

### Eventos Basados en Mensajes

- **onMessage** &rarr; (requiere la **[intención de contenido de mensaje](https://discord.com/developers/docs/topics/gateway#caveats)**) Emitido cada vez que se envía un mensaje.
- **onMessageDelete** &rarr; Emitido cada vez que se elimina un mensaje.
  - `messageDelete` &rarr; Tipo de Comando del Manejador.
- **onMessageUpdate** &rarr; Emitido cada vez que se actualiza un mensaje (por ejemplo, cambio de contenido o incrustación).
  - `messageUpdate` &rarr; Tipo de Comando del Manejador.
  - `$oldMessage` &rarr; Obtiene el mensaje antiguo de la caché del cliente (si lo hay).
  - `$message` &rarr; Obtiene el nuevo mensaje. (si lo hay)
- **onMessageDeleteBulk** &rarr; Emitido cada vez que se eliminan mensajes en masa.
  - `messageDeleteBulk` &rarr; Tipo de Comando del Manejador.
- **onReactionAdd** &rarr; Emitido cada vez que se agrega una reacción a un mensaje.
  - `reactionAdd` &rarr; Tipo de Comando del Manejador.
- **onReactionRemove** &rarr; Emitido cada vez que se elimina una reacción de un mensaje.
  - `reactionRemove` &rarr; Tipo de Comando del Manejador.
- **onReactionRemoveAll** &rarr; Emitido cada vez que se eliminan todas las reacciones de un mensaje.
  - `reactionRemoveAll` &rarr; Tipo de Comando del Manejador.

### Eventos Basados en el Servidor

- **onInviteCreate** &rarr; Emitido cada vez que se crea una invitación al servidor.
  - `inviteCreate` &rarr; Tipo de Comando del Manejador.
- **onInviteDelete** &rarr; Emitido cada vez que se elimina una invitación al servidor.
  - `inviteDelete` &rarr; Tipo de Comando del Manejador.
- **onGuildJoin** &rarr; Emitido cada vez que el cliente se une a un servidor.
  - `guildJoin` &rarr; Tipo de Comando del Manejador.
- **onGuildLeave** &rarr; Emitido cada vez que el cliente abandona un servidor.
  - `guildLeave` &rarr; Tipo de Comando del Manejador.
- **onGuildUpdate** &rarr; Emitido cada vez que un servidor se actualiza (por ejemplo, cambio de nombre).
  - `guildUpdate` &rarr; Tipo de Comando del Manejador.
  * `$oldGuild[opción?]` &rarr; Obtiene datos del antiguo servidor. (si los hay)
  * `$newGuild[opción?]` &rarr; Obtiene datos del servidor nuevo/actualizado. (si los hay)
- **onGuildUnavailable** &rarr; Emitido cada vez que un servidor no está disponible, probablemente debido a una interrupción del servidor.
  - `guildUnavailable` &rarr; Tipo de Comando del Manejador.
- **onRoleCreate** &rarr; Emitido cada vez que se crea un rol.
  - `roleCreate` &rarr; Tipo de Comando del Manejador.
- **onRoleUpdate** &rarr; Emitido cada vez que se actualiza un rol (por ejemplo, cambio de color).
  - `roleUpdate` &rarr; Tipo de Comando del Manejador.
  * `$oldRole[opción?]` &rarr; Obtiene datos del antiguo rol. (si los hay)
  * `$newRole[opción?]` &rarr; Obtiene datos del rol nuevo/actualizado. (si los hay)
- **onRoleDelete** &rarr; Emitido cada vez que se elimina un rol.
  - `roleDelete` &rarr; Tipo de Comando del Manejador.
- **onChannelCreate** &rarr; Emitido cada vez que se crea un canal.
  - `channelCreate` &rarr; Tipo de Comando del Manejador.
- **onChannelUpdate** &rarr; Emitido cada vez que se actualiza un canal (por ejemplo, cambio de tema).
  - `channelUpdate` &rarr; Tipo de Comando del Manejador.
  * `$oldChannel[opción?]` &rarr; Obtiene datos del antiguo canal. (si los hay)
  * `$newChannel[opción?]` &rarr; Obtiene datos del canal nuevo/actualizado. (si los hay)
- **onChannelDelete** &rarr; Emitido cada vez que se elimina un canal.


  - `channelDelete` &rarr; Tipo de Comando del Manejador.
- **onChannelPinsUpdate** &rarr; Emitido cada vez que se actualizan los pins de un canal.
  - `channelPinsUpdate` &rarr; Tipo de Comando del Manejador.
- **onStageInstanceCreate** &rarr; Emitido cada vez que se crea una instancia de escenario.
  - `stageInstanceCreate` &rarr; Tipo de Comando del Manejador.
- **onStageInstanceUpdate** &rarr; Emitido cada vez que se actualiza una instancia de escenario.
  - `stageInstanceUpdate` &rarr; Tipo de Comando del Manejador.
- **onStageInstanceDelete** &rarr; Emitido cada vez que se elimina una instancia de escenario.
  - `stageInstanceDelete` &rarr; Tipo de Comando del Manejador.
- **onThreadCreate** &rarr; Emitido cada vez que se crea un hilo.
  - `threadCreate` &rarr; Tipo de Comando del Manejador.
- **onThreadUpdate** &rarr; Emitido cada vez que se actualiza un hilo.
  - `threadUpdate` &rarr; Tipo de Comando del Manejador.
- **onThreadDelete** &rarr; Emitido cada vez que se elimina un hilo.
  - `threadDelete` &rarr; Tipo de Comando del Manejador.
- **onThreadListSync** &rarr; Emitido cada vez que el usuario cliente obtiene acceso a un canal de texto o de noticias que contiene hilos.
  - `threadListSync` &rarr; Tipo de Comando del Manejador.
- **onThreadMemberUpdate** &rarr; (requiere la **[intención de miembros de servidor](https://discord.com/developers/docs/topics/gateway#caveats)**) Emitido cada vez que se actualiza el miembro del hilo del usuario cliente.
  - `threadMemberUpdate` &rarr; Tipo de Comando del Manejador.
- **onThreadMembersUpdate** &rarr; (requiere la **[intención de miembros de servidor](https://discord.com/developers/docs/topics/gateway#caveats)**) Emitido cada vez que se agregan o eliminan miembros de un hilo.
  - `threadMembersUpdate` &rarr; Tipo de Comando del Manejador.
- **onEmojiCreate** &rarr; Emitido cada vez que se crea un emoji personalizado en un servidor.
  - `emojiCreate` &rarr; Tipo de Comando del Manejador.
- **onEmojiDelete** &rarr; Emitido cada vez que se elimina un emoji personalizado en un servidor.
  - `emojiDelete` &rarr; Tipo de Comando del Manejador.
- **onEmojiUpdate** &rarr; Emitido cada vez que se actualiza un emoji personalizado de servidor.
  - `emojiUpdate` &rarr; Tipo de Comando del Manejador.
  * `$oldEmoji[opción?]` &rarr; Obtiene datos del antiguo emoji. (si los hay)
  * `$newEmoji[opción?]` &rarr; Obtiene datos del emoji nuevo/actualizado. (si los hay)
- **onStickerCreate** &rarr; Emitido cada vez que se crea un sticker personalizado en un servidor.
  - `stickerCreate` &rarr; Tipo de Comando del Manejador.
- **onStickerDelete** &rarr; Emitido cada vez que se elimina un sticker personalizado en un servidor.
  - `stickerDelete` &rarr; Tipo de Comando del Manejador.
- **onStickerUpdate** &rarr; Emitido cada vez que se actualiza un sticker personalizado en un servidor.
  - `stickerUpdate` &rarr; Tipo de Comando del Manejador.
  * `$oldEmoji[opción?]` &rarr; Obtiene datos del antiguo sticker. (si los hay)
  * `$newEmoji[opción?]` &rarr; Obtiene datos del nuevo sticker. (si los hay)
- **onBanAdd** &rarr; Emitido cada vez que se prohíbe a un miembro de un servidor.
  - `banAdd` &rarr; Tipo de Comando del Manejador.
- **onBanRemove** &rarr; Emitido cada vez que se quita la prohibición a un miembro de un servidor.
  - `banRemove` &rarr; Tipo de Comando del Manejador.
- **onVoiceStateUpdate** &rarr; Emitido cada vez que un usuario cambia de estado de voz (por ejemplo, se une/sale de un canal, silencia/desilencia).
  - `voiceStateUpdate` &rarr; Tipo de Comando del Manejador.
  * `$oldState[opción?]` &rarr; Obtiene datos del antiguo estado de voz. (si los hay)
  * `$newState[opción?]` &rarr; Obtiene datos del nuevo estado de voz. (si los hay)
- **onWebhookUpdate** &rarr; Emitido cada vez que un canal tiene cambios en sus webhooks.
  - `webhookUpdate` &rarr; Tipo de Comando del Manejador.

### Eventos Basados en Miembros del Servidor

- **onJoin** &rarr; Emitido cada vez que un usuario se une a un servidor.
  - `join` &rarr; Tipo de Comando del Manejador.
- **onLeave** &rarr; Emitido cada vez que un miembro abandona un servidor o es expulsado.
  - `leave` &rarr; Tipo de Comando del Manejador.
- **onMemberUpdate** &rarr; (requiere la **[intención de miembros de servidor](https://discord.com/developers/docs/topics/gateway#caveats)**) Emitido cada vez que cambia un miembro del servidor (por ejemplo, nuevo rol, rol eliminado, apodo).
  - `memberUpdate` &rarr; Tipo de Comando del Manejador.
  * `$oldMember[opción?]` &rarr; Obtiene datos del antiguo miembro. (si los hay)
  * `$newMember[opción?]` &rarr; Obtiene datos del nuevo/miembro actualizado. (si los hay)
- **onMemberAvailable** &rarr; (requiere la **[intención de miembros de servidor](https://discord.com/developers/docs/topics/gateway#caveats)**) Emitido cada vez que un miembro se vuelve disponible en un servidor grande.
  - `memberAvailable` &rarr; Tipo de Comando del Manejador.
- **onMembersChunk** &rarr; (requiere la **[intención de miembros de servidor](https://discord.com/developers/docs/topics/gateway#caveats

### Eventos basados en usuarios

- **onPresenceUpdate** &rarr; Se emite cada vez que cambia la presencia de un miembro del gremio o cuando cambian alguno de sus detalles.
  - `presenceUpdate` &rarr; Tipo de controlador de comandos.
  * `$oldPresence[opción]` &rarr; Recupera datos de la antigua presencia (si los hay).
  * `$newPresence[opción]` &rarr; Recupera datos de la nueva presencia (si los hay).
- **onTypingStart** &rarr; Se emite cada vez que un usuario comienza a escribir en un canal.
  - `typingStart` &rarr; Tipo de controlador de comandos.
- **onUserUpdate** &rarr; Se emite cada vez que cambian los detalles de un usuario (por ejemplo, nombre de usuario).
  - `userUpdate` &rarr; Tipo de controlador de comandos.
  * `$oldUser[opción]` &rarr; Recupera datos del antiguo usuario (si los hay).
  * `$newUser[opción]` &rarr; Recupera datos del usuario actualizado/nuevo (si los hay).

### Eventos personalizados

- **onInteractionCreate** &rarr; Se emite cada vez que se crea una interacción.
- **onFunctionError** &rarr; Se emite cada vez que un comando o función devuelve un mensaje de error.
- **onApplicationCommandPermissionsUpdate** &rarr; Se emite cada vez que se actualiza un comando de aplicación (por ejemplo, nombre).
  - `$oldApplicationCmd[opción?]` &rarr; Recupera datos del antiguo comando de aplicación.
  - `$newApplicationCmd[opción?]` &rarr; Recupera datos del comando de aplicación actualizado.
- **onVariableCreate** &rarr; Se emite cada vez que se crea una variable.
- **onVariableDelete** &rarr; Se emite cada vez que se elimina una variable.
- **onVariableUpdate** &rarr; Se emite cada vez que se actualiza una variable.
  - `$oldVariable[opt;separator?]` &rarr; Recupera los datos antiguos de la variable (si los hay).
  - `$newVariable[opt;separator?]` &rarr; Recupera los datos nuevos/actualizados de la variable (si los hay).
- **onShardDisconnect** &rarr; Se emite cada vez que se desconecta el fragmento del cliente.
- **onShardError** &rarr; Se emite cada vez que un fragmento del cliente devuelve un error.
- **onShardReady** &rarr; Se emite cada vez que un fragmento del cliente está listo.
- **onShardReconnecting** &rarr; Se emite cada vez que un fragmento del cliente se está reconectando actualmente.
- **onShardResume** &rarr; Se emite cada vez que el fragmento se reanuda.

## Uso de eventos

```js title="index.js"
const { AoiClient } = require("aoi.js");

const client = new AoiClient({
  token: "TOKEN DEL BOT DE DISCORD",
  prefix: "PREFIJO DEL BOT DE DISCORD",
  intents: ["Gremios", "MensajesDeGremio", "ContenidoDeMensajes"],
  events: ["onMensaje", "onUnirse", "onSalir", "onBanAñadir", "onBanQuitar"],
  /* ... */
});
```

#### Ejemplo de uso de eventos sin manejador

```javascript title="index.js"
client.<nombreDelEvento>Command({ // excluir "on" del evento, por ejemplo, "onTypingStart" -> "typingStartCommand"
    name?: string // opción para eventos
    channel: número,
    code: ...
}]
```

#### Ejemplo de uso de eventos en el manejador

```javascript title="archivo.js"
module.exports = [{
    name?: string // opción para eventos
    type: string, // nombre del evento
    channel: número,
    code: ...
}]
```