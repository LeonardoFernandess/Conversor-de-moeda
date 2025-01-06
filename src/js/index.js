$(document).ready(function() {
    function loadCurrencies() {
        $.ajax({
            url: 'http://127.0.0.1:8000/names',  
            type: 'GET',
            success: function(data) {
                const moedas = data.currency;

                moedas.forEach(function(moeda) {
                    $('#moeda1').append(`<option value="${moeda}">${moeda}</option>`);
                    $('#moeda2').append(`<option value="${moeda}">${moeda}</option>`);
                });

                $('#moeda1 option:first').remove();
                $('#moeda2 option:first').remove();

                updateExchangeRate();
            }
        });
    }

    function updateExchangeRate() {
        const moeda1 = $('#moeda1').val();
        const moeda2 = $('#moeda2').val();
        $.ajax({
            url: `http://127.0.0.1:8000/converter?moeda1=${moeda1}&moeda2=${moeda2}`,
            type: 'GET',
            success: function(data) {
                const taxa = data.conversion_rate;
                
                $('.exchange-rate').text(`1 ${moeda1} = ${taxa} ${moeda2}`);
                $('#converted').val(taxa * $('#amount').val());  // Colocar a taxa no campo de conversão
            },
            error: function() {
                alert('Erro ao realizar a conversão.');
            }
        });

    }

    loadCurrencies();

    $('#moeda1, #moeda2, #amount').change(function () {
        updateExchangeRate();  
    });
});
