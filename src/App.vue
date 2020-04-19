<template>
  <div class="main-wrapper">
    <div class="container">
      <ul class="nav">
        <li class="nav-item">
          <a class="nav-link" href="#about">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#experience">Experience</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#education">Education</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#skills">Skills</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#interests">Interests</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#awards">Awards</a>
        </li>
      </ul>

      <div class="container-fluid">
        <section id="about" class="resume-section">
          <div class="my-auto">
            <h1>{{ firstname }} {{ lastname }}</h1>
            <p>{{ about }}</p>
            <div>
              <a href="./cv_2019091.pdf" download>Download CV</a>
            </div>
            <ul>
              <li>
                <a :href="facebookURL" target="_blank">
                  <span>
                    <i></i>
                    <i></i>
                  </span>
                </a>
              </li>
              <li>
                <a :href="twitterURL" target="_blank">
                  <span>
                    <i></i>
                    <i></i>
                  </span>
                </a>
              </li>
              <li>
                <a :href="linkedinURL" target="_blank">
                  <span>
                    <i></i>
                    <i></i>
                  </span>
                </a>
              </li>
              <li>
                <a :href="githubURL" target="_blank">
                  <span>
                    <i></i>
                    <i></i>
                  </span>
                </a>
              </li>
              <li>
                <a :href="mediumURL" target="_blank">
                  <span>
                    <i></i>
                    <i></i>
                  </span>
                </a>
              </li>
              <li>
                <a :href="mailto" target="_blank">
                  <span>
                    <i></i>
                    <i></i>
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </section>

        <section id="experience">
          <div>
            <h2>Experience</h2>
            <div v-for="job in experiences" :key="job.description">
              <div>
                <h3>{{ job.position }}</h3>
                <div>{{ job.company }}</div>
                <p>{{ job.description }}</p>
              </div>
              <div>
                <span>{{ job.startDate }} – {{ job.endDate }}</span>
              </div>
            </div>
          </div>
        </section>

        <section id="education">
          <div>
            <h2>Education</h2>
            <div>
              <div>
                <h3>University of Tokyo</h3>
                <div>Bachelor of Engineering</div>
                <div>Aeronautical and Astronautical Engineering</div>
              </div>
              <div>
                <span>April 2011 – March 2015</span>
              </div>
            </div>
          </div>
        </section>

        <section id="skills">
          <div>
            <h2>Skills</h2>
            <div>Infrastructure</div>
            <ul>
              <li>
                <i></i>MySQL
              </li>
              <li>
                <i></i>GCP
              </li>
              <li>
                <i></i>Docker
              </li>
              <li>
                <i></i>Kubernetes
              </li>
              <li>
                <i></i>Ansible
              </li>
              <li>
                <i></i>Terraform
              </li>
            </ul>

            <div>Backend</div>
            <ul>
              <li>
                <i></i>PHP
              </li>
              <li>
                <i></i>Golang
              </li>
              <li>
                <i></i>Python
              </li>
              <li>
                <i></i>Object Oriented Programming
              </li>
              <li>
                <i></i>Design Pattern
              </li>
              <li>
                <i></i>SQL
              </li>
            </ul>

            <div>Mobile</div>
            <ul>
              <li>
                <i></i>iOS
              </li>
              <li>
                <i></i>Swift
              </li>
              <li>
                <i></i>Objective-C
              </li>
              <li>
                <i></i>Reactive Programming
              </li>
              <li>
                <i></i>MVVM Architecture
              </li>
            </ul>

            <div>Frontend</div>
            <ul>
              <li>
                <i></i>JavaScript
              </li>
              <li>
                <i></i>Knockout JS
              </li>
            </ul>

            <div>Others</div>
            <ul>
              <li>
                <i></i>Machine Learning
              </li>
              <li>
                <i></i>System Programming
              </li>
              <li>
                <i></i>Raspberry Pi
              </li>
              <li>
                <i></i>Design
              </li>
              <li>
                <i></i>Agile
              </li>
            </ul>
          </div>
        </section>

        <section id="interests">
          <div>
            <h2>Interests</h2>
            <p>{{ interest }}</p>
          </div>
        </section>

        <section id="awards">
          <div>
            <h2>Awards &amp; Certifications</h2>
            <ul>
              <li>
                <i></i>Coursera: Machine Learning
              </li>
              <li>
                <i></i>
                Diploma: Project
                <a
                  href="https://github.com/matsuolab-edu/dl4us"
                >DL4US (Deep Learning for All of Us)</a>
              </li>
              <li>
                <i></i>
                Design Lab:
                <a
                  href="https://trydesignlab.com/certificates/design-101/KentaKudo/"
                  target="_blank"
                >Design 101</a>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      firstName: "Kenta",
      lastName: "Kudo",
      title: "My portfolio",
      mailto: "mailto:yd37574@gmail.com",
      about:
        "Engineering graduate with 3.5+ years of Software Engineering experience. I love problem-solving and turning complicated issues into simplified solutions. I am a logical thinker, diligent, curious, and thrive on teamwork. Now I am looking for a new challenge with an exciting and growing company.",
      linkedinURL: "https://www.linkedin.com/in/kenta-kudo-6a4b15a8/",
      githubURL: "https://github.com/KentaKudo",
      twitterURL: "https://twitter.com/_______K_K_",
      facebookURL: "https://www.facebook.com/kentakudo.kenta",
      mediumURL: "https://medium.com/@_______K_K_",
      experiences: [
        {
          position: "Junior Backend Engineer",
          company: "Mercari UK",
          description:
            "Mercari is an e-commerce buying and selling platform. In my role, I write microservices in Golang and deploy them using GAE, GCE, Kubernetes, and Spinnaker. I also develop large userbase applications written in PHP using OOP and TDD practices. Additionally, I deal with some sysadmin tasks such as running DB migrations and executing batch commands on production.",
          startDate: "December 2016",
          endDate: "Present"
        },
        {
          position: "iOS Engineer",
          company: "Smart Tech Ventures",
          description:
            "I developed the e-commerce app using MVC architecture in Swift and Objective-C. I also wrote and created from scratch a healthcare application introducing MVVM architecture and Reactive Programming",
          startDate: "May 2015",
          endDate: "March 2017"
        }
      ],
      interest:
        "I embrace a minimalist lifestyle and keeping things in my life simple. I enjoy learning and experiencing new cultures and travelling the world is great fun. I also love developing my skills working on personal projects such as building deep learning models, designing my own website, and implementing original OS, which works on Raspberry Pi."
    };
  }
};
</script>

<style>
</style>
