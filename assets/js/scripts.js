
AOS.init()
  $(function() {
    $('#nav-tab').responsiveTabs();
  });

  $(document).ready(function () {
    var hidden = true;
    var imageUrls = [
        "./assets/images/honda20200511152343.jpg",
        "./assets/images/royal-enfield20200508193112.jpg",
        "./assets/images/hero20200508192826.jpg",
        "./assets/images/tvs20200508193203.jpg",
        "./assets/images/yamaha20200508193220.jpg",
        "./assets/images/honda20200511152343.jpg",
        "./assets/images/royal-enfield20200508193112.jpg",
        "./assets/images/hero20200508192826.jpg",
        "./assets/images/tvs20200508193203.jpg",
        "./assets/images/yamaha20200508193220.jpg"
    ];

    $("#toggleButton").click(function () {
        if (hidden) {
            var imagesHTML = "";
            for (var i = 0; i < imageUrls.length; i++) {
                if (i % 5 === 0) {
                    imagesHTML += '<tr>';
                }
                imagesHTML += '<td><img src="' + imageUrls[i] + '" class="img-fluid"></td>';
                if (i % 5 === 4 || i === imageUrls.length - 1) {
                    imagesHTML += '</tr>';
                }
            }
            $("#brandsContainer tbody").html(imagesHTML);
            $("#brandsContainer").show();

            $(this).text("Hide Brands");
        } else {
            $("#brandsContainer").hide();
            $(this).text("View More Brands");
        }
        hidden = !hidden;
    });
});
$(document).ready(function () {
  var hidden = true;
  var imageUrls = [
      "./assets/images/honda20200511152343.jpg",
      "./assets/images/royal-enfield20200508193112.jpg",
      "./assets/images/hero20200508192826.jpg",
      "./assets/images/tvs20200508193203.jpg",
      "./assets/images/yamaha20200508193220.jpg",
      "./assets/images/honda20200511152343.jpg",
      "./assets/images/royal-enfield20200508193112.jpg",
      "./assets/images/hero20200508192826.jpg",
      "./assets/images/tvs20200508193203.jpg",
      "./assets/images/yamaha20200508193220.jpg"
  ];

  $("#toggleButton1").click(function () {
      if (hidden) {
          var imagesHTML = "";
          for (var i = 0; i < imageUrls.length; i++) {
              if (i % 5 === 0) {
                  imagesHTML += '<tr>';
              }
              imagesHTML += '<td><img src="' + imageUrls[i] + '" class="img-fluid"></td>';
              if (i % 5 === 4 || i === imageUrls.length - 1) {
                  imagesHTML += '</tr>';
              }
          }
          $("#brandsContainer1 tbody").html(imagesHTML);
          $("#brandsContainer1").show();

          $(this).text("Hide Brands");
      } else {
          $("#brandsContainer1").hide();
          $(this).text("View More Brands");
      }
      hidden = !hidden;
  });
});
  

$(document).ready(function () {
  var imagePaths = [
      "./assets/images/honda20200511152343.jpg",
      "./assets/images/royal-enfield20200508193112.jpg",
      "./assets/images/hero20200508192826.jpg",
      "./assets/images/tvs20200508193203.jpg",
      "./assets/images/yamaha20200508193220.jpg"
  ];

  function renderImagesForTable1() {
      $('#table1 td').each(function (index) {
          $(this).html('<img src="' + imagePaths[index % imagePaths.length] + '">');
      });
  }

  renderImagesForTable1();
});

$(document).ready(function () {
  var imagePaths = [
      "./assets/images/honda20200511152343.jpg",
      "./assets/images/royal-enfield20200508193112.jpg",
      "./assets/images/hero20200508192826.jpg",
      "./assets/images/tvs20200508193203.jpg",
      "./assets/images/yamaha20200508193220.jpg"
  ];

  function renderImagesForTable2() {
      $('#table2 td').each(function (index) {
          $(this).html('<img src="' + imagePaths[index % imagePaths.length] + '">');
      });
  }

  renderImagesForTable2();
});


$(document).ready(function () {
  var imageUrls2 = [
    "./assets/images/apache-rtr-310-right-side-view-7.webp",
    "./assets/images/apache-rtr-310-right-side-view-7.webp",
    "./assets/images/apache-rtr-310-right-side-view-7.webp",
    "./assets/images/apache-rtr-310-right-side-view-7.webp",
    "./assets/images/apache-rtr-310-right-side-view-7.webp"
  ];

  var carouselItems2 = "";
  for (var i = 0; i < imageUrls2.length; i++) {
      carouselItems2 += `
      <div class="item">
          <div class="card">
              <img src="${imageUrls2[i]}" class="card-img-top img-fluid" alt="...">
              <div class="card-body card-bg">
                  <h5 class="card-title">Carousel 2 Title ${i + 1}</h5>
                  <p class="card-text">Some quick example text for carousel 2.</p>
                  <a href="#" class="btn btn-primary">Go somewhere</a>
              </div>
          </div>
      </div>`;
  }

  $("#carousel2").html(carouselItems2);

  $("#carousel2").owlCarousel({
      items: 3,
      loop: false,
      slideSpeed: 300,
      paginationSpeed: 600,
      nav: true,
      dots: false,
      autoWidth: false,
      margin: 30,
      startPosition: 1,
      center: true,
      responsiveClass: true,
      navText: ["<img src='assets/images/leftarrowNew.png'>", "<img src='assets/images/leftarrowNew.png'>"],
      responsive: {
          0: {
              items: 1,
          },
          600: {
              items: 2,
          },
          1000: {
              items: 3,
          },
          1440: {
              items: 4,
          }
      }
  });
});

