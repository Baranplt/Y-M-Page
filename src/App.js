import React, { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { AiFillStar } from 'react-icons/ai'
import OutsideClickHandler from 'react-outside-click-handler';
import { FaPlay } from 'react-icons/fa'
import Slider1 from './assets/img/img1.jpg'
import Slider2 from './assets/img/img2.jpeg'
import Slider3 from './assets/img/img3.jpeg'
import Slider4 from './assets/img/img4.jpeg'
import Slider5 from './assets/img/img5.jpg'
import Slider6 from './assets/img/img21.jpg'
import Slider7 from './assets/img/img22.jpeg'
import Slider8 from './assets/img/img23.png'
import Slider9 from './assets/img/img24.jpg'

function App() {
  //  Slider için vediğim özellikler
  const caruselSettings = {
    showIndicators: false,
    showThumbs: false,
    showArrows: false,
    autoPlay: true,
    infiniteLoop: true,
    width: 300,
    transitionTime: 2000
  };
  //Aktörlerin bilgileri
  const actorData = [
    {
      name: "Timothée Chalamet",
      src: "https://upload.wikimedia.org/wikipedia/commons/b/bf/Timoth%C3%A9e_Chalamet_2017_Berlinale.jpg",
      desc: "Timothée Hal Chalamet is an American-French actor. He started his career by appearing in short films before appearing in the television series Homeland in 2012. Two years later he made his main film career with Men,  "
    },
    {
      name: "Zendaya",
      src: "https://tr.web.img4.acsta.net/c_310_420/pictures/15/11/23/09/37/018271.jpg",
      desc: "Zendaya Maree Stoermer Coleman (born September 1, 1996), known as Zendaya, is an American teen actress, singer, dancer, and model. He started his career at a young age with a dance group called Future Shock Oakland.   "
    },
    {
      name: "Rebecca Ferguson",
      src: "https://tr.web.img4.acsta.net/pictures/16/09/29/09/37/306122.jpg",
      desc: "Rebecca Louisa Ferguson Sundström is a Swedish actress. She started her acting career with the Swedish soap opera Nya tider and starred in the movie Drowning Ghost. "
    },
    {
      name: "Oscar Isaac",
      src: "https://upload.wikimedia.org/wikipedia/commons/f/f1/Oscar_Isaac_by_Gage_Skidmore.jpg",
      desc: "(born March 9, 1979) is a Guatemalan-born American actor. Known for his versatility, he has been credited with breaking stereotypes about Latino characters in Hollywood."
    },
    {
      name: "Jason Momoa",
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Jason_Momoa_%2843055621224%29_%28cropped%29.jpg/640px-Jason_Momoa_%2843055621224%29_%28cropped%29.jpg",
      desc: "Joseph Jason Namakaeha Momoa (/məˈmoʊə/; born August 1, 1979[1]) is an American actor. He made his acting debut as Jason Ioane on the syndicated action drama series Baywatch: Hawaii (1999–2001)"
    }
  ]
  // tıklanan divin indexi
  const [clickItem, setClickItem] = useState(-1)
  // modalın  görünüp görünmeyeceği
  const [clickPop, setClickPop] = useState(false)
  // aktörün bilgilerini moala yazar
  const [clickDesc, setClickDesc] = useState("")

  const handleMouseOver = (index, item) => {
    // gelen indexi alır
    setClickItem(index);
    // modalı gösterir
    setClickPop(true)
    // aktörün bilgilerini modala yazar
    setClickDesc(item.desc)
  };

  return (
    <div className="App  h-full">
      <div className="bg-hero-bg w-full h-full bg-red-900 bg-center bg-cover bg-no-repeat ">
        <div className="fixed hidden z-0 top-0 left-0 h-full w-full bg-black opacity-50">

        </div>
        <div className="container mx-auto  w-full h-full text-white">
          <div className="content flex flex-col justify-end z-10 relative   w-full h-full">

            <div className="page-top flex flex-col lg:flex-row items-center justify-between   ">
              <div className="page-top-left w-4/4 lg:w-2/4   ">
                <h1 className="text-6xl font-semibold text-white -tracking-tighter  ">Dune</h1>
                <div className="point flex flex-wrap text-white my-5 text-opacity-80 items-center">
                  <AiFillStar className="text-yellow-500 text-2xl mr-1" />
                  <h2 className="text-2xl text-white ">8.2 <span className="opacity-80 text-lg border-l pl-2">1055</span> </h2>
                  <span className="ml-5">2h 35m</span>
                  <span className="w-2 h-2 bg-gray-200 rounded-full mx-2"></span>
                  <span >Action,Adventure,Drama</span>
                  <span className="w-2 h-2 bg-gray-200 rounded-full mx-2"></span>
                  <span >2021</span>


                </div>
                <div className="desc py-5 text-white text-opacity-80">
                  <p className="font-semibold  ">A noble family becomse embroiled in a war for control over the galaxy's most valuable asst while its heir becomes troubled by visions of a dark future</p>
                </div>
              </div>
              <div className="page-top-right w-4/4 lg:w-2/4">
                <div className="flex flex-wrap justify-center text-white">
                  {/* Slider  */}
                  <Carousel   {...caruselSettings} >
                    <div className="w-full h-full">
                      <img className={"rounded-xl w-40 h-full"} src={Slider1} />
                    </div>
                    <div className="w-full h-full">
                      <img className={"rounded-xl w-40 h-full"} src={Slider2} />
                    </div>
                    <div className="w-full h-full">
                      <img className={"rounded-xl w-40 h-full"} src={Slider3} />
                    </div>
                    <div className="w-full h-full">
                      <img className={"rounded-xl w-40 h-full"} src={Slider4} />
                    </div>

                    <div className="w-full h-full">
                      <img className={"rounded-xl w-40 h-full"} src={Slider5} />
                    </div>
                    <div className="w-full h-full">
                      <img className={"rounded-xl w-full h-full"} src={Slider6} />
                    </div>
                    <div className="w-full h-full">
                      <img className={"rounded-xl w-full h-full"} src={Slider7} />
                    </div>
                    <div className="w-full h-full">
                      <img className={"rounded-xl w-full h-full"} src={Slider8} />
                    </div>
                    <div className="w-full h-full">
                      <img className={"rounded-xl w-full h-full"} src={Slider9} />
                    </div>

                    <div className="w-full h-full">
                      <img className={"rounded-xl w-full h-full"} src={Slider5} />
                    </div>
                  </Carousel>
                </div>

              </div>
            </div>
            <div className="page-bottom flex flex-col lg:flex-row items-center justify-between  ">

              <div className="page-bottom-left w-full lg:w-2/4 ">
                <div className=" flex flex-wrap justify-between lg:justify-start my-10">
                  <button className=" flex items-center mr-0 lg:mr-10 text-white font-bold w-44 px-5 py-3 rounded-xl transition-all hover:bg-slate-500  bg-blue-700">
                    <a className="flex items-center">
                      <FaPlay className="mr-2" /> PLAY NOW
                    </a>
                  </button>
                  <button className=" flex items-center justify-center text-white font-bold w-44 px-5 py-3 rounded-xl transition-all hover:bg-slate-500  bg-gray-600 bg-opacity-70">
                    <a target='blank' href="https://www.youtube.com/watch?v=n9xhJrPXop4&ab_channel=WarnerBros.Pictures">
                      TRAILER
                    </a>
                  </button>
                </div>
              </div>
              <div className="page-bottom-right  w-full lg:w-2/4 ">
                <div className="flex  flex-wrap justify-center text-white">

                  {/* Ekranın Başka Bir Yerine Dokununca Açılan Modalın Kapanmasını Sağlar */}
                  <OutsideClickHandler
                    onOutsideClick={() => {
                      setClickPop(false)
                    }}

                  >
                    <div className="actors  flex flex-wrap justify-center ">

                      {/* Aktörlerin biliglerini map ile dönüyoruz */}
                      {actorData.map((item, index) => {
                        return (
                          <div className="flex flex-col justify-center items-center mt-5 ">
                            <div onClick={() => handleMouseOver(index, item)} className="actor cursor-pointer  w-12 h-12 mx-5">
                              <img className="rounded-full w-full h-full object-cover" src={item.src} />
                            </div>
                            <h1 className="text-white text-xs">{item.name}</h1>
                          </div>

                        )
                      })}
                    </div>



                    {clickPop && (<div className="hoveractor text-white bg-gray-600 bg-opacity-50 my-2 p-5 rounded-lg ">
                      {clickDesc}
                    </div>)}
                  </OutsideClickHandler>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
