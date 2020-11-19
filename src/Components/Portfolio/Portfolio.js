import React from 'react'
import "./PortfolioStyle.scss";


  /////////////////////////
  // Desktop Portfolio
  /////////////////////////

const slides = [

  {
    title: 'Dev Portfolio',
    subtitle: 'Portfolio',
    description: 'My personal portfolio',
    image: require("../../Assets/Images/Portfolio/Portfolio_1.png"),
    link: "https://chrys-code.github.io/portfolio/",
  },
{
    title: 'Website Clone',
    subtitle: 'Netflix',
    description: "A Netflix clone",
    image: require("../../Assets/Images/Portfolio/Netflix_1.png"),
    link: "https://chrys-code.github.io/Netflix-clone/",

  },
  {
    title: 'E-Commerce',
    subtitle: 'MyShoes',
    description: "Best partner for a long way",
    image: require("../../Assets/Images/Portfolio/Ecommerce_1.png"),
    link: "https://myshoes-ecommerce.herokuapp.com/#/",

  },
{
    title: 'Webiste Clone',
    subtitle: 'Facebook',
    description: "A Facebook clone",
    image: require("../../Assets/Images/Portfolio/Facebook_1.png"),
    link: "https://facebook-clone-5fe9e.web.app/",

  },
{
    title: 'Photographer',
    subtitle: 'Portfolio',
    description: "Photographer portfolio",
    image: require("../../Assets/Images/Portfolio/Linda_1.png"),
    link: "https://chrys-code.github.io/Photography",

  },
]

const initialState = {
    slideIndex: 2
}

const slidesReducer = (state, event) => {
    if (event.type === "PREV") {
        return {
          ...state,
          slideIndex: (state.slideIndex + 1) % slides.length
        };
    }
    if (event.type === "NEXT") {
        return {
          ...state,
          slideIndex:
            state.slideIndex === 0 ? slides.length - 1 : state.slideIndex - 1
        }
    }
}

function useTilt(active) {
    const ref = React.useRef(null);
  
    React.useEffect(() => {
      if (!ref.current || !active) {
        return;
      }
  
      const state = {
        rect: undefined,
        mouseX: undefined,
        mouseY: undefined
      };
  
      let el = ref.current;
  
      const handleMouseMove = (e) => {
        if (!el) {
          return;
        }
        if (!state.rect) {
          state.rect = el.getBoundingClientRect();
        }
        state.mouseX = e.clientX;
        state.mouseY = e.clientY;
        const px = (state.mouseX - state.rect.left) / state.rect.width;
        const py = (state.mouseY - state.rect.top) / state.rect.height;
  
        el.style.setProperty("--px", px);
        el.style.setProperty("--py", py);
      };
  
      el.addEventListener("mousemove", handleMouseMove);
  
      return () => {
        el.removeEventListener("mousemove", handleMouseMove);
      };
    }, [active]);
  
    return ref;
  }



    function Slide({ slide, offset }) {
        const active = offset === 0 ? true : null;
        const ref = useTilt(active);
        
        return (
          <div
           ref={ref}
            className="slide"
            data-active={active}
            style={{

              zIndex: `${ -(Math.abs(offset)) +6}`,
              "--offset": offset ,
              "--dir": offset === 0 ? 0 : offset > 0 ? 1 : -1
            }}
          >
            <a href={slide.link} target="_blank" rel="noreferrer noopener">

            <div
              className="slideContent"
              style={ {
                backgroundImage: `url('${slide.image}')`,

              }}
            >
              <div className="frame_vertical_left"></div>
              <div className="frame_horizontal_top"></div>
              <div className="frame_vertical_right"></div>
              <div className="frame_horizontal_bottom"></div>

              <div className="slideContentInner">
                <h2 className="slideTitle">{slide.title}</h2>
                <h3 className="slideSubtitle">{slide.subtitle}</h3>
                <p className="slideDescription">{slide.description}</p>
              </div>
            </div>
            </a>
          </div>
        );
      }

function Portfolio() {
    const [state, dispatch] = React.useReducer(slidesReducer, initialState);
    return (
            <div className="slides">
                <button onClick={() => dispatch({ type: "PREV" })}>‹</button>
                {slides.map((slide, i) => {
                let offset =  1 + (state.slideIndex - i - 1);
                return <Slide slide={slide} offset={offset} key={i} />;
                 })}      
                <button onClick={() => dispatch({ type: "NEXT" })}>›</button>
            </div>
    )
}

export default Portfolio


