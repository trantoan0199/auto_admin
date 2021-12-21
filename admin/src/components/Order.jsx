import { IconButton } from "@material-ui/core";
import { Delete } from "@material-ui/icons";
import React from "react";

function Order() {
  return (
    <div>
      <table className="table table-bordered table-responsive-sm">
        <thead className="table-dark">
          <tr>
            <th>STT</th>
            <th>Hình Ảnh Xe</th>
            <th>Tên Xe</th>
            <th>Giá Xe</th>
            <th>Tên Người Mua</th>
            <th>SĐT</th>
            <th>CMND/CCCD</th>
            <th>Email</th>
            <th>Mô Tả</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>
              <img src="" alt="" style={{ width: 100, height: 75 }} />
            </td>
            <td>Lamborghini</td>
            <td>3.300.000.000</td>
            <td>Trần trung Toản</td>
            <td>0967830046</td>
            <td>20606885</td>
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

export default Order;
