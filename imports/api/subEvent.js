export const SubEvent = new Mongo.Collection('SubEvent', {})

// SubEvent.schema = new SimpleSchema({
//     _id: { type: String },
//     title: { type: String },
//     description: { type: String },
//     date: { type: Date },
//     speaker: { type: String, regEx: SimpleSchema.RegEx.Id, optional: true },
//     event: { type: String }
// });

// SubEvent.attachSchema(SubEvent.schema);


// const listsAndTodos = SubEvent.createQuery({
//     name: 1,
//     todos: {
//         text: 1
//     }
// }).fetch();
// console.log(listsAndTodos,"feemvevmemvpe,rv,epr")

if (Meteor.isServer) {

}