'use strict';

// services

testApp.service('cardServ', function ($q) {

    var _defer = $q.defer();
    var _card = [];

    var _is_item_exist = function(item){
        return _card.filter(function(el){
            if(el.id === item.id) return true;
        }).length;
    };

    this.get_card = function(){
        return JSON.parse ( window.localStorage.getItem('card') ) || [];
    };

    this.observe_card = function() {
        return _defer.promise;
    };

    this.set_card = function(item) {
        if( _is_item_exist(item) ) { console.error('this item was added before'); return false; }
        _card.push(item);
        window.localStorage.setItem( 'card', JSON.stringify(_card) );
        _defer.notify(_card);
    };

});


testApp.service('searchServ', function ($q) {

    var _defer = $q.defer();

    this.send_search = function(search){
       _defer.notify(search);
    };
    this.observe_search = function() {
        return _defer.promise;
    };

});

