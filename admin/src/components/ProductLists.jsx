import { IconButton } from "@material-ui/core";
import { Delete, Edit } from "@material-ui/icons";
import React from "react";
import { Link } from "react-router-dom";
import { Table } from "reactstrap";

function ProductLists() {
  return (
    <div>
      <Link to="/product/add" className="btn btn-primary">
        Thêm Sản Phẩm
      </Link>
      <Table hover class="table table-bordered border-primary">
        <thead>
          <tr>
            <th>id</th>
            <th>Image</th>
            <th>Product Name</th>
            <th>Brand</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Description</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td scope="row">1</td>
            <td>
              <img
                style={{ width: 50, height: 50 }}
                src="https://vnn-imgs-f.vgcloud.vn/2019/09/04/14/sieu-bo-manh-nhat-trong-lich-su-lamborghini-gia-gan-84-ty.jpg"
              />
            </td>
            <td>Sian</td>
            <td>Lamborghini</td>
            <td>3.000.000.000</td>
            <td>5</td>
            <td>Description</td>
            <td>
              <IconButton>
                <Edit color="primary" />
              </IconButton>
              <IconButton>
                <Delete color="secondary" />
              </IconButton>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default ProductLists;
