function saveComment(message, onSuccsess, onError) {
    var oReq = new XMLHttpRequest();
    oReq.open("GET", 'https://instagram.com', true);
    oReq.body = message;
    oReq.onload = function(res) {
        onSuccsess(res);
    }
    oReq.onError =  function(err) {
        onError(err);
    };
    oReq.send();
}

function clearInput() {
    document.querySelector('input').value = '';
}


function onSuccsess(result) {
    console.log(result);
    alert('Коммент отправлен');
    clearInput();

}

function onError(err) {
    console.log(err);
    alert('Произошла ошибка');
}

saveComment('Норм сайт', onSuccsess, onError)
