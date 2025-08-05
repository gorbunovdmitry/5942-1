import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Button,
  Typography,
  Space,
  Gap,
  Card
} from '@alfalab/core-components';

const HeaderPage = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/');
  };

  return (
    <div style={{ 
      minHeight: '100vh', 
      backgroundColor: 'white',
      padding: '20px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      {/* Header Icon */}
      <div style={{
        width: '120px',
        height: '120px',
        backgroundColor: '#FF6B35',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '32px'
      }}>
        <Typography.Title 
          view="large" 
          style={{ 
            color: 'white',
            fontSize: '48px',
            margin: 0
          }}
        >
          👤
        </Typography.Title>
      </div>

      {/* Title */}
      <Typography.Title 
        view="large" 
        tag="h1" 
        style={{ 
          textAlign: 'center', 
          marginBottom: '16px',
          color: '#000'
        }}
      >
        Заглушка с головой
      </Typography.Title>

      {/* Description */}
      <Typography.Text 
        view="primary-large" 
        style={{ 
          textAlign: 'center',
          color: '#666',
          marginBottom: '48px',
          maxWidth: '400px'
        }}
      >
        Это вторая страница приложения. Здесь будет размещена основная функциональность с заголовком.
      </Typography.Text>

      {/* Back Button */}
      <Button
        view="secondary"
        size="l"
        onClick={handleBack}
        style={{
          borderRadius: '12px',
          height: '48px',
          fontSize: '16px',
          fontWeight: 'bold'
        }}
      >
        Вернуться назад
      </Button>
    </div>
  );
};

export default HeaderPage; 