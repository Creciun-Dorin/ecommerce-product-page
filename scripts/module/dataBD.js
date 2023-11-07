
async function dataBD(){
    const response = await fetch('/db.json');
    const data = await response.json();
    return data;
}

export default dataBD;