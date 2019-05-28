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
        name: "Rey", hp: 100, attack: 30, counterAttack: 20, initialAttack: 30
    };
    var kyloStats = {
        name: "Kylo Ren", hp: 130, attack: 20, counterAttack: 10, initialAttack: 20
    };
    var vaderStats = {
        name: " Darth Vader", hp: 150, attack: 50, counterAttack: 40, initialAttack: 50
    };
    var bobaStats = {
        name: "Boba Fett", hp: 120, attack: 30, counterAttack: 30, initialAttack: 30
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
    $("#paragraph").text("Select your Warrior!");

    function moveImages(character) {
        character.on("click", function () {
            //$(this).animate({ top: "+=200px" }, "fast");
            console.log(this.id);

            if (this.id === "rey" && count === 0) {
                $(".imageKylo").animate({ left: "0px", top: "+=200px" }, "fast");
                $("#kyloText").animate({ left: "-125px", top: "+=200px" }, "fast");
                $(".imageBoba").animate({ left: "150px", top: "+=200px" }, "fast");
                $("#bobaText").animate({ left: "-125px", top: "+=200px" }, "fast");
                $(".imageVader").animate({ left: "305px", top: "+=200px" }, "fast");
                $("#vaderText").animate({ left: "-125px", top: "+=200px" }, "fast");
                count++;
                $("#headline").text("");
                $("#paragraph").text("You have selected Rey. Select your Opponent.");
                yourCharacter = reyStats;
                console.log(yourCharacter);


            }
            else if (this.id === "kylo" && count === 0) {
                $(".imageRey").animate({ left: "0px", top: "+=200px" }, "fast");
                $("#reyText").animate({ left: "15px", top: "+=200px" }, "fast");
                $(".imageBoba").animate({ left: "148px", top: "+=200px" }, "fast");
                $("#bobaText").animate({ left: "-115px", top: "+=200px" }, "fast");
                $(".imageVader").animate({ left: "296px", top: "+=200px" }, "fast");
                $("#vaderText").animate({ left: "-120px", top: "+=200px" }, "fast");
                $(".imageKylo").animate({ left: "0px" }, "fast");
                $("#kyloText").animate({ left: "-130px" }, "fast");
                count++;
                $("#headline").text("");
                $("#paragraph").text("You have selected Kylo Ren. Select your Opponent.");
                yourCharacter = kyloStats;
            }
            else if (this.id === "boba" && count === 0) {
                $(".imageRey").animate({ left: "15px", top: "+=200px" }, "fast");
                $("#reyText").animate({ left: "15px", top: "+=200px" }, "fast");
                $(".imageKylo").animate({ left: "160px", top: "+=200px" }, "fast");
                $("#kyloText").animate({ left: "30px", top: "+=200px" }, "fast");
                $(".imageVader").animate({ left: "305px", top: "+=200px" }, "fast");
                $("#vaderText").animate({ left: "-115px", top: "+=200px" }, "fast");
                $(".imageBoba").animate({ left: "15px" }, "fast");
                $("#bobaText").animate({ left: "-250px" }, "fast");
                count++;
                $("#headline").text("");
                $("#paragraph").text("You have selected Boba Fett. Select your Opponent.");
                yourCharacter = bobaStats;
            }
            else if (this.id === "vader" && count === 0) {
                $(".imageRey").animate({ left: "15px", top: "+=200px" }, "fast");
                $("#reyText").animate({ left: "15px", top: "+=200px" }, "fast");
                $(".imageKylo").animate({ left: "160px", top: "+=200px" }, "fast");
                $("#kyloText").animate({ left: "15px", top: "+=200px" }, "fast");
                $(".imageBoba").animate({ left: "305px", top: "+=200px" }, "fast");
                $("#bobaText").animate({ left: "50px", top: "+=200px" }, "fast");
                $(".imageVader").animate({ left: "15px" }, "fast");
                $("#vaderText").animate({ left: "-400px" }, "fast");
                count++;
                $("#headline").text("");
                $("#paragraph").text("You have selected Darth Vader. Select your Opponent.");
                yourCharacter = vaderStats;
            }
            else if (this.id === "rey" && count === 1) {
                $(".imageRey").animate({ left: "0px", top: "+=200px" }, "fast");
                $("#reyText").animate({ left: "0px", top: "+=200px" }, "fast");
                $("#paragraph").text("You have selected Rey to fight!");
                defender = reyStats;
            }
            else if (this.id === "kylo" && count === 1) {
                $(".imageKylo").animate({ left: "15px", top: "+=200px" }, "fast");
                $("#kyloText").animate({ left: "-140px", top: "+=200px" }, "fast");
                $("#paragraph").text("You have selected Kylo Ren to fight!");
                defender = kyloStats;
                console.log(defender);
            }
            else if (this.id === "boba" && count === 1) {
                $(".imageBoba").animate({ left: "0px", top: "+=200px" }, "fast");
                $("#bobaText").animate({ left: "-280px", top: "+=200px" }, "fast");
                $("#paragraph").text("You have selected Boba to fight!");
                defender = bobaStats;
            }
            else if (this.id === "vader" && count === 1) {
                $(".imageVader").animate({ left: "0px", top: "+=200px" }, "fast");
                $("#vaderText").animate({ left: "-420px", top: "+=200px" }, "fast");
                $("#paragraph").text("You have selected Darth Vader to fight!");
                defender = vaderStats;
            }
        })
    }

    moveImages(rey);
    moveImages(kylo);
    moveImages(boba);
    moveImages(vader);


    $("#attackButton").on("click", function () {
        yourCharacter.hp = yourCharacter.hp - defender.counterAttack;
        defender.hp = defender.hp - yourCharacter.attack;
        yourCharacter.attack = yourCharacter.attack + yourCharacter.initialAttack;
        $("#paragraph").html(yourCharacter.name + " attacked for " + yourCharacter.attack + "<br/>" + defender.name + " attacked for " + defender.counterAttack);
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
        if (yourCharacter.hp < 0) {                                 //check for lost
            alert("You Lose!");
        }
        else if (defender.hp < 0) {
            $("#paragraph").text("Select a new Defender");          //check if you defeated 1st enemy
        }
    });


});




    
   
    
