/// autocomplete
FilialNames = new Mongo.Collection("filialNames");


  // Meteor.startup(function() {

  //   function fill(col, source, map){
  //     col.remove({});
  //     JSON.parse(Assets.getText(source)).forEach(function(it){
  //       col.insert(typeof map === 'function' ? map(it) : it);
  //     });
  //   }

  //   fill(FilialNames, 'filialNames.json', function(name){ return {name: name}; });
  // }