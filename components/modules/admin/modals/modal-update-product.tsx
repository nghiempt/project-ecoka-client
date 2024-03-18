import React, { useEffect, useState } from 'react';
import { Alert, Modal } from "@mui/material";

function ModalCreateProduct({ openModal, handleClose, productSelected }: { openModal: any, handleClose: any, productSelected: any }) {

    const [showToastLoading, setShowToastLoading] = useState(false);
    const [showToastSuccess, setShowToastSuccess] = useState(false);
    const [showToastError, setShowToastError] = useState(false);
    const [showToastValidate, setShowToastValidate] = useState(false);

    const [productNameVi, setProductNameVi] = useState('');
    const [productNameEn, setProductNameEn] = useState('');
    const [productDesVi, setProductDesVi] = useState('');
    const [productDesEn, setProductDesEn] = useState('');
    const [productNameCatId, setProductNameCatId] = useState('');
    const [images, setImages] = useState<any>([]);

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
        if (productDesVi === '') {
            setShowToastValidate(true)
            return false;
        } else {
            setShowToastValidate(false)
        }
        if (productDesEn === '') {
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
            product_desc_vi: productDesVi,
            product_desc_en: productDesEn,
            product_category_id: productNameCatId,
            product_image_one: images[0] === undefined ? '' : images[0],
            product_image_two: images[1] === undefined ? '' : images[1],
            product_image_three: images[2] === undefined ? '' : images[2],
            product_image_four: images[3] === undefined ? '' : images[3],
            product_image_five: images[4] === undefined ? '' : images[4],
            product_image_six: images[5] === undefined ? '' : images[5],
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

    const handleRemoveImage = (index: any) => {
        setImages(images.map((item: any, i: any) => i === index ? '' : item))
    }

    const renderImage = (originUrl: any) => {
        if (originUrl === null || originUrl === undefined || originUrl === "") {
            return "https://cdn-icons-png.flaticon.com/128/3342/3342137.png"
        }
        const filename = originUrl.split('/').pop();
        return 'https://ecokav2.devilop.me/api/products/images/' + filename;
    }

    const handleUploadSingleFile = async (e: any, index: any) => {
        const file = e.target.files[0];
        if (!file) {
            alert('Please select an image file.');
            return;
        }
        const formData = new FormData();
        formData.append('image', file);
        try {
            const response = await fetch('https://ecokav2.devilop.me/api/products/image/upload', {
                method: 'POST',
                body: formData
            });

            if (!response.ok) {
                throw new Error('Failed to upload image');
            }

            const data = await response.json();
            setImages(images.map((item: any, i: any) => i === index ? data.imageUrl : item))
        } catch (error) {
            console.error('Error:', error);
            alert('Failed to upload image. Please try again.');
        }
    }

    useEffect(() => {
        setProductNameVi(productSelected?.product_name_vi)
        setProductNameEn(productSelected?.product_name_en)
        setProductDesVi(productSelected?.product_desc_vi)
        setProductDesEn(productSelected?.product_desc_en)
        setProductNameCatId(productSelected?.product_category_id.toString())
        setImages([
            productSelected?.product_image_one === null ? '' : productSelected?.product_image_one,
            productSelected?.product_image_two === null ? '' : productSelected?.product_image_two,
            productSelected?.product_image_three === null ? '' : productSelected?.product_image_three,
            productSelected?.product_image_four === null ? '' : productSelected?.product_image_four,
            productSelected?.product_image_five === null ? '' : productSelected?.product_image_five,
            productSelected?.product_image_six === null ? '' : productSelected?.product_image_six,
        ])
    }, [])

    useEffect(() => { }, [productNameVi, productNameEn, productDesVi, productDesEn, productNameCatId, images])

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
                            <form onSubmit={handleSubmit} className='w-full'>
                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" >Tên Sản Phẩm (tiếng Việt)</label>
                                    <input onChange={(e) => setProductNameVi(e.target.value)} value={productNameVi} className="shadow appearance-none border rounded w-full py-2 pl-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="product-title" type="text" />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" >Tên Sản Phẩm (tiếng Anh)</label>
                                    <input onChange={(e) => setProductNameEn(e.target.value)} value={productNameEn} className="shadow appearance-none border rounded w-full py-2 pl-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="product-title" type="text" />
                                </div>
                                <div className="mb-2">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" >Mô Tả (tiếng Việt)</label>
                                    <textarea onChange={(e) => setProductDesVi(e.target.value)} value={productDesVi} className="shadow appearance-none border rounded w-full py-2 pl-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="product-desc"></textarea>
                                </div>
                                <div className="mb-2">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" >Mô Tả (tiếng Anh)</label>
                                    <textarea onChange={(e) => setProductDesEn(e.target.value)} value={productDesEn} className="shadow appearance-none border rounded w-full py-2 pl-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="product-desc"></textarea>
                                </div>

                                <label className="block text-gray-700 text-sm font-bold mb-4" >Hình Ảnh</label>

                                {images.length > 0 && (
                                    <div className='flex gap-x-2'>
                                        {images.map((file: any, index: any) => (
                                            file === '' ?
                                                <div className='bg-gray-100 cursor-pointer rounded-lg flex justify-center items-center'>
                                                    <input className='w-[96px] cursor-pointer' type="file" name="image" accept="image/*" onChange={(e: any) => handleUploadSingleFile(e, index)} />
                                                </div>
                                                :
                                                <div className='flex flex-col justify-center items-center'>
                                                    <img key={index} src={renderImage(file)} alt="Preview" style={{ width: '100px', height: '100px' }} />
                                                    <div onClick={() => handleRemoveImage(index)} className='bg-red-500 mt-2 text-white rounded-md px-2 py-1 cursor-pointer hover:opacity-60'>xoá</div>
                                                </div>
                                        ))}
                                    </div>
                                )}

                                <div className="mb-4 mt-6">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" >Danh Mục</label>
                                    <select className='!bg-gray-200 px-2 py-1 rounded-lg' defaultValue={productSelected?.product_category_id.toString()} onChange={(e) => setProductNameCatId(e.target.value)}>
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
                                    <button type="submit" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" >
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
