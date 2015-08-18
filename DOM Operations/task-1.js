/* globals $ */

/* 

Create a function that takes an id or DOM element and an array of contents

* if an id is provided, select the element
* Add divs to the element
  * Each div's content must be one of the items from the contents array
* The function must remove all previous content from the DOM element provided
* Throws if:
  * The provided first parameter is neither string or existing DOM element
  * The provided id does not select anything (there is no element that has such an id)
  * Any of the function params is missing
  * Any of the function params is not as described
  * Any of the contents is neight `string` or `number`
    * In that case, the content of the element **must not be** changed   
*/

function solve() {

  return function (element, contents) {
      if(typeof element !== 'string' && !element.nodeName){
          throw new Error('Invalid element');
      }

      var dFrag = document.createDocumentFragment(),
          div = document.createElement('div'),
          cloneDiv,
          domElement,
          i,
          len;

      for(i = 0, len = contents.length; i < len; i += 1){
          if(typeof contents[i] !== 'string' && typeof contents[i] !== 'number'){
              throw new Error('Any of the contents is neither string or number');
          }
      }

      if(typeof element === 'string'){
          domElement = document.getElementById(element);
      }else{
          domElement = element;
      }

      for(i = 0, len = contents.length; i < len; i += 1){
          cloneDiv = div.cloneNode(true);
          cloneDiv.innerHTML = contents[i];
          dFrag.appendChild(cloneDiv);
      }

      domElement.innerHTML = '';
      domElement.appendChild(dFrag);
  };
}