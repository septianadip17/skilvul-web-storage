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

function removeFromCart(name) {
    const indexItem = cartList.findIndex(data => data.name === name)
    if (indexItem > -1) {
        if (cartList[indexItem].qty > 1) { // Jika qty barang lebih dari 1
            cartList[indexItem].qty -= 1 // maka qty barang dikurangi 1
        } else { // tapi jika qty barang = 1
            cartList.splice(indexItem, 1) // maka hapus barang dari cart
        }
    }
    sessionStorage.setItem("carts", JSON.stringify(cartList)); // memperbaharui data keranjang
};

function emptyCart() {
    sessionStorage.removeItem('carts'); // menghapus session storage 'carts'
    cartList = []; // menjadikan cartList sebagai array kosong kembali
}