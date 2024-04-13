export default function Home() {
  return (
    <section
      id="Home"
      className="flex justify-center items-center h-[700px]"
      //add a background image
      style={{
        backgroundImage: "url('/gradient.jpeg')",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="flex flex-col gap-5 text-center ">
        <h1 className="text-7xl ">Hello. I'm Zafeer.</h1>
        <h1 className="text-7xl text-primary">A Software Engineer</h1>
        <p className="text-foreground-secondary text-lg">
          I'm passionate about creating experiences that are easy to use,
          accessible and
        </p>
        <p className="text-foreground-secondary text-lg">
          that meet the users need.
        </p>
      </div>
    </section>
  );
}
