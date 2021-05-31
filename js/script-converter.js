let apiUrlBase = "https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5"
$('#calculate').click(function(event){


  let sum = $('#sum').val();
  let currencyCode1 = $('#currency1').val();
  let currencyCode2 = $('#currency2').val();

  let url1 = apiUrlBase + '&' + currencyCode1;
  let url2 = apiUrlBase + '&' + currencyCode2;



  function parseObj() {
    return `{ccy: "${this.ccy}", base_ccy: "${this.base_ccy}", buy: "${this.buy}", sale: "${this.sale}"}`;
  }

  function getValues(data){
    let values = Object.values(data);
    for (let i in values) {
      if (values[i].ccy == currencyCode2) {
        if ($('#buy').checked) {
          return sum / values[i].buy;
        }
        else if ($('#sell').checked) {
          return sum * values[i].sale;
        }


      }
    }
  }


  $.get(url2, function(data) {
    console.log(parseObj(data));
    console.log(getValues(data));
    

  });
});
