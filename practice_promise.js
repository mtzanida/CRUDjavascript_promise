const rp = require('request-promise');
const users = rp('http://code-school-workshop.ir-e1.cloudhub.io/api/user');

//here are my vars
let myuser = {
    "email": "mtzanidaki@ateam.com",
    "name": "maria",
    "surname": "Tzanidaki",
    "team": "interns",
    "project": "codeschool"
}
let myuser2 = {
    "email": "mtzanidaki22@ateam.com",
    "name": "maria",
    "surname": "Tzanidaki",
    "team": "interns",
    "project": "codeschool"
}
let id = '5de5064c72042670ff076430';

//here i call my methods
//getUser();
//postUser(myuser);
//getUserid(id);
//deleteUser(id);
putUser(id,myuser2);

function getUser() {
    users
        .then(rp => {
            const userstable = JSON.parse(rp);
            console.log(userstable);

        })
        .catch(error => {
            console.log('error', error);
        });

}

function postUser(input) {
    var options = {
        method: 'POST',
        uri: 'http://code-school-workshop.ir-e1.cloudhub.io/api/user',
        body: input,
        json: true // Automatically stringifies the body to JSON
    };
    rp(options)
        .then(function (repos) {
            console.log(repos);
            console.log("just posted");
        })
        .catch(function (error) {
            console.log("error dude");
            console.log('error', error);
        });
}

function getUserid(input) {
    const users = rp('http://code-school-workshop.ir-e1.cloudhub.io/api/user/' + input);
    users
        .then(rp => {
            const userstable = JSON.parse(rp);
          //  console.log("The id that you searched is for this user:");
            console.log(userstable);
        })
        .catch(error => {
            console.log('error', error);
        });

}

function deleteUser(input) {
    var options = {
        method: 'DELETE',
        uri: 'http://code-school-workshop.ir-e1.cloudhub.io/api/user/' + input,
        resolveWithFullResponse: true
    };
    rp(options)
        .then(function (rp) {
            console.log("DELETE succeeded with status %d", rp.statusCode);
        })
        .catch(function (err) {
            console.log("DELETE failed");
            console.log(rp);
        });
}

function putUser(id, replacetext) {
    console.log("i got this");
    getUserid(id);
    var options = {
        method: 'put',
        uri: 'http://code-school-workshop.ir-e1.cloudhub.io/api/user/' + id, //find the one to replace
        body: replacetext,
        json: true // Automatically stringifies the body to JSON
    };
    rp(options)
        .then(function (repos) {
            console.log(repos);
            console.log("and I just updated with this");
            getUserid(id);
        })
        .catch(function (error) {
            console.log("error dude");
            console.log('error', error);
        });
}