const emoji_map = {
  "una persona": "👤",
  "2 personas": "👥",
  "3 personas": "👥",
  "4 personas": "👥",
  "5 personas": "👥",
  "6 personas": "👥",
  "7 personas": "👥",
  "bebé": "🍼",
  "playa": "👙",
  "barba": "👴",
  "bicicleta": "🚲",
  "camara": "📷",
  "coche": "🚗",
  "niño": "👦",
  "árbol de navidad": "🎄",
  "primer plano": "👀",
  "nube": "☁️",
  "multitud": "👥",
  "perro": "🐶",
  "bebida": "🍹",
  "comiendo": "🍴",
  "gafas": "👓",
  "flor": "🌻",
  "comida": "🍎",
  "golf": "⛳",
  "hierba": "🍃",
  "sombrero": "👒",
  "interior": "🏠",
  "salón": "🏠",
  "meme": "👍",
  "montaña": "🌋",
  "naturaleza": "🗻",
  "noche": "🌃",
  "océano": "🌊",
  "oficina": "💼",
  "una o varias personas": "👥",
  "exterior": "🚵",
  "personas comiendo": "👥🍴",
  "personas sentadas": "⑁",
  "personas sonriendo": "😂",
  "personas de pie": "💁",
  "teléfono": "📱",
  "planta": "🌿",
  "selfie": "📷",
  "zapatos": "👡",
  "sentado": "⑁",
  "cielo": "☀️",
  "rascacielos": "🏢",
  "durmiendo": "😴",
  "sonriendo": "😋",
  "nieve": "❄️",
  "de pie": "💁",
  "rayas": "📶",
  "traje": "👔",
  "de traje": "👔",
  "gafas de sol": "😎",
  "nadando": "🏊",
  "mesa": "🍽",
  "texto": "🔠",
  "árbol": "🌴",
  "atardecer": "🌃",
  "agua": "💧"
}

const show_facebook_cv_tags = function() {
  const TAG_PREFIX = "La imagen puede contener: ";
  const images = [...document.getElementsByTagName('img')];

  images.forEach(function(el) {
    if (el.hasAttribute("data-prev-alt") && el.getAttribute("data-prev-alt") === el.getAttribute("alt"))
      return;

    el.setAttribute("data-prev-alt", el.alt);

    const altText = el.alt;
    const isCVTag = altText.startsWith(TAG_PREFIX);

    if (isCVTag) {
      const tags = altText.slice(TAG_PREFIX.length).split(/, | y | e /);
      let html = "<ul style='position:absolute;top:10px;right:10px;padding:5px;font-size:12px;line-height:1.8;background-color:rgba(0,0,0,0.7);color:#fff;border-radius:5px'>";

      tags.forEach(function(tag){
        let prefix = "∙";

        if (tag in emoji_map)
          prefix = emoji_map[tag];

        html += `<li>${prefix} ${tag}</li>`;
      });

      html += "</ul>";

      el.style.position = 'relative';
      el.insertAdjacentHTML('afterend', html);
    }
  });
};

const observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
        show_facebook_cv_tags();
    });
});

const config = { attributes: true, childList: true, characterData: false }

observer.observe(document.body, config);

show_facebook_cv_tags();
