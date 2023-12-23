import React from 'react'
import './Projects.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Navbar from '../../components/Navbar/Navbar'

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
            description: "An Api based project with using only react js and external api that can fetch the some of current news.In here The NewsApi.org website's API is used for the real time news data.It shows the news with the tumbnail and Read more option from that option the user can redirect to the official source of the news",
            TechStack: "React js, API"

        },
        {
            id: "02",
            prjectName: "E commerce Website",
            description: " Developed a project with  React Js as Frontend with React Hooks and some packages like axios,formik,react-bootstrap.Node Js is used as backend with some packages like express for server creation multer for file handeling , mongoose for connection with databse and aws-sdk for connect with AWS. MongoDB is used for the databse to store user or the product data and AWS S3 Bucket is used for the image storage",
            TechStack: "React Js,Node Js,MongoDb, AWS"
        },
        {
            id: "03",
            prjectName: "Brain tumor detection using deep learning",
            description: " A deep learning project using the YOLO object detection model that is trained in the Brain Tumor dataset. Here the YOLO v8 is used.The model is trained upto 100 epochs that can give quite good accuracy.",
            TechStack: "ultralytics,pandas,numpy,matplotlib,OpenCv"
        }

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
                                                        <Card.Text><span>Tech Stack:</span>
                                                            {value.TechStack}
                                                        </Card.Text>
                                                        <Card.Text>
                                                            {value.description}
                                                        </Card.Text>
                                                        <Button className='btn btn-primary button ' href={value.url} target="_blank">Project Link</Button>
                                                        <Button className='btn btn-primary button ' href={value.url} target="_blank">Live Url</Button>
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
