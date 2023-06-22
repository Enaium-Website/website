import { Content } from "vitepress"
import { defineComponent } from "vue"
import { NButton } from "naive-ui"

export default defineComponent(() => {
  return () => (
    <>
      <div class="flex flex-col justify-center items-center h-full">
        <p>I don't know what to write here, but I'm sure I'll think of something</p>
        <p>It's too hard to think of things to write about myself.</p>
        <p>Maybe I'll write about my hobbies or something.</p>
        <p>But my hobbies are boring, like writing these things</p>
        <p>I thought about it for a long time</p>
        <p>I finally wrote the paragraphs above</p>
        <p>Ok, I thought of something. I like to writing code.</p>
        <p>It was also too easy to write these, and soon wrote 8 paragraphs</p>
      </div>
    </>
  )
})
