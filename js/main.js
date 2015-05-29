/*************** VILLAINS CARACTERISTICS ****************/

// Variables
var blackMask = {name: "Black Mask", maxlife: 500, life: 500, reward: 25, cover: "http://lykon.github.io/beat-the-villain/img/blackmask1.jpg"},
    deadshot = {name: "Deadshot", maxlife: 8000, life: 8000, reward: 400, cover: "http://lykon.github.io/beat-the-villain/img/deadshot1.jpg"},
    poisonIvy = {name: "Poison Ivy", maxlife: 15000, life: 15000, reward: 1300, cover: "http://lykon.github.io/beat-the-villain/img/poisonivy1.jpg"},
    killerCroc = {name: "Killer Croc", maxlife: 38000, life: 38000, reward: 3200, cover: "http://lykon.github.io/beat-the-villain/img/killercroc1.jpg"},
    harleyQuinn = {name: "Harley Quinn", maxlife: 100000, life: 100000, reward: 14000, cover: "http://lykon.github.io/beat-the-villain/img/harleyquinn1.jpg"},
    hugoStrange = {name: "Hugo Strange", maxlife: 350000, life: 350000, reward: 50000, cover: "http://lykon.github.io/beat-the-villain/img/hugostrange1.jpg"},
    mrFreeze = {name: "Mr Freeze", maxlife: 800000, life: 800000, reward: 250000, cover: "http://lykon.github.io/beat-the-villain/img/mrfreeze1.jpg"},
    pengouin = {name: "The Penguin", maxlife: 200000, life: 200000, reward: 900000, cover: "http://lykon.github.io/beat-the-villain/img/pengouin1.jpg"},
    deathstroke = {name: "Deathstroke", maxlife: 600000, life: 600000, reward: 2500000, cover: "http://lykon.github.io/beat-the-villain/img/deathstroke1.jpg"},
    bane = {name: "Bane", maxlife: 2000000, life: 2000000, reward: 12000000, cover: "http://lykon.github.io/beat-the-villain/img/bane1.jpg"},
    rasAlGhul = {name: "Ra's Al Ghul", maxlife: 50000000, life: 50000000, reward: 50000000, cover: "http://lykon.github.io/beat-the-villain/img/rasalghul1.jpg"},
    joker = {name: "The Joker", maxlife: 999999999, life: 999999999, reward: 999999999, cover: "http://lykon.github.io/beat-the-villain/img/joker1.jpg"};

var villainOn = blackMask;
var villainOnId = 0;


/*************** SUPERHEROES CARACTERISTICS ****************/

// Variables
var batgirl = {amount: 0, cost: 10, increment: 0.5},
    robin = {amount: 0, cost: 25, increment: 1.5},
    gordon = {amount: 0, cost: 50, increment: 3.5},
    batwing = {amount: 0, cost: 100, increment: 6},
    azrael = {amount: 0, cost: 320, increment: 16},
    catwoman = {amount: 0, cost: 1000, increment: 35},
    alfred = {amount: 0, cost: 5000, increment: 80},
    batwoman = {amount: 0, cost: 8000, increment: 150},
    redHood = {amount: 0, cost: 15000, increment: 310},
    nightWing = {amount: 0, cost: 50000, increment: 640},
    batman = {amount: 0, cost: 200000, increment: 4000};

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


/*************** GAME MECHANICS ****************/

/* Variables */
var powerClick = 1;
var powerGain = 1;
var power_indicator = 0;
var tick = 1000;

/* Attack the supervillain with power */
$('#power').click(function(){
    power_indicator = power_indicator + powerGain;
    villainLifePercentage();
    villainOn.life = villainOn.life - powerClick;
    updateData();
    while (villainOn.life <= 0) {
        power_indicator = power_indicator + villainOn.reward;
        villainOn.life = villainOn.maxlife;
        if($("#right").hide()){
            $("#right").show();
        }
        nextVillain();
        updateData();
    }
});

/* Villain Life Percentage */
function villainLifePercentage(){
    $(".villain_life_jauge").css({width : (villainOn.life / villainOn.maxlife) * 100 + "%"});
}

