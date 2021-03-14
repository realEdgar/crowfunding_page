import logoSucces from '../images/icon-check.svg'

const ModalSucces = () => {
    const view = `
        <div class="modalSucces__container" >
            <img src=${logoSucces} alt="Success logo" />
            <h3 class="modalSucces__title" >Thanks for your support!</h3>
            <p class="modalSuccess__description">
                You pledge brings us one step closer to sharing Mastercraft
                Bamboo Monitor Riser worldwide. You will get and email once
                our campaign is completed
            </p>
            <a href="/" class="modalSucces__link" >Got it</a>
        </div>
    `;

    return view;
}

export default ModalSucces