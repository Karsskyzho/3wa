/* const main = () => {

    const header = document.querySelector('.header');
    const div = document.createElement("div");
    div.className = 'loader';//присваиваем класс для лоадера
    header.append(div);//добавляем лоадер в конец хедера
   
    const progressBar = () => {
        const loader = document.querySelector('.loader');
        const bodyHeight = document.body.clientHeight;

        const width = (100* window.scrollY) / (bodyHeight - window.innerHeight);
        loader.style.width = width + '%';
        console.log(width);
    }


    document.addEventListener("scroll", progressBar);
} */
const main = () => {
    
        const background = document.querySelector('body');
        const progressBar = () => {
            const bodyHeight = document.body.clientHeight;
    
            const width = (360* window.scrollY) / (bodyHeight - window.innerHeight);
            background.style.backgroundColor = `hsl(${width}, 50%, 50%)` ;
            console.log(width);
                }
        document.addEventListener("scroll", progressBar);
}



addEventListener('load', main)