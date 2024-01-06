import {ShoppingCart, Menu} from 'lucide-react'
import { Input } from "@/components/ui/input"
import Link from 'next/link'
import {
    Sheet,
    SheetContent,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"

export default function Header() {
    return (
      <header className="flex    bg-white h-24 w-full justify-between  items-center px-6 ">
        <div className="flex ">
  
          <div className="md:flex h-12 justify-center items-center w-12 mx-4 rounded-full bg-slate-400 hidden">
            <ShoppingCart />
          </div>
          <Link className="text-4xl font-bold  cursor-pointer" href="/"> ShopVista </Link>
        </div>
        <nav className="hidden md:block px-10">
          <ul className="flex md:gap-x-10 font-semibold ">
            <li>
              <Link href="/Whyus" className="cursor-pointer ">Why us?</Link>
            </li>
            <li>
            <Link href="/Adults" className="cursor-pointer">Adults</Link>
            </li>
            <li>
              <Link href="/Kids" className="cursor-pointer">Kids</Link>
            </li>
            <li>
              <Link href="/Products" className="cursor-pointer" >All Collections</Link>
            </li>
          </ul>
        </nav>
        <div className=" lg:flex pr-6 hidden ">
          <Input />
  
        </div >
  
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger>
              <Menu />
            </SheetTrigger>
            <SheetContent>
              <SheetTitle className="flex gap-2 "> <ShoppingCart />  <Link className=" font-bold  cursor-pointer" href="/"> ShopVista </Link> </SheetTitle>
  
              <nav className="">
                <ul className="grid m-4  font-semibold ">
                  <li className="cursor-pointer my-2">
                    <Link href="/Adults" >Adults collections</Link>
                  </li>
  
                  <li className="cursor-pointer my-2">
                    <Link href="/Kids">Kids Collections</Link>
                  </li>
                  <li className="cursor-pointer my-2">
                    <Link href="/Products">All Collections</Link>
                  </li>
                  <li className="cursor-pointer my-2 hover:underline">
                  <Link href="/Whyus">Why us?</Link>
                  </li>
                </ul>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </header>
    )
  }