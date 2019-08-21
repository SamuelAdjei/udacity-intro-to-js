/*

Create an object called facebookProfile. The object should have 3 properties:

your name
the number of friends you have, and
an array of messages you've posted (as strings)
The object should also have 4 methods:

postMessage(message) - adds a new message string to the array
deleteMessage(index) - removes the message corresponding to the index provided
addFriend() - increases the friend count by 1
removeFriend() - decreases the friend count by 1

*/

var facebookProfile = {
    name : "Samuel Adjei",
    friends : 100,
    messages : ["Happy Birthday", "How are you?", "Long time friend"],
    postMessage : function post(message) {
        return facebookProfile.messages.push(message);
    },
    deleteMessage : function deletion(num) {
        return facebookProfile.messages.splice(num,1);
    },
    addFriend: function() {
        return facebookProfile.friends+= 1;
    },
    removeFriend: function() {
        return facebookProfile.friends-= 1;
    }
};

console.log(facebookProfile);