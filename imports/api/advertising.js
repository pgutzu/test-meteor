export const Advertisings = new Mongo.Collection('Advertisings', {})

if (Meteor.isServer) {
    Meteor.methods({
        createNewAdvertising: function (data) {
            console.log(data);
            Advertisings.insert(data);
        },
    })
}