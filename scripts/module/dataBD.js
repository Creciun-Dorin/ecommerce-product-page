
async function dataBD(){
    const response = await fetch('https://github.com/Creciun-Dorin/Creciun-Dorin-ecommerce-product-page/blob/main/dataBD.json');
    const data = await response.json();
    return data;
}

export default dataBD;