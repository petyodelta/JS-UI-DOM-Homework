/*
Create a jQuery plugin for ListView

Apply a template for each item of a collection
Using the data-template attribute set the ID of the template to use for the items
Must work with different collections and templates

Example:

Having the HTML:

<ul id="books-list" data-template="book-item-template"></ul>
<script id="book-item-template" type="…">
  <li class="book-item">
    <a href="/#books/{{id}}">
      <strong>{{title}}</strong>
    </a>
  </li> 
</script>           
And executing:

 $('#books-list').listview(books);
Should generate:

 <ul id="books-list" data-template="book-item-template">
  <li class="book-item">
    <a href="/#books/1">
      <strong>JavaScript: The Good Parts</strong>
    </a>
  </li>
  <li class="book-item">
    <a href="/#books/2">
      <strong>Secrets of the JavaScript Ninja</strong>
    </a>
  </li>
  <li class="book-item">
    <a href="/#books/3">
      <strong>Core HTML5 Canvas</strong>
    </a>
  </li>
  <li class="book-item">
    <a href="/#books/4">
      <strong>JavaScript Patterns</strong>
    </a>
  </li>
 </ul>
*/

function solve(){
  return function(){
	$.fn.listview = function(data){
        var $this = $(this),
            templateId = $this.attr('data-template'),
            template = $('#' + templateId).html(),
            compiledTemplate = handlebars.compile(template),
            i,
            len;

        for(i = 0, len = data.length; i < len; i += 1){
            $this.append(compiledTemplate(data[i]));
        }
    };
  };
}
