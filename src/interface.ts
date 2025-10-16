interface User {
  status: string
  name: string
  age: number
  isMarried: boolean
  link: string
}
interface SkillTodo {
  userId: number | string
  id: number | string
  title: string
  completed: boolean
}

export type { User, SkillTodo }
