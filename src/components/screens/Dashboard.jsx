import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Dashboard.module.css'; // немесе стандартты CSS файл

export default function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      {/* Жоғарғы бөлім / Карточкалар */}
      <div className={styles.cardWrapper}>
        <div className={styles.card}>
          <h2 className={styles.welcomeText}>Welcome Again</h2>
          <div className={styles.iconGroup}>
            <span className={styles.icon}>👤</span>
            <span className={styles.icon}>⚙️</span>
          </div>
        </div>

        <div className={styles.cardGreen}>
          <button 
            className={styles.actionButton}
            onClick={() => alert('Параметрлерге өту')}
          >
            Change Password
          </button>
        </div>
      </div>

      {/* Алдыңғы бетке қайту батырмасы */}
      <button 
        className={styles.backButton}
        onClick={() => navigate(-1)}
      >
        ← Артқа қайту
      </button>
    </div>
  );
}