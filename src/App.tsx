
function App() {

  return (
    <>
    <div className="app">
        <header className="header">
            <img className="logo" src="https://bytegrad.com/course-assets/css/2/logo.svg" alt="logo" />
            <form className="search">
                <input type="text" className="search__input" placeholder="search photos..." />
                <button className="search__submit">
                    <i className="fas fa-search search__icon"></i>
                </button>
            </form>
            <nav className="nav">
                <ul className="nav__list">
                    <li className="nav__item">
                        <a href="#" className="nav__link">
                            <i className="fas fa-compass nav__icon"></i>
                        </a>
                    </li>
                    <li className="nav__item">
                        <a href="#" className="nav__link">
                            <i className="fas fa-fire-alt nav__icon"></i>
                        </a>
                    </li>
                    <li className="nav__item">
                        <a href="#" className="nav__link">
                            <i className="fas fa-user nav__icon"></i>
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
        <div className="sidebar">
            <section className="intro">
                <h1 className="first-heading">How good is your <span className="u-italic u-bolder u-accent">photos</span> ?</h1>
                <p className="intro__text">Improve your <span className="u-bold">photography skill</span> by getting <span className="u-accent u-underline">feedback</span> from <span className="u-italic u-bold">a jury and the community</span></p>
                <section className="social">
                    <img className="social__img" src="https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&fit=crop&w=70&q=100" alt="User" />
                    <img className="social__img" src="https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&fit=crop&w=70&q=100" alt="User" />
                    <img className="social__img" src="https://images.unsplash.com/photo-1554384645-13eab165c24b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&&w=70&q=100" alt="User" />
                    <img className="social__img" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&fit=crop&w=70&q=100" alt="User" />
                    <img className="social__img" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&w=70&q=100" alt="User" />
                    <div className="social__container">
                        <p className="social__number">+180,000</p>
                        <p className="social__text">already joined</p>
                    </div>
                </section>
                <section className="auth">
                    <a href="#" className="btn">
                        Sign me up
                        <i className="fas fa-angle-right btn__icon"></i>
                    </a>
                    <p className="auth__text">
                        Already a member
                        <a href="#" className="auth__link">Sign in</a>
                    </p>
                </section>
            </section>
            <section className="upload">
                <div className="upload__container">
                    <i className="fas fa-cloud-upload-alt upload__icon"></i>
                    <p className="upload__text">Drag and drop photo</p>
                    <p className="upload__alternative">or <span className="u-accent u-underline">browse</span> folder</p>
                </div>
            </section>
            <section className="footer">
                <small className="copyright">&copy; 2023 Photo Gallery</small>
                <ul className="footer__list">
                    <li className="footer__item">
                        <a href="#" className="footer__link">Terms & Conditions</a>
                    </li>
                    <li className="footer__item">
                        <a href="#" className="footer__link">Privacy Policy</a>
                    </li>
                </ul>
            </section>
        </div>
        <section className="gallery">
            <div className="gallery__img-wrapper">
                <img className="gallery__img" src="https://images.unsplash.com/photo-1434725039720-aaad6dd32dfe?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&fit=crop&h=664&q=100" alt="Gallery image" />
                <p className="gallery__comment gallery__comment--1">
                    <i className="fas fa-star gallery__icon"></i>
                    <span className="gallery__number">10</span>
                    Beautiful!
                </p>
            </div>
            <div className="gallery__img-wrapper">
                <img className="gallery__img" src="https://images.unsplash.com/photo-1491349174775-aaafddd81942?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&fit=crop&w=590&q=100" alt="Gallery image" />
            </div>
            <div className="gallery__img-wrapper">
                <img className="gallery__img" src="https://images.unsplash.com/photo-1496055401924-5e7fdc885742?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&fit=crop&h=544&q=100" alt="Gallery image" />
                <p className="gallery__comment gallery__comment--2">
                    <i className="fas fa-star gallery__icon"></i>
                    <span className="gallery__number">8</span>
                    Great angle
                </p>
            </div>
            <div className="gallery__img-wrapper">
                <img className="gallery__img" src="https://images.unsplash.com/photo-1612160808975-ecb94e6e517b?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&fit=crop&w=590&q=100" alt="Gallery image" />
            </div>
            <div className="gallery__img-wrapper">
                <img className="gallery__img" src="https://images.unsplash.com/photo-1566312296364-2199206933e5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&h=604&q=120" alt="Gallery image" />
                <p className="gallery__comment gallery__comment--3">
                    <i className="fas fa-star gallery__icon"></i>
                    <span className="gallery__number">10</span>
                    WOW
                </p>
            </div>
            <div className="gallery__img-wrapper">
                <img className="gallery__img" src="https://images.unsplash.com/photo-1529429617124-95b109e86bb8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&w=590&q=100" alt="Gallery image" />
            </div>
            <div className="gallery__img-wrapper">
                <img className="gallery__img" src="https://static.wixstatic.com/media/7fa1cf_e23670ec2b0d4eb086a3bc08e06c8d05~mv2.jpg/v1/fill/w_640,h_416,q_100,f_png/7fa1cf_e23670ec2b0d4eb086a3bc08e06c8d05~mv2.png" alt="Gallery image" />
                <p className="gallery__comment gallery__comment--4">
                    <i className="fas fa-star gallery__icon"></i>
                    <span className="gallery__number">9</span>
                    Lighting could be better
                </p>
            </div>
            <div className="gallery__img-wrapper">
                <img className="gallery__img" src="https://images.unsplash.com/photo-1550431241-a2b960657a6e?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&fit=crop&w=590&q=100" alt="Gallery image" />
            </div>
        </section>


        <section className="steps">
            <section className="step">
                <i className="fas fa-image step__icon step__icon--1"></i>
                <h2 className="second-heading">Upload photos</h2>
                <p className="step__text">Morbi id ipsum sed enim interdum hendrerit eget <span className="u-bold u-italic">quis dui</span>. Integer ad.</p>
            </section>
            <section className="step">
                <i className="fas fa-star step__icon step__icon--2"></i>
                <h2 className="second-heading">Get feedback</h2>
                <p className="step__text">Morbi id ipsum sed enim <span className="u-bold">interdum hendrerit</span> eget quis dui. Integer ad.</p>
            </section>
            <section className="step">
                <i className="fas fa-cogs step__icon step__icon--3"></i>
                <h2 className="second-heading">Improve your skill</h2>
                <p className="step__text">Morbi <span className="u-bold u-italic">id ipsum</span> sed enim interdum hendrerit eget quis dui. Integer ad.</p>
            </section>
        </section>
        
    </div>
    </>
  )
}

export default App
