<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
import Actividad from 'ecored-pkg-fliz/plugin/components/actividad/Actividad.vue'
export default {
  name: 'ActividadDidactica',
  components: {
    Actividad,
  },
  data: () => ({
    cuestionario: {
      tema: 'Nombre del CF',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> evaluar la comprensión de los conceptos fundamentales en el  buen desempeño de las actividades dentro de un establecimiento de alojamiento específicamente en el departamento de recepción.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO',
      preguntas: [
        {
          id: 1,
          texto:
            'Los establecimientos de alojamiento primariamente proveen y facilitan alojamiento para el público en general con servicios complementarios de alimentación, bebidas, conserjería, botones, lavandería, teléfono y recreación, entre otros.',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Felicitaciones! Ha comprendido con claridad los conceptos normativos del alojamiento turístico, así como la categorización hotelera por estrellas, lo que constituye una base sólida para desenvolverse con criterio en el sector.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 2,
          texto:
            'La categorización de los hoteles en Colombia se da por estrellas.',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Felicitaciones! Ha comprendido con claridad los conceptos normativos del alojamiento turístico, así como la categorización hotelera por estrellas, lo que constituye una base sólida para desenvolverse con criterio en el sector.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 3,
          texto:
            'Es en el departamento de recepción donde afluyen las reclamaciones, solicitudes y quejas de los huéspedes.',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Felicitaciones! Ha comprendido con claridad los conceptos normativos del alojamiento turístico, así como la categorización hotelera por estrellas, lo que constituye una base sólida para desenvolverse con criterio en el sector.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 4,
          texto: 'Un servicio complementario de un hotel es el alojamiento.',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Felicitaciones! Ha comprendido con claridad los conceptos normativos del alojamiento turístico, así como la categorización hotelera por estrellas, lo que constituye una base sólida para desenvolverse con criterio en el sector.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 5,
          texto:
            'Es el portafolio de servicios un <i>brochure</i> donde se encuentran los servicios que presta un establecimiento de alojamiento y hospedaje.',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Felicitaciones! Ha comprendido con claridad los conceptos normativos del alojamiento turístico, así como la categorización hotelera por estrellas, lo que constituye una base sólida para desenvolverse con criterio en el sector.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 6,
          texto:
            'Todas las categorías de hotel ofrecen habitaciones <i>junior suite y suite</i>',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Felicitaciones! Ha comprendido con claridad los conceptos normativos del alojamiento turístico, así como la categorización hotelera por estrellas, lo que constituye una base sólida para desenvolverse con criterio en el sector.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 7,
          texto:
            'Los viajeros de negocios, las familias y las parejas son tipos de huéspedes de un establecimiento de alojamiento.',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Felicitaciones! Ha comprendido con claridad los conceptos normativos del alojamiento turístico, así como la categorización hotelera por estrellas, lo que constituye una base sólida para desenvolverse con criterio en el sector.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 8,
          texto:
            'Dentro del departamento de recepción funciona el servicio de limpieza y mantenimiento.',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Felicitaciones! Ha comprendido con claridad los conceptos normativos del alojamiento turístico, así como la categorización hotelera por estrellas, lo que constituye una base sólida para desenvolverse con criterio en el sector.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 9,
          texto:
            'Unas de las funciones de un recepcionista son: atender y dar la bienvenida a los huéspedes cuando llegan al hotel, realizar el registro de entrada y salida del hotel.',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Felicitaciones! Ha comprendido con claridad los conceptos normativos del alojamiento turístico, así como la categorización hotelera por estrellas, lo que constituye una base sólida para desenvolverse con criterio en el sector.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 10,
          texto:
            'Un recepcionista debe contar con diferentes habilidades, conocimientos y capacidades técnicas para realizar su actividad dentro del departamento de recepción.',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Felicitaciones! Ha comprendido con claridad los conceptos normativos del alojamiento turístico, así como la categorización hotelera por estrellas, lo que constituye una base sólida para desenvolverse con criterio en el sector.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
      ],
      mensaje_final_aprobado:
        '¡Excelente trabajo! Posee una buena comprensión sobre los conceptos fundamentales para el desarrollo de la actividad dentro de los establecimientos de alojamiento, específicamente en el departamento de recepción. ¡Siga explorando este fascinante mundo de la hotelería!',
      mensaje_final_reprobado:
        'No ha superado la actividad. Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
