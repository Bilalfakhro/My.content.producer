var maxLength = 10;
var dt = new Date();
var time = dt.getMonth() + "/" + dt.getDate() + "/" + dt.getFullYear() + " "+ dt.getHours() + ":" + dt.getMinutes();
$(document).ready(function(){  
$('textarea').keyup(function() {
  var length = $(this).val().length;
  var length = maxLength-length;
  $('#chars').text(length);
});
//});
//$(document).ready(function(){
  var $text = $('textarea'),
      $submit = $("input[type='submit']"),
      $listComment = $(".list-comments"),
      $loading = $(".loading"),
      _data;
$($submit).click(function(){
    if($text.val() == "")
    {
      alert("Please write a comment!");
      $('textarea').focus();
    } 
    else{
      _data = $text.val();
       $listComment.prepend("<div><p><span>Username</span>|"+time+"</p><p>"+_data+"</p><p>28<i class='fa fa-caret-up'></i>5<i class='fa fa-caret-down'></i><span>|Reply</span></p></div>");
          $text.val("");
        //      return false;
    }
    $('#chars').html(maxLength);
  $('.comment-post').css('display', 'block');
  });
});
