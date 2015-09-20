(function (){
  var app = angular.module('store', [ ]);

  app.controller('StoreController', function() {
    this.products = gems;
  });

  app.controller('PanelController', function() {
    this.tab = 1;
    this.selectTab = function(setTab) {
      this.tab = setTab;
    };
    this.isSelected = function(checkTab) {
      return this.tab === checkTab;
    };
  });

  app.controller('ReviewController', function() {
    this.review = { };
    this.addReview = function(product){
      product.reviews.push(this.review);
      this.review = {};
    };
  });

  var gems = [
    {
      name: 'Dodecahedron',
      price: 2,
      description: 'Some gems have qualities beyond their luster, beyond theur shine... Dodeca is one of those gems',
      canPurchase: true,
      images: [
        {
          full: "https://cp4space.files.wordpress.com/2012/10/dodecahedron.png",
          thumb: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Dodecahedron.png/40px-Dodecahedron.png"
        },
        {
          full: "http://web.eecs.utk.edu/~plank/plank/pics/origami/penultimate/23.256.gif",
          thumb: "http://world.mathigon.org/resources/Polygons_and_Polyhedra/small-dodecahedron.png"
        }
      ],
      reviews: [
        {
          stars: 5,
          body: "I love this product!",
          author: "joe@thomas.com"
        },
        {
          stars: 1,
          body: "This product sucks",
          author: "tim@hater.com"
        },
      ]
    },
    {
      name: 'Pentagonal Gem',
      price: 5.95,
      description: 'Some gems have qualities beyond their luster, beyond theur shine... Dodeca is one of those gems',
      canPurchase: false,
    }
  ]
})();
