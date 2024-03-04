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
import { limitString } from "@/utils/helper";
import { FetchData } from "@/fetch/fetchdata";

function createData(
  product_id: string,
  product_name: string,
  product_price: string,
  product_status: string,
) {
  return {
    product_id,
    product_name,
    product_price,
    product_status,
  };
}

export default function ProductTable() {
  const [rows, setRows] = React.useState([]);
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

  const loadData = async () => {
    let tmp: any = [];
    const fetchRows = await FetchData.GET_ALL_PRODUCTS();
    fetchRows?.data?.forEach((item: any) => {
      console.log(item);
      tmp = [...tmp, createData(
        item?.product_id.toString(),
        item?.product_nameVI.toString(),
        item?.product_descriptionVI.toString(),
        item?.category?.category_name.toString())]
    })
    setRows(tmp)
  }

  const init = async () => {
    loadData()
  }

  React.useEffect(() => {
    init()
  }, [])

  React.useEffect(() => {
  }, [rows])

  return (
    <Paper>
      <TableContainer>
        <Table sx={{ minWidth: 650 }} aria-label="product">
          <TableHead>
            <TableRow>
              <TableCell>Mã sản phẩm</TableCell>
              <TableCell align="left">Tên sản phẩm</TableCell>
              <TableCell align="left">Mô tả</TableCell>
              <TableCell align="left">Danh mục</TableCell>
              <TableCell align="left"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row: any) => (
              <TableRow key={row.product_id}>
                <TableCell align="left">{row.product_id}</TableCell>
                <TableCell align="left">
                  <div className="flex justify-start items-center gap-x-2">
                    <CardMedia
                      sx={{ width: 40, height: 40, borderRadius: "10px" }}
                      image=""
                      title="card"
                    />
                    {row.product_name}
                  </div>
                </TableCell>
                <TableCell align="left">{limitString(row.product_price, 70)}</TableCell>
                <TableCell align="left">
                  <Button variant="contained" color="success">
                    {row.product_status}
                  </Button>
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
