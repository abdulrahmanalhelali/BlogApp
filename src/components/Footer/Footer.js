import FooterBody from "./FooterBody";
import NewsLetterSub from "./NewsLetterSub";

const Footer = () => {


    return (
        <div className="bg-light">
            <div className="container">
                <footer className="pt-5">
                    <div className="row">
                        <FooterBody />
                        <NewsLetterSub />
                    </div>
                    <div className="d-flex justify-content-between py-4 border-top">
                        <p>© 2021 Company, Inc. All rights reserved.</p>
                    </div>
                </footer>
            </div>
        </div>
    );
}

export default Footer;
