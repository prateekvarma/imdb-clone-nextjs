import MenuItem from "./MenuItem";
import { AiFillHome, AiFillInfoCircle } from "react-icons/ai";

export default function Header() {
  return (
    <div>
      <div className="flex">
        <MenuItem title='HOME' address='/' Icon={AiFillHome} />
        <MenuItem title='ABOUT' address='/about' Icon={AiFillInfoCircle} />
      </div>
      <div></div>
    </div>
  );
}
