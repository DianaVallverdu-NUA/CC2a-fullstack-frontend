import { useEffect, useState } from "react";
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
  const [loading, setLoading] = useState(false);

  const fetchCounter = () => {
    fetch("http://localhost:3000/counter").then((res) => {
      res.text().then(text => {
        setCounter(Number(text));
      })
    }, error => {
      console.log(error);
    })
  }

  useEffect(() => {
    fetchCounter();
    let id = setInterval(fetchCounter, 500);
    return () => clearInterval(id);
  }, [])

  const addOne = () => {
    setLoading(true);
    setCounter(counter + 1);
    fetch("http://localhost:3000/counter", {method: "POST"}).then(() => {setLoading(false)});
  }

  return <div className="flex items-center justify-center w-screen h-screen">
    <Card>
      <p>Counter: {counter}</p>
    <Button onClick={addOne} disabled={loading}>Add One</Button>
    </Card>
    </div>
}
