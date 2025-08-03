import { Menu, X } from "lucide-react";
import React, { Dispatch, SetStateAction } from "react";

const MenuToggle = ({
  showNav,
  setShowNav,
}: {
  showNav: boolean;
  setShowNav: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <div onClick={() => setShowNav((prev) => !prev)}>
      {showNav ? (
        <X className="text-blue-dark h-6 w-6" strokeWidth={1.5} />
      ) : (
        <Menu
          className="text-grey-dark h-6 w-6 font-extralight"
          strokeWidth={1.5}
        />
      )}
    </div>
  );
};

export default MenuToggle;
