// // // document.querySelector('h1').innerText = 'Welcome to the Upside Down';

// // // const image = document.querySelector('img')
// // // console.log(image)
// // // image.style.display = 'none'
// // // image.style.display = 'block'
// // // image.style.filter = 'grayscale(60%)'
// // // image.style.width = '150%'
// // // image.style.filter = ''
// // // image.style.width = ''

// // // const eggos = document.createElement('img')
// // // document.querySelector('.container').appendChild(eggos)
// // // eggos.setAttribute('src', 'https://i.ytimg.com/vi/TgSmPqMGk2g/maxresdefault.jpg')
// // // eggos.style.width = '80%'

// // // eggos.remove()

// // // const liCollection = document.querySelectorAll('li')
// // // console.log(liCollection)
// // // document.querySelectorAll('li')[2].innerText = 'Demo Dog Hangout'

// // // document.querySelectorAll('li')[3].remove()

// // // $('.container')
// // // console.log( $ )

// // const $div = $('<div>');
// // console.log($div)

// // $('body')
// // console.log($('body'))

// // $('body').append( $div );
// // $div.addClass('meat');

// // $('div')
// // console.log($('div'))

// // const $divs = $('div');
// // console.log($divs)
// // // $divs.hide()

// // // -$divs.hide( 'slow' );

// if (typeof jQuery == 'undefined'){
//     console.log('oops! I still have to link my jQuery properly!');
//   } else {console.log('I did it! I linked jQuery and this js file!')};

$(() => {

    //YEAR 1

    // Query for your div with the id of container and set it to a variable named $container

    
    const $container = $('#container')
    //console.log $container
    console.log($container)
    //logs S.fn.init [div#container]

    //Create an <h1> element and set it to a variable called $h1 and console log it
    // const $h1 = ('<h1>');
    // console.log($h1)
    //logs <h1>

    //Create an <h1> element and set it to a variable called $h1 and console log it
    const $h1 = $('<h1>');
    $h1.text('Hogwarts');
    $container.append($h1)

    //YEAR 2

    //h2 element with your name

    const $h2 = $('<h2>');
    $h2.text('Moe Farid');
    $container.append($h2)

    //h3 element with your house (Hufflepuff, Gryffindor, Ravenclaw or Slytherin)

    const $h3 = $('<h3>');
    $h3.text('Hufflepuff');
    $container.append($h3)

    //h4 element with your pet's name
    //this h4 element should have a class with a value of your pet type (owl, cat, toad, etc)
    
    const $h4 = $('<h4>');
    $h4.text('Monster');
    $container.append($h4)
    $h4.addClass('toad')

    //h4 element with your wand  
    
    const new$h4 = $('<h4>');
    new$h4.text('Holy Wand');
    $container.append(new$h4)



    





});