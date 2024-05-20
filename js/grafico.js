anychart.onDocumentReady(function () {

    var data3 = [
      {x: "Estrutura de dados", value: (Number(document.getElementById('EstruturaDeDadosValor').innerText))},
      {x: "Debbuging", value: (Number(document.getElementById('DebbugingValor').innerText))},
      {x: "Versionamento", value: (Number(document.getElementById('VersionamentoValor').innerText))},
      {x: "Algoritmo e resolução", value: (Number(document.getElementById('AlgoritmoValor').innerText))},
      {x: "Sql e Querries", value: (Number(document.getElementById('QuerriesValor').innerText))},
      {x: "Conhecimento Web", value: (Number(document.getElementById('FrontEndValor').innerText))}
    ];  
  
    // create radar chart
    var chart = anychart.radar();
  
    // set chart yScale settings
    chart.yScale()
      .minimum(0)
      .maximum(99)
      .ticks({'interval':99});
  
    // color alternating cells
    chart.yGrid().palette("#9cb1e6");
    
    chart.xGrid().stroke({
    color: "#9cb1e6",
    thickness: 1,
    opacity: 0.5
  });
    
    chart.yGrid().stroke({
    color: "#9cb1e6",
    thickness: 0.5,
    opacity: 0.5,
    dash: "10 5"
  });
    chart.area(data3).name('Status').markers(true).fill("#9cb1e6",0.9).stroke("#9cb1e6")
      
  
    // set chart title
    chart.title("")
    // set legend
    .legend(false);
  
    // set container id for the chart
    chart.container('Grafico');
    // initiate chart drawing
    chart.draw();
  
  });
  