import './App.css';
// HTML and CSS heavily assisted by Figma and the AutoHTML plugin.
function App() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if(element){
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <div className="App">
      <div className="window">
        <div className="frame-view">
          {/* HOME/INTRO PAGE */}
          <div id="home" className="home-page">
            <div className="rectangle-behind-img"></div>
            <img className="image-headshot" src="/images/Headshot.JPG" alt="Madeleinne's Headshot"/>
            <div className="intro-text">
              <div className="my-name-is">Hello, I'm Madeleinne!</div>
              <div className="ima-sw">I'm a software engineer.</div>
            </div>        
          </div>
          {/* EDUCATION */}
          <div id="education" className="education">
            <div className="rectangle-behind-grad-img"></div>
            <img className="image-grad-photo" src="/images/2025Sign.JPG" alt="Madeleinne standing in front of a 2025 sign"/>
            <div className="education-text-content">
              <div className="asu-alumna">
                <div className="content-text">
                  I am a proud Arizona State University (ASU) Alumna. It is with
                  great joy that I can provide the following skills to my next
                  project, including but not limited to:{" "}
                </div>
              </div>
              <div className="frame-skills-encompassing">
                <div className="frame-toptext">
                  <div className="frame-web">
                    <img className="web-design" src="/images/web-design0.png" alt=""/>
                    <div className="web-development">Web Development </div>
                  </div>
                  <div className="frame-data">
                    <img
                      className="database-administrator"
                      src="/images/database-administrator0.png"
                      alt=""
                    />
                    <div className="database-management-firebase-sql">
                      Database Management (Firebase, SQL){" "}
                    </div>
                  </div>
                  <div className="frame-ai">
                    <img
                      className="artificial-intelligence"
                      src="/images/artificial-intelligence0.png"
                      alt=""
                    />
                    <div className="text-ai-desc">
                      Experience working with AI LLMs (Gemini API){" "}
                    </div>
                  </div>
                </div>
                <div className="frame-lowertext">
                  <div className="frame-ml">
                    <img className="graph" src="/images/graph0.png" alt=""/>
                    <div className="text-ml-desc">
                      Training Machine Learning models on Data{" "}
                    </div>
                  </div>
                  <div className="frame-agile">
                    <img className="timesheet" src="/images/timesheet0.png" alt=""/>
                    <div className="text-scrum-desc">
                      Experience with Scrum / Agile practices{" "}
                    </div>
                  </div>
                </div>
              </div>
              <div 
                className="resume-button-div"
                onClick={() => {
                  const link = document.createElement('a');
                  link.href = '/Madeleinne_Tan_Resume.pdf';
                  link.download = 'Madeleinne_Tan_Resume.pdf';
                  link.click();
                }}
                style={{cursor: 'pointer'}}>
                <img className="resume" src="/images/resume0.png" alt=""/>
                Want to learn more? Click here to download a copy of my resume!{" "}
              </div>
            </div>
          </div>
          {/* EXPERIENCE */}
          <div id="experience" className="projects">
            <div className="project-list-div">
              <div className="capstone-box">
                <div className="capstone">Capstone </div>
                <ul className="capstone-box-content">
                  <li>
                    Built an AI chatbot that would assist Canadian senior citizens with applying for financial aid programs, as applications to programs such as the Canada Pension Plan (CPP) have inaccessible interfaces for the elderly.
                  </li>
                  <li>
                    The chatbot would supply some knowledge and help the elderly apply with the confidence that cannot be supported by existing applications.
                  </li>
                  <li>
                    Sponsored by Beam Group, a company dedicated to public service. 
                  </li>
                  <li>
                    To ask for further questions about this project or a reference for our team's performance, please contact Jerrett Myers (insert link here).
                  </li>
                </ul>
                <img className="vector-1" src="vector-10.svg" />
              </div>
              <div className="sase-box">
                <div className="sase-web-committee-member">
                  SASE Web Committee Member and Dance Co-Captain{" "}
                </div>
                <ul className="sase-box-content">
                  <li>The Society of Asian Scientists and Engineers (SASE) is a student organization that supports career development, academic success, and student networking.</li>
                  <li>Contributed to ASU SASE's website's UI and UI responsiveness.</li>
                  <li>Briefly contributed to the administrative pages by making a form for the admins to track the number of active student members in SASE.</li>
                  <li>SASE Dance Member for 5 semesters and Dance Co-Captain to instruct the choreography of "Chk Chk Boom" by Stray Kids
                    <li>SASE Dance is a "sub-unit" unique to SASE ASU to support student networking, teamwork, and bonding over music popular in Asia.</li>
                  </li>
                </ul>
                <img className="vector-2" src="vector-20.svg" />
              </div>
              <div className="nb-model-box">
                <div className="training-a-naive-bayes-ml-model">
                  Training a Naive-Bayes ML Model{" "}
                </div>
                <ul className="nb-box-content">
                  <li>CSE 475 : Intro to Machine Learning Academic project</li>
                  <li>Chose dataset from Kaggle about Netflix movies and tv shows</li>
                  <li>The goal of this project was to take the dataset, perform exploratory analysis on it, clean it, perform any necessary encoding, train the ML model on a portion of the data, then test the fitted model on the remaining portion of data</li>
                  <li>Trained a Naive-Bayes Model to predict a movie's rating (e.g. PG, G, PG-13, R) based on its movie description, the cast, the director, and duration.</li>
                  <li>Accuracy and precision were 43%, likely due to underfitting. </li>
                </ul>
                <img className="vector-3" src="vector-30.svg" />
              </div>
            </div>
            <div className="project-header">
              <div className="projects-and-experience">
                Here are my projects and experience!{" "}
              </div>
            </div>
          </div>
          {/* CONTACT */}
          <div id="contact" className="contact">
            <div className="contact-header">
              <div className="contact-title">Contact Information</div>
              <div className="contact-subtitle">Let’s get in touch!</div>
            </div>
            <div className="contact-cards">
              <div className="contact-card">
                <img src="/images/email0.png" alt="" className="contact-icon" />
                <h3>Email</h3>
                <a href="mailto:madeleinne.tan@gmail.com" className="contact-link">madeleinne.tan@gmail.com</a>
              </div>
              <div className="contact-card">
                <img src="/images/linked-in0.png" alt="" className="contact-icon" />
                <h3>LinkedIn</h3>
                <a href="https://www.linkedin.com/in/madeleinne-tan/" target="_blank" rel="noopener noreferrer" className="contact-link">
                  linkedin.com/in/madeleinne-tan
                </a>
              </div>
              <div className="contact-card">
                <img src="/images/git-hub0.png" alt="" className="contact-icon" />
                <h3>GitHub</h3>
                <a href="https://github.com/MDTea" target="_blank" rel="noopener noreferrer" className="contact-link">
                  github.com/MDTea
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
      <nav className="navbar">
        <div className="nav-item" onClick={() => scrollToSection('home')}>Home</div>
        <div className="nav-item" onClick={() => scrollToSection('education')}>Education</div>
        <div className="nav-item" onClick={() => scrollToSection('experience')}>Experience</div>
        <div className="nav-item" onClick={() => scrollToSection('contact')}>Contact</div>
      </nav>
    </div>

  );
}

export default App;
