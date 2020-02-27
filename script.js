
$('#zip_code').mask('00000-000');

function insertData(data) {
    if (!("erro" in data)) {
        document.getElementById('street').value = (data.logradouro);
        document.getElementById('neighborhood').value = (data.bairro);
        document.getElementById('city').value = (data.localidade);
        document.getElementById('state').value = (data.uf);

        document.getElementById('zip_code').classList.remove('is-invalid');
        document.getElementById('zip_code').classList.add('is-valid');
    } else {

        document.getElementById('zip_code').classList.add('is-invalid');
        document.getElementById('answerZipCode').innerHTML = 'Cep não encontrado';
    }
}

function searchZipCode(value) {
    var zip_code = value.replace(/\D/g, '');

    if (zip_code != '') {

        var validateZipCode = /^[0-9]{8}$/;

        if (validateZipCode.test(zip_code)) {

            var script = document.createElement('script');

                script.src = 'https://viacep.com.br/ws/'+ zip_code + '/json/?callback=insertData';

                document.body.appendChild(script);

        } else {
            document.getElementById('zip_code').classList.add('is-invalid');
            document.getElementById('answerZipCode').innerHTML = 'Cep inválido';
        }

    } else {
        document.getElementById('zip_code').classList.add('is-invalid');
        document.getElementById('answerZipCode').innerHTML = 'Digite o cep';
    }
}