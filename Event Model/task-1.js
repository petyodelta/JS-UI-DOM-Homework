/* globals $ */

/* 
 Create a function that takes an id or DOM element and:

 If an id is provided, select the element
 Finds all elements with class button or content within the provided element
 Change the content of all .button elements with "hide"
 When a .button is clicked:
 Find the topmost .content element, that is before another .button and:
 If the .content is visible:
 Hide the .content
 Change the content of the .button to "show"
 If the .content is hidden:
 Show the .content
 Change the content of the .button to "hide"
 If there isn't a .content element after the clicked .button and before other .button, do nothing
 Throws if:
 The provided DOM element is non-existant
 The id is either not a string or does not select any DOM element

*/

function solve(){
  return function (selector) {
      if(typeof selector !== 'string' && !(selector instanceof HTMLElement)){
          throw new Error('Invalid selector');
      }

      if(document.getElementById(selector) == null){
          throw new Error('Can not select anything');
      }

      var buttons = document.getElementsByClassName('button'),
          content = document.getElementsByClassName('content'),
          i,
          len;

      for(i = 0, len = buttons.length; i < len; i += 1){
          buttons[i].innerHTML = 'hide';

          buttons[i].addEventListener('click', function(ev){
              var target = ev.target;
              if(target.className === 'button'){
                  var nextSibling = target.nextElementSibling;

                  while(nextSibling){
                      if(nextSibling.className === 'content'){
                          break;
                      }

                      nextSibling = nextSibling.nextElementSibling;
                  }

                  if(nextSibling.style.display == 'none'){
                      target.innerHTML = 'hide';
                      nextSibling.style.display = '';
                  }else{
                      target.innerHTML = 'show';
                      nextSibling.style.display = 'none';
                  }
              }
          })
      }
  };
}
