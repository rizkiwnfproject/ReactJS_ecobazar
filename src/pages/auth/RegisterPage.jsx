import SectionWrapper from '../../components/fragments/Wrapper/Wrapper'
import RegisterSection from '../../components/fragments/Auth/RegisterFragment'
import AuthSection from '../../components/sections/Auth/AuthSection'
import RegisterFragment from '../../components/fragments/Auth/RegisterFragment'
const Register = () => {
  return (
    <>
      <SectionWrapper padding='py-15'>
        <AuthSection title="Create Account" type="register">
          <RegisterFragment />
        </AuthSection>
      </SectionWrapper >
    </>
  )
}

export default Register