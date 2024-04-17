import Link from "next/link";
import { Github } from "../Icons";

function Writing({
  writings,
}: {
  writings: {
    title: string;
    description: string;
    ttr: string;
    time: string;
    link: string;
  };
}) {
  console.log(writings);
  return (
    <Link
      target="_blank"
      href={writings.link}
      className="h-full w-full flex justify-items-start items-center min-h-36 bg-box border-[1px] border-box-border rounded-md gradientBG hover:border-box-accent text-start"
    >
      <div className="flex flex-col justify-items-start text-start px-5">
        <h3 className="text-lg text-start py-1">{writings.title}</h3>
        <p>
          {writings.time} - {writings.ttr}
        </p>
        <p>{writings.description}</p>
      </div>
    </Link>
  );
}

export default Writing;
