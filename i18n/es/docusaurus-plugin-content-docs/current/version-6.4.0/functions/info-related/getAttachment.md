---
title: '$getAttachment'
description: '$getAttachment will return the properties of an attachment.'
id: getAttachment
---

`$getAttachment` will return the properties of an attachment.

## Modo de uso

```php
$getAttachment[channelID;messageID;index?;option?]
```

## Parámetros

| Campo         | Tipo   | Parámetros                                      | Requerido |
| ------------- | ------ | ----------------------------------------------- |:---------:|
| canalID       | entero | The channel of where the message is present in. | verdadero |
| ID de mensaje | entero | El ID del mensaje.                              | verdadero |
| index?        | número | Attachment index.                               |   falso   |
| opción?       | string | The option to retrieve.                         |   falso   |