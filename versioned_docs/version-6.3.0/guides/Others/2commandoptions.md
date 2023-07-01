---
title: Command Options
description: This page is covering all command options and what they do.
id: commandoptions
---

**This page is about command options and what they do.**

### Base Commands

```js
module.exports = [{
    name: string,
    aliases? : string,
    nonPrefixed? : boolean,
    executeAt? : string,
    code: string
}]
```

| OPTION        | INPUT   | EXPLANATION                                                                                      |
|---------------|---------|--------------------------------------------------------------------------------------------------|
| `name`        | string  | Command Name.                                                                                    |
| `aliases`     | string  | Aliases, work the same way as `name`.                                                            |
| `nonPrefixed` | boolean | Set your command as non prefixed, meaning it can be executed without the actual prefix.          |
| `executeAt`   | string  | Define where it may can get executed in. <br /> 1. **guild** <br /> 2. **dm** <br /> 3. **both** |
| `code`        | string  | Your command code.                                                                               |

### Event Commands

```js
module.exports = [{
    name?: string,
    type: string,
    channel?: string,
    code: string,
}]
```

| OPTION    | INPUT  | EXPLANATION                                                   |
|-----------|--------|---------------------------------------------------------------|
| `name`    | string | Command Name.                                                 |
| `type`    | string | Defines the command type, any event, `interaction` or `loop`. |
| `channel` | string | Where the output may go.                                      |
| `code`    | string | Your command code.                                            |

### Interaction Commands

```js
module.exports = [{
    name: string,
    type: string,
    prototype: string,
    code: string,
}]
```

| OPTION      | INPUT  | EXPLANATION                                                                                                                          |
|-------------|--------|--------------------------------------------------------------------------------------------------------------------------------------|
| `name`      | string | Command Name.                                                                                                                        |
| `type`      | string | Defines the command type.                                                                                                            |
| `prototype` | string | Defines what the command will be triggered by. <br /> 1. **button** <br /> 2. **selectMenu** <br /> 4. **slash** <br /> 5. **modal** |
| `code`      | string | Your command code.                                                                                                                   |

### Loop Commands

```js
module.exports = [{
    name: string,
    type: string,
    channel?: boolean,
    executeOnStartup?: boolean,
    every: number,
    code: string
}]
```

| OPTION             | INPUT   | EXPLANATION                                                   |
|--------------------|---------|---------------------------------------------------------------|
| `name`             | string  | Command Name.                                                 |
| `type`             | string  | Defines the command type, any event, `interaction` or `loop`. |
| `channel`          | string  | Where the output may go.                                      |
| `executeOnStartup` | boolean | If the command will be executed after the bot restarted.      |
| `every`            | number  | Interval of the loop command.                                 |
| `code`             | string  | Your command code.                                            |