/* Run the superheroes attack */
setInterval(function(){
    villainOn.life = villainOn.life - (batgirl.increment * batgirl.amount) - (robin.increment * robin.amount) - (gordon.increment * gordon.amount) - (batwing.increment * batwing.amount) - (azrael.increment * azrael.amount) - (catwoman.increment * catwoman.amount) - (alfred.increment * alfred.amount) - (batwoman.increment * batwoman.amount) - (redHood.increment * redHood.amount) - (nightwing.increment * nightwing.amount) - (batman.increment * batman.amount);
    power_indicator = power_indicator + (batgirl.increment * batgirl.amount) + (robin.increment * robin.amount) + (gordon.increment * gordon.amount) + (batwing.increment * batwing.amount) + (azrael.increment * azrael.amount) + (alfred.increment * alfred.amount) + (catwoman.increment * catwoman.amount) + (batwoman.increment * batwoman.amount) + (redHood.increment * redHood.amount) + (nightwing.increment * nightwing.amount) + (batman.increment * batman.amount);
    updateData();
    if (villainOn.life < 0) {
        villainOn.life = 0;
    }
    while (villainOn.life <= 0) {
        power_indicator = power_indicator + villainOn.reward;
        if($("#right").hide()){
            $("#right").show();
        }
        updateData();
        villainOn.life = villainOn.maxlife;
    }
}, tick)

/* Change villain */
$("#left").hide();
$("#right").hide();

function changeVillain(){
    if(villainOnId == 0){
        villainOn = blackMask;
    }else if(villainOnId == 1){
        villainOn = deadshot;
        $("#left").show();
    }else if(villainOnId == 2){
        villainOn = poisonIvy;
    }else if(villainOnId == 3){
        villainOn = killerCroc;
    }else if(villainOnId == 4){
        villainOn = harleyQuinn;
    }else if(villainOnId == 5){
        villainOn = hugoStrange;
    }else if(villainOnId == 6){
        villainOn = mrFreeze;
    }else if(villainOnId == 7){
        villainOn = pengouin;
    }else if(villainOnId == 8){
        villainOn = deathstroke;
    }else if(villainOnId == 9){
        villainOn = bane;
    }else if(villainOnId == 10){
        villainOn = rasAlGhul;
    }else if(villainOnId == 11){
        villainOn = joker;
    }
    return villainOnId;
}

/* Next villain */
function nextVillain(){
    villainOnId += 1;
    changeVillain();
    $("#right").hide();
    $("#left").show();
}

$("#right").click(nextVillain);


/* Previous villain */
function previousVillain(){
    villainOnId -= 1;
    changeVillain();
    $("#right").show();
    if(villainOnId == 0){
        $("#left").hide();
    }
}

$("#left").click(previousVillain);


/*************** BUY SUPERHEROES ****************/

/* Buy batgirl */
$('#batgirl').click(function(){
	if(power_indicator >= batgirl.cost){
		power_indicator = power_indicator - batgirl.cost;
	    batgirl.amount++;
	    batgirl.cost = Math.round(batgirl.cost * 1.4);
        updateData();
        $('#robin').show();
	}
});

/* Buy Robin */
$('#robin').click(function(){
	if(power_indicator >= robin.cost){
		power_indicator = power_indicator - robin.cost;
	    robin.amount++;
        robin.cost = Math.round(robin.cost * 1.6);
	    updateData();
        $('#gordon').show();
	}
});

/* Buy Gordon */
$('#gordon').click(function(){
	if(power_indicator >= gordon.cost){
		power_indicator = power_indicator - gordon.cost;
	    gordon.amount++;
        gordon.cost = Math.round(gordon.cost * 1.8);
	    updateData();
        $('#batwing').show();
	}
});

/* Buy Batwing */
$('#batwing').click(function(){
	if(power_indicator >= batwing.cost){
		power_indicator = power_indicator - batwing.cost;
	    batwing.amount++;
        batwing.cost = Math.round(batwing.cost * 2);
	    updateData();
        $('#azrael').show();
	}
});

/* Buy Azrael */
$('#azrael').click(function(){
	if(power_indicator >= azrael.cost){
		power_indicator = power_indicator - azrael.cost;
	    azrael.amount++;
        azrael.cost = Math.round(azrael.cost * 2.2);
	    updateData();
        $('#catwoman').show();
	}
});

/* Buy Catwoman */
$('#catwoman').click(function(){
	if(power_indicator >= catwoman.cost){
		power_indicator = power_indicator - catwoman.cost;
	    catwoman.amount++;
        catwoman.cost = Math.round(catwoman.cost * 2.4);
	    updateData();
        $('#alfred').show();
	}
});

/* Buy Alfred */
$('#alfred').click(function(){
    if(power_indicator >= alfred.cost){
        power_indicator = power_indicator - alfred.cost;
        alfred.amount++;
        alfred.cost = Math.round(alfred.cost * 2.6);
        updateData();
        $('#batwoman').show();
    }
});

/* Buy Alfred */
$('#batwoman').click(function(){
    if(power_indicator >= batwoman.cost){
        power_indicator = power_indicator - batwoman.cost;
        batwoman.amount++;
        batwoman.cost = Math.round(batwoman.cost * 2.6);
        updateData();
        $('#redhood').show();
    }
});

