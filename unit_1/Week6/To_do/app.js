$(() => {


  const list = []

  const render = () => {
      console.log('list: ', list);
      $('.todo').empty();
      list.forEach((item) => {    
        $('.todo').append('<li>' + item + '</li>')

        $('li').on('click', (event) => {
          $(event.currentTarget).hide() 
        
        
        
          $('.done').append($('li')) 
          $(event.currentTarget).show()
          
          $('.done').on('click', (event) => {
            $(event.currentTarget).hide() 
        
          
          
        })
    
       })
      })
    

    }
      
    

  
  
    
  $('form').on('submit', (event) => {
      event.preventDefault()
      console.log($('#input-box').val())
      list.push($('#input-box').val())
      $(event.currentTarget).trigger('reset'); 
      

   

      
      
      render()
  });
});

