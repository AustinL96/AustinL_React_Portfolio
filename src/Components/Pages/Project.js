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
                        <p>This is new content</p>
                    </div>
                </div>
                <div className='imgContainer'>
                    <img className="portImages" src="/AppEmployeeTracker.png" />
                    <p>Employee Tracker Application</p>
                    <div className='imgOverlay'>
                        <p>This is new content 2</p>
                    </div>
                </div>
                <div className='imgContainer'>
                    <img className="portImages" src="/AppMangoMessenger.png" />
                    <p>Mango Messenger</p>
                    <div className='imgOverlay'>
                        <p>This is new content 3</p>
                    </div>
                </div>
                <div className='imgContainer'>
                    <img className="portImages" src="/AppCommerceBackend.png" />
                    <p>E-Commerce Backend</p>
                    <div className='imgOverlay'>
                        <p>This is new content 4</p>
                    </div>
                </div>
                <div className='imgContainer'>
                    <img className="portImages" src="/AppBowlCrawl.png" />
                    <p>Bowl Crawl</p>
                    <div className='imgOverlay'>
                        <p>This is new content 5</p>
                    </div>
                </div>
                <div className='imgContainer'>
                    <img className="portImages" src="/AppNoteTaker.png" />
                    <p>Note Taker App</p>
                    <div className='imgOverlay'>
                        <p>This is new content 6</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project