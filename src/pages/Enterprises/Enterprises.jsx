import EnterprisesList from './components/EnterprisesList';
import Header from '../../component/Header';
import Footer from '../../component/Footer';
import { BackGroundField } from '../../component/CommonStyled';
import MainTitleFilter from '../../component/MainTitleFilter';
function Company() {
  return (
    <BackGroundField>
      <MainTitleFilter text="🏢 기업 정보" />
      <EnterprisesList />
    </BackGroundField>
  );
}

export default Company;
