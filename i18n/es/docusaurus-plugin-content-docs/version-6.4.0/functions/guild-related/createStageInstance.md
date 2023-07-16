---
title: $createStageInstance
description: '$createStageInstance comenzará una etapa.'
id: createStageInstance
---

`$createStageInstance` iniciará una etapa.

## Uso

```php
$createStageInstance[canalID;tema;tipo?]
```

## Parámetros

| Campo   | Tipo   | Descripción                          | Requerido |
| ------- | ------ | ------------------------------------ |:---------:|
| canalID | entero | El ID del canal de escena.           |    sí     |
| tema    | string | El tema de la etapa que se mostrará. |    sí     |
| tipo?   | entero | El tipo de canal. (listado abajo)    |    no     |

<details open>
  <summary><h3> Invitar Tipos de Objetivo </h3></summary>

| TIPO    | VALOR |
| ------- | ----- |
| PUBLIC  | 1     |
| PRIVATE | 2     |

</details>

## Ejemplo(s)

Esto creará una nueva instancia de etapa:

```javascript
bot.command({
    name: 'createStageInstance',
    code: `
  $createStageInstance[stageID;Testing!;1] 
  ` // reemplace "stageID" con una ID de etapa real
});
```
