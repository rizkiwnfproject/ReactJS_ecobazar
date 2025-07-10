import React from 'react'
import SectionWrapper from '../../components/fragments/Wrapper/Wrapper'
import BlogSection from '../../components/sections/Blog/BlogSection'

const BlogPage = () => {
  return (
    <SectionWrapper padding='py-15'>
        <BlogSection type="list"/>
    </SectionWrapper>
  )
}

export default BlogPage