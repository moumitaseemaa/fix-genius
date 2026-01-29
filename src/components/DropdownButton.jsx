import React from "react";
import { useState } from "react";
import DropdownIcon from "../assets/icons/callDetails/DropdownIcon.jsx";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const DropdownButton = ({ items, className, setCurrent, label }) => {
  const [active, setActive] = useState(items[0]);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className={`bg-[#1D293D] hover:bg-[#1D293D50] hover:text-white border border-[#2B7FFF20] hover:border-[#2B7FFF50] text-white sm:px-8 py-4 font-inter text-base  leading-5 font-normal h-12.5 ${className}`}
        >
          {active} <DropdownIcon />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-40 bg-[#0F172B] border border-[#2B7FFF20] text-white ">
        <DropdownMenuGroup>
          {label && <DropdownMenuLabel></DropdownMenuLabel>}

          {items.map((item, index) => (
            <DropdownMenuCheckboxItem
              key={item + index}
              checked={active === item}
              onSelect={() => { setActive(item);  setCurrent(item)}}
            >
              {item}
            </DropdownMenuCheckboxItem>
          ))}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DropdownButton;