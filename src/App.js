import React from 'react';
import './App.css';
import GitHubRepoCard from './components/GitHubRepoCard';
import VideoEmbed from './components/VideoEmbed';

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

  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = '/Madeleinne_Tan_Resume.pdf';
    link.download = 'Madeleinne_Tan_Resume.pdf';
    link.click();
  };

  return (
    <div className="App">
      {/* Navigation */}
      <nav className="navbar-responsive">
        <div className="nav-container">
          {['Home', 'Education', 'Experience', 'Projects', 'Contact'].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item.toLowerCase())}
              className="nav-item-responsive"
            >
              {item}
            </button>
          ))}
        </div>
      </nav>

      {/* Home Section */}
      <section id="home" className="section-responsive home-section">
        <div className="container-responsive">
          <div className="home-grid">
            <div className="home-text">
              <h1 className="main-heading">
                Hello, I'm Madeleinne!
              </h1>
              <p className="sub-heading">
                I'm a software engineer.
              </p>
              <p className="hero-prompt">
                <span className="prompt-path">~/madeleinne</span>
                <span className="prompt-symbol"> $ </span>
                whoami
                <br />
                <span className="prompt-output">builder of things that (mostly) work</span>
                <span className="prompt-cursor" aria-hidden="true" />
              </p>
            </div>
            <div className="home-image">
              <div className="image-container">
                <div className="image-background"></div>
                <img 
                  src="/images/Headshot.JPG" 
                  alt="Madeleinne's Headshot"
                  className="profile-image"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="section-responsive education-section">
        <div className="container-responsive">
          <div className="education-grid">
            <div className="education-image">
              <div className="image-container">
                <div className="image-background left"></div>
                <img 
                  src="/images/2025Sign.JPG" 
                  alt="Madeleinne standing in front of a 2025 sign"
                  className="education-photo"
                />
              </div>
            </div>
            <div className="education-content">
              <div className="education-intro">
                <p className="intro-text">
                  I am a proud Arizona State University (ASU) Alumna. It is with
                  great joy that I can provide the following skills to my next
                  project, including but not limited to:
                </p>
              </div>
              
              <div className="skills-grid">
                <div className="skill-item">
                  <div className="skill-icon">💻</div>
                  <h3>Web Development</h3>
                </div>
                
                <div className="skill-item">
                  <div className="skill-icon">🗄️</div>
                  <h3>Database Management</h3>
                  <p>(Firebase, SQL)</p>
                </div>
                
                <div className="skill-item">
                  <div className="skill-icon">🤖</div>
                  <h3>AI LLMs</h3>
                  <p>(Gemini API)</p>
                </div>
                
                <div className="skill-item">
                  <div className="skill-icon">📊</div>
                  <h3>Machine Learning</h3>
                  <p>Training ML models on Data</p>
                </div>
                
                <div className="skill-item">
                  <div className="skill-icon">📅</div>
                  <h3>Scrum/Agile</h3>
                  <p>Experience with practices</p>
                </div>
              </div>
              
              <button
                onClick={downloadResume}
                className="resume-button-responsive"
              >
                <span className="resume-icon">📄</span>
                Want to learn more? Click here to download my resume!
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="section-responsive experience-section">
        <div className="container-responsive">
          <h2 className="section-title">
            Here are my projects and experience!
          </h2>
          
          <div className="projects-grid">
            <div className="project-card">
              <h3 className="project-title">Capstone</h3>
              <ul className="project-list">
                <li>Built an AI chatbot that would assist Canadian senior citizens with applying for financial aid programs, as applications to programs such as the Canada Pension Plan (CPP) have inaccessible interfaces for the elderly.</li>
                <li>The chatbot would supply some knowledge and help the elderly apply with the confidence that cannot be supported by existing applications.</li>
                <li>Sponsored by Beam Group, a company dedicated to public service.</li>
                <li>To ask for further questions about this project or a reference for our team's performance, please contact Jerrett Myers.</li>
              </ul>
            </div>
            
            <div className="project-card">
              <h3 className="project-title">
                SASE Web Committee Member and Dance Co-Captain
              </h3>
              <ul className="project-list">
                <li>The Society of Asian Scientists and Engineers (SASE) is a student organization that supports career development, academic success, and student networking.</li>
                <li>Contributed to ASU SASE's website's UI and UI responsiveness.</li>
                <li>Briefly contributed to the administrative pages by making a form for the admins to track the number of active student members in SASE.</li>
                <li>SASE Dance Member for 5 semesters and Dance Co-Captain to instruct the choreography of "Chk Chk Boom" by Stray Kids</li>
                <li>SASE Dance is a "sub-unit" unique to SASE ASU to support student networking, teamwork, and bonding over music popular in Asia.</li>
              </ul>
            </div>
            
            <div className="project-card">
              <h3 className="project-title">
                Training a Naive-Bayes ML Model
              </h3>
              <ul className="project-list">
                <li>CSE 475: Intro to Machine Learning Academic project</li>
                <li>Chose dataset from Kaggle about Netflix movies and tv shows</li>
                <li>The goal of this project was to take the dataset, perform exploratory analysis on it, clean it, perform any necessary encoding, train the ML model on a portion of the data, then test the fitted model on the remaining portion of data</li>
                <li>Trained a Naive-Bayes Model to predict a movie's rating (e.g. PG, G, PG-13, R) based on its movie description, the cast, the director, and duration.</li>
                <li>Accuracy and precision were 43%, likely due to underfitting.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section-responsive projects-section">
        <div className="container-responsive">
          <h2 className="section-title">Projects</h2>
          <p className="projects-subtitle">
            A closer look at a few things I've built, trained, or helped ship.
          </p>

          <div className="editor-grid">
            {/* Capstone AI chatbot: demo video + the sponsoring team's repo */}
            <div className="editor-window editor-window--wide">
              <div className="editor-titlebar">
                <span className="editor-dot dot-red" />
                <span className="editor-dot dot-yellow" />
                <span className="editor-dot dot-green" />
                <span className="editor-tab">capstone-chatbot/</span>
              </div>
              <div className="editor-body">
                <p className="editor-blurb">
                  An AI chatbot built to help Canadian senior citizens navigate
                  applications for financial aid programs like the Canada
                  Pension Plan, sponsored by Beam Group. Here's a walkthrough
                  of the chatbot in action.
                </p>
                <VideoEmbed
                  videoId="jjZtX3cmgl4"
                  title="Capstone AI chatbot demo"
                />
                <p className="video-credit">
                  Demo recorded with my capstone team.
                </p>
                <GitHubRepoCard
                  owner="ntrick-beamgroup"
                  repo="beam-group"
                  tabName="beam-group/ (team repo)"
                  fallbackDescription="The capstone team's repository, sponsored by Beam Group. I contributed as part of the ASU capstone team."
                />
              </div>
            </div>

            {/* Naive-Bayes ML model */}
            <GitHubRepoCard
              owner="MDTea"
              repo="CSE-475-Final-Project"
              tabName="naive-bayes-model.ipynb"
              fallbackDescription="CSE 475 final project: cleaned and encoded a Kaggle Netflix dataset, then trained a Naive-Bayes model to predict a title's rating from its description, cast, director, and duration."
            />

            {/* Grocery Itinerary App, in progress */}
            <GitHubRepoCard
              owner="napkinnovations"
              repo="grocery-itinerary-app"
              tabName="grocery-itinerary-app/"
              badge="In progress"
              fallbackDescription="An app for planning grocery runs into an efficient store-by-store itinerary."
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-responsive contact-section">
        <div className="container-responsive">
          <div className="contact-header-responsive">
            <h2 className="section-title">Contact Information</h2>
            <p className="contact-subtitle-responsive">Let's get in touch!</p>
          </div>
          
          <div className="contact-grid">
            <div className="contact-card-responsive">
              <div className="contact-icon-responsive">📧</div>
              <h3>Email</h3>
              <a 
                href="mailto:madeleinne.tan@gmail.com" 
                className="contact-link-responsive"
              >
                madeleinne.tan@gmail.com
              </a>
            </div>
            
            <div className="contact-card-responsive">
              <div className="contact-icon-responsive">💼</div>
              <h3>LinkedIn</h3>
              <a 
                href="https://www.linkedin.com/in/madeleinne-tan/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="contact-link-responsive"
              >
                linkedin.com/in/madeleinne-tan
              </a>
            </div>
            
            <div className="contact-card-responsive">
              <div className="contact-icon-responsive">💻</div>
              <h3>GitHub</h3>
              <a 
                href="https://github.com/MDTea" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="contact-link-responsive"
              >
                github.com/MDTea
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;