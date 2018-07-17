var app = angular.module("app", []);
app.controller('widgetCtrl', function($scope, $http) {

    $scope.posts = [{
            "id": 1,
            "text": "Dude thank you so much, it was possible to somehow get this to stay as top discussion",
            "date": "June 1,2018",
            "image": "./assets/default-user.png",
            "like": 0,
            "name": "Clueless-kun",
            "isRoot": true,
            "comments": [{
                    "id": 120,
                    "name": "Nebuchadnezzer",
                    "comment": "It should be up now!",
                    "like": 10,
                    "isRoot": false,
                    "image": "./assets/default-user.png",
                    "date": "June 10,2018",
                    "reply": [{
                        "id": 1,
                        "name": "madhuri",
                        "like": 10,
                        "isRoot": false,
                        "image": "./assets/default-user.png",
                        "date": "June 10,2018",
                        "comment": "Thank you"
                    }]
                },
                {
                    "id": 121,
                    "name": "Nebuchadnezzer",
                    "comment": "It should be up now!",
                    "like": 20,
                    "image": "./assets/default-user.png",
                    "date": "June 20,2018",
                    "isRoot": false,
                    "reply": [{
                        "id": 2,
                        "name": "madhuri",
                        "like": 10,
                        "isRoot": false,
                        "image": "./assets/default-user.png",
                        "date": "June 10,2018",
                        "comment": "Thank you"
                    }]
                }
            ]
        },
        {
            "id": 2,
            "text": "If I could recommend this discussion more than once",
            "date": "July 1,2018",
            "image": "./assets/default-user.png",
            "like": 0,
            "name": "Tony Hue",
            "isRoot": true,
            "comments": [{
                    "id": 130,
                    "name": "Megha",
                    "comment": "Thank you",
                    "like": 10,
                    "image": "./assets/default-user.png",
                    "date": "July 1,2018",
                    "isRoot": false,
                    "reply": [{
                        "id": 111,
                        "name": "madhuri",
                        "like": 10,
                        "isRoot": false,
                        "image": "./assets/default-user.png",
                        "date": "June 10,2018",
                        "comment": "Thank you",
                    }]

                },
                {
                    "id": 131,
                    "name": "Manjula",
                    "comment": "It should be up now!",
                    "like": 20,
                    "image": "./assets/default-user.png",
                    "date": "July 10,2018",
                    "isRoot": false,
                    "reply": [{
                        "id": 1111,
                        "name": "madhuri",
                        "like": 10,
                        "isRoot": false,
                        "image": "./assets/default-user.png",
                        "date": "June 10,2018",
                        "comment": "Thank you"
                    }]
                }
            ]
        }
    ];


    $scope.postLike = function(key) {
        console.log(key)
        var like = $scope.posts[key].like;
        console.log(like)
        like = ($scope.posts[key].like == 1) ? 0 : 1;
        $scope.posts[key].like = like;
    }

    $scope.newcomment = {};

    $scope.postComment = function(key) {
        console.log("comment", $scope.newcomment[key]);
        var obj = {
            comment: $scope.newcomment[key].comment,
            image: "./assets/default-user.png",
            like: 0,
            date: new Date(),
            name: $scope.name
        }
        $scope.posts[key].comments.push(obj);
        console.log(obj)
            // $scope.newcomment = {};
    }
    $scope.like = true;
    $scope.commentLike = function(key, keyC, itemId) {
        console.log("id", itemId);
        $scope.like = !$scope.like;
        var like = $scope.posts[key].comments[keyC].like;
        like += (!$scope.like) ? 1 : -1;
        $scope.posts[key].comments[keyC].like = like;
    }

    $scope.addReply = function(key, keyC, index) {
        $scope.addReplyToCmt = true;
        angular.forEach($scope.posts, function(item) {

            angular.forEach(item.comments, function(eachItem) {
                if (eachItem.id === keyC) {
                    console.log(eachItem.id)
                    console.log(keyC)
                    $scope.addReplyToCmt = keyC;

                }
            })
        })


    }
    $scope.replycomment = {};

    $scope.updateReply = function(key, keyC, event) {
        console.log("comment", $scope.replycomment[key].comment);
        var replyobj = {
            comment: $scope.replycomment[key].comment,
            image: "./assets/default-user.png",
            like: 0,
            date: new Date(),
            name: $scope.name
        }
        if (event.which === 13) {
            $scope.replycomment[key].comment = "";
            $scope.posts[key].comments[keyC].reply.push(replyobj);
        }
        console.log($scope.posts)
    }


})