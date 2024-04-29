import Nav from "../components/Nav";
import Element from "../components/Element";
import Card from "../components/Card";

export default function Home() {
  return (
    <>
      <Nav />
      <section className="flex flex-col lg:flex-row justify-center items-center lg:pt-20">
        <div className="text-center lg:text-left">
          <h1 className="text-white text-4xl lg:text-5xl font-bold p-4">
            Web developer
          </h1>
          <p className="text-white p-4 text-sm lg:text-base max-w-sm">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta
            minima accusamus nihil iusto at vitae non quo architecto doloremque
            natus sit mollit.
          </p>

          <div className="p-2">
            <button className="text-black bg-white border m-2 rounded-md px-4">
              About us
            </button>
            <button className="text-white rounded-md px-4 lg:px-8">
              contact
            </button>
          </div>
        </div>

        <div className="w-full lg:w-[350px] h-[350px] overflow-hidden p-4">
          <Element />
        </div>
      </section>

      <section>
        <div className="relative flex justify-center">
          <img
            src="./public/whirl.svg"
            alt=""
            className="rotate-90 object-cover h-[1000px] w-[1000px]"
          />
          <div className="absolute flex items-center justify-center lg:pt-52">
            <h2 className="text-white text-4xl lg:text-5xl font-bold">
              packages
            </h2>
          </div>
          <div className="absolute flex flex-wrap justify-center mt-[247px]">
            <Card />
          </div>
        </div>
      </section>

      <footer className="text-center">
        <p className="text-white font-bold text-xs lg:text-sm p-4">
          Created by&nbsp;
          <a href="https://github.com/javierDev03">Javier Cervantes</a>
        </p>
      </footer>
    </>
  );
}
