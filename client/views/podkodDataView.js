
 var init = 8898891;
var podkod;



if (Meteor.isClient) {
//   // This code only runs on the client



//Take input form data
// 
// Template.form.events({'click .bClick' : function(event, template)
Template.form.events({'submit form' : function(event, template) {
    event.preventDefault();
    
    
    filial = template.find("input[name=filial]");
    client = template.find("input[name=client]");   
    dog = template.find("input[name=dog]");


/// GET THE LAST ELEMENT OF AN ARRAY OF OBJECTS ///

    var rand = Math.floor(Math.random()*10);

    lastElem = Foo.find().fetch().length-1; //last element of obj array
    // console.log("Последний элемент = ",lastElem);

        if (lastElem<0) {
            podkod = init;
            }

        else {

              objArr = Foo.find({},{sort:{"createdAt":1}}).fetch();
              console.log("Длина массива в блоке else ",objArr.length);

              podkod = objArr[lastElem].podkod;
              podkod = podkod+1;
             console.log("now podkod = ", podkod);

              }



//calculate podkodFin data   
 var podkodFin = parseInt(podkod.toString().concat(rand.toString()));


    
// console.log("Podkod fin", podkodFin);
// console.log("Podkod", podkod);
// console.log("Длина массива до вставки данных", Foo.find().fetch().length);

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
    
window.open("/podkod", "_self");


// console.log("Podkod fin", podkodFin);
// console.log("Podkod", podkod);
// console.log("Длина массива после подписки и вставки данных ", Foo.find().fetch().length);

// console.log("_____________");
}});



}    



// Хелпер (менеджер шаблона) определяет какие данные и в каком порядке будут отображены шаблоном.


    Template.podkodData.helpers({
    client: function() {
    return Foo.find({}, {sort: {createdAt: -1}}).fetch()[0].client;	
    },	

    podkodFin: function() {
    return Foo.find({}, {sort: {createdAt: -1}}).fetch()[0].podkodFin;	
    },

   
});


   




