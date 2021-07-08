$(document).ready(function () {

    for (let i = 1; i<15; i++){
        textManager(i);
    }
});

function textManager(index) {
    let nowContent =  $('.content'+index);

    switch (index) {
        case 1: nowContent.text(_hydrometer_);
        break;

        case 2: nowContent.text(_digitalTensileStrengthElongationTester_);
            break;

        case 3: nowContent.text(_extruderForTesting_);
            break;

        case 4: nowContent.text(_smallMixer_);
            break;

        case 5: nowContent.text(_coldStrikeTester_);
            break;

        case 6: nowContent.text(_thermalStabilityTester_);
            break;

        case 7: nowContent.text(_siphonPress_);
            break;

        case 8:nowContent.text(_volumeResistanceTester_);
            break;

        case 9: nowContent.text(_testOven_);
            break;

        case 10: nowContent.text(_rollMill_);
            break;

        case 11: nowContent.text(_oxygenIndexTester_);
            break;

        case 12: nowContent.text(_oilResistanceTester_);
            break;

        case 13: nowContent.text(_singleScrewExtruder);
            break;

        case 14: nowContent.text(_kneader_);
            break;

    }
}