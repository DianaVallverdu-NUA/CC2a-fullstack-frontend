import { useEffect, useState } from "react";
import type { Route } from "./+types/home";
import { Card, Button } from "antd";
const backendURL = import.meta.env.VITE_BACKEND_URL || "http://localhost:3000";

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
    const url = `${backendURL}/counter`;
    fetch(url).then(
      (res) => {
        res.json().then((result) => {
          setCounter(result.counter);
        });
      },
      (error) => {
        console.log(error);
      }
    );
  };

  useEffect(() => {
    fetchCounter();
  }, []);

  const addOne = () => {
    const url = `${backendURL}/counter`;
    setLoading(true);
    setCounter(counter + 1);
    fetch(url, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({ counter: counter + 1 }),
    }).then(() => {
      setLoading(false);
    });
  };
  //
  return (
    <div className='flex items-center justify-center w-screen h-screen'>
      <Card>
        <p>Counter: {counter}</p>
        <Button onClick={addOne} disabled={loading}>
          Add One
        </Button>
      </Card>
    </div>
  );
}
