function Auto(mark, model, year, vin) {
    this.mark = mark;
    this.model = model;
    this.year = year;
    this.vin = vin;
}

Auto.prototype.checkVin = function() {
    const vinChecked = this.vin.length === 16 ? true : false;
    // console.log(vinChecked);
    return vinChecked;
}

Auto.prototype.log = function() {
    const autoLog = `${this.mark} ${this.model} ${this.year}`
    // console.log(autoLog);
    return autoLog;
}


function AutoFuel(mark, model, year, vin, engineVolume, gasPerMile) {
    this.mark = mark;
    this.model = model;
    this.year = year;
    this.vin = vin;
    this.engineVolume = engineVolume;
    this.gasPerMile = gasPerMile;
}

AutoFuel.prototype = Object.create(Auto.prototype)

AutoFuel.prototype.showFuelConsumption = function() {
    return `${this.engineVolume} ${this.gasPerMile}`;
}


function AutoElectric(mark, model, year, vin, batteryVolume) {
    this.mark = mark;
    this.model = model;
    this.year = year;
    this.vin = vin;
    this.batteryVolume = batteryVolume;
}

AutoElectric.prototype = Object.create(Auto.prototype)

AutoElectric.prototype.showBatteryConfig = function() {
    let batteryVolume = `${this.batteryVolume}`;
    // console.log(batteryVolume);
    return batteryVolume;
}

let hyundai = new AutoFuel("Hyundai", "Coupe", 2008, "2222222222222222", "2.2", 11);

let tesla1 = new AutoElectric("Tesla", "Model X", 2020, "1111111111111111", "100 кВт/ч");

let tesla2 = new AutoElectric("Tesla", "Model X", 2020, "1111111111111111", "120 кВт/ч")

tesla1.log()
tesla1.checkVin()
tesla1.showBatteryConfig()

tesla2.log()
tesla2.checkVin()
tesla2.showBatteryConfig()

hyundai.log()
hyundai.checkVin()
hyundai.showFuelConsumption()