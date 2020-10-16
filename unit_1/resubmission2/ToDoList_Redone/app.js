$(() => {
    const list = []
    const render = () => {
           let $newLi = $('<li>' + list[list.length-1] + '</li>')
        $('#to-do-ul').append($newLi)
        $newLi.addClass("to-do-item")
         $('.to-do-item').on('click', (event) => {
            $('#completed-ul').append(event.target)
            $(event.target).addClass("done-item")
            $(event.target).removeClass("to-do-item")
            $('.done-item').on('click', (event) => {
                $(event.target).remove()
            })
        })
    }
    $('form').on('submit', (event) => {
        list.push($('#input-box').val())
        console.log(list)
        event.preventDefault();
        $(event.target).trigger('reset');
        render()
      });
})





