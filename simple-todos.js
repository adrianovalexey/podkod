//Tasks = new Mongo.Collection("tasks");
var init = 8898891;
var podkod;

Foo = new Mongo.Collection("foo");

if (Meteor.isClient) {
  // This code only runs on the client
  Template.body.helpers({
    foo: function () {
      // Show newest podkods first
      return Foo.find({}, {sort: {createdAt: -1}});
    }
  });


//Take input form data

Template.body.events({'submit form' : function(event, template) {
    event.preventDefault();

    filial = template.find("input[name=filial]");
    client = template.find("input[name=client]");   
    dog = template.find("input[name=dog]");

    

/// GET THE LAST ELEMENT OF AN ARRAY OF OBJECTS ///

    var rand = Math.floor(Math.random()*10);

    lastElem = Foo.find().fetch().length-1; //last element of obj array
    

        if (lastElem<1) {
            podkod = init;
            }

        else {

              objArr = Foo.find({},{sort:{"createdAt":1}}).fetch();
              //console.log("obj array = ", objArr);

              podkod = objArr[lastElem].podkod;
              podkod = podkod+1;
              //console.log("now podkod = ", podkod);

              }

//calculate podkodFin data   
  var podkodFin = parseInt(podkod.toString().concat(rand.toString()));



// Define data 

    var data = {
      filial: filial.value,
      client: client.value,
      dog: dog.value,
      podkod: podkod,
      podkodFin: podkodFin,
      createdAt: new Date(),
    };


// insert data to collection Foo

Foo.insert(data, function(err) { /* handle error */ });
    filial.value="";
    client.value="";
    dog.value="";
    
    
    

}});


}


