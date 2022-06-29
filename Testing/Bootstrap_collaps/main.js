let mainContent = document.getElementById("main-content");
let p = document.createElement("p");

let button = document.createElement("button");
button.setAttribute("id", "myCollapsible");
button.setAttribute("class", "btn btn-primary");
button.setAttribute("type", "button");
button.setAttribute("data-bs-toggle", "collapse");
button.setAttribute("data-bs-target", "#collapseExample");
button.setAttribute("aria-expanded", "false");
button.setAttribute("aria-controls", "collapseExample");
button.innerHTML = "Read more";

let divCollaps = document.createElement("div");
divCollaps.setAttribute("class", "collapse");
divCollaps.setAttribute("id", "collapseExample");

let divCardBody = document.createElement("div");
divCardBody.setAttribute("class", "card card-body");
divCardBody.innerHTML =
  "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.";

mainContent.appendChild(p);
p.appendChild(button);
mainContent.appendChild(divCollaps);
divCollaps.appendChild(divCardBody);

const myCollapsible = document.getElementById("collapseExample");
myCollapsible.addEventListener("hide.bs.collapse", (event) => {
  button.innerHTML = "Read more";
});

const myCollapsibleTwop = document.getElementById("collapseExample");
myCollapsible.addEventListener("show.bs.collapse", (event) => {
  button.innerHTML = "Read less";
});
