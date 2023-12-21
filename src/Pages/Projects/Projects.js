import React, { useState } from 'react'
import './Projects.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
function Projects() {
    //  const [proj,setProj]=useState(" ")
        let projects = [
            {
                id: "01",
                prjectName: "News App",
                description: "zzzzzzzzz",
                TechStack:"yehbdn"

            },
            {
                id: "02",
                prjectName: "News",
                description: "zzzzzzzzz",
                TechStack:"yehbdn"
            },
            {
                id: "03",
                prjectName: "Ngyfrn",
                description: "zzzzihfnezzzzz",
                TechStack:"yehbdn"
            },

        ]
        // setProj(projects)
        // console.log(proj)

    return (
        <>
            <section id='projects'>



                <div className="Projects-main">
                    <h1>Projects</h1>
                    {
                        projects.map((value) => {
                                return (
                                    <div className="card">
                                    <Card key={value.id}>
                                        <Card.Img variant="top" src={"https://picsum.photos/200/300"
                                        } />
                                        <Card.Body>
                                            <Card.Title>{value.prjectName}</Card.Title>
                                            <Card.Text>
                                                {value.description}
                                            </Card.Text> 
                                            <Card.Text>
                                                {value.description}
                                            </Card.Text>
                                            <Button className='btn btn-primary' href={value.url} target="_blank">Project Link</Button>
                                            <Button className='btn btn-primary' href={value.url} target="_blank">Live Url</Button>
                                        </Card.Body>
                                    </Card>
                                    </div>
                                )
                            })} 
                </div>
            </section>
        </>

    )
}

export default Projects
