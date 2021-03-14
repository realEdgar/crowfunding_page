

const Article = (title, subtitle, description, stats, button, classe) => {
    const view = `
        <article class="article__container">
            <h4 class="article__title">${title}</h4>
            <h5 class="article__price">${subtitle}</h5>
            <p class="article__description">
                ${description}
            </p>
            <div class="article__container--stats">
                <p class="article__stats">${stats}<span>left</span></p>
                <button class=${classe} >${button}</button>
            </div>            
        </article>
    `
    return view;
}

export default Article