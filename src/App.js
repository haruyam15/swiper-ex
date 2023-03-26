import { Navigation, Pagination, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import './App.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useState } from 'react';

function App() {
  const [textIdx, setTextIdx] = useState(0)
  const handelSlide = (event) => {
    setTextIdx(event.activeIndex);
  }
  return (
    <div className="App">
      <Swiper
        modules={[Navigation, Pagination, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        onSlideChange={handelSlide}
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
      
      </Swiper>
      
      <div className="contents">
        <div className={textIdx === 0 ? `show` : ``}>
          <h1>제목1</h1>
          <h2>내용</h2>
        </div>

        <div className={textIdx === 1 ? `show` : ``}>
          <h1>제목2</h1>
          <h2>내용</h2>
        </div>

        <div className={textIdx === 2 ? `show` : ``}>
          <h1>제목3</h1>
          <h2>내용</h2>
        </div>

        <div className={textIdx === 3 ? `show` : ``}>
          <h1>제목4</h1>
          <h2>내용</h2>
        </div>
      </div>

    
    </div>
  );
}

export default App;
