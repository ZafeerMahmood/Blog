import Image from "next/image";
import { Button } from "@/components/ui/button";
export default function Home() {
  return (
    <div className="text-5xl min-h-screen ">
      <h1>Welcome to my website!</h1>
      <Button size={"lg"} >
        Click me!
      </Button>
    </div>
  );
}
