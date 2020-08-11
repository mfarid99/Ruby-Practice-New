

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
    $container.append (new$h4)
        
        
    //YEAR 3

    //Following what you did in previous years, add the following into an unordered list (with the attribute of storage and a value of trunk):

    const $ul = $('<ul>');
    $ul.text('Storage Trunk')
    $container.append($ul)

   
    //butter beer
    const $liButter = $('<li>Butter Beer</li>');
    $ul.append($liButter)
   
    //invisibility cloak (add a class of secret)
    const $cloak = $('<li>Invisibility Cloak</li>');
    $ul.append($cloak)
    $cloak.addClass('secret')
    
    //magic map (add a class of secret)
    const $liMagipMap = $('<li>Magic Map</li>');
    $ul.append($liMagipMap)
    $liMagipMap.addClass('secret')

    //time turner (add a class of secret)
    const $timeTurner= $('<li>Time Turner</li>');
    $ul.append($timeTurner)
    $timeTurner.addClass('secret')
   
    //leash (for your pet, be sure to give this list element the same class as you gave your pet)
    const $leash= $('<li>Leash</li>');
    $ul.append($leash)
    $leash.addClass('toad')
    
    //Bertie Bott's Every Flavor [Jelly] Beans.
    const $jellyBeans= $('<li>Bertie Bott\'s Every Flavor [Jelly] Beans</li>');
    $ul.append($jellyBeans)
        
        



    





});