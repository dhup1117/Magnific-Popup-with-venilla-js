    // auto-popup
    // var auto_popu = document.querySelector('#autopopup-option');
    // auto_popu.style.display = 'none';

    setTimeout(function () {
        var open_popuo = document.querySelector("#autopopup-option");
        open_popuo.classList.add('popup_active');
    }, 2000);
    function close_popup(){
        var auto_popu = document.querySelector('#autopopup-option');
        auto_popu.classList.remove('popup_active');
    }
    var popup_item = document.querySelector('.popup_item');
    popup_item.style.display= 'none';
    function mg_popup(){
        popup_item.style.display= 'inline-block';
    }
    function close_mg_popup(){ 
        popup_item.style.display = 'none';
     }
    