$(document).ready(function () {
  var imagePaths = [
      "./assets/images/scooty1.webp",
      "./assets/images/scootyBlue.webp",
      "./assets/images/scootyRed.webp",
      "./assets/images/apache-rtr-310-right-side-view-7.webp",
      "./assets/images/apache-rtr-310-right-side-view-7.webp",
      "./assets/images/apache-rtr-310-right-side-view-7.webp",
      "./assets/images/apache-rtr-310-right-side-view-7.webp"
  ];

  var carouselContent = "";
  for (var i = 0; i < imagePaths.length; i++) {
      carouselContent += `
      <div class="item">
          <div class="card">
              <img src="${imagePaths[i]}" class="card-img-top img-fluid" alt="...">
              <div class=" card-body card-bg">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" class="btn btn-primary">Go somewhere</a>
              </div>
          </div>
      </div>`;
  }

  $("#myCarousel2").html(carouselContent);

  $("#myCarousel2").owlCarousel({
      items: 3,
      loop: false,
      slideSpeed: 300,
      paginationSpeed: 600,
      nav: true,
      dots: false,
      autoWidth: false,
      margin: 30,
      startPosition: 1,
      center: true,
      responsiveClass: true,
      navText: ["<img src='assets/images/leftarrowNew.png'>", "<img src='assets/images/leftarrowNew.png'>"],
      responsive: {
          0: {
              items: 1,
          },
          600: {
              items: 2,
          },
          1000: {
              items: 3,
          },
          1440: {
              items: 4,
          }
      }
  });
});


$(document).ready(function () {
  var imagePaths = [
      "./assets/images/scooty1.webp",
      "./assets/images/scootyBlue.webp",
      "./assets/images/scootyRed.webp",
      "./assets/images/apache-rtr-310-right-side-view-7.webp",
      "./assets/images/apache-rtr-310-right-side-view-7.webp",
      "./assets/images/apache-rtr-310-right-side-view-7.webp",
      "./assets/images/apache-rtr-310-right-side-view-7.webp"
  ];

  var carouselContent = "";
  for (var i = 0; i < imagePaths.length; i++) {
      carouselContent += `
      <div class="item">
          <div class="card">
              <img src="${imagePaths[i]}" class="card-img-top img-fluid" alt="...">
              <div class="card-body card-bg">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" class="btn btn-primary">Go somewhere</a>
              </div>
          </div>
      </div>`;
  }

  $("#myCarousel3").html(carouselContent);

  $("#myCarousel3").owlCarousel({
      items: 3,
      loop: false,
      slideSpeed: 300,
      paginationSpeed: 600,
      nav: true,
      dots: false,
      autoWidth: false,
      margin: 30,
      startPosition: 1,
      center: true,
      responsiveClass: true,
      navText: ["<img src='assets/images/leftarrowNew.png'>", "<img src='assets/images/leftarrowNew.png'>"],
      responsive: {
          0: {
              items: 1,
          },
          600: {
              items: 2,
          },
          1000: {
              items: 3,
          },
          1440: {
              items: 4,
          }
      }
  });
});


$(document).ready(function () {
  var imagePaths = [
      "./assets/images/scooty1.webp",
      "./assets/images/scootyBlue.webp",
      "./assets/images/scootyRed.webp",
      "./assets/images/apache-rtr-310-right-side-view-7.webp",
      "./assets/images/apache-rtr-310-right-side-view-7.webp",
      "./assets/images/apache-rtr-310-right-side-view-7.webp",
      "./assets/images/apache-rtr-310-right-side-view-7.webp"
  ];

  var carouselItems = "";
  for (var i = 0; i < imagePaths.length; i++) {
      carouselItems += `
      <div class="item">
          <div class="card">
              <img src="${imagePaths[i]}" class="card-img-top img-fluid" alt="...">
              <div class="card-body card-bg">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" class="btn btn-primary">Go somewhere</a>
              </div>
          </div>
      </div>`;
  }

  $("#myCarousel4").html(carouselItems);

  $("#myCarousel4").owlCarousel({
      items: 3,
      loop: false,
      slideSpeed: 300,
      paginationSpeed: 600,
      nav: true,
      dots: false,
      autoWidth: false,
      margin: 30,
      startPosition: 1,
      center: true,
      responsiveClass: true,
      navText: ["<img src='assets/images/leftarrowNew.png'>", "<img src='assets/images/leftarrowNew.png'>"],
      responsive: {
          0: {
              items: 1,
          },
          600: {
              items: 2,
          },
          1000: {
              items: 3,
          },
          1440: {
              items: 4,
          }
      }
  });
});
