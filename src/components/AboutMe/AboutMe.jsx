import * as SC from './AboutMe.styled'
import { useTranslation } from 'react-i18next';
export const AboutMe = () => {
  const { t } = useTranslation();
  return (
    <SC.Wrapper>
      <SC.WrapperText>
        <h2>{t('aboutMe')}</h2>
      </SC.WrapperText>
      <SC.WrapperText>
        <p>{t('aboutMe1')}</p>
      </SC.WrapperText>
      <SC.WrapperText>
        <p>{t('aboutMe2')}</p>
      </SC.WrapperText>
      <SC.WrapperText>
        <p>Манікюр за 2 години, педикюр за 1.5 години.</p>
      </SC.WrapperText>
      <SC.WrapperText>
        <p>Будь який дизайн на ваш смак.</p>
      </SC.WrapperText>
      <SC.WrapperText>
        <p>Я за здорові ручки і нігті.</p>
      </SC.WrapperText>
      <div>
        <p></p>
      </div>
      <div>
        <p></p>
      </div>
    </SC.Wrapper>
  )
}


