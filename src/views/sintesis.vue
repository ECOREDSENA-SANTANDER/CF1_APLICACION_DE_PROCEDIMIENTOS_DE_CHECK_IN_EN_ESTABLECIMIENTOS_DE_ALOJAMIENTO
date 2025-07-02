<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p Como cierre de esta temática, es fundamental comprender los pilares del sector hotelero, con especial atención en los procesos operativos del departamento de recepción. El abordaje formativo parte del estudio de la normativa de formalización turística, esencial para entender el marco legal y organizativo de esta actividad. Posteriormente, se explora la categorización de los establecimientos de alojamiento y su portafolio de servicios, lo que permite reconocer la variedad de productos según su clasificación; también se examinan los tipos de habitaciones, sus características y amenidades, en relación con los distintos perfiles de huéspedes. Finalmente, se analiza la estructura organizacional del front office, destacando los cargos, funciones y secciones que hacen de esta área un eje clave en la experiencia y satisfacción del cliente.
    

    .row.justify-content-center
      .col-lg-12.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.svg", alt="La síntesis representa la estructura temática del componente Alojamiento, todo un universo por descubrir, organizado en cinco ejes principales. Inicia con la normativa de formalización, seguida por la apropiación de conocimientos básicos, la categorización hotelera y la construcción del portafolio de servicios. Continúa con el análisis de los tipos de habitaciones, sus características y los amenities que las complementan. También aborda el concepto de huésped y sus diferentes perfiles. Finalmente, se profundiza en la recepción hotelera y la organización interna del área de front office, integrando los aspectos operativos y funcionales clave del sector. ")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
