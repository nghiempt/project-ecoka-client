"use client";

import { Avatar, Divider, Modal } from "@mui/material";
import React, { useEffect } from "react";
import ProductTable from "./components/product-table";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Person4Icon from "@mui/icons-material/Person4";
import CategoryIcon from "@mui/icons-material/Category";
import AddIcon from "@mui/icons-material/Add";
import SearchIcon from "@mui/icons-material/Search";
import OrderTable from "./components/order-table";
import SignInAdmin from "./components/sign-in";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import ModalCreateProduct from "./components/modal-create-product";
import { useRouter, useSearchParams } from 'next/navigation'

export default function AdminDashboard() {
  const [isSignIn, setIsSignIn] = React.useState(true);
  const [tab, setTab] = React.useState(0);
  const [open, setOpen] = React.useState(false);

  const router = useRouter()

  const [openModalProduct, setOpenModalProduct] = React.useState(false);
  const [openModalBlog, setOpenModalBlog] = React.useState(false);

  const handleOpenModalProduct = () => setOpenModalProduct(true);
  const handleCloseProduct = () => {
    setOpenModalProduct(false)
  };

  const handleOpenModalBlog = () => setOpenModalBlog(true);
  const handleCloseBlog = () => setOpenModalBlog(false);

  const handleOpenSnackbar = () => {
    setOpen(true);
  };

  const handleCloseSnackbar = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const handleTabChange = (newValue: number) => {
    setTab(newValue);
  };

  const handleSignIn = (username: string, password: string) => {
    if (username === "admin" && password === "admin") {
      handleOpenSnackbar();
      setTimeout(() => {
        setIsSignIn(true);
      }, 1000);
    }
  };

  useEffect(() => { }, [tab, isSignIn]);

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <Snackbar
        open={open}
        autoHideDuration={1000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity="info"
          variant="filled"
          sx={{ width: "100%" }}
        >
          Đang kiểm tra thông tin đăng nhập ...
        </Alert>
      </Snackbar>

      <ModalCreateProduct openModalProduct={openModalProduct} handleCloseProduct={handleCloseProduct} />

      <Modal
        open={openModalBlog}
        onClose={handleCloseBlog}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full" id="create-blog-modal">
          <div className="relative top-20 mx-auto p-5 border w-3/4 shadow-lg rounded-md bg-white">
            <div className="flex justify-between items-center pb-3">
              <p className="text-2xl font-bold">Create Blog</p>
              <div className="modal-close cursor-pointer z-50" onClick={handleCloseBlog}>
                <svg className="fill-current text-black" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18"><polygon points="18 1.41 16.59 0 9 7.59 1.41 0 0 1.41 7.59 9 0 16.59 1.41 18 9 10.41 16.59 18 18 16.59 10.41 9 18 1.41" /></svg>
              </div>
            </div>
            <form>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">Blog Title</label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="blog-title" type="text" placeholder="Enter Blog Title" />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">Blog Description</label>
                <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="blog-desc" placeholder="Enter Blog Description"></textarea>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">Blog Thumbnail</label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="blog-thumbnail" type="file" />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">Blog Author</label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="blog-author" type="text" placeholder="Enter Author Name" />
              </div>
              {[...Array(3)].map((_, index) => (
                <div key={index}>
                  <p className="text-xl font-bold mb-4">Section {index + 1}</p>
                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Section Title</label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id={`section-title-${index}`} type="text" placeholder={`Enter Section ${index + 1} Title`} />
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Section Description</label>
                    <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id={`section-desc-${index}`} placeholder={`Enter Section ${index + 1} Description`}></textarea>
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Section Thumbnail</label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id={`section-thumbnail-${index}`} type="file" />
                  </div>
                </div>
              ))}
              <div className="flex items-center justify-between">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                  Create Blog
                </button>
              </div>
            </form>
          </div>
        </div>
      </Modal>

      {isSignIn ? (
        <div className="w-1/6 h-screen flex flex-col pt-20 border-r border-gray-300">
          <div className="flex justify-center items-center">
            <h1 className="text-[20px] font-medium">ECOKA ADMIN</h1>
          </div>
          <div className="h-[34px]"></div>
          <Divider />
          <div className="flex flex-col justify-center items-start pl-10 pt-10 gap-y-4">
            <div
              className="flex justify-center items-center gap-x-2 cursor-pointer"
              onClick={() => handleTabChange(0)}
            >
              <CategoryIcon
                sx={{ color: `${tab === 0 ? "rgb(var(--primary-rgb))" : ""}` }}
              />
              <h1
                className={`text-[16px] ${tab === 0 ? "font-bold text-[rgb(var(--primary-rgb))]" : ""
                  }`}
              >
                Quản Lý Sản Phẩm
              </h1>
            </div>
            {/* <div
              className="flex justify-center items-center gap-x-2 cursor-pointer"
              onClick={() => handleTabChange(1)}
            >
              <ShoppingCartIcon
                sx={{ color: `${tab === 1 ? "rgb(var(--primary-rgb))" : ""}` }}
              />
              <h1
                className={`text-[16px] ${tab === 1 ? "font-bold text-[rgb(var(--primary-rgb))]" : ""
                  }`}
              >
                Quản Lý Bài Viết
              </h1>
            </div> */}
          </div>
        </div>
      ) : (
        <SignInAdmin handleSignIn={handleSignIn} />
      )}

      {isSignIn ? (
        <div className="w-5/6 h-screen flex flex-col">
          <div className="py-6 flex justify-end items-center gap-x-6 pr-10 border-b border-gray-300">
            <NotificationsIcon fontSize="large" />
            <Person4Icon fontSize="large" />
            <Avatar alt="avatar" src="" sx={{ width: 32, height: 32 }} />
          </div>
          <div className="">
            {tab === 0 ? (
              <div className="p-10">
                <h1 className="text-[24px] font-semibold">Quản Lý Sản Phẩm</h1>
                <div className="flex items-center justify-between mt-10 mb-6">
                  <div className="flex items-center">
                    <div className="w-4 h-8 bg-[rgb(var(--tertiary-rgb))] rounded-md mr-5"></div>
                    <h3 className="text-[18px] font-semibold mr-4">Sản Phẩm</h3>
                    <div className="flex items-start flex-col">
                      <div className="bg-[#F4F4F4] flex rounded-lg pl-2 pr-10">
                        <span className="flex items-center pl-1">
                          <SearchIcon />
                        </span>
                        <input
                          type="text"
                          placeholder="Tìm kiếm sản phẩm ..."
                          className="pl-2 py-2 w-full bg-[#F4F4F4] placeholder-gray-400 font-medium text-gray-500 outline-none border-transparent focus:border-transparent focus:ring-0"
                        />
                      </div>
                    </div>
                  </div>
                  <button onClick={handleOpenModalProduct} className="bg-[rgb(var(--quaternary-rgb))] !text-gray-700 text-[13px] py-2 px-4 rounded-lg font-semibold flex items-center justify-center">
                    <AddIcon className="mr-1" /> Thêm sản phẩm
                  </button>
                </div>
                <ProductTable />
              </div>
            ) : (
              <div className="p-10">
                <h1 className="text-[24px] font-semibold">Quản Lý Bài Viết</h1>
                <div className="flex items-center justify-between mt-10 mb-6">
                  <div className="flex items-center">
                    <div className="w-4 h-8 bg-[rgb(var(--tertiary-rgb))] rounded-md mr-5"></div>
                    <h3 className="text-[18px] font-semibold mr-4">Bài Viết</h3>
                    <div className="flex items-start flex-col">
                      <div className="bg-[#F4F4F4] flex rounded-lg pl-2 pr-10">
                        <span className="flex items-center pl-1">
                          <SearchIcon />
                        </span>
                        <input
                          type="text"
                          placeholder="Tìm kiếm bài viết ..."
                          className="pl-2 py-2 w-full bg-[#F4F4F4] placeholder-gray-400 font-medium text-gray-500 outline-none border-transparent focus:border-transparent focus:ring-0"
                        />
                      </div>
                    </div>
                  </div>
                  <button onClick={handleOpenModalBlog} className="bg-[rgb(var(--quaternary-rgb))] !text-gray-700 text-[13px] py-2 px-4 rounded-lg font-semibold flex items-center justify-center">
                    <AddIcon className="mr-1" /> Thêm bài viết
                  </button>
                </div>
                <OrderTable />
              </div>
            )}
          </div>
        </div>
      ) : null}
    </div>
  );
}
