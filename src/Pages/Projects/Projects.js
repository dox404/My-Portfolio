import React from 'react'
import './Projects.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


//extra 
import 'bootstrap/dist/css/bootstrap.min.css';
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';

function Projects() {
    //  const [proj,setProj]=useState(" ")
    let projects = [
        {
            id: "01",
            prjectName: "News App",
            description: "zzzzzzzzz",
            TechStack: "React Js"

        },
        {
            id: "02",
            prjectName: "E commerce Website",
            description: "zzzzzzzzz",
            TechStack: "React Js, Node Js,Bootatrp,Mongo Db,AWS"
        },
        {
            id: "02",
            prjectName: "E commerce Website",
            description: "zzzzzzzzz",
            TechStack: "React Js, Node Js,Bootatrp,Mongo Db,AWS"
        },
        {
            id: "02",
            prjectName: "E commerce Website",
            description: "zzzzzzzzz",
            TechStack: "React Js, Node Js,Bootatrp,Mongo Db,AWS"
        },

    ]

    return (
        <>
            <section id='projects'>


                <div className="Projects-main">
                    <div className="container">
                        <div className="row">
                            <h1 className="text-center page-title">Projects</h1>
                            {
                                projects.map((value) => {
                                    return (
                                        <div className="col-md-4 my-5 ">
                                            <div className="card">
                                                <Card key={value.id}>
                                                    <Card.Body>
                                                        <Card.Title>{value.prjectName}</Card.Title>
                                                        <Card.Text>
                                                            {value.TechStack}
                                                        </Card.Text>
                                                        <Card.Text>
                                                            {value.description}
                                                        </Card.Text>
                                                        <Button className='btn btn-primary' href={value.url} target="_blank">Project Link</Button>
                                                        <Button className='btn btn-primary' href={value.url} target="_blank">Live Url</Button>
                                                    </Card.Body>
                                                </Card>
                                            </div>
                                        </div>




                                    )
                                })}
                        </div>
                    </div>
                </div>



            </section>
        </>

    )
}

export default Projects
