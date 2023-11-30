
class AboutMe extends React.Component {
    constructor(props) {
        super(props);
        this.state = { liked: false };
    }

    render() {
        return (
            <div>

                <div className="name">
                    <h1>Alex Heasley</h1>
                    <img src='./public/horiz-divider2.png' className="img-fluid tweak" />
                </div>
                <div className="fancy-text">
                    <p>Hello and welcome to my humble portfolio. Please Make yourself at home and enjoy your stay.</p>

                </div>
                </div>

        );
    }
}



document.addEventListener('DOMContentLoaded', () => {
    const domContainer = document.querySelector('.aboutMe');
    const root = ReactDOM.createRoot(domContainer);
    root.render(<AboutMe />);
});
