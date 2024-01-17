import { LogoIcon } from "@/assets/icons"
import { pathState } from "@/atoms"
import { Link } from "react-router-dom"
import { useRecoilState } from "recoil"

export const Header = () => {
  const [path, setPath] = useRecoilState(pathState)
  return (
    <div>
      <div>
        <LogoIcon />
        <div>
          <Link to="/used/main">
            <button onClick={() => setPath("used")}></button>
          </Link>
          <Link to="/used/main">
            <button onClick={() => setPath("group")}></button>
          </Link>
        </div>
        <div>
          <Link to={`/${path}/all`} />
          <Link to="chat" />
          <Link to="mypage" />
        </div>
      </div>
    </div>
  )
}