/* Buy Alfred */
$('#redhood').click(function(){
    if(power_indicator >= redHood.cost){
        power_indicator = power_indicator - redHood.cost;
        redHood.amount++;
        redHood.cost = Math.round(redHood.cost * 2.6);
        updateData();
        $('#nightwing').show();
    }
});

/* Buy Alfred */
$('#nightwing').click(function(){
    if(power_indicator >= nightwing.cost){
        power_indicator = power_indicator - nightwing.cost;
        nightwing.amount++;
        nightwing.cost = Math.round(nightwing.cost * 2.6);
        updateData();
        $('#batman').show();
    }
});

/* Buy Batman */
$('#batman').click(function(){
    if(power_indicator >= batman.cost){
        power_indicator = power_indicator - batman.cost;
        batman.amount++;
        batman.cost = Math.round(batman.cost * 2.6);
        updateData();
    }
});


/*************** UPGRADES ****************/

// Variables
var powerclick_x2 = {amount: 0, cost: 10, multiplier: 2};

/* Buy Powerclick x2 */
$('#powerclick_2').click(function(){
	if(power_indicator >= powerclick_x2.cost){
		power_indicator = power_indicator - powerclick_x2.cost;
	    powerclick_x2.amount++;
        powerClick = powerClick * powerclick_x2.multiplier;
        powerclick_x2.cost = powerclick_x2.cost * 2.8;
        powerGain = powerGain * powerclick_x2.multiplier;
        updateData();
	}
});


/*************** ONLOAD UPDATE & TEST ****************/

function updateData(){
    // update power
    $("#power_indicator").html(Math.round(power_indicator));
    
    // update villain
    $(".villain_life_stats").html(villainOn.life);
    $(".villain_maxlife_stats").html(villainOn.maxlife);
    $(".villain_name").html(villainOn.name);
    villainLifePercentage();
    $(".villain_pic").css({"background" : "url(" + villainOn.cover + ") no-repeat center center fixed", "-webkit-background-size" : "cover", "-moz-background-size" : "cover", "-o-background-size" : "cover", "background-size" : "cover"});
    
    // update batgirl
    $("#batgirl_cost").html(batgirl.cost);
    $("#batgirl_damage").html(batgirl.increment * batgirl.amount);
    $("#batgirl_amount").html(batgirl.amount);
    
    // update robin
    $("#robin_cost").html(robin.cost);
    $("#robin_damage").html(robin.increment * robin.amount);
    $("#robin_amount").html(robin.amount);
    
    // update gordon
    $("#gordon_cost").html(gordon.cost);
    $("#gordon_damage").html(gordon.increment * gordon.amount);
    $("#gordon_amount").html(gordon.amount);
    
    // update batwing
    $("#batwing_cost").html(batwing.cost);
    $("#batwing_damage").html(batwing.increment * batwing.amount);
    $("#batwing_amount").html(batwing.amount);
    
    // update azrael
    $("#azrael_cost").html(azrael.cost);
    $("#azrael_damage").html(azrael.increment * azrael.amount);
    $("#azrael_amount").html(azrael.amount);
    
    // update catwoman
    $("#catwoman_cost").html(catwoman.cost);
    $("#catwoman_damage").html(catwoman.increment * catwoman.amount);
    $("#catwoman_amount").html(catwoman.amount);

    // update alfred
    $("#alfred_cost").html(alfred.cost);
    $("#alfred_damage").html(alfred.increment * alfred.amount);
    $("#alfred_amount").html(alfred.amount);
    
    // update alfred
    $("#batwoman_cost").html(batwoman.cost);
    $("#batwoman_damage").html(batwoman.increment * batwoman.amount);
    $("#batwoman_amount").html(batwoman.amount);
    
    // update redhood
    $("#redhood_cost").html(redhood.cost);
    $("#redhood_damage").html(redhood.increment * redhood.amount);
    $("#redhood_amount").html(redhood.amount);
    
    // update nightwing
    $("#nightwing_cost").html(nightwing.cost);
    $("#nightwing_damage").html(nightwing.increment * nightwing.amount);
    $("#nightwing_amount").html(nightwing.amount);
    
    // update batman
    $("#batman_cost").html(batman.cost);
    $("#batman_damage").html(batman.increment * batman.amount);
    $("#batman_amount").html(batman.amount);
    
    
    // update upgrades
    $("#powerclick_2_amount").text(powerclick_x2.amount);
    $("#powerclick_2_cost").text(Math.round(powerclick_x2.cost));

    save_game();
}

// function villainOnTest(){
//     if(villainOn != blackMask){
//         $("#left").show();
//         $("#right").show();
//     }
// }

