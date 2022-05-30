<template>
  <footer class="mt-auto">
    <div class="flex flex-col p-4 bg-primary text-white lg:p-8">
      <div
        class="mb-7 pb-6 flex flex-col items-center justify-between border-white border-b-2 md:flex-row"
      >
        <div
          class="w-full flex flex-col justify-between text-sm font-normal sm:flex-row sm:whitespace-nowrap"
        >
          <div class="mb-16 md:mr-20 sm:mb-6 md:mb-0">
            <h3 class="mb-4">О компании</h3>
            <ul>
              <li v-for="{text, path} in company" :key="path">
                <NuxtLink :to="path">
                  {{ text }}
                </NuxtLink>
              </li>
            </ul>
          </div>

          <div class="mb-10 sm:mb-6 md:mb-0">
            <h3 class="mb-4">Покупателям</h3>
            <ul>
              <li v-for="{text, path} in buyers" :key="path">
                <NuxtLink :to="path">
                  {{ text }}
                </NuxtLink>
              </li>
            </ul>
          </div>
        </div>

        <div
          class="w-full flex flex-wrap items-center justify-between sm:flex-row-reverse md:flex-col md:items-end"
        >
          <NuxtLink to="/" class="mb-5 no-underline sm:mb-0 sm:mr-16 md:items-end md:mb-16 md:mr-0">
            <img src="/img/logo/footer-logo.png" alt="Sof.tj лого" class="w-24" />
          </NuxtLink>

          <ul class="flex">
            <li v-for="{path, text, url} in social" :key="path" class="mr-7 last:mr-0">
              <NuxtLink :to="url">
                <img :src="path" :alt="text" />
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>

      <div>
        <p>© Интернет-магазин sof.tj.</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
const company = ref([
  {text: 'Поставщикам', path: '/for-suppliers'},
  {text: 'Вакансии в компании', path: '/vacancies'},
  {text: 'Контакты', path: '/contacts'},
  {text: 'Новости', path: '/news'},
  {text: 'Пользовательское соглашение', path: '/agreement'},
  {text: 'Политика обработки персональных данных', path: '/policy'},
  {text: 'Покупателям', path: '/for-buyers'},
])

const buyers = ref([
  {text: 'Доставка и оплата', path: '/delivery-and-payment'},
  {text: 'Как вернуть', path: '/how-to-return'},
  {text: 'Как заказать', path: '/how-to-order'},
  {text: 'Программа лояльности', path: 'loyalty-program'},
  {text: 'Вопросы и ответы', path: '/QA'},
  {text: 'Сервисные центры', path: '/service-centres'},
  {text: 'Юридическим лицам', path: '/for-legal-entities'},
])

const social = ref([
  {text: 'facebook', path: '/img/social/facebook.svg', url: '#'},
  {text: 'instagram', path: '/img/social/instagram.svg', url: '#'},
  {text: 'whatsapp', path: '/img/social/whatsapp.svg', url: '#'},
  {text: 'viber', path: '/img/social/viber.svg', url: '#'},
  {text: 'telegram', path: '/img/social/telegram.svg', url: '#'},
])
</script>

<style lang="scss" scoped></style>
