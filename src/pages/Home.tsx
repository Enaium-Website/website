import Logo from "@/assets/logo.png"
import { Button, Tag } from "antd"
import { Link } from "react-router-dom"

const Home = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center h-full">
        <img className="w-32" src={Logo} />
        <p>Hi! I'm Enaium, a Full Stack Developer(I think so).</p>
        <p>
          Maybe you want to know some of my projects, you can go to{" "}
          <Button
            type={"primary"}
            onClick={() => {
              window.open("https://github.com/Enaium")
            }}
          >
            GitHub
          </Button>
        </p>
        <p>
          Then I also write some articles on{" "}
          <Button
            type={"primary"}
            onClick={() => {
              window.open("https://blog.enaium.cn")
            }}
          >
            Blog
          </Button>
          , But it's Chinese, so maybe I'll write English articles in the future.
        </p>
        <p>
          And I also write some mods of game, like <Tag color={"blue"}>Minecraft</Tag> and
          <Tag color={"blue"}>Stardew Valley</Tag>, you can go to <Link to={"/mod"}>Mods Page</Link> to see them.
        </p>
      </div>
    </>
  )
}

export default Home
