import { BugOutlined, GithubOutlined } from "@ant-design/icons"
import { useQuery } from "@tanstack/react-query"
import { Button, Table, Tag } from "antd"
import ButtonGroup from "antd/es/button/button-group"
import { ColumnsType } from "antd/es/table"

interface ModrinthProject {
  id: string
  icon_url: string
  game_versions: string[]
  description: string
  title: string
  slug: string
  source_url: string
  issues_url: string
}

const columns: ColumnsType<ModrinthProject> = [
  {
    title: "Icon",
    dataIndex: "icon_url",
    key: "icon_url",
    render: (icon_url: string) => <img src={icon_url} width={64} alt="" />
  },
  {
    title: "Title",
    dataIndex: "title",
    key: "title",
    render: (title: string, row: ModrinthProject) => <a href={`https://modrinth.com/mod/${row.slug}`}>{title}</a>
  },
  {
    title: "Description",
    dataIndex: "description",
    key: "description"
  },
  {
    title: "Game Versions",
    dataIndex: "game_versions",
    key: "game_versions",
    render: (game_versions: string[]) => {
      return game_versions
        .filter((game_version) => game_version.indexOf("-") === -1 && game_version.indexOf("w") === -1)
        .map((game_version) => (
          <Tag color={"green"} key={game_version}>
            {game_version}
          </Tag>
        ))
    }
  },
  {
    title: "Github",
    render: (_, row: ModrinthProject) => (
      <ButtonGroup>
        <Button
          className="flex justify-center items-center"
          type="primary"
          onClick={() => window.open(row.source_url)}
          icon={<GithubOutlined />}
        />
        <Button
          className="flex justify-center items-center"
          type="primary"
          onClick={() => window.open(row.issues_url)}
          icon={<BugOutlined />}
        />
      </ButtonGroup>
    )
  }
]

const Mod = () => {
  const { data } = useQuery({
    queryKey: ["mniecraft"],
    queryFn: async () =>
      fetch("https://api.modrinth.com/v2/user/xK5QiHvx/projects")
        .then((res) => res.json())
        .then((data) => data)
  })

  return (
    <>
      <Table dataSource={data} columns={columns} rowKey={(row) => row.id} />
    </>
  )
}

export default Mod
