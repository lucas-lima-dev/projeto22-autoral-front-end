import CreateNewPost from "../../components/CreateNewPost/CreateNewPost";
import Header from "../../components/Header/Header";
import { HomePageContainer } from "./styled";

function HomePage() {
    return (
        <HomePageContainer>
        <Header/>
        <CreateNewPost/>
        </HomePageContainer>
    )
}

export default HomePage;
