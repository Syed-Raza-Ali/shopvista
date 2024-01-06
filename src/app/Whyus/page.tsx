import Link from "next/link";

export default function Male() {
  return (

    <main>
      <div className="grid-col-12 grid-rows-5  px-6">
        {/* top side */}
        <div className=" grid-col-12 grid-rows-1 justify-center items-center pt-5 mt-3">

          <h1 className="text-4xl font-bold  text-center ">Why Us ?</h1>
          <div className="text-center mt-5">
            <b>🌟 Welcome to
            <Link href="/" className="text-slate-700 font-bold hover:underline px-2"> ShopVista.com </Link>
            - Where You Find Awesome Stuff! 🌟</b>
          </div>

        </div>

        {/* left hand side */}
        <div className="md:flex ">
          <div className="col-span-4 grid  row-span-3 h-1/2 w-full md:w-1/2 justify-center pl-5 ">
            <div className="font-semibold font-italic mt-6 pt-3 md:pt-4">
            At <Link href="/" className="text-slate-700 font-bold hover:underline"> ShopVista.com </Link>, we're not just selling things – we're sharing awesome experiences. Ready to make a statement with your style? Let's start shopping!<br></br>
              
              <br></br>

              🚀 Easy Shopping: Shopping is easy-peasy here. We made sure it's super simple from the time you look around until you click that 'buy' button.<br></br>
              <br></br>

              🎁 Great Deals: We've got exclusive deals that won't break the bank. You get awesome stuff without spending a ton.<br></br>
              <br></br>

              📦 Fast Delivery: Get your goodies delivered right to your door in a flash. No waiting around – we know you want your stuff ASAP!<br></br>
              <br></br>
              Are you ready to dive into a world of cool things? That's what we're all about at <Link href="/" className="text-slate-700 font-bold hover:underline"> ShopVista.com </Link>. We've gathered a bunch of awesome stuff that's just perfect for you!
              

            </div>
          </div>

          {/* right hand side */}

          <div className="col-span-4 grid row-span-3  h-1/2 w-full md:w-1/2 justify-center pl-5 ">

            <div className="font-semibold font-italic mt-6 pt-3 md:pt-4">

              🛍️ Cool Collections: Check out our collections with all sorts of neat stuff. We pick things that are trendy and comfy, just for you.<br></br>
              <br></br>

              🌈 Lots of Choices: From cool clothes to the latest gadgets, we've got a bunch of things you'll love. Find something special that matches your style.<br></br>
              <br></br>

              👩‍👧‍👦 Be Part of Our Club: Join our community! Hang out with people who love cool things just like you. Find us on social media, and let's be friends!<br></br>
              <br></br>

              🌐 Safe Shopping: Your info is safe with us. We make sure everything you do here is secure and worry-free.<br></br>
              <br></br>

              Start shopping now at
              <Link href="/" className="text-slate-700 font-bold hover:underline "> ShopVista.com </Link>
              and make every purchase a <br></br>statement of style! 🛒
              <br></br>


            </div>
          </div>
        </div>
        {/* bottom side  */}
        <div className="flex justify-center items-center row-span-1 py-6">

          <b>🛍️ Go ahead and explore at <Link href="/" className="text-slate-700 font-bold hover:underline"> ShopVista.com </Link> – where awesome meets easy!🛒 </b>
        </div>
      </div>

      {/* bottom div  */}
      <div className="col-span-6  h-screen w-full md:w-1/2 items-center md:block  justify-center pl-20 md:pt-10 ">
          {/* <img
            src="/side.gif"
            alt="Your GIF"
            width="350"
            height="450"
            className="rounded-2xl md:ml-20 shadow-2xl"
          /> */}


        </div>
    </main>

  )
}
