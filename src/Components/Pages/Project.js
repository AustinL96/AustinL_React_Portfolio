import './Project.css';

function Project() {
    return (
        <div>
            <h2 className='portTitle'>My Portfolio</h2>
            <div className="projectContainer">
                <div className='imgContainer'>
                    <img className="portImages" src="/AppPaintBlog.png" />
                    <p>My Personal Paint Blog</p>
                    <div className='imgOverlay'>
                        <p>A fun personal project where I showcase some of my work in miniature painting. I plan to add more guides over time, for those interested in copying my paint schemes!</p>
                        <span className="linkDiv">
                            <p>HTML | CSS | JavaScript | React</p>
                            <a href='https://austinl96.github.io/austin-paint-blog/' target='_blank'>
                                <img src='/AppLink.png' />
                            </a>
                            <a href='https://github.com/AustinL96/austin-paint-blog' target='_blank'>
                                <img src='/github-mark.png' />
                            </a>
                        </span>
                    </div>
                </div>
                <div className='imgContainer'>
                    <img className="portImages" src="/AppEmployeeTracker.png" />
                    <p>Employee Tracker Application</p>
                    <div className='imgOverlay'>
                        <p>A database created using MySQL and run through NodeJs.</p>
                        <span className="linkDiv">
                            <p>JavaScript | MySQL | Inquirer | mysql2</p>
                            <a href='https://drive.google.com/file/d/1FnJnIpauOPIwmXO6qz_oAy0X9zo0JE9x/view' target='_blank'>
                                <img src='/AppLink.png' />
                            </a>
                            <a href='https://github.com/AustinL96/creating_an_employee_tracker' target='_blank'>
                                <img src='/github-mark.png' />
                            </a>
                        </span>
                    </div>
                </div>
                <div className='imgContainer'>
                    <img className="portImages" src="/AppMangoMessenger.png" />
                    <p>Mango Messenger</p>
                    <div className='imgOverlay'>
                        <p>A chat messenger app that utilizes authentication.</p>
                        <span className="linkDiv">
                            <p>Handlebars | CSS | JavaScript | Socket.io | MySQL | bcrypt | Express</p>
                            <a href='https://lit-headland-28469.herokuapp.com/' target='_blank'>
                                <img src='/AppLink.png' />
                            </a>
                            <a href='https://github.com/AustinL96/Mango_Messenger2.0' target='_blank'>
                                <img src='/github-mark.png' />
                            </a>
                        </span>
                    </div>
                </div>
                <div className='imgContainer'>
                    <img className="portImages" src="/AppCommerceBackend.png" />
                    <p>E-Commerce Backend</p>
                    <div className='imgOverlay'>
                        <p>A database created using MySQL and utilized via Insomnia. Create products and tags, and link them together!</p>
                        <span className="linkDiv">
                            <p>JavaScript | MySql | Express | Insomnia</p>
                            <a href='https://drive.google.com/file/d/10qH8PwZHyXHJHN0RW5wsMoHBHPRIlGck/view' target='_blank'>
                                <img src='/AppLink.png' />
                            </a>
                            <a href='https://github.com/AustinL96/refactoring_commerce_backend' target='_blank'>
                                <img src='/github-mark.png' />
                            </a>
                        </span>
                    </div>
                </div>
                <div className='imgContainer'>
                    <img className="portImages" src="/AppBowlCrawl.png" />
                    <p>Bowl Crawl</p>
                    <div className='imgOverlay'>
                        <p>A map app to find & plot routes to nearby bowling alleys!</p>
                        <span className="linkDiv">
                            <p>HTML | CSS | JavaScript | Bulma | MapQuest SDK</p>
                            <a href='https://ryanmfloersch.github.io/BowlCrawl/' target='_blank'>
                                <img src='/AppLink.png' />
                            </a>
                            <a href='https://github.com/RyanmFloersch/BowlCrawl' target='_blank'>
                                <img src='/github-mark.png' />
                            </a>
                        </span>
                    </div>
                </div>
                <div className='imgContainer'>
                    <img className="portImages" src="/AppNoteTaker.png" />
                    <p>Note Taker App</p>
                    <div className='imgOverlay'>
                        <p>The old classic, the Note Taker!</p>
                        <span className="linkDiv">
                            <p>HTML | CSS | JavaScript | Express</p>
                            <a href='https://powerful-thicket-16598.herokuapp.com/' target='_blank'>
                                <img src='/AppLink.png' />
                            </a>
                            <a href='https://github.com/AustinL96/building_a_note_taker' target='_blank'>
                                <img src='/github-mark.png' />
                            </a>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project