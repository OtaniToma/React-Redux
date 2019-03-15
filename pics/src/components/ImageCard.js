import React from 'react';

class ImageCard extends React.Component {
  constructor(props) {
    super(props);
    
    // 初期値を0にする
    this.state = { spans: 0 };

    this.imageRef = React.createRef();
  }

  componentDidMount() {
    // 画像の読み込みよりも先に実行されるため、高さを取得できず0になる
    // console.log(this.imageRef);
    // console.log(this.imageRef.current.clientHeight);

    // こうすることで画像が読み込まれてから高さを取得できる
    this.imageRef.current.addEventListener('load', this.setSpans);
  }

  setSpans = () => {
    console.log(this.imageRef.current.clientHeight);

    const height = this.imageRef.current.clientHeight;

    const spans = Math.ceil(height / 10);
    
    this.setState({ spans });
  }

  render() {
    const { description, urls } = this.props.image;

    return (
      <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
        <img ref={this.imageRef} alt={description} src={urls.regular} />
      </div>
    );
  }
}

export default ImageCard;