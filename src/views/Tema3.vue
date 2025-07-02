<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 El huésped en el sector hotelero: definición y tipologías
    .row.justify-content-center(data-aos="fade-left")
      .col-lg-5.mb-3.col-md-8
        img(src='@/assets/curso/Tema3/img01.png', alt='')
      .col-lg-7
        p En el ámbito de la hotelería, se entiende por huésped a toda persona que se aloja temporalmente en un establecimiento de alojamiento turístico como, hoteles, hostales, apartamentos turísticos o similares, todo esto a cambio de una contraprestación económica. 
        .row.justify-content-center.align-items-center.mb-4.fondot3_1.p-4
          .col-lg-11
            br
            h5.text-center El huésped constituye el cliente central del negocio de la hospitalidad, siendo el eje sobre el cual se estructuran los servicios, la infraestructura y las estrategias de atención del establecimiento.
            br
    p.mb-4 La clasificación de los huéspedes puede realizarse con base en diversos criterios, entre ellos las motivaciones de viaje, las características sociodemográficas, las preferencias de consumo y los comportamientos durante la estancia. A continuación, se presentan las categorías más comunes utilizadas en la industria hotelera para segmentar a los huéspedes:

    .row.justify-content-center.mb-5.fondot3_2(data-aos="fade-right")
      .col-lg-3.col-6.mb-3.col-md-5
        img(src='@/assets/curso/Tema3/img02.png', alt='')
      .col-lg-8.col-10
        SlyderF.circl-arrow.mb-4(columnas="col-lg-5 col-md-6")
          .tarjeta.fondot3_3.p-3
            .row.justify-content-center
              .col-4.mb-3
                br
                br
                img.fit(src='@/assets/curso/Tema3/1.png' alt='')
              .col-lg-9
                h5.text-center.bg2.p-2.text-white Huésped corporativo o viajero de negocios
              p.text-center Se desplaza por motivos laborales, como reuniones, congresos o actividades corporativas. Prioriza la eficiencia, conectividad, ubicación estratégica y servicios como wifi, salas de reuniones o centros de negocios.
          
          .tarjeta.fondot3_3.p-3
            .row.justify-content-center
              .col-4.mb-3
                br
                br
                img.fit(src='@/assets/curso/Tema3/2.png' alt='')
              .col-lg-9
                h5.text-center.bg2.p-2.text-white Huésped de ocio o turista vacacional
              p.text-center Viaja con fines recreativos, de descanso o culturales. Sus intereses pueden variar desde el turismo de sol y playa hasta el turismo cultural, rural o de aventura.
          
          .tarjeta.fondot3_3.p-3
            .row.justify-content-center
              .col-4.mb-3
                br
                br
                img.fit(src='@/assets/curso/Tema3/3.png' alt='')
              .col-lg-9
                h5.text-center.bg2.p-2.text-white Huésped #[em “bleisure”]
              p.text-center Combina actividades laborales con momentos de esparcimiento durante el mismo viaje. Busca equilibrio entre funcionalidad y disfrute.
          
          .tarjeta.fondot3_3.p-3
            .row.justify-content-center
              .col-4.mb-3
                br
                br
                img.fit(src='@/assets/curso/Tema3/4.png' alt='')
              .col-lg-9
                h5.text-center.bg2.p-2.text-white Huésped de eventos
              p.text-center Se aloja con motivo de la asistencia a espectáculos, festivales, ferias, congresos o eventos deportivos.
          .tarjeta.fondot3_3.p-3
            .row.justify-content-center
              .col-4.mb-3
                br
                br
                img.fit(src='@/assets/curso/Tema3/5.png' alt='')
              .col-lg-9
                h5.text-center.bg2.p-2.text-white Huésped de salud y bienestar
              p.text-center Realiza viajes enfocados en tratamientos médicos, bienestar físico o mental, como turismo termal, retiros de relajación o cirugía programada.
          .tarjeta.fondot3_3.p-3
            .row.justify-content-center
              .col-4.mb-3
                br
                br
                img.fit(src='@/assets/curso/Tema3/6.png' alt='')
              .col-lg-9
                h5.text-center.bg2.p-2.text-white Familias
              p.text-center Viajan con niños u otros miembros dependientes. Valoran espacios amplios, habitaciones comunicadas, servicios adaptados, zonas de juego y actividades recreativas familiares.
          .tarjeta.fondot3_3.p-3
            .row.justify-content-center
              .col-4.mb-3
                br
                br
                img.fit(src='@/assets/curso/Tema3/7.png' alt='')
              .col-lg-9
                h5.text-center.bg2.p-2.text-white Parejas
              p.text-center Buscan privacidad, escapadas románticas y experiencias personalizadas como cenas privadas, spas o ambientación especial.
          .tarjeta.fondot3_3.p-3
            .row.justify-content-center
              .col-4.mb-3
                br
                br
                img.fit(src='@/assets/curso/Tema3/8.png' alt='')
              .col-lg-9
                h5.text-center.bg2.p-2.text-white Grupos de amigos
              p.text-center Se enfocan en la socialización y disfrute grupal. Requieren espacios compartidos, actividades recreativas y opciones económicas de alojamiento.
          .tarjeta.fondot3_3.p-3
            .row.justify-content-center
              .col-4.mb-3
                br
                br
                img.fit(src='@/assets/curso/Tema3/9.png' alt='')
              .col-lg-9
                h5.text-center.bg2.p-2.text-white Viajero individual
              p.text-center Prefiere independencia y autonomía. Puede estar motivado por el autoconocimiento, el descanso o el trabajo remoto.
          .tarjeta.fondot3_3.p-3
            .row.justify-content-center
              .col-4.mb-3
                br
                br
                img.fit(src='@/assets/curso/Tema3/10.png' alt='')
              .col-lg-9
                h5.text-center.bg2.p-2.text-white Huésped sénior
              p.text-center Personas mayores que valoran el confort, la accesibilidad, la seguridad y una atención más personalizada.
          .tarjeta.fondot3_3.p-3
            .row.justify-content-center
              .col-lg-9
                br
                br
                h5.text-center.bg2.p-2.text-white Huésped por generación
              p.text-center Las preferencias varían según el grupo etario:
              p #[b Generación Z:] alta dependencia tecnológica, valoran la autenticidad.
              p #[em #[b Millennials:]] buscan experiencias, sostenibilidad y conectividad.
              p #[em #[b Baby boomers:]] prefieren el confort y la atención tradicional.
          .tarjeta.fondot3_3.p-3
            .row.justify-content-center
              .col-4.mb-3
                br
                br
                img.fit(src='@/assets/curso/Tema3/11.png' alt='')
              .col-lg-9
                h5.text-center.bg2.p-2.text-white Huésped de lujo
              p.text-center Priorizan la exclusividad, el trato personalizado y servicios de alto nivel, sin restricciones presupuestarias.
          .tarjeta.fondot3_3.p-3
            .row.justify-content-center
              .col-4.mb-3
                br
                br
                img.fit(src='@/assets/curso/Tema3/12.png' alt='')
              .col-lg-9
                h5.text-center.bg2.p-2.text-white Huésped de bajo presupuesto o mochilero
              p.text-center Viaja con recursos limitados. Prefiere alojamientos funcionales, económicos y opciones compartidas como hostales.
          .tarjeta.fondot3_3.p-3
            .row.justify-content-center
              .col-4.mb-3
                br
                br
                img.fit(src='@/assets/curso/Tema3/13.png' alt='')
              .col-lg-9
                h5.text-center.bg2.p-2.text-white Nómadas digitales
              p.text-center Profesionales que trabajan de forma remota. Requieren buena conexión a internet, espacios adecuados para el trabajo y estancias de mediana a larga duración.
          .tarjeta.fondot3_3.p-3
            .row.justify-content-center
              .col-4.mb-3
                br
                br
                img.fit(src='@/assets/curso/Tema3/14.png' alt='')
              .col-lg-9
                h5.text-center.bg2.p-2.text-white Huésped ecológico
              p.text-center Prioriza alojamientos con prácticas sostenibles, certificaciones ambientales, eficiencia energética y respeto por el entorno.
          .tarjeta.fondot3_3.p-3
            .row.justify-content-center
              .col-4.mb-3
                br
                br
                img.fit(src='@/assets/curso/Tema3/15.png' alt='')
              .col-lg-9
                h5.text-center.bg2.p-2.text-white Huésped tecnófilo o digital
              p.text-center Valora la automatización, los servicios digitales (#[em Check-in online,] domótica, asistentes virtuales) y conectividad continua.
          .tarjeta.fondot3_3.p-3
            .row.justify-content-center
              .col-4.mb-3
                br
                br
                img.fit(src='@/assets/curso/Tema3/16.png' alt='')
              .col-lg-9
                h5.text-center.bg2.p-2.text-white Huésped leal o frecuente
              p.text-center Regresa periódicamente al mismo establecimiento. Espera un trato preferencial, reconocimiento y programas de fidelización.





</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
