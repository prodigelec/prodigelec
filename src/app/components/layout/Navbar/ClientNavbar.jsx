"use client";

import dynamic from "next/dynamic";

const Navbar = dynamic(() => import("./index"), {
  ssr: false,
  loading: () => <div className="h-[88px] w-full" />,
});

export default function ClientNavbar() {
  return <Navbar />;
}
