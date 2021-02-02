import {
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonContent,
    IonHeader,
    IonImg,
    IonPage,
    IonTitle,
    IonCardTitle,
    IonToolbar,
    IonCardSubtitle,
    IonButton,
    IonLabel,
    IonSlides,
    IonSlide,
  } from '@ionic/react';
  import React from 'react';
  
  const projects = [
    {
      name: 'React',
      desc: 'มาเรียน CSS กันเถอะ',
      image: 'https://res.cloudinary.com/practicaldev/image/fetch/s--50wZvNu6--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/1wwdyw5de8avrdkgtz5n.png',
      link: 'https://www.skooldio.com/courses/essential-css',
    },
    {
      name: 'Redux',
      desc: 'State Management',
      image: 'https://miro.medium.com/max/4446/1*amMgEUix0DSEG-Hojy27Yw.jpeg',
      link: 'https://www.skooldio.com/courses/essential-css',
    },
    {
      name: 'project 3',
      desc: 'มาเรียน Skooldio กันเถอะ',
      image: 'https://assets.skooldio.com/courses/Intermediate+CSS/essential-css.png',
      link: 'https://www.skooldio.com/courses/essential-css',
    },
  ];
  
  const Projects = () => {
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Projects</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
          <IonHeader collapse='condense'>
            <IonToolbar>
              <IonTitle size='large'>Projects</IonTitle>
            </IonToolbar>
          </IonHeader>
          <IonSlides>
            {projects.map((project) => {
              return (
                <IonSlide>
                  <IonCard>
                                      <IonImg src={project.image}></IonImg>
                    <IonCardHeader>
                      <IonCardTitle>{project.name}</IonCardTitle>
                      <IonCardSubtitle>เร็วๆ นี้</IonCardSubtitle>
                    </IonCardHeader>
                    <IonCardContent>
                      <IonLabel>{project.desc}</IonLabel>
                      <IonButton expand='block' href={project.link}>
                        เรียน
                      </IonButton>
                    </IonCardContent>
                  </IonCard>
                </IonSlide>
              );
            })}
          </IonSlides>
        </IonContent>
      </IonPage>
    );
  };
  
  export default Projects;