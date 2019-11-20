$('form').submit(function() {
    var fruit = $('input[name="fruit"]');
    var age = $('input[name="standing"]');
    if(fruit.is(':checked') && age.is(':checked')) { 
        return true;
    }
    alert("You must pick a fruit AND a standing!");
    return false;
})