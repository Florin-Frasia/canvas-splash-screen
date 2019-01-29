// Create the loader and queue our images. Images will not
// begin downloading until we tell the loader to start.
var loader = new PxLoader(),
    prutImg = loader.addImage('grafica/canvas-image.png'),
    cop1Img = loader.addImage('grafica/mereu.jpg');
    cop2Img = loader.addImage('grafica/universul.jpg');
    cop3Img = loader.addImage('grafica/pasii.jpg');
    cop4Img = loader.addImage('grafica/semantice.jpg');
    cop5Img = loader.addImage('grafica/cobilita.jpg');
    cop6Img = loader.addImage('grafica/haiku.jpg');
    cop7Img = loader.addImage('grafica/blestemul.jpg');
    cop8Img = loader.addImage('grafica/peschir2.jpg');
    cop9Img = loader.addImage('grafica/contemporan.jpg');
    cop10Img = loader.addImage('grafica/graiul.jpg');
    cop11Img = loader.addImage('grafica/crima_si_pace.jpg');
    cop12Img = loader.addImage('grafica/Ministerul_groazei.jpg');
    cop13Img = loader.addImage('grafica/liber_2.jpg');
    cop14Img = loader.addImage('grafica/coperta_Solea-Chilian.jpg');
    cop15Img = loader.addImage('grafica/adevarul_pe_intelesul_femeilor.jpg');
    cop16Img = loader.addImage('grafica/scrisori.jpg');
    cop17Img = loader.addImage('grafica/Coperta limita.jpg');
    cop18Img = loader.addImage('grafica/coperta podul.jpg');
    cop19Img = loader.addImage('grafica/singuratati.jpg');
    cop20Img = loader.addImage('grafica/Coperta 1 - Chipurile omului.jpg');
    cop21Img = loader.addImage('grafica/Evident-adevarul.jpg');
    cop22Img = loader.addImage('grafica/cop avertizari.jpg');
    soareImg = loader.addImage('grafica/soare_macedonean.jpg');
    var img = [
      [cop1Img, 112, 274],
      [cop2Img, 75, 200],
      [cop3Img, 105, 182],
      [cop4Img, 59, 243],
      [cop5Img, 121, 255],
      [cop6Img, 37, 167],
      [cop7Img, 61, 277],
      [cop8Img, 21, 234],
      [cop9Img, 71, 244],
      [cop10Img, 126, 232],
      [cop11Img, 90, 200],
      [cop12Img, 115, 267],
      [cop13Img, 16, 205],
      [cop14Img, 66, 261],
      [cop15Img, 26, 185],
      [cop16Img, 90, 275],
      [cop17Img, 170, 263],
      [cop18Img, 65, 209],
      [cop19Img, 29, 252],
      [cop20Img, 97, 172],
      [cop21Img, 100, 267],
      [cop22Img, 57, 204]
    ];

// callback that will be run once images are ready
loader.addCompletionListener(function() {
  var canvas = document.getElementById('canvas'),
      context = canvas.getContext('2d');
      var ctx = canvas.getContext('2d');
  // Functions

  function setClippingRegion(radius) {
     context.beginPath();
     context.arc(canvas.width/2, canvas.height/2,
                 radius, 0, Math.PI*2, false);
     context.clip();
  }

  function fillCanvas(color) {
     context.fillStyle = color;
     context.fillRect(0, 0, canvas.width, canvas.height);
  }

  function endAnimation(loop) {
    clearInterval(loop);
    context.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(prutImg, 0, 0);
    animate_books();
  }

  function drawAnimationFrame(radius) {
    setClippingRegion(radius);
    ctx.drawImage(prutImg, 0, 0);
  }

  function animate() {
    var radius = 0,
        loop;
        loop = window.setInterval(function() {
          radius += canvas.width/100;
          fillCanvas('black');
          if (radius < canvas.width) {
            context.save();
            drawAnimationFrame(radius);
            context.restore();
          }
          else {
            endAnimation(loop);
          }
        }, 16);
  };
  function animate_books() {
      var l = img.length,
          c = 0,
          i = 1,
          loop;
        var animate = function(){
          //alert('c = ' + c);
          if (c < l) {
          context.save();
          console.log('l = ' + l);
          console.log('i = ' + i);
          console.log('c = ' + c);
          console.log('loop = ' + loop);
          ctx.translate(img[c][1], img[c][2]);
          ctx.scale(0.01, 0.01);
          ctx.drawImage(img[c][0], 0, 0);
          }
          else {
            //stop();
            init();
          }
          if (c < l) loop = window.setInterval(function() {
            console.log('loop = ' + loop);
            console.log('i = ' + i);
            i = i + 0.001;
            console.log('i = ' + i);
            if (i <= 1.09) {
              ctx.scale(i, i);
              ctx.drawImage(img[c][0], 0, 0);
            }
            else {
              context.restore();
              if (c++ < l) {
              i = 1;
              window.clearInterval(loop);
              animate();
              }
            }
          }, 16);
        }
        animate();
};

  animate();
  
  function stop() {
    alert('GATA ANIMATIA CARTILOR!');
  }

  function init() {
    img = soareImg;
    img.xpos = 280;
    img.ypos = 35;
    img.globalAlpha = 0;
    (function() {
        TweenMax.ticker.addEventListener("tick",loop);
    })();

    TweenMax.to(img, 20 ,{globalAlpha:1});
  }

  function loop(){
   //ctx.clearRect(0,0,240,214);
   ctx.globalAlpha = img.globalAlpha;
   ctx.drawImage(img, img.xpos, img.ypos);
  }
});

// begin downloading images
loader.start();
