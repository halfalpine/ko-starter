var viewModel = function() {
  let self = this;

  self.clickCount = ko.observable(0);
  self.name = ko.observable('Tabby');
  self.imgSrc = ko.observable('img/434164568_fea0ad4013_z.jpg');
  self.imgAttribution = ko.observable('#');

  self.incrementCounter = function() {
    self.clickCount(this.clickCount() + 1);
  };

  this.catLevel = ko.computed(function() {
    let count = self.clickCount();
    if (count > 0 && count < 10) {
      return "Affectionate";
    } else if (count > 9 && count < 20) {
      return "Goofy";
    } else if (count > 19 && count < 30) {
      return "Hilarious";
    } else if (count > 29 && count < 40) {
      return "Catlike";
    } else if (count > 39 && count < 50) {
      return "Crazy cute";
    } else if (count > 49) {
      return "Priceless";
    }
  });
};

ko.applyBindings(new viewModel());
