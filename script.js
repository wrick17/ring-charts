$(document).ready(function(){

  var limit = $(".chart-wrapper").data('limit');
  var width = $("chart-container").data('line-width');

 $(function(){
  var monday = $("#doughnutChart-1").data('value')/3;
  var padding = limit - monday*3;
  $("#doughnutChart-1").drawDoughnutChart([
    { title: "Tokyo",         value : monday*2,  color: "#FF4C4C" },
    { title: "San Francisco", value:  padding,   color: "#fff" },
    { title: "Tokyo",         value : monday,  color: "#FF4C4C" }    
  ],
  {
    percentageInnerCutout: 90
  }
  );
});
 $(function(){
  var tuesday = $("#doughnutChart-2").data('value');
  var padding = (limit - tuesday)/2;
  $("#doughnutChart-2").drawDoughnutChart([
    
    { title: "London",        value : padding,   color: "#fff" },
    { title: "New York",      value:  tuesday,   color: "#FFAE6B" },
    { title: "London",        value : padding,   color: "#fff" }
  ],
  {
    percentageInnerCutout: 86
  });
});
 $(function(){
  var wednesday = $("#doughnutChart-3").data('value');
  var padding = (limit - wednesday)/3;
  $("#doughnutChart-3").drawDoughnutChart([
    { title: "Berlin",        value : padding,   color: "#fff" },
    { title: "Sydney",        value : wednesday,   color: "#3DCD3D" },
    { title: "Berlin",        value : padding,   color: "#fff" },
    { title: "Berlin",        value : padding,   color: "#fff" }
  ],
  {
    percentageInnerCutout: 82
  });
});
  $(function(){
    var thursday = $("#doughnutChart-4").data('value')/3;
    var padding = (limit - thursday*3)/3;
  $("#doughnutChart-4").drawDoughnutChart([
    { title: "Tokyo",         value : thursday,  color: "#4EBABA" },
    { title: "San Francisco", value:  padding*2,   color: "#fff" },
    { title: "San Francisco", value:  padding,   color: "#fff" },
    { title: "Tokyo",         value : thursday*2,  color: "#4EBABA" }
  ],
  {
    percentageInnerCutout: 78
  });
});
 $(function(){
  var friday = $("#doughnutChart-5").data('value');
  var padding = (limit - friday)/3;
  $("#doughnutChart-5").drawDoughnutChart([
    { title: "London",        value : padding,   color: "#fff" },
    { title: "New York",      value:  friday,   color: "#FF8F8F" },
    { title: "London",        value : padding,   color: "#fff" },
    { title: "London",        value : padding,   color: "#fff" }
  ],
  {
    percentageInnerCutout: 74
  });
});
 $(function(){
  var satutday = $("#doughnutChart-6").data('value');
  var padding = limit - satutday;
  $("#doughnutChart-6").drawDoughnutChart([
    { title: "Sydney",        value : satutday,   color: "#FF9D4C" },
    { title: "Berlin",        value : padding,   color: "#fff" }
  ],
  {
    percentageInnerCutout: 60
  });
});
  $(function(){
    var sunday = $("#doughnutChart-7").data('value')/3;
    var padding = limit - sunday*3;
  $("#doughnutChart-7").drawDoughnutChart([
    { title: "Sydney",        value : sunday*2,   color: "#83EA83" },
    { title: "Berlin",        value : padding,   color: "#fff" },
    { title: "Sydney",        value : sunday,   color: "#83EA83" }
  ],
  {
    percentageInnerCutout: 40
  });
});
});

// $(document).ready(function(){

//   var limit = $(".chart-wrapper").data('limit');

//  $(function(){
//   var monday = $("#doughnutChart-1").data('value');
//   var padding = limit - monday;
//   $("#doughnutChart-1").drawDoughnutChart([
//     { title: "Tokyo",         value : monday,  color: "#FF4C4C" },
//     { title: "San Francisco", value:  padding,   color: "#fff" }    
//   ],
//   {
//     percentageInnerCutout: 90
//   }
//   );
// });
//  $(function(){
//   var tuesday = $("#doughnutChart-2").data('value');
//   var padding = (limit - tuesday);
//   $("#doughnutChart-2").drawDoughnutChart([
    
//     { title: "New York",      value:  tuesday,   color: "#FFAE6B" },
//     { title: "London",        value : padding,   color: "#fff" }
//   ],
//   {
//     percentageInnerCutout: 86
//   });
// });
//  $(function(){
//   var wednesday = $("#doughnutChart-3").data('value');
//   var padding = (limit - wednesday);
//   $("#doughnutChart-3").drawDoughnutChart([
//     { title: "Sydney",        value : wednesday,   color: "#3DCD3D" },
//     { title: "Berlin",        value : padding,   color: "#fff" }
//   ],
//   {
//     percentageInnerCutout: 82
//   });
// });
//   $(function(){
//     var thursday = $("#doughnutChart-4").data('value');
//     var padding = (limit - thursday);
//   $("#doughnutChart-4").drawDoughnutChart([
//     { title: "Tokyo",         value : thursday,  color: "#4EBABA" },
//     { title: "San Francisco", value:  padding,   color: "#fff" }
//   ],
//   {
//     percentageInnerCutout: 78
//   });
// });
//  $(function(){
//   var friday = $("#doughnutChart-5").data('value');
//   var padding = (limit - friday);
//   $("#doughnutChart-5").drawDoughnutChart([
//     { title: "New York",      value:  friday,   color: "#FF8F8F" },
//     { title: "London",        value : padding,   color: "#fff" }
//   ],
//   {
//     percentageInnerCutout: 74
//   });
// });
//  $(function(){
//   var satutday = $("#doughnutChart-6").data('value');
//   var padding = limit - satutday;
//   $("#doughnutChart-6").drawDoughnutChart([
//     { title: "Sydney",        value : satutday,   color: "#FF9D4C" },
//     { title: "Berlin",        value : padding,   color: "#fff" }
//   ],
//   {
//     percentageInnerCutout: 60
//   });
// });
//   $(function(){
//     var sunday = $("#doughnutChart-7").data('value');
//     var padding = limit - sunday;
//   $("#doughnutChart-7").drawDoughnutChart([
//     { title: "Sydney",        value : sunday,   color: "#83EA83" },
//     { title: "Berlin",        value : padding,   color: "#fff" }
//   ],
//   {
//     percentageInnerCutout: 40
//   });
// });
// });