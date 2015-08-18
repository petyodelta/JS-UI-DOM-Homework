/* globals $ 

Define a function that creates a div, containing a list with animals

Many of the elements have classes, see them in the example
The div should contain 2 elements:
A h1 that always has the content "Animals"
A UL with many LIs
Every LI element has a single element - an anchor (<a>)

The anchor has href and content
The href of the anchor may come from the data object or if it is missing, always points to an default URL
The default URL is "http://cdn.playbuzz.com/cdn/3170bee8-985c-47bc-bbb5-2bcb41e85fe9/d8aa4750-deef-44ac-83a1-f2b5e6ee029a.jpg"
The content of the anchor is always built from the data object, but is different if a href is available or not:
If a href is available, the content must be "See a THE_NAME_FROM_THE_DATA_OBJECT"
Otherwise the content must be "No link for THE_NAME_FROM_THE_DATA_OBJECT, here is Batman!"
Example:

Having:

var data = {
  animals: [{
   name: 'Lion',
   url: 'https://susanmcmovies.files.wordpress.com/2014/12/the-lion-king-wallpaper-the-lion-king-2-simbas-pride-4685023-1024-768.jpg'
  }, {
   name: 'Turtle',
    url: 'http://www.enkivillage.com/s/upload/images/a231e4349b9e3f28c740d802d4565eaf.jpg'
  }, {
    name: 'Dog'              
  }, {
    name: 'Cat',
    url: 'http://i.imgur.com/Ruuef.jpg'
  }, {
    name: 'Dog Again'              
  }] 
}
Should produce:

<div class="container">
  <h1>Animals</h1>
  <ul class="animals-list">             
    <li>
      <a href="https://susanmcmovies.files.wordpress.com/2014/12/the-lion-king-wallpaper-the-lion-king-2-simbas-pride-4685023-1024-768.jpg">See a Lion</a>                
    </li>                
    <li>
      <a href="http://www.enkivillage.com/s/upload/images/a231e4349b9e3f28c740d802d4565eaf.jpg">See a Turtle</a>
    </li>                
    <li>
      <a href="http://cdn.playbuzz.com/cdn/3170bee8-985c-47bc-bbb5-2bcb41e85fe9/d8aa4750-deef-44ac-83a1-f2b5e6ee029a.jpg">No link for Dog, here is Batman!</a>                
    </li>                
    <li>
      <a href="http://i.imgur.com/Ruuef.jpg">See a Cat</a>                
    </li>             
    <li>
      <a href="http://cdn.playbuzz.com/cdn/3170bee8-985c-47bc-bbb5-2bcb41e85fe9/d8aa4750-deef-44ac-83a1-f2b5e6ee029a.jpg">No link for Dog Again, here is Batman!</a>                
    </li>              
  </ul>
</div> 
*/

function solve() {
  
  return function (selector) {
    var template =
        '<div class="container">' +
            '<h1>Animals</h1>' +
            '<ul class="animals-list">' +
                '{{#each animals}}' +
                '<li>' +
                    '{{#if this.url}}' +
                    '<a href="{{this.url}}">' +
                    'See a {{this.name}}' +
                    '{{else}}' +
                    '<a href="http://cdn.playbuzz.com/cdn/3170bee8-985c-47bc-bbb5-2bcb41e85fe9/d8aa4750-deef-44ac-83a1-f2b5e6ee029a.jpg">' +
                    'No link for {{this.name}} , here is Batman!' +
                    '{{/if}}' +
                    '</a>' +
                '</li>' +
                '{{/each}}' +
            '</ul>' +
        '</div>';

    $(selector).html(template);   
  };
}
