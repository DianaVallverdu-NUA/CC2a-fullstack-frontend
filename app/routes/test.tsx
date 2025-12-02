import { useEffect, useState } from "react";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Test" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
 
  return (
    <div className='flex items-center justify-center w-screen h-screen'>
      This is my test route!
    </div>
  );
}
