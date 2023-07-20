---
title: '$createThread'
description: '$createThread creará un nuevo hilo.'
id: createThread
---

`$createThread` creará un nuevo rol de gremio.

## Uso

```php
$createThread[canalID;nombre;archieve;tipo;mensaje de inicio;ID de retorno?]
```

## Parámetros

| Campo           | Tipo     | Parámetros                                                                        | Requerido |
| --------------- | -------- | --------------------------------------------------------------------------------- |:---------:|
| canalID         | entero   | El ID del canal en el que debe crearse el hilo.                                   | verdadero |
| name            | consulta | El nombre del tema recién creado.                                                 | verdadero |
| archieve         | string   | Después de cuánto tiempo se eliminará el mensaje).                                | verdadero |
| type            | string   | Tipo de hilo <br /> 1. **online** (por defecto) <br /> 2. **private** | verdadero |
| iniciar mensaje | cadena   | El ID del canal en el que debe crearse el hilo.                                   | verdadero |
| ID de retorno?  | cadena   | Si la función devuelve el ID del hilo después de su creación.                     |   falso   |

* **60 —** Esta opción hace que el hilo permanezca activo durante **1 hora**.
* **1440 —** Esta opción hace que el hilo permanezca activo durante **1 día**.
* *4320 —* Esta opción hace que el hilo permanezca activo durante **3 días**.
* **10080 —** Esta opción hace que el hilo permanezca activo durante **1 semana**.
* **MAX —** Esta opción hace que el hilo permanezca activo durante **el mayor tiempo posible.**.

## Ejemplo(s)

Esto creará un hilo en el canal actual:

```javascript
bot.command({
    name: 'createThread',
    code: `
  $createThread[$channelID;Example!;60;public;$messageID;false]
  `
});
```
