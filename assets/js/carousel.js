var owl = $('.owl-carousel');
owl.owlCarousel({
  margin: 10,
  loop: false,
  responsive: {
    0: {
      items: 3
    },
    600: {
      items: 4
    },
    1000: {
      items:10
    }
  }
});