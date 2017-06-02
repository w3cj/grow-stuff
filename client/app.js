$(appReady);

let gardeners = [];
let currentGardener = 0;

function appReady() {
  $.get('http://localhost:3000/gardeners')
    .then(result => {
      gardeners = result;
      showGardener();
    });

  $('.next').click(() => {
    console.log('wat');
    currentGardener++;
    showGardener();
  });
}

function showGardener() {
  const gardener = gardeners[currentGardener];
  $('#image').attr('src', gardener.img);
  $('#name').text(gardener.name);
  $('#bio').text(gardener.bio);
}
