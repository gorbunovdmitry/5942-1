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
      padding: '20px',
      display: 'flex',
      flexDirection: 'column'
    }}>
      {/* Credit Card Visual */}
      <div style={{
        width: '100%',
        height: '200px',
        backgroundColor: '#FF6B35',
        borderRadius: '16px',
        marginBottom: '24px',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <div style={{
          position: 'absolute',
          top: '20px',
          left: '20px',
          fontSize: '32px',
          fontWeight: 'bold',
          color: 'white'
        }}>
          A
        </div>
        <div style={{
          position: 'absolute',
          top: '20px',
          right: '20px',
          fontSize: '14px',
          color: 'white',
          textTransform: 'uppercase'
        }}>
          credit
        </div>
      </div>

      {/* Main Heading */}
      <Typography.Title 
        view="large" 
        tag="h1" 
        style={{ 
          textAlign: 'center', 
          marginBottom: '8px',
          color: '#000'
        }}
      >
        Кредитная карта Альфа-Банка
      </Typography.Title>

      {/* Subheading */}
      <div style={{ 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        marginBottom: '32px'
      }}>
        <Typography.Text 
          view="primary-medium" 
          style={{ 
            color: '#666',
            marginRight: '8px'
          }}
        >
          Наша лучшая кредитная карта
        </Typography.Text>
        <span style={{ fontSize: '16px' }}>🔥</span>
      </div>

      {/* Feature Cards */}
      <Space direction="vertical" size="m" style={{ flex: 1 }}>
        <Card>
          <Typography.Title view="small" tag="h3" style={{ marginBottom: '8px' }}>
            Бесплатное обслуживание
          </Typography.Title>
          <Typography.Text view="primary-medium" style={{ color: '#666' }}>
            бесплатно в 1-й год, далее 990 ₽, если пользуетесь картой
          </Typography.Text>
        </Card>

        <Card>
          <Typography.Title view="small" tag="h3" style={{ marginBottom: '8px' }}>
            1 000 000 ₽
          </Typography.Title>
          <Typography.Text view="primary-medium" style={{ color: '#666' }}>
            максимальный кредитный лимит
          </Typography.Text>
        </Card>

        <Card>
          <Typography.Title view="small" tag="h3" style={{ marginBottom: '8px' }}>
            60 дней без %
          </Typography.Title>
          <Typography.Text view="primary-medium" style={{ color: '#666' }}>
            на любые покупки
          </Typography.Text>
        </Card>

        <Card>
          <Typography.Title view="small" tag="h3" style={{ marginBottom: '8px' }}>
            Кэшбэк каждый месяц
          </Typography.Title>
          <Typography.Text view="primary-medium" style={{ color: '#666' }}>
            до 50% за покупки у партнеров
          </Typography.Text>
        </Card>
      </Space>

      <Gap size="xl" />

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
          fontWeight: 'bold'
        }}
      >
        Оформить карту
      </Button>
    </div>
  );
};

export default LandingPage; 