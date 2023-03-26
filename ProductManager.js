class ProductManager {

    constructor(){

        this._products = [];

    }

    addProduct(title, description, price, thumbnail, code, stock){
        
        if(!title || ! description || !price || !thumbnail || !code || !stock){
            
            console.log(`El producto debe contar con todas las propiedades para ser agregado!`);
            return;
        }

        const locatedCode = this._products.find(e => e.code === code);

        if(locatedCode){

            console.log(`Producto con el codigo ${code} ya esta registrado en el sistema!`);
            return;
        }
        
        const id = this._products.length + 1;
        const product = {

            id,
            title,
            description,
            price,
            thumbnail,
            code,
            stock

        }

        this._products.push(product);
        console.log(`Producto con el codigo ${code} agregado con exito al sistema!`);

    }

    getProducts(){
        return this._products;
    }

    getProductById(id){
        const locatedProduct = this._products.find(e => e.id === id);

        if(!locatedProduct){
            
            console.log("Not Found");
        }

        return locatedProduct;
    }

}

//CREACION DE INSTANCIA
const productos = new ProductManager();
//INSTANCIA RECIEN CREADA
console.log(productos.getProducts());

//CASO EXITOSO
productos.addProduct("Fideos", "Fideos secos", 500, "./fotos/fideos", 100, 250);
productos.addProduct("Arroz", "Arroz Gallo", 300, "./fotos/fideos", 101, 200);
productos.addProduct("Polenta", "Polenta", 200, "./fotos/polenta", 203, 100);
//CASO CODIGO DUPLICADO
productos.addProduct("Salsa de Tomate", "Salsa de tomate portuguesa", 500, "./fotos/salsaDeTomate", 100, 250);
//CASOS PARAMETROS FALTANTES
productos.addProduct("Queso rayado", "queso rayado sancor", 1500, "./fotos/quesoRayado", 100);
productos.addProduct("Muzzarella", 500, "./fotos/Muzzarella", 100, 250);
//ARRAY CON PRODUCTOS AGREGADOS
console.log(productos.getProducts());
//BUSCAR PRODUCTO POR ID
//CASO EXITOSO
console.log(productos.getProductById(2));
//CASO ID NO ENCONTRADO
console.log(productos.getProductById(12));

