---
title: '$oldUser'
description: '$oldUser contiene datos del usuario anterior, utilizados en el evento de actualización del usuario, de lo contrario, cualquier dato estará vacío.'
id: oldUser
---

`$oldUser` contiene datos del usuario anterior, utilizados en el evento de actualización del usuario, de lo contrario, cualquier dato estará vacío.

## Uso

```php
$oldUser[opción]
```

## Parámetros

| Campo  | Tipo   | Descripción                                                                                                                                                                                                                                                                                | Requerido |
| ------ | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |:---------:|
| opción | cadena | Opción para recuperar <br /> 1. **name** <br /> 2. **tag** <br /> 3. **banner** <br /> 4. **bannerURL** <br /> 5. **createdAt** <br /> 6. **avatarURL** <br /> 7. **accentColor** <br /> 8. **flags** <br /> 9. **createdTimestamp** | verdadero |