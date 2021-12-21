import React from "react";
import { FiShoppingBag, FiSettings } from "react-icons/fi";
import { RiTruckLine } from "react-icons/ri";
import { TiNews } from "react-icons/ti";
import { MdLogout, MdOutlineContactSupport, MdShoppingCart } from "react-icons/md";
import Links from "./Links";
import { AiFillCar } from "react-icons/ai";

export default function Sidebar() {
  const links1 = [
    {
      name: "Overview",
      to: "/",
      exact: true,
      icon: FiShoppingBag,
    },
    {
      name: "Products",
      to: "/products",
      exact: false,
      icon: AiFillCar,
    },
    {
      name: "Order",
      to: "/order",
      icon: MdShoppingCart,
      exact: false,
    },
    {
      name: "News",
      icon: TiNews,
      to: "/news",
      exact: false,
    },
    {
      name: "Contact",
      to: "/contact",
      icon: MdOutlineContactSupport,
      exact: false,
    },
  ];

  const links2 = [
    {
      name: "Help Centre",
      to: "/Help",
      icon: TiNews,
      exact: false,
    },
    {
      name: "Settings",
      to: "/Settings",
      icon: FiSettings,
      exact: false,
    },
    {
      name: "Logout",
      to: "/Logout",
      icon: MdLogout,
      exact: false,
    },
  ];
  return (
    <div className="sidebar">
      <div className="brand">ShopStop</div>
      <div className="links">
        <Links links={links1} />
        <Links links={links2} />
      </div>
      <div className="pro">
        <div className="image">
          <img
            src="data:image/png;base64,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"
            alt=""
          />
        </div>
        <h3>ShopStop Pro</h3>
        <h5>Get access to all features on ShopStop</h5>
        <button>Get Pro</button>
      </div>
    </div>
  );
}
