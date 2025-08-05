import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Button,
  Card,
  Typography,
  Space,
  Gap,
  Divider,
  IconButton
} from '@alfalab/core-components';

const LandingPage = () => {
  const navigate = useNavigate();

  const handleApplyCard = () => {
    navigate('/header');
  };

  return (
    <div style={{ 
      minHeight: '100vh', 
      backgroundColor: 'white',
      padding: '24px 20px',
      display: 'flex',
      flexDirection: 'column'
    }}>
      {/* Credit Card Visual */}
      <div style={{
        width: '100%',
        height: '180px',
        backgroundColor: '#FF6B35',
        borderRadius: '12px',
        marginBottom: '32px',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <div style={{
          position: 'absolute',
          top: '16px',
          left: '16px',
          fontSize: '28px',
          fontWeight: 'bold',
          color: 'black'
        }}>
          A
        </div>
        <div style={{
          position: 'absolute',
          top: '16px',
          right: '16px',
          fontSize: '12px',
          color: 'black',
          textTransform: 'uppercase',
          fontWeight: '500'
        }}>
          credit
        </div>
      </div>

      {/* Main Heading */}
      <div style={{ 
        textAlign: 'center', 
        marginBottom: '16px'
      }}>
        <Typography.Title 
          view="large" 
          tag="h1" 
          style={{ 
            color: '#000',
            margin: '0 0 4px 0',
            fontSize: '24px',
            fontWeight: 'bold'
          }}
        >
          Кредитная карта
        </Typography.Title>
        <Typography.Title 
          view="large" 
          tag="h1" 
          style={{ 
            color: '#000',
            margin: '0',
            fontSize: '28px',
            fontWeight: 'bold'
          }}
        >
          Альфа-Банка
        </Typography.Title>
      </div>

      {/* Subheading */}
      <div style={{ 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        marginBottom: '40px'
      }}>
        <Typography.Text 
          view="primary-medium" 
          style={{ 
            color: '#666',
            marginRight: '6px',
            fontSize: '16px'
          }}
        >
          Наша лучшая кредитная карта
        </Typography.Text>
        <span style={{ fontSize: '14px' }}>🔥</span>
      </div>

      {/* Feature Cards */}
      <div style={{ flex: 1, marginBottom: '40px' }}>
        <div style={{
          backgroundColor: '#F5F5F5',
          borderRadius: '12px',
          padding: '16px',
          marginBottom: '12px'
        }}>
          <Typography.Title view="small" tag="h3" style={{ 
            marginBottom: '6px',
            fontSize: '18px',
            fontWeight: 'bold',
            color: '#000'
          }}>
            Бесплатное обслуживание
          </Typography.Title>
          <Typography.Text view="primary-medium" style={{ 
            color: '#666',
            fontSize: '14px',
            lineHeight: '1.4'
          }}>
            бесплатно в 1-й год, далее 990 ₽, если пользуетесь картой
          </Typography.Text>
        </div>

        <div style={{
          backgroundColor: '#F5F5F5',
          borderRadius: '12px',
          padding: '16px',
          marginBottom: '12px'
        }}>
          <Typography.Title view="small" tag="h3" style={{ 
            marginBottom: '6px',
            fontSize: '18px',
            fontWeight: 'bold',
            color: '#000'
          }}>
            1 000 000 ₽
          </Typography.Title>
          <Typography.Text view="primary-medium" style={{ 
            color: '#666',
            fontSize: '14px',
            lineHeight: '1.4'
          }}>
            максимальный кредитный лимит
          </Typography.Text>
        </div>

        <div style={{
          backgroundColor: '#F5F5F5',
          borderRadius: '12px',
          padding: '16px',
          marginBottom: '12px'
        }}>
          <Typography.Title view="small" tag="h3" style={{ 
            marginBottom: '6px',
            fontSize: '18px',
            fontWeight: 'bold',
            color: '#000'
          }}>
            60 дней без %
          </Typography.Title>
          <Typography.Text view="primary-medium" style={{ 
            color: '#666',
            fontSize: '14px',
            lineHeight: '1.4'
          }}>
            на любые покупки
          </Typography.Text>
        </div>

        <div style={{
          backgroundColor: '#F5F5F5',
          borderRadius: '12px',
          padding: '16px',
          marginBottom: '12px'
        }}>
          <Typography.Title view="small" tag="h3" style={{ 
            marginBottom: '6px',
            fontSize: '18px',
            fontWeight: 'bold',
            color: '#000'
          }}>
            Кэшбэк каждый месяц
          </Typography.Title>
          <Typography.Text view="primary-medium" style={{ 
            color: '#666',
            fontSize: '14px',
            lineHeight: '1.4'
          }}>
            до 50% за покупки у партнеров
          </Typography.Text>
        </div>
      </div>

      {/* Call to Action Button */}
      <Button
        view="primary"
        size="l"
        block
        onClick={handleApplyCard}
        style={{
          backgroundColor: '#333',
          borderColor: '#333',
          borderRadius: '12px',
          height: '56px',
          fontSize: '16px',
          fontWeight: 'bold',
          marginTop: 'auto'
        }}
      >
        Оформить карту
      </Button>
    </div>
  );
};

export default LandingPage; 