import React, { useState, useEffect } from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import { login } from './api/login'
import logo from './logo.svg'
import './App.css'

function App () {
  const [data, setData] = useState()
  useEffect(() => {
    async function fetchData () {
      const data = await login({ name: 'sub-react' })
      console.log(data)
      setData(JSON.stringify(data.data))
    }
    fetchData()
  }, [])
  return (
    <BrowserRouter basename='/react'>
      <Link to='/'>首页.2.</Link> {' | '}
      <Link to='/about'>关于页面</Link>
      <Route
        path='/'
        exact
        render={() => (
          <div className='App'>
            <header className='App-header'>
              <img src={logo} className='App-logo' width='200' alt='logo' />
              <div>{data}</div>
              <p>
                Edit <code>src/App.js</code> and save to reload.
              </p>
              <a
                className='App-link'
                href='https://reactjs.org'
                target='_blank'
                rel='noopener noreferrer'
              >
                Learn React
              </a>
            </header>
          </div>
        )}
      ></Route>
      <Route
        path='/about'
        exact
        render={() => <h1 className='App'>about页面</h1>}
      ></Route>
    </BrowserRouter>
  )
}

export default App
