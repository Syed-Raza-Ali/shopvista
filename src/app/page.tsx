import { InputDiv } from "@/components/ui/input";
import Link from "next/link";
import Image from "next/image"
import { PromotionImages, femaleImages, mainImages } from "./array";

export default function Home() {
  return (
    <main>
      <div className="md:flex grid grid-col-12 justify-center items-center px-6">

        {/* left hand side */}

        <div className="col-span-6 h-min w-full md:w-1/2  items-center justify-center  pt-6 pb-20">

          <div className="grid justify-center items-center">
            <div className="h-12 rounded w-32 bg-blue-100 font-bold justify-center items-center flex my-4 shadow shadow-black">
              Sale 70%
            </div>
            <h1 className="pl-6 text-5xl font-bold my-5 text-start ">
              Selling online is <br></br> vital to bussiness <br></br> growth
            </h1>
            <div className="font-semibold font-italic mt-6">
              Discover a world of elegance and convenience at ShopVista. <br></br>Immerse yourself in a curated collection  of handpicked products <br></br> that redefine trends and elevate your lifestyle. Our passion for <br></br> quality and innovation is reflected in every item we offer.

              <div className="mt-4 mb-8">
                Start shopping now at
                <Link href="/" className="text-slate-700 font-bold"> ShopVista.com </Link>
                and make every purchase a <br></br>statement of style! 🛒 </div>
              <div className="flex justify-end">
                <Link href="/Products"><div className="h-16 rounded w-40 bg-black text-white font-bold justify-center items-center flex my-4 shadow shadow-black">
                  Start shopping 🛒
                </div></Link>
              </div>
            </div>
          </div>
        </div>

        {/* right hand side */}

        <div className="col-span-6 h-min md:mt-10  pr-6 w-full  lg:w-1/2 items-center lg:block  justify-center pl-6 md:pl-20 ">

          <Image
            src="https://i.ibb.co/SPKRdyC/side.gif"
            alt="Your GIF"
            width="350"
            height="450"
            className="rounded-2xl md:ml-20 shadow-2xl md:w-[350px] md:h-[500px] w-[400px] h-[550px]"
          />
          <div className="h-20 w-40">{/* =========   to empty space bottom of img    ======== */} </div>

        </div>

      </div>
      <div >
        <div className="grid justify-center items-center mb-10">
          <h2 className="font-bold text-sky-700 text-center mb-4 mt-8">PROMOTIONS</h2>
          <h1 className="text-4xl font-bold mb-8 text-center">Our Promotions Events</h1></div>
        <div className="flex justify-center">
          <div className="w-[70%] md:w-[90%] grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
            {
              PromotionImages.map((item) => {
                return (
                  <div>

                    <Image src={item.image} alt={item.title} width={300} height={300} className="   object-cover cursor-pointer " />
                    <div className="my-5 mx-2 cursor-pointer">
                      <p>{item.title}</p>
                      <p className="text-slate-700 font-bold">{item.description}</p>
                      <p>{item.price}</p>

                    </div>
                  </div>

                )
              })
            }
          </div>
        </div>
      </div>
      <div >
        <div className="grid justify-center items-center mb-16 mt-20">
          <h2 className="font-bold text-sky-700 text-center  mt-8">PRODUCTS</h2>
          <h1 className="text-4xl font-bold my-4 mx-3 text-center md:inline">Check What We Have</h1></div>
        <div className="flex justify-center">
          <div className="w-[70%] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 ">
            {
              mainImages.map((item) => {
                return (
                  <div className=" bg-transparent transition-transform transform hover:scale-110 ">

                    <Image src={item.image} alt={item.title} width={200} height={400} className="w-full  object-cover cursor-pointer " />
                    <div className="my-5 mx-2 cursor-pointer">
                      <p>{item.title}</p>
                      <p className="text-slate-700 font-bold">{item.description}</p>
                      <p>{item.price}</p>

                    </div>
                  </div>

                )
              })
            }
          </div>
        </div>
      </div>
      <div className=" flex justify-center items-center  mt-20 mb-20 h-96 md:mt-24 md:mb-0 w-full px-5">
        <div className="grid text-center">
          <h1 className="text-3xl md:text-4xl font-extrabold">Subscribe Our Newslatter</h1>
          <p className="my-6">Get the latest Information and promo offers directly</p>

          <InputDiv />

        </div>
      </div>

    </main>
  )
}
