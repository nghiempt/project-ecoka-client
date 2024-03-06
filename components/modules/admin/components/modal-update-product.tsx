import { API } from "@/constant/api";
import DarkModeContext from "@/context/dark-mode-context";
import { Alert, Modal } from "@mui/material";
import React, { useContext, useEffect, useState } from 'react';

function ModalUpdateProduct({ openModalProduct, handleCloseProduct }: { openModalProduct: any, handleCloseProduct: any }) {

    const darkModeContext: any = useContext(DarkModeContext);

    const [productId, setProductId] = useState(darkModeContext?.isDarkMode?.product_id);
    const [title, setTitle] = useState(darkModeContext?.isDarkMode?.product_name);
    const [description, setDescription] = useState(darkModeContext?.isDarkMode?.product_price);
    const [titleEn, setTitleEn] = useState('none');
    const [descriptionEn, setDescriptionEn] = useState('none');
    const [thumbnail, setThumbnail] = useState(null);
    const [category, setCategory] = useState(darkModeContext?.isDarkMode?.product_status);
    const [uploading, setUploading] = useState(false);

    const uploadFile = async (file: any) => {
        const formData = new FormData();
        formData.append('image', file);
        try {
            const response: any = await fetch(API.UPLOAD_IMAGE, {
                method: 'POST',
                body: formData,
            });
            if (response?.ok) {
                const { data } = await response.json();
                return data;
            } else {
                console.error('Failed to upload file:', response.statusText);
                return null;
            }
        } catch (error) {
            console.error('Upload error:', error);
            return null;
        }
    };

    const createProduct = async (thumbnailUrl: any) => {
        const productData = {
            id: productId,
            nameVI: title,
            nameEN: titleEn,
            nameJP: title,
            descriptionVI: description,
            descriptionEN: descriptionEn,
            descriptionJP: description,
            price: "0",
            thumbnail_one: darkModeContext?.isDarkMode?.product_thumbnail,
            thumbnail_two: "",
            thumbnail_three: "",
            thumbnail_four: "",
            thumbnail_five: "",
            thumbnail_six: "",
            category_id: category
        };
        try {
            const response = await fetch(`${API.UPDATE_PRODUCT}?id=${darkModeContext?.isDarkMode?.product_id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(productData),
            });
            if (response.ok) {
                console.log('Product created successfully');
                handleCloseProduct();
                window.location.reload();
            } else {
                console.error('Failed to create product:', response.statusText);
            }
        } catch (error) {
            console.error('Creation error:', error);
        }
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        setUploading(true);
        if (thumbnail) {
            const thumbnailUrl = await uploadFile(thumbnail);
            await createProduct(thumbnailUrl);
        } else {
            alert('Vui lòng tải hình ảnh lên')
            console.error('Thumbnail is required');
        }
        setUploading(false);
    };

    const handleThumbnailChange = async (e: any) => {
        setThumbnail(e.target.files[0]);
    };

    return (
        <Modal
            open={openModalProduct}
            onClose={handleCloseProduct}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full" id="my-modal">
                {
                    uploading ? <Alert severity="success">Đang tạo sản phẩm ...</Alert> : null
                }
                <div className="relative top-20 mx-auto p-5 border w-1/2 shadow-lg rounded-md bg-white">
                    <div className="flex justify-between items-center pb-3">
                        <p className="text-2xl font-bold">Cập Nhật Sản Phẩm</p>
                        <div className="modal-close cursor-pointer z-50" onClick={handleCloseProduct}>
                            <svg className="fill-current text-black" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18"><polygon points="18 1.41 16.59 0 9 7.59 1.41 0 0 1.41 7.59 9 0 16.59 1.41 18 9 10.41 16.59 18 18 16.59 10.41 9 18 1.41" /></svg>
                        </div>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" >Mã Sản Phẩm</label>
                            <input value={productId} onChange={(e) => setProductId(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="product-id" type="text" placeholder="Enter Product ID" />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" >Tên Sản Phẩm (tiếng Việt)</label>
                            <input value={title} onChange={(e) => setTitle(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="product-title" type="text" placeholder="Enter Title" />
                        </div>
                        {/* <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" >Tên Sản Phẩm (tiếng Anh)</label>
                            <input onChange={(e) => setTitleEn(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="product-title" type="text" placeholder="Enter Title" />
                        </div> */}
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" >Mô Tả (tiếng Việt)</label>
                            <textarea value={description} onChange={(e) => setDescription(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="product-desc" placeholder="Enter Description"></textarea>
                        </div>
                        {/* <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" >Mô Tả (tiếng Anh)</label>
                            <textarea onChange={(e) => setDescriptionEn(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="product-desc" placeholder="Enter Description"></textarea>
                        </div> */}
                        {/* <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" >Hình Ảnh Chính</label>
                            <div className="flex">
                                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="product-thumbnail" type="file" onChange={handleThumbnailChange} />
                            </div>
                        </div> */}
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" >Danh Mục</label>
                            <select onChange={(e) => setCategory(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="product-category">
                                <option value="1">TRANG TRÍ NHÀ CỬA</option>
                                <option value="2">NHÀ BẾP</option>
                                <option value="3">NỘI THẤT</option>
                                <option value="4">THỜI TRANG</option>
                            </select>
                        </div>
                        <div className="flex items-center justify-between">
                            <button type="submit" disabled={uploading} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" >
                                Cập Nhật
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </Modal>
    );
}

export default ModalUpdateProduct;
