import Article from './Article'


const SectionThree = () => {
    const view = `
        <section class="section-three">
            <h3 class="section-three__title">About this project</h3>
            <p class="section-three__description">
                The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that elevates your screen 
                to a more comfortable viewing height. Placing your monitor at eye level has the potential to improve 
                your posture and make you more comfortable while at work, helping you stay focused on the task at hand.
                <br><br>
                Featuring artisan craftsmanship, the simplicity of design creates extra desk space below your computer 
                to allow notepads, pens, and USB sticks to be stored under the stand.
            </p>
            ${Article(
                'Bamboo Stand',
                'Pledge $25 or more',
                ' You get an ergonomic stand made of natural bamboo. You have helped us launch our promotional campaign, and you’ll be added to a special Backer member list.',
                '101',
                'Select Reward',
                'article__button'
            )}
            ${Article(
                'Black Edition Stand',
                'Pledge $75 or more',
                ' You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included.',
                '101',
                'Select Reward',
                'article__button'
            )}
            ${Article(
                'Mahogany Special Edition',
                'Pledge $200 or more',
                ' You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list. Shipping is included.',
                '0',
                'Out of Stock',
                'article__button-dark'
            )}
        </section>
    `;

    return view;
}

export default SectionThree