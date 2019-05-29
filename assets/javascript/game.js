$(document).ready(function () {

    var rey = $(".imageRey");
    var kylo = $(".imageKylo");
    var boba = $(".imageBoba");
    var vader = $(".imageVader");
    var count = 0;

    var yourCharacter = {
        name: "", hp: 0, attack: 0, counterAttack: 0, initialAttack: 0
    };
    var defender = {
        name: "", hp: 0, attack: 0, counterAttack: 0, initialAttack: 0
    };
    var reyStats = {
        name: "rey", hp: 110, attack: 30, counterAttack: 20, initialAttack: 30
    };
    var bobaStats = {
        name: "boba", hp: 130, attack: 20, counterAttack: 10, initialAttack: 20
    };
    var vaderStats = {
        name: "vader", hp: 150, attack: 30, counterAttack: 40, initialAttack: 30
    };
    var kyloStats = {
        name: "kylo", hp: 120, attack: 30, counterAttack: 20, initialAttack: 30
    };

    function updateReyHP(hp) {
        $("#reyText").text("REY: " + reyStats.hp + " HP");
    };
    function updateKyloHP(hp) {
        $("#kyloText").text("KYLO: " + kyloStats.hp + " HP");
    };
    function updateBobaHP(hp) {
        $("#bobaText").text("BOBA: " + bobaStats.hp + " HP");
    };
    function updateVaderHP(hp) {
        $("#vaderText").text("VADER: " + vaderStats.hp + " HP");
    };
    updateReyHP(reyStats.hp);
    updateKyloHP(kyloStats.hp);
    updateBobaHP(bobaStats.hp);
    updateVaderHP(vaderStats.hp);
    $("#paragraph").text("Select your Champion!");
    $("#attackButton").hide();

    function hideLoser(hero) {
        if (hero == rey) {
            $(".imageRey").remove();
            $("#reyText").remove();
        }
        else if (hero == kylo) {
            $(".imageKylo").hide();
            $("#kyloText").hide();
        }
        else if (hero == boba) {
            $(".imageBoba").hide();
            $("#bobaText").hide();
        }
        else if (hero == vader) {
            $(".imageVader").hide();
            $("#vaderText").hide();
        }
    }

    function moveImages(character) {
        character.on("click", function () {

            if (this.id === "rey" && count === 0) {
                $(".imageKylo").animate({ left: "-=146px", top: "+=200px" }, "fast");

                $("#kyloText").animate({ left: "-=146px", top: "+=200px" }, "fast");
                $(".imageBoba").animate({ left: "-=146px", top: "+=200px" }, "fast");
                $("#bobaText").animate({ left: "-=146px", top: "+=200px" }, "fast");
                $(".imageVader").animate({ left: "-=146px", top: "+=200px" }, "fast");
                $("#vaderText").animate({ left: "-=146px", top: "+=200px" }, "fast");
                count++;
                $("#headline").text("");
                $("#paragraph").html("You have selected Rey. <br/> Select your Opponent.");
                yourCharacter = reyStats;

            }
            else if (this.id === "kylo" && count === 0) {
                $(".imageRey").animate({ left: "0px", top: "+=200px" }, "fast");
                $("#reyText").animate({ left: "0px", top: "+=200px" }, "fast");
                $(".imageBoba").animate({ left: "-=146px", top: "+=200px" }, "fast");
                $("#bobaText").animate({ left: "-=146px", top: "+=200px" }, "fast");
                $(".imageVader").animate({ left: "-=146px", top: "+=200px" }, "fast");
                $("#vaderText").animate({ left: "-=146px", top: "+=200px" }, "fast");
                $(".imageKylo").animate({ left: "0px" }, "fast");
                $("#kyloText").animate({ left: "-=146px" }, "fast");
                count++;
                $("#headline").text("");
                $("#paragraph").html("You have selected Kylo Ren. <br/> Select your Opponent.");
                yourCharacter = kyloStats;
            }
            else if (this.id === "boba" && count === 0) {
                $(".imageRey").animate({ left: "0px", top: "+=200px" }, "fast");
                $("#reyText").animate({ left: "+=0px", top: "+=200px" }, "fast");
                $(".imageKylo").animate({ left: "+=0px", top: "+=200px" }, "fast");
                $("#kyloText").animate({ left: "+=0px", top: "+=200px" }, "fast");
                $(".imageVader").animate({ left: "-=146px", top: "+=200px" }, "fast");
                $("#vaderText").animate({ left: "-=146px", top: "+=200px" }, "fast");
                $(".imageBoba").animate({ left: "0px" }, "fast");
                $("#bobaText").animate({ left: "-=292px" }, "fast");
                count++;
                $("#headline").text("");
                $("#paragraph").html("You have selected Boba Fett. <br/> Select your Opponent.");
                yourCharacter = bobaStats;
            }
            else if (this.id === "vader" && count === 0) {
                $(".imageRey").animate({ left: "0px", top: "+=200px" }, "fast");
                $("#reyText").animate({ left: "+=0px", top: "+=200px" }, "fast");
                $(".imageKylo").animate({ left: "+=0px", top: "+=200px" }, "fast");
                $("#kyloText").animate({ left: "+=0px", top: "+=200px" }, "fast");
                $(".imageBoba").animate({ left: "+=0px", top: "+=200px" }, "fast");
                $("#bobaText").animate({ left: "+=0px", top: "+=200px" }, "fast");
                $(".imageVader").animate({ left: "0px" }, "fast");
                $("#vaderText").animate({ left: "-=438px" }, "fast");
                count++;
                $("#headline").text("");
                $("#paragraph").html("You have selected Darth Vader. <br/> Select your Opponent.");
                yourCharacter = vaderStats;
            }
            else if (this.id === "rey" && (yourCharacter.name === vaderStats.name) && count === 1) {
                $(".imageRey").animate({ left: "0px", top: "+=200px" }, "fast");
                $("#reyText").animate({ left: "+=0px", top: "+=200px" }, "fast");
                $("#paragraph").text("You have selected Rey to fight!");
                defender = reyStats;
                count++;
                $("#attackButton").show();
            }

            else if (this.id === "kylo" && (yourCharacter.name === vaderStats.name) && count === 1) {          //correct alignment issue on display
                $(".imageKylo").animate({ left: "+=0px", top: "+=200px" }, "fast");
                $("#kyloText").animate({ left: "+=0px", top: "+=200px" }, "fast");
                $("#paragraph").text("You have selected Kylo Ren to fight!");
                defender = kyloStats;
                $("#attackButton").show();
                count++;
            }

            else if (this.id === "boba" && (yourCharacter.name === vaderStats.name) && count === 1) {
                $(".imageBoba").animate({ left: "+=0px", top: "+=200px" }, "fast");
                $("#bobaText").animate({ left: "+=0px", top: "+=200px" }, "fast");
                $("#paragraph").text("You have selected Boba Fett to fight!");
                defender = bobaStats;
                $("#attackButton").show();
            }
            else if (this.id === "boba" && count === 2) {
                $(this).animate({ left: "+=0px", top: "+=200px" });
                $("#bobaText").animate({ left: "+=0px", top: "+=200px" }, "fast");
                $("#paragraph").text("You have selected Boba Fett to fight!");
                defender = bobaStats;
                $("#attackButton").show();

            }
            else if (this.id === "kylo" && count === 2) {
                $(this).animate({ left: "+=0px", top: "+=200px" });
                $("#kyloText").animate({ left: "+=0px", top: "+=200px" }, "fast");
                $("#paragraph").text("You have selected Kylo Ren to fight!");
                defender = kyloStats;
                $("#attackButton").show();
            }
            else if (this.id === "rey" && count === 2) {
                $(this).animate({ left: "+=0px", top: "+=200px" });
                $("#reyText").animate({ left: "+=0px", top: "+=200px" }, "fast");
                $("#paragraph").text("You have selected Rey to fight!");
                defender = reyStats;
                $("#attackButton").show();
            }
            else if (this.id === "vader" && count === 2) {
                $(this).animate({ left: "+=0px", top: "+=200px" });
                $("#vaderText").animate({ left: "+=0px", top: "+=200px" }, "fast");
                $("#paragraph").text("You have selected Darth Vader to fight!");
                defender = vaderStats;
                $("#attackButton").show();
            }
            else if (this.id === "kylo" && (yourCharacter.name === reyStats.name) && count === 1) {
                $(".imageKylo").animate({ left: "+=0px", top: "+=200px" }, "fast");
                $("#kyloText").animate({ left: "+=0px", top: "+=200px" }, "fast");
                $("#paragraph").text("You have selected Kylo Ren to fight!");
                defender = kyloStats;
                count++;
                $("#attackButton").show();
            }
            else if (this.id === "boba" && (yourCharacter.name === reyStats.name) && count === 1) {
                $(".imageBoba").animate({ left: "+=0px", top: "+=200px" }, "fast");
                $("#bobaText").animate({ left: "+=0px", top: "+=200px" }, "fast");
                $("#paragraph").text("You have selected Boba Fett to fight!");
                defender = bobaStats;
                count++;
                $("#attackButton").show();
            }
            else if (this.id === "vader" && (yourCharacter.name === reyStats.name) && count === 1) {
                $(".imageVader").animate({ left: "+=0px", top: "+=200px" }, "fast");
                $("#vaderText").animate({ left: "+=0px", top: "+=200px" }, "fast");
                $("#paragraph").text("You have selected Darth Vader to fight!");
                defender = vaderStats;
                count++;
                $("#attackButton").show();
            }
            else if (this.id === "vader" && (yourCharacter.name === kyloStats.name) && count === 1) {
                $(".imageVader").animate({ left: "+=0px", top: "+=200px" }, "fast");
                $("#vaderText").animate({ left: "+=0px", top: "+=200px" }, "fast");
                $("#paragraph").text("You have selected Darth Vader to fight!");
                defender = vaderStats;
                count++;
                $("#attackButton").show();
            }
            else if (this.id === "boba" && (yourCharacter.name === kyloStats.name) && count === 1) {
                $(".imageBoba").animate({ left: "+=0px", top: "+=200px" }, "fast");
                $("#bobaText").animate({ left: "+=0px", top: "+=200px" }, "fast");
                $("#paragraph").text("You have selected Boba Fett to fight!");
                defender = bobaStats;
                count++;
                $("#attackButton").show();
            }
            else if (this.id === "rey" && (yourCharacter.name === kyloStats.name) && count === 1) {
                $(".imageRey").animate({ left: "+=0px", top: "+=200px" }, "fast");
                $("#reyText").animate({ left: "+=0px", top: "+=200px" }, "fast");
                $("#paragraph").text("You have selected Rey to fight!");
                defender = reyStats;
                count++;
                $("#attackButton").show();
            }
            else if (this.id === "rey" && (yourCharacter.name === bobaStats.name) && count === 1) {
                $(".imageRey").animate({ left: "+=0px", top: "+=200px" }, "fast");
                $("#reyText").animate({ left: "+=0px", top: "+=200px" }, "fast");
                $("#paragraph").text("You have selected Rey to fight!");
                defender = reyStats;
                count++;
                $("#attackButton").show();
            }
            else if (this.id === "kylo" && (yourCharacter.name === bobaStats.name) && count === 1) {
                $(".imageKylo").animate({ left: "+=0px", top: "+=200px" }, "fast");
                $("#kyloText").animate({ left: "+=0px", top: "+=200px" }, "fast");
                $("#paragraph").text("You have selected Kylo Ren to fight!");
                defender = kyloStats;
                count++;
                $("#attackButton").show();
            }
            else if (this.id === "vader" && (yourCharacter.name === bobaStats.name) && count === 1) {
                $(".imageVader").animate({ left: "+=0px", top: "+=200px" }, "fast");
                $("#vaderText").animate({ left: "+=0px", top: "+=200px" }, "fast");
                $("#paragraph").text("You have selected Darth Vader to fight!");
                defender = vaderStats;
                count++;
                $("#attackButton").show();
            }
           
        })
    }

    moveImages(rey);
    moveImages(kylo);
    moveImages(boba);
    moveImages(vader);

    var numOfRemainingOpponents = 2;

    $("#attackButton").on("click", function () {
        yourCharacter.hp = yourCharacter.hp - defender.counterAttack;
        defender.hp = defender.hp - yourCharacter.attack;

        $("#paragraph").html(yourCharacter.name + " attacked for " + yourCharacter.attack + "<br/>" + defender.name + " attacked for " + defender.counterAttack);
        yourCharacter.attack = yourCharacter.attack + yourCharacter.initialAttack;
        if (yourCharacter.name === reyStats.name) {
            reyStats.hp = yourCharacter.hp;
        }
        else if (yourCharacter.name === kyloStats.name) {
            kyloStats.hp = yourCharacter.hp;
        }
        else if (yourCharacter.name === bobaStats.hp) {
            bobaStats.hp = yourCharacter.hp;

        }
        else if (yourCharacter.name === vaderStats.name) {
            vaderStats.hp = yourCharacter.hp;
        }
        updateReyHP(reyStats.hp);
        updateKyloHP(kyloStats.hp);
        updateBobaHP(bobaStats.hp);
        updateVaderHP(vaderStats.hp);
        if (yourCharacter.hp <= 0) {                                 //check for lost
            $("#paragraph").html("You tried your best and failed. You lose! 😭");
            $("#attackButton").hide();
        }
        else if ((defender.hp <= 0) && (numOfRemainingOpponents > 0)) {
            $("#paragraph").html("You Won! </br> Select a new Defender");          //check if you defeated 1st enemy
            //numOfRemainingOpponents--;
            $("#attackButton").hide();
            //alert(numOfRemainingOpponents);
        }
        else if ((defender.hp <= 0) && (numOfRemainingOpponents === 0)) {
            $("#paragraph").html("You Won! You are now the Emperor of the Galaxy");
            $("#attackButton").hide();
        }

        if ((defender.hp <= 0) && (defender.name === "rey")) {
            hideLoser(rey);
            numOfRemainingOpponents--;
        }
        else if ((defender.hp <= 0)  && (defender.name === "kylo")) {
            hideLoser(kylo);
            numOfRemainingOpponents--;
        }
        else if ((defender.hp <= 0)  && (defender.name === "boba")) {
            hideLoser(boba);
            numOfRemainingOpponents--;
        }
        else if ((defender.hp <= 0)  && (defender.name === "vader")) {
            hideLoser(vader);
            numOfRemainingOpponents--;
        }
    });




});







