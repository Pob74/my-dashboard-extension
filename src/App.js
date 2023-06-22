import Content from "./components/Content"
import UnsplashImage from "./components/UnsplashImage"

function App() {
  return (
    <div className="w-screen h-screen">
      <UnsplashImage image="https://images.unsplash.com/photo-1459213599465-03ab6a4d5931?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTgwOTN8MHwxfHNlYXJjaHwyNHx8bGFuZHNjYXBlfGVufDB8fHx8MTY4NzQyOTE1Nnww&ixlib=rb-4.0.3&q=80&w=1080" />
      <Content />
    </div>
  )
}

export default App
