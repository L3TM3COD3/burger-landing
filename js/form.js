var submitForm = function (ev) {
    ev.preventDefault();

    var form = $(ev.target),
        data = form.serialize(),
        url = form.attr('action');

 
    var request = $.ajax({
        type: 'POST',
        url: url,
        data: data,
        dataType: 'JSON'
    });
    request.done(function (msg) {
        var mes = msg.mes,
            status = msg.status;
        if (status === 'OK') {
            $('.form-result').append(mes);
        } if (status === 'NO') {
            $('.form-result').append('Произошла ошибка на сервере');
        }
    });
    request.fail(function (jqXHR, textStatus) {
        alert("Request failed:" + textStatus)
    });
    request.always(function() {
      $('#order-form')[0].reset();
    })
};
$('#order-form').on('submit', submitForm);