'use strict';

// components


testApp.component('searchCmpt', {
  templateUrl: '/js/components/templates/searchCmpt.html',
  bindings: {
    products: '='
  },
  controller: function ( searchServ ) {

    this.send_search = function(search){
       searchServ.send_search(search);
    };

  }
});



testApp.component('productsCmpt', {
  templateUrl: '/js/components/templates/productCmpt.html',
  bindings: {
    products: '='
  },
  controller: function ( cardServ, searchServ ) {

    var filter_products = angular.bind(this, function(search){
       return this.products.filter(function(el){
            if( el.title && el.title.search(search) !== -1 ) {
              return true;
            }
       });
    });

    this.clear_search = function(){
      delete this.searched_products;
    };

    this.add_to_card = function( item ){
      cardServ.set_card( item );
    };

    this.show_product_view = function(val){
      return !!(val && !val.length);
    };

    searchServ.observe_search().then(null, null, angular.bind(this, function( search ){
      this.searched_products = filter_products(search);
    }));

  }
});


testApp.component('cardCmpt', {
  templateUrl: '/js/components/templates/cardCmpt.html',
  bindings: {
    
  },
  controller: function ( cardServ ) {

    this.card = cardServ.get_card();
    
    cardServ.observe_card().then(null, null, angular.bind(this, function( card ){
      this.card = card;
    }));

    this.change_card_view = function(){
       this.card_view = !this.card_view;
    };

    this.get_total = function(){
      var total = 0;
      this.card.forEach(function(el){
         if ( !el.price ) return false;
         total += el.price;        
      });
      return total;
    };

  }
});