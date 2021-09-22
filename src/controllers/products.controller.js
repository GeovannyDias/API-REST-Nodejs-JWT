'use strict';
import Product from "../models/Product";

export const postProduct = async (req, res) => {
    // console.log('Data:', req.body);
    // const { name, category, price, imgURL } = req.body;
    // new Product({ name: name, category: category ...});
    // const newProduct = new Product({ name, category, price, imgURL });
    // const dataSaved = await newProduct.save();
    // res.status(201).json(dataSaved); // 201 nuevo recurso creado
    // validar que todos los campos sean enviados desde el FrontEnd ya que si un valor es diferente
    // a los valores del modelo no se crea solo se va la información que coincide
    const product = new Product(req.body);
    await product.save();
    res.status(201).json(product); // 201 nuevo recurso creado
};

export const getProducts = async (req, res) => {
    const products = await Product.find();
    res.status(200).json(products);
};

export const getProductById = async (req, res) => {
    const id = req.params.productId;
    const product = await Product.findById(id);
    // product return data or null (validate)
    res.status(200).json(product); // 404
};

export const updateProductById = async (req, res) => {
    const id = req.params.productId;
    const data = req.body;
    const product = await Product.findByIdAndUpdate(id, data, { new: true });
    res.status(200).json(product); // 204
};

export const deleteProductById = async (req, res) => {
    // la diferencia útil común es que findOneAndRemove() devuelve el documento eliminado si 
    // está interesado en usarlo después de eliminarlo. Se sugiere que se use findOneAndDelete ().
    const id = req.params.productId;
    await Product.findByIdAndDelete(id);
    res.status(200).json({'code': 'OK', 'message': 'Datos eliminados con exito.'}); // 204
};


