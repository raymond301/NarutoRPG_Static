var services = angular.module('myApp.services', ['ngResource']);

services.factory('StoryLineBackground', function() {
    var itemsService = {};
    var background_tile=0;
    var backgrounds = ['img/village_entrance.jpg','img/forest_fence.jpg','img/side_village.PNG'];

    itemsService.get = function(){
        console.log('in get',backgrounds[background_tile]);
        return backgrounds[background_tile];
    }
    itemsService.set = function(pos){
        background_tile = pos;
    }
    itemsService.forward = function(){
        background_tile++;
    }

    return itemsService;
});
