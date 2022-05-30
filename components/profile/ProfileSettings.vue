<template>
  <div>
    <div class="w-1/2 mx-auto">
      <div class="input-field">
        <label for="name">ФИО</label>
        <ElementInput
          inputName="name"
          :inputValue="user.name + user.lastName"
          class="profile-input"
        />
      </div>
      <div class="input-field">
        <label for="email">Почта</label>
        <ElementInput
          inputType="email"
          inputName="email"
          :inputValue="user.email"
          class="profile-input"
        />
      </div>
      <div class="input-field">
        <label for="phone">Номер телефона</label>
        <ElementInput
          inputType="tel"
          inputName="phone"
          :inputValue="user.phone"
          class="profile-input"
        />
      </div>
      <div class="input-field">
        <label for="password">Сменить пароль</label>
        <div class="relative">
          <ElementInput
            :inputType="isVisible ? 'text' : 'password'"
            inputName="password"
            :inputValue="user.password"
            class="profile-input w-full"
          />
          <button class="absolute top-3.5 right-5" @click="changeVisability">
            <img
              :src="`/img/icons/password-${isVisible ? 'visible' : 'hidden'}.svg`"
              alt="Пароль открыт"
            />
          </button>
        </div>
      </div>
      <div class="input-field">
        <label for="confirm">Подвердить пароль</label>
        <div class="relative">
          <ElementInput
            :inputType="isVisible ? 'text' : 'password'"
            inputName="confirm"
            :inputValue="user.password"
            class="profile-input w-full"
          />
          <button class="absolute top-3.5 right-5" @click="changeVisability">
            <img
              :src="`/img/icons/password-${isVisible ? 'visible' : 'hidden'}.svg`"
              alt="Пароль открыт"
            />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const user = useUser()

const isVisible = ref(false)
const changeVisability = () => (isVisible.value = !isVisible.value)
</script>

<style lang="postcss" scoped>
.input-field {
  @apply flex flex-col mb-16;
}
</style>
