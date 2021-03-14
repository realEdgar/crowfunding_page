import logo_mastercraf from '../images/logo-mastercraft.svg'
import icon_bookmark from '../images/icon-bookmark.svg'


const SectionOne = (marked) => {
    const view = `
        <section class="section__mastercraft">
            <figure class="section__mastercraft--logo">
                <img src=${logo_mastercraf} alt="Mastercraft Logo" >
            </figure>
            <h3 class="section__mastercraft--title">Mastercraft Bamboo Monitor Riser</h3>
            <p class="section__mastercraft--description">
                A beautiful & handcrafted monitor stand to reduce neck and eye strain.
            </p>
            <div class="section__mastercraft--link">
                <button class="link__button" id="mastercraft__button">
                    Back this project
                </button>
                <button class="link__pic" id="bookmark__button" >
                    <img src=${icon_bookmark} alt="" id="img">
                    <span>${marked}</span>
                </button>  
            </div>                        
        </section>
    `;
    return view; 
}


export default SectionOne