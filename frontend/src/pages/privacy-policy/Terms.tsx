
import styles from "./privacy.module.scss";
import { addClassNames } from "../../store/utils/functions";
import { Box } from "@mui/material";

const TermsPage = () => {

    return (
        <>
            <div className={addClassNames(styles["loginNew"])}>
                <div className="absolute pointer-events-none top-0 right-0 left-0 h-[60px] bg-gradient-to-b from-black to-transparent"></div>

                <Box
                    className={addClassNames(styles["top"], "ml-[40px] mr-[40px]")}

                // style={{ maxWidth: 1200, marginLeft: "auto", marginRight: "auto" }}
                >
                    <div
                        className={addClassNames(
                            styles["wrapper"],
                            " flex items-center justify-between "
                        )}
                    >
                        <a href={"/"} style={{ textDecoration: "none" }} className={styles["link"]}>
                            <h1> <span style={{ fontWeight: '700', fontSize: "20px" }} className="gradient-text">HANIFLIX</span></h1>

                        </a>

                    </div>
                </Box>
                <div className="container p-2 mt-2" id="termsServicePage">
                    <h2 className="text-white font-[500] text-[42px] m-[auto] w-[fit-content] gradient-text" >
                        Terms & Services
                    </h2>
                    <div className="text-lg">
                        These terms and conditions outline the rules and regulations for the use of Haniflix's Website, located at www.haniflix.com. By accessing this website we assume you accept these terms and conditions. Do not continue to use Haniflix if you do not agree to take all of the terms and conditions stated on this page. The following terminology applies to these Terms and Conditions, Privacy Statement and Disclaimer Notice and all Agreements: “Client”, “You” and “Your” refers to you, the person log on this website and compliant to the Company's terms and conditions. “The Company”, “Ourselves”, “We”, “Our” and “Us”, refers to our Company. “Party”, “Parties”, or “Us”, refers to both the Client and ourselves. All terms refer to the offer, acceptance and consideration of payment necessary to undertake the process of our assistance to the Client in the most appropriate manner for the express purpose of meeting the Client's needs in respect of provision of the Company's stated services, in accordance with and subject to, prevailing law of Netherlands. Any use of the above terminology or other words in the singular, plural, capitalization and/or he/she or they, are taken as interchangeable and therefore as referring to same.
                        <h4 className="font-bold text-2xl mt-3">Cookies </h4>
                        <p>We employ the use of cookies. By accessing Haniflix, you agreed to use cookies in agreement with the Haniflix's Privacy Policy. Most interactive websites use cookies to let us retrieve the user's details for each visit. Cookies are used by our website to enable the functionality of certain areas to make it easier for people visiting our website. Some of our affiliate/advertising partners may also use cookies. </p>
                        <h4>License  </h4>
                        <p>Unless otherwise stated, Haniflix and/or its licensors own the intellectual property rights for all material on Haniflix. All intellectual property rights are reserved. You may access this from Haniflix for your own personal use subjected to restrictions set in these terms and conditions. You must not: </p>
                        <ul>
                            <li>Republish material from Haniflix </li>
                            <li>Sell, rent or sub-license material from Haniflix </li>
                            <li>Reproduce, duplicate or copy material from Haniflix </li>
                            <li>Redistribute content from Haniflix This Agreement shall begin on the date hereof. Parts of this website offer an opportunity for users to post and exchange opinions and information in certain areas of the website. Haniflix does not filter, edit, publish or review Comments prior to their presence on the website. Comments do not reflect the views and opinions of Haniflix, its agents and/or affiliates. Comments reflect the views and opinions of the person who post their views and opinions. To the extent permitted by applicable laws, Haniflix shall not be liable for the Comments or for any liability, damages or expenses caused and/or suffered as a result of any use of and/or posting of and/or appearance of the Comments on this website. Haniflix reserves the right to monitor all Comments and to remove any Comments which can be considered inappropriate, offensive or causes breach of these Terms and Conditions. You warrant and represent that: </li>
                            <li>You are entitled to post the Comments on our website and have all necessary licenses and consents to do so; • The Comments do not invade any intellectual property right, including without limitation copyright, patent or trademark of any third party; </li>
                            <li>The Comments do not contain any defamatory, libelous, offensive, indecent or otherwise unlawful material which is an invasion of privacy </li>
                            <li>The Comments will not be used to solicit or promote business or custom or present commercial activities or unlawful activity. You hereby grant Haniflix a non-exclusive license to use, reproduce, edit and authorize others to use, reproduce and edit any of your Comments in any and all forms, formats or media. </li>
                        </ul>
                        <h4 className="font-bold text-2xl mt-3">Hyperlinking to our Content </h4>
                        <p>The following organizations may link to our Website without prior written approval: </p>
                        <ul >
                            <li> Government agencies; </li>
                            <li>Search engines; </li>
                            <li>News organizations; </li>
                            <li>Online directory distributors may link to our Website in the same manner as they hyperlink to the Websites of other listed businesses; and </li>
                            <li>System wide Accredited Businesses except soliciting non-profit organizations, charity shopping malls, and charity fundraising groups which may not hyperlink to our Web site. These organizations may link to our home page, to publications or to other Website information so long as the link: (a) is not in any way deceptive; (b) does not falsely imply sponsorship, endorsement or approval of the linking party and its products and/or services; and (c) fits within the context of the linking party's site. We may consider and approve other link requests from the following types of organizations: </li>
                            <li>commonly-known consumer and/or business information sources;</li>
                            <li>dot.com community sites;</li>
                            <li>associations or other groups representing charities;</li>
                            <li>online directory distributors; </li>
                            <li>internet portals;</li>
                            <li>accounting, law and consulting firms; and </li>
                            <li>educational institutions and trade associations. We will approve link requests from these organizations if we decide that: (a) the link would not make us look unfavorably to ourselves or to our accredited businesses; (b) the organization does not have any negative records with us; (c) the benefit to us from the visibility of the hyperlink compensates the absence of Haniflix; and (d) the link is in the context of general resource information. These organizations may link to our home page so long as the link: (a) is not in any way deceptive; (b) does not falsely imply sponsorship, endorsement or approval of the linking party and its products or services; and (c) fits within the context of the linking party's site. If you are one of the organizations listed in paragraph 2 above and are interested in linking to our website, you must inform us by sending an e-mail to Haniflix. Please include your name, your organization name, contact information as well as the URL of your site, a list of any URLs from which you intend to link to our Website, and a list of the URLs on our site to which you would like to link. Wait 2-3 weeks for a response. Approved organizations may hyperlink to our Website as follows: </li>
                            <li>By use of our corporate name; or</li>
                            <li>By use of the uniform resource locator being linked to; or</li>
                            <li>By use of any other description of our Website being linked to that makes sense within the context and format of content on the linking party's site. No use of Haniflix's logo or other artwork will be allowed for linking absent a trademark license agreement. </li>
                        </ul>

                        <h4 className="font-bold text-2xl mt-3">iFrames  </h4>
                        <p>Without prior approval and written permission, you may not create frames around our web pages that alter in any way the visual presentation or appearance of our Website. </p>

                        <h4 className="font-bold text-2xl mt-3">Content Liability   </h4>
                        <p>We shall not be hold responsible for any content that appears on your Website. You agree to protect and defend us against all claims that is rising on your Website. No link(s) should appear on any Website that may be interpreted as libellous, obscene or criminal, or which infringes, otherwise violates, or advocates the infringement or other violation of, any third party rights. </p>

                        <h4 className="font-bold text-2xl mt-3">Reservation of Rights </h4>
                        <p>We reserve the right to request that you remove all links or any particular link to our Website. You approve to immediately remove all links to our Website upon request. We also reserve the right to amen these terms and conditions and it's linking policy at any time. By continuously linking to our Website, you agree to be bound to and follow these linking terms and conditions. </p>

                        <h4 className="font-bold text-2xl mt-3">Removal of links from our website </h4>
                        <p>If you find any link on our Website that is offensive for any reason, you are free to contact and inform us any moment. We will consider requests to remove links but we are not obligated to or so or to respond to you directly. We do not ensure that the information on this website is correct, we do not warrant its completeness or accuracy; nor do we promise to ensure that the website remains available or that the material on the website is kept up to date.  </p>

                        <h4 className="font-bold text-2xl mt-3">Disclaimer </h4>
                        <p>To the maximum extent permitted by applicable law, we exclude all representations, warranties and conditions relating to our website and the use of this website. Nothing in this disclaimer will: • limit or exclude our or your liability for death or personal injury; </p>
                        <ul>
                            <li>limit or exclude our or your liability for fraud or fraudulent misrepresentation; </li>
                            <li>limit any of our or your liabilities in any way that is not permitted under applicable law; or </li>
                            <li>exclude any of our or your liabilities that may not be excluded under applicable law. The limitations and prohibitions of liability set in this Section and elsewhere in this disclaimer: (a) are subject to the preceding paragraph; and (b) govern all liabilities arising under the disclaimer, including liabilities arising in contract, in tort and for breach of statutory duty. As long as the website and the information and services on the website are provided free of charge, we will not be liable for any loss or damage of any nature. </li>
                        </ul>



                    </div>
                </div>
            </div>
        </>
    );
};

export default TermsPage;
