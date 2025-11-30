import LayoutWrapper from "~/components/shared-component/LayoutWrapper";
import { Welcome } from "../welcome/welcome";
import type { MetaArgs } from "react-router";
import WishesCard from "~/components/shared-component/WishesCard";

export function meta({}: MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <LayoutWrapper
      headerConfigs={{
        title: "Bhajan baug",
      }}
    >
      <div className="flex flex-col justify-start gap-4 p-4">
        <div className="w-full aspect-video rounded-xl overflow-hidden">
          <img
            src="images/homePageChopai.jpg"
            alt="home_page_chopai"
            className="h-full w-full"
          />
        </div>

        <div className="grid grid-cols-1 gap-4">
          {Array.from({ length: 15 }).map((_, index) => (
            <WishesCard />
          ))}
        </div>
      </div>
    </LayoutWrapper>
  );
}
