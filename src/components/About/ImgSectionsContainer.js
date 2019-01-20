import styled from 'styled-components'
import ImgContainer from './ImgContainer';

const ImgSectionsContainer = styled.div`
  padding: 35px 90px 70px 105px;
  & > p {
    font-size: 28px;
    text-align: center;
    margin-top: 15px;
    line-height: 1.7;
    margin-bottom: 136px;

    @media screen and (max-width: 800px) {
      font-size: 19px;
      text-align: center;
      margin-top: 15px;
      margin-bottom: 36px;
    }
  }
  ${ImgContainer} {
    &[name='2'] {
      padding-bottom: 8.2%;
    }
    &[name='3'] {
      padding-top: 8%;
    }
    &[name='5'] {
      padding-top: 13.3%;
    }
    &[name='6'] {
      padding-top: 7.4%;
    }
    &[name='7'] {
      padding-bottom: 3.4%;
    }
  }

  @media screen and (max-width: 800px) {
    padding: 12px;
  }
`

export default ImgSectionsContainer