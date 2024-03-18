import React, { useEffect, useState } from 'react';
import { Alert, Modal } from "@mui/material";
import axios from 'axios';

function ModalCreateProduct({ openModal, handleClose }: { openModal: any, handleClose: any }) {

    const [showToastLoading, setShowToastLoading] = useState(false);
    const [showToastSuccess, setShowToastSuccess] = useState(false);
    const [showToastError, setShowToastError] = useState(false);
    const [showToastValidate, setShowToastValidate] = useState(false);

    const [images, setImages] = useState<any>([]);
    const [product, setProduct] = useState<any>({
        product_id: '',
        product_name_vi: '',
        product_name_en: '',
        product_desc_vi: '',
        product_desc_en: 'none',
        product_category_id: '1',
    });


    const handleInputChange = (e: any) => {
        setProduct({ ...product, [e.target.name]: e.target.value });
    };

    const handleImageChange = (e: any) => {
        setImages([...e.target.files]);
    };

    const validation = () => {
        if (product?.product_id === '') {
            setShowToastValidate(true)
            return false;
        } else {
            setShowToastValidate(false)
        }
        if (product?.product_name_vi === '') {
            setShowToastValidate(true)
            return false;
        } else {
            setShowToastValidate(false)
        }
        if (product?.product_name_en === '') {
            setShowToastValidate(true)
            return false;
        } else {
            setShowToastValidate(false)
        }
        if (product?.product_desc_vi === '') {
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
        setShowToastLoading(true)
        const formData = new FormData();
        Object.keys(product).forEach(key => formData.append(key, product[key]));

        for (let i = 0; i < 6; i++) {
            if (images[i]) {
                formData.append('product_images', images[i]);
            } else {
                formData.append('product_images', 'none');
            }
        }
        try {
            await axios.post('https://ecokav2.devilop.me/api/products/create-product', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            setShowToastLoading(false)
            setShowToastSuccess(true)
            setTimeout(() => {
                window.location.reload()
            }, 500)
        } catch (error) {
            setShowToastLoading(false)
            setShowToastError(true)
        }
    };

    return (
        <Modal
            open={openModal}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <div className="relative top-20 mx-auto p-5 border w-1/2 shadow-lg rounded-md bg-white">

                {
                    showToastLoading && (
                        <Alert className='mb-4' severity="info">Đang tạo sản phẩm</Alert>
                    )
                }

                {
                    showToastSuccess && (
                        <Alert className='mb-4' severity="success">Tạo sản phẩm thành công</Alert>
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
                    <p className="text-2xl font-bold">Thêm Sản Phẩm</p>
                    <div className="modal-close cursor-pointer z-50" onClick={handleClose}>
                        <svg className="fill-current text-black" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18"><polygon points="18 1.41 16.59 0 9 7.59 1.41 0 0 1.41 7.59 9 0 16.59 1.41 18 9 10.41 16.59 18 18 16.59 10.41 9 18 1.41" /></svg>
                    </div>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" >Mã Sản Phẩm</label>
                        <input onChange={handleInputChange} name="product_id" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="product-id" type="text" placeholder="ECOKA-PRODUCT-01" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" >Tên Sản Phẩm (tiếng Việt)</label>
                        <input onChange={handleInputChange} name="product_name_vi" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="product-title" type="text" placeholder="MACRAME HOME" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" >Tên Sản Phẩm (tiếng Anh)</label>
                        <input onChange={handleInputChange} name="product_name_en" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="product-title" type="text" placeholder="MACRAME HOME" />
                    </div>
                    <div className="mb-2">
                        <label className="block text-gray-700 text-sm font-bold mb-2" >Mô Tả (tiếng Việt)</label>
                        <textarea onChange={handleInputChange} name="product_desc_vi" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="product-desc" placeholder="BEST PRODUCT"></textarea>
                    </div>
                    <div className="mb-2">
                        <label className="block text-gray-700 text-sm font-bold mb-2" >Mô Tả (tiếng Anh)</label>
                        <textarea onChange={handleInputChange} name="product_desc_en" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="product-desc" placeholder="BEST PRODUCT"></textarea>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" >Hình Ảnh (Tối đa 6 hình ảnh)</label>
                        <input type="file" name="product_images" accept="image/*" multiple onChange={handleImageChange} />
                    </div>

                    {images.length > 0 && (
                        <div className='flex gap-x-2'>
                            {images.map((file: any, index: any) => (
                                <img key={index} src={URL.createObjectURL(file)} alt="Preview" style={{ width: '100px', height: '100px' }} />
                            ))}
                        </div>
                    )}

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" >Danh Mục</label>
                        <select className='!bg-gray-200 px-2 py-1 rounded-lg' name='product_category_id' onChange={handleInputChange}>
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
                            Tạo Sản Phẩm
                        </button>
                    </div>
                </form>
            </div>
        </Modal>
    );
}

export default ModalCreateProduct;
