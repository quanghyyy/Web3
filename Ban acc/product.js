angular.module('shoppingCartApp', [])
.controller('ProductController', ['$scope', function($scope) {
    $scope.products = [
        {
            id: '#73769631',
                    name: 'ACC BLOX FRUITS',
                    price: 0.5,
                    image: '/imgages/images1.1png.png',
                    gear: 'FULL',
                    item: 'Như Hình',
                    race: 'Cá Shark',
                    melee: 'Sanguine Art'
        
        }
        
    ];

    $scope.addToCart = function(product) {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        
        // Kiểm tra sản phẩm đã tồn tại trong giỏ hàng
        let existingProduct = cart.find(item => item.id === product.id);
        if (existingProduct) {
            existingProduct.qty = (existingProduct.qty || 1) + 1; // Tăng số lượng nếu sản phẩm đã tồn tại
        } else {
            product.qty = 1; // Thiết lập số lượng là 1 nếu sản phẩm chưa tồn tại
            cart.push(product);
        }

        localStorage.setItem('cart', JSON.stringify(cart));
        console.log('Giỏ hàng sau khi thêm:', cart); // Kiểm tra dữ liệu sau khi thêm
        alert('Đã thêm vào giỏ hàng');
    };
}]);
