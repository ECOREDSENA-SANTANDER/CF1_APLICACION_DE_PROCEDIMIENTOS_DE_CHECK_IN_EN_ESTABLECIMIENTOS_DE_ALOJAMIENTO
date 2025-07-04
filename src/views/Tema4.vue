<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Recepción hotelera: centro operativo de atención y gestión

    .row.justify-content-center.align-items-center.mb-4(data-aos="fade-down")
       .col-lg-12
          .bloque-texto-g.bg2.p-3.p-sm-4.p-md-5
            .bloque-texto-g__img(
              :style="{'background-image': `url(${require('@/assets/curso/Tema4/img01.png')})`}"
              )
            .bloque-texto-g__texto.p-4
              p.mb-0 La recepción hotelera, también conocida como front office, constituye el núcleo operativo del establecimiento, al ser el primer y principal punto de contacto entre el huésped y el hotel; como departamento desempeña un papel estratégico en la experiencia del cliente y en la coordinación interna del servicio.
              br
              br
              p Entre sus funciones principales se encuentran la gestión de Check-in y Check-out, la administración de reservas, la atención de llamadas telefónicas, y la respuesta oportuna a solicitudes especiales de los huéspedes. Los recepcionistas deben ejecutar múltiples tareas de forma simultánea, garantizando un servicio ágil, cordial y eficiente que contribuya a la satisfacción y fidelización del cliente.
              br
              br

    .row.justify-content-center.align-items-center.mb-5.fondot4(data-aos="fade-down")
      .col-lg-12.p-4
        p Además, la recepción actúa como centro de coordinación interdepartamental, canalizando requerimientos hacia áreas como limpieza, mantenimiento, alimentos y bebidas, entre otras; esta articulación asegura que cada necesidad del huésped sea atendida en tiempo y forma.
        p Por su papel transversal en la operación del hotel, este departamento exige altos niveles de organización, comunicación, empatía y capacidad de resolución de problemas, siendo esencial para el funcionamiento armónico y profesional del establecimiento.
    
    separador
    #t_4_1.titulo-segundo.mb-5
      h2 4.1  Estructura organizacional del área del #[em front office]

    p El área de #[em front office] se organiza jerárquicamente para garantizar una atención eficiente y continua al huésped. Su estructura puede variar según el tamaño y categoría del establecimiento.
    p.mb-4 #[b Funciones generales del #[em front office]:] desempeña un papel esencial en la operación hotelera, ejecutando funciones clave tanto administrativas como de atención al cliente. Entre sus principales procesos se encuentran:

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-8
        ul.lista-ul.lista-ul--separador
          li.d-flex.mb-1
            i.fas.fa-star
            p.mb-0 Recepción y bienvenida de los huéspedes a su llegada.
          li.d-flex.mb-1
            i.fas.fa-star
            p.mb-0 Asignación de habitaciones, función realizada por el #[em  Rooms Controller].
          li.d-flex.mb-1
            i.fas.fa-star
            p.mb-0 Registro de entrada o #[em Check-in.]
          li.d-flex.mb-1
            i.fas.fa-star
            p.mb-0 Servicio de cambio de divisas.
          li.d-flex.mb-1
            i.fas.fa-star
            p.mb-0 Reimpresión de llaves y gestión de cambios de habitación.
          li.d-flex.mb-1
            i.fas.fa-star
            p.mb-0 Control y gestión de cuentas individuales de los huéspedes.
          li.d-flex.mb-1
            i.fas.fa-star
            p.mb-0 Emisión de reportes operativos.
          li.d-flex.mb-1
            i.fas.fa-star
            p.mb-0 Resolución de quejas, conflictos o solicitudes especiales.
          li.d-flex.mb-1
            i.fas.fa-star
            p.mb-0 Registro de salida o #[em Check-out], con cierre de cuenta.
          li.d-flex.mb-1
            i.fas.fa-star
            p.mb-0 Auditoría nocturna (turno de 23:00 a 07:00), que incluye cargos a habitaciones, consolidación de ingresos de los centros de consumo y elaboración de informes de cierre diario.
      .col-lg-4
        img(src='@/assets/curso/Tema4/img02.png', alt='')  

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-12
        .titulo-sexto.color-acento-contenido(data-aos='fade-right')
          h5 Figura 1.
          span Organización del #[em front office]
      .col-lg-10 
        img(src='@/assets/curso/Tema4/figura1.svg', alt='La figura presenta la estructura organizacional del área de front office, detallando sus componentes clave. Parte de una categoría general que se subdivide en tres ejes: cargos por nivel jerárquico, aspectos físicos y humanos de la recepción, y la organización de los servicios del área. En el primer eje se jerarquizan los cargos desde el jefe de recepción hasta el recepcionista. El segundo eje contempla los elementos físicos del espacio de recepción y el análisis del factor humano, incluyendo funciones generales y el perfil del recepcionista. El tercer eje abarca la organización interna del front office, incluyendo las secciones específicas y las relaciones con otros departamentos del establecimiento. Esta organización permite una gestión estructurada, eficiente y orientada al servicio integral del huésped.')

    .subt.mb-4(data-aos="fade-down")
      .row.align-items-center
        .col-md-auto.col-2
          img(src='@/assets/curso/Tema4/01.png', alt='')
        .col-md-auto.col-10.ps-0
          h3.mb-0.text-white Cargos por nivel jerárquico 

    .row.justify-content-center.align-items-center.mb-4.bg1.p-4
      .col-lg-12
        p.mb-0 En el área de #[em front office], los cargos se estructuran jerárquicamente para garantizar una operación eficiente; en el nivel directivo se encuentra el “Jefe de recepción”, encargado de la gestión global del área. En el nivel operativo están los “Recepcionistas”, quienes ejecutan las tareas de atención directa al huésped y gestión diaria del servicio.

    .row.align-items-center.mb-4
      .col-lg-12.fondotitulo.p-3
        h3.text-center.mb-0 Jefe de recepción

    p Es responsable de la gestión integral del área, actuando en tres dimensiones clave: administrativa, técnica y social. Su rol es fundamental para garantizar una operación eficiente y una atención continua y de calidad a los huéspedes.

    .row.align-items-center.mb-4
      .col-lg-12.fondotitulo1.p-3
        h3.text-center.text-white.mb-0 Funciones principales

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-8
        ul.lista-ul.lista-ul--separador
          li.d-flex.mb-1
            i.fas.fa-star
            p.mb-0 Planificar y asignar las funciones del personal de recepción, considerando los pronósticos de ocupación y los movimientos de huéspedes individuales y grupales.

          li.d-flex.mb-1
            i.fas.fa-star
            p.mb-0 Coordinar la interacción del área de recepción con los demás departamentos del hotel, asegurando una atención integral y oportuna al huésped.

          li.d-flex.mb-1
            i.fas.fa-star
            p.mb-0 Colaborar con el departamento de Talento Humano y con la gerencia en la selección, vinculación y redistribución del personal asignado a recepción.

          li.d-flex.mb-1
            i.fas.fa-star
            p.mb-0 Liderar procesos de formación para el equipo de recepción en aspectos operativos, servicio al cliente y protocolos de seguridad, según los lineamientos del establecimiento.

          li.d-flex.mb-1
            i.fas.fa-star
            p.mb-0 Supervisar el cumplimiento de las funciones asignadas al equipo, así como su desempeño general, conforme a los procedimientos establecidos.

          li.d-flex.mb-1
            i.fas.fa-star
            p.mb-0 Verificar que la atención al cliente por parte del personal a su cargo se realice bajo estándares de calidad, cortesía y cumplimiento normativo.

          li.d-flex.mb-1
            i.fas.fa-star
            p.mb-0 Autorizar decisiones operativas como bloqueos de habitaciones, extensiones de estadía, salidas tardías y cortesías, con base en los procedimientos institucionales.

          li.d-flex.mb-1
            i.fas.fa-star
            p.mb-0 Controlar los movimientos financieros relacionados con cuentas de los huéspedes (créditos y débitos), asegurando su correcta aplicación conforme a las directrices de la administración.
      .col-lg-4
        img(src='@/assets/curso/Tema4/img03.png', alt='')  

    .row.align-items-center.mb-4
      .col-lg-12.fondotitulo.p-3
        h3.text-center.mb-0 Recepcionista

    .row.justify-content-center.align-items-center.mb-4(data-aos="fade-down")
       .col-lg-12
          .bloque-texto-g.bg6.p-3.p-sm-4.p-md-5
            .bloque-texto-g__img(
              :style="{'background-image': `url(${require('@/assets/curso/Tema4/img04.png')})`}"
              )
            .bloque-texto-g__texto.p-4
              p.mb-0 El recepcionista es el primer punto de contacto entre el huésped y el hotel. Su principal responsabilidad es recibir, registrar y asistir a los visitantes durante su estadía, asegurando una experiencia fluida, profesional y personalizada.
              br
              br
              p En caso de reservas anticipadas, debe verificar la información correspondiente, por ejemplo, si no se ha realizado una reserva previa, está encargado de informar sobre la disponibilidad, tarifas y condiciones. Para ello, emplea sistemas de gestión informatizados que almacenan datos sobre reservas, tarifas y ocupación; en establecimientos pequeños, esta gestión puede realizarse manualmente a través de casilleros físicos.
              br
              br
              p Es habitual que los hoteles soliciten el pago anticipado o la garantía mediante tarjeta de crédito al momento del #[em Check-in.]
    
    .row.align-items-center.mb-4
      .col-lg-12.fondotitulo1.p-3
        h3.text-center.text-white.mb-0 Funciones principales


    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-8
        ul.lista-ul.lista-ul--separador
          li.d-flex.mb-1
            i.fas.fa-star
            p.mb-0 Recibir y dar la bienvenida a los huéspedes a su llegada al establecimiento.


          li.d-flex.mb-1
            i.fas.fa-star
            p.mb-0 Realizar procesos de #[em Check-in y Check-out,] verificando la documentación de identidad del cliente.


          li.d-flex.mb-1
            i.fas.fa-star
            p.mb-0 Gestionar comunicaciones telefónicas y electrónicas, canalizando solicitudes según el área correspondiente.


          li.d-flex.mb-1
            i.fas.fa-star
            p.mb-0 Brindar información sobre servicios, normas y funcionamiento del hotel.


          li.d-flex.mb-1
            i.fas.fa-star
            p.mb-0 Coordinar reservas, cancelaciones y disponibilidad de habitaciones.


          li.d-flex.mb-1
            i.fas.fa-star
            p.mb-0 Entregar llaves o tarjetas de acceso, e indicar orientación básica sobre las instalaciones.


          li.d-flex.mb-1
            i.fas.fa-star
            p.mb-0 Atender solicitudes específicas que mejoren la experiencia del huésped (servicio despertador, ropa de cama adicional, etc.).

          li.d-flex.mb-1
            i.fas.fa-star
            p.mb-0 Resolver eficazmente inquietudes, quejas o problemas manifestados por los huéspedes.

          li.d-flex.mb-1
            i.fas.fa-star
            p.mb-0 Mantener la organización y presentación del área de recepción.

          li.d-flex.mb-1
            i.fas.fa-star
            p.mb-0 Sugerir sitios de interés, gastronomía, comercios o eventos locales.

          li.d-flex.mb-1
            i.fas.fa-star
            p.mb-0 Coordinar, si se requiere, la interacción con servicios de transporte, limpieza, mantenimiento o alimentos y bebidas.

          li.d-flex.mb-1
            i.fas.fa-star
            p.mb-0 Realizar tareas administrativas complementarias, como escaneo y archivo de documentos.

          li.d-flex.mb-1
            i.fas.fa-star
            p.mb-0 Informar a la dirección sobre incidencias relevantes o situaciones que requieran intervención ejecutiva.
      .col-lg-4
        img(src='@/assets/curso/Tema4/img05.png', alt='')  

    .subt.mb-4(data-aos="fade-down")
      .row.align-items-center
        .col-md-auto.col-2
          img(src='@/assets/curso/Tema4/01.png', alt='')
        .col-md-auto.col-10.ps-0
          h3.mb-0.text-white Aspectos físicos de la recepción o entrada de hotel

    .row.justify-content-center.align-items-center.mb-2
      .col-lg-12
        p La recepción se ubica comúnmente en el #[em lobby], espacio clave que conecta con la entrada principal del hotel y cumple funciones de acogida, espera y distribución; este entorno debe ser funcional, cómodo y representativo de la imagen del establecimiento.
        p Componentes esenciales del #[em hall] o entrada de un hotel:

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-8
        ul.lista-ul.lista-ul--separador
          li.d-flex.mb-1
            i.fas.fa-star
            p.mb-0 Mostrador principal, conserjería, caja y zona de atención telefónica.



          li.d-flex.mb-1
            i.fas.fa-star
            p.mb-0 Acceso inmediato a los ascensores.



          li.d-flex.mb-1
            i.fas.fa-star
            p.mb-0 Área de recepción y resguardo de objetos.



          li.d-flex.mb-1
            i.fas.fa-star
            p.mb-0 Zona destinada al movimiento de equipaje.



          li.d-flex.mb-1
            i.fas.fa-star
            p.mb-0 Galería o espacio comercial (en algunos hoteles).

      .col-lg-4
        img(src='@/assets/curso/Tema4/img06.png', alt='')  


















</template>

<script>
export default {
  name: 'Tema4',
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
