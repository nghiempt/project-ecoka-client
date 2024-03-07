import React, { useEffect, useState } from 'react';
import { Alert, Modal } from "@mui/material";
import axios from 'axios';

function ModalCreateProduct({ openModal, handleClose, productSelected }: { openModal: any, handleClose: any, productSelected: any }) {

    const [showToastLoading, setShowToastLoading] = useState(false);
    const [showToastSuccess, setShowToastSuccess] = useState(false);
    const [showToastError, setShowToastError] = useState(false);
    const [showToastValidate, setShowToastValidate] = useState(false);

    const [productNameVi, setProductNameVi] = useState('');
    const [productNameEn, setProductNameEn] = useState('');
    const [productDes, setProductDes] = useState('');
    const [productNameCatId, setProductNameCatId] = useState('');

    const validation = () => {
        if (productNameVi === '') {
            setShowToastValidate(true)
            return false;
        } else {
            setShowToastValidate(false)
        }
        if (productNameEn === '') {
            setShowToastValidate(true)
            return false;
        } else {
            setShowToastValidate(false)
        }
        if (productDes === '') {
            setShowToastValidate(true)
            return false;
        } else {
            setShowToastValidate(false)
        }
        return true
    }

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        if (!validation()) {
            return;
        }
        const payload = {
            product_name_vi: productNameVi,
            product_name_en: productNameEn,
            product_desc_vi: productDes,
            product_desc_en: productSelected?.product_desc_en,
            product_category_id: productNameCatId,
            product_image_one: productSelected?.product_image_one,
            product_image_two: productSelected?.product_image_two,
            product_image_three: productSelected?.product_image_three,
            product_image_four: productSelected?.product_image_four,
            product_image_five: productSelected?.product_image_five,
            product_image_six: productSelected?.product_image_six,
        }
        setShowToastLoading(true)
        try {
            const response = await fetch(`https://ecokav2.devilop.me/api/products/update-product/${productSelected?.product_id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),
            });
            if (response.ok) {
                setShowToastLoading(false)
                setShowToastSuccess(true)
                setTimeout(() => {
                    window.location.reload()
                }, 500)
            } else {
                setShowToastLoading(false)
                setShowToastError(true)
            }
        } catch (error) {
            setShowToastLoading(false)
            setShowToastError(true)
        }
    };

    useEffect(() => {
        setProductNameVi(productSelected?.product_name_vi)
        setProductNameEn(productSelected?.product_name_en)
        setProductDes(productSelected?.product_desc_vi)
        setProductNameCatId(productSelected?.product_category_id.toString())
    }, [])

    useEffect(() => { }, [productNameVi, productNameEn, productDes, productNameCatId])

    return (
        <>
            {
                openModal && (
                    <div
                        className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full"
                    >
                        <div className="relative top-20 mx-auto p-5 border w-1/2 shadow-lg rounded-md bg-white">
                            {
                                showToastLoading && (
                                    <Alert className='mb-4' severity="info">Đang cập nhật sản phẩm</Alert>
                                )
                            }

                            {
                                showToastSuccess && (
                                    <Alert className='mb-4' severity="success">Cập nhật sản phẩm thành công</Alert>
                                )
                            }

                            {
                                showToastError && (
                                    <Alert className='mb-4' severity="error">Thất bại</Alert>
                                )
                            }

                            {
                                showToastValidate && (
                                    <Alert className='mb-4' severity="error">Bạn chưa nhập đủ thông tin</Alert>
                                )
                            }

                            <div className="flex justify-between items-center pb-3">
                                <p className="text-2xl font-bold">Cập Nhật Sản Phẩm</p>
                                <div className="modal-close cursor-pointer z-50" onClick={handleClose}>
                                    <svg className="fill-current text-black" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18"><polygon points="18 1.41 16.59 0 9 7.59 1.41 0 0 1.41 7.59 9 0 16.59 1.41 18 9 10.41 16.59 18 18 16.59 10.41 9 18 1.41" /></svg>
                                </div>
                            </div>
                            <form onSubmit={handleSubmit}>
                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" >Tên Sản Phẩm (tiếng Việt)</label>
                                    <input onChange={(e) => setProductNameVi(e.target.value)} value={productNameVi} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="product-title" type="text" />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" >Tên Sản Phẩm (tiếng Anh)</label>
                                    <input onChange={(e) => setProductNameEn(e.target.value)} value={productNameEn} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="product-title" type="text" />
                                </div>
                                <div className="mb-2">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" >Mô Tả</label>
                                    <textarea onChange={(e) => setProductDes(e.target.value)} value={productDes} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="product-desc"></textarea>
                                </div>
                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" >Danh Mục</label>
                                    <select defaultValue={productSelected?.product_category_id.toString()} onChange={(e) => setProductNameCatId(e.target.value)}>
                                        <option value='1'>MACRAME DECORATION</option>
                                        <option value='2'>HYACINTH DECORATION</option>
                                        <option value='3'>MACRAME FOR KITCHEN</option>
                                        <option value='4'>HYACINTH FOR KITCHEN</option>
                                        <option value='5'>FURNITURE</option>
                                        <option value='6'>MACRAME FASHION</option>
                                        <option value='7'>HYACINTH FASHION</option>
                                    </select>
                                </div>
                                <div className="flex items-center justify-between mt-6">
                                    <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" >
                                        Cập Nhật Sản Phẩm
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                )
            }
        </>
    );
}

export default ModalCreateProduct;
