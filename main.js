var app = new Vue({
    el: '#app',
    data: {
        brand: "Vue Mastery",
        product: 'Socks',
        selectedVariant: 0,
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

        updateProduct(index) {
            this.selectedVariant = index
            console.log(index)
        }
    },
    computed: {
        title() {
            return this.brand + ' ' + this.product
        },
        image() {
            return this.variants[this.selectedVariant].variantImage
        }
        
    }
})