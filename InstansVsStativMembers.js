class Iphone {
    static brand;

  brand;
  model;
  memory;
  hasCamera;
  hasDupSim;

  constructor(brand, model, memory, hasCamera, hasDupSim) {
    this.brand = brand;
    this.model = model;
    this.memory = memory;
    this.hasCamera = hasCamera;
    this.hasDupSim = hasDupSim;
  }
  static{
    this.brand = "ASpple"
  }
}

let iphon1 = new Iphone("Apple", "iPhone 13", 256, true, false);
let iphon2 = new Iphone("Apple", "iPhone 14", 258, true, false);
let iphon3 = new Iphone("Apple", "iPhone 15", 256, true, false);

//console.log(iphon1);
//console.log(iphon2);
//console.log(iphon3);
console.log(iphon1.model);
console.log(iphon2.model);
console.log(iphon3/model);
console.log(Iphone.brand);