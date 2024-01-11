---
title: Formato de Mensajes
description: Esta página cubre todo sobre el formato de mensajes.
id: msgformatting
og_image: https://raw.githubusercontent.com/aoijs/website/main/src/images/og/16.png
---

:::tip[Markdown]

Discord está implementando Enlaces Enmascarados y Markdown en Comunidades de forma gradual, lo que significa que ya no necesitas incrustar enlaces con interacciones para mostrar enlaces.

Obtén más información sobre los cambios en su [blog](https://support.discord.com/hc/en-us/articles/210298617-Markdown-Text-101-Chat-Formatting-Bold-Italic-Underline-#h_01H53FJBNB9B5RT9M1M9V1EQ7W) oficial.

:::

---

| TIPO                              | ESTRUCTURA           | EJEMPLO                          |                                                      VISTA PREVIA                                                       |
| --------------------------------- | -------------------- | -------------------------------- | :---------------------------------------------------------------------------------------------------------------------: |
| Usuario                           | <@USER_ID>           | <@608358453580136499>            |  ![vista previa](https://raw.githubusercontent.com/aoijs/website/docu/assets/images/previews/msg-formatting/user.png)   |
| Usuario [OBSOLETO][^1]            | <@!USER_ID>          | <@!608358453580136499>           |  ![vista previa](https://raw.githubusercontent.com/aoijs/website/docu/assets/images/previews/msg-formatting/user.png)   |
| Canal                             | <#CHANNEL_ID>        | <#832704676096245800>            | ![vista previa](https://raw.githubusercontent.com/aoijs/website/docu/assets/images/previews/msg-formatting/channel.png) |
| Rol                               | <@&ROLE_ID>          | <@&774059181820870696>           |  ![vista previa](https://raw.githubusercontent.com/aoijs/website/docu/assets/images/previews/msg-formatting/role.png)   |
| Comando de Barra                  | </NOMBRE:COMMAND_ID> | </help:1061818977933873282>      |  ![vista previa](https://raw.githubusercontent.com/aoijs/website/docu/assets/images/previews/msg-formatting/slash.png)  |
| Emoji Estándar                    | Caracteres Unicode   | ❤️                                |                                                                                                                         |
| Emoji Personalizado               | <:NOMBRE:ID>         | <:lerefblob:1010320053687832586> |                                                                                                                         |
| Emoji Personalizado (Animado)     | <a:NOMBRE:ID>        | <a:lerefblob:392938283556143104> |                                                                                                                         |
| Marca de Tiempo Unix              | <t:TIMESTAMP>        | <t:1619757519>                   |                                                                                                                         |
| Marca de Tiempo Unix (Estilizada) | <t:TIMESTAMP:ESTILO> | <t:1619757519:d>                 |                                                                                                                         |

### Markdown

| TIPO                 | ESTRUCTURA                       | EJEMPLO                        |
| -------------------- | -------------------------------- | ------------------------------ |
| Encabezado Grande    | \# Texto                         | \# Hola Mundo                  |
| Encabezado Mediano   | \#\# Texto                       | \#\# Hola Mundo                |
| Encabezado Pequeño   | \#\#\# Texto                     | \#\#\# Hola Mundo              |
| Listas Numeradas     | 1\. Elemento <br /> 2\. Elemento | 1\. Patata <br /> 2\. Leche    |
| Listas de Viñetas    | \* Elemento <br /> \* Elemento   | \* Discord <br /> \* Twitter   |
| Enlaces Enmascarados | \[Texto Alternativo\](enlace)    | \[aoi.js\](https://aoi.js.org) |

### Formato de Marca de Tiempo Unix

| ESTILO | SALIDA DE EJEMPLO                 | DESCRIPCIÓN      |
| :----: | --------------------------------- | ---------------- |
|   t    | 23:20                             | Hora Corta       |
|   T    | 23:20:30                          | Hora Larga       |
|   d    | 20/04/2021                        | Fecha Corta      |
|   D    | 20 de abril de 2021               | Fecha Larga      |
|   f    | 20 de abril de 2021 23:20         | Fecha/Hora Corta |
|   F    | Martes, 20 de abril de 2021 23:20 | Fecha/Hora Larga |
|   R    | Hace 2 años                       | Tiempo Relativo  |

[^1]: Discord ahora utiliza el formato `<@>` por defecto.
