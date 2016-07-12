/*
 * MonsterModel provides basic methods to iterate
 * over a collection of "monsters"  
 */

// The function of sprint 2 not implemented this note to be read only for the merge operation
var MonsterModel = {
    currentMonster: null,
    var index = 0;
  
   /* Collection of available monsters */
   collection : monsters, 
  
   /* Start the iteration over the collection of monsters.
   it sets the first element as the current monster */    
   init : function() {
       MonsterModel.currentMonster = MonsterModel.collection[0]; 
   },
  
   /*   Returns the current monster and sets as current monster
    * the next element in the array.
    * If no more monsters are available, it returns null
    */
   getCurrentMonster : function (PrevMonster) {
       var thisIndex = collection.indexOf(PrevMonster);
       alert("into getCurrent");
       if (thisIndex===collection.length){
           return null;
       }else{
           return MonsterModel.collection[thisIndex+1];
       }
    },
    /* Checks if the name of the current monster 
    * is monsterName. It returns true if the user 
    * correctly named the monster, false otherwise
    */
   catchMonster : function (monsterName){
        var actual = MonsterModel.getCurrentMonster(MonsterModel.collection[index]);
       if(monsterName === actual.name[index]){
          viewMonster.showWinMessage; 
        } else{
            viewMonster.showLostMessage
        };
       index+=1;
   
   }    
};

var viewMonster= {
    init:function(){
        $("#catchButton").click(function(){
        MonsterModel.catchMonster($("#input").val());
        });
    },
    
    showWinMessage: function(){
        alert("Catched");    
    },
    showLostMessage: function(){
        alert("Sorry, master");
    }
};

$(document).ready(function () {
    MonsterModel.init();
});