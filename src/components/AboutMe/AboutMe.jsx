import * as SC from './AboutMe.styled'
import { useTranslation } from 'react-i18next'
import MyWife from '../../../public/image/Mywife.jpg'

export const AboutMe = () => {
  const { t } = useTranslation();
  return (
    <SC.ALL>
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
        <p>{t('aboutMe3')}</p>
      </SC.WrapperText>
      <SC.WrapperText>
        <p>{t('aboutMe4')}</p>
      </SC.WrapperText>
      <SC.WrapperText>
        <p>{t('aboutMe5')}</p>
      </SC.WrapperText>
    </SC.Wrapper>
    <SC.WrapperFoto>
    <img src={MyWife} alt="me" />
    </SC.WrapperFoto>
    </SC.ALL>
  )
}


