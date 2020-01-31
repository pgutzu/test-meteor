
export const StartQuestionarie = new Mongo.Collection('StartQuestionarie', {})

// {
// idMaster: string,
// idGuest: string,
// date: Date,
// status: [requested,accepted,rejected,end]
// }

// StartQuestionarie.insert({ status: false })


if (Meteor.isServer) {
    Meteor.methods({
        updateStatusQuestionaries: function (data) {
            const { status } = data;
            StartQuestionarie.update(StartQuestionarie.findOne({})._id, {
                $set: { status: status }
            })
        },
        createQuestionarie: function () {
            const data = { status: false };
            StartQuestionarie.insert(data)
        },
    })

    // Meteor.publish('meetings', function () {
    //     return Meeting.find({ idGuest: Meteor.userId() }).fetch()

    // });
}