import Link from "next/link";
import { Github } from "../Icons";
import { formatDate } from "@/util";

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
  return (
    <Link
      href={writings.link}
      className="h-full w-full ps-2 flex justify-items-start items-center min-h-36 bg-box border-[1px] border-box-border rounded-md gradientBG hover:border-box-accent "
    >
      <div className="flex flex-col justify-items-start ps-1">
        <h3 className="text-lg text-start ">{writings.title}</h3>
        <p className="text-neutral-300">
          {formatDate(writings.time)} - {writings.ttr}
        </p>
        <p className="text-neutral-400">{writings.description}</p>
      </div>
    </Link>
  );
}

export default Writing;
