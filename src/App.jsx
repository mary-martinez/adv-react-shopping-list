import Header from './components/Header';
import { ListProvider } from './context/ListContext';
import List from './views/List';
import styles from './App.css';

export default function App() {
  return (
    <div className={styles.app}>
      <ListProvider>
        <Header />
        <List />
      </ListProvider>
    </div>
  );
}
