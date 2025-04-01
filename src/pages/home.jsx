import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import { IoMdDownload } from "react-icons/io";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import projects from "../projects";

function Home() {
  const navigate = useNavigate();

  return (
    <>
    <nav>
                <div className='toRight'>
                <a href="/"><div className='title'>SlasherDev</div></a>
                </div>

                <div className='toCenter'>
                    <a href="https://www.linkedin.com/in/bryan-bosse/" target='_blank'>< FaLinkedin /></a>
                    <a href="https://github.com/SlasherDev" target='_blank'><FaGithub /></a>
                </div>
                <div className='toLeft'>
                    <a href='./src/assets/files/cv_bryan_bosse.pdf' download><Button variant="contained" sx={{ backgroundColor: '#00e2cd', borderRadius: 20, fontSize: '1.3rem' }}><IoMdDownload /> Télécharger mon CV</Button></a>
                </div>
            </nav>
    <main>
      <div className="ficheList">
        {projects.map((project) => (
          <Button
            key={project.id}
            variant="contained"
            sx={{ backgroundColor: "#009688" }}
            className="fiche"
            onClick={() => navigate(`/${project.id}`)}
          >
            <img src={`./src/assets/logos/${project.logo.src}`} alt={project.logo.alt} className="logo" width={80} height={80} style={{borderRadius : project.logo.form === "square" ? "15px" : "50px" }} />
            <div className="ficheName">{project.name}</div>
          </Button>
        ))}
      </div>
    </main>
    </>
  );
}

export default Home;
