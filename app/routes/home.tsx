import { useState } from "react";
import type { Route } from "./+types/home";
import {Card, Button} from "antd";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {

  const [counter, setCounter] = useState(0);

  const addOne = () => {
    setCounter(counter + 1);
  }

  return <div className="flex items-center justify-center w-screen h-screen">
    <Card>
      <p>Counter: {counter}</p>
    <Button onClick={addOne}>Add One</Button>
    </Card>
    </div>
}
