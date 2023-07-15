---
title: '$getAttachment'
description: '$getAttachment devolverá las propiedades de un adjunto.'
id: getAttachment
---

`$getAttachment` devolverá las propiedades de un adjunto.

## Modo de uso

```php
$getAttachment[canalID;mensajeID;índice?;opción?]
```

## Parámetros

| Campo     | Tipo   | Parámetros                                   | Requerido |
| --------- | ------ | -------------------------------------------- |:---------:|
| canalID   | entero | El canal en el que está presente el mensaje. | verdadero |
| mensajeID | entero | El ID del mensaje.                           | verdadero |
| índice?   | número | Índice de adjuntos.                          |   falso   |
| opción?   | string | La opción a recuperar.                       |   falso   |