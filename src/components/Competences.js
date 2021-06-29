import './Compte.css'
import './Modal.css'
import {useState} from 'react'
import Modal from 'react-modal'
import sass from './images/sass.svg'
const Competences = () => {
    //modal1
    const [isopen,setOpen]=useState(false)
    const close = ()=>{
        setOpen(false);
    }
    const open = ()=>{
        setOpen(true)
    }
    //modal2
    const [isopen1,setOpen1]=useState(false)
    const close1 = ()=>{
        setOpen1(false);
    }
    const open1 = ()=>{
        setOpen1(true)
    }
    //modal3
    const [isopen2,setOpen2]=useState(false)
    const close2 = ()=>{
        setOpen2(false);
    }
    const open2 = ()=>{
        setOpen2(true)
    }
    //modal4
    const [isopen3,setOpen3]=useState(false)
    const close3 = ()=>{
        setOpen3(false);
    }
    const open3 = ()=>{
        setOpen3(true)
    }
    //modal5
    const [isopen4,setOpen4]=useState(false)
    const close4 = ()=>{
        setOpen4(false);
    }
    const open4 = ()=>{
        setOpen4(true)
    }
    //modal6
    const [isopen5,setOpen5]=useState(false)
    const close5 = ()=>{
        setOpen5(false);
    }
    const open5 = ()=>{
        setOpen5(true)
    }
    //modal7
    const [isopen6,setOpen6]=useState(false)
    const close6 = ()=>{
        setOpen6(false);
    }
    const open6 = ()=>{
        setOpen6(true)
    }
    //modal8
    const [isopen7,setOpen7]=useState(false)
    const close7 = ()=>{
        setOpen7(false);
    }
    const open7 = ()=>{
        setOpen7(true)
    }
    //modal9
    const [isopen8,setOpen8]=useState(false)
    const close8 = ()=>{
        setOpen8(false);
    }
    const open8 = ()=>{
        setOpen8(true)
    }
    //modal10
    const [isopen9,setOpen9]=useState(false)
    const close9 = ()=>{
        setOpen9(false);
    }
    const open9 = ()=>{
        setOpen9(true)
    }
    //modal11
    const [isopen10,setOpen10]=useState(false)
    const close10 = ()=>{
        setOpen10(false);
    }
    const open10 = ()=>{
        setOpen10(true)
    }
     //modal12
     const [isopen11,setOpen11]=useState(false)
     const close11 = ()=>{
         setOpen11(false);
     }
     const open11 = ()=>{
         setOpen11(true)
     }
    return ( 
        <div className="competences" id="competence">
            <h3 className="title"><svg viewBox="0 0 512 512">
      <path d="M418.2 177.2c-5.4-1.8-10.8-3.5-16.2-5.1.9-3.7 1.7-7.4 2.5-11.1 12.3-59.6 4.2-107.5-23.1-123.3-26.3-15.1-69.2.6-112.6 38.4-4.3 3.7-8.5 7.6-12.5 11.5-2.7-2.6-5.5-5.2-8.3-7.7-45.5-40.4-91.1-57.4-118.4-41.5-26.2 15.2-34 60.3-23 116.7 1.1 5.6 2.3 11.1 3.7 16.7-6.4 1.8-12.7 3.8-18.6 5.9C38.3 196.2 0 225.4 0 255.6c0 31.2 40.8 62.5 96.3 81.5 4.5 1.5 9 3 13.6 4.3-1.5 6-2.8 11.9-4 18-10.5 55.5-2.3 99.5 23.9 114.6 27 15.6 72.4-.4 116.6-39.1 3.5-3.1 7-6.3 10.5-9.7 4.4 4.3 9 8.4 13.6 12.4 42.8 36.8 85.1 51.7 111.2 36.6 27-15.6 35.8-62.9 24.4-120.5-.9-4.4-1.9-8.9-3-13.5 3.2-.9 6.3-1.9 9.4-2.9 57.7-19.1 99.5-50 99.5-81.7 0-30.3-39.4-59.7-93.8-78.4zM282.9 92.3c37.2-32.4 71.9-45.1 87.7-36 16.9 9.7 23.4 48.9 12.8 100.4-.7 3.4-1.4 6.7-2.3 10-22.2-5-44.7-8.6-67.3-10.6-13-18.6-27.2-36.4-42.6-53.1 3.9-3.7 7.7-7.2 11.7-10.7zM167.2 307.5c5.1 8.7 10.3 17.4 15.8 25.9-15.6-1.7-31.1-4.2-46.4-7.5 4.4-14.4 9.9-29.3 16.3-44.5 4.6 8.8 9.3 17.5 14.3 26.1zm-30.3-120.3c14.4-3.2 29.7-5.8 45.6-7.8-5.3 8.3-10.5 16.8-15.4 25.4-4.9 8.5-9.7 17.2-14.2 26-6.3-14.9-11.6-29.5-16-43.6zm27.4 68.9c6.6-13.8 13.8-27.3 21.4-40.6s15.8-26.2 24.4-38.9c15-1.1 30.3-1.7 45.9-1.7s31 .6 45.9 1.7c8.5 12.6 16.6 25.5 24.3 38.7s14.9 26.7 21.7 40.4c-6.7 13.8-13.9 27.4-21.6 40.8-7.6 13.3-15.7 26.2-24.2 39-14.9 1.1-30.4 1.6-46.1 1.6s-30.9-.5-45.6-1.4c-8.7-12.7-16.9-25.7-24.6-39s-14.8-26.8-21.5-40.6zm180.6 51.2c5.1-8.8 9.9-17.7 14.6-26.7 6.4 14.5 12 29.2 16.9 44.3-15.5 3.5-31.2 6.2-47 8 5.4-8.4 10.5-17 15.5-25.6zm14.4-76.5c-4.7-8.8-9.5-17.6-14.5-26.2-4.9-8.5-10-16.9-15.3-25.2 16.1 2 31.5 4.7 45.9 8-4.6 14.8-10 29.2-16.1 43.4zM256.2 118.3c10.5 11.4 20.4 23.4 29.6 35.8-19.8-.9-39.7-.9-59.5 0 9.8-12.9 19.9-24.9 29.9-35.8zM140.2 57c16.8-9.8 54.1 4.2 93.4 39 2.5 2.2 5 4.6 7.6 7-15.5 16.7-29.8 34.5-42.9 53.1-22.6 2-45 5.5-67.2 10.4-1.3-5.1-2.4-10.3-3.5-15.5-9.4-48.4-3.2-84.9 12.6-94zm-24.5 263.6c-4.2-1.2-8.3-2.5-12.4-3.9-21.3-6.7-45.5-17.3-63-31.2-10.1-7-16.9-17.8-18.8-29.9 0-18.3 31.6-41.7 77.2-57.6 5.7-2 11.5-3.8 17.3-5.5 6.8 21.7 15 43 24.5 63.6-9.6 20.9-17.9 42.5-24.8 64.5zm116.6 98c-16.5 15.1-35.6 27.1-56.4 35.3-11.1 5.3-23.9 5.8-35.3 1.3-15.9-9.2-22.5-44.5-13.5-92 1.1-5.6 2.3-11.2 3.7-16.7 22.4 4.8 45 8.1 67.9 9.8 13.2 18.7 27.7 36.6 43.2 53.4-3.2 3.1-6.4 6.1-9.6 8.9zm24.5-24.3c-10.2-11-20.4-23.2-30.3-36.3 9.6.4 19.5.6 29.5.6 10.3 0 20.4-.2 30.4-.7-9.2 12.7-19.1 24.8-29.6 36.4zm130.7 30c-.9 12.2-6.9 23.6-16.5 31.3-15.9 9.2-49.8-2.8-86.4-34.2-4.2-3.6-8.4-7.5-12.7-11.5 15.3-16.9 29.4-34.8 42.2-53.6 22.9-1.9 45.7-5.4 68.2-10.5 1 4.1 1.9 8.2 2.7 12.2 4.9 21.6 5.7 44.1 2.5 66.3zm18.2-107.5c-2.8.9-5.6 1.8-8.5 2.6-7-21.8-15.6-43.1-25.5-63.8 9.6-20.4 17.7-41.4 24.5-62.9 5.2 1.5 10.2 3.1 15 4.7 46.6 16 79.3 39.8 79.3 58 0 19.6-34.9 44.9-84.8 61.4zm-149.7-15c25.3 0 45.8-20.5 45.8-45.8s-20.5-45.8-45.8-45.8c-25.3 0-45.8 20.5-45.8 45.8s20.5 45.8 45.8 45.8z" />
    </svg>Competences</h3>
           <h4 className="right">Programming Languages and Tools</h4>
    <div className="competences-items">
        <div className="box" onClick={open}>
            <img src="https://res.cloudinary.com/djr3obtg6/image/upload/v1/media/competence/html5_j1ggtf" />
            <h3>Html</h3>
        </div>
        <Modal className="modal" isOpen={isopen}>
         <div className="top">
         <h2>Html</h2>
         <svg onClick={close} viewBox="0 0 512 512">
      <path d="M464 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-83.6 290.5c4.8 4.8 4.8 12.6 0 17.4l-40.5 40.5c-4.8 4.8-12.6 4.8-17.4 0L256 313.3l-66.5 67.1c-4.8 4.8-12.6 4.8-17.4 0l-40.5-40.5c-4.8-4.8-4.8-12.6 0-17.4l67.1-66.5-67.1-66.5c-4.8-4.8-4.8-12.6 0-17.4l40.5-40.5c4.8-4.8 12.6-4.8 17.4 0l66.5 67.1 66.5-67.1c4.8-4.8 12.6-4.8 17.4 0l40.5 40.5c4.8 4.8 4.8 12.6 0 17.4L313.3 256l67.1 66.5z" />
    </svg>
         </div>
         <hr/>
         <div className="text">
         <p>Hypertext Markup Language is the standard markup language for documents designed to be displayed in a web browser. It can be assisted by technologies such as Cascading Style Sheets and scripting languages such as JavaScript.</p>
         </div>
            </Modal>
        
        <div className="box" onClick={open1}>
            <img src="https://res.cloudinary.com/djr3obtg6/image/upload/v1/media/competence/css_rjs4dx" />
            <h3>Css</h3>
        </div>
        <Modal className="modal" isOpen={isopen1}>
         <div className="top">
         <h2>Css</h2>
         <svg onClick={close1} viewBox="0 0 512 512">
      <path d="M464 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-83.6 290.5c4.8 4.8 4.8 12.6 0 17.4l-40.5 40.5c-4.8 4.8-12.6 4.8-17.4 0L256 313.3l-66.5 67.1c-4.8 4.8-12.6 4.8-17.4 0l-40.5-40.5c-4.8-4.8-4.8-12.6 0-17.4l67.1-66.5-67.1-66.5c-4.8-4.8-4.8-12.6 0-17.4l40.5-40.5c4.8-4.8 12.6-4.8 17.4 0l66.5 67.1 66.5-67.1c4.8-4.8 12.6-4.8 17.4 0l40.5 40.5c4.8 4.8 4.8 12.6 0 17.4L313.3 256l67.1 66.5z" />
    </svg>
         </div>
         <hr/>
         <div className="text">
             <p>Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript.</p>
         </div>
            </Modal>
        <div className="box" onClick={open2}>
            <img src="https://res.cloudinary.com/djr3obtg6/image/upload/v1/media/competence/javascript-js-seeklogo.com_fv74oo" />
            <h3>JavaScript</h3>
        </div>
        <Modal className="modal" isOpen={isopen2}>
         <div className="top">
         <h2>JavaScript</h2>
         <svg onClick={close2} viewBox="0 0 512 512">
      <path d="M464 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-83.6 290.5c4.8 4.8 4.8 12.6 0 17.4l-40.5 40.5c-4.8 4.8-12.6 4.8-17.4 0L256 313.3l-66.5 67.1c-4.8 4.8-12.6 4.8-17.4 0l-40.5-40.5c-4.8-4.8-4.8-12.6 0-17.4l67.1-66.5-67.1-66.5c-4.8-4.8-4.8-12.6 0-17.4l40.5-40.5c4.8-4.8 12.6-4.8 17.4 0l66.5 67.1 66.5-67.1c4.8-4.8 12.6-4.8 17.4 0l40.5 40.5c4.8 4.8 4.8 12.6 0 17.4L313.3 256l67.1 66.5z" />
    </svg>
         </div>
         <hr/>
         <div className="text">
             <p>JavaScript, often abbreviated as JS, is a programming language that conforms to the ECMAScript specification. JavaScript is high-level, often just-in-time compiled, and multi-paradigm. It has curly-bracket syntax, dynamic typing, prototype-based object-orientation, and first-class functions.</p>
         </div>
            </Modal>
        <div className="box" onClick={open3}>
            <img src="data:image/jpeg;base64,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" />
            <h3>Jquery</h3>
        </div>
        <Modal className="modal" isOpen={isopen3}>
         <div className="top">
         <h2>Jquery</h2>
         <svg onClick={close3} viewBox="0 0 512 512">
      <path d="M464 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-83.6 290.5c4.8 4.8 4.8 12.6 0 17.4l-40.5 40.5c-4.8 4.8-12.6 4.8-17.4 0L256 313.3l-66.5 67.1c-4.8 4.8-12.6 4.8-17.4 0l-40.5-40.5c-4.8-4.8-4.8-12.6 0-17.4l67.1-66.5-67.1-66.5c-4.8-4.8-4.8-12.6 0-17.4l40.5-40.5c4.8-4.8 12.6-4.8 17.4 0l66.5 67.1 66.5-67.1c4.8-4.8 12.6-4.8 17.4 0l40.5 40.5c4.8 4.8 4.8 12.6 0 17.4L313.3 256l67.1 66.5z" />
    </svg>
         </div>
         <hr/>
         <div className="text">
         jQuery is a JavaScript library designed to simplify HTML DOM tree traversal and manipulation, as well as event handling, CSS animation, and Ajax. It is free, open-source software using the permissive MIT License. As of May 2019, jQuery is used by 73% of the 10 million most popular websites. Web analysis indicates that it is the most widely deployed JavaScript library by a large margin, having at least 3 to 4 times more usage than any other JavaScript library.
         </div>
            </Modal>
        <div className="box" onClick={open4}>
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAYFBMVEX///9h2vtT2Pta2ftS2Pvy/P+47f3N8v76/v/o+f7s+v6g5/zZ9f7h9/7w+//1/P+u6v103vts3PuM4/yY5fyA4Pyp6f3E8P2f5/y27P3K8f2/7v2Q5PyG4fxo3PvU9P7IrV7+AAAQVklEQVR4nO1d6bqqvA5etDgCCixwXML93+URtWk60RQRv7Mf3j97L8XSIU3STP35mTFjxowZM2bMmDFjxowZM2bMmDHj/wWLy+FWlE1Z/+Wr3dut7Vb5X31vrbgdLosRevc+jgVjnEd3cM4Za5L0jcbSpOlaezXHWHEcrZ9DceXs0R2J+wfJZlBbm8TW2HXkHodhW7DIAh7XbXBbbR1zW2Os2H6g50Ss7H16zH25Cmuq1JcPzVdYUyPiGDv69Jp7+oZM7bQgEH9pN656B9iN8Uajr+2td3zdEL+yihs8QP6E1jHOckJDuUGfZmvxMN71Hhq0WPx2WF7PyS1i2ihZk3mayRp1Ae8yIrol5+vycOPom2aSMSk4wFBYeYFPt1edI8aH/mZUUr9z4ask7UsJY+T9zXwAO+Yawi6PlFXhpXs3bktlOliUazqRnAD2vrYUhkp0jVn43FGhPB67hPZVWW/W2JoSLfFq1P57sRAvZmfr98dI6fuf9aE/ZR4iu0g4w5umVVLz1wB47XwCc0hemjS2wxTaw3Vr8SoKXx4PsAnde2xXoyXiXBf/Kea6rHbvsi1sxZH6TkLGKJvjggcRL5XvloiHct6rs4gtz3yCZ0wIImX9gniPlzE+oW9OaICs3ve2shHTOSWZFq/OFb4Hl2iI7AYfYzXNwauGvG08rMWsejv3kyGmyov18+cF+izy0x5QzPrtnlORMvrOWCNK5U1Hj/tGDpDVhF6LXc/esR6E4SomlfT0AQ0x2v3s0Koymi4mSGa6437CX1RHe/yIh9jiARLPfS+q5snwLgfi9nrjyf/oAxkWffK/nMr+T6/33fyPjoTy1cOl/9EntpFpouAR2f6yfP26HNbdARA7/+J/9IV1aZxySzpnvIgXDunsIMQDeFuhDpG6hx8QvDsO7ehQiIOFR6PRcMNDDNtSQquZ7HixFS8MM2T+ITlvP06N/MLhEFMah01pgdYwTAFbiG0xlT0KiKZfY9agbMSgbfizH7Qt3sCgbXHTOE3IRhy28d8AUGmAcajSjb4swO6ym5pKB2z83LRqk6zFg1/4HhYBR4snLvLAK4k1JisM2dTSYh16mslggLxcyLNTTJ0hOK1NdkAU24LoL9kjJrP/2SN2Q2TGq6l1GmFpo57XpE762Ehb2JOcqEqL8+h01raX7CaahqQu8yLrVA7xl9SCMGNMZ6j5fZ3XSAwfjNbS0Sldq34zVIeXPZE4H2NAnPGdBm+EVI5GmiykYSOmcKt68jP+WRja/Y8ugESVFfiVHxMkgHgd+cT9NlZ07g3aqMZVgPsQNFSQTtP5ujOyyK/kWqmSQUoQ/26mv240rKlmjIvcb3rvpBZAbmVCi7Dw4ftcz9JRzEzReZVfejR44VCf0pd/o5n35Ca0nen/qFuR+LZRkZOUjMQzBDj0e8SAeGpK3xMw0z76aqXqku02WZq2bbvqcP83TbPNThqKWV8Y3G56Vir9su6X7jdpJMHsQE+kG6cWDnr3pBF8wldisJpFejlXdaP134/uB01dnS+poQEIRjOdPbjDzdTbNqu8KqIYAmAH4BGCG0dFla+QvaL+AqORrOZxYluny6qMmR7xNRyPgZbVMn0IwNeOmDgWQxyA+PFYlSOOTR9nWR2Pgkin8492EFpNNJwkqcOE4KsJNZoORW+/PoEJ4xTuNHpo/D16gD+YhwAXUD8ittUcJqLTtjIi6t0DvB3y66XtxPtiv18LOluv9/tFpwS0l2t+qMmtMV6FR8gHIj31De+5Ok0tp53UqCSIhyDtW9X7208fXMkuctQZUM/vgqxOru0WHeCJB7oM2NbvXV1qr0l9F6vOYXIzCnUktDfH8LrBldU1FWrXCjpMjeuFeGPQAvfptROxjmFydhudWtdL5/I11VVZqjU8Rz/PAZ1yRSRk18rB0u4LuRxTeqwP3KllGga3UyCNdgALqhHA4mZDjOdjjXF9sCyfZDjaCQqsE+Romw4wLZq1A6wENgbH2WGUMZrpEBGPi3wDiptqoJCu3qC3OA7LEF+WZnlh5iDREjr6cTFifTgrllvUKZVMwfrSe6g1AexJtehACHT3x25ZmMknET2ox4Ztre0/zppcHEQhdhed6IDNBFvgQcRgZiM8lWBx3OaNPkhWv3EyPmt0wVmFtklrIVPJZoKiGH5kNIKyf4FIEUFklTZGHpOcHxYs1ISy+/JpDFq8SG6dDdBa+Etl2oE8/Qr9XnUfrJfaQrJikHO4VVq57z5jYwGZApkAbx8SY1eKV8HG3upEKjtXaL0boAHkSmpaXFuEG3BTwdAkuxiiO4JQBM0Gwp8tzWVqglUczFSVfBZW2IW3+F4oL0IBcbGZzSVPqiS/OIJGgNno7dkFT6bsIkdejhNYleCNy2aYqHMMgfnWmIlNEr1OiIxF1lxomWr0dKMBjbgMxqsGd5PizbQNsE+oqoklUlJYNO7tTds4tvzSXJUYhFQSrI6EDBFFaPVnUgvm8LChyIzE/p70zBx82c0R2IL62BbOJqfbGxP5I08wPTiD7yJxL1iTJT5dVxyez5lzDjHv8V4KQ4/rF6UCMKIbXDr9zHwsDXs0zZVTUpgh0K/mzUBokBgVIhCP8oByxGhx2Qs5wMZ7lhbsL84gxcyMPSjsA7T5pCCugW3FIcWv/+0kwyHFhcEmpMSag+ZWiSU093vlGqBNlIOqDQ0ShLkkEspWBJ8YLWAJ+goHPF0OrGx7EOZcF0SQA897+JYJGCJhPkp4O0l3zrUFMr29PeOz9f9Pb5CkrMhgOe+6wBISbRB7bYUMJ9+1bwktDv6tVqmBeEgBe513EQXrINvJ1Dk3N1YZ9cOYc3XbkqP6hTT2MSaQsmQbRKbMucHLsv4ltNDKQvkFOQYVdoPHgwO8kR5ghX00pgap71MD5j5L8E/o/pgljfcOSNe8oDk3N43XKWFKF7y1Q1KraOnCIq4yRE/vW0IfJ+1g/AYvYkA/hDe8fyOK2NiQOhtn6JAlicZXw8YW2ryXYeEhxhDBa/oJW2QWhuSjylOTuYS6MLHAIg5kqFGIxVdo6v0S8d8foci4DaHSfGwqXUgqDbG+0Kj0TU5juiq8A7Qwk9MnOQ1IC7pB94iZu7GIN6+0ME4DWORTs71/5IbwrPsAiY/VMnMRB0h8vIQBhleixA/X2lKFlxjBiplvIxpq2U5tkGx5hV94uJNQpMmR/78f1rypHh7Bf72qujQ80yZv8fHTE80lEdBvGbhLato4ARtz7llD/fFfvUGSwJBpHX5VXVoxGoq4lT0Ri6hbMdpeK4bOFqQVwzkHFqzBFkVx0QyzRJ1Gt0SdaLzxMcAgSxRStAiVK6Q1cQfWRKNHAdbEFlrZgTXR22lUdYMmx5FxzDd/wGcKJMZMEeYYoiWEHyzCJ8kRfLwGbQNqsDuyk3uqHoqDU8cRYe0teoi1fCczFwf0o24tBBf2HKFQ5UViQZ8fhZ+xoi9DnOyZOVs8M5aOw5eKZ6YvtmqDPTMB0RFIm+Q9y6iVbevzru1+Ne/ar8VjAHP09NsTvGsH5AgOC3XHZOUOWdE8pCDcraUItgfkIT3YeBgwq5ca4PWQKsE+FqLvhVIDwVUS2OWVds3mdnVOkuS8crDom7M96+Nq8eGQGg1PKJEKUVxbxtjq5xXgaqbEIAAkBXDwvEckprXawQHhXy1XN05hcOKeaJMhiXSwYoRok5UWbcIHxZvuNc8ta86qPBXqB4oYgmV4I2II6X1CkKpkuj9rtYd9lRfdWOrxVewPEavQDLDZCmxIgdV5kHEG8xWI+kL0k/4ZvXojA3p3084yXZC1mGIgUjyBQQoixk2VFE/sdTLdmKHm8e29qO9VpKsjnJXnDRqMqmpLrSSw6rxdI1KiLzdnszQ9i97PSlya4eScNYfMFpr4gzNjg94Cv3JE0LbZwYi77DjMKCn6a0uUMI6CVnecPOCFCCg4YWnHS1Dt7VHQo0V63wUTPZIdmE1A+J6MZNfVl95I9rfHhXG10MgTzd8rT1BAfkNuXeYc4E/X6fLPmY1Qjl/qM/11Z5Swplq2glpXNr7fCyljBNtYtMuqceY13vX2z6QGLSy8DA8zqk/LdrOWrv3grKC/n/WmXZ7qqCdps+PlH6wXlSXu1KfoldkVSb93aGZXEXkzu6Lk49Ux0t5Bah2qk3x5XMn0vBdEct7quMyTgOy86K2LiAKQ5Y5YPLNTkE8ZoxRL+JvZ7v1wNVXmU5Ys/9ezZJENhZEpdhg4VC6YONNZqGzscjkV7xQZ6Bnb486u0wWq03w8QVaBWnEgu96HGY82zm5s8X1w1+yLFQcsVSO27bnycnv/0DppU51bZMr5TtUIZ+WPfbY6J7eCx8GVP2Je3JLzKjOO61+p/OGv3rLeZnhxrMVb8FJnWycj+Ur1FqjA06c+oeKB2X67yZ41eNpn/Z1ss92jCjx9ghyKiU5ZgQeM0/1PwRDt8QbgAPf4G8Q8TXnl0yiVsGRO5X+wEhaxmpl08lvMYfL6Ep/77AvVzMgV6aQr0sjCQBUjffvrCxXpoMyftzazTDDSAh9kaIE/lecLVQX//cqQAdU9UQVIzCikg5JSS1i8bmhGczgGVmiV5Ji496cN01doFeybZBFFPFOYx659PNaCanJxMbhS8vMAhMoN0vJFpq+ULPpHNFnKYJMH893IARK7PH2169CK5RHgLjMWSOH+r1YsD646L6+d5c0WVZ2nXnUwedV5uDKELIHR1cEoGoks3oTID3a7DsWAyxiW5nk4wHP7vXtmApyvJ32ILKAE0eQ3eAy6hUWLjA2qX/O1W1j+/Zt0/t3bkAZufESngTWWvnfPTNCUKi6msEIkk99KNuRmufX/1c1yA24H3FtuB6TzqelvBxRZiuQT6Zs3PIoT93Q3PIbe0olzo/B/qVQ+/S2dgTetosQgHqX4ptWw49eEZ/yw23JRQR/e3E9P+DpgWp/t8WWfRIh5T7nx+JGFgwvyhN14PP0dJQQzBr4kHqga31rtK2P085Vbq6GL3o2I78xjUpH5xR97p0mYhaaMVYBZ7acbpfKi4mA64C88VQ8zOsWMB8i66rWVXbEPNFbZxBUFH/N+nipsdfQyJ2MA+u2W2krtU3O74Q3aW4NUJpWO1HcaBJm6NWil+DAvTBVtjzVV7naSQiD0tLEYMlHN/t6rEo/hyGdR8nK4Q9oBrwqu+fomIGzZtoeuSvg7d5YNOCrBCiyyNQWRmcFZP28CuXc1+tpqxb9Z4TZY7dQyt4zrGV+S5053NhSQko43RxDFm7Nek9oj7rRLZnlcnOFcvT6iYnrT7sIHsO7F6+S8zLvYXi0eipU+Fp+V2hh5F2ucL89JzbG+N8mYVGxVPmGLFLXmiRqw5JcarU1moVHQekpe8PiXtncWv2a1dRWDsv1GwKV3iK7iwzaoyZLmAN+ru/4GWnfofmwWx+5vylI1X7Q1cWSpgp197nl8C484T2/2MfZJmylwNAL3uSOP2Y8uF9psjF5l6FO41CJo9hHbW751Z1F6KGPUGqu/tgMVrFf5X12URV2d2/eVx317rh6t/eWria/pmjFjxowZM2bMmDFjxowZM2bMmDFjxowZM2bM+Cj+B5V7rnS0Np+RAAAAAElFTkSuQmCC" />
            <h3>ReactJs</h3>
        </div>
        <Modal className="modal" isOpen={isopen4}>
         <div className="top">
         <h2>ReactJs</h2>
         <svg onClick={close4} viewBox="0 0 512 512">
      <path d="M464 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-83.6 290.5c4.8 4.8 4.8 12.6 0 17.4l-40.5 40.5c-4.8 4.8-12.6 4.8-17.4 0L256 313.3l-66.5 67.1c-4.8 4.8-12.6 4.8-17.4 0l-40.5-40.5c-4.8-4.8-4.8-12.6 0-17.4l67.1-66.5-67.1-66.5c-4.8-4.8-4.8-12.6 0-17.4l40.5-40.5c4.8-4.8 12.6-4.8 17.4 0l66.5 67.1 66.5-67.1c4.8-4.8 12.6-4.8 17.4 0l40.5 40.5c4.8 4.8 4.8 12.6 0 17.4L313.3 256l67.1 66.5z" />
    </svg>
         </div>
         <hr/>
         <div className="text">
         React (also known as React.js or ReactJS) is an open-source, front end, JavaScript library for building user interfaces or UI components. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications.
         </div>
            </Modal>
        <div className="box" onClick={open5}>
            <img src="https://res.cloudinary.com/djr3obtg6/image/upload/v1/media/competence/bootstrap_gqvmtv" />
            <h3>Bootstrap</h3>
        </div>
        <Modal className="modal" isOpen={isopen5}>
         <div className="top">
         <h2>Bootstrap</h2>
         <svg onClick={close5} viewBox="0 0 512 512">
      <path d="M464 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-83.6 290.5c4.8 4.8 4.8 12.6 0 17.4l-40.5 40.5c-4.8 4.8-12.6 4.8-17.4 0L256 313.3l-66.5 67.1c-4.8 4.8-12.6 4.8-17.4 0l-40.5-40.5c-4.8-4.8-4.8-12.6 0-17.4l67.1-66.5-67.1-66.5c-4.8-4.8-4.8-12.6 0-17.4l40.5-40.5c4.8-4.8 12.6-4.8 17.4 0l66.5 67.1 66.5-67.1c4.8-4.8 12.6-4.8 17.4 0l40.5 40.5c4.8 4.8 4.8 12.6 0 17.4L313.3 256l67.1 66.5z" />
    </svg>
         </div>
         <hr/>
         <div className="text">
             <p>
Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development. It contains CSS- and JavaScript-based design templates for typography, forms, buttons, navigation, and other interface components.</p>
         </div>
            </Modal>
        <div className="box" onClick={open6}>
            <img src="https://res.cloudinary.com/djr3obtg6/image/upload/v1/media/competence/python_qwwpex" />
            <h3>Python</h3>
        </div>
        <Modal className="modal" isOpen={isopen6}>
         <div className="top">
         <h2>Python</h2>
         <svg onClick={close6} viewBox="0 0 512 512">
      <path d="M464 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-83.6 290.5c4.8 4.8 4.8 12.6 0 17.4l-40.5 40.5c-4.8 4.8-12.6 4.8-17.4 0L256 313.3l-66.5 67.1c-4.8 4.8-12.6 4.8-17.4 0l-40.5-40.5c-4.8-4.8-4.8-12.6 0-17.4l67.1-66.5-67.1-66.5c-4.8-4.8-4.8-12.6 0-17.4l40.5-40.5c4.8-4.8 12.6-4.8 17.4 0l66.5 67.1 66.5-67.1c4.8-4.8 12.6-4.8 17.4 0l40.5 40.5c4.8 4.8 4.8 12.6 0 17.4L313.3 256l67.1 66.5z" />
    </svg>
         </div>
         <hr/>
         <div className="text">
             <p>Python is an interpreted, high-level and general-purpose programming language. Created by Guido van Rossum and first released in 1991, Python's design philosophy emphasizes code readability with its notable use of significant whitespace.</p>
         </div>
            </Modal>
        <div className="box" onClick={open7}>
            <img src="https://res.cloudinary.com/djr3obtg6/image/upload/v1/media/competence/github_lbprja" />
            <h3>Github</h3>
        </div>
        <Modal className="modal" isOpen={isopen7}>
         <div className="top">
         <h2>Github</h2>
         <svg onClick={close7} viewBox="0 0 512 512">
      <path d="M464 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-83.6 290.5c4.8 4.8 4.8 12.6 0 17.4l-40.5 40.5c-4.8 4.8-12.6 4.8-17.4 0L256 313.3l-66.5 67.1c-4.8 4.8-12.6 4.8-17.4 0l-40.5-40.5c-4.8-4.8-4.8-12.6 0-17.4l67.1-66.5-67.1-66.5c-4.8-4.8-4.8-12.6 0-17.4l40.5-40.5c4.8-4.8 12.6-4.8 17.4 0l66.5 67.1 66.5-67.1c4.8-4.8 12.6-4.8 17.4 0l40.5 40.5c4.8 4.8 4.8 12.6 0 17.4L313.3 256l67.1 66.5z" />
    </svg>
         </div>
         <hr/>
         <div className="text">
             <p>
GitHub, Inc. is an American multinational corporation that provides hosting for software development and version control using Git. It offers the distributed version control and source code management functionality of Git, plus its own features.</p>
         </div>
            </Modal>
        <div className="box" onClick={open8}>
            <img src="https://res.cloudinary.com/djr3obtg6/image/upload/v1/media/competence/git_s7jvap" />
            <h3>Git</h3>
        </div>
        <Modal className="modal" isOpen={isopen8}>
         <div className="top">
         <h2>Git</h2>
         <svg onClick={close8} viewBox="0 0 512 512">
      <path d="M464 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-83.6 290.5c4.8 4.8 4.8 12.6 0 17.4l-40.5 40.5c-4.8 4.8-12.6 4.8-17.4 0L256 313.3l-66.5 67.1c-4.8 4.8-12.6 4.8-17.4 0l-40.5-40.5c-4.8-4.8-4.8-12.6 0-17.4l67.1-66.5-67.1-66.5c-4.8-4.8-4.8-12.6 0-17.4l40.5-40.5c4.8-4.8 12.6-4.8 17.4 0l66.5 67.1 66.5-67.1c4.8-4.8 12.6-4.8 17.4 0l40.5 40.5c4.8 4.8 4.8 12.6 0 17.4L313.3 256l67.1 66.5z" />
    </svg>
         </div>
         <hr/>
         <div className="text">
             <p>Git is a distributed version-control system for tracking changes in source code during software development. It is designed for coordinating work among programmers, but it can be used to track changes in any set of files. Its goals include speed, data integrity, and support for distributed, non-linear workflows.</p>
         </div>
            </Modal>
        <div className="box" onClick={open9}>
            <img src="https://res.cloudinary.com/djr3obtg6/image/upload/v1/media/competence/visual-studio-code-seeklogo.com_xdrah1" />
            <h3>Vs Code</h3>
        </div>
        <Modal className="modal" isOpen={isopen9}>
         <div className="top">
         <h2>Vs Code</h2>
         <svg onClick={close9} viewBox="0 0 512 512">
      <path d="M464 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-83.6 290.5c4.8 4.8 4.8 12.6 0 17.4l-40.5 40.5c-4.8 4.8-12.6 4.8-17.4 0L256 313.3l-66.5 67.1c-4.8 4.8-12.6 4.8-17.4 0l-40.5-40.5c-4.8-4.8-4.8-12.6 0-17.4l67.1-66.5-67.1-66.5c-4.8-4.8-4.8-12.6 0-17.4l40.5-40.5c4.8-4.8 12.6-4.8 17.4 0l66.5 67.1 66.5-67.1c4.8-4.8 12.6-4.8 17.4 0l40.5 40.5c4.8 4.8 4.8 12.6 0 17.4L313.3 256l67.1 66.5z" />
    </svg>
         </div>
         <hr/>
         <div className="text">
             <p>Visual Studio Code is a free source-code editor made by Microsoft for Windows, Linux and macOS. Features include support for debugging, syntax highlighting, intelligent code completion, snippets, code refactoring, and embedded Git</p>
         </div>
            </Modal>
        <div className="box" onClick={open10}>
            <img src="data:image/png;base64,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" />
            <h3>Sql</h3>
        </div>
        <Modal className="modal" isOpen={isopen10}>
         <div className="top">
         <h2>Sql</h2>
         <svg onClick={close10} viewBox="0 0 512 512">
      <path d="M464 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-83.6 290.5c4.8 4.8 4.8 12.6 0 17.4l-40.5 40.5c-4.8 4.8-12.6 4.8-17.4 0L256 313.3l-66.5 67.1c-4.8 4.8-12.6 4.8-17.4 0l-40.5-40.5c-4.8-4.8-4.8-12.6 0-17.4l67.1-66.5-67.1-66.5c-4.8-4.8-4.8-12.6 0-17.4l40.5-40.5c4.8-4.8 12.6-4.8 17.4 0l66.5 67.1 66.5-67.1c4.8-4.8 12.6-4.8 17.4 0l40.5 40.5c4.8 4.8 4.8 12.6 0 17.4L313.3 256l67.1 66.5z" />
    </svg>
         </div>
         <hr/>
         <div className="text">
<p>SQL (Structured Query Language) is a domain-specific language used in programming and designed for managing data held in a relational database management system (RDBMS), or for stream processing in a relational data stream management system (RDSMS). It is particularly useful in handling structured data, i.e. data incorporating relations among entities and variables.</p>


         </div>
            </Modal>
    
            <div className="box" onClick={open11}>
            <img src="data:image/png;base64,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" />
            <h3>Sass</h3>
        </div>
        <Modal className="modal" isOpen={isopen11}>
         <div className="top">
         <h2>Sass</h2>
         <svg onClick={close11} viewBox="0 0 512 512">
      <path d="M464 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-83.6 290.5c4.8 4.8 4.8 12.6 0 17.4l-40.5 40.5c-4.8 4.8-12.6 4.8-17.4 0L256 313.3l-66.5 67.1c-4.8 4.8-12.6 4.8-17.4 0l-40.5-40.5c-4.8-4.8-4.8-12.6 0-17.4l67.1-66.5-67.1-66.5c-4.8-4.8-4.8-12.6 0-17.4l40.5-40.5c4.8-4.8 12.6-4.8 17.4 0l66.5 67.1 66.5-67.1c4.8-4.8 12.6-4.8 17.4 0l40.5 40.5c4.8 4.8 4.8 12.6 0 17.4L313.3 256l67.1 66.5z" />
    </svg>
         </div>
         <hr/>
         <div className="text">
<p>Sass is the most mature, stable, and powerful professional grade CSS extension language in the world.Sass is completely compatible with all versions of CSS. We take this compatibility seriously, so that you can seamlessly use any available CSS libraries.</p>


         </div>
            </Modal>

    </div>
        </div>
     );
}
 
export default Competences;