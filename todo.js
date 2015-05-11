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
addTaskToList("Clean the house", taskList);
expect(taskList[2]).to.equal("Clean the house");
expect(taskList.length).to.equal(3);

expect(taskList.length).to.equal(3);
addTaskToList("Laundry AM", taskList);
expect(taskList[3]).to.equal("Laundry AM");
expect(taskList.length).to.equal(4);




// I can delete a task...
function addTaskToList(task, list){
    return list.push({
      text: task, completed: false
    });
    // add task to list somehow in the bottom
}

expect(taskList.length).to.equal(0);
addTaskToList("Remember the milk", taskList);
expect(taskList.length).to.equal(1);
expect(taskList[0]).text)
to.equal.

// in order to prioritize we need to delete a task first.
// Remember: strings are not always the correct answer
// how about splice??? or slice???

// inputs- outputs- side effects!!!
//
// what are the inputs of slice??
// what are the outputs and the side effects??
//
// what are the inputs of splice??
// what are the outputs and the side effects??
//
// what if we leave splice empty??? what happens??


//Click on your cheat sheet!!!!


// I can edit the task...




// I can prioritize a task...
