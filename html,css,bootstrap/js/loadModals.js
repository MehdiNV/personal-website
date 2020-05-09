$.ajax({
  url: '../html/modals/hobbiesModals.html',
  dataType: 'text',
  success: function(data) {
    alert(data);
    // todo:  add the html to the dom...
  }
});
