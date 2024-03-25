"use client";

import { Avatar, Button, Divider, Modal } from "@mui/material";
import React, { useEffect } from "react";
import NotificationsIcon from "@mui/icons-material/Notifications";
import PostAddIcon from '@mui/icons-material/PostAdd';
import Person4Icon from "@mui/icons-material/Person4";
import StorefrontIcon from '@mui/icons-material/Storefront';
import BusinessIcon from '@mui/icons-material/Business';
import AddIcon from "@mui/icons-material/Add";
import SearchIcon from "@mui/icons-material/Search";
import ProductTable from "./components/product-table";
import ModalCreateProduct from "./modals/modal-create-product";
import ModalUpdateProduct from "./modals/modal-update-product";

export default function AdminDashboard() {

  const [openModalCreateProduct, setOpenModalCreateProduct] = React.useState(false);
  const [openModalUpdateProduct, setOpenModalUpdateProduct] = React.useState(false);
  const [openModalDeleteProduct, setOpenModalDeleteProduct] = React.useState(false);

  const [currentTab, setCurrentTab] = React.useState<any>(1);
  const [currentProduct, setCurrentProduct] = React.useState<any>(null);

  const handleOpenModalCreateProduct = () => {
    setOpenModalCreateProduct(true)
  };

  const handleCloseCreateProduct = () => {
    setOpenModalCreateProduct(false)
  };

  const handleOpenModalUpdateProduct = () => {
    setOpenModalUpdateProduct(true)
  };

  const handleCloseUpdateProduct = () => {
    setOpenModalUpdateProduct(false)
  };

  const handleOpenModalDeleteProduct = () => {
    setOpenModalDeleteProduct(true)
  };

  const handleCloseDeleteProduct = () => {
    setOpenModalDeleteProduct(false)
  };

  const changeProductAndOpenModal = (productSelected: any, status: any) => {
    setCurrentProduct(productSelected)
    if (status === 'delete') {
      handleOpenModalDeleteProduct()
    } else {
      handleOpenModalUpdateProduct()
    }
  }

  const handleDeleteProduct = async (productId: any) => {
    try {
      const response = await fetch(`https://ecokav2.devilop.me/api/products/delete-product/${productId}`, {
        method: 'DELETE'
      });
      window.location.reload()
    } catch (err) {
      alert('Thất bại')
      handleCloseDeleteProduct()
      return false;
    }
  }

  const init = () => { }

  useEffect(() => {
    init()
  }, [])

  React.useEffect(() => {
  }, [currentProduct, currentTab])

  return (
    <div className="w-full h-screen flex justify-center items-center">

      <div className="w-1/6 h-screen flex flex-col pt-20 border-r border-gray-300">
        <div className="flex justify-center items-center">
          <h1 className="text-[20px] font-medium">ECOKA ADMIN</h1>
        </div>
        <div className="h-[34px]"></div>
        <Divider />
        <div className="flex flex-col justify-center items-start pl-6 pt-10 gap-y-6">
          <div onClick={() => setCurrentTab(1)} className={`flex justify-center items-center gap-x-2 cursor-pointer py-1 px-2 ${currentTab === 1 ? 'bg-gray-100 rounded-lg' : ''}`}>
            <StorefrontIcon sx={{ color: `rgb(var(--primary-rgb))` }} />
            <h1 className={`text-[16px] ${currentTab === 1 ? 'font-bold' : 'font-medium'} text-[rgb(var(--primary-rgb))]`}>
              Quản Lý Sản Phẩm
            </h1>
          </div>
          <div onClick={() => setCurrentTab(2)} className={`flex justify-center items-center gap-x-2 cursor-pointer py-1 px-2 ${currentTab === 2 ? 'bg-gray-100 rounded-lg' : ''}`}>
            <PostAddIcon sx={{ color: `rgb(var(--primary-rgb))` }} />
            <h1 className={`text-[16px] ${currentTab === 2 ? 'font-bold' : 'font-medium'} text-[rgb(var(--primary-rgb))]`}>
              Quản Lý Bài Viết
            </h1>
          </div>
          <div onClick={() => setCurrentTab(3)} className={`flex justify-center items-center gap-x-2 cursor-pointer py-1 px-2 ${currentTab === 3 ? 'bg-gray-100 rounded-lg' : ''}`}>
            <BusinessIcon sx={{ color: `rgb(var(--primary-rgb))` }} />
            <h1 className={`text-[16px] ${currentTab === 3 ? 'font-bold' : 'font-medium'} text-[rgb(var(--primary-rgb))]`}>
              Thông Tin Công Ty
            </h1>
          </div>
        </div>
      </div>

      <div className="w-5/6 h-screen flex flex-col">
        <div className="py-6 flex justify-end items-center gap-x-6 pr-10 border-b border-gray-300">
          <NotificationsIcon fontSize="large" />
          <Person4Icon fontSize="large" />
          <Avatar alt="avatar" src="" sx={{ width: 32, height: 32 }} />
        </div>
        <div className="">
          <div className="p-10">
            <h1 className="text-[24px] font-semibold">Quản Lý Sản Phẩm</h1>
            <div className="flex items-center justify-between mt-10 mb-6">
              <div className="flex items-center">
                <div className="w-4 h-8 bg-[rgb(var(--tertiary-rgb))] rounded-md mr-5"></div>
                <h3 className="text-[18px] font-semibold mr-4">Sản Phẩm</h3>
                <div className="flex items-start flex-col">
                  <div className="bg-[#F4F4F4] flex rounded-lg pl-2 pr-10">
                    <span className="flex items-center pl-1"><SearchIcon /></span>
                    <input
                      type="text"
                      placeholder="Tìm kiếm sản phẩm ..."
                      className="pl-2 py-2 w-full bg-[#F4F4F4] placeholder-gray-400 font-medium text-gray-500 outline-none border-transparent focus:border-transparent focus:ring-0"
                    />
                  </div>
                </div>
              </div>
              <button onClick={handleOpenModalCreateProduct} className="bg-[rgb(var(--quaternary-rgb))] !text-gray-700 text-[13px] py-2 px-4 rounded-lg font-semibold flex items-center justify-center">
                <AddIcon className="mr-1" /> Thêm sản phẩm
              </button>
            </div>
            <ProductTable changeProductAndOpenModal={changeProductAndOpenModal} />
          </div>
        </div>
      </div>

      <ModalCreateProduct openModal={openModalCreateProduct} handleClose={handleCloseCreateProduct} />

      {
        openModalUpdateProduct && (
          <ModalUpdateProduct openModal={openModalUpdateProduct} handleClose={handleCloseUpdateProduct} productSelected={currentProduct} />
        )
      }

      {
        openModalDeleteProduct && (
          <div
            className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full"
            onClick={handleCloseDeleteProduct}
          >
            <div
              className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-bold">Xoá Sản Phẩm</h3>
                <button
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
                  onClick={handleCloseDeleteProduct}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                </button>
              </div>
              <div className="mt-4 flex flex-col justify-center items-center gap-2">
                <h1 className="text-[16px]">Bạn có chắc chắn muốn xoá sản phẩm ?</h1>
                <h1 className="text-[18px] font-bold">{currentProduct?.product_name_vi}</h1>
              </div>
              <div className="flex justify-center items-center gap-4 mt-6">
                <Button variant="contained" color='inherit' onClick={handleCloseDeleteProduct}>
                  Không
                </Button>
                <Button variant="contained" color='error' onClick={() => handleDeleteProduct(currentProduct?.product_id)}>
                  Xoá
                </Button>
              </div>
            </div>
          </div>
        )
      }
    </div>
  );
}
