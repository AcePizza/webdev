function mainNavBar() {
  let mainDiv = document.getElementById("main-content");

  let navBar = document.createElement("nav");
  navBar.setAttribute("class", "navbar navbar-expand-lg bg-light");

  let divConatinerFluid = document.createElement("div");
  divConatinerFluid.classList.add("container-fluid");

  let aNavBrand = document.createElement("a");
  aNavBrand.classList.add("navbar-brand");
  aNavBrand.setAttribute("href", "#");
  aNavBrand.innerHTML = "Navbar";

  let navToggleBtn = document.createElement("button");
  navToggleBtn.classList.add("navbar-toggler");
  navToggleBtn.setAttribute("type", "button");
  navToggleBtn.setAttribute("data-bs-toggle", "collapse");
  navToggleBtn.setAttribute("data-bs-target", "#navbarSupportedContent");
  navToggleBtn.setAttribute("aria-controls", "#navbarSupportedContent");
  navToggleBtn.setAttribute("aria-expanded", "false");
  navToggleBtn.setAttribute("aria-label", "Toggle navigation");

  let navToggleIco = document.createElement("span");
  navToggleIco.classList.add("navbar-toggler-icon");

  let divCollapseNavCollapse = document.createElement("div");
  divCollapseNavCollapse.setAttribute("class", "collapse navbar-collapse");
  divCollapseNavCollapse.setAttribute("id", "navbarSupportedContent");

  let ulNavNav = document.createElement("ul");
  ulNavNav.setAttribute("class", "navbar-nav me-auto mb-2 mb-lg-0");

  let liNavItem = document.createElement("li");
  liNavItem.classList.add("nav-item");

  let aNavLinkOne = document.createElement("a");
  aNavLinkOne.classList.add("nav-link");
  aNavLinkOne.setAttribute("href", "#");
  aNavLinkOne.innerHTML = "One";

  let aNavLinkTwo = document.createElement("a");
  aNavLinkTwo.classList.add("nav-link");
  aNavLinkTwo.setAttribute("href", "#");
  aNavLinkTwo.innerHTML = "Two";

  let formSearch = document.createElement("form")
  formSearch.classList.add("d-flex")
  formSearch.setAttribute("role", "search")

  let inputFormCont = document.createElement("input"); 
  inputFormCont.setAttribute("class","form-control me-2")
  inputFormCont.setAttribute("type","search")
  inputFormCont.setAttribute("placeholder","Search")
  inputFormCont.setAttribute("aria-label","Search")

  let buttonSubmit = document.createElement("button")
  buttonSubmit.setAttribute("class", "btn btn-outline-success")
  buttonSubmit.setAttribute("type", "submit")
  buttonSubmit.innerHTML = "Search"

  mainDiv.appendChild(navBar)
  mainNavBar.appendChild (divConatinerFluid)
  divConatinerFluid.appendChild (aNavBrand)
   navToggleBtn
  navToggleIco
  divCollapseNavCollapse
  ulNavNav
  liNavItem
  aNavLinkOne
  aNavLinkTwo
  formSearch
  inputFormCont
  buttonSubmit

}

mainNavBar();
