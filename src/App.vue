<script setup lang="ts">
interface User {
  status: string
  name: string
  age: number
  isMarried: boolean
  link: string
}
const userInfo = {
  status: 'pending',
  name: 'John',
  age: 30,
  isMarried: false,
  link: 'https://google.com',
} as User
const skills = ['HTML', 'CSS', 'JavaScript', 'Vue']
const user = userInfo.name
</script>

<template>
  <div>
    <h2>User Info</h2>
    <ul>
      <li>{{ user }} is {{ userInfo.age }} years old</li>
      <li v-if="userInfo.isMarried">{{ user }} is married</li>
      <li v-else>{{ user }} is not married</li>
      <li v-if="userInfo.status === 'pending'">{{ user }} request is pending</li>
      <li v-else-if="userInfo.status === 'active'">{{ user }} request is accepted</li>
      <li v-else>{{ user }} request is rejected</li>
      <li>Learn more from <a :href="userInfo.link">user website</a></li>
    </ul>

    <h2>User Tasks</h2>
    <ul>
      <li v-for="skill in skills" :key="skill">{{ skill }}</li>
    </ul>
  </div>
</template>

<style scoped></style>
