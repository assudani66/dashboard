"use client";
import React from "react";
import { navigationOptions } from "@/navs/navigationOptions";
import Logo from "@/components/home/logo";
import { usePathname, useRouter } from "next/navigation";
import { Icons } from "@/components/home/icons";
type SidebarLayoutProps = {
  nav: typeof navigationOptions;
};
const SidebarLayout = ({ nav }: SidebarLayoutProps) => {
  const pathname = usePathname();
  const router = useRouter();
  return (
    <div className="flex flex-col w-80">
      <div>
        <Logo />
      </div>
      {Object.keys(nav).map((content: string, index) => (
        <div key={index} className="p-2">
          <p className="">{content}</p>
          {/* @ts-ignore */}
          {nav[content].map(
            (
              {
                title,
                href,
                icon,
              }: { title: string; href: string; icon: string },
              index: number
            ) => (
              <div
                className={`flex justify-between items-center cursor-pointer rounded ease-out ${
                  pathname === href ? "bg-blue-700 text-white" : "bg-white"
                }`}
                onClick={() => router.push(href)}
                key={index}
              >
                <div className={`flex space-x-2 p-2 w-full`}>
                  <Icons iconName={icon} />
                  <p>{title}</p>
                </div>
                <div className="p-2">
                  <Icons iconName="dropdown" />
                </div>
              </div>
            )
          )}
        </div>
      ))}
    </div>
  );
};

export default SidebarLayout;
