/* Remember that blanket will only work with brackets live preview */
/* Try to maximise the coverage of the ParlaModel object */

/*describe("Parla", function() {

  it("should...", function() {  
    
  });    
 
*/

describe("getCurrentMonster", function() {
  it("should give the current monster", function(){
      var index = 0;
      var prevMonster = collection[index];
      expect(MonsterModel.getCurrentMonster(prevMonster.name)).toEqual("bulbasaur");
  });

