import { Button } from "@mui/material";
import { FaGithub } from "react-icons/fa";
import { IoIosArrowBack, IoIosArrowUp } from "react-icons/io";

export default function FicheProjet({ project, goBack }) {

    const styles ={
        backButton:{
             width: '1em', 
             height: '1em', 
             color: 'black', 
             alignItems: 'center', 
             fontSize: '5em', 
             position: "relative", 
             top: 0, left: 0, 
             backgroundColor: "white", 
             border: '1px solid #c0c0c0', 
             borderRadius: "50%"
        },
        upButton:{
            width: '1em', 
            height: '1em', 
            color: 'black', 
            alignItems: 'center', 
            fontSize: '5em', 
            position: "fixed", 
            bottom: 10, right: 10, 
            backgroundColor: "white", 
            border: '1px solid #c0c0c0', 
            borderRadius: "50%"
        },
        projetHerder:{
            display: 'flex', 
            flexDirection: 'column', 
            margin: '2em', 
            textAlign: 'center', 
            alignItems: 'center', 
            gap: '1em'
        },
        projectName:{
            fontWeight: 'bold', 
            fontSize: '1.5em'
        }

    }


    return (
        <>
            <Button onClick={goBack} href="#" variant="contained" style={styles.backButton}>
                <IoIosArrowBack />
            </Button>
            <div >
                <div style={styles.projetHerder} >
                    <div  style={styles.projectName}>{project.name}</div>
                    <img src={`./src/assets/logos/${project.logo.src}`} alt={project.logo.alt} className="logo" width={80} height={80} style={{ borderRadius: project.logo.form === "square" ? "15px" : "50px" }} />
                </div>
                <p>{project.description}</p>
                <div className="project_elements">
                    <div className="project_info">
                        {project.urls.some(url => url.github?.url || url.link?.url) && (
                            <div className="links">
                                {project.urls.map((url, index) => (
                                    url.github?.url ? (
                                        <Button key={index} sx={{ backgroundColor: '#000', borderRadius: 20 }} variant="contained">
                                            <a href={`https://github.com/SlasherDev/${url.github.url}`} target="_blank" rel="noreferrer" style={{ color: 'white', textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
                                                <FaGithub size={25} style={{ marginRight: 8 }} />{url.github.description}
                                            </a>
                                        </Button>
                                    ) : url.link?.url ? (
                                        <Button key={index} sx={{ backgroundColor: '#009688', borderRadius: 20 }} variant="contained">
                                            <a href={url.link.url} target="_blank" rel="noreferrer" style={{ color: 'white', textDecoration: 'none' }}>
                                                {url.link.description}
                                            </a>
                                        </Button>
                                    ) : null
                                ))}
                            </div>
                        )}

                        <div className="tech_group">
                            {project.technologies.map((tech, index) => (
                                <div key={index} className="tech_element">
                                    <div className="tech_name">{tech.name}</div>
                                    <img src={`./src/assets/techs/${tech.img.src}`} alt={tech.img.alt} />
                                </div>
                            ))}
                        </div>
                    </div>

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
                <Button href="#" variant="contained" style={styles.upButton}>
                    <IoIosArrowUp />
                </Button>
            </div>
        </>
    );
}