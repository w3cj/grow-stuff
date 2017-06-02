$(appReady);

let gardeners = [];
let currentGardener = 0;

function appReady() {
  $('.loading').show();
  $('.card').hide();
  $.get('http://localhost:3000/gardeners')
    .then(result => {
      gardeners = result;
      showGardener();
    });

  $('.next').click(() => {
    console.log('wat');
    currentGardener++;
    if(currentGardener == gardeners.length) {
      currentGardener = 0;
    }
    showGardener();
  });
}

function showGardener() {
  $('.loading').show();
  $('.card').hide();
  const gardener = gardeners[currentGardener];
  $('#image').attr('src', gardener.img);
  $('#name').text(gardener.name);
  $('#bio').text(gardener.bio);
  setTimeout(function() {
    $('.loading').hide();
    $('.card').show();
  }, 2000);
}
