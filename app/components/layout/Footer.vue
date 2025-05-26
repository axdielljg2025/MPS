<script setup lang="ts">
  //...
</script>
<template>
  <footer class="pt-12">
    <div class="container mx-auto px-8">
      <div class="flex flex-wrap relative">
        <div
          class="-mx-4 flex flex-col flex-wrap items-center pl-4 pr-8 py-4 md:flex-col md:flex-nowrap -mt-4 lg:items-start lg:w-1/3"
        >
          <NuxtLink class="-ml-6" to="/">
          </NuxtLink>
          <p class="mt-2 text-center w-full lg:text-left flex items-center justify-center lg:justify-start gap-2">
  <img 
    src="/LOGO/PNG/ACTUAL.png"
    alt="Logo UCI"
    class="h-10 w-auto"
  />
  Universidad de las Ciencias Informáticas, Carretera a San Antonio de los Baños, Km 2 ½, reparto Torrens, municipio Boyeros, La Habana, Cuba
</p>

          <div class="inline-flex mt-6 space-x-3">
            <div class="flex flex-wrap space-x-4">
              <NuxtLink
                href="https://www.facebook.com/vuedesigner"
                aria-label="facebook"
                external
                target="_blank"
              >
                <BaseIcon
                  name="i-logos-facebook"
                  class="text-2xl"
                  width="28px"
                />
              </NuxtLink>
              <NuxtLink
                href="https://twitter.com/vuedesigner"
                aria-label="twitter"
                external
                target="_blank"
              >
                <BaseIcon
                  name="i-logos-twitter"
                  class="text-2xl"
                  width="28px"
                />
              </NuxtLink>
              <NuxtLink
                href="https://discord.gg/BYp45Nnu5T"
                aria-label="discord"
                external
                target="_blank"
              >
                <BaseIcon
                  name="i-logos-discord-icon"
                  class="text-2xl"
                  width="28px"
                />
              </NuxtLink>
              <NuxtLink
                href="https://www.youtube.com/@vuedesigner"
                aria-label="youtube"
                external
                target="_blank"
              >
                <BaseIcon
                  name="i-logos-youtube-icon"
                  class="text-2xl"
                  width="28px"
                />
              </NuxtLink>
            </div>
          </div>
          
        </div>
        <div
          class="flex flex-col items-center p-4 w-full sm:w-1/2 md:flex-1 md:w-1/3 lg:items-start"
        >
          <h2 class="font-bold text-primary-600 dark:text-primary-200 text-xl">
            Herramientas
          </h2>
          <ul class="text-center lg:mt-2 lg:text-left">
            <li class="mb-4">
              <NuxtLink
                to="https://gp.prod.uci.cu/"
                class="hover:text-primary-600 dark:text-primary-200"
                target="_blank"
                >Gestión de Proyectos</NuxtLink
              >
            </li>
            <li class="mb-4">
              <NuxtLink
                to="https://excriba.prod.uci.cu/"
                class="hover:text-primary-600 dark:text-primary-200"
                target="_blank"
                >Gestión Documental</NuxtLink
              >
            </li>
          </ul>
        </div>
        <div
          class="flex flex-col items-center p-4 w-full sm:w-1/2 md:flex-1 md:w-1/3 lg:items-start"
        >
          <h2 class="font-bold text-primary-600 dark:text-primary-200 text-xl">
            Enlaces de Interés
          </h2>
          <ul class="text-center lg:mt-2 lg:text-left">
            <li class="mb-4">
              <NuxtLink
                to="https://www.uci.cu/"
                class="hover:text-primary-600 dark:text-primary-200"
                target="_blank"
                >Universidad de las Ciencias Informáticas</NuxtLink
              >
            </li>
            <li class="mb-4">
              <NuxtLink
                to="https://www.facebook.com/dcsw.uci"
                class="hover:text-primary-600 dark:text-primary-200"
                target="_blank"
                >Facebook DCSW</NuxtLink
              >
            </li>
            <li class="mb-4">
              <NuxtLink
                to="http://www.linkedin.com/in/dcsw-uci/"
                class="hover:text-primary-600 dark:text-primary-200"
                target="_blank"
                >Linkedin DCSW</NuxtLink
              >
            </li>
          </ul>
        </div>
        <div class="flex flex-col items-center p-4 w-full md:w-1/3">
          <h2 class="font-bold text-primary-600 dark:text-primary-200 text-xl">
            Contáctenos
          </h2>

          <ul class="mt-4 text-center lg:text-left">
            <li class="mb-4">
              <NuxtLink
                class="hover:text-primary-600 dark:text-primary-200"
                target="_blank"
                rel="noopener noreferrer"
              >
                78358284
              </NuxtLink>
            </li>
            <li class="mb-4">
              <NuxtLink
                to="https://mail.google.com/mail/?view=cm&fs=1&to=direccion.calidadsw@gmail.com&su=Consulta%20sobre%20MCDAI&body=Estimado%20Departamento%20de%20Calidad%3A%0D%0A%0D%0A"
                class="hover:text-primary-600 dark:text-primary-200"
                target="_blank"
                rel="noopener noreferrer"
              >
                direccion.calidadsw@gmail.com
              </NuxtLink>
            </li>          
          </ul>
        </div>
        <div class="flex flex-col sm:w-full md:items-end">
          <hr class="mb-4 opacity-25" />
          <p class="py-1 text-sm sm:text-center">
            &copy; 2002 - 2025. Todos los derechos reservados - UCI
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>
<style scoped></style>
