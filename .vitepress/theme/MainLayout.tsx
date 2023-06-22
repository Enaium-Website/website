import { useData, useRouter } from "vitepress"
import { defineComponent } from "vue"
import About from "@/theme/layouts/About"
import Home from "@/theme/layouts/Home"
import Mod from "@/theme/layouts/Mod"
import { Tabs, Tab } from "vant"

// const menuOptions: MenuOption[] = []

export default defineComponent(() => {
  const { site, frontmatter } = useData()

  const router = useRouter()
  return () => (
    <>
      <div class={"flex flex-col justify-center h-screen"}>
        <div class={"sticky top-0"}>
          <Tabs
            class={"flex justify-center"}
            onClickTab={(tab: { name: string }) => {
              router.go(tab.name)
            }}
          >
            {site.value.themeConfig.nav.map((element) => {
              return <Tab name={element.link} title={element.text} />
            })}
          </Tabs>
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
