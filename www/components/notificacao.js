$(document).on("click","#notificacao",function(){
function onConfirm(buttonIndex) {
    
}

navigator.notification.confirm(
    'Rota definida', // message
     onConfirm,            // callback to invoke with index of button pressed
    'Selecione uma rota',           // title
    ['ok','cancelar']     // buttonLabels
);

});