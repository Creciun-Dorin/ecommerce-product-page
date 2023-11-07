
async function dataBD(){
    const response = await fetch('/blob/main/db.json');
    const data = await response.json();
    return data;
}

export default dataBD;