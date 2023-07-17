---
title: '$updateCommands'
description: '$updateCommands перезагрузит ваши команды из вашей командной папки / сделает изменения эффективными.'
id: updateCommands
---

`$updateCommands` перезагрузит ваши команды из вашей командной папки / сделает изменения эффективными.

## Использование

```php
$updateCommands
```

* Будет работать только если вы используете обработчик команд, пример ниже:

```javascript
const { AoiClient, LoadCommands } = требуется("aoi. s");

const bot = new AoiClient({
    token: "DISCORD BOT TOKEN",
    префикс: "DISCORD BOT PREFIX",
    intents: ["GuildMessages", "MessageContent", "Guilds"], события
    : ["onMessage", "onInteractionCreate"],
    базу: {
        тип: "aoi. b",
        db: require("@akarui/aoi. b"),
        таблицы: ["основная"],
        путь: ". база данных/",
        extraOptions: {
            dbType: "KeyValue"
        }
    }
});

const loader = new LoadCommands(bot);
loader. oad(bot.cmd, "./commands/"); // ваш каталог команд.
```

## Пример(ы)

Это обновит команды вашего бота без перезапуска его:

```javascript
bot.command({
    name: "updateCommands",
    code: `
    $updateCommands
    `
});
```