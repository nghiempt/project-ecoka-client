import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Avatar, Button, TablePagination } from "@mui/material";

function createData(
  blog_id: string,
  blog_title: string,
  blog_description: string,
  blog_status: string,
  blog_date: string,
  blog_author: string
) {
  return {
    blog_id,
    blog_title,
    blog_description,
    blog_status,
    blog_date,
    blog_author,
  };
}

const rows = [
  createData(
    "ECOKA-BLOG-01",
    "ECOKA chia sẻ hành trình chắp cánh thương hiệu Việt trên Amazon tại trường đại học FPT",
    "Ecoka Desc",
    "Online",
    "02/02/2024",
    "Admin"
  ),
  createData(
    "ECOKA-BLOG-02",
    "ECOKA chia sẻ hành trình chắp cánh thương hiệu Việt trên Amazon tại trường đại học FPT",
    "Ecoka Desc",
    "Online",
    "02/02/2024",
    "Admin"
  ),
  createData(
    "ECOKA-BLOG-03",
    "ECOKA chia sẻ hành trình chắp cánh thương hiệu Việt trên Amazon tại trường đại học FPT",
    "Ecoka Desc",
    "Online",
    "02/02/2024",
    "Admin"
  ),
  createData(
    "ECOKA-BLOG-03",
    "ECOKA chia sẻ hành trình chắp cánh thương hiệu Việt trên Amazon tại trường đại học FPT",
    "Ecoka Desc",
    "Online",
    "02/02/2024",
    "Admin"
  ),
  createData(
    "ECOKA-BLOG-03",
    "ECOKA chia sẻ hành trình chắp cánh thương hiệu Việt trên Amazon tại trường đại học FPT",
    "Ecoka Desc",
    "Online",
    "02/02/2024",
    "Admin"
  ),
];

export default function OrderTable() {
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
        <Table sx={{ minWidth: 650 }} aria-label="order">
          <TableHead>
            <TableRow>
              <TableCell>Mã bài viết</TableCell>
              <TableCell align="left">Tên bài viết</TableCell>
              <TableCell align="left">Trạng thái</TableCell>
              <TableCell align="left">Ngày đăng</TableCell>
              <TableCell align="left">Người đăng</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.blog_id}>
                <TableCell align="left">{row.blog_id}</TableCell>
                <TableCell align="left">{row.blog_title}</TableCell>
                <TableCell align="left">
                  <Button variant="contained" color="success">
                    {row.blog_status}
                  </Button>
                </TableCell>
                <TableCell align="left">{row.blog_date}</TableCell>
                <TableCell align="left">
                  <div className="flex justify-start items-center gap-x-2">
                    <Avatar alt="avatar" src="" />
                    <h1>{row.blog_author}</h1>
                  </div>
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
