looker.plugins.visualizations.add({
  // The create method gets called once on initial load of the visualization.
  // It's just a convenient place to do any setup that only needs to happen once.

//   options: {
//   titleText: {
//     type: "string",
//     label: "Title Text",
//     default: "Dead Stage",
//     display: "text",
//     placeholder: "Dead Stage",
//     section: "Title",
//   }
// },

options: {
  font_size: {
    type: "string",
    label: "Font Size",
    values: [
      {"Large": "large"},
      {"Small": "small"}
    ],
    display: "radio",
    default: "large"
  }
},

create: function(element, config) {

  // Insert a <style> tag with some styles we'll use later.
  var css = element.innerHTML = `
    <style>
      .hello-world-vis {
        // Vertical centering
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: center;
      }
      .hello-world-text-large {
        font-size: 72px;
      }
      .hello-world-text-small {
        font-size: 18px;
      }
    </style>
  `;

  // Create a container element to let us center the text.
  var container = element.appendChild(document.createElement("div"));
  container.className = "hello-world-vis";

  // Create an element to contain the text.
  this.text1 = container.appendChild(document.createElement("div"));
  this.text2 = container.appendChild(document.createElement("div"));

},

  // The updateAsync method gets called any time the visualization rerenders due to any kind of change,
  // such as updated data, configuration options, etc.
  updateAsync: function (data, element, config, queryResponse, details, done) {
    // var _profit = FORMAT(1234, "$#,##0")
    // var _change = FORMAT(10 , "0.00%")
    // var _sign = IF(10 >= 0, "<span style='color: green;'>▲" ,
    //            "<span style='color: red;'>▼")

//     element.innerHTML = "test";
//     element.innerHTML = `<table style='width: 300px; height: 150px; border: 1px solid; 
//     border-color: #d3d3d3; border-radius: 15px 15px 15px 15px; 
//     background: linear-gradient( 64.3deg,rgba(254,122,152,0.81) 17.7%,rgba(255,206,134,1) 64.7%,rgba(172,253,163,0.64) 112.1%);'>
// <tbody>
// <tr>
// <td style='width: 10%;'></td>
// <td style='width: 90%; color: black'>Profit &emsp; <b><span style='font-size:30px'>"&_cur_profit&"</b></td>
// </tr>
// <tr>
// <td style='width: 10%;'></td>
// <td style='width: 90%'>"&_f_change&" <b><span style='font-size:14px; color: black'>"&_change&"</b><span style='font-size:12px; color: black'> &nbsp;  vs last month</td>
// </tr>
// </tbody>
// </table>`;

// Clear any errors from previous updates.
this.clearErrors();

// Throw some errors and exit if the shape of the data isn't what this chart needs.
if (queryResponse.fields.measures.length == 0) {
  this.addError({title: "No Dimensions", message: "This chart requires dimensions."});
  return;
}


 // Grab the first cell of the data.
 var firstRow = data[0];
 var firstCell = firstRow[queryResponse.fields.measures[0].name];
 var secondCell = firstRow[queryResponse.fields.measures[1].name];

 // Insert the data into the page.
 this.text1.innerHTML = LookerCharts.Utils.htmlForCell(firstCell);
 this.text2.innerHTML = LookerCharts.Utils.htmlForCell(secondCell);

 // Set the size to the user-selected size
 if (config.font_size == "small") {
  this.text1.className = "hello-world-text-small";
} else {
  this.text1.className = "hello-world-text-large";
}

 // Always call done to indicate a visualization has finished rendering.
 done()


  },
});
