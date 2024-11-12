import { Header } from "./Header/Header";
import { MainBody } from "./MainBody/MainBody";
import styles from './App.module.css'
import { ImageCard } from "./ImageCard/ImageCard";




function App() {
  return (
    <div className={styles.appContainer}>
      <Header />
      <MainBody />
      <ImageCard/>
    </div>
  );
}

export default App;
