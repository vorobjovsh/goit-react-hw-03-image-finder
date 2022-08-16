import React, { Component } from 'react';
import './App.css'
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import Modal from './Modal/Modal';
import btnImagesApi from 'services/btnImagesApi';
import { ThreeCircles } from  'react-loader-spinner'


class App extends Component {

  state = {
    images: [],
    showModal: false,
    bigImage: '',
    countPage: 1,
    name: '',
    isLoading: false
  };

  handleSubmit = searchName => {
    this.setState({
      name: searchName,
      countPage: 1,
      images: [],
      isLoading: true
    })

    setTimeout(() => {

      btnImagesApi
      .fetchImagesAddBtn(searchName, this.state.countPage.toString())
      .then(response => this.setState({
        images: response.data.hits,
        isLoading: false
      }));

    }, 100);

  };

  addImages = () => {

    this.setState({
      isLoading: true
    })

    this.setState(prevState => ({
      countPage: prevState.countPage + 1,
    }));

    setTimeout(() => {

      btnImagesApi
      .fetchImagesAddBtn(this.state.name, this.state.countPage.toString())
      .then(response => {
          let {images} = this.state
          const data = response.data.hits;
          data.map((elem) => (images.push(elem)))
          this.setState({
            images: images,
            isLoading: false
          })
      })

    }, 100);

  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  largeImage = bImg => {
    this.toggleModal();
    this.setState({ bigImage: bImg });
  };

  render() {
    const { showModal, images, bigImage, isLoading } = this.state;

    return (
      <div className="App">
        <Searchbar onSubmit={this.handleSubmit} />
        <ImageGallery images={images} clickImg={this.largeImage} />
        {isLoading &&
        <ThreeCircles
          height="100"
          width="100"
          color="#3f51b5"
          wrapperStyle={{}}
          wrapperClass="spoon"
          visible={true}
          ariaLabel="three-circles-rotating"
          outerCircleColor=""
          innerCircleColor=""
          middleCircleColor=""
        />
        }
        {images.length > 0 && (
          <Button addPictures={this.addImages} />
        )}
        {showModal && (
          <Modal onClose={this.toggleModal} largeImageURL={bigImage} />
        )}
      </div>
    );
  }

}

export default App;
