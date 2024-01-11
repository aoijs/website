---
title: Cliente Sharding
description: Esta guía cubrirá la funcionalidad y el uso del sharding del cliente.
id: sharding
og_image: https://raw.githubusercontent.com/aoijs/website/main/src/images/og/9.png
---

<!-- omit from toc -->
### Tabla de Contenidos

- [¿Qué es el Sharding?](#qué-es-el-sharding)
- [Empezando](#empezando)
  - [Constructor](#constructor)
  - [`options`](#options)
- [Configuración de Sharding](#configuración-de-sharding)
- [Funciones Relacionadas con Sharding](#funciones-relacionadas-con-sharding)

---

## ¿Qué es el Sharding?

Como desarrollador de bots, es posible que hayas experimentado algunas limitaciones al escalar tu bot de Discord para atender a un gran número de usuarios. Discord impone un límite máximo de 2500 gremios por bot, y si tu bot supera este número, Discord aplica una estrategia de sharding para dividir porciones de tu bot en procesos separados.

El sharding es una forma efectiva de distribuir la carga de trabajo de tu bot en varios servidores, lo que puede mejorar significativamente el rendimiento del bot y reducir la carga en cualquier servidor único. Una vez que has alcanzado el límite de 2500 gremios, Discord requiere que dividas tu bot de manera que asigna no más de 2500 gremios por fragmento.

Para facilitar el proceso de sharding para los desarrolladores de bots, aoi.js proporciona soporte incorporado para el sharding. Los desarrolladores pueden dividir la carga de trabajo de su bot en partes más pequeñas y manejables, cada una de las cuales se ejecuta en su propio proceso separado. El número recomendado de gremios por fragmento es alrededor de 1000, pero esto puede variar según la funcionalidad y complejidad de tu bot.

Una ventaja del sharding es que te permite dividir la carga de trabajo de tu bot en varios servidores, lo que puede reducir la carga de procesamiento en un servidor y hacer que tu bot sea más receptivo. Además, el sharding puede ser útil en escenarios donde necesitas ejecutar varias instancias de tu bot para diferentes usuarios o grupos de usuarios.

En algunos casos, es posible que desees que algunos o todos tus fragmentos estén en el mismo proceso, lo que permite un estado compartido. Esto es posible con aoi.js, que proporciona un manejador incorporado flexible y potente para gestionar el proceso de sharding. Con la capacidad de dividir la carga de trabajo de tu bot en varios procesos, puedes asegurarte de que tu bot funcione sin problemas, incluso a medida que su base de usuarios crece con el tiempo.

## Empezando

aoi.js tiene la clase `ClientShard` para manejar el sharding de tu bot de Discord, esto funciona de manera similar al [`ShardingManager` de discord.js](https://old.discordjs.dev/#/docs/discord.js/14.13.0/class/ShardingManager).

### Constructor

```js
new ClientShard(file, options);
```

| Parámetro |                                               Tipo                                                | Descripción                      |
| --------- | :-----------------------------------------------------------------------------------------------: | -------------------------------- |
| `file`    | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Ruta a tu archivo principal           |
| `options` | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Opciones para el gestor de sharding |

### `options`

| Parámetro     |                                               Tipo                                                | Descripción                                                                                                   |
| ------------- | :-----------------------------------------------------------------------------------------------: | ------------------------------------------------------------------------------------------------------------- |
| `token`       | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Token a utilizar para contar automáticamente los fragmentos y pasarlos a los fragmentos                                                  |
| `totalShards` | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Número total de fragmentos de todos los gestores de fragmentos o "auto"                                                        |
| `shardList`   | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Lista de fragmentos para iniciar o "auto"                                                                             |
| `mode`        | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Qué modo usar para los fragmentos                                                                                  |
| `respawn`     | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Si los fragmentos deben volver a iniciarse automáticamente al salir                                                      |
| `silent`      | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Si se debe pasar la bandera silenciosa al proceso secundario (solo disponible cuando el modo está establecido en 'process')               |
| `shardArgs`   | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Argumentos para pasar al script del fragmento al iniciar (solo disponible cuando el modo está establecido en 'process')            |
| `execArgv`    | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Argumentos para pasar al ejecutable del script del fragmento al iniciar (solo disponible cuando el modo está establecido en 'process') |

## Configuración de Sharding

Antes de comenzar con el código, debes crear dos archivos.

Uno llamado `index.js` y otro con el nombre `shard.js`.

```js title="shard.js"
const { ClientShard } = require("aoi.js");

const sharder = new ClientShard("./index.js", {
  // Tu archivo principal, en este caso llamado "index.js".
  token: "Token del Bot de Discord", // Tu token de Discord Bot.
  totalShards: 3, // La cantidad de fragmentos/instancias que deseas crear, en este caso tres.
});

sharder.on("shardCreate", (shard) => console.log(`Fragmento lanzado ${shard.id}`)); // Utilizado para depuración, se puede quitar.
sharder.startProcess(); // Inicia el proceso de sharding.
```

Tu index.js, también conocido como archivo principal, debería verse así (¡nada cambia..!):

```js title="index.js"
const { AoiClient } = require("aoi.js");

const client = new AoiClient({
  token: "Token del Bot de Discord",
  prefix: "Prefijo del Bot de Discord",
  intents: ["MessageContent", "Guilds", "GuildMessages"],
  events: ["onMessage", "onInteractionCreate"],
  database: {
    type: "aoi.db",
    db

: require("@akarui/aoi.db"),
    dbType: "KeyValue",
    tables: ["main"],
    securityKey: "una-cadena-de-32-caracteres-aquí",
  }
});

// Ejemplo de Comando Ping (sharding)
client.command({
  name: "ping",
  code: `¡Pong! $guildShardPing[0]ms`
});
```

Luego, al ejecutar `node shard.js` podrás iniciar tu bot.

:::caution[Comando de Inicio]

Ejecutar `node index.js` ya no funcionará si deseas usar sharding, usa `node shard.js`.

:::

---

## Funciones Relacionadas con Sharding

- `$shard[option]`
- `$guildShard[option?;sep?;shardId]`
- `$guildShardID`
- `$guildShardPing[shardId?]`
- `$killShard[shardId]`
- `$respawnAllShards`
- `$spawnShard[amount]`
