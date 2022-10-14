import React from 'react'
import Main from '../components/Main'
import Row from '../components/Row'
import requests from '../Request'

const Home = () => {
  return (
    <>
    <Main/>
    {/* <Row title="Latest Movies" fetchUrl={requests.requestLatest}/> */}
    <Row rowId="1" title="Now Showing" fetchUrl={requests.requestNowShowing}/>
    <Row rowId="2" title="Popular Movies" fetchUrl={requests.requestPopular}/>
    <Row rowId="3" title="Up-coming Movies" fetchUrl={requests.requestUpcoming}/>
    <Row rowId="4" title="Top Rated Movies" fetchUrl={requests.requestTopRated}/>
    </>
  )
}

export default Home