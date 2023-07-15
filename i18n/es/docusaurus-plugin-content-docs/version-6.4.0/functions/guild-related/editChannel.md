---
title: '$editChannel'
description: '$editChannel clona un canal.'
id: editChannel
---

`$editChannel` clona un canal.

## Uso

```php
$editChannel[canalID;nombre?;tipo?;posición?;tema?;nsfw?;tasa de bits?;límite de usuario?;padre?;permisos de bloqueo?;permisoSobrescribe?;límite de tasa por usuario?;predeterminadoAutoArchiveDuration?;región rtc?;razon?]
```

## Parámetros

| Campo                        | Tipo    | Descripción                                                     | Requerido |
| ---------------------------- | ------- | --------------------------------------------------------------- |:---------:|
| canalID                      | entero  | El ID del canal que es para clonar.                             |    sí     |
| ¿nombre?                     | string  | El nuevo nombre del canal.                                      |    no     |
| tipo?                        | string  | El tipo de canal. (listado abajo)                               |    no     |
| ¿posición?                   | string  | Devuelve la posición del canal.                                 |    no     |
| ¿tema?                       | cadena  | El tipo de canal.                                               |   falso   |
| ¿nsfw?                       | boolean | Si debería marcar el canal como NSFW o no.                      |    no     |
| ¿tasa de bits?               | entero  | Tasa de bits del canal de voz.                                  |    no     |
| ¿límite de usuario           | número  | Límite de usuario del canal de voz.                             |   falso   |
| ¿padre?                      | entero  | El nuevo padre del canal. (La categoría ID)                     |   falso   |
| ¿bloquear permisos?          | cadena  | Los nuevos canales bloquean los permisos.                       |    no     |
| ¿Sobrescribir permisos?      | string  | Se sobrescribe el permiso de los nuevos canales.                |    no     |
| ¿Limitar usuario?            | número  | Modo lento del canal editado.                                   |    no     |
| ¿defaultAutoArchiveDuration? | número  | Duración del archivo del hilo/foro. (en ms)                     |    no     |
| ¿rtcRegión?                  | cadena  | Región RTC del canal de voz.                                    |    no     |
| ¿razón?                      | cadena  | Razón que se mostrará en los registros de auditoría del gremio. |    no     |

**Nota: puede utilizar `$default` para mantener la propiedad actual.**

<details>
  <summary>Tipos de canales</summary>

| Tipo de canal      |                    |
| ------------------ | ------------------ |
| Canal de texto     | Text               |
| Canal de voz       | Voice              |
| Categoría          | Category           |
| Canal de escenario | Stage              |
| Hilo privado       | PrivateThread      |
| Hilo público       | PublicThread       |
| Forum              | Forum              |
| Hilo de anuncio    | AnnouncementThread |
| Canal de anuncio   | Announcement       |

Nota: todos los tipos de canal son **sensible a mayúsculas y minúsculas**.

</details>

## Ejemplo(s)

Esto cambiará el nombre del canal actual a "i-love-aoijs":

```javascript
bot.command({
    name: 'editChannel',
    code: `
  $editChannel[$channelID;i-love-aoi-js]
  `
});
```