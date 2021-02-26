/* === Color sliders === */

$('.progressbar').slider({
    classes: {
        'ui-slider': 'slider',
    },
    step: 1,
    max: 255,
    min: 0,
    range: "min",
});

$('.red').slider({
    classes: {
        'ui-slider-range': 'red-range',
    }
});

$('.green').slider({
    classes: {
        'ui-slider-range': 'green-range',
    }
});

$('.blue').slider({
    classes: {
        'ui-slider-range': 'blue-range',
    }
});


$('.progressbar').on('slide', function (){
    let red = $('.red').slider('value');
    let green = $('.green').slider('value');
    let blue = $('.blue').slider('value');
    let color = 'rgb(' + red + ',' + green + ',' + blue + ')';
   $('.textArea').css('color', color);
});

/* !=== Color sliders === */


/* === Background sliders === */

$('.progressbarBG').slider({
    classes: {
        'ui-slider': 'slider',
        'ui-slider-range': 'red',
    },
    step: 1,
    max: 255,
    min: 0,
    range: "min",
});

$('.redBG').slider({
    classes: {
        'ui-slider-range': 'red-range',
    }
});

$('.greenBG').slider({
    classes: {
        'ui-slider-range': 'green-range',
    }
});

$('.blueBG').slider({
    classes: {
        'ui-slider-range': 'blue-range',
    }
});



$('.progressbarBG').on('slide', function (){
    let red = $('.redBG').slider('value');
    let green = $('.greenBG').slider('value');
    let blue = $('.blueBG').slider('value');
    let color = 'rgb(' + red + ',' + green + ',' + blue + ')';
    $('.textArea').css('background-color', color);
});

/* !=== Background sliders === */

/* === Tabs(Color/Background sliders) === */
$('.colorBtn').click(function () {
    $('.bgcolorBtn').removeClass('active');
    $(this).addClass('active');
    $('.progressbar').addClass('notActiveSliders');
    $('.progressbarBG').removeClass('notActiveSliders');
});

$('.bgcolorBtn').click(function () {
    $('.colorBtn').removeClass('active');
    $(this).addClass('active');
    $('.progressbarBG').addClass('notActiveSliders');
    $('.progressbar').removeClass('notActiveSliders');
});

/* !=== Tabs(Color/Background sliders) === */