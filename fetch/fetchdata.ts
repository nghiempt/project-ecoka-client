import { API } from "@/constant/api";
import { FAKE } from "@/constant/fake";

const GET_ALL_PRODUCTS = async () => {
    // return FAKE.PRODUCTS
    try {
        const response = await fetch(API.GET_ALL_PRODUCT);
        const data = await response.json();
        if (data?.result) {
            console.log(data.data);
            return data.data;
        }
        return []
    } catch (err) {
        console.log(err);
        return false;
    }
};

const GET_ALL_PRODUCTS_REAL = async () => {
    try {
        const response = await fetch(API.GET_ALL_PRODUCT);
        const data = await response.json();
        if (data?.result) {
            return data;
        }
        return []
    } catch (err) {
        console.log(err);
        return false;
    }
};

const GET_ALL_BLOGS = async () => {
    return FAKE.BLOGS_VI
    try {
        const response = await fetch(API.GET_ALL_BLOG);
        const data = await response.json();
        console.log(data);
        return data;
    } catch (err) {
        console.log(err);
        return false;
    }
};

const GET_ALL_CATEGORIES = async () => {
    return FAKE.CATEGORIES
    try {
        const response = await fetch(API.GET_ALL_CATEGORY);
        const data = await response.json();
        console.log(data);
        return data;
    } catch (err) {
        console.log(err);
        return false;
    }
};

const CREATE_PRODUCT = async (payload: any) => {
    try {
        const response = await fetch(API.CREATE_PRODUCT, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(payload),
        });
        const data = await response.json();
        console.log(data);
        return true;
    } catch (err) {
        console.log(err);
        return false;
    }
};

const UPLOAD_IMAGE = async (payload: any) => {
    try {
        const response = await fetch(API.UPLOAD_IMAGE, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(payload),
        });
        const data = await response.json();
        console.log(data);
        return true;
    } catch (err) {
        console.log(err);
        return false;
    }
};

export const FetchData = {
    GET_ALL_PRODUCTS,
    GET_ALL_BLOGS,
    GET_ALL_CATEGORIES,
    CREATE_PRODUCT,
    UPLOAD_IMAGE,
    GET_ALL_PRODUCTS_REAL
}