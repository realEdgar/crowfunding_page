const ModalNav = () => {
    const view = `
        <nav class="modal__nav" >
            <button class="modal__button--hide" >X</button>
            <ul class="modal__nav--list">
                <li><a href="/">About</a></li>
                <li><a href="/">Discover</a></li>
                <li><a href="/">Get Started</a></li>
            </ul>
        </nav>
    `;
    return view;
}

export default ModalNav