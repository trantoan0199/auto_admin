import { Card, Grid, Typography, Button } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import { FormGroup, Input, Label } from "reactstrap";

function ProductAdd() {
  return (
    <div>
      <Grid container>
        <Grid container xs={6} md={6}>
          <Grid item xs={6}>
            <div className="form-group">
              <label for="">Tên Sản Phẩm</label>
              <input
                type="text"
                name=""
                id=""
                className="form-control"
                placeholder=""
                aria-describedby="helpId"
              />
            </div>
          </Grid>
          <Grid item xs={6}>
            <FormGroup>
              <Label for="exampleUrl">Url</Label>
              <Input
                id="exampleUrl"
                name="url"
                placeholder="URL Hình Ảnh"
                type="url"
              />
            </FormGroup>
          </Grid>
          <Grid item xs={3}>
            <div className="form-group">
              <label for="">Số Lượng</label>
              <input
                type="number"
                name=""
                id=""
                className="form-control"
                placeholder=""
                aria-describedby="helpId"
              />
            </div>
          </Grid>
          <Grid item xs={3}>
            <div className="form-group">
              <label for="">Giá</label>
              <input
                type="number"
                name=""
                id=""
                className="form-control"
                placeholder=""
                aria-describedby="helpId"
              />
            </div>
          </Grid>
          <Grid item xs={3}>
            <FormGroup>
              <Label for="exampleSelect">Select</Label>
              <Input id="exampleSelect" name="select" type="select">
                <option>Vinfast</option>
                <option>Audi</option>
                <option>Mercedes</option>
                <option>Toyota</option>
                <option>Lamborghini</option>
              </Input>
            </FormGroup>
          </Grid>
        </Grid>
        <Grid container xs={6} md={6}>
          <Card align="center">
            <Typography variant="h4" children="Chi Tiết Sản Phẩm" />
            <Grid container xs={12} spacing={3}>
              <Grid item xs={6}>
                <div className="form-group">
                  <label for="">Thuộc tính</label>
                  <input
                    type="text"
                    name=""
                    id=""
                    className="form-control"
                    placeholder=""
                    aria-describedby="helpId"
                  />
                </div>
              </Grid>
              <Grid item xs={6}>
                <div className="form-group">
                  <label for="">Giá Trị</label>
                  <input
                    type="text"
                    name=""
                    id=""
                    className="form-control"
                    placeholder=""
                    aria-describedby="helpId"
                  />
                </div>
              </Grid>
              <Button variant="contained" color="secondary">
                Add
              </Button>
              <Grid item xs={12}>
                <table class="table table-sm border-textprimary">
                  <thead>
                    <tr>
                      <th>Thuộc Tính</th>
                      <th>Giá Trị</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td scope="row">động cơ</td>
                      <td>1.000km/h</td>
                    </tr>
                    <tr>
                      <td scope="row">động cơ</td>
                      <td>1.000km/h</td>
                    </tr>
                    <tr>
                      <td scope="row">động cơ</td>
                      <td>1.000km/h</td>
                    </tr>
                    <tr>
                      <td scope="row">động cơ</td>
                      <td>1.000km/h</td>
                    </tr>
                    <tr>
                      <td scope="row">động cơ</td>
                      <td>1.000km/h</td>
                    </tr>
                    <tr>
                      <td scope="row">động cơ</td>
                      <td>1.000km/h</td>
                    </tr>
                    <tr>
                      <td scope="row">động cơ</td>
                      <td>1.000km/h</td>
                    </tr>
                    <tr>
                      <td scope="row">động cơ</td>
                      <td>1.000km/h</td>
                    </tr>
                    <tr>
                      <td scope="row">động cơ</td>
                      <td>1.000km/h</td>
                    </tr>
                    <tr>
                      <td scope="row">động cơ</td>
                      <td>1.000km/h</td>
                    </tr>
                    <tr>
                      <td scope="row">động cơ</td>
                      <td>1.000km/h</td>
                    </tr>
                    <tr>
                      <td scope="row">động cơ</td>
                      <td>1.000km/h</td>
                    </tr>
                  </tbody>
                </table>
              </Grid>
            </Grid>
          </Card>
        </Grid>
      </Grid>
      <Button variant="contained" color="secondary">
        Save
      </Button>

      <Link to="/products" style={{ textDecoration: "none" }}>
        <Button variant="contained" color="primary">
          Trở lại
        </Button>
      </Link>
    </div>
  );
}

export default ProductAdd;
