Questionnarie = new Mongo.Collection('Questionnarie', {})

// {
// idMaster: string,
// idGuest: string,
// date: Date,
// status: [requested,accepted,rejected,end]
// }

if (Meteor.isServer) {
    Meteor.methods({
        answerQuestionarie: function (data) {
            Questionnarie.insert(data);
        },
        // updateStatusMeeting: function (data) {
        //     const { id, status } = data;
        //     console.log(status, "params")
        //     Meeting.update(id, {
        //         $set: { status: status }
        //     })
        // },
    })

    // Meteor.publish('meetings', function () {
    //     return Meeting.find({ idGuest: Meteor.userId() }).fetch()

    // });
}