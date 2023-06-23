import { Menu, MenuProps } from "antd"
import { Link, Outlet } from "react-router-dom"

const ModLayout = () => {
  const items: MenuProps["items"] = [
    {
      label: <Link to={"/mod"}>Minecraft</Link>,
      key: ""
    },
    {
      label: <Link to={"/mod/stardew-valley"}>Stardew Valley</Link>,
      key: "stardew-valley"
    }
  ]

  return (
    <>
      <div className="flex flex-col h-full">
        <div className="flex-grow">
          <Outlet />
        </div>
        <div className="flex justify-center">
          <Menu className="sticky top-0" mode="horizontal" items={items} selectable={false} />
        </div>
      </div>
    </>
  )
}

export default ModLayout
