# SuperAlimentos

## Introducción

Vamos a construir esta aplicación que nos de consejos de nutrición:

![](https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_0e106e84e22155f1d2775e37cd4aa865.gif)

## Instrucciones de entrega

    Crea un repositorio github, asigna una gh-page y envía la dirección por slack en el canal #ejercicios. 

## Desarrollo

### Iteración 0 

- Crea una aplicación con el nombre __`superalimentos`__, que no tenga ni enrutamiento ni ficheros de test (`--skipTests=true`)
- Crea un componente que tenga el nombre __`food-list`__. 


### Iteración 1 | Muestra los alimentos

El componente `app-food-list`  mostrará una lista de alimentos. Que deben incluir una imagen, un nombre y el contenido en calorías.

El array con los alimentos se encuentra en el fichero food.ts

### Iteración 2 | Buscar alimentos

Crea un input box para buscar alimentos por el nombre.

Necesitarás el *pipe* customizado que hemos hecho.

### Iteración 3 | Añadir nuevos alimentos

Crea un botón para añadir nuevos alimentos.

Cuando un usuario clique el botón aparecerá un nuevo formulario con campos para nombre, número de calorías y subir una imagen.

Cuando el usuario clique el botón de enviar, el alimento se añadirá a la lista.

El formulario desaparece cuando el usuario clica al botón enviar.

### Iteración 4 | Menú diario

Crea un botón al lado de cada alimento. Cuando el usuario clique el botón, el alimento correspondiente se añadirá a la lista del ménu diario.

Muestra en la página el menú diario con el total de calorías.

### Bonus | Cantidades

Además del botón "Añadir al menú", crea un input para la __cantidad__. Cuando un usuario entre un número en el input, se debería añadir la cantidad a la lista de ítems.

El valor por defecto de cantidad será 1.

**Super Bonus**

Si el usuario ha añadido más de un elemento del mismo tipo a la lista, no lo muestres dos veces. En su lugar, muestra el número de elementos y el número de veces que se ha añadido.

Por ejemplo:

- `Banana x2`
- `Salmon x5`
- `Cake`

