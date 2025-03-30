import { useState } from 'react'
import { Button } from '@mui/material';
import { IoMdDownload } from "react-icons/io";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Home() {
    //const [count, setCount] = useState()

    return (
        <>
            <nav>
                <div className='toRight'>
                    <div className='title'>SlasherDev</div>
                </div>

                <div className='toCenter'>
                    <a href="https://www.linkedin.com/in/bryan-bosse/" target='_blank'>< FaLinkedin /></a>
                    <a href="https://github.com/SlasherDev" target='_blank'><FaGithub /></a>
                </div>
                <div className='toLeft'>
                    <a href='#' download><Button variant="contained" sx={{ backgroundColor: '#00e2cd', borderRadius: 20, fontSize: '1.3rem' }}><IoMdDownload /> Télécharger mon CV</Button></a>
                </div>
            </nav>
            <main>
                <div className='ficheList'>
                    <div className='fiche'>Blackwell</div>
                    <div className='fiche'>Clow_Card_bot</div>
                    <div className='fiche'> Watsub</div>
                    <div className='fiche'>pokedex</div>
                    <div className='fiche'>react lab</div> 
                </div>
            </main>
        </>
    )
}

export default Home
