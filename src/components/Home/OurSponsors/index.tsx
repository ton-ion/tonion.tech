export default function OurSponsors(): JSX.Element {
  const logos = [
    {
      image: "/img/usedBy/dezh.png",
      link: "https://dezh.tech",
    },
    {
      image: "/img/usedBy/dezh.png",
      link: "https://dezh.tech",
    },
  ];
  return (
    <div className="max-w-3xl mx-auto px-5 my-10">
      <div className="flex flex-col justify-center">
        <div className="text-center">
          <h2 className="font-semibold text-3xl">Used By</h2>
          <p className="mx-auto mt-2 text-gray-500 dark:text-gray-800">
            if you are using Tonion in your project, just open a{" "}
            <a
              className="underline text-secondary-600"
              href="https://github.com/ton-ion/tonion.tech/edit/main/src/components/Home/OurSponsors/index.tsx"
              target="_blank"
            
            >
              Pull Request
            </a>{" "}
            to add your project here!
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-10 mt-2 md:justify-around">
          <div className=" mb-5 flex gap-4 ">
            {logos.map((logo) => (
              <>
                <a href={logo.link} target="_blank" className="dark:bg-gray-600 dark:rounded-full flex p-1">
                  <img
                    src={logo.image}
                    alt="Dezh Technologies"
                    className="w-[50px] m-auto"
                  />
                </a>
              </>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
