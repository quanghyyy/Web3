angular.module('shoppingCartApp', [])
.controller('CartController', ['$scope', function ($scope) {
    $scope.cart = {
        items: [],

        // Thêm sản phẩm vào giỏ hàng
        add: function(product) {
            var item = this.items.find(item => item.id === product.id);
            if (item) {
                item.qty++;
            } else {
                // Ensure each item has a unique identifier
                product.qty = 1;
                product.uniqueId = Date.now() + Math.random(); // Generate a unique identifier
                this.items.push(product);
            }
            this.saveToLocalStorage();
        },

        // Xóa sản phẩm khỏi giỏ hàng
        remove: function(item) {
            var index = this.items.indexOf(item);
            if (index > -1) {
                this.items.splice(index, 1);
                this.saveToLocalStorage();
            }
        },

        // Lưu giỏ hàng vào localStorage
        saveToLocalStorage: function() {
            localStorage.setItem('cart', JSON.stringify(this.items));
        },

        // Tải giỏ hàng từ localStorage
        loadFromLocalStorage: function() {
            var savedItems = localStorage.getItem('cart');
            if (savedItems) {
                this.items = JSON.parse(savedItems);
            }
        }
    };

    // Khởi tạo giỏ hàng từ localStorage khi controller được tải
    $scope.cart.loadFromLocalStorage();

    $scope.transactions = [
        // Add your transaction data here, e.g.:
        {
            time: '2024-07-25 00:48:33',
            id: '#275984',
            account: 'longdn2014',
            type: 'Mua tài khoản game',
            amount: '0.5',
            account: 'lodn1234',
            password: '25122002',
            status: 'Thành công'
        }
      
    ];

    $scope.deleteTransaction = function(transaction) {
        const index = $scope.transactions.indexOf(transaction);
        if (index > -1) {
            $scope.transactions.splice(index, 1);
        }
    };
}]);
