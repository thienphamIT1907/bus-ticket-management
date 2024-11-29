import React from 'react';
import { Row, Col, Card } from 'antd';

const imageItems = [
  { src: 'https://via.placeholder.com/300x200', alt: 'Image 1' },
  { src: 'https://via.placeholder.com/300x200', alt: 'Image 2' },
  { src: 'https://via.placeholder.com/300x200', alt: 'Image 3' },
  { src: 'https://via.placeholder.com/300x200', alt: 'Image 4' },
  { src: 'https://via.placeholder.com/300x200', alt: 'View All', overlayText: 'View All (12)' },
];

const ImagesGrid = () => (
  <div style={{ padding: '20px' }}>
    <h2>Thư viện</h2>
    <Row gutter={[16, 16]}>
      {imageItems.map((item, index) => (
        <Col key={index} xs={24} sm={12} md={12} lg={6}>
          <Card
            hoverable
            style={{ borderRadius: '8px', overflow: 'hidden' }}
            cover={
              <div style={{ position: 'relative' }}>
                <img
                  src={item.src}
                  alt={item.alt}
                  style={{ width: '100%', height: 'auto' }}
                />
                {item.overlayText && (
                  <div
                    style={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      right: 0,
                      backgroundColor: 'rgba(0, 0, 0, 0.5)',
                      color: '#fff',
                      textAlign: 'center',
                      padding: '10px',
                      fontSize: '16px',
                    }}
                  >
                    {item.overlayText}
                  </div>
                )}
              </div>
            }
          />
        </Col>
      ))}
    </Row>
  </div>
);

export default ImagesGrid;