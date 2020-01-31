export const Events = new Mongo.Collection('Events', {})
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
            Events.insert({
                dateStart: '20.01.2020',
                dateEnd: '21.01.2020',
                hoursADay: 5,
                code: "1000geeks",
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