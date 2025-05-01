function saveLang(lang) {
    localStorage.setItem('lang', lang);
}

function changeLanguage(lang) {
    saveLang(lang);
    location.reload();
}

const lang = 
    (localStorage.getItem('lang') !== null && localStorage.getItem('lang') !== undefined) 
    ? localStorage.getItem('lang') 
    : 'pt';

saveLang(lang);

const text = {
    pt: {
        aboutPortfolio: "Conheça mais sobre mim. Veja meus projetos e habilidades.",
        aboutLinkedin: "Um pouco da minha trajetória e alguns posts técnicos.",
        aboutVocabulary: "Que tal praticar seu inglês e aumentar seu vocabulário? Se divirta enquanto aprende.",
        aboutGithub: "Veja o código dos meus projetos e minhas contribuições para a comunidade.",
        youtube: "ASSISTA MEU CANAL",
        blog: "LEIA MEU BLOG",
    },
    en: {
        aboutPortfolio: "Learn more about me. See my projects and skills.",
        aboutLinkedin: "A little bit of my journey and some technical posts.",
        aboutVocabulary: "Let's practice your English and increase your vocabulary? Have fun while learning.",
        aboutGithub: "See the code of my projects and my contributions to the community.",
        youtube: "WATCH MY CHANNEL",
        blog: "READ MY BLOG",
    }
}

document.getElementById("about-portfolio").innerHTML = text[lang].aboutPortfolio;
document.getElementById("about-linkedin").innerHTML = text[lang].aboutLinkedin;
document.getElementById("about-vocabulary").innerHTML = text[lang].aboutVocabulary;
document.getElementById("about-github").innerHTML = text[lang].aboutGithub;
document.getElementById("youtube-text").innerHTML = text[lang].youtube;
document.getElementById("blog-text").innerHTML = text[lang].blog;