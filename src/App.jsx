export default function App() {

  return (
    <>
      <div className="wrapper overflow-x-hidden">
        <div className="page1 relative w-screen h-max bg-[var(--color1)] ">
          <div className="navbar fixed w-full p-[32px] flex items-center justify-between text-[#9b9b9b]">
            <div className="uppercase font-[grotesk] text-xl leading-[20px] flex items-center gap-2">
              <span className="font-black">
                Our Roots •
              </span>
              <span>flashlights</span>
            </div>
            <ul className="uppercase text-xl flex gap-10">
              <li>timeline</li>
              <li><i class="ri-menu-3-line"></i></li>
            </ul>
          </div>
          <div className="w-full flex px-[48px] pt-[calc(2*(32px+48px))] pb-[48px]">
            <div className="history uppercase font-[fkscreamer] w-max">
              <span>the history of</span>
              <br />
              <span>jailhouse lawyers</span>
            </div>
            <div className="w-full  flex items-end justify-center">
              <p className="w-[60%] text-2xl leading-[24px]">
                A brief historical overview of the
                emergence and impact of jailhouse
                lawyers in the legal system
              </p>
            </div>

          </div>
        </div>
        <div className="page2 bg-red-300 w-screen h-screen"></div>
      </div>
    </>
  )
}
