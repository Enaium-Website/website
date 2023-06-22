import { Content } from "vitepress"
import { defineComponent } from "vue"
import Logo from "../../../assets/logo.png"
import { NButton, NTag } from "naive-ui"

export default defineComponent(() => {
  return () => (
    <>
      <div class={"flex flex-col justify-center items-center h-full"}>
        <img class={"w-32"} src={Logo} />
        <p>Hi! I'm Enaium, a Full Stack Developer(I think so).</p>
        <p>
          Maybe you want to know some of my projects, you can go to{" "}
          <NButton
            type={"primary"}
            size={"small"}
            onClick={() => {
              window.open("https://github.com/Enaium")
            }}
          >
            GitHub
          </NButton>
        </p>
        <p>
          Then I also write some articles on{" "}
          <NButton
            type={"primary"}
            size={"small"}
            onClick={() => {
              window.open("https://blog.enaium.cn")
            }}
          >
            Blog
          </NButton>
          , But it's Chinese, so maybe I'll write English articles in the future.
        </p>
        <p>
          And I also write some mods of game, like{" "}
          <NTag type={"info"} size={"small"}>
            Minecraft
          </NTag>{" "}
          and
          <NTag type={"info"} size={"small"}>
            Stardew Valley
          </NTag>
          , you can go to Mod Page to see them.
        </p>
      </div>
    </>
  )
})
