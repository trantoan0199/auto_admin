import { IconButton } from "@material-ui/core";
import { Delete } from "@material-ui/icons";
import React from "react";

function Contact() {
  return (
    <div>
      <table className="table table-bordered table-responsive-sm">
        <thead className="table-dark">
          <tr>
            <th>STT</th>
            <th>Tên</th>
            <th>Email</th>
            <th>Mô Tả</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Trần trung Toản</td>
            <td>trantrungtoan9x@gmail.com</td>
            <td>trống</td>
            <td>
              <IconButton>
                <Delete color="secondary"/>
              </IconButton>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Contact;
