const body = document.querySelector('body'),
    sidebar = body.querySelector('nav'),
    toggle = body.querySelector(".toggle"),
    searchBtn = body.querySelector(".search-box")
    btnExtends = document.querySelectorAll('.btn-extend');

    console.log('btnExtend', btnExtends)


toggle.addEventListener("click", () => {
    sidebar.classList.toggle("close");
})

searchBtn.addEventListener("click", () => {
    sidebar.classList.remove("close");
})

// 1. Get the element
// 2. Add event listener
// 3. execute function if event is fired

btnExtends.forEach((element) => {
    element.addEventListener('click', () => {
    // console.log('clicked element', element)
    element.innerHTML = "U heeft verlengd";
    element.classList.add('extended')
  });
})

// tekstElement. veranderTekst() {
//     var tekstElement = document.getElementById("tekstElement");
//     tekstElement.innerHTML = "Verloopt over: 31 dagen";
// }

// function myFunction() {
//     document.getElementById("demo").innerHTML = "U heeft verlengd";
//       }