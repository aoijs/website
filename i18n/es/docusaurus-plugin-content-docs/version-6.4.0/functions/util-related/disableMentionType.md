---
title: '$disableMentionType'
description: '$disableMentionType deshabilitará un tipo de mención específica.'
id: disableMentionType
---

`$disableMentionType` deshabilitará un tipo de mención específica.

## Uso

```php
$disableMentionType[tipo]
```

## Parámetros

| Campo | Tipo   | Descripción                           | Requerido |
| ----- | ------ | ------------------------------------- |:---------:|
| tipo  | cadena | Tipo de mención que desea desactivar. | verdadero |

<details>
  <summary> <h2> Tipos disponibles </h2></summary>

| Tipo     | Descripción                               |
| -------- | ----------------------------------------- |
| everyone | `@everyone` y `@aquí` menciones.          |
| users    | Todos los usuarios mencionan.             |
| roles    | Todos los roles mencionan.                |
| all      | Roles, usuarios y cualquier otra mención. |

</details>

## Ejemplo(s)

Esto evitará que el bot te mencione:

```javascript
bot.command({
    name: 'mention',
    code: `
<@$authorID>
$disableMentionType[users] 
  `
});
```

Esto evitará que el bot mencione a cualquiera o cualquier cosa:

```javascript
bot.command({
    name: 'mention',
    code: `
<@$authorID>
$disableMentionType[all] 
  `
});
```
