import Image from "next/image";
import IconContainer from "./components/IconContainer";

export default function Home() {
  return (
    <div className="bg-[#11071f]">
      <header className="fixed w-[100%] px-[16%] bg-[#1A0B2E] flex justify-between items-center h-12">
        <p>O</p>
        <nav className="flex justify-between w-1/2 md:w-1/3">
          <a href="#" className="hover:text-[#7127BA]">
            Home
          </a>
          <a href="#projects" className="hover:text-[#7127BA]">
            Projects
          </a>
          <a href="" className="hover:text-[#7127BA]">
            Hire Me
          </a>
        </nav>
      </header>
      <main className="px-[16%]">
        <div className="h-[80vh] flex items-center justify-center">
          <div className="relative flex justify-center">
            <p className="absolute -top-16 left-64">
              Hello! I Am <span className="text-[#7127BA]">Bhavesh Verma</span>
            </p>
            <Image
              className="absolute -top-20 left-40"
              src="/arrow.png"
              width={100}
              height={100}
              alt=""
            />
            <div className="relative">
              <div className="absolute -top-8 -left-8 z-10 h-72 w-72 rounded-full bg-radial-gradient"></div>
              <Image
                className="relative z-20"
                src="/me.png"
                width={220}
                height={220}
                alt=""
              />
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-base">A Developer Who</p>
              <p className="text-4xl md:text-5xl pb-2">
                Delivers cutting-edge
                <br /> solutions
              </p>
              <p className="text-xs">
                Strong commitment to code quality, scalability, and performance,
                <br />
                striving to meet and exceed client expectations within tight
                deadlines.
              </p>
            </div>
          </div>
        </div>
        <div className="self-start pb-8">
          <p className="text-4xl">I'm a Software Engineer</p>
          <p className="pb-12">
            Currently, I'm available for{" "}
            <a href="">
              <span className="text-[#7127BA]">hire</span>
            </a>
          </p>
          <p className="">
            Welcome to my portfolio! I am passionate about crafting digital
            solutions that blend creativity with functionality. I thrive on
            tackling complex problems and transforming them into elegant,
            user-centric applications.I am always eager to embrace new
            challenges and stay at the forefront of emerging technologies.
            Whether it's front-end development, back-end infrastructure, or
            full-stack projects, I am dedicated to delivering high-quality,
            scalable solutions. Explore my portfolio to discover how I bring
            innovation and precision to every line of code.
          </p>
        </div>
        <div>
          <p className="text-4xl">Tech Stack</p>
          <div className="flex gap-4 justify-center items-center h-32">
            <IconContainer>
              <img src="/tech/css.png" />
            </IconContainer>
            <IconContainer>
              <img src="/tech/js.png" />
            </IconContainer>
            <IconContainer>
              <img src="/tech/react.png" />
            </IconContainer>
            <IconContainer>
              <img src="/tech/node.png" />
            </IconContainer>
            <IconContainer>
              <img src="/tech/express.png" />
            </IconContainer>
            <IconContainer>
              <img src="/tech/mongo_db.png" />
            </IconContainer>
            <IconContainer>
              <img src="/tech/mongo_db.png" />
            </IconContainer>
            <p>and more ...</p>
          </div>
        </div>
        <div id="projects">
          <p className="text-4xl pb-8">Projects</p>
          <p className="text-[#9857D3] pb-4">Netflix Like App</p>

          <div className="flex pb-12 flex-col-reverse lg:flex-row gap-6">
            <div className="p-6 rounded-xl bg-gradient-to-r from-[#2a0e46] to-[#11071f] ">
              <p className="pb-4">
                Movies App is a web application built with React, Material-UI,
                and Redux Toolkit, designed to help users discover, explore, and
                enjoy their favorite movies and TV shows. This project harnesses
                the power of the TMDB (The Movie Database) API to provide an
                extensive and up-to-date collection of movie and TV show
                information.
              </p>
              <button className="bg-[#7127BA] py-2 px-4 rounded-lg">
                View Page
              </button>
            </div>

            <img className="lg:h-48" src={"/stranger_things.png"}></img>
          </div>

          <div className="flex">
            <p className="text-[#9857D3] pb-4 lg:ml-auto">Movies App</p>
          </div>
          <div>
            <div className="flex flex-col lg:flex-row gap-6 pb-12">
              <img className="lg:h-48" src={"/stranger_things.png"}></img>
              <div className="p-6 rounded-xl bg-gradient-to-l from-[#2a0e46] to-[#11071f] ">
                <p className="pb-4">
                  A web app for visualizing personalized Spotify data. View your
                  top artists, top tracks, recently played tracks, and detailed
                  audio information about each track. Create and save new
                  playlists of recommended tracks based on your existing
                  playlists and more.
                </p>
                <button className="bg-[#7127BA] py-2 px-4 rounded-lg">
                  View Page
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer></footer>
    </div>
  );
}
