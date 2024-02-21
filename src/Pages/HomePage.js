import React from 'react'
import Layout from '../Layout/Layout'
import Cards from '../Components/Home/Cards'
import Banner from '../Components/Home/Banner'


function HomePage() {
  return (
        <div className="relative h-screen lg:h-[140vh]">
            <Layout>
                <Banner/>
                <Cards/>
            </Layout>
        </div>
  )
}

export default HomePage