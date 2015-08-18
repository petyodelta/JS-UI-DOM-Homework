/*
Create a dropdown list by a given select

Example:

By given the HTML:

<select id="the-select">
  <option value="value-1">Option 1</option>
  <option value="value-2">Option 2</option>
  <option value="value-3">Option 3</option>
  <option value="value-4">Option 4</option>
  <option value="value-5">Option 5</option>
</select>
And JavaScript:

dropdownList('#the-select');
Generate the following and attaches the events:

<div class="dropdown-list">
  <select style="display: none;">
    <option value="value-1">Option 1</option>
    <option value="value-2">Option 2</option>
    <option value="value-3">Option 3</option>
    <option value="value-4">Option 4</option>
    <option value="value-5">Option 5</option>
  </select>
  <div class="current" data-value="">Option 1</div>
  <div class="options-container" style="position: absolute; display: none;">
    <div class="dropdown-item" data-value="value-1" data-index="0">Option1</div>
    <div class="dropdown-item" data-value="value-2" data-index="1">Option 2</div>
    <div class="dropdown-item" data-value="value-3" data-index="2">Option 3</div>
    <div class="dropdown-item" data-value="value-4" data-index="3">Option 4</div>
    <div class="dropdown-item" data-value="value-5" data-index="4">Option 5</div>
  </div>
</div>

*/
function solve(){
  return function(selector){
      var $list = $(selector).hide();

      var $divContainer = $('<div>')
          .addClass('dropdown-list')
          .append($list);

      var $currentOption = $('<div>')
          .addClass('current')
          .attr('data-value', '')
          .text('Select value');

      var $divOptionsContainer = $('<div>')
          .addClass('options-container')
          .css({
              'position': 'absolute',
              'display': 'none'
          });

      var options = $list.find('option');
      for(var i = 0, len = options.length; i < len; i += 1){
          var $option = $('<div>')
              .addClass('dropdown-item')
              .attr('data-value', $(options[i]).val())
              .attr('data-index', i)
              .text($(options[i]).text());
          $option.appendTo($divOptionsContainer);
      }

      $currentOption.on('click', function(){
          $('.options-container').css('display', 'inline-block');
      });

      $divOptionsContainer.on('click', function(ev){
          var clicked = $(ev.target);
          $('.current').text(clicked.html());
          $list.val(clicked.attr('data-value'));

          $(this).css('display', 'none');
      });

      $currentOption.appendTo($divContainer);
      $divOptionsContainer.appendTo($divContainer);
      $divContainer.appendTo('body');
  };
}