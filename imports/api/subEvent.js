SubEvent = new Mongo.Collection('SubEvent', {})

// {
// idMaster: string,
// idGuest: string,
// date: Date,
// status: [requested,accepted,rejected,end]
// }

// const data = {
//     title: 'React',
//     description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
//     status: false
// }

// SubEvent.insert(data);

if (Meteor.isServer) {
    // SubEvent.methods({
        // CreateSubEvent: function (data) {
        //     SubEvent.insert(data);
        // },
        // updateStatusMeeting: function (data) {
        //     const { id, status } = data;
        //     console.log(status, "params")
        //     Meeting.update(id, {
        //         $set: { status: status }
        //     })
        // },
    // })

    // Meteor.publish('meetings', function () {
    //     return Meeting.find({ idGuest: Meteor.userId() }).fetch()

    // });
}