import {
  LogOutIcon,
  ShoppingBag,
  ShoppingCartIcon,
  StarIcon,
  User,
  XCircleIcon,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <div>
      {/* Header */}
      <div className="justify-center">
        <div className="justify-evenly py-5 flex items-center">
          {/* Logo */}
          <div className="font-extrabold font-serif text-2xl max-md:absolute max-md:left-[20%] max-sm:left-[15%] max-md:top-5">Choice</div>
          {/* Nav List */}
          <div className="max-md:pt-[5%] text-center max-sm:pt-[10%]">
            <ul className="flex gap-5 max-md:p-6 max-sm:p-4">
              <Link href="/"><li>Home</li></Link>
              <Link href="/Products"><li>Products</li></Link>
              <Link href="/Blogs"><li>Blogs</li></Link>
              <Link href="/Contact"><li>Contact Us</li></Link>
            </ul>
          </div>
          {/* Cart & Wishlist */}
          <div className="flex gap-4 px-4 max-md:absolute  max-md:right-[10%] max-md:top-5">
            <div>
              <select name="Translate">
                <option value="English">English</option>
                <option value="French">French</option>
                <option value="Urdu">Urdu</option>
              </select>
            </div>
            {/* shopping cart Icon */}
            <ShoppingCartIcon />
            {/* User Icon */}
            <DropdownMenu>
              <DropdownMenuTrigger>
                <User />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel> My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <User /> Manage My Account
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <ShoppingBag /> My Orders
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <XCircleIcon /> Cancelation
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <StarIcon /> My Reviews
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <LogOutIcon /> Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
      <hr className="w-full text-black"/>
    </div>
  );
};

export default Header;
