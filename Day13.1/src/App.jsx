
import { useEffect, useState } from 'react'
import './App.css'
import { ThemeProvider } from './context/theme'
import ThemeBtn from './components/ThemeBtn'
import Card from './components/Card'

function App() {
  const [themeMode, setThemeMode] = useState("light") // themeMode mei by Default value jo hai woh hai light

  const lightTheme = () => { // defining the functionality of these function--> lightTheme
    setThemeMode("light")
  }

  const darkTheme = () => { // defining the functionality of these function--> darkTheme
    setThemeMode("dark")
  }

  // actual change in theme --> theme mei changes kaise  ayega woh idhar define kar de rhay hai
  useEffect(() => {
    document.querySelector('html').classList.remove("light", "dark") // pehle se uske mei kya hai usse remove kar diya hai
    document.querySelector('html').classList.add(themeMode)
  }, [themeMode]) // dependencies --> themeMode ---> themeMode mei uch v changes ho toh woh aa  jaye --> thats why it is dependencies
  

  return (
    //  wrap it all inside themeProvider 
    // value batayega kis cheez ka access humay hai and kis cheez ka nahi hai---> access --> themeMode , lightTheme , darkTheme <<<<---- ThemeBtn ,  card dono ko iska access milega
    <ThemeProvider value={{themeMode, lightTheme, darkTheme}}> 
      {/* code from context.md file */}
      <div className="flex flex-wrap min-h-screen items-center">
          <div className="w-full">
              <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                  <ThemeBtn />
              </div>

              <div className="w-full max-w-sm mx-auto">
                  <Card />
              </div>
          </div>
      </div>
    </ThemeProvider>
  )
}

export default App