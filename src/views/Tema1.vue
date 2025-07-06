<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 1
        h1 Regulación y categorización de los establecimientos de alojamiento turístico
    
      .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
        .col-lg-12
          .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
            .bloque-texto-g__img(
              :style="{'background-image': `url(${require('@/assets/curso/Tema1/img01.png')})`}"
            )
            .bloque-texto-g__texto.p-4
              p.mb-5 El proceso de formalización en el sector turístico colombiano se sustenta en un marco normativo que reconoce la importancia estratégica del turismo para el desarrollo económico y social del país. Este marco tiene como base la Ley General de Turismo (Ley 300 de 1996), la cual ha sido objeto de modificaciones a través de la Ley 1101 de 2006 y posteriormente por la Ley 1558 de 2012.
                br
                br
                | La Ley 1558 de 2012, al modificar el artículo 1.º de la Ley 300 de 1996, resalta que el turismo constituye una industria esencial para el desarrollo nacional y territorial, con un rol social que demanda protección y promoción especial por parte del Estado.

      p.mb-3 En cuanto a los establecimientos de alojamiento, el artículo 78 de la Ley 300 de 1996, en su capítulo II, define a los establecimientos hoteleros o de hospedaje como el conjunto de bienes, de propiedad de personas naturales o jurídicas, destinados a la prestación del servicio de alojamiento no permanente (período inferior a 30 días), con o sin oferta de alimentación, servicios básicos, complementarios o accesorios. Esta actividad se realiza bajo la figura contractual del contrato de hospedaje, enmarcando legalmente la operación de dichos establecimientos.
      
      .tarjeta.color-primario.p-4.mb-4(data-aos="fade-right")
        .row.justify-content-around.align-items-center
          .col-3.col-sm-2.col-lg-1
            img(src="@/assets/curso/Tema1/img02.png")
          .col
            .row.justify-content-between.align-items-center
              .col.mb-3.mb-sm-0
                h4.mb-2 Ley 300 de 1996. 
              .col-sm-auto
                a.boton.color-acento-botones(href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=8634#300" target="_blank")
                  span Ir al sitio
                  i.fas.fa-file-download
            .row.justify-content-between.align-items-center  
              .col.mb-3.mb-sm-0
                h4.mb-2 Modificada por: Ley 1558 de 2012.
                p.mb-0.bg8 Para ampliar y profundizar en los contenidos abordados, se recomienda consultar el siguiente enlace:
              .col-sm-auto
                a.boton.color-acento-botones(href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=48321" target="_blank")
                  span Ir al sitio 
                  i.fas.fa-file-download
      
      .row.justify-content-center.align-items-center.mb-5.fondot4(data-aos="fade-down")
        .col-lg-12.p-4
          p En la práctica, los establecimientos de alojamiento brindan servicios orientados a satisfacer las necesidades de los viajeros. Además del alojamiento, pueden ofrecer alimentación, bebidas, atención personalizada, lavandería, llamadas telefónicas, espacios recreativos y otros servicios que enriquecen la experiencia del huésped.          


      separador
      #t_1_1.titulo-segundo.mb-5
        h2 1.1  Categorización de los hoteles 

      .row.justify-content-center.mb-5
        .col-lg-5.mb-3
          img(src='@/assets/curso/Tema1/11.png', alt='')
        .col-lg-7
          p Existen diversas categorías hoteleras que se determinan con base en las comodidades, servicios e infraestructura ofrecidos al huésped, aspectos que inciden directamente en su nivel de confort y bienestar. El sistema de clasificación más común es el de estrellas, en el cual un hotel de cinco estrellas representa el estándar más alto de calidad y servicio, mientras que uno de una estrella ofrece condiciones básicas y limitadas.
          p Este sistema de estrellas permite categorizar los establecimientos en función de sus prestaciones, servicios e instalaciones. Sin embargo, es importante destacar que en otros países existen sistemas alternativos de clasificación, como el uso de letras o símbolos (por ejemplo, diamantes). 
          .row.justify-content-center.align-items-center.mb-0.fondot4(data-aos="fade-down")
            .col-lg-12.p-3
              h5.text-center En Colombia, el sistema oficial adoptado es el de estrellas.

      .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mb-4
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/Tema1/img03.png')})`}"
        )
        .bloque-texto-g__texto.p-4
          p.mb-0 La categoría asignada a un establecimiento está regulada por entidades gubernamentales competentes y se basa en el cumplimiento de estándares específicos relacionados con la infraestructura, la calidad del servicio y el perfil del personal; esta regulación busca asegurar un nivel mínimo de calidad que proteja al consumidor y facilite la competitividad del sector.

            br
            br
            | En Colombia, la #[b Norma Técnica Sectorial Colombiana NTSH-006:] clasifica los establecimientos de alojamiento y hospedaje y expone la categorización por estrellas de hoteles, cuya última versión data de 2009 y esta ha sido la referencia técnica utilizada para establecer la categoría de los hoteles. La norma define los criterios que deben cumplirse en términos de infraestructura, servicios ofrecidos y accesibilidad para cada nivel de clasificación.



      .row.justify-content-center.align-items-center.mb-5
        .col-lg-7.mb-3
          p Actualmente, gran parte de la cadena hotelera del país mantiene su organización de servicios y estándares de calidad con base en los lineamientos de la NTSH-006. La asignación visible de una categoría (de una a cinco estrellas) implica que el establecimiento ha cumplido con los requisitos exigidos para ese nivel, conforme a la norma.
          p La NTSH-006 evalúa la categorización hotelera considerando aspectos fundamentales como los requisitos de planta física, condiciones de accesibilidad, calidad del servicio y cumplimiento de la normatividad legal vigente. 
        .col-lg-5
          img(src='@/assets/curso/Tema1/img04.png', alt='')
        

      .row.justify-content-center.align-items-center.mb-4.fondot4(data-aos="fade-down")
        .col-lg-12.p-3
          .row.justify-content-center
            .col-lg-10
              p.text-center #[b Por ejemplo:] en lo que respecta al área de recepción, los requisitos exigidos varían según la categoría del hotel, estableciendo estándares mínimos para garantizar una experiencia adecuada al nivel de servicio esperado.


      .subt.mb-4(data-aos="fade-down")
        .row.align-items-center
          .col-md-auto.col-2
            img(src='@/assets/curso/Tema4/01.png', alt='')
          .col-md-auto.col-10.ps-0
            h3.mb-0.text-white Recepción: requisitos de planta según categoría hotelera (según NTSH-006)

      p.mb-4  El establecimiento debe, como mínimo garantizar las siguientes condiciones:

      .row.justify-content-center.align-items-center.mb-5
        .col-lg-12.col-12
          TabsC
            .relleno.py-3.py-md-4(titulo="Hotel 1 estrella").fondotabs
              .row.justify-content-center.align-items-center.p-4
                .col-md-6.col-lg-5.col-9
                  img(src='@/assets/curso/Tema1/img05.png', alt='')
                .col-md-10.col-lg-6.mb-md-0
                  ol.lista-ol--cuadro
                    li.d-flex
                    .lista-ol--cuadro__vineta
                      span a
                    |Contar con un área habilitada con mostrador para el registro de huéspedes.
                  ol.lista-ol--cuadro
                    li.d-flex
                    .lista-ol--cuadro__vineta
                      span b
                    |Asegurar que la zona exterior inmediata al establecimiento esté limpia, bien iluminada y libre de obstáculos que impidan el acceso directo.

                  ol.lista-ol--cuadro
                    li.d-flex
                    .lista-ol--cuadro__vineta
                      span c
                    |Disponer de una caja o cajilla de seguridad.
            
            .relleno.py-3.py-md-4(titulo="Hotel 1 estrella").fondotabs
              .row.justify-content-center.align-items-center.p-4
                .col-md-6.col-lg-5.col-9
                  img(src='@/assets/curso/Tema1/img05.png', alt='')
                .col-md-10.col-lg-6.mb-md-0
                  ol.lista-ol--cuadro
                    li.d-flex
                    .lista-ol--cuadro__vineta
                      span a
                    |Contar con un área habilitada con mostrador para el registro de huéspedes.
                  ol.lista-ol--cuadro
                    li.d-flex
                    .lista-ol--cuadro__vineta
                      span b
                    |Asegurar que la zona exterior inmediata al establecimiento esté limpia, bien iluminada y libre de obstáculos que impidan el acceso directo.

                  ol.lista-ol--cuadro
                    li.d-flex
                    .lista-ol--cuadro__vineta
                      span c
                    |Disponer de una caja o cajilla de seguridad.
            
            .relleno.py-3.py-md-4(titulo="Hotel 1 estrella").fondotabs
              .row.justify-content-center.align-items-center.p-4
                .col-md-6.col-lg-5.col-9
                  img(src='@/assets/curso/Tema1/img05.png', alt='')
                .col-md-10.col-lg-6.mb-md-0
                  ol.lista-ol--cuadro
                    li.d-flex
                    .lista-ol--cuadro__vineta
                      span a
                    |Contar con un área habilitada con mostrador para el registro de huéspedes.
                  ol.lista-ol--cuadro
                    li.d-flex
                    .lista-ol--cuadro__vineta
                      span b
                    |Asegurar que la zona exterior inmediata al establecimiento esté limpia, bien iluminada y libre de obstáculos que impidan el acceso directo.

                  ol.lista-ol--cuadro
                    li.d-flex
                    .lista-ol--cuadro__vineta
                      span c
                    |Disponer de una caja o cajilla de seguridad.
            
            .relleno.py-3.py-md-4(titulo="Hotel 1 estrella").fondotabs
              .row.justify-content-center.align-items-center.p-4
                .col-md-6.col-lg-5.col-9
                  img(src='@/assets/curso/Tema1/img05.png', alt='')
                .col-md-10.col-lg-6.mb-md-0
                  ol.lista-ol--cuadro
                    li.d-flex
                    .lista-ol--cuadro__vineta
                      span a
                    |Contar con un área habilitada con mostrador para el registro de huéspedes.
                  ol.lista-ol--cuadro
                    li.d-flex
                    .lista-ol--cuadro__vineta
                      span b
                    |Asegurar que la zona exterior inmediata al establecimiento esté limpia, bien iluminada y libre de obstáculos que impidan el acceso directo.

                  ol.lista-ol--cuadro
                    li.d-flex
                    .lista-ol--cuadro__vineta
                      span c
                    |Disponer de una caja o cajilla de seguridad.
            
            .relleno.py-3.py-md-4(titulo="Hotel 1 estrella").fondotabs
              .row.justify-content-center.align-items-center.p-4
                .col-md-6.col-lg-5.col-9
                  img(src='@/assets/curso/Tema1/img05.png', alt='')
                .col-md-10.col-lg-6.mb-md-0
                  ol.lista-ol--cuadro
                    li.d-flex
                    .lista-ol--cuadro__vineta
                      span a
                    |Contar con un área habilitada con mostrador para el registro de huéspedes.
                  ol.lista-ol--cuadro
                    li.d-flex
                    .lista-ol--cuadro__vineta
                      span b
                    |Asegurar que la zona exterior inmediata al establecimiento esté limpia, bien iluminada y libre de obstáculos que impidan el acceso directo.

                  ol.lista-ol--cuadro
                    li.d-flex
                    .lista-ol--cuadro__vineta
                      span c
                    |Disponer de una caja o cajilla de seguridad.


      p.mb-3 La presente norma tiene como objeto definir la clasificación de los establecimientos de alojamiento y hospedaje, mediante la categorización por estrellas para los hoteles en las modalidades 1, 2, 3, 4 y 5, de acuerdo con los requisitos de planta, de accesibilidad y de servicio.







































</template>

<script>
export default {
  name: 'Tema1',
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
