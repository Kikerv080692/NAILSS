import nails from '../data/nails.js';
import Flickity from 'react-flickity-component';
import './Nails.scss';
import * as SC from './Nails.styled.js';
import { useTranslation } from 'react-i18next';
import { useEffect, useRef } from 'react';

const flickityOptions = {
  initialIndex: 2,
};

function Nails() {
  const { t } = useTranslation();
  const flickityRef = useRef(null);

  useEffect(() => {
    if (flickityRef.current) {
      new Flickity(flickityRef.current, flickityOptions);
    }
  }, []);
  return (
    <SC.Works className="container-works">
      <SC.Title className="container-works-title">
        <h1>{t('Works')}</h1>
      </SC.Title>
      <div ref={flickityRef}>
        <Flickity
          className="Slider"
          elementType="div"
          disableImagesLoaded={true}
          options={flickityOptions}
          reloadOnUpdate
          static
        >
          {nails.map((nail, id) => {
            return (
              <div key={id} className="Plate">
                <div
                  style={{
                    backgroundImage: `url(${nail.img})`,
                    width: '100%',
                    height: 400,
                    backgroundSize: 'cover',
                  }}
                ></div>
              </div>
            );
          })}
        </Flickity>
      </div>
    </SC.Works>
  );
}

export default Nails;
