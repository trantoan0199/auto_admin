import React from "react";
import { Link } from "react-router-dom";

export default function Links({ links }) {
  return (
    <ul>
      {links.map((link) => {
        return (
          <li>
            <Link to={link.to} exact={link.exact}>
              <link.icon />
              {link.name}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