function heroTeamTest(){
    if(batgirl.amount > 0){
        $('#robin').show();
    }

    if(robin.amount > 0){
        $('#gordon').show();
    }

    if(gordon.amount > 0){
        $('#batwing').show();
    }

    if(batwing.amount > 0){
        $('#azrael').show();
    }

    if(azrael.amount > 0){
        $('#catwoman').show();
    }

    if(catwoman.amount > 0){
        $('#alfred').show();
    }
    
    if(alfred.amount > 0){
        $('#batwoman').show();
    }
    
    if(batwoman.amount > 0){
        $('#redhood').show();
    }
    
    if(redHood.amount > 0){
        $('#nightwing').show();
    }
    
    if(nightwing.amount > 0){
        $('#batman').show();
    }
}


/*************** SAVING & LOADING GAME ****************/

function save_game() {

   // save power stats
   localStorage['btv_save[power_indicator]'] = btoa(JSON.stringify(power_indicator));
   localStorage['btv_save[powerGain]'] = btoa(JSON.stringify(powerGain));
   // localStorage['btv_save[villainOn]'] = btoa(JSON.stringify(villainOn));
   // localStorage['btv_save[villainOnLife]'] = btoa(JSON.stringify(villainOn.life));

   // save heroes
   localStorage['btv_save[batgirl]'] = btoa(JSON.stringify(batgirl));
   localStorage['btv_save[robin]'] = btoa(JSON.stringify(robin));
   localStorage['btv_save[gordon]'] = btoa(JSON.stringify(gordon));
   localStorage['btv_save[batwing]'] = btoa(JSON.stringify(batwing));
   localStorage['btv_save[azrael]'] = btoa(JSON.stringify(azrael));
   localStorage['btv_save[catwoman]'] = btoa(JSON.stringify(catwoman));
   localStorage['btv_save[alfred]'] = btoa(JSON.stringify(alfred));
   localStorage['btv_save[batwoman]'] = btoa(JSON.stringify(batwoman));
   localStorage['btv_save[redhood]'] = btoa(JSON.stringify(redhood));
   localStorage['btv_save[nightwing]'] = btoa(JSON.stringify(nightwing));
   localStorage['btv_save[batman]'] = btoa(JSON.stringify(batman));

   // save upgrades
   localStorage['btv_save[powerclick_x2]'] = btoa(JSON.stringify(powerclick_x2));

}

function load_game() {

   if (!localStorage['btv_save[power_indicator]']) return;
   
   // load power stats
   var power_indicator_save = JSON.parse(atob(localStorage['btv_save[power_indicator]']));
   var powerGain_save = JSON.parse(atob(localStorage['btv_save[powerGain]']));
   // var villainOn_save = JSON.parse(atob(localStorage['btv_save[villainOn]']));
   // var villainOnLife_save = JSON.parse(atob(localStorage['btv_save[villainOn.life]']));

   // load heroes
   var batgirl_save = JSON.parse(atob(localStorage['btv_save[batgirl]']));
   var robin_save = JSON.parse(atob(localStorage['btv_save[robin]']));
   var gordon_save = JSON.parse(atob(localStorage['btv_save[gordon]']));
   var batwing_save = JSON.parse(atob(localStorage['btv_save[batwing]']));
   var azrael_save = JSON.parse(atob(localStorage['btv_save[azrael]']));
   var catwoman_save = JSON.parse(atob(localStorage['btv_save[catwoman]']));
   var alfred_save = JSON.parse(atob(localStorage['btv_save[alfred]']));
   var batwoman_save = JSON.parse(atob(localStorage['btv_save[batwoman]']));
   var redhood_save = JSON.parse(atob(localStorage['btv_save[redhood]']));
   var nightwing_save = JSON.parse(atob(localStorage['btv_save[nightwing]']));
   var batman_save = JSON.parse(atob(localStorage['btv_save[batman]']));

   // load upgrades
   var powerclick_x2_save = JSON.parse(atob(localStorage['btv_save[powerclick_x2]']));

   // show power stats
   power_indicator = power_indicator_save;
   powerGain = powerGain_save;

   // villainOn = villainOn_save
   // villainOn.life = villainOnLife_save

   // show heroes stats
   batgirl = batgirl_save;
   robin = robin_save;
   gordon = gordon_save;
   batwing = batwing_save;
   azrael = azrael_save;
   catwoman = catwoman_save;
   alfred = alfred_save;
   batwoman = batwoman_save;
   redHood = redhood_save;
   nightwing = nightwing_save;
   batman = batman_save;

   // show upgrade stats
   powerclick_x2 = powerclick_x2_save;
   
   updateData();

}


/*************** ONLOAD ****************/

$(window).load(load_game());
$(window).load(heroTeamTest());
// $(window).load(villainOnTest());
