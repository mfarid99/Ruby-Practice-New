

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
    $ul.attr('storage', 'trunk');
    $container.append($ul);
    

   
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
        
        
    //YEAR4

    //Make a table
    //Right above your table add an h5 that says 'Spring 2017'
    const $h5 = $('<h5>');
    $h5.text('Spring 2017');
    $container.append($h5)

    const $newTable = $('<table>');
    $container.append($newTable)

    //Inside the table add a thead element
    const $thead = $('<thead>')
    $newTable.append($thead)

    //Inside the thead element add two th elements
    const $th1 = $('<th>Day</th>')
    $thead.append($th1)

    const $th2 = $('<th>Classes</th>')
    $thead.append($th2)
    
    const $tr1= $('<tr>')
    $newTable.append($tr1)

    const $td1 = $('<td>Monday</td>')
    const $td2 = $('<td>Herbology</td>')

    $tr1.append($td1, $td2)
    
    const $tr2= $('<tr>')
    $newTable.append($tr2)

    const $td3 = $('<td>Tuesday</td>')
    const $td4= $('<td>Divination</td>')

    $tr2.append($td3, $td4)

    const $tr3= $('<tr>')
    $newTable.append($tr3)

    const $td5 = $('<td>Wednesday</td>')
    const $td6= $('<td>History of Magic</td>')

    $tr3.append($td5, $td6)

    const $tr5 =$('<tr><td>Thursday</td> <td>Charms</td></tr>')
    $newTable.append($tr5)

    const $tr6 =$('<tr><td>Friday</td> <td>Potions</td></tr>')
    $newTable.append($tr6)

    const $tr7 =$('<tr><td>Saturday</td> <td>Transfiguration</td></tr>')
    $newTable.append($tr7)

    const $tr8 =$('<tr><td>Sunday</td> <td>Defense Against the Dark Arts</td></tr>')
    $newTable.append($tr8)

    

    





});