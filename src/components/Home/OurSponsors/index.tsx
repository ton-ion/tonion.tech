

export default function OurSponsors(): JSX.Element {
    return(
<div className="max-w-3xl mx-auto px-5 my-10">
  <div className="flex flex-col justify-center">
    <div className="text-center">
      <h2 className="font-semibold text-3xl">Used By</h2>
      <p className="mx-auto mt-2 text-gray-500">
 if you are using Tonion in your project, just open a <a href="https://github.com/ton-ion/tonion.tech/edit/main/src/components/Home/OurSponsors/index.tsx" target="_blank">Pull Request</a> to add your project here!
      </p>
    </div>
    <div className="flex flex-wrap items-center justify-center gap-10 mt-2 md:justify-around">
    <div className='bg-secondary-100 rounded-full w-[100px] h-[100px] mb-5'>
      <a href="https://dezh.tech" target="_blank" >
      <img src="https://pbs.twimg.com/profile_images/1774474942941114369/GsUxI4ZD_400x400.png" alt="Dezh Technologies" />
      </a>
      </div>
    </div>
  </div>
</div>
    )
}
