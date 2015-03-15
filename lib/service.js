var services = angular.module('myApp.services', ['ngResource']);

services.factory('StoryLineBackground', function() {
    var itemsService = {};
    var background_tile=0;
    var backgrounds = ['img/village_entrance.jpg','img/forest_fence.jpg','img/side_village.PNG'];

    itemsService.get = function(){
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

services.service('MyAttributes', function(){
    var levelLimits = [0,100,250,600,1400,2200];
    this.me = {level:1,ryo:0,experience:0,tai:0,nin:0,gen:0};
    this.hero = undefined;

    /*this.gain_exp = function(n){
        me.experience += n;
        // Also change levels if experience exceeds
        for(var j in levelLimits){
            if( me.experience > levelLimits[j] ){
                me.level = j+1
            }
        }
    }
    this.gain_ryo = function(n){
        me.ryo += n;
    }
    this.loose_ryo = function(n){
        me.ryo -= n;
    }*/

    this.chakra = function(typ){
        if( typ === "NIN"){
            this.myAttr.me.nin += 1;
        }
        else if(typ === "GEN"){
            this.myAttr.me.gen += 1;
        }
        else if(typ === "TAI"){
            this.myAttr.me.tai += 1;
        }
    }

});


services.service('MyMissions', function(){
    var currentMission=1;
    var missions = [{"sucess":{"STR":3},"exp":1,"ryo":1,"name":"Rescue Cat"},
        {"sucess":{"SPD":10},"exp":3,"ryo":1,"name":"Carry Message to Ally"},
        {"sucess":{"INT":10,"CHA":10},"exp":3,"ryo":3,"name":"Hide From Sensai"}];
    this.list = function(){
        return missions.slice(0,currentMission);
    }
    this.get = function(idx){
        return missions[idx];
    }
});
