/* Your Code Here */

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
// Your code here
const createEmployeeRecord = array => {
    return {
        firstName: array[0],
        familyName: array[1],
        title: array[2],
        payPerHour: array [3],
        timeInEvents: [],
        timeOutEvents: []
    }
}

const createEmployeeRecords = employees => {
    return employees.map(employee => createEmployeeRecord(employee))
}

// const createTimeInEvent = (employee, timeStamp) => {
//     const [date, time] = timeStamp.split(' ')
//     const timeIn = {
//         type: "TimeIn",
//         hour: parseInt(time),
//         date: date
//     }
//     employee.timeInEvents.push(timeIn)
//     return employee
// }

// const createTimeOutEvent = (employee, timeStamp) => {
//     const [date, time] = timeStamp.split(' ')
//     const timeOut = {
//         type: "TimeOut",
//         hour: parseInt(time),
//         date: date
//     }
//     employee.timeOutEvents.push(timeOut)
//     return employee
// }

let createTimeInEvent = function(dateStamp){
    let [date, hour] = dateStamp.split(' ')

    this.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(hour, 10),
        date,
    })

    return this
}

let createTimeOutEvent = function(dateStamp){
    let [date, hour] = dateStamp.split(' ')

    this.timeOutEvents.push({
        type: "TimeOut",
        hour: parseInt(hour, 10),
        date,
    })

    return this
}

// const hoursWorkedOnDate = (employee, soughtDate) => {
//     const inDay = employee.timeInEvents.find(e => {
//         return e.date === soughtDate
//     })

//     const out = employee.timeOutEvents.find(e => {
//         return e.date === soughtDate
//     })

//     return (out.hour - inDay.hour) / 100
// }

// const wagesEarnedOnDate = (employee, date) => {
//     const hours = hoursWorkedOnDate(employee, date)
//     return employee.payPerHour * hours
// }
let hoursWorkedOnDate = function(soughtDate){
    let inEvent = this.timeInEvents.find(function(e){
        return e.date === soughtDate
    })

    let outEvent = this.timeOutEvents.find(function(e){
        return e.date === soughtDate
    })

    return (outEvent.hour - inEvent.hour) / 100
}

let wagesEarnedOnDate = function(dateSought){
    let rawWage = hoursWorkedOnDate.call(this, dateSought)
        * this.payPerHour
    return parseFloat(rawWage.toString())
}
// const allWagesFor = employee => {
//     let allWages = 0
//     employee.timeInEvents.forEach(timeInEvent => {
//         allWages += wagesEarnedOnDate(employee, timeInEvent.date) 
//     })
//     return allWages
// }

// const calculatePayroll = employees => {
//     let payroll = 0
//     employees.forEach(employee => {
//         payroll += allWagesFor(employee)
//     })
//     return payroll
// }

let calculatePayroll = function(arrayOfEmployeeRecords){
    return arrayOfEmployeeRecords.reduce(function(memo, rec){
        return memo + allWagesFor.call(rec)
    }, 0)
}

const findEmployeeByFirstName = (array, firstName) => {
    return array.find(employee => employee.firstName === firstName)
}
