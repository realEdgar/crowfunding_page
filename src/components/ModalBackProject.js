import ArticleBack from './ArticleBack'

const ModalBackProject = () => {
    const view = `
        <section class="modal-back__container">
            <button class="modalBack__button--hide" id="modalBack__hide" >X</button>
            <h3 class="modal-back__title">Back this project</h3>
            <p class="modal-back__description">
                Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world?
            </p>
            ${ArticleBack(
                '0',
                'Pladge with no reward',
                '',
                'Choose to support us without areward if you simply believe in our project. As a backer, you will be signed up to recive product updates via email.',
                '',
                ''
            )}
            ${ArticleBack(
                '1',
                'Bamboo Stand',
                'Pledge $25 or more',
                'You get an ergonomic stand made of natural bamboo. You heve helped us launch our promotional campaign, and you will be added to a special Backermember list.',
                '101',
                'left'
            )}
            ${ArticleBack(
                '2',
                'Black Edition Stand',
                'Pledge $75 or more',
                'You get a Black Special Edition computer atand and a personal thank you. You will be added to our Backer member list. Shipping is included.',
                '64',
                'left'
            )}
            ${ArticleBack(
                '3',
                'Mahogany Special Edition',
                'Pledge $200 or more',
                'You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list. Shipping is included.',
                '0',
                'left'
            )}
        </section>
    `;

    return view
}

export default ModalBackProject