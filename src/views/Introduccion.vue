<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-12
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/portada/img01.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 La categoría de un establecimiento de alojamiento establece un marco de referencia para las expectativas del huésped respecto a la calidad de las instalaciones, los servicios ofrecidos y el nivel de atención recibido. En este contexto, un hotel de cinco estrellas sugiere un estándar de lujo, personalización y excelencia operativa, mientras que los hoteles de una o dos estrellas suelen ofrecer una experiencia más básica, funcional e informal.
              br
              br
              | La categorización hotelera, regulada en Colombia por la Norma Técnica Sectorial Colombiana NTSH-006, tiene una relación directa con las tarifas, ya que los establecimientos de mayor categoría implican mayores costos operativos y estándares de calidad superiores, lo que se refleja en precios más elevados.

    .row.justify-content-center.align-items-center.mb-5.p-3.bg1(data-aos="fade-right")
      .col-lg-12
        p Asimismo, es importante considerar que el perfil del huésped varía según la categoría: los hoteles de lujo atraen viajeros que valoran exclusividad y servicios premium, mientras que los de menor categoría suelen estar dirigidos a familias, mochileros o viajeros de presupuesto limitado.
    
    .row.justify-content-center.align-items-center(data-aos="fade")   
      .col-lg-12
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/vdPrCjWJSHo?si=X4NxENRo3LLXAua_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        figcaption Video. 

</template>

<script>
export default {
  name: 'Introduccion',
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
