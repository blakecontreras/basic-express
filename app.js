var $counter = $('.counter')
$counter.html('0');

function handleClick(event) {
  $.ajax("http://localhost:8000/counter", {
    method: "POST",
    data: { ACTION: "Increment the counter, please." },
    success: function(data) {
      console.log(data);
      $counter.html(data);
    },
    error: function(err) { console.error(err);}
  })
}
