import React, { useEffect, useState } from 'react';
import { IonContent, IonTitle, IonGrid, IonRow, IonCol, IonPage, IonHeader, IonToolbar } from '@ionic/react';
import './Tableau.css';
import { RouteComponentProps } from 'react-router';

interface DetailsProps extends RouteComponentProps<{ id: string }> {}

const Tableau: React.FC<DetailsProps> = ({ match }) => {
  const teamId = match.params.id;
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    fetch(`http://localhost:8089/nba/StateByEquipe/`+teamId)
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Erreur de récupération des données:', error));
  }, []);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Nba Mobile</IonTitle>
        </IonToolbar>
      </IonHeader>
        <IonContent>
          <IonTitle id="titre">Statistiques de Basketball {teamId}</IonTitle>
          <IonGrid id='table'>
            <IonRow>
              <IonCol>Nom</IonCol>
              <IonCol>Prenom</IonCol>
              <IonCol>Equipe</IonCol>
              <IonCol>2pts</IonCol>
              <IonCol>3pts</IonCol>
              <IonCol>%LF</IonCol>
            </IonRow>
            {data.map((item, index) => (
              <React.Fragment key={index}>
                <IonRow>
                  <IonCol>{item.nomJoueur}</IonCol>
                  <IonCol>{item.prenoomJoueur}</IonCol>
                  <IonCol>{item.nomEquipe}</IonCol>
                  <IonCol>{item.panierDeuxPoints}</IonCol>
                  <IonCol>{item.panierTroisPoints}</IonCol>
                  <IonCol>{item.lancerFranc}</IonCol>
                </IonRow>
              </React.Fragment>
            ))}
          </IonGrid>     
      </IonContent>
    </IonPage>
  );
};

export default Tableau;
