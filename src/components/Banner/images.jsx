import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./images.css";
import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Productcard from "../Card/productcard";

const Carousel = () => {
  const navigate = useNavigate();
  const [imageSrc, setImageSrc] = useState("https://st2.depositphotos.com/1006899/8352/i/450/depositphotos_83524452-stock-photo-404-error-hanging-on-strings.jpg");
  const [productlist, setproductlist] = useState([]);
  const [audio, setaudio] = useState([]);
  const [kitchenappliances, setkitchenappliances] = useState([]);
  const [washingMachine, setwashingMachine] = useState([]);
  const [trending, settrending] = useState([]);
  const [laptops, setlaptops] = useState([]);
  const [television, settelevision] = useState([]);
  const [ac, setac] = useState([]);
  const [tablet, settablet] = useState([]);
  const [refrigerator, setrefrigerator] = useState([]);
  const [health, sethealth] = useState([]);
  const [travel, settravel] = useState([]);

  async function getAllproducts() {
    const response = await fetch(
      'https://academics.newtonschool.co/api/v1/ecommerce/electronics/products?filter={"sellerTag":"top rated"}',
      {
        headers: {
          projectID: "f104bi07c490",
        },
      }
    );
    const promise = await response.json();
    const data = promise.data;
    setproductlist(data);
  }

  async function gettrendingproducts() {
    const response = await fetch(
      'https://academics.newtonschool.co/api/v1/ecommerce/electronics/products?filter={"sellerTag":"top rated"}',
      {
        headers: {
          projectID: "f104bi07c490",
        },
      }
    );
    const promise = await response.json();
    const data = promise.data;
    setproductlist(data);
  }

  async function getAllproducts() {
    const response = await fetch(
      'https://academics.newtonschool.co/api/v1/ecommerce/electronics/products?filter={"sellerTag":"trending"}',
      {
        headers: {
          projectID: "f104bi07c490",
        },
      }
    );
    const promise = await response.json();
    const data = promise.data;
    settrending(data);
  }

  async function getlaptopProducts() {
    const response = await fetch(
      'https://academics.newtonschool.co/api/v1/ecommerce/electronics/products?filter={"subCategory":"laptop"}',
      {
        headers: {
          projectID: "f104bi07c490",
        },
      }
    );
    const promise = await response.json();
    const data = promise.data;
    setlaptops(data);
  }

  async function gettvProducts() {
    const response = await fetch(
      'https://academics.newtonschool.co/api/v1/ecommerce/electronics/products?filter={"subCategory":"tv"}',
      {
        headers: {
          projectID: "f104bi07c490",
        },
      }
    );
    const promise = await response.json();
    const data = promise.data;
    settelevision(data);
  }


  async function getacProducts() {
    const response = await fetch(
      'https://academics.newtonschool.co/api/v1/ecommerce/electronics/products?filter={"subCategory":"ac"}',
      {
        headers: {
          projectID: "f104bi07c490",
        },
      }
    );
    const promise = await response.json();
    const data = promise.data;
    setac(data);
  }

  async function gettabletProducts() {
    const response = await fetch(
      'https://academics.newtonschool.co/api/v1/ecommerce/electronics/products?filter={"subCategory":"tablet"}',
      {
        headers: {
          projectID: "f104bi07c490",
        },
      }
    );
    const promise = await response.json();
    const data = promise.data;
    settablet(data);
  }

  async function getrefrigerator() {
    const response = await fetch(
      'https://academics.newtonschool.co/api/v1/ecommerce/electronics/products?filter={"subCategory":"refrigerator"}',
      {
        headers: {
          projectID: "f104bi07c490",
        },
      }
    );
    const promise = await response.json();
    const data = promise.data;
    setrefrigerator(data);
  }

  async function gethealth() {
    const response = await fetch(
      'https://academics.newtonschool.co/api/v1/ecommerce/electronics/products?filter={"subCategory":"health"}',
      {
        headers: {
          projectID: "f104bi07c490",
        },
      }
    );
    const promise = await response.json();
    const data = promise.data;
    sethealth(data);
  }


  async function getTravel() {
    const response = await fetch(
      'https://academics.newtonschool.co/api/v1/ecommerce/electronics/products?filter={"subCategory":"travel"}',
      {
        headers: {
          projectID: "f104bi07c490",
        },
      }
    );
    const promise = await response.json();
    const data = promise.data;
    settravel(data);
  }

  async function getAudioproduct() {
    const response = await fetch(
      "https://academics.newtonschool.co/api/v1/ecommerce/electronics/products?limit=100&page=5",
      {
        headers: {
          projectID: "f104bi07c490",
        },
      }
    );
    const promise2 = await response.json();
    const data = promise2.data;
    const audio = data.filter((item) => item.subCategory === "audio");
    const washing = data.filter((item) => item.subCategory === "washingMachine");
    setaudio(audio);
    setwashingMachine(washing);

  }

  async function getKitchenproduct() {
    const response = await fetch(
      'https://academics.newtonschool.co/api/v1/ecommerce/electronics/products?limit=50&filter={"subCategory":"kitchenappliances"}',
      {
        headers: {
          projectID: "f104bi07c490",
        },
      }
    );
    const promise2 = await response.json();
    const data = promise2.data;
    const kitchenappliances = data.filter((item) => item.subCategory === "kitchenappliances");
    setkitchenappliances(kitchenappliances);
  }

  useEffect(() => {
    getlaptopProducts();
    getAudioproduct();
    getAllproducts();
    gettvProducts();
    getacProducts();
    gettabletProducts();
    getrefrigerator();
    gethealth();
    getTravel();
    gettrendingproducts();
    getKitchenproduct();
  }, [])

  const images = [
    "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1690220193/Croma%20Assets/CMS/LP%20Page%20Banners/2023/UNBOXED/UPDATE/2407/category-icon_unboxed_e123f4.png?tr=w-720",
    "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1676968095/Croma%20Assets/CMS/LP%20Page%20Banners/2023/01_HP_BUGS_LP_BUGS/FEB/21-02-2023/Category%20Navigation%20-%20Audio%20Split/CategoryNavigation_AudioSplit_Mobile_21Feb2023_y6hsfe.png?tr=w-720",
    "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1676968095/Croma%20Assets/CMS/LP%20Page%20Banners/2023/01_HP_BUGS_LP_BUGS/FEB/21-02-2023/Category%20Navigation%20-%20Audio%20Split/CategoryNavigation_AudioSplit_TV_21Feb2023_repyuk.png?tr=w-720",
    "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1700225992/Croma%20Assets/CMS/LP%20Page%20Banners/2023/HP%20Category%20Navigation/CategoryNavigation_AudioSplit_Laptops_17Nov2023_wcqnvs.png?tr=w-720",
    "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1676968094/Croma%20Assets/CMS/LP%20Page%20Banners/2023/01_HP_BUGS_LP_BUGS/FEB/21-02-2023/Category%20Navigation%20-%20Audio%20Split/CategoryNavigation_AudioSplit_H_E_21Feb2023_cw375r.png?tr=w-720",
    "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1676968094/Croma%20Assets/CMS/LP%20Page%20Banners/2023/01_HP_BUGS_LP_BUGS/FEB/21-02-2023/Category%20Navigation%20-%20Audio%20Split/CategoryNavigation_AudioSplit_Ref_21Feb2023_ztynzt.png?tr=w-720",
    "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1676968094/Croma%20Assets/CMS/LP%20Page%20Banners/2023/01_HP_BUGS_LP_BUGS/FEB/21-02-2023/Category%20Navigation%20-%20Audio%20Split/CategoryNavigation_AudioSplit_HT_SB_21Feb2023_rk8ohd.png?tr=w-720",
    "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1676968094/Croma%20Assets/CMS/LP%20Page%20Banners/2023/01_HP_BUGS_LP_BUGS/FEB/21-02-2023/Category%20Navigation%20-%20Audio%20Split/CategoryNavigation_AudioSplit_AC_21Feb2023_azyacw.png?tr=w-720",
    "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1676968095/Croma%20Assets/CMS/LP%20Page%20Banners/2023/01_HP_BUGS_LP_BUGS/FEB/21-02-2023/Category%20Navigation%20-%20Audio%20Split/CategoryNavigation_AudioSplit_S_M_21Feb2023_qllhag.png?tr=w-720",
    "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1683281227/Croma%20Assets/CMS/LP%20Page%20Banners/2023/HP%20Category%20Navigation/washingmachine_categoryicons_ktcdeu.png?tr=w-720",
    "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1683281227/Croma%20Assets/CMS/LP%20Page%20Banners/2023/HP%20Category%20Navigation/kitchenappliances_categoryicons_xulmep.png?tr=w-720",
    "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1683281227/Croma%20Assets/CMS/LP%20Page%20Banners/2023/HP%20Category%20Navigation/grooming_categoryicons_oj7mrc.png?tr=w-720",
    "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1683281228/Croma%20Assets/CMS/LP%20Page%20Banners/2023/HP%20Category%20Navigation/tablet_categoryicons_d9a5ru.png?tr=w-720",
    "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1683281228/Croma%20Assets/CMS/LP%20Page%20Banners/2023/HP%20Category%20Navigation/wearable_categoryicons_sl3n0l.png?tr=w-720",
    "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1690270086/Croma%20Assets/CMS/Category%20icon/Updated%20Icons/LP_WishlistSale_CN_WP_4July2023_jtwzp9.png?tr=w-720",
    "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1690521345/Croma%20Assets/CMS/Category%20icon/CategoryNavigation_AudioSplit_Cameras_21Feb2023_fxbmtt.png?tr=w-720",
    "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1680608144/Croma%20Assets/CMS/Homepage%20Banners/Category%20Navigation/CategoryNavigation_AudioSplit_Accessories_21Feb2023_mtqgol.png?tr=w-720",
    "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1683281227/Croma%20Assets/CMS/LP%20Page%20Banners/2023/HP%20Category%20Navigation/gaming_categoryicons_hfqpze.png?tr=w-720",
  ];

  const audioimages = [
    "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1703567882/Croma%20Assets/CMS/Homepage%20Banners/01_Homepage%20Bugs%20Daily/Dec%202023/26-12-2023/HP_4Split_audio_TWS_26dec2023_njwbdp.png?tr=w-720",
    "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1702271762/Croma%20Assets/CMS/Homepage%20Banners/01_Homepage%20Bugs%20Daily/Dec%202023/11-12-2023/HP_4Split_audio_croma_11dec2023_hc990y.png?tr=w-720",
    "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1703308393/Croma%20Assets/CMS/Homepage%20Banners/01_Homepage%20Bugs%20Daily/Dec%202023/23-12-2023/HP_4Split_audio_SB_23dec2023_vwxix3.png?tr=w-720",
    "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1703481249/Croma%20Assets/CMS/Homepage%20Banners/01_Homepage%20Bugs%20Daily/Dec%202023/25-12-2023/HP_4Split_audio_Luxury_25dec2023_dod7ca.png?tr=w-720"
  ]

  const kitchenimages = [
    "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1702193023/Croma%20Assets/CMS/Homepage%20Banners/01_Homepage%20Bugs%20Daily/Dec%202023/10-12-2023/HP_4Split_KA_MW_10dec2023_mijq5a.png?tr=w-480",
    "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1702271769/Croma%20Assets/CMS/Homepage%20Banners/01_Homepage%20Bugs%20Daily/Dec%202023/11-12-2023/HP_4Split_KA_mixer_11dec2023_upoifc.png?tr=w-480",
    "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1700975390/Croma%20Assets/CMS/Homepage%20Banners/01_Homepage%20Bugs%20Daily/Nov%202023/26-11-2023/HP_4Split_KA_Chimnneys_26Nov2023_iibz9w.png?tr=w-480",
    "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1700459132/Croma%20Assets/CMS/Homepage%20Banners/01_Homepage%20Bugs%20Daily/Nov%202023/20-11-2023/HP_4Split_KA_CM_20Nov2023_pofymo.png?tr=w-480",
  ]

  const laptopimages = [
    "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1702360436/Croma%20Assets/CMS/Homepage%20Banners/01_Homepage%20Bugs%20Daily/Dec%202023/12-12-2023/HP_4Split_Laptops_student_12dec2023_w6hhcg.png?tr=w-480",
    "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1702360434/Croma%20Assets/CMS/Homepage%20Banners/01_Homepage%20Bugs%20Daily/Dec%202023/12-12-2023/HP_4Split_Laptops_professional_12dec2023_turuvi.png?tr=w-480",
    "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1702360431/Croma%20Assets/CMS/Homepage%20Banners/01_Homepage%20Bugs%20Daily/Dec%202023/12-12-2023/HP_4Split_Laptops_gaming_12dec2023_rqmz8k.png?tr=w-480",
    "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1702360433/Croma%20Assets/CMS/Homepage%20Banners/01_Homepage%20Bugs%20Daily/Dec%202023/12-12-2023/HP_4Split_Laptops_latesttech_12dec2023_xkll2z.png?tr=w-480",
  ]

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      }
    ]
  };
  const settings1 = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]

  }

  const audioimagesclick = () => {
    navigate(`/search/audio`);
  }

  const kitchenimagesclick = () => {
    navigate(`/search/kitchenappliances`);
  }

  const laptopimagesclick = () => {
    navigate(`/search/laptop`);
  }

  const imageclick = (e, index) => {
    console.log(`Clicked on image with index: ${index}`);
    if (index == 0) {
      navigate(`/unboxed`)
    }
    else if (index == 1) {
      navigate(`/search/iphone`)
    }
    else if (index == 2) {
      navigate(`/search/tv`);
    }
    else if (index == 3) {
      navigate(`/search/laptop`);
    }
    else if (index == 5) {
      navigate(`/search/refrigerator`);
    }
    else if (index == 7) {
      navigate(`/search/ac`);
    }
    else if (index == 8 || index == 4) {
      navigate(`/search/audio`);
    }
    else if (index == 9) {
      navigate(`/search/washingMachine`);
    }
    else if (index == 10) {
      navigate(`/search/kitchenappliances`);
    }
    else if (index == 12) {
      navigate(`/search/tablet`);
    }
    else if (index == 11 || index == 13 || index == 14 || index == 15 || index == 16 || index == 17) {
      navigate("/unboxed");
    }
  }

  return (
    <div className="carousel">
      <Slider {...settings}>
        {images?.map((image, index) => (
          <div key={index} className="images" onClick={(e) => imageclick(e, index)} >
            <img src={image} alt={`Image ${index + 1}`} />
          </div>
        ))}
      </Slider>

      <p className="homeheadings">Deals Of The Day</p>
      <Slider {...settings1}>
        {
          productlist.map((product) => {
            return <Productcard product={product} />
          })
        }
      </Slider>

      <p className="homeheadings">Top Trending Deals</p>
      <Slider {...settings1}>
        {
          trending.map((product) => {
            return <Productcard product={product} />
          })
        }
      </Slider>

      <p className="homeheadings">Audio</p>
      <div className="homestaticimagedeals">
        {audioimages.map((image, index) => (
          <img src={image} alt={`Image ${index + 1}`} className="homeimages" onClick={() => audioimagesclick()} />
        ))}
      </div>

      <p className="homeheadings">Deals on Audio</p>
      <Slider {...settings1}>
        {
          audio.map((product) => {
            return <Productcard product={product} />
          })
        }
      </Slider>

      <p className="homeheadings">Kitchen Appliances</p>
      <div className="homestaticimagedeals">
        {kitchenimages.map((image, index) => (
          <img src={image} alt={`Image ${index + 1}`} className="homeimages" onClick={() => kitchenimagesclick()} />
        ))}
      </div>

      <p className="homeheadings" >Kitchen Appliances</p>
      <Slider {...settings1}>
        {
          kitchenappliances.map((product) => {
            return <Productcard product={product} />
          })
        }
      </Slider>

      <p className="homeheadings">Laptops</p>
      <div className="homestaticimagedeals">
        {laptopimages.map((image, index) => (
          <img src={image} alt={`Image ${index + 1}`} className="homeimages" onClick={() => laptopimagesclick()} />
        ))}
      </div>

      <p className="homeheadings">Deals On Laptops</p>
      <Slider {...settings1} style={{ marginTop: "2rem" }}>
        {
          laptops.map((product) => {
            return <Productcard product={product} />
          })
        }
      </Slider>

      <p className="homeheadings">Televisions</p>
      <Slider {...settings1}>
        {
          television.map((product) => {
            return <Productcard product={product} />
          })
        }
      </Slider>

      <p className="homeheadings">Air Conditioners</p>
      <Slider {...settings1}>
        {
          ac.map((product) => {
            return <Productcard product={product} />
          })
        }
      </Slider>

      <p className="homeheadings">Tablets</p>
      <Slider {...settings1}>
        {
          tablet.map((product) => {
            return <Productcard product={product} />
          })
        }
      </Slider>

      <p className="homeheadings">Refrigerators</p>
      <Slider {...settings1}>
        {
          refrigerator.map((product) => {
            return <Productcard product={product} />
          })
        }
      </Slider>

      <p className="homeheadings">Washing Machines</p>
      <Slider {...settings1}>
        {
          washingMachine.map((product) => {
            return <Productcard product={product} />
          })
        }
      </Slider>

      <p className="homeheadings">Health   </p>
      <Slider {...settings1}>
        {
          health.map((product) => {
            return <Productcard product={product} />
          })
        }
      </Slider>

      <p className="homeheadings">Travel</p>
      <Slider {...settings1}>
        {
          travel.map((product) => {
            return <Productcard product={product} />
          })
        }
      </Slider>
    </div>
  );
};

export default Carousel;
