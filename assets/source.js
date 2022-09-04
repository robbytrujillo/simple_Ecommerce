document.getElementById("year").innerHTML = 
new Date().getFullYear();

function buy(product_name, product_price) {
    const message = `Halo saya mau beli ${product_name} - ${product_price} !`;
    const whatsapp = `https://wa.me/6287882770761?text=${message}`;
    open(whatsapp, "_blank");
    //location.href = whatsapp;
}

function chat() {
    const message = `Halo, Saya ingin bertanya?`;
    const whatsapp = `https://wa.me/6287882770761?text=${message}`;
    open(whatsapp, "_blank");
    //alert('Halo, admin saya mau tanya?');
}