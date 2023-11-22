import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar} from '@ionic/react';
import Liste from '../components/Liste';
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Nba Mobile</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <Liste />
      </IonContent>
    </IonPage>
  );
};

export default Home;
