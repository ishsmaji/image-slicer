import Imageslider from "./components/Imageslider";

function App() {

  const images =[
    'https://media.istockphoto.com/id/1307609675/photo/bluebird.jpg?s=612x612&w=0&k=20&c=PdSeFBXLNi2n8vNxDjubRQOsaOw_sJ1w7RhtxjGL5GM=',
    'https://dogsinc.org/wp-content/uploads/2021/08/extraordinary-dog.png',
    'https://images.pexels.com/photos/2071882/pexels-photo-2071882.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
  ]

  return (
    <div className="flex items-center flex-col bg-purple-500 justify-center h-screen w-full">
    <p className="justify-center mb-10 text-5xl font-bold">Image Slider</p>
      <Imageslider images={images}/>
    </div>
  );
}

export default App;
