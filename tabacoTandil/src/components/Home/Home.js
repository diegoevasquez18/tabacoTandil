import ImgExample from "./Container/ContentFour"
import ContentOne from "./Container/ContentOne"
import ContentThree from "./Container/ContentThree"
import ContentTwo from "./Container/ContentTwo"


const Home = () =>{
    return(
        <>
        <div>
            <ContentOne />
        </div>
        <div>
            <ContentTwo />
        </div>
        <div>
            <ContentThree />
        </div>
        <div>
            <ImgExample />
        </div>
          
        </>
    )
}

export default Home