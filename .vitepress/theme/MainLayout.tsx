import { useData, useRouter } from "vitepress"
import { defineComponent } from "vue"
import About from "@/theme/layouts/About"
import Home from "@/theme/layouts/Home"
import Mod from "@/theme/layouts/Mod"
import { MenuOption, NMenu } from "naive-ui"

const menuOptions: MenuOption[] = []

export default defineComponent(() => {
  const { site, frontmatter } = useData()

  site.value.themeConfig.nav.forEach((element) => {
    menuOptions.push({
      label: () => <div onClick={() => router.go(element.link)}>{element.text}</div>,
      key: element.text.toLowerCase()
    })
  })

  const router = useRouter()
  return () => (
    <>
      <div class={"flex flex-col justify-center h-screen"}>
        <div class={"sticky top-0"}>
          <div class={"flex justify-center bg-white"}>
            <NMenu options={menuOptions} mode={"horizontal"} value={frontmatter.value.layout} />
          </div>
        </div>
        <div class={"flex-grow"}>
          {frontmatter.value.layout === "home" && <Home />}
          {frontmatter.value.layout === "about" && <About />}
          {frontmatter.value.layout === "mod" && <Mod />}
        </div>
      </div>
    </>
  )
})
