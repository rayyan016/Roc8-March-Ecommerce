import Image from "next/image";

import Icon from "@mdi/react";
import { mdiChevronLeft, mdiChevronRight } from "@mdi/js";

import Search from "public/search.png";
import Cart from "public/cart.png";

const Navbar: React.FC = () => {
  return (
    <>
      <div className="mr-4 flex h-9 items-center justify-end space-x-4">
        <p className="text-[12px] font-normal">Help</p>
        <p className="text-[12px] font-normal">Orders & Returns</p>
        <p className="text-[12px] font-normal">Hi, John</p>
      </div>
      <div className="ml-4 flex h-16 items-center justify-between">
        <div className="text-[32px] font-bold">ECOMMERCE</div>
        <div className="-ml-40 flex space-x-4 text-[16px] font-[600]">
          <p>Categories</p>
          <p>Sale</p>
          <p>Clearance</p>
          <p>New Stock</p>
          <p>Trending</p>
        </div>
        <div className="icon mr-4 flex space-x-4">
          <div>
            <Image src={Search} alt="Image" width={32} height={32} />
          </div>
          <div>
            <Image src={Cart} alt="Image" width={32} height={32} />
          </div>
        </div>
      </div>
      <div className="flex h-9 items-center justify-center space-x-3 bg-[#F4F4F4]">
        <div>
          <Icon path={mdiChevronLeft} size={0.67} />
        </div>
        <div>Get 10% off on business sign up</div>
        <div>
          <Icon path={mdiChevronRight} size={0.67} />
        </div>
      </div>
    </>
  );
};

export default Navbar;
