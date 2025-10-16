<script setup lang="ts">
import { onMounted, ref } from 'vue'
import type { SkillTodo, User } from './interface'

const userInfo: User = {
  status: 'pending',
  name: 'John',
  age: 30,
  isMarried: false,
  link: 'https://google.com',
}
const skills = ref<SkillTodo[]>([])
const user = userInfo.name
const newTask = ref('')
const message = ref<null | string>(null)
const error = ref<null | string>(null)
const handleTaskSubmission = () => {
  if (newTask.value.trim() !== '') {
    skills.value.push({
      userId: newTask.value,
      id: newTask.value,
      title: newTask.value,
      completed: true,
    })
    newTask.value = ''
  } else {
    message.value = 'Message can not be empty'
    setTimeout(() => {
      message.value = null
    }, 3000)
  }
}
const handleTaskDeletion = (id: string) => {
  skills.value = skills.value.filter((skill) => {
    return skill.title !== id
  })
}
const fetchAllSkills = async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos')
    const data: SkillTodo[] = await response.json()
    skills.value = data
  } catch (err) {
    if (err instanceof Error) {
      error.value = err.message
    } else {
      error.value = 'An unknown error occured'
    }
  }
}

onMounted(fetchAllSkills)
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
    <div>
      <p v-if="message">{{ message }}</p>
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
    </div>
    <ul>
      <li v-for="(skill, index) in skills" :key="skill.title">
        <span>{{ index + 1 }}) </span><span>{{ skill.title }}</span> {{}}
        <button @click="handleTaskDeletion(skill.title)">&times</button>
      </li>
    </ul>
  </div>
</template>

<style scoped>
h2 + div {
  position: relative;
}

div > p {
  position: absolute;
  top: -35px;
}
</style>
