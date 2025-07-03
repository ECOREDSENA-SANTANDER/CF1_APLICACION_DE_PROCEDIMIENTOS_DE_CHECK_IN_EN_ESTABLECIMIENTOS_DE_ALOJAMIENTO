<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Tipos de habitaciones y sus características

    p.mb-4 Dentro de los establecimientos de alojamiento y hospedaje encontramos los siguientes tipos de habitaciones con sus características:

    .row.justify-content-center.mb-0(data-aos="flip-up")
      .col-lg-12.mb-4.mb-lg-0(data-aos="fade-right")
        TabsA.color-acento-botones
          .tarjeta.color-acento-botones.bg3.p-4(titulo="Habitación sencilla")
            .row.justify-content-center.align-items-center.mb-2
              .col-lg-7
                p.txt Diseñada para alojar a una persona. Generalmente está equipada con una cama individual cuyas dimensiones estándar son 1,00 m de ancho por 1,90 m de largo.
              .col-lg-5
                img(src='@/assets/curso/Tema2/img01.png', alt='')
          
          .tarjeta.color-acento-botones.bg3.p-4(titulo="Habitación doble")
            .row.justify-content-center.align-items-center.mb-2
              .col-lg-7
                p.txt Apta para dos personas. Puede contar con una cama doble de 1,40 m x 1,90 m o con dos camas sencillas de 1,00 m x 1,90 m. Cuando dispone de dos camas sencillas, también se denomina habitación twin.
              .col-lg-5
                img(src='@/assets/curso/Tema2/img02.png', alt='')
          
          .tarjeta.color-acento-botones.bg3.p-4(titulo="Habitación triple")
            .row.justify-content-center.align-items-center.mb-2
              .col-lg-7
                p.txt Configurada para tres personas. Comúnmente incluye una cama doble y una cama sencilla, o tres camas sencillas de 1,00 m x 1,90 m.
              .col-lg-5
                img(src='@/assets/curso/Tema2/img03.png', alt='')
          
          .tarjeta.color-acento-botones.bg3.p-4(titulo="Habitación cuádruple")
            .row.justify-content-center.align-items-center.mb-2
              .col-lg-7
                p.txt Capacidad para cuatro personas. Su configuración varía entre dos camas dobles, una cama doble con dos sencillas, cuatro camas sencillas o combinaciones con camarotes.
              .col-lg-5
                img(src='@/assets/curso/Tema2/img04.png', alt='')
          
          .tarjeta.color-acento-botones.bg3.p-4(titulo="Habitación quíntuple")
            .row.justify-content-center.align-items-center.mb-2
              .col-lg-7
                p.txt Diseñada para alojar a cinco personas. Las posibles distribuciones incluyen dos camas dobles y una sencilla, una cama doble con tres sencillas, o cinco camas sencillas, pudiendo incorporar camarotes.
              .col-lg-5
                img(src='@/assets/curso/Tema2/img05.png', alt='')
          
          .tarjeta.color-acento-botones.bg3.p-4(titulo="Habitación familiar")
            .row.justify-content-center.align-items-center.mb-2
              .col-lg-7
                p.txt Destinada a grupos de 6 a 7 personas. Su mobiliario puede incluir combinaciones de camas dobles, sencillas y/o camarotes, según el diseño del establecimiento.
              .col-lg-5
                img(src='@/assets/curso/Tema2/img06.png', alt='')
          
          .tarjeta.color-acento-botones.bg3.p-4(titulo="Habitación matrimonial")
            .row.justify-content-center.align-items-center.mb-2
              .col-lg-7
                p.txt Diseñada para parejas. En hoteles de 3 a 5 estrellas, se equipa con cama #[em queen size] (1,60 m x 1,90 m). En hoteles de 1 y 2 estrellas, la cama tiene medidas estándar de 1,40 m x 1,90 m.
              .col-lg-5
                img(src='@/assets/curso/Tema2/img07.png', alt='')
          
          .tarjeta.color-acento-botones.bg3.p-4(titulo="Habitación junior suite")
            .row.justify-content-center.align-items-center.mb-2
              .col-lg-7
                p.txt Unidad que combina una habitación estándar con un salón adicional. Permite alojar más personas mediante camas auxiliares o sofá camas. Se encuentra en establecimientos de 3 a 5 estrellas.
              .col-lg-5
                img(src='@/assets/curso/Tema2/img08.png', alt='')
          
          .tarjeta.color-acento-botones.bg3.p-4(titulo="Habitación suite")
            .row.justify-content-center.align-items-center.mb-2
              .col-lg-7
                p.txt Unidad de alojamiento de alta gama. Dispone de dos habitaciones, salón con área de estar y comedor, y dos baños. Tiene capacidad para hasta seis personas y es propia de hoteles de 3 a 5 estrellas.
              .col-lg-5
                img(src='@/assets/curso/Tema2/img09.png', alt='')

    separador
    #t_2_1.titulo-segundo.mb-5
      h2 2.1  Estandarización de habitaciones según categoría hotelera (NTSH-006)

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-12
        .bloque-texto-g.color-acento-botones.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/Tema2/img10.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            br
            br
            p.mb-0 La clasificación por estrellas de los hoteles en Colombia, conforme a la Norma Técnica Sectorial NTSH-006, establece requisitos mínimos en dotación, mobiliario, confort y servicios para las habitaciones estándar. A mayor número de estrellas, se exige un nivel superior de calidad, comodidad, tecnología y personalización de la experiencia del huésped.
            br
            br

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-3.col-8.col-md-6.mb-3
        img(src='@/assets/curso/Tema2/img11.png', alt='')
      .col-lg-9
         AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
            .row.justify-content-center.align-items-start(titulo="Hotel 1 estrella: estándar básico funcional")
              .col-md-11
                .row.justify-content-center.align-items-center.mb-3.bg4.p-4
                  .col-lg-12
                    h4 Mobiliario básico
                    ul.lista-ul--color
                      li.d-flex
                        i.fas.fa-star
                        p Camas con colchones rotados según cronograma.
                      li.d-flex
                        i.fas.fa-star
                        p Una mesa de noche por habitación.
                      li.d-flex
                        i.fas.fa-star
                        p Espacio para guardar ropa (estante, armario o perchero).
                      li.d-flex
                        i.fas.fa-star
                        p Un elemento decorativo (cuadro, planta, etc.).
                      li.d-flex
                        i.fas.fa-star
                        p Una toma eléctrica libre disponible para el huésped.
                      li.d-flex
                        i.fas.fa-star
                        p.mb-0 Iluminación general en toda la habitación.
                
                .row.justify-content-center.align-items-center.mb-3.bg4.p-4
                  .col-lg-12
                    h4 Equipamiento y servicios
                    ul.lista-ul--color
                      li.d-flex
                        i.fas.fa-star
                        p Televisor de mínimo 14 pulgadas con señal de televisión y control remoto.
                      li.d-flex
                        i.fas.fa-star
                        p Información turística impresa de la ciudad o región.
                      li.d-flex
                        i.fas.fa-star
                        p.mb-0 Tarifas visibles dentro de la habitación.
                
                .row.justify-content-center.align-items-center.mb-3.bg4.p-4
                  .col-lg-12
                    h4 Lencería y aseo personal
                    ul.lista-ul--color
                      li.d-flex
                        i.fas.fa-star
                        p Una almohada y una toalla de cuerpo por huésped.
                      li.d-flex
                        i.fas.fa-star
                        p Una toalla de manos por cada dos personas.
                      li.d-flex
                        i.fas.fa-star
                        p.mb-0 Todos los elementos deben estar en buen estado (sin manchas ni roturas).

                .row.justify-content-center.align-items-center.mb-3.bg4.p-4
                  .col-lg-12
                    h4 Baño privado
                    ul.lista-ul--color
                      li.d-flex
                        i.fas.fa-star
                        p Lavamanos, sanitario con aro y tapa, ducha.
                      li.d-flex
                        i.fas.fa-star
                        p Piso antideslizante.
                      li.d-flex
                        i.fas.fa-star
                        p.mb-0 Espejo y pasamanos de seguridad. 
            
            .row.justify-content-center.align-items-start(titulo="Hotel 2 estrellas: estándar con elementos adicionales de confort")
              .col-md-11
                .row.justify-content-center.align-items-center.mb-3.bg4.p-4
                  .col-lg-12
                    h4 Mobiliario mejorado
                    ul.lista-ul--color
                      li.d-flex
                        i.fas.fa-star
                        p Dos mesas de noche en habitaciones con cama doble.

                      li.d-flex
                        i.fas.fa-star
                        p Silla o poltrona para descanso.

                      li.d-flex
                        i.fas.fa-star
                        p.mb-0 Lámpara adicional (además de la iluminación general).
                    
                
                .row.justify-content-center.align-items-center.mb-3.bg4.p-4
                  .col-lg-12
                    h4 Seguridad y orientación
                    ul.lista-ul--color
                      li.d-flex
                        i.fas.fa-star
                        p.mb-0 Instrucciones visibles de emergencia y evacuación.
                     
                .row.justify-content-center.align-items-center.mb-3.bg4.p-4
                  .col-lg-12
                    h4 Tecnología y servicios
                    ul.lista-ul--color
                      li.d-flex
                        i.fas.fa-star
                        p Televisor de 14 pulgadas mínimo con señal de televisión nacional.
                      li.d-flex
                        i.fas.fa-star
                        p Control remoto, tarifas visibles, información turística.
                      li.d-flex
                        i.fas.fa-star
                        p.mb-0 Conexión eléctrica en el baño con identificación del voltaje.
                .row.justify-content-center.align-items-center.mb-3.bg4.p-4
                  .col-lg-12
                    h4 Baño completo
                    ul.lista-ul--color
                      li.d-flex
                        i.fas.fa-star
                        p.mb-0 Igual que en hotel 1 estrella, incluyendo conexión eléctrica y pasamanos.
            
            .row.justify-content-center.align-items-start(titulo="Hotel 3 estrellas: estándar con servicios ejecutivos")
              .col-md-11
                .row.justify-content-center.align-items-center.mb-3.bg4.p-4
                  .col-lg-12
                    h4 Mobiliario y confort
                    ul.lista-ul--color
                      li.d-flex
                        i.fas.fa-star
                        p Closet con entrepaños.


                      li.d-flex
                        i.fas.fa-star
                        p Espejo de cuerpo entero y portamaletas.


                      li.d-flex
                        i.fas.fa-star
                        p Caja de seguridad.
                      li.d-flex
                        i.fas.fa-star
                        p Dos lámparas (de escritorio o de noche).

                      li.d-flex
                        i.fas.fa-star
                        p.mb-0 Silla o poltrona cómoda.
                    
                
                .row.justify-content-center.align-items-center.mb-3.bg4.p-4
                  .col-lg-12
                    h4 Tecnología y conectividad
                    ul.lista-ul--color
                      li.d-flex
                        i.fas.fa-star
                        p Televisor de mínimo 19 pulgadas con canales nacionales e internacionales.
                      li.d-flex
                        i.fas.fa-star
                        p Teléfono en la habitación.
                      li.d-flex
                        i.fas.fa-star
                        p.mb-0 Acceso garantizado a internet (wifi o red física) sin interferir con el teléfono.
                     
                .row.justify-content-center.align-items-center.mb-3.bg4.p-4
                  .col-lg-12
                    h4 Atención personalizada
                    ul.lista-ul--color
                      li.d-flex
                        i.fas.fa-star
                        p Servicio de minibar (con o sin nevera).

                      li.d-flex
                        i.fas.fa-star
                        p Guía turística impresa actualizada.

                      li.d-flex
                        i.fas.fa-star
                        p.mb-0 Dos almohadas por huésped y un juego completo de toallas: corporal, manos y facial.
                
                .row.justify-content-center.align-items-center.mb-3.bg4.p-4
                  .col-lg-12
                    h4 Baño ejecutivo
                    ul.lista-ul--color
                      li.d-flex
                        i.fas.fa-star
                        p.mb-0 Piso antideslizante, secador de cabello (bajo solicitud), espejo grande, conexión eléctrica, ducha con pasamanos.

                .row.justify-content-center.align-items-center.mt-5
                  .col-lg-12
                    .bloque-texto-g.fondot2.p-3.p-sm-4.p-md-5
                      .bloque-texto-g__img(
                        :style="{'background-image': `url(${require('@/assets/curso/Tema2/img12.png')})`}"
                      )
                      .bloque-texto-g__texto.p-4
                        p.mb-0 #[b Nota:] este tipo de hotel debe contar con al menos una habitación tipo #[em junior suite] y una #[em tipo suite.]
                          br
                          br
                         









































</template>

<script>
export default {
  name: 'Tema2',
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
