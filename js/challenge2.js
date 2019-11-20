// useBilling.onchange = function() {
// 	let home = $("#home");
// 	if ($(this).is(':checked')){
// 		home.val().change($('#billing').val());
//         home.disabled = true;
//     }
// 	else {
// 		home.value = "";
//         home.disabled = false;
//     }
// }

$("#useBilling").click(function() {
    let home = $("#home");
    if ($(this).is(':checked')){
        home.val($('#billing').val());
        home.prop('disabled', true);
    }
    else {
        home.val('');
        home.prop('disabled', false);
    }
  });
