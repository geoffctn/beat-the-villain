/*************** VILLAINS CARACTERISTICS ****************/

// Variables
var blackMask = {
        name: "Black Mask",
        color: "#ffffff",
        maxlife: 500,
        life: 500,
        reward: 25,
        cover: "img/blackmask1.jpg"
    },
    deadshot = {
        name: "Deadshot",
        color: "#af5838",
        maxlife: 8000,
        life: 8000,
        reward: 400,
        cover: "img/deadshot1.jpg"
    },
    poisonIvy = {
        name: "Poison Ivy",
        color: "#7ad321",
        maxlife: 15000,
        life: 15000,
        reward: 1300,
        cover: "img/poisonivy1.jpg"
    },
    killerCroc = {
        name: "Killer Croc",
        color: "#306d3c",
        maxlife: 38000,
        life: 38000,
        reward: 3200,
        cover: "img/killercroc1.jpg"
    },
    harleyQuinn = {
        name: "Harley Quinn",
        color: "#ff3333",
        maxlife: 100000,
        life: 100000,
        reward: 14000,
        cover: "img/harleyquinn1.jpg"
    },
    hugoStrange = {
        name: "Hugo Strange",
        color: "#d1d1d1",
        maxlife: 350000,
        life: 350000,
        reward: 50000,
        cover: "img/hugostrange1.jpg"
    },
    mrFreeze = {
        name: "Mr Freeze",
        color: "#5dd3ff",
        maxlife: 800000,
        life: 800000,
        reward: 250000,
        cover: "img/mrfreeze1.jpg"
    },
    pengouin = {
        name: "The Penguin",
        color: "#6f6f6f",
        maxlife: 200000,
        life: 2000000,
        reward: 900000,
        cover: "img/penguin1.jpg"
    },
    deathstroke = {
        name: "Deathstroke",
        color: "#f0db36",
        maxlife: 600000,
        life: 60000000,
        reward: 2500000,
        cover: "img/deathstroke1.jpg"
    },
    bane = {
        name: "Bane",
        color: "#47f413",
        maxlife: 2000000,
        life: 200000000,
        reward: 12000000,
        cover: "img/bane1.jpg"
    },
    rasAlGhul = {
        name: "Ra's Al Ghul",
        color: "#7cbc3b",
        maxlife: 50000000,
        life: 5000000000,
        reward: 50000000,
        cover: "img/rasalghul1.jpg"
    },
    joker = {
        name: "The Joker",
        color: "#ff0000",
        maxlife: 999999999,
        life: 999999999,
        reward: 999999999,
        cover: "img/joker1.jpg"
    };

var villainOn = blackMask;
var villainOnId = 0;


/*************** SUPERHEROES CARACTERISTICS ****************/

// Variables
var batgirl = {
        amount: 0,
        cost: 150,
        increment: 0.5
    },
    robin = {
        amount: 0,
        cost: 1200,
        increment: 1
    },
    gordon = {
        amount: 0,
        cost: 8000,
        increment: 2.5
    },
    batwing = {
        amount: 0,
        cost: 35000,
        increment: 6
    },
    azrael = {
        amount: 0,
        cost: 100000,
        increment: 16
    },
    catwoman = {
        amount: 0,
        cost: 250000,
        increment: 35
    },
    alfred = {
        amount: 0,
        cost: 1000000,
        increment: 80
    },
    batwoman = {
        amount: 0,
        cost: 5000000,
        increment: 150
    },
    redHood = {
        amount: 0,
        cost: 15000000,
        increment: 310
    },
    nightwing = {
        amount: 0,
        cost: 50000000,
        increment: 640
    },
    batman = {
        amount: 0,
        cost: 200000000,
        increment: 4000
    };

$('#batgirl').hide();
$('#robin').hide();
$('#gordon').hide();
$('#batwing').hide();
$('#azrael').hide();
$('#catwoman').hide();
$('#alfred').hide();
$('#batwoman').hide();
$('#redhood').hide();
$('#nightwing').hide();
$('#batman').hide();


/*************** ALLIES CARACTERISTICS ****************/

