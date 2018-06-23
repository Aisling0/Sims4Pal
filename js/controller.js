angular.module("RouteControllers", [])

    .controller("HomeController", function($scope) {
        $scope.greeting = "Welcome To Sims4Pal";
    })
    .controller('CarouselCtrlOne', function ($scope) {
        $scope.myInterval = 2000;
        $scope.noWrapSlides = false;
        $scope.active = 0;
        var slides = $scope.slides = [];
        var currIndex = 0;

        $scope.slide = function() {
            var slideWidth = 400 + slides.length + 1;
            slides.push({
                image: "images/angela_jess.png",
                id: currIndex++
            });
            slides.push({
                image: "images/mutske_window2.png",
                id: currIndex++
            });
            slides.push({
                image: "images/angela_jess.png",
                id: currIndex++
            });
            slides.push({
                image: "images/mutske_window2.png",
                id: currIndex++
            });
        };

        for (var i = 0; i < 4; i++) {
            $scope.slide();
        }
    })
    .controller('CarouselCtrlTwo', function ($scope) {
        $scope.myInterval = 0;
        $scope.noWrapSlides = true;
        $scope.active = 0;
        var slides = $scope.slides = [];
        var currIndex = 0;
        $scope.slide = function() {
            var slideWidth = 0 + slides.length + 1;
            slides.push({
                image: "images/snapshot1.png",
                text: "Step 1 - Press Ctrl + Shift + C while in live play mode to open the console bar.",
                id: currIndex++
            });
            slides.push({
                image: "images/snapshot2.png",
                text: "Step 2 - Type 'testingcheats on' and hit Enter.",
                id: currIndex++
            });
            slides.push({
                image: "images/snapshot3.png",
                text: "Step 3 - Type in your cheat code and hit Enter.",
                id: currIndex++
            });
            slides.push({
                image: "images/snapshot4.png",
                text: "Step 4 - Hit 'Esc' to close the console bar.",
                id: currIndex++
            });
        };
        for (var i = 0; i < 4; i++) {
            $scope.slide();
        }
    })
    .controller("PanelController", function($scope) {
        $scope.greeting = "Custom Content and Mods for Sims 4";
        $scope.heading = "To install custom content and mods to your Sims 4 game, download the package file and place it into your 'Mods' folder in your Sims 4 directory. e.g. Documents/Electronic Arts/The Sims 4/Mods";
        $scope.heading2 = "There are heaps of great designers of custom design content for The Sims 4. These designers create build/buy content as well as 'Create a Sim' designs. Here are my Top 10 designer picks for The Sims 4.";
        $scope.heading3 = "Here are some of my favourite custom content items for build/buy mode.";
        $scope.heading4 = "Mods and tools for The Sims 4.";
        $scope.moddata = MODDATA;
        $scope.mod2data = MOD2DATA;
        $scope.mod3data = MOD3DATA;
    })
    .controller("TableController", function($scope){
        $scope.greeting = GREETING;
        $scope.itemdata = ITEMDATA;
        $scope.fishdata = FISHDATA;
        $scope.crysdata = CRYSDATA;
        $scope.bugsdata = BUGSDATA;
        $scope.metaldata = METALDATA;
        $scope.mscopedata = MSCOPEDATA;
        $scope.frogdata = FROGDATA;
        $scope.elementdata = ELEMENTDATA;
        $scope.postcarddata = POSTCARDDATA;
        $scope.fossildata = FOSSILDATA;
        $scope.featherdata = FEATHERDATA;
        $scope.aliendata = ALIENDATA;
        $scope.trophdata = TROPHDATA;
        $scope.spcprintdata = SPCPRINTDATA;
        $scope.spcrockdata = SPCROCKDATA;
        $scope.posterdata = POSTERDATA;
        $scope.globedata = GLOBEDATA;
        $scope.skulldata = SKULLDATA;
        $scope.geodedata = GEODEDATA;
        $scope.eggdata = EGGDATA;
        $scope.exfooddata = EXFOODDATA;
        $scope.voiddata = VOIDDATA;
        $scope.crackerdata = CRACKERDATA;
        $scope.beandata = BEANDATA;
    })
    .controller('AccordionDemoCtrl', function ($scope) {
        $scope.oneAtATime = true;
    })
    .controller("CheatsController", function($scope){
        $scope.heading = "Sims 4 Cheat Codes";
        $scope.greeting = "There are cheats to achieve almost anything in Sims 4. Search through the different categories below.";
        $scope.cheatdata1 = CHEATDATA1;
        $scope.cheatdata2 = CHEATDATA2;
        $scope.cheatdata3 = CHEATDATA3;
        $scope.cheatdata4 = CHEATDATA4;
        $scope.cheatdata5 = CHEATDATA5;
        $scope.cheatdata6 = CHEATDATA6;
        $scope.traitdata = TRAITDATA;
    })
    .controller("MainCtrl", function($scope) {
        $scope.collapseIt = function(id){
        $scope.collapseId = ($scope.collapseId==id)?-1:id;}
    })
    .controller('RegisterController', function(
        $scope, UserAPIService, store) {
        $scope.registrationUser = {};
        var URL = "https://morning-castle-91468.herokuapp.com/";

        $scope.login = function() {
            UserAPIService.callAPI(URL + "accounts/api-token-auth/",
                $scope.data).then(function(results) {
                $scope.token = results.data.token;
                store.set('username',
                    $scope.registrationUser.username);
                store.set('authToken',
                    $scope.token);
                })
                .catch(function(err) {
                    console.log(err.data);
                });
        }
        $scope.submitForm = function() {
            if ($scope.registrationForm.$valid) {
                $scope.registrationUser.username = $scope.user.username;
                $scope.registrationUser.password = $scope.user.password;

                UserAPIService.callAPI(URL + "accounts/register/", $scope.registrationUser).then(function(results) {
                    $scope.data = results.data;
                    alert("You have successfully registered to Sims4Pal");
                    $scope.login();
                })
                    .catch(function(err) {
                        alert("Registration failed, please try again with another username.");
                    });
            }
        };
    });

       
