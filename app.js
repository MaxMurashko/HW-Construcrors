function Auto(mark, model, year, vin) {
    this.mark = mark;
    this.model = model;
    this.year = year;
    this.vin = vin;
}

Auto.prototype.checkVin = function() {
    return console.log(this.vin.length === 16 ? true : false);
}

Auto.prototype.log = function() {
    return console.log(`${this.mark} ${this.model} ${this.year}`);
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

AutoFuel.prototype.showFuelConsumption= function() {
    return console.log(`${this.engineVolume} ${this.gasPerMile}`);
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
    return console.log(`${this.batteryVolume}`)
}



let hyundai = new AutoFuel("Hyundai", "Coupe", 2008, "2222222222222222", "2.2", 11);
hyundai.log()
hyundai.checkVin()
hyundai.showFuelConsumption()


let tesla = new AutoElectric("Tesla", "Model X", 2020, "1111111111111111", "100 кВт/ч");

tesla.log()
tesla.checkVin()
tesla.showBatteryConfig()


