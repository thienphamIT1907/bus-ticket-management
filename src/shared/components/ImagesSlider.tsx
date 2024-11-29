import { CSSProperties, useState } from 'react';
import Slider from 'react-slick';

const images = [
  'https://images.unsplash.com/photo-1620841946140-f6b5e40ce49a?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D',
  'https://images.unsplash.com/photo-1589632479144-0aacc27f6936?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1580978612852-c8d8a156a560?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D',
  'https://images.unsplash.com/photo-1592211629077-4675f501d455?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHx8',
];

export const ImagesSlider = () => {
  const [nav1, setNav1] = useState<Slider | null>(null);
  const [nav2, setNav2] = useState<Slider | null>(null);

  const mainSettings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    asNavFor: nav2 as unknown as undefined,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  const thumbSettings = {
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: nav1 as unknown as undefined,
    focusOnSelect: true,
    arrows: false,
    centerMode: true,
    centerPadding: '10px',
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div>
      {/* Main Image Slider */}
      <Slider {...mainSettings} ref={(slider) => setNav1(slider)}>
        {images.map((img, index) => (
          <div
            key={index}
            className="max-h-[400px] w-full cursor-pointer overflow-hidden rounded-2xl"
          >
            <img src={img} className="size-full" />
          </div>
        ))}
      </Slider>

      <Slider
        {...thumbSettings}
        ref={(slider) => setNav2(slider!)}
        className="mt-4"
      >
        {images.map((img, index) => (
          <div key={index}>
            <img
              src={img}
              alt={`Thumbnail ${index}`}
              style={{
                width: '100%',
                height: '80px',
                objectFit: 'cover',
                paddingRight: '10px',
                cursor: 'pointer',
              }}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

type ArrowProps = {
  className?: string;
  style?: CSSProperties;
  onClick?: () => void;
};

function SampleNextArrow(props: ArrowProps) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: 'block',
        background: 'gray',
        borderRadius: '100%',
        opacity: 0.5,
      }}
      onClick={onClick}
    ></div>
  );
}

function SamplePrevArrow(props: ArrowProps) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: 'block',
        background: 'gray',
        borderRadius: '100%',
        opacity: 0.5,
      }}
      onClick={onClick}
    ></div>
  );
}
