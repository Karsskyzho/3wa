const main = () => {
  const childs = document.querySelectorAll("p:first-child");
  //console.log(childs);
  const childsToOpen = document.querySelector("p + p");

  const open = (content) => {
    content.style.height = "200px";

  };
  const close = (child) => {
    child.style.height = "0";
  };

  for (let i = 0; i < childs.length; i++) {
    const child = childs[i];
    const content = child.nextElementSibling;

    child.addEventListener("click", () => check(content));
  }

  const check = (content) => { 
    if (content.style.height == "200px") {
      close(content);
    } else {
      open(content) ;
    }
};

};

addEventListener("load", main);

//choper tous les p et les remettre à 0 quand je clique sur un p
/* if (content.style.height == "200px") {
    close(content);
  }
else {
    open(content);
  }
}; 
let firstParagraph = document.querySelector('div p:first-child');
let secondParagraph = document.querySelector('div:nth-child(2) p:first-child');
let thirdParagraph = document.querySelector('div:nth-child(3) p:first-child');



*/