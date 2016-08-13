var viewModel = function() {
  this.clickCount = ko.observable(0);
  this.name = ko.observable('Tabby');
  this.imgSrc = ko.observable('img/434164568_fea0ad4013_z.jpg');
  this.imgAttribution = ko.observable('#');

  this.incrementCounter = function() {
    this.clickCount(this.clickCount() + 1);
  };

  this.catLevel = ko.computed(function() {
    let count = this.clickCount
    if (this.clickCount)
  });
};

ko.applyBindings(new viewModel());
