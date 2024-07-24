import { Disclosure } from "@headlessui/react";
import Image from "next/image";
const nav = [
  { name: "마이 페이지", href: "#", current: true },
  { name: "커뮤니티", href: "#", current: false },
  { name: "대시보드", href: "#", current: false },
  { name: "관리자", href: "#", current: false },
  { name: "시스템", href: "#", current: false },
  { name: "관리", href: "#", current: false },
];
function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}
export default function TopMenu() {
  return (
    <Disclosure as="nav" className="bg-gray-800">
      <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start  h-14">
        <div className="flex space-x-4 w-full justify-around px-32">
          {nav.map((item) => (
            <a
              key={item.name}
              href={item.href}
              aria-current={item.current ? "page" : undefined}
              className={
                classNames(
                  item.current ? "bg-gray-900 text-white" : "text-gray-300 hover:bg-gray-700 hover:text-white",
                  "rounded-md px-3 py-2 text-sm font-medium"
                ) + " flex items-center justify-center"
              }
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </Disclosure>
  );
}
