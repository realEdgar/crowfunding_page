const ArticleBack = (id, title, subtitle, description, stats, left) => {
    const view = `
    <article class="articleBack__container">
        <div class="articleBack__head">
            <input id=${id} class="input-styles" type="checkbox" />
            <div>
                <h4 class="articleBack__title">${title}</h4>
                <h5 class="articleBack__price">${subtitle}</h5>
            </div>
        </div>                
        <p class="articleBack__description">
            ${description}
        </p>
        <div class="articleBack__container--stats">
            <p class="articleBack__stats">${stats}<span>${left}</span></p>
        </div>
        <div class="diploy-content" >
            <p class="diploy-content__title" >Enter your Pledge</p>
            <div class="in-out" >
                <p class="in">$<input type="number" class=in${id} /></p>
                <button class="out">Continue</button>
            </div>
        </div>     
    </article>
    `;

    return view;
}

export default ArticleBack