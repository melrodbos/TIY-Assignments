// var chai = require('chai'),
//     expect = chai.expect;

var expect = require('chai').expect;

var taskList = [ ];

// I can list my tasks...
function listTasks(){
}

function addTaskToList(task, list){
    return list.push(task);
}

expect(taskList.length).to.equal(0);
addTaskToList("Remember the milk", taskList);
expect(taskList[0]).to.equal("Remember the milk");
expect(taskList.length).to.equal(1);

expect(taskList.length).to.equal(1);
addTaskToList("Take out the trash", taskList);
expect(taskList[1]).to.equal("Take out the trash");
expect(taskList.length).to.equal(2);

expect(taskList.length).to.equal(2);
addTaskToList("Clean the house", tasklist);
expect(taskList[2]).to.equal("Clean the house");
expect(taskList.length).to.equal(3);

expect(taskList.length).to.equal(3);
addTaskToList("Laundry AM", tasklist);
expect(taskList[3]).to.equal("Clean the house");
expect(taskList.length).to.equal(5);


