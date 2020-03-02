/* Your Code Here */
function createEmployeeRecord(sourceArray) {
    return {
        firstName: sourceArray[0],
        familyName: sourceArray[1],
        title: sourceArray[2],
        payPerHour: sourceArray[3],
        timeInEvents: [],
        timeOutEvents: []
    }
}

function createEmployeeRecords(sourceArray) {
    return sourceArray.map(element => createEmployeeRecord(element))
}

function createTimeInEvent(timestampString) {
    let hourNum = timestampString.split(' ')[1]
    let dateNum = timestampString.split(' ')[0]

    this.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(hourNum),
        date: dateNum
    })
    return this
}

function createTimeOutEvent(timestampString) {
    let hourNum = timestampString.split(' ')[1]
    let dateNum = timestampString.split(' ')[0]

    this.timeOutEvents.push({
        type: "TimeOut",
        hour: parseInt(hourNum),
        date: dateNum
    })
    return this
}

function hoursWorkedOnDate(datestampString) {
    let timeIn = this.timeInEvents.find(function(e) {
        return e.date === datestampString
    })
    let timeOut = this.timeOutEvents.find(function(e) {
        return e.date === datestampString
    })

    return (timeOut.hour - timeIn.hour) / 100
}

function wagesEarnedOnDate(datestampString) {
    return hoursWorkedOnDate.call(this, datestampString) * this.payPerHour
}

function calculatePayroll(sourceArray) {
    return sourceArray.reduce(function(total, element) {
        // console.log(this, element)
        return allWagesFor.call(element) + total
    }, 0)
}

function findEmployeeByFirstName(sourceArray, fName) {
    return sourceArray.find(function(element) {
        return fName === element.firstName
    })
}
/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

let allWagesFor = function () {
    let eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    let payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}