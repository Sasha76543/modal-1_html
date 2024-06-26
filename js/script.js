document.addEventListener('DOMContentLoaded', function() {
    var modal = document.getElementById('modal');
  
    modal.style.display = 'block';
  
    var closeBtn = document.getElementsByClassName('close')[0];
  
    closeBtn.onclick = function() {
      modal.style.display = 'none';
    }
  
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = 'none';
      }
    }
  });


