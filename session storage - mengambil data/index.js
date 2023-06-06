const cartList = [];

function addToCart(name, qty) {
    const indexItem = cartList.findIndex(data => data.name === name) // memeriksa apakah item name sudah ada atau belum pada cartList
    if (indexItem > -1) {
        cartList[indexItem].qty += 1 // jika sudah ada,  qty+1 pada data di index ke indexItem; ingat kembali materi array object
    } else { // jika belum ada, push data baru ke dalam cartList
        cartList.push({
            name,
            qty
        });
    }
    sessionStorage.setItem("carts", JSON.stringify(cartList)); // set session storage
}