import Image from "next/image";
import { UserCircleIcon } from "@heroicons/react/24/solid";
import TopMenu from "./menu/page";
import Dashboard from "./dashboard/page";

export default function Home() {
  let name = "싸이웰";

  return (
    <main>
      <div className="header">
        <div className="header-1">
          <div className="header-1-content-1">
            <Image src="/logo-dark.png" alt="CYWELL" width={60} height={60} priority />
          </div>
          <div className="header-1-content-2"></div>
          <div className="header-1-content-3">
            <UserCircleIcon className="h-10 w-10" />
            <div>{name}</div>
          </div>
        </div>
      </div>
      <div className="top-menu">
        <TopMenu />
      </div>
      <div className="content">
        <Dashboard />
      </div>
      <div className="footer">Footer</div>
    </main>
  );
}
