$(document).ready(function() {
    var cart = [];
    var total = 0;

    function updateCart() {
        var cartItemsContainer = $('#cart-items');
        var cartTotalContainer = $('#cart-total');
        cartItemsContainer.empty();

        cart.forEach(function(item) {
            cartItemsContainer.append('<li>' + item.name + ' - &#8377;' + item.price + '</li>');
        });

        cartTotalContainer.text(total);
    }

    $('.cart-button').on('click', function() {
        var itemName = $(this).data('item');
        var itemPrice = parseFloat($(this).data('price'));

        cart.push({ name: itemName, price: itemPrice });
        total += itemPrice;

        updateCart();
    });
});
