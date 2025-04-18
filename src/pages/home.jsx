import { useState } from "react";
import { Accordion, AccordionDetails, AccordionSummary, Button, Typography } from "@mui/material";
import { IoMdDownload } from "react-icons/io";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import projects from "../projects.json";
import FicheProjet from './FicheProjet';

export default function Home() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <>
      {/* Navigation Desktop et Mobile */}
      <nav className="desktop">
        <div className='toRight'>
          <a href="/"><div className='title'>SlasherDev</div></a>
        </div>
        <div className='toCenter'>
          <a href="https://www.linkedin.com/in/bryan-bosse/" target='_blank'>< FaLinkedin /></a>
          <a href="https://github.com/SlasherDev" target='_blank'><FaGithub /></a>
        </div>
        <div className='toLeft'>
          <a href='./src/assets/files/cv_bryan_bosse.pdf' download>
            <Button variant="contained" style={{ backgroundColor: '#00e2cd', borderRadius: 30, fontSize: '1.3rem' }}>
              <IoMdDownload /> Télécharger mon CV
            </Button>
          </a>
        </div>
      </nav>

      <nav className="mobile">
        <Accordion sx={{ backgroundColor: '#009688', color: 'white', boxShadow: 'none' }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: 'white', fontSize: '3em' }} />}>
            <Typography sx={{ fontSize: '3em', fontWeight: 'bold' }}>SlasherDev</Typography>
          </AccordionSummary>
          <AccordionDetails sx={{}}>
            <div className='toCenter'>
              <a href="https://www.linkedin.com/in/bryan-bosse/" target='_blank'>< FaLinkedin /></a>
              <a href="https://github.com/SlasherDev" target='_blank'><FaGithub /></a>
            </div>
          </AccordionDetails>
          <AccordionDetails sx={{ justifyContent: 'center' }}>
            <a href='./src/assets/files/cv_bryan_bosse.pdf' download>
              <Button variant="contained" sx={{ backgroundColor: '#00e2cd', borderRadius: 20, fontSize: '0.9rem', width: '90%' }}>
                <IoMdDownload /> Télécharger mon CV
              </Button>
            </a>
          </AccordionDetails>
        </Accordion>
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
                <img src={`./src/assets/logos/${project.logo.src}`} alt={project.logo.alt} className="logo" width={80} height={80} style={{ borderRadius: project.logo.form === "square" ? "15px" : "50px" }} />
                <div className="ficheName">{project.name}</div>
              </Button>
            ))}
          </div>
        )}
      </main>
    </>
  );
}
