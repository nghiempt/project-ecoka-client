import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button, CardMedia, TablePagination } from "@mui/material";
import BorderColorIcon from "@mui/icons-material/BorderColor";

function createData(
  product_id: string,
  product_name: string,
  product_price: string,
  product_status: string,
  product_repository: string
) {
  return {
    product_id,
    product_name,
    product_price,
    product_status,
    product_repository,
  };
}

const rows = [
  createData("ECOKA-PRODUCT-01", "Túi Lục Bình", "99,000", "Còn Hàng", "10"),
  createData("ECOKA-PRODUCT-02", "Túi Lục Bình", "99,000", "Còn Hàng", "10"),
  createData("ECOKA-PRODUCT-03", "Túi Lục Bình", "99,000", "Còn Hàng", "10"),
  createData("ECOKA-PRODUCT-03", "Túi Lục Bình", "99,000", "Còn Hàng", "10"),
  createData("ECOKA-PRODUCT-03", "Túi Lục Bình", "99,000", "Còn Hàng", "10"),
];

export default function ProductTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper>
      <TableContainer>
        <Table sx={{ minWidth: 650 }} aria-label="product">
          <TableHead>
            <TableRow>
              <TableCell>Mã sản phẩm</TableCell>
              <TableCell align="left">Tên sản phẩm</TableCell>
              <TableCell align="left">Trạng thái</TableCell>
              <TableCell align="left">Giá</TableCell>
              <TableCell align="left">Kho</TableCell>
              <TableCell align="left"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.product_id}>
                <TableCell align="left">{row.product_id}</TableCell>
                <TableCell align="left">
                  <div className="flex justify-start items-center gap-x-2">
                    <CardMedia
                      sx={{ width: 40, height: 40, borderRadius: "10px" }}
                      // image={STRING.dev_product}
                      title="card"
                    />
                    {row.product_name}
                  </div>
                </TableCell>
                <TableCell align="left">
                  <Button variant="contained" color="success">
                    {row.product_status}
                  </Button>
                </TableCell>
                <TableCell align="left">{row.product_price}</TableCell>
                <TableCell align="left">
                  <div className="flex justify-start items-center gap-x-2">
                    <h1>{row.product_repository}</h1>
                  </div>
                </TableCell>
                <TableCell align="left">
                  <BorderColorIcon />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
