import LayoutWrapper from "~/components/shared-component/LayoutWrapper";
import { Welcome } from "../welcome/welcome";
import type { MetaArgs } from "react-router";

export function meta({}: MetaArgs) {
  return [
    { title: "Events Page" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Events() {
  return (
    <LayoutWrapper>
      <div>Events</div>
    </LayoutWrapper>
  );
}
