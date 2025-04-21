export const Footer=()=> {
    return (
        <>
            <footer className="footer">
                <div className="footer-container">
                    <div className="footer-section">
                        <h3>About Us</h3>
                        <p>We share data of different geographic locations of moon alignment..</p>
                    </div>
                    <div className="footer-section">
                        <h3>Quick Links</h3>
                        <ul>
                            <li>Home</li>
                            <li>About-Us</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                    <div className="footer-section">
                        <h3>Follow Us</h3>
                        <ul className="social-media">
                            <li className="facebook"> Facebook <br></br><img src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Facebook_colored_svg_copy-512.png" height={35} /></li>
                            <li className="instagram">Instagram <br></br><img src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Instagram_colored_svg_1-512.png" height={35} /></li>
                            <li className="twitter" > Twitter <br></br><img src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Twitter3_colored_svg-512.png" height={35} /></li>
                        </ul>
                    </div>
                </div>
                <div className="footer-bottom">
                    &copy; 2025 Moon Alignment Website. All rights reserved.
                </div>
            </footer>
        </>
    );
}