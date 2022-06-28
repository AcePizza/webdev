// THIS WORKS //

const origiText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas vitae scelerisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor vitae massa. Fusce luctus vestibulum augue ut aliquet. Nunc sagittis dictum nisi, sed ullamcorper ipsum dignissim ac. In at libero sed nunc venenatis imperdiet sed ornare turpis. Donec vitae dui eget tellus gravida venenatis. Integer fringilla congue eros non fermentum. Sed dapibus pulvinar nibh tempor porta."

const spiltStrAt = 200;

document.getElementById("hide-text").addEventListener("click", showHide);

let readLessText = origiText.slice(0, spiltStrAt);
let readMoreText = origiText.slice(spiltStrAt)

// console.log(readLess);
// console.log(readMore);

function readMoreLess () {
  let mainContent = document.getElementById('text-box-container')
  let p = document.createElement('p');
  p.innerHTML = readLessText;

  let dots = document.createElement("span");
  dots.setAttribute("id", "dots")
  dots.innerHTML = " ...";
  
  let readMore = document.createElement("span");
  readMore.setAttribute("id", "more");
  readMore.innerHTML = readMoreText;

  mainContent.appendChild(p);
  p.appendChild(dots);
  p.appendChild(readMore);
}

readMoreLess();

function showHide () {
  let dots = document.getElementById("dots");
  let moreText = document.getElementById("more");
  let btnText = document.getElementById("hide-text");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read More";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read Less";
    moreText.style.display = "inline";
  }
}

