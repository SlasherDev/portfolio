export default function CvViewer() {

    return (
        <>
        <div style={{ width: "100vw", height: "100vh", overflow: "hidden" }}>
            <embed
                src="./src/assets/files/cv_bryan_bosse.pdf"
                type="application/pdf"
                width="100%"
                height="100%"
            />
        </div>
        </>

    );
}