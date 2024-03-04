import { API } from "@/constant/api";
import { Modal } from "@mui/material";
import React, { useState } from 'react';

function ModalCreateProduct({ openModalProduct, handleCloseProduct }: { openModalProduct: any, handleCloseProduct: any }) {
    const [productId, setProductId] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [thumbnail, setThumbnail] = useState(null);
    const [category, setCategory] = useState('');
    const [uploading, setUploading] = useState(false);

    const uploadFile = async (file: any) => {
        const formData = new FormData();
        formData.append('image', file);
        try {
            const response: any = await fetch(API.UPLOAD_IMAGE, {
                method: 'POST',
                body: formData,
            });
            if (response?.result) {
                const { url } = await response.json();
                return url;
            } else {
                console.error('Failed to upload file:', response.statusText);
                return null;
            }
        } catch (error) {
            console.error('Upload error:', error);
            return null;
        }
    };

    const createProduct = async () => {
        const productData = {
            nameVI: title,
            nameEN: title,
            nameJP: title,
            descriptionVI: description,
            descriptionEN: description,
            descriptionJP: description,
            price: "0",
            thumbnail_one: "",
            thumbnail_two: "",
            thumbnail_three: "",
            thumbnail_four: "",
            thumbnail_five: "",
            thumbnail_six: "",
            category_id: category
        };

        try {
            const response = await fetch(API.CREATE_PRODUCT, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(productData),
            });

            if (response.ok) {
                console.log('Product created successfully');
                handleCloseProduct();
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
            await createProduct();
        } else {
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
                <div className="relative top-20 mx-auto p-5 border w-1/2 shadow-lg rounded-md bg-white">
                    <div className="flex justify-between items-center pb-3">
                        <p className="text-2xl font-bold">Create Product</p>
                        <div className="modal-close cursor-pointer z-50" onClick={handleCloseProduct}>
                            <svg className="fill-current text-black" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18"><polygon points="18 1.41 16.59 0 9 7.59 1.41 0 0 1.41 7.59 9 0 16.59 1.41 18 9 10.41 16.59 18 18 16.59 10.41 9 18 1.41" /></svg>
                        </div>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" >Product ID</label>
                            <input onChange={(e) => setProductId(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="product-id" type="text" placeholder="Enter Product ID" />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" >Title</label>
                            <input onChange={(e) => setTitle(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="product-title" type="text" placeholder="Enter Title" />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" >Description</label>
                            <textarea onChange={(e) => setDescription(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="product-desc" placeholder="Enter Description"></textarea>
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" >Thumbnail</label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="product-thumbnail" type="file" onChange={handleThumbnailChange} />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" >Category</label>
                            <select onChange={(e) => setCategory(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="product-category">
                                <option value="1">TRANG TRÍ NHÀ CỬA</option>
                                <option value="2">NHÀ BẾP</option>
                                <option value="3">NỘI THẤT</option>
                                <option value="4">THỜI TRANG</option>
                            </select>
                        </div>
                        <div className="flex items-center justify-between">
                            <button type="submit" disabled={uploading} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" >
                                Create Product
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </Modal>
    );
}

export default ModalCreateProduct;
