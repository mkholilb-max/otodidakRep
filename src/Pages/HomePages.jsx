import Body from "../components/Fragment/Body/Body";
import Header from "../components/Fragment/Header/Header";
import BodyCard from "../components/Fragment/Body/BodyCard";
import AuthLayout from "../components/Layout/AuthLayout";
import BodyCardNew from "../components/Fragment/Body/BodyCardNew";
import BodyCommentCard from "../components/Fragment/Body/BodyCommentCard";
import PreFooter from "../components/Fragment/PreFooter/PreFooter";
import Footer from "../components/Fragment/Footer/Footer";


const HomePages = () => {
    return (
    <>
        <div className="flex flex-col justify-center items-center">
            <Header image="/images/logo.png" />
            <Body />
        </div>
        <div>
            <BodyCard />
        </div>
        <div>
            <BodyCardNew />
        </div>
        <div>
            <BodyCommentCard />
        </div>
        <div>
            <PreFooter />
        </div>
        <div>
            <Footer />
        </div>
    </>
    );
}

export default HomePages;
