import { useState } from "react";
import { Button} from "@mui/material";
import { TbFileCv } from "react-icons/tb";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import projects from "../projects.json";
import FicheProjet from './FicheProjet';

export default function Home() {
    const [selectedProject, setSelectedProject] = useState(null);

    return (
        <>
           <nav className="navbar navbar-expand-lg navbar-dark bg-teal">
  <div className="container-fluid">
    {/* Logo (toujours à gauche) */}
    <a className="navbar-brand title" href="/">SlasherDev</a>

    {/* Burger button (déjà à droite par défaut avec Bootstrap) */}
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent" aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    {/* Navbar Links */}
    <div className="collapse navbar-collapse" id="navbarContent">
      <ul className="navbar-nav mx-auto mb-2 justify-content-center align-items-center">
        {/* Social Links */}
        <li className="nav-item mx-2">
          <a className="nav-link" href="https://www.linkedin.com/in/bryan-bosse/" target="_blank" rel="noreferrer">
            <FaLinkedin />
          </a>
        </li>
        <li className="nav-item mx-2">
          <a className="nav-link" href="https://github.com/SlasherDev" target="_blank" rel="noreferrer">
            <FaGithub />
          </a>
        </li>
      </ul>

      {/* Button CV */}
      <div>
        <Button href='/cv' target='_blank' variant="contained" style={{ backgroundColor: '#00e2cd', borderRadius: 30, fontSize: '1.3rem' }}>
          <TbFileCv /> Consulter mon CV
        </Button>
      </div>
    </div>
  </div>
</nav>



            <main>
                {selectedProject ? (
                    <FicheProjet project={selectedProject} goBack={() => setSelectedProject(null)} />
                ) : (
                    <div className="ficheList">
                        {projects.map((project) => (
                            <Button
                                key={project.id}
                                variant="contained"
                                sx={{ backgroundColor: "#009688" }}
                                className="fiche"
                                onClick={() => setSelectedProject(project)}
                            >
                                <img src={`./src/assets/logos/${project.logo.src}`} alt={project.logo.alt} className="logo" style={{
                                    borderRadius: project.logo.form === "square" || project.logo.form === "rect" ? "15px" : "50px",
                                    width: project.logo.form === "square" || project.logo.form === "round" ? "80px" : "150px",
                                    height: project.logo.form === "square" || project.logo.form === "round" ? "80px" : null
                                }} />
                                <div className="ficheName">{project.name}</div>
                            </Button>
                        ))}
                    </div>
                )}
            </main>
        </>
    );
}
