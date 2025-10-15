<script setup lang="ts">
import { ref } from 'vue'
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
const skills = ref(['HTML', 'CSS', 'JavaScript', 'Vue'])
const user = userInfo.name
const newTask = ref('')
const handleTaskSubmission = () => {
  if (newTask.value.trim() !== '') {
    skills.value.push(newTask.value)
    newTask.value = ''
  } else {
    return skills.value // return a message instead
  }
}
const handleTaskDeletion = (id: string) => {
  // skill.value.splice(index, 1) // need to find the index
  skills.value = skills.value.filter((skill) => {
    return skill !== id
  })
}
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
    <form @submit.prevent="handleTaskSubmission">
      <input
        type="text"
        text
        name="userTasks"
        id="task"
        placeholder="Add your skill"
        v-model="newTask"
      />
      <button type="submit">Submit Task</button>
    </form>
    <ul>
      <li v-for="(skill, index) in skills" :key="skill">
        <span>{{ index + 1 }}) </span><span>{{ skill }}</span> {{}}
        <button @click="handleTaskDeletion(skill)">&times</button>
      </li>
    </ul>
  </div>
</template>

<style scoped></style>
