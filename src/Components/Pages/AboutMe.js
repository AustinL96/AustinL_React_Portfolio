import './AboutMe.css';

function AboutMe() {
    return (
        <div className="aboutMe">
            <div className="aboutMeContainer">
                <h2>About Me</h2>
                <p>I am a web developer living in south Jersey. I spend most of days coding, enjoying life with family & friends, painting miniatures, and worldbuilding. Creativity is my passion, and whether it's a customer, a student, or one of my players in my D&D game the user experience is paramount to me.
                </p>
                <p>My skills lie in different areas of web development including HTML, CSS, JavaScript, and frameworks like React. I have worked to the bone to try and get my skill set to the level it is now and I seek new knowledge every day. Unrelated to web/app development, I have experience with work as an instructor and in training prospective employees.
                </p>
                <p>If you're interested in contacting me for work, please visit my Contacts and let's get in touch!
                </p>
            </div>
            <div className="imageContainer">
                <img className="profileImage" src="/AustinLewis.png" alt="A profile picture of Austin Lewis" />
            </div>
        </div>
    )
}

export default AboutMe