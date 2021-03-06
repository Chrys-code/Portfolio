import React from 'react';
import './ModalStyle.scss';


function Modal(props) {

  const { index, tiles, modalInfo, modalHandler } = props;

  return (
    <div className="modal_wrapper" onClick={(e) => modalHandler(e)}>
      <div className="modal">
        <img className="modal_icon" src={tiles[index].icon} alt={tiles[index].alt} />
        <h2>{tiles[index].title}</h2>
        <p>{tiles[index].description}</p>

        {index === 0 && <div className="modal_0_info">
          <p className="modal_0_text" >{modalInfo[index].explanation}</p>
          <p className="modal_0_text">{modalInfo[index].question}</p>
          <ul>
            {modalInfo[index].answer.map((ans, index) => {
              return (
                <li className="modal_0_text_ans" key={index}>{ans}</li>
              )
            })}
          </ul>

        </div>
        }
        {index === 1 && <div className="modal_3_info">
          <p className="modal_3_text" >{modalInfo[index].explanation}</p>
          <p className="modal_3_text" >{modalInfo[index].answer}</p>
        </div>
        }
        {index === 3 && <div className="modal_2_info">
          <p className="modal_2_text" >{modalInfo[index].explanation}</p>
          <p className="modal_2_text">{modalInfo[index].question}</p>
          <ul>
            {modalInfo[index].answer.map((ans, index) => {
              return (
                <li className="modal_2_text" key={index}>{ans}</li>
              )
            })}
          </ul>
        </div>
        }
        {index === 2 && <div className="modal_1_info">
          <p className="modal_1_text" >{modalInfo[index].explanation}</p>
        </div>
        }

        {index === 4 && <div className="modal_4_info">
          <p className="modal_4_text" >{modalInfo[index].explanation}</p>
          <p className="modal_4_text" >{modalInfo[index].answer}</p>
        </div>
        }
        {index === 5 && <div className="modal_5_info">
          <p className="modal_5_text" >{modalInfo[index].explanation}</p>
          <ul>
            {modalInfo[index].answer.map((ans, index) => {
              return (
                <li className="modal_5_text" key={index}>{ans}</li>
              )
            })}
          </ul>
          <p className="modal_5_text" >{modalInfo[index].example}</p>
        </div>
        }

        <img className="modal_img" src={tiles[index].background} alt="modal_background" />
      </div>
    </div>
  )
}

export default Modal

