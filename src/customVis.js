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
  create: function (element, config) {},

  // The updateAsync method gets called any time the visualization rerenders due to any kind of change,
  // such as updated data, configuration options, etc.
  updateAsync: function (data, element, config, queryResponse, details, done) {
    element.innerHTML = "";
    const div = document.createElement("div");
    div.innerText = "Elizabeth!";
    element.appendChild(div);
    done();


  },
});
