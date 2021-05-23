document.addEventListener("DOMContentLoaded", function () {
  let headerContainer = document.createElement("div");
  headerContainer.className = "header-container";

  let h1 = document.createElement("h1");
  let h1Text = document.createTextNode("This is an h1");
  h1.appendChild(h1Text);
  headerContainer.appendChild(h1);
  h1.className = "h1";

  let h2 = document.createElement("h2");
  let h2Text = document.createTextNode("This is an h2");
  h2.appendChild(h2Text);
  headerContainer.appendChild(h2);
  h2.className = "h2";

  let h3 = document.createElement("h3");
  let h3Text = document.createTextNode("This is an h3");
  h3.appendChild(h3Text);
  headerContainer.appendChild(h3);
  h3.className = "h3";

  let h4 = document.createElement("h4");
  let h4Text = document.createTextNode("This is an h4");
  h4.appendChild(h4Text);
  headerContainer.appendChild(h4);
  h4.className = "h4";

  let h5 = document.createElement("h5");
  let h5Text = document.createTextNode("This is an h5");
  h5.appendChild(h5Text);
  headerContainer.appendChild(h5);
  h5.className = "h5";

  let h6 = document.createElement("h6");
  let h6Text = document.createTextNode("This is an h6");
  h6.appendChild(h6Text);
  headerContainer.appendChild(h6);
  h6.className = "h6";

  document.body.appendChild(headerContainer);

  let color = [
    "red",
    "yellow",
    "pink",
    "blue",
    "purple",
    "black",
    "aqua",
    "green",
  ];

  h1.addEventListener("dblclick", randomColor1);
  h2.addEventListener("dblclick", randomColor2);
  h3.addEventListener("dblclick", randomColor3);
  h4.addEventListener("dblclick", randomColor4);
  h5.addEventListener("dblclick", function () {
    let colors = randomColor();
    h5.style.color = colors;
  });
  h6.addEventListener("dblclick", function () {
    let randomColor = color[Math.floor(Math.random() * color.length)];
    h6.style.color = randomColor;
  });

  function randomColor() {
    let randomColor = color[Math.floor(Math.random() * color.length)];
    return randomColor;
  }
  function randomColor1() {
    let colors = randomColor();
    h1.style.color = colors;
  }
  function randomColor2() {
    let randomColor = color[Math.floor(Math.random() * color.length)];
    h2.style.color = randomColor;
  }
  function randomColor3() {
    let randomColor = color[Math.floor(Math.random() * color.length)];
    h3.style.color = randomColor;
  }
  function randomColor4() {
    let randomColor = color[Math.floor(Math.random() * color.length)];
    h4.style.color = randomColor;
  }
  //   function randomColor5() {
  //     let randomColor = color[Math.floor(Math.random() * color.length)];
  //     h5.style.color = randomColor;

  //   function randomColor6() {
  //     let randomColor = color[Math.floor(Math.random() * color.length)];
  //     h6.style.color = randomColor;
  //   }
  let button = document.querySelector("button");
  let ul = document.createElement("ul");
  headerContainer.appendChild(ul);
  
  let one = 1;

  let li;
  let liText;
  let p;
  let ulText;
  function listAdd() {
    li = document.createElement("li")
    ul.appendChild(li)
    liText = document.createTextNode(`List item ${one}`)
    li.appendChild(liText)
    one = one + 1
    
}






button.addEventListener("click", listAdd);

})


    


