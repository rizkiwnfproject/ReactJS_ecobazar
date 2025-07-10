import LoginFragment from '../../components/fragments/Auth/LoginFragment'
import SectionWrapper from '../../components/fragments/Wrapper/Wrapper'
import AuthSection from '../../components/sections/Auth/AuthSection'

const Login = () => {
  return (
    <SectionWrapper classname='' padding='py-15'>
      <AuthSection title="Sign In" type="login"> 
        <LoginFragment />
      </AuthSection>
    </SectionWrapper>
  )
}

export default Login