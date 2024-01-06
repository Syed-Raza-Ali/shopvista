import { femaleImages } from "../array"
import Image from "next/image"
export default function Products() {
  return (
   
      
    <div className="col-span-6  h-min w-full  items-center md:block  justify-center   ">

     
      <div className="grid justify-center md:justify-start md:items-start items-center m-5">
        </div>
      <div className="flex justify-center">
        <div className="w-[70%] md:w-[90%] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {
            femaleImages.map((item) => {
              return (
                <div>

                  <Image src={item.image} alt={item.title} width={300} height={300} className="object-cover cursor-pointer " />
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

  )
}