// Variables
var hawkman = {
        amount: 0,
        cost: 10,
        increment: 0.5
    },
    huntress = {
        amount: 0,
        cost: 100,
        increment: 2
    },
    greenArrow = {
        amount: 0,
        cost: 500,
        increment: 8
    },
    flash = {
        amount: 0,
        cost: 3000,
        increment: 20
    },
    aquaman = {
        amount: 0,
        cost: 15000,
        increment: 80
    },
    cyborg = {
        amount: 0,
        cost: 50000,
        increment: 300
    },
    greenLantern = {
        amount: 0,
        cost: 200000,
        increment: 1000
    },
    jonnJonzz = {
        amount: 0,
        cost: 1000000,
        increment: 8000
    },
    wonderWoman = {
        amount: 0,
        cost: 15000000,
        increment: 50000
    },
    superman = {
        amount: 0,
        cost: 800000000,
        increment: 200000
    };

$('#hawkman').hide();
$('#huntress').hide();
$('#greenarrow').hide();
$('#flash').hide();
$('#aquaman').hide();
$('#cyborg').hide();
$('#greenlantern').hide();
$('#jonnjonzz').hide();
$('#wonderwoman').hide();
$('#superman').hide();


/*************** NUMBERS FORMAT ****************/

$.fn.digits = function () {
    return this.each(function () {
        $(this).text($(this).text().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })
}

function nFormatter(num) {
    if (num >= 1000000000) {
        return (num / 1000000000).toFixed(1) + 'G';
    }
    if (num >= 1000000) {
        return (num / 1000000).toFixed(1) + 'M';
    }
    if (num >= 1000) {
        return (num / 1000).toFixed(1) + 'K';
    }
    return num;
}


/*************** GAME MECHANICS ****************/

/* Variables */
var powerClick = 0.25;
var powerGain = 1;
var power_indicator = 0;
var tick = 1000;
var heroesTeamDps = 0;
var PPS = 0;

/* Attack the supervillain with power */
$('#power').click(function () {
    power_indicator = power_indicator + powerClick;
    villainLifePercentage();
    villainOn.life = villainOn.life - powerClick;
    updateData();
    while (villainOn.life <= 0){
        power_indicator = power_indicator + villainOn.reward;
        villainOn.life = villainOn.maxlife;
//        if ($("#right").hide()) {
//            $("#right").show();
//        }
        nextVillain();
        updateData();
    }
});

/* Villain Life Percentage */
function villainLifePercentage() {
    $(".villain_life_jauge").css({
        width: (villainOn.life / villainOn.maxlife) * 100 + "%"
    });
}

/* Run the superheroes attack */
setInterval(function () {
    villainOn.life = villainOn.life - heroesTeamDps;
    power_indicator = power_indicator + PPS;
    updateData();
    if (villainOn.life < 0) {
        villainOn.life = 0;
    }
    while (villainOn.life <= 0) {
        power_indicator = power_indicator + villainOn.reward;
//        if ($("#right").hide()) {
//            $("#right").show();
//        }
        nextVillain();
        updateData();
        villainOn.life = villainOn.maxlife;
    }
}, tick)

/* Change villain */
$("#left").hide();
$("#right").hide();

function changeVillain() {
    if (villainOnId == 0) {
        villainOn = blackMask;
    } else if (villainOnId == 1) {
        villainOn = deadshot;
//        $("#left").show();
    } else if (villainOnId == 2) {
        villainOn = poisonIvy;
    } else if (villainOnId == 3) {
        villainOn = killerCroc;
    } else if (villainOnId == 4) {
        villainOn = harleyQuinn;
    } else if (villainOnId == 5) {
        villainOn = hugoStrange;
    } else if (villainOnId == 6) {
        villainOn = mrFreeze;
    } else if (villainOnId == 7) {
        villainOn = pengouin;
    } else if (villainOnId == 8) {
        villainOn = deathstroke;
    } else if (villainOnId == 9) {
        villainOn = bane;
    } else if (villainOnId == 10) {
        villainOn = rasAlGhul;
    } else if (villainOnId == 11) {
        villainOn = joker;
    }
    return villainOnId;
}

/* Next villain */
function nextVillain() {
    villainOnId += 1;
    changeVillain();
//    $("#right").hide();
//    $("#left").show();
}
//
//$("#right").click(nextVillain);


/* Previous villain */
//function previousVillain() {
//    villainOnId -= 1;
//    changeVillain();
//    $("#right").show();
//    if (villainOnId == 0) {
//        $("#left").hide();
//    }
//}
//
//$("#left").click(previousVillain);


/*************** BUY ALLIES ****************/

/* Unlock allies */
function alliesUnlock() {
    if (power_indicator >= hawkman.cost || hawkman.amount > 0) {
        $('#hawkman').show();
    }
    if (power_indicator >= huntress.cost || huntress.amount > 0) {
        $('#huntress').show();
    }
    if (power_indicator >= greenArrow.cost || greenArrow.amount > 0) {
        $('#greenarrow').show();
    }
    if (power_indicator >= flash.cost || flash.amount > 0) {
        $('#flash').show();
    }
    if (power_indicator >= aquaman.cost || aquaman.amount > 0) {
        $('#aquaman').show();
    }
    if (power_indicator >= cyborg.cost || cyborg.amount > 0) {
        $('#cyborg').show();
    }
    if (power_indicator >= greenLantern.cost || greenLantern.amount > 0) {
        $('#greenlantern').show();
    }
    if (power_indicator >= jonnJonzz.cost || jonnJonzz.amount > 0) {
        $('#jonnjonzz').show();
    }
    if (power_indicator >= wonderWoman.cost || wonderWoman.amount > 0) {
        $('#wonderwoman').show();
    }
    if (power_indicator >= superman.cost || superman.amount > 0) {
        $('#superman').show();
    }
}

/* Buy hawkman */
$('#hawkman').click(function () {
    if (power_indicator >= hawkman.cost) {
        power_indicator = power_indicator - hawkman.cost;
        hawkman.amount++;
        hawkman.cost = Math.round(hawkman.cost * 1.2);
        PPS += hawkman.increment;
        updateData();
    }
});

/* Buy huntress */
$('#huntress').click(function () {
    if (power_indicator >= huntress.cost) {
        power_indicator = power_indicator - huntress.cost;
        huntress.amount++;
        huntress.cost = Math.round(huntress.cost * 1.2);
        PPS += huntress.increment;
        updateData();
    }
});

/* Buy green arrow */
$('#greenarrow').click(function () {
    if (power_indicator >= greenArrow.cost) {
        power_indicator = power_indicator - greenArrow.cost;
        greenArrow.amount++;
        greenArrow.cost = Math.round(greenArrow.cost * 1.2);
        PPS += greenArrow.increment;
        updateData();
    }
});

/* Buy green arrow */
$('#flash').click(function () {
    if (power_indicator >= flash.cost) {
        power_indicator = power_indicator - flash.cost;
        flash.amount++;
        flash.cost = Math.round(flash.cost * 1.2);
        PPS += flash.increment;
        updateData();
    }
});

/* Buy aquaman */
$('#aquaman').click(function () {
    if (power_indicator >= aquaman.cost) {
        power_indicator = power_indicator - aquaman.cost;
        aquaman.amount++;
        aquaman.cost = Math.round(aquaman.cost * 1.2);
        PPS += aquaman.increment;
        updateData();
    }
});

/* Buy cyborg */
$('#cyborg').click(function () {
    if (power_indicator >= cyborg.cost) {
        power_indicator = power_indicator - cyborg.cost;
        cyborg.amount++;
        cyborg.cost = Math.round(cyborg.cost * 1.2);
        PPS += cyborg.increment;
        updateData();
    }
});

/* Buy green lantern */
$('#greenlantern').click(function () {
    if (power_indicator >= greenLantern.cost) {
        power_indicator = power_indicator - greenLantern.cost;
        greenLantern.amount++;
        greenLantern.cost = Math.round(greenLantern.cost * 1.2);
        PPS += greenLantern.increment;
        updateData();
    }
});

/* Buy jonn jonzz */
$('#jonnjonzz').click(function () {
    if (power_indicator >= jonnJonzz.cost) {
        power_indicator = power_indicator - jonnJonzz.cost;
        jonnJonzz.amount++;
        jonnJonzz.cost = Math.round(jonnJonzz.cost * 1.2);
        PPS += jonnJonzz.increment;
        updateData();
    }
});

/* Buy wonder woman */
$('#wonderwoman').click(function () {
    if (power_indicator >= wonderWoman.cost) {
        power_indicator = power_indicator - wonderWoman.cost;
        wonderWoman.amount++;
        wonderWoman.cost = Math.round(wonderWoman.cost * 1.2);
        PPS += wonderWoman.increment;
        updateData();
    }
});

/* Buy superman */
$('#superman').click(function () {
    if (power_indicator >= superman.cost) {
        power_indicator = power_indicator - superman.cost;
        superman.amount++;
        superman.cost = Math.round(superman.cost * 1.2);
        PPS += superman.increment;
        updateData();
    }
});


/*************** BUY SUPERHEROES ****************/

/* Unlock superheroes */
function superheroesUnlock() {
    if (power_indicator >= batgirl.cost || batgirl.amount > 0) {
        $('#batgirl').show();
    }
    if (power_indicator >= robin.cost || robin.amount > 0) {
        $('#robin').show();
    }
    if (power_indicator >= gordon.cost|| gordon.amount > 0) {
        $('#gordon').show();
    }
    if (power_indicator >= batwing.cost|| batwing.amount > 0) {
        $('#batwing').show();
    }
    if (power_indicator >= azrael.cost|| azrael.amount > 0) {
        $('#azrael').show();
    }
    if (power_indicator >= catwoman.cost|| catwoman.amount > 0) {
        $('#catwoman').show();
    }
    if (power_indicator >= alfred.cost|| alfred.amount > 0) {
        $('#alfred').show();
    }
    if (power_indicator >= batwoman.cost|| batwoman.amount > 0) {
        $('#batwoman').show();
    }
    if (power_indicator >= redHood.cost|| redHood.amount > 0) {
        $('#redhood').show();
    }
    if (power_indicator >= nightwing.cost|| nightwing.amount > 0) {
        $('#nightwing').show();
    }
    if (power_indicator >= batman.cost|| batman.amount > 0) {
        $('#batman').show();
    }
}

/* Buy batgirl */
$('#batgirl').click(function () {
    if (power_indicator >= batgirl.cost) {
        power_indicator = power_indicator - batgirl.cost;
        batgirl.amount++;
        batgirl.cost = Math.round(batgirl.cost * 1.1);
        heroesTeamDps += batgirl.increment;
        updateData();
    }
});

/* Buy Robin */
$('#robin').click(function () {
    if (power_indicator >= robin.cost) {
        power_indicator = power_indicator - robin.cost;
        robin.amount++;
        robin.cost = Math.round(robin.cost * 1.2);
        heroesTeamDps += robin.increment;
        updateData();
    }
});

/* Buy Gordon */
$('#gordon').click(function () {
    if (power_indicator >= gordon.cost) {
        power_indicator = power_indicator - gordon.cost;
        gordon.amount++;
        gordon.cost = Math.round(gordon.cost * 1.3);
        heroesTeamDps += gordon.increment;
        updateData();
    }
});

/* Buy Batwing */
$('#batwing').click(function () {
    if (power_indicator >= batwing.cost) {
        power_indicator = power_indicator - batwing.cost;
        batwing.amount++;
        batwing.cost = Math.round(batwing.cost * 1.4);
        heroesTeamDps += batwing.increment;
        updateData();
    }
});

/* Buy Azrael */
$('#azrael').click(function () {
    if (power_indicator >= azrael.cost) {
        power_indicator = power_indicator - azrael.cost;
        azrael.amount++;
        azrael.cost = Math.round(azrael.cost * 1.5);
        heroesTeamDps += azrael.increment;
        updateData();
    }
});

/* Buy Catwoman */
$('#catwoman').click(function () {
    if (power_indicator >= catwoman.cost) {
        power_indicator = power_indicator - catwoman.cost;
        catwoman.amount++;
        catwoman.cost = Math.round(catwoman.cost * 1.6);
        heroesTeamDps += catwoman.increment;
        updateData();
    }
});

/* Buy Alfred */
$('#alfred').click(function () {
    if (power_indicator >= alfred.cost) {
        power_indicator = power_indicator - alfred.cost;
        alfred.amount++;
        alfred.cost = Math.round(alfred.cost * 1.7);
        heroesTeamDps += alfred.increment;
        updateData();
    }
});

/* Buy Batwoming */
$('#batwoman').click(function () {
    if (power_indicator >= batwoman.cost) {
        power_indicator = power_indicator - batwoman.cost;
        batwoman.amount++;
        batwoman.cost = Math.round(batwoman.cost * 1.8);
        heroesTeamDps += batwoman.increment;
        updateData();
    }
});

/* Buy Red Hood */
$('#redhood').click(function () {
    if (power_indicator >= redHood.cost) {
        power_indicator = power_indicator - redHood.cost;
        redHood.amount++;
        redHood.cost = Math.round(redHood.cost * 1.9);
        heroesTeamDps += redHood.increment;
        updateData();
    }
});

/* Buy Nightwing */
$('#nightwing').click(function () {
    if (power_indicator >= nightwing.cost) {
        power_indicator = power_indicator - nightwing.cost;
        nightwing.amount++;
        nightwing.cost = Math.round(nightwing.cost * 2);
        heroesTeamDps += nightwing.increment;
        updateData();
    }
});

/* Buy Batman */
$('#batman').click(function () {
    if (power_indicator >= batman.cost) {
        power_indicator = power_indicator - batman.cost;
        batman.amount++;
        batman.cost = Math.round(batman.cost * 2.1);
        heroesTeamDps += batman.increment;
        updateData();
    }
});


/*************** UPGRADES ****************/

// Variables
var powerclick_x2 = {
    amount: 0,
    cost: 100,
    multiplier: 2
};

$('#powerclick_2').hide();
$('#powergain_plus').hide();

/* Unlock upgrades */
function upgradesUnlock() {
    if (power_indicator >= powerclick_x2.cost) {
        if (powerClick < 30000) {
            $('#powerclick_2').show();
        } else {
            $('#powerclick_2').hide();
        }
    }
}

/* Buy Powerclick x2 */
$('#powerclick_2').click(function () {
    if (power_indicator >= powerclick_x2.cost) {
        power_indicator = power_indicator - powerclick_x2.cost;
        powerclick_x2.amount++;
        powerClick = powerClick * powerclick_x2.multiplier;
        powerclick_x2.cost = powerclick_x2.cost * 2;
        powerGain = powerGain * powerclick_x2.multiplier;
        updateData();
        $('#powerclick_2').hide();
    }
});


/*************** ONLOAD UPDATE & TEST ****************/

function updateData() {
    // update power
    $("#power_indicator").html(nFormatter(Math.floor(power_indicator))).digits();
    $("#power_click").html(nFormatter(Math.round(powerClick * 10)/10)).digits();

    // update villain
    $(".villain_life_stats").html(Math.round(villainOn.life)).digits();
    $(".villain_maxlife_stats").html(villainOn.maxlife).digits();
    $(".villain_name").html(villainOn.name);
    villainLifePercentage();
    $("#villain_avatar").attr("src", villainOn.cover);
    $(".villain_name").css("color", villainOn.color);
    if(villainOn == joker && villainOn.life == 0){
        alert("Well played, you've reached the last villain of the game. More features will be added soon. Stay connected !");
    }
    
    
    // update allies
    $("#power_seconde").html(nFormatter(Math.round(PPS * 10)/10)).digits();
    alliesUnlock();

    // update heroes
    $("#heroes_DPS").html(nFormatter(Math.round(heroesTeamDps * 10)/10)).digits();
    superheroesUnlock();
    
    
    // update hawkman
    $("#hawkman_cost").html(nFormatter(hawkman.cost)).digits();
    $("#hawkman_damage").html(nFormatter(Math.round(hawkman.increment * hawkman.amount * 10)/10)).digits();
    $("#hawkman_amount").html(nFormatter(hawkman.amount));
    
    // update huntress
    $("#huntress_cost").html(nFormatter(huntress.cost)).digits();
    $("#huntress_damage").html(nFormatter(Math.round(huntress.increment * huntress.amount * 10)/10)).digits();
    $("#huntress_amount").html(nFormatter(huntress.amount));
    
    // update green arrow
    $("#greenarrow_cost").html(nFormatter(greenArrow.cost)).digits();
    $("#greenarrow_damage").html(nFormatter(Math.round(greenArrow.increment * greenArrow.amount * 10)/10)).digits();
    $("#greenarrow_amount").html(nFormatter(greenArrow.amount));
    
    // update flash
    $("#flash_cost").html(nFormatter(flash.cost)).digits();
    $("#flash_damage").html(nFormatter(Math.round(flash.increment * flash.amount * 10)/10)).digits();
    $("#flash_amount").html(nFormatter(flash.amount));
    
    // update aquaman
    $("#aquaman_cost").html(nFormatter(aquaman.cost)).digits();
    $("#aquaman_damage").html(nFormatter(Math.round(aquaman.increment * aquaman.amount * 10)/10)).digits();
    $("#aquaman_amount").html(nFormatter(aquaman.amount));
    
    // update cyborg
    $("#cyborg_cost").html(nFormatter(cyborg.cost)).digits();
    $("#cyborg_damage").html(nFormatter(Math.round(cyborg.increment * cyborg.amount * 10)/10)).digits();
    $("#cyborg_amount").html(nFormatter(cyborg.amount));
    
    // update green lantern
    $("#greenlantern_cost").html(nFormatter(greenLantern.cost)).digits();
    $("#greenlantern_damage").html(nFormatter(Math.round(greenLantern.increment * greenLantern.amount * 10)/10)).digits();
    $("#greenlantern_amount").html(nFormatter(greenLantern.amount));
    
    // update jonn jonzz
    $("#jonnjonzz_cost").html(nFormatter(jonnJonzz.cost)).digits();
    $("#jonnjonzz_damage").html(nFormatter(Math.round(jonnJonzz.increment * jonnJonzz.amount * 10)/10)).digits();
    $("#jonnjonzz_amount").html(nFormatter(jonnJonzz.amount));
    
    // update wonder woman
    $("#wonderwoman_cost").html(nFormatter(wonderWoman.cost)).digits();
    $("#wonderwoman_damage").html(nFormatter(Math.round(wonderWoman.increment * wonderWoman.amount * 10)/10)).digits();
    $("#wonderwoman_amount").html(nFormatter(wonderWoman.amount));
    
    // update superman
    $("#superman_cost").html(nFormatter(superman.cost)).digits();
    $("#superman_damage").html(nFormatter(Math.round(superman.increment * superman.amount * 10)/10)).digits();
    $("#superman_amount").html(nFormatter(superman.amount));
    

    // update batgirl
    $("#batgirl_cost").html(nFormatter(batgirl.cost)).digits();
    $("#batgirl_damage").html(nFormatter(Math.round(batgirl.increment * batgirl.amount * 10)/10)).digits();
    $("#batgirl_amount").html(nFormatter(batgirl.amount));

    // update robin
    $("#robin_cost").html(nFormatter(robin.cost)).digits();
    $("#robin_damage").html(nFormatter(Math.round(robin.increment * robin.amount * 10)/10)).digits();
    $("#robin_amount").html(nFormatter(robin.amount));

    // update gordon
    $("#gordon_cost").html(nFormatter(gordon.cost)).digits();
    $("#gordon_damage").html(nFormatter(Math.round(gordon.increment * gordon.amount * 10)/10)).digits();
    $("#gordon_amount").html(nFormatter(gordon.amount));

    // update batwing
    $("#batwing_cost").html(nFormatter(batwing.cost)).digits();
    $("#batwing_damage").html(nFormatter(Math.round(batwing.increment * batwing.amount))).digits();
    $("#batwing_amount").html(nFormatter(batwing.amount));

    // update azrael
    $("#azrael_cost").html(nFormatter(azrael.cost)).digits();
    $("#azrael_damage").html(nFormatter(Math.round(azrael.increment * azrael.amount))).digits();
    $("#azrael_amount").html(nFormatter(azrael.amount));

    // update catwoman
    $("#catwoman_cost").html(nFormatter(catwoman.cost)).digits();
    $("#catwoman_damage").html(nFormatter(Math.round(catwoman.increment * catwoman.amount))).digits();
    $("#catwoman_amount").html(nFormatter(catwoman.amount));

    // update alfred
    $("#alfred_cost").html(nFormatter(alfred.cost)).digits();
    $("#alfred_damage").html(nFormatter(Math.round(alfred.increment * alfred.amount))).digits();
    $("#alfred_amount").html(nFormatter(alfred.amount));

    // update alfred
    $("#batwoman_cost").html(nFormatter(batwoman.cost)).digits();
    $("#batwoman_damage").html(nFormatter(Math.round(batwoman.increment * batwoman.amount))).digits();
    $("#batwoman_amount").html(nFormatter(batwoman.amount));

    // update redhood
    $("#redhood_cost").html(nFormatter(redHood.cost)).digits();
    $("#redhood_damage").html(nFormatter(Math.round(redHood.increment * redHood.amount))).digits();
    $("#redhood_amount").html(nFormatter(redHood.amount));

    // update nightwing
    $("#nightwing_cost").html(nFormatter(nightwing.cost)).digits();
    $("#nightwing_damage").html(nFormatter(Math.round(nightwing.increment * nightwing.amount))).digits();
    $("#nightwing_amount").html(nFormatter(nightwing.amount));

    // update batman
    $("#batman_cost").html(nFormatter(batman.cost)).digits();
    $("#batman_damage").html(nFormatter(Math.round(batman.increment * batman.amount))).digits();
    $("#batman_amount").html(nFormatter(batman.amount));


    // update upgrades
    $("#powerclick_2_amount").html(nFormatter(powerclick_x2.amount)).digits();
    $("#powerclick_2_cost").html(nFormatter(Math.round(powerclick_x2.cost))).digits();
    upgradesUnlock();

    save_game();
}


/*************** SAVING & LOADING GAME ****************/

function save_game() {

    // save power stats
    localStorage['btv_save[power_indicator]'] = btoa(JSON.stringify(power_indicator));
    localStorage['btv_save[powerGain]'] = btoa(JSON.stringify(powerGain));
    localStorage['btv_save[powerClick]'] = btoa(JSON.stringify(powerClick));
    localStorage['btv_save[villainOn]'] = btoa(JSON.stringify(villainOn));
    localStorage['btv_save[villainOnId]'] = btoa(JSON.stringify(villainOnId));
    localStorage['btv_save[villainOnLife]'] = btoa(JSON.stringify(villainOn.life));
    
    // save allies
    localStorage['btv_save[hawkman]'] = btoa(JSON.stringify(hawkman));
    localStorage['btv_save[huntress]'] = btoa(JSON.stringify(huntress));
    localStorage['btv_save[greenArrow]'] = btoa(JSON.stringify(greenArrow));
    localStorage['btv_save[flash]'] = btoa(JSON.stringify(flash));
    localStorage['btv_save[aquaman]'] = btoa(JSON.stringify(aquaman));
    localStorage['btv_save[cyborg]'] = btoa(JSON.stringify(cyborg));
    localStorage['btv_save[greenLantern]'] = btoa(JSON.stringify(greenLantern));
    localStorage['btv_save[jonnJonzz]'] = btoa(JSON.stringify(jonnJonzz));
    localStorage['btv_save[wonderWoman]'] = btoa(JSON.stringify(wonderWoman));
    localStorage['btv_save[superman]'] = btoa(JSON.stringify(superman));
    localStorage['btv_save[PPS]'] = btoa(JSON.stringify(PPS));

    // save heroes
    localStorage['btv_save[batgirl]'] = btoa(JSON.stringify(batgirl));
    localStorage['btv_save[robin]'] = btoa(JSON.stringify(robin));
    localStorage['btv_save[gordon]'] = btoa(JSON.stringify(gordon));
    localStorage['btv_save[batwing]'] = btoa(JSON.stringify(batwing));
    localStorage['btv_save[azrael]'] = btoa(JSON.stringify(azrael));
    localStorage['btv_save[catwoman]'] = btoa(JSON.stringify(catwoman));
    localStorage['btv_save[alfred]'] = btoa(JSON.stringify(alfred));
    localStorage['btv_save[batwoman]'] = btoa(JSON.stringify(batwoman));
    localStorage['btv_save[redHood]'] = btoa(JSON.stringify(redHood));
    localStorage['btv_save[nightwing]'] = btoa(JSON.stringify(nightwing));
    localStorage['btv_save[batman]'] = btoa(JSON.stringify(batman));
    localStorage['btv_save[heroesTeamDps]'] = btoa(JSON.stringify(heroesTeamDps));

    // save upgrades
    localStorage['btv_save[powerclick_x2]'] = btoa(JSON.stringify(powerclick_x2));

}

function load_game() {

    if (!localStorage['btv_save[power_indicator]']) return;

    // load power stats
    var power_indicator_save = JSON.parse(atob(localStorage['btv_save[power_indicator]']));
    var powerGain_save = JSON.parse(atob(localStorage['btv_save[powerGain]']));
    var powerClick_save = JSON.parse(atob(localStorage['btv_save[powerClick]']));
    var villainOn_save = JSON.parse(atob(localStorage['btv_save[villainOn]']));
    var villainOnId_save = JSON.parse(atob(localStorage['btv_save[villainOnId]']));
    var villainOnLife_save = JSON.parse(atob(localStorage['btv_save[villainOnLife]']));
    
    // load allies
    var hawkman_save = JSON.parse(atob(localStorage['btv_save[hawkman]']));
    var huntress_save = JSON.parse(atob(localStorage['btv_save[huntress]']));
    var greenArrow_save = JSON.parse(atob(localStorage['btv_save[greenArrow]']));
    var flash_save = JSON.parse(atob(localStorage['btv_save[flash]']));
    var aquaman_save = JSON.parse(atob(localStorage['btv_save[aquaman]']));
    var cyborg_save = JSON.parse(atob(localStorage['btv_save[cyborg]']));
    var greenLantern_save = JSON.parse(atob(localStorage['btv_save[greenLantern]']));
    var jonnJonzz_save = JSON.parse(atob(localStorage['btv_save[jonnJonzz]']));
    var wonderWoman_save = JSON.parse(atob(localStorage['btv_save[wonderWoman]']));
    var superman_save = JSON.parse(atob(localStorage['btv_save[superman]']));
    var PPS_save = JSON.parse(atob(localStorage['btv_save[PPS]']));

    // load heroes
    var batgirl_save = JSON.parse(atob(localStorage['btv_save[batgirl]']));
    var robin_save = JSON.parse(atob(localStorage['btv_save[robin]']));
    var gordon_save = JSON.parse(atob(localStorage['btv_save[gordon]']));
    var batwing_save = JSON.parse(atob(localStorage['btv_save[batwing]']));
    var azrael_save = JSON.parse(atob(localStorage['btv_save[azrael]']));
    var catwoman_save = JSON.parse(atob(localStorage['btv_save[catwoman]']));
    var alfred_save = JSON.parse(atob(localStorage['btv_save[alfred]']));
    var batwoman_save = JSON.parse(atob(localStorage['btv_save[batwoman]']));
    var redHood_save = JSON.parse(atob(localStorage['btv_save[redHood]']));
    var nightwing_save = JSON.parse(atob(localStorage['btv_save[nightwing]']));
    var batman_save = JSON.parse(atob(localStorage['btv_save[batman]']));
    var heroesTeamDps_save = JSON.parse(atob(localStorage['btv_save[heroesTeamDps]']));

    // load upgrades
    var powerclick_x2_save = JSON.parse(atob(localStorage['btv_save[powerclick_x2]']));

    // show power stats
    power_indicator = power_indicator_save;
    powerGain = powerGain_save;
    powerClick = powerClick_save;

    villainOn = villainOn_save;
    villainOnId = villainOnId_save;
    villainOn.life = villainOnLife_save;
    
    // show item stats
    hawkman = hawkman_save;
    huntress = huntress_save;
    greenArrow = greenArrow_save;
    flash = flash_save;
    aquaman = aquaman_save;
    cyborg = cyborg_save;
    greenLantern = greenLantern_save;
    jonnJonzz = jonnJonzz_save;
    wonderWoman = wonderWoman_save;
    superman = superman_save;
    PPS = PPS_save;

    // show heroes stats
    batgirl = batgirl_save;
    robin = robin_save;
    gordon = gordon_save;
    batwing = batwing_save;
    azrael = azrael_save;
    catwoman = catwoman_save;
    alfred = alfred_save;
    batwoman = batwoman_save;
    redHood = redHood_save;
    nightwing = nightwing_save;
    batman = batman_save;
    heroesTeamDps = heroesTeamDps_save;

    // show upgrade stats
    powerclick_x2 = powerclick_x2_save;

    updateData();

}


/*************** ONLOAD ****************/

$(window).load(load_game());