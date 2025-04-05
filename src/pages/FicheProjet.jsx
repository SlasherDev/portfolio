import { useParams } from "react-router-dom";
import projects from "../projects";
import { Button } from "@mui/material";
import { FaGithub } from "react-icons/fa";
import { IoIosArrowBack } from "react-icons/io";

function FicheProjet() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return <h2>Projet non trouvé</h2>;
  }

  return (
    <>
      <nav>
        <div className="toRight">
          <a href="/"><IoIosArrowBack /><div className='title'>{project.name}</div></a>
        </div>
        <div className="toCenter">
          <img src={`./src/assets/logos/${project.logo.src}`} alt={project.logo.alt} className="logo" width={80} height={80} style={{ borderRadius: project.logo.form === "square" ? "15px" : "50px" }} />
        </div>

      </nav>
      <main>
      <p>{project.description}</p>

      <div className="project_elements">
        <div className="project_info">
        {project.urls.some(url => url.github?.url || url.link?.url) && (
      <div className="links">
        {project.urls.map((url, index) => (
          url.github?.url ? (
            <Button key={index} sx={{ backgroundColor: '#000', borderRadius:20 }} variant="contained">
              <a
                href={`https://github.com/SlasherDev/${url.github.url}`}
                target="_blank"
                style={{ color: 'white', textDecoration: 'none', display: 'flex', alignItems: 'center' }}
              >
                <FaGithub size={25} style={{ marginRight: 8}}/>{url.github.description}
              </a>
            </Button>
          ) : url.link?.url ? (
            <Button key={index} sx={{ backgroundColor: '#009688', borderRadius:20 }} variant="contained">
              <a
                href={url.link.url}
                target="_blank"
                style={{ color: 'white', textDecoration: 'none' }}
              >
                {url.link.description}
              </a>
            </Button>
          ) : null
        ))}
      </div>
    )}

          {/* Technologies */}
          <div className="tech_group">
            {project.technologies.map((tech, index) => (
              <div key={index} className="tech_element">
                <div className="tech_name">{tech.name}</div>
                <img src={`./src/assets/techs/${tech.img.src}`} alt={tech.img.alt} />
              </div>
            ))}
          </div>
        </div>
        {/* Screenshots */}
        <div className="screenshots">
          <div className="title">Captures d'écran</div>
          <div className="screens_group">
            {project.screens.map((screen, index) => (
              <div className="screens_element" key={index}>
                <div className="screens_element_name">{screen.title}</div>
                <img src={`./src/assets/screens/${project.id}/${screen.src}`} alt={screen.alt} loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </div>
      </main>
    </>
  );
}

export default FicheProjet;
