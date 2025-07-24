import LoginFragment from '../../components/fragments/Auth/LoginFragment'
import SectionWrapper from '../../components/fragments/Wrapper/Wrapper'
import AuthSection from '../../components/sections/Auth/AuthSection'

const Login = () => {
  return (
    <SectionWrapper classname='' maxWidth='md:max-w-12/12 xl:max-w-10/12'>
      <AuthSection title="Sign In" type="login"> 
        <LoginFragment />
      </AuthSection>
    </SectionWrapper>
  )
}

export default Login