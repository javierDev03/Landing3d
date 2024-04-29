import { InfoCard } from "../data/InfoCard";

export default function Card() {
  return (
    <>
      {InfoCard.map((info) => (
        <div class="flex flex-col rounded-3xl backdrop-filter backdrop-blur text-white m-3 w-[230px]">
          <div class="px-6 py-8 sm:p-10 sm:pb-6">
            <div class="grid items-center justify-center w-full grid-cols-1 text-left">
              <div key={info.id}>
                <h2 class="text-lg font-medium tracking-tighter  lg:text-3xl">
                  {info.title}
                </h2>
                <div>
                  <p class="mt-2 text-sm ">{info.bodyText}</p>
                </div>
                <p className=" p-4 flex justify-center ">
                  <span class=" font-light tracking-tight">${info.price}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
