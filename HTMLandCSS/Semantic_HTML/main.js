let params = (new URL(document.location)).searchParams;
let firstName = params.get('first-name'); 
let lastName = params.get('last-name');
let animal = params.getAll('animal'); 
console.log(animal);

function submitButton() {
    console.log("did something just happen?");
}


// http://127.0.0.1:5500/HTMLandCSS/Semantic_HTML/form.html?first-name=stian&last-name=bakke&animal=cat&animal=snake&gender=man&contry=Finland