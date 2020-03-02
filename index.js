/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

function createEmployeeRecord(a){
    const record = {};
    record.firstName = a[0];
    record.familyName = a[1];
    record.title = a[2];
    record.payPerHour = a[3];
    record.timeInEvents = [];
    record.timeOutEvents = [];

    return record
}

function createEmployeeRecords(aoa){
    return aoa.map(a => createEmployeeRecord(a))
}

function createTimeInEvent(date){
    const day = date.split(" ")[0];
    const hour = parseInt(date.split(" ")[1]);
    const obj = {};
    obj.type = "TimeIn";
    obj.date = day;
    obj.hour = hour;
    this.timeInEvents.push(obj)
    return this
}

function createTimeOutEvent(date){
    const day = date.split(" ")[0];
    const hour = parseInt(date.split(" ")[1]);
    const obj = {};
    obj.type = "TimeOut";
    obj.date = day;
    obj.hour = hour;
    this.timeOutEvents.push(obj)
    return this
}

function hoursWorkedOnDate(date){
    const timeIn = this.timeInEvents.find(event => event.date === date).hour
    const timeOut = this.timeOutEvents.find(event => event.date === date).hour
    return (timeOut - timeIn)/100
}

function wagesEarnedOnDate(date){
    const hoursWorked = hoursWorkedOnDate.call(this, date);
    return hoursWorked * this.payPerHour
}


let findEmployeeByFirstName = function(array, firstName) {
    return array.find(function(rec){
        return rec.firstName === firstName
    })
}

let calculatePayroll = function(a){
    return a.reduce(function(memo, rec){
        return memo + allWagesFor.call(rec)
    }, 0)
}

let allWagesFor = function () {
    let eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })
    
    let payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!
    
    return payable
}