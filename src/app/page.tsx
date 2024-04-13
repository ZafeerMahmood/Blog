export default function Home() {
  return (
    <section
      id="Home"
      className="flex flex-col justify-center items-center  dark:bg-gradient-to-b from-background-dark to-bg-background  "
    >
      <div
        className="flex items-center justify-center h-[750px] w-full"
        style={{
          backgroundImage: "url('/stars.svg')",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div
          className="flex flex-col gap-5 text-center items-center justify-center w-full h-full  "
          style={{
            backgroundImage: "url('/gradient.jpeg')",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        >
          <h1 className="text-7xl ">Hello. I'm Zafeer.</h1>
          <h1 className="text-7xl text-primary">A Software Engineer</h1>
          <p className="text-foreground-secondary text-lg leading-3">
            I'm passionate about creating experiences that are easy to use,
            accessible and
          </p>
          <p className="text-foreground-secondary text-lg leading-3">
            that meet the users need.
          </p>
        </div>
      </div>

      <div className="flex flex-col text-start max-w-7xl mt-28 px-10 xl:px-0">
        <h1 className="text-2xl">About</h1>
        <p className="text-foreground-secondary leading-6">
          About I'm a 21 year old developer living in Germany. I discovered my
          passion for coding after seeing my brother do it. I fell in love with
          using my creativity to build things for the web. Through persistence,
          self-discipline, and commitment, I achieved my goal of becoming a
          frontend developer. What kept me on this journey is that I always find
          learning new things exciting and facing unfamiliar challenges. In
          addition to coding, I enjoy building side projects because it allows
          me to explore my creativity and accomplish exciting things.
        </p>
      </div>
    </section>
  );
}
