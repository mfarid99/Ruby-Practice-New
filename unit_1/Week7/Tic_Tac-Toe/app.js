$(()=>{

    letters = ['X', 'O']

    for (let p = 0; p<letters.length; p++) {
    
    
    const changeContent = (event) => {
        $(event.target).text(letters[Math.floor(Math.random() * letters.length)]);
       
    
}

	for (let i = 0; i <9; i++) {
        let $div = $('<div>');
		$div.addClass('square');
        $('#main').append($div);
        
       	
    }
    
    
    
    
    $('.square').on('mouseenter', changeContent);
    
        
    
    
}
    

});








