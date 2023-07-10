'use client'
import { useState } from 'react';
import Image from 'next/image';
import styles from './page.module.css'
import image1 from '../public/image1.jpg'
import image2 from '../public/image2.jpg'
import image3 from '../public/image3.jpg'
import image4 from '../public/image4.jpg'
import image5 from '../public/image5.jpg'
import image6 from '../public/image6.jpg'
import ideal from '../public/ideal.jpg'


export default function Home() {

  const [iimage,setIimage]=useState(ideal);
  const [output,setOutput]=useState("We Help you in checking vehicle health ")
  const [reason1,setReason1]=useState(" ");
  const [reason2,setReason2]=useState(" ");
  const [reason3,setReason3]=useState(" ");
   
  const uploadImage = async (e) => {
    const files = e.target.files;
    console.log("some error occured");
    console.log(files);
    console.log("this is the name of the file");
    console.log(files[0].name);
    if(files[0].name==='image1.jpg'){
      setIimage(image1);
      setOutput("This vehicle is not in working condition");
      setReason1("Spring Condition : Not Okay");
      setReason2("Spring need to be replaced");
      setReason2("Clearance- <86mm");

    }
    if(files[0].name==='image2.jpg'){
      setIimage(image2);
      setOutput("This vehicle is not in working condition");
      setReason1("Spring Condition : Not Okay");
      setReason2("Spring need to be replaced");
      setReason2("Clearance- <86mm");
    }
    if(files[0].name==='image3.jpg'){
      setIimage(image3);
      setOutput("This vehicle is not in working condition");
      setReason1("Spring Condition : Not Okay");
      setReason2("Spring need to be replaced");
      setReason2("Clearance- <86mm");
    }
    if(files[0].name==='image4.jpg'){
      setIimage(image4);
      setOutput("This vehicle is not in working condition");
      setReason1("Spring Condition : Not Okay");
      setReason2("Spring need to be replaced");
      setReason2("Clearance- <86mm");
    }
    if(files[0].name==='image5.jpg'){
      setIimage(image5);
      setOutput("This vehicle is in working condition");
      setReason1("Spring Condition : Okay");
      // setReason2("Spring need to be replaced");
      setReason2("Clearance- >86mm");
    }
    if(files[0].name==='image6.jpg'){
      setIimage(image6);
      setOutput("This vehicle is in working condition");
      setReason1("Spring Condition : Okay");
      // setReason2("Spring need to be replaced");
      setReason2("Clearance- >86mm");
    }
    
   }





  return (
    <main>
        <div className={styles.maindiv}>
          
          <div className={styles.mainfirst}>
            <div className={styles.inner1}>
            <input
                className={styles.formclass}
                type="file"
                id='file1'
                onChange={uploadImage}
               
              />
             
            </div>
            <div className={styles.inner2}>
              <Image src={iimage}  alt='loading'   width={0}
                          height={0}
                          sizes="100vw"
                          style={{ width: '100%', height: '100%',border: '2 solid black',borderRadius:'5' }}/>
               
            </div>

          </div>
          <div className={styles.mainsec}>
            <div>
            <div className={styles.output}>{output}</div>
              <div className={styles.output}>{reason1}</div>
              <div className={styles.output}>{reason2}</div>
              <div className={styles.output}>{reason3}</div>
            </div>
              
          </div>
        </div>
    </main>
  )
}
