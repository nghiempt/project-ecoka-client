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
import ModalUpdateProduct from "./modal-update-product";
import { useRouter } from "next/navigation";
import DarkModeContext from "@/context/dark-mode-context";

function createData(
  product_id: string,
  product_name: string,
  product_thumbnail: string,
  product_price: string,
  product_status: string,
) {
  return {
    product_id,
    product_name,
    product_thumbnail,
    product_price,
    product_status,
  };
}

export default function ProductTable() {
  const [rows, setRows] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const router = useRouter()

  const darkModeContext = React.useContext(DarkModeContext);

  const [currentProduct, setCurrentProduct] = React.useState(null);

  const [openModalProduct, setOpenModalProduct] = React.useState(false);
  const [openModalBlog, setOpenModalBlog] = React.useState(false);

  const handleOpenModalProduct = () => setOpenModalProduct(true);
  const handleCloseProduct = () => {
    setOpenModalProduct(false)
  };

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
    const fetchRows = await FetchData.GET_ALL_PRODUCTS_REAL();
    fetchRows?.data?.forEach((item: any) => {
      tmp = [...tmp, createData(
        item?.product_id?.toString(),
        item?.product_nameVI?.toString(),
        item?.product_thumbnail_one?.toString(),
        item?.product_descriptionVI?.toString(),
        item?.category?.category_name?.toString())]
    })
    setRows(tmp)
  }

  const init = async () => {
    loadData()
  }

  React.useEffect(() => {
    init()
  }, [])

  const handleOpen = (product: any) => {
    // Create a new promise
    return new Promise((resolve, reject) => {
      // Attempt to set the current product
      try {
        setCurrentProduct(product);
        darkModeContext.setDarkMode(product)
        console.log(darkModeContext.isDarkMode);
        
        // If successful, resolve the promise
        resolve("done");
      } catch (error) {
        // If there's an error, reject the promise
        reject(error);
      }
    }).then((status) => {
      // Once the promise is resolved, open the modal
      if (status === "done") {
        console.log("ok");
        handleOpenModalProduct();
      }
    }).catch((error) => {
      // Handle any errors here, such as logging or displaying an error message
      console.error("Failed to set product:", error);
    });
  };

  const renderColor = (catId: any) => {
    switch (catId) {
      case 'MACRAME DECORATION':
        return 'success'
      case 'HYACINTH DECORATION':
        return 'error'
      case 'MACRAME FOR KITCHEN':
        return 'inherit'
      case 'HYACINTH FOR KITCHEN':
        return 'primary'
      case 'FURNITURE':
        return 'secondary'
      case 'MACRAME FASHION':
        return 'info'
      case 'HYACINTH FASHION':
        return 'warning'
      default:
        return 'error'
    }
  }


  React.useEffect(() => {
  }, [rows, currentProduct])

  return (
    <Paper>
      <TableContainer>
        <ModalUpdateProduct openModalProduct={openModalProduct} handleCloseProduct={handleCloseProduct} />
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
            {rows?.map((row: any) => (
              <TableRow key={row.product_id}>
                <TableCell align="left">
                  {row.product_id}

                </TableCell>
                <TableCell align="left">
                  <div className="flex justify-start items-center gap-x-2">
                    <img className="w-[50px] h-[50px] object-cover rounded-md" src={row.product_thumbnail || ""} alt="Product Image" />
                    {row.product_name}
                  </div>
                </TableCell>
                <TableCell align="left">{limitString(row.product_price, 70)}</TableCell>
                <TableCell align="left">
                  <Button variant="contained" color={renderColor(row.product_status) || 'error'}>
                    {row.product_status}
                  </Button>
                </TableCell>
                <TableCell align="left">
                  <div onClick={() => {
                    handleOpen(row)
                  }} className="cursor-pointer">
                    <BorderColorIcon />
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
