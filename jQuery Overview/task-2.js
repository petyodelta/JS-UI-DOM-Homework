/* globals $ */

/*
Create a function that takes a selector and:
* Finds all elements with class `button` or `content` within the provided element
  * Change the content of all `.button` elements with "hide"
* When a `.button` is clicked:
  * Find the topmost `.content` element, that is before another `.button` and:
    * If the `.content` is visible:
      * Hide the `.content`
      * Change the content of the `.button` to "show"       
    * If the `.content` is hidden:
      * Show the `.content`
      * Change the content of the `.button` to "hide"
    * If there isn't a `.content` element **after the clicked `.button`** and **before other `.button`**, do nothing
* Throws if:
  * The provided ID is not a **jQuery object** or a `string` 

*/
function solve() {
  return function (selector) {
      if(typeof selector !== 'string' || $(selector).length === 0){
          throw new Error('Invalid selector.');
      }

      var buttons = $('.button'),
          content = $('.content'),
          i,
          len;

      for(i = 0, len = buttons.length; i < len; i += 1){
          $(buttons[i]).text('hide');
      }

      $(selector).on('click', function(ev){
          var target = $(ev.target);

          if(target.hasClass('button')){
              var nextSibling = target.next();

              while(nextSibling){
                  if(nextSibling.hasClass('content')){
                      break;
                  }

                  nextSibling = nextSibling.next();
              }

              if(nextSibling.css('display') === 'none'){
                  target.text('hide');
                  nextSibling.css('display', '');
              }else{
                  target.text('show');
                  nextSibling.css('display', 'none');
              }
          }
      })
  };
}

