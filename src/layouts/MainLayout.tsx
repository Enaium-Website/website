import { MenuProps, Menu } from "antd"
import { Link, Outlet } from "react-router-dom"
import { HomeOutlined, InfoOutlined, PicLeftOutlined } from "@ant-design/icons"

const items: MenuProps["items"] = [
  {
    label: <Link to={"/"}>Home</Link>,
    key: "",
    icon: <HomeOutlined />
  },
  {
    label: <Link to={"/about"}>About</Link>,
    key: "about",
    icon: <InfoOutlined />
  },
  {
    label: <Link to={"/mod"}>Mod</Link>,
    key: "mod",
    icon: <PicLeftOutlined />
  }
]

const MainLayout = () => {
  return (
    <>
      <div className="flex flex-col h-screen">
        <div className="flex justify-center">
          <Menu className="sticky top-0" mode="horizontal" items={items} selectable={false} />
        </div>
        <div className="flex-grow">
          <Outlet />
        </div>
      </div>
    </>
  )
}

export default MainLayout
