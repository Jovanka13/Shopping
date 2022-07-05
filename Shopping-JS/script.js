let total = 0;

function addToCart(btn) {
    let name = document.querySelector('h3').innerText;
    let price = document.querySelector('.price').innerText;
    
    price = price.substring(1);
    price = parseInt(price);
    
    total += price;
    
    document.querySelector('.total').innerText =`Money spent: $${total}`;

    btn.innerText = 'Watched';
    btn.setAttribute('disabled', 'true');

    let item = btn.closest('.single-item');
    item.style.backgroundColor = 'red';
}