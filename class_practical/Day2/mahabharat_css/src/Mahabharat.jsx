import bannerimg from '../public/Images/banner.webp';
import Tree from './Components/Tree';


const Mahabharat = () =>{

    return(
        <>
        <header>
        <h1 style={{textAlign:"center"}}><u>This is About Mahabharat family tree</u></h1>
        <img src={bannerimg} alt="" />
        </header>

        <Tree/>
        </>
    )
}
export default Mahabharat;