import React from "react";
import styles from './Homepage.module.css'
import bgImage from '../image/pexels-photo.png';

// import picA from '../../src/image/photo1.jpg';
// import picB from '../../src/image/photo2.jpg';
// import picC from '../../src/image/photo3.jpg';

const Homepage =()=>{
    return(
        <div className={styles.Main}>
            <div className={styles.Section1}>
                <div className={styles.bgI1}>
                    <img src={bgImage} alt="page backgroung image" />
                </div>
                <div className={styles.text1}>
                    <h1>Welcome to Acme Web Solutions</h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                       Adipisci eum error earum soluta voluptatum nisi aboriosam eos saepe asperiores dolorum.
                    </p>
                    <button className={styles.btn}>Read More</button>
                </div>
            </div>

            <div className={styles.Section2}>
                <h2>Web  Application Development</h2>
                <div className={styles.text2}>
                    <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe sint eligendi possimus? Unde
                    officiis magnam laborum ipsa distinctio odio, vero dolores dicta 
                    </p>
                    <p>
                    liquam aperiam repellendus.Perferendis officiis deserunt velit voluptas nobis sequi
                    animi totam, accusantium, ex eius quia, natus quo?
                    </p>
                </div>
            </div>

            <div className={styles.Section3} >
                <div className={styles.PartA} >
                    <div>
                    {/* <img src={picA} alt="pic 1" /> */}
                    </div>
                    <div className={styles.text3} >
                        <h3>Web Development</h3>
                    <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe sint eligendi possimus? Unde
                    officiis magnam laborum ipsa distinctio odio, vero dolores dicta aliquam aperiam repellendus.
                    Perferendis officiis deserunt velit voluptas nobis sequi
                    animi totam, accusantium, ex eius quia, natus quo?
                    </p>
                    </div>
                </div>

                <div className={styles.PartA} >
                    {/* <img src={picB} alt="pic 2" /> */}
                    <div className={styles.text3} >
                        <h3>Mobile Applications</h3>
                    <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe sint eligendi possimus? Unde
                    officiis magnam laborum ipsa distinctio odio, vero dolores dicta aliquam aperiam repellendus.
                    Perferendis officiis deserunt velit voluptas nobis sequi
                    animi totam, accusantium, ex eius quia, natus quo?
                    </p>
                    </div>
                </div>

                <div className={styles.PartA} >
                    {/* <img src={picC} alt="pic 3" /> */}
                    <div className={styles.text3} >
                        <h3>Tech Marketing</h3>
                    <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe sint eligendi possimus? Unde
                    officiis magnam laborum ipsa distinctio odio, vero dolores dicta aliquam aperiam repellendus.
                    Perferendis officiis deserunt velit voluptas nobis sequi
                    animi totam, accusantium, ex eius quia, natus quo?
                    </p>
                    </div>
                </div>

            </div >

            <div className={styles.Section4}>
               
                <div className={styles.split}>
                <div className={styles.clm1}>
                    <h2>Contact Us</h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum, suscipit. Rerum ducimus a quod, 
                        ut et voluptas obcaecati unde fuga.
                    </p>
                </div>
                </div>
               
                <div className={styles.split}>
                <div className={styles.clm1}>    
                    <h2>About Our Company</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio earum porro deserunt, deleniti, quae facere repudiandae, officiis est exercitationem nobis iusto doloremque! 
                        Soluta excepturi in aut suscipit amet temporibus quo?</p>
                </div>
                </div>
          
           
            </div>

            <div className={styles.footer}>
                <div className={styles.footerA}>Acme Web Solutions</div>
                <div className={styles.footerB}>Project By Traversy Media</div>
            </div>
        
        </div>
    )
};

export default Homepage;