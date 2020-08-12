

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

    /* Create a tr element and add two td elements inside.
    in the first td add the day Monday
    in the second td add the classes you are taking (Herbology, Divination, History of Magic, Charms, Potions, Transfiguration, Defense Against the Dark Arts, Quidditch practice, etc.) */

    const $td1 = $('<td>Monday</td>')
    const $td2 = $('<td>Herbology</td>')

    $tr1.append($td1, $td2)

    //Create more tr elements with tds inside so that you have Monday - Friday and classes each of those days
    
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

    
    //YEAR 5

    //Break your wand! (select the element that contains your wand and remove it)
    
    new$h4.addClass('wandclass')
    $('.wandclass').remove();

    //Class was hard! Drink all your butter beer! (remove just the butter beer from your list)

    $liButter.addClass('butterClass');
    $('.butterClass').remove();
    
    //Get a new wand (add the same element back with new text describing your new wand. Be sure to insert it after your pet in the DOM)

    const $newWand = $('<h4>New Wand</h4>')
    $('.toad').append($newWand)

    //Make your new wand stand out by adding a color of indigo (or whatever color you like). But do it with magic (jQuery): Don't add this css in your main.css file

    $newWand.css('color', 'red');

    //Send your pet on a spy mission (remove your pet from the DOM, put it somewhere else in your HTML). Make sure your pet's leash stays in your trunk (list item with the same class as your pet inside unordered list)

    $('.toad').remove()

    //Year 6

    //Nosey roommate alert! hide (use jQuery method hide) to hide all your belongings with a class of secret (give an argument of 'slow' - to see this function in action)

    const slow = 4000
    $('.secret').hide(slow)

    //Nosey roommate falls asleep 2 seconds later (chain the jQuery method delay on your hide method (give argument of at least 2000) to prevent showing your secret elements too soon.

    $('.secret').delay(2000).hide(200)

    //Use jQuery method show to reveal all of your belongings with a class of secret (give an argument of 'slow' - to see this function in action) 

    $('.secret').show(slow)

    //Year 7

    //Update your class schedule to read 'Fall 2018'
    $h5.text('Fall 2018')

    //Celebrate by buying more butter beer! Append a list item with the text 'Butter beer' as the first list item inside your unordered list with the value of trunk
    const $newButtleBeer = ('<li>buttle beer</li>')
    $ul.prepend($newButtleBeer)


    //Whoops! You broke your trunk when you stood on it while singing karaoke. Get a new storage container for your stuff; replace the unordered list's property of trunk with a new property of chest

    $ul.attr('chest')

    //Add some CSS to your page. Feel free to experiment and make this page your own
    // const harryPotterImg = theImg
    $container.prepend('<img src = "https://media.thatsweetgift.com/wp-content/uploads/bfi_thumb/is-harry-potter-a-true-story-o6saol48zgxiya22c33wrj9vdazs3dwdv1mqrc3zo6.jpg" />')

    $h5.css('color', 'red'), 
    $h5.css('font-size', '3em');
    



    


    





});