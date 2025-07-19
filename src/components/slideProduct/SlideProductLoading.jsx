import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

function SlideProductLoading() {
    // Create an array with 4 items for loading placeholders
    const loadingItems = Array.from({ length: 4 });


    return (
        <div className="slide_product slide" style={{ background: '#fff' }}>
            <div className="container">
                <div className="top_slide">
                    <h2>
                        <Skeleton width={180} height={32} borderRadius={6} />
                    </h2>
                    <p>
                        <Skeleton width={260} height={20} borderRadius={4} />
                    </p>
                </div>
                <div className="mySwiper loading-swiper" style={{ display: 'flex', gap: 150 }}>
                    {loadingItems.map((_, idx) => (
                        <div key={idx} className="loading-slide" style={{
                            width: 200,
                            height: 300,
                            background: '#fff',
                            borderRadius: 8,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
                        }}>
                            <Skeleton circle width={120} height={120} style={{ marginBottom: 16 }} />
                            <Skeleton width={100} height={20} borderRadius={4} style={{ marginBottom: 8 }} />
                            <Skeleton width={60} height={20} borderRadius={4} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default SlideProductLoading;
