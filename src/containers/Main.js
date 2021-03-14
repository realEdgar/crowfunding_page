import SectionOne from '../components/SectionOne';
import SectionTwo from '../components/SectionTwo';
import SectionThree from '../components/SectionThree';
import ModalBackProject from '../components/ModalBackProject'
import ModalSucces from '../components/ModalSucces'

const Main = () => {
    const viewMain = `
        <main class="main">
            ${ SectionOne('Bookmark') }
            ${ SectionTwo() }            
            ${ SectionThree() }
            ${ ModalBackProject() }
            ${ ModalSucces() }
        </main>
    `
    return viewMain
}

export default Main