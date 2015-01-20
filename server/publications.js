


Meteor.publish ('allFoo', function () {
	
	return Foo.find({}, {sort: {createdAt: -1}});
})







