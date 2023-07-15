---
title: '$interactionModal'
description: '$interactionModal crea un usuario modal interactivo.'
id: interactionModal
---

`$interactionModal` crea un modal interactivo de usuario.

## Uso

```php
$interactionModal[titulo;ID personalizado;componentes]
```

## Parámetros

| Campo            | Tipo     | Parámetros                                                    | Requerido |
| ---------------- | -------- | ------------------------------------------------------------- |:---------:|
| Título           | consulta | El título de la modal que se mostrará como Cabecera de Modal. | verdadero |
| ID personalizado | consulta | El ID del componente.                                         | verdadero |
| ¿componentes?    | string   | Los componentes de texto modal.                               | verdadero |

## Ejemplo(s)

Esto creará un botón y un modal que enviará los datos introducidos al mismo canal y dará una respuesta efemeral al usuario que envió el formulario:

Tenga en cuenta que requiere "**events: ["onMessage", "onInteractionCreate"]**" en su archivo principal (también conocido como, en la mayoría de los casos, index.js)

```js
bot.command({
    name: "interactionModal",
    code: `
$addButton[1;Press Me!;primary;exampleID;false]
Pretty Example!`
}); // Cree un botón que activará el modal.

bot.interactionCommand({
    name: "exampleID",
    prototype: "button",  // Usar "prototype" ya que esta interacción pertenece a un botón.

    code: `
$interactionModal[Example!;customID;
  {actionRow:
    {textInput:¿Cómo te llamas?:1:nameInput:true:¡Tu bonito nombre!:2:200}
  }
  {actionRow:
    {textInput:¿Cual es tu edad?:1:ageInput:true:¡Alma joven!:1:3}
  }
  {actionRow:
    {textInput:¿Cuál es tu género?:2:genderInput:true:¡Cualquier cosa funcionará!:1:10}
  }
]`
}); /* El modal en sí, usamos {textInput} para aceptar la entrada del usuario.

El uso correcto de {textInput} sería:

{textInput:título:tipo(1 : pequeño campo de texto, 2 :campo de texto grande):ID personalizado:requerido( true, false ):marcador de posición:Valor mínimo:valor máximo}

*/

bot.interactionCommand({
    name: "customID",
    prototype: "modal", // Usar "prototype" ya que esta interacción pertenece a un modal.

    code: `
$interactionReply[Gracias por enviar este formulario!;;;;everyone;true]

$title[$username envió un formulario!;$userAvatar]
$addField[Su nombre es..;$textInputValue[nameInput]]
$addField[su edad es..;$textInputValue[ageInput]]
$addField[su genero es..;$textInputValue[genderInput]]`
}); /* Devolverá los valores ingresados ​​​​anteriormente desde el modal. Usando $textInputValue para recuperarlos.

También puedes usar $channelSendMessage[canalID;contenido] para enviar los datos a otro canal.
$channelSendMessage[$channelID;{newEmbed:{title:$username envió un formulario!:$userAvatar}{field:Su nombre es..:$textInputValue[nameInput]}{field:Su edad es..:$textInputValue[ageInput]}{field:Su genero es..:$textInputValue[genderInput]}}]
*/
```