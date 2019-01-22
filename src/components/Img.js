import React, {PureComponent} from 'react';

export default class Img extends PureComponent {
  state = {loaded: false};
  componentDidMount = () => {
    (this.observer = new IntersectionObserver(entries =>
      entries.forEach(entry => {
        const {isIntersecting} = entry;
        if (isIntersecting) {
          this.element.src = this.props.loadedSrc;
          this.observer = this.observer.disconnect();
        }
      })
    )),
      {
        root: document.querySelector('body'),
        rootMargin: '0px 0px 400px 0px'
      };
    this.observer.observe(this.element);
  };

  render() {
    return <img ref={ el => (this.element = el) } src={ this.props.src } />;
  }
}

Img.defaultProps = {
  loaded: false
};
