import {IonTitle, IonItem, IonLabel, IonList, IonItemDivider, useIonRouter } from '@ionic/react';
import './Liste.css';
import React, { useEffect, useState } from 'react';

const Liste: React.FC = () => {
  const router = useIonRouter();
    const [data1, setData] = useState<any[]>([]);

    useEffect(() => {
    fetch('http://localhost:8089/nba/ListeEquipe')
      .then(response => response.json())
      .then(data1 => setData(data1))
      .catch(error => console.error('Erreur de récupération des données:', error));
    }, []);

    const handleItemClick = (id: string) => {
      router.push(`/tab/${id}`);
    };
  return (
    <div>
        <IonTitle id="titre">Liste des Equipe</IonTitle>
        <IonItemDivider />
        <IonList className="liste ion-text-center">
        {data1.map((item) => (
            <React.Fragment key={item.idEquipe}>
                <IonItem onClick={() => handleItemClick(item.idEquipe)}>
                    <IonLabel>{item.nom}</IonLabel>
                </IonItem>
            </React.Fragment>
        ))}
        </IonList>
    </div>
  );
};

export default Liste;
