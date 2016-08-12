function Phone(brand, color, size, resolution, price) {
	this.brand = brand;
	this.color = color;
	this.size = size;
	this.resolution = resolution;
	this.price = price;
}

Phone.prototype.printInfo = function() {
	document.write("Brand: " + this.brand + "<br>Color: " + this.color + "<br>Size: " + this.size + "<br>Resolution: " + this.resolution + "<br>Price: " + this.price + "$<br><br>");
}

var samsungS6 = new Phone("Samsung S6", "Gold", "5.1 inches", "1440 x 2560 pixels", 421),
	iPhone6S = new Phone("iPhone 6s", "White", "4.7 inches", "750 x 1334 pixels", 579),
	lgG4 = new Phone("LG G4", "Black", "5.5 inches", "1440 x 2560 pixels", 279);

samsungS6.printInfo();
iPhone6S.printInfo();
lgG4.printInfo();