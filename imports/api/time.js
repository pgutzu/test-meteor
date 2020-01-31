export const Times = new Mongo.Collection('Times', {})
// Employees = new Mongo.Collection("employees", {});
// {
// id
// dateStart: string,
// dateEnd: string,
// hoursADay: number,
// code: string,
// }

if (Meteor.isServer) {
    Meteor.methods({
        createNewEvent: function () {
            Times.insert({
                idEvent: '20.01.2020',
                idUser: '21.01.2020',
                hoursADay: 5,
                allowedTime: [{ dayAndTime: '20.01.2020T19:00' }, { dayAndTime: '20.01.2020T18:00' }, { dayAndTime: '20.01.2020T17:00' }],
            });
        },
        // addNewEvent: function () {
        //     Employees.insert({
        //         _id: "CQKDzmqmQXGhsC6PG",
        //         name: "Acme"
        //     });
        //     Event.insert({
        //         _id: "dySSKA25pCtKjo5uA",
        //         name: "Jimi Hendrix",
        //         companyId: "CQKDzmqmQXGhsC6PG"
        //     });

        // },
        // eventsByPasha: function () {


        //     let event = Event.find({}, { fields: { companyId: true } }).fetch();
        //     let employees = Employees.find({ _id: event[0].companyId }).fetch();

        //     console.log(event)
        //     console.log(employees)
        //     return event

        // },
    })

    // Meteor.publish('eventsCode', function () {
    //     return Events.find({}).fetch();
    // });
}