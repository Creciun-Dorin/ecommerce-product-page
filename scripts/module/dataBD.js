
async function dataBD(){
    const response = await fetch('/ecommerce-product-page/db.json');
    const data = await response.json();
    return data;
}

export default dataBD;