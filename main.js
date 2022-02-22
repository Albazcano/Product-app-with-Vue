var app = new Vue({
    el: '#app',
    data: {
        brand: "Vue Mastery",
        product: 'Socks',
        image:"/assets/vmSocks-green.png",
        inStock: false,
        details: ["80% Cotton", "20% Poliestyer", "Gender-neutral"],
        variants:[
            {

                variantId: 2234,
                variantColor: "green",
                variantImage: "./assets/vmSocks-green.png"
            },
            {

                variantId: 2235,
                variantColor: "blue",
                variantImage: "./assets/vmSocks-blue.jpg"
            },

        ],
        cart: 0
    },
    methods: {
        addToCart: function() {
            this.cart +=1
        },

        updateProduct: function(variantImage) {
            this.image = variantImage
        }
    },
    computed: {
        title() {
            return this.brand + ' ' + this.product
        }
        
    }
})