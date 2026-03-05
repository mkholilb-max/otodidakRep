import axios from "axios";

export const getProducts = (callback) => {
    axios.get("https://fakestoreapi.com/products")
    .then(res => {
        console.log(res);
        callback(res.data);
    })
    .catch(err => {
        console.error(err);
    });
};

export const getDetailProducts = (id, callback) => {
    axios.get(`https://fakestoreapi.com/products/${id}`)
    .then(res => {
        console.log(res);
        callback(res.data);
    })
    .catch(err => {
        console.error(err);
    });
};