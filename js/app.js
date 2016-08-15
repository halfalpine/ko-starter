var viewModel = function() {
  this.clickCount = ko.observable(0);
  this.name = ko.observable('Tabby');
  this.imgSrc = ko.observable('img/434164568_fea0ad4013_z.jpg');
  this.imgAttribution = ko.observable('#');

  this.incrementCounter = function() {
    this.clickCount(this.clickCount() + 1);
  };

  this.catLevel = ko.computed(function() {
    let count = this.clickCount;
    if (this.clickCount > 0 && this.clickCount < 10) {
      this.catLevel = "Affectionate";
    } else if (this.clickCount > 9 && this.clickCount > 20) {
      this.catLevel = "Goofy";
    } else if (this.clickCount > 19 && this.clickCount < 30) {
      this.catLevel = "Hilarious";
    } else if (this.clickCount > 29 && this.clickCount < 40) {
      this.catLevel = "Catlike";
    } else if (this.clickCount > 39 && this.clickCount < 50) {
      this.clickCount = "Crazy cute";
    } else if (this.clickCount > 49) {
      this.clickCount = "Priceless";
    }
  });
};


ko.applyBindings(new viewModel());
