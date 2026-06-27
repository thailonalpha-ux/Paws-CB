// ================================
// BOTÃO VOLTAR AO TOPO
// ================================

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if(window.scrollY > 300){
        topBtn.style.display = "block";
    }else{
        topBtn.style.display = "none";
    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

});


// ================================
// CONTADORES ANIMADOS
// ================================

function animateCounter(id, endValue){

    const counter = document.getElementById(id);

    let start = 0;

    const speed = Math.ceil(endValue / 80);

    const timer = setInterval(()=>{

        start += speed;

        if(start >= endValue){

            start = endValue;

            clearInterval(timer);

        }

        counter.textContent = start;

    },25);

}

let started = false;

window.addEventListener("scroll",()=>{

    const impact = document.getElementById("impact");

    const position = impact.getBoundingClientRect().top;

    if(position < window.innerHeight && !started){

        animateCounter("dogsSaved",250);
        animateCounter("adoptions",180);
        animateCounter("volunteers",60);

        started = true;

    }

});


// ================================
// ANIMAÇÃO DAS SEÇÕES
// ================================

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.style.opacity = 1;
            entry.target.style.transform = "translateY(0)";

        }

    });

},{
    threshold:0.2
});

sections.forEach(section=>{

    section.style.opacity = 0;
    section.style.transform = "translateY(40px)";
    section.style.transition = ".8s";

    observer.observe(section);

});


// ================================
// FORMULÁRIO
// ================================

const form = document.querySelector("form");

form.addEventListener("submit",(e)=>{

    e.preventDefault();

    alert("✅ Thank you for contacting Paws CB!\nWe will reply as soon as possible.");

    form.reset();

});


// ================================
// BOTÕES ADOPT
// ================================

const buttons = document.querySelectorAll(".dog button");

buttons.forEach(button=>{

    button.addEventListener("click",()=>{

        alert("🐶 Thank you for your interest in adoption!");

    });

});