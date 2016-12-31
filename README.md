# Show Facebook Computer Vision Tags Chrome Extension (Spanish version)

This fork is the Spanish version of [ageitgey's](https://github.com/ageitgey) original [Show Facebook Computer Vision Tags Chrome Extension](https://github.com/ageitgey/show-facebook-computer-vision-tags). The rest of the readme is just the literall translation from the one in the original repository. All I've done is just adapt the script to work with Facebook in Spanish.

Este fork es la versión en español de la extensión para Chrome de [ageitgey](https://github.com/ageitgey): [Show Facebook Computer Vision Tags Chrome Extension](https://github.com/ageitgey/show-facebook-computer-vision-tags). El resto de este README es sólo la traducción literal al español del README del repositorio original. Todo lo que he hecho es simplemente adaptar el script para funcionar con Facebook en español.

![](https://cloud.githubusercontent.com/assets/896692/21574672/fa4cecb4-ceab-11e6-896c-101025c68dc3.png)

Desde abril de 2016, Facebook está [añadiendo automáticamente etiquetas `alt`](https://code.facebook.com/posts/457605107772545/under-the-hood-building-accessibility-tools-for-the-visually-impaired-on-facebook/) a las imágenes que subes, con palabras clave sobre el contenido de esas imágenes:

```html
<img csrc="https://facebook.com/some-url.jpg"
alt="Image may contain: golf, grass, outdoor and nature"
width="316" height="237">
```

Para ello, utilizan una [red neuronal convolucional](https://medium.com/@ageitgey/machine-learning-is-fun-part-3-deep-learning-and-convolutional-neural-networks-f40359318721#.luqjma59e)
desarrollada por el
[equipo FAIR](https://research.fb.com/category/facebook-ai-research-fair/) de Facebook.

Por un lado, esto es genial. Mejora la accesibilidad para usuarios ciegos que dependen de lectores de pantalla que sólo pueden procesar texto.

Pero creo que muchos de los usuarios de internet no se dan cuenta de la cantidad de información que se extrae habitualmente de las fotografías. Facebook (y Google, Apple, Amazon, etc) pueden fácilmente extraer de tus imágenes si tienes un perro, si coleccionas cámaras, si juegas al golf, si tienes hijos o si simplemente te gustan las gafas de sol. Nada les impide utilizar esa información para mostrarte anuncios relevantes basados en tus fotos - ¡incluso si otro usuario subió la foto y no te ha etiquetado directamente!

Ésta es una sencilla extensión para Chrome que he creado en unos minutos para hacer más sencillo ver las etiquetas que Facebook está aplicando automáticamente a tus fotos y las de tus amigos. Una vez que lo instalas, todas las fotos que ves en tu timeline de Facebook aparecerán automáticamente con sus etiquetas, tal como en esta imagen:

<img width="524" src="https://cloud.githubusercontent.com/assets/896692/21574687/3443b268-ceac-11e6-85ee-45f59408f9bb.png">

El objetivo es simplemente hacer a todo el mundo consciente de la información que se extrae a diario de sus imágenes. Esto no es una tecnología que 'está a punto de llegar', sino que está *muy extendido ya hoy en todas las compañías grandes de internet*. Puedes incluso aprender cómo implementar este sistema [tú misma](https://medium.com/@ageitgey/machine-learning-is-fun-part-3-deep-learning-and-convolutional-neural-networks-f40359318721) con código open-source fácilmente disponible. 

Aquí hay algunos ejemplos de las cosas que Facebook detecta en tus fotos:

### Objetos en tus fotos

Es posible determinar qué clase de objetos hay en tus fotografías e identificar tus intereses basado en ello.

![](https://cloud.githubusercontent.com/assets/896692/21574712/aa1fd34a-ceac-11e6-98b0-b0b7a6a5d9fb.png)

### Tus actividades

Bien estés comiendo, corriendo o jugando al golf, un algoritmo puede determinar lo que estás haciendo a partir de tus fotografías.

<img width="523" alt="" src="https://cloud.githubusercontent.com/assets/896692/21574724/f5055da8-ceac-11e6-9ec0-14629f42deca.png">

### Dónde y cuándo se tomó la fotografía

Puedes determinar si la foto se tomó en interior o exterior, qué momento del día era, junto a qué puntos destacados (como montañas, árboles, agua, etc) se tomó...

<img width="623" alt="screen shot 2016-12-30 at 4 30 36 pm" src="https://cloud.githubusercontent.com/assets/896692/21574743/5de83548-cead-11e6-9211-3e75a588523d.png">

### Eventos a los que vas

De hecho, es incluso posible determinar, por ejemplo, el deporte que has ido a ver.

<img width="949" alt="screen shot 2016-12-30 at 4 35 31 pm" src="https://cloud.githubusercontent.com/assets/896692/21574780/24767440-ceae-11e6-9ee1-b5e065f89c93.png">

Estos son sólo algunos ejemplos...

# Para instalar esta extensión de Chrome

1. Clona o descarga este repositorio a tu ordenador
1. Abre `chrome://extensions` en una pestaña de Chrome o ve a `Herramientas` > `Extensiones`
1. Habilita `Modo desarrollador` en el checkbox de la esquina superior derecha.
1. Haz click en el botón `Cargar extensión descomprimida...`.
1. Selecciona el directorio donde has descargado este repositorio.
1. Visita Facebook!

Limitaciones:

1. Esta versión funciona únicamente en español.
