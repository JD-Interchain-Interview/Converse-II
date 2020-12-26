import React, { Component } from "react";
import PropTypes from "prop-types";
import ScrollMenu from "react-horizontal-scrolling-menu";
import { ScheduleDec12 } from '../../database/Schedule';
import Icon_ArrowLeft from '../../assets/Icon_ArrowLeft.svg';
import Icon_ArrowRight from '../../assets/Icon_ArrowRight.svg';


// Component Styling
import { PlaybackClass_Mobile, PlaybackClass_Web, card_Mobile, card_Web, card_hover, header, PlaybackDate, Speakers, ProfileImage, ProfileName, gradient, hrOpacity} from '../WatchOnDemand/PlaybackClass'; 

// Component Layout

let list = [
  { name: "item1" },
];

const MenuItem = ({ events }) => {
  return (
    <div className={`${PlaybackClass_Mobile}`}>
      <a href={events.link} target='_blank'>
      <div className={`${card_Mobile} ${card_Web} ${card_hover}`}>
        <p className={gradient}>{events.title}</p>
        <p className={PlaybackDate}>{events.date} at {events.time}</p>
        <br/>
        {events.speakers.map((speaker) => (
          <div className={Speakers}>
            <img src={speaker.profile} alt={speaker.name} className={ProfileImage}/>
            <p className={ProfileName}>{speaker.name}</p>
          </div>
        ))}
      </div>
      </a>
    </div>
  );
};

export const Menu = () => 

  ScheduleDec12.map(events => {
    return <MenuItem events={events} key={events.title} />;
  });

const Arrow = ({ Icon, className }) => {
  return <div className={className}>{Icon}</div>;
};
Arrow.propTypes = {
  // Icon: PropTypes.string,
  className: PropTypes.string
};

const arrowPrev = 'p-5';
const arrowNext = 'p-5'

export const ArrowLeft = Arrow({ Icon: '' || '<', className: arrowPrev });
export const ArrowRight = Arrow({ Icon: '' || '>', className: arrowNext });

class HorizontalScroll_ScheduleDec12Page extends Component {
  state = {
    alignCenter: true,
    clickWhenDrag: false,
    dragging: true,
    hideArrows: true,
    hideSingleArrow: true,
    scrollToSelected: false,
    selected: "item1",
    translate: 0,
    transition: 1,
    wheel: true
  };

  constructor(props) {
    super(props);
    this.menu = null;
    this.menuItems = Menu(list.slice(0, list.length), this.state.selected);
  }

  onFirstItemVisible = () => {
    console.log("first item is visible");
  };

  // onLastItemVisible = () => {
  //   console.log("last item is visible");

  //   const newItems = Array(5)
  //     .fill(1)
  //     .map((el, ind) => ({ name: `item${list.length + ind + 1}` }));
  //   list = list.concat(newItems);
  //   this.menuItems = Menu(list, list.slice(-1)[0].name);
  //   this.setState({
  //     itemsCount: list.length,
  //     selected: this.state.selected
  //   });
  // };

  onUpdate = ({ translate }) => {
    console.log(`onUpdate: translate: ${translate}`);
    this.setState({ translate });
  };

  onSelect = key => {
    console.log(`onSelect: ${key}`);
    this.setState({ selected: key });
  };

  componentDidUpdate(prevProps, prevState) {
    const { alignCenter } = prevState;
    const { alignCenter: alignCenterNew } = this.state;
    if (alignCenter !== alignCenterNew) {
      this.menu.setInitial();
    }
  }

  setSelected = ev => {
    const { value } = ev.target;
    this.setState({ selected: String(value) });
  };

  render() {
    const {
      alignCenter,
      clickWhenDrag,
      hideArrows,
      dragging,
      hideSingleArrow,
      itemsCount,
      scrollToSelected,
      selected,
      translate,
      transition,
      wheel
    } = this.state;

    const menu = this.menuItems;

    return (
      <div className="App">

        <ScrollMenu
          alignCenter={alignCenter}
          arrowLeft={ArrowLeft}
          arrowRight={ArrowRight}
          clickWhenDrag={clickWhenDrag}
          data={menu}
          dragging={dragging}
          hideArrows={hideArrows}
          hideSingleArrow={hideSingleArrow}
          onFirstItemVisible={this.onFirstItemVisible}
          // onLastItemVisible={this.onLastItemVisible}
          onSelect={this.onSelect}
          onUpdate={this.onUpdate}
          ref={el => (this.menu = el)}
          scrollToSelected={scrollToSelected}
          selected={selected}
          transition={+transition}
          translate={translate}
          wheel={wheel}
        />
      </div>
    );
  }
}

export default HorizontalScroll_ScheduleDec12Page;
