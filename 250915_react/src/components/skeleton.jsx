
/* Skeleton */
@keyframes shimmer {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
}
.skeleton {
  position: relative;
  overflow: hidden;
  background: #e5e7eb;
}
.skeleton::after {
  content: '';
  position: absolute;
  inset: 0;
  transform: translateX(-100%);
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.6), transparent);
  animation: shimmer 1.2s infinite;
}
.skeleton-text {
  height: 12px;
  border-radius: 6px;
}
.skeleton-avatar {
  width: 36px;
  height: 36px;
  border-radius: 50%;
}

import { useEffect, useState } from 'react';
import './App.css';

function Product() {
  return (
    <li className="list-item">
      <div className="skeleton skeleton-avatar" />
      <div style={{ flex: 1, display: 'grid', gap: 6 }}>
        <div className="skeleton skeleton-text" style={{ width: '40%' }} />
        <div className="skeleton skeleton-text" style={{ width: '26%' }} />
      </div>
      <div className="skeleton skeleton-text" style={{ width: 64 }} />
    </li>
  );
}

const products = [
  { id: 1, name: '사과', price: 1200 },
  { id: 2, name: '바나나', price: 800 },
  { id: 3, name: '체리', price: 1500 },
  { id: 4, name: '복숭아', price: 1300 },
  { id: 5, name: '포도', price: 1100 },
  { id: 6, name: '오렌지', price: 900 },
];

export default function App() {
  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setItems(products);
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="app">
      <ul className="list">
        {(loading ? products : items).map((item) =>
          loading ? (
            <Product key={item.id} />
          ) : (
            <li key={item.id} className="list-item">
              <span className="name">{item.name}</span>
              <span className="price">{item.price.toLocaleString()}원</span>
            </li>
          )
        )}
      </ul>
    </div>
  );
}