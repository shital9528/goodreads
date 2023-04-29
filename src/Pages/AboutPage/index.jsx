import React from 'react'
import Navbar from '../../Components/Navbar'

const AboutPage = () => {
    return (
        <div>
            <Navbar />
            <div className="jumbotron text-center">
                <div className="disply-4">About Us</div>
                <p className="lead">This is simple about us page</p>
            </div>
            <div className="container">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae deleniti exercitationem ducimus unde? Esse quaerat nam quos quidem natus eligendi, similique veniam laudantium laboriosam, ipsam quod magni sed! Molestiae, expedita?
                </p>
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non odio alias quod eius? Nesciunt illo quae pariatur magni dolorem aliquam quasi laboriosam, aspernatur rerum officiis recusandae sint ipsa quam numquam.
                </p>
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto ullam placeat excepturi, aut optio quaerat non. Saepe nisi repellendus consequuntur quisquam necessitatibus facere sunt voluptas illo et quod, hic at.
                </p>
            </div>

        </div>
    )
}

export default AboutPage
