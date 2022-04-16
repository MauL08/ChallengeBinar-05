import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  PermissionsAndroid,
} from 'react-native';
import React, { useState } from 'react';
import VideoPlayer from 'react-native-video-controls';
import { ms } from 'react-native-size-matters';

import DocumentPicker from 'react-native-document-picker';
import { launchCamera } from 'react-native-image-picker';

import Color from '../../../../config/utils/color';

const VideoScreen = () => {
  // External Video
  const [videoIndex, setVideoIndex] = useState(0);

  const Videos = [
    {
      description:
        "Big Buck Bunny tells the story of a giant rabbit with a heart bigger than himself. When one sunny day three rodents rudely harass him, something snaps... and the rabbit ain't no bunny anymore! In the typical cartoon tradition he prepares the nasty rodents a comical revenge.\n\nLicensed under the Creative Commons Attribution license\nhttp://www.bigbuckbunny.org",
      sources: [
        'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
      ],
      subtitle: 'By Blender Foundation',
      thumb: 'images/BigBuckBunny.jpg',
      title: 'Big Buck Bunny',
    },
    {
      description: 'The first Blender Open Movie from 2006',
      sources: [
        'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
      ],
      subtitle: 'By Blender Foundation',
      thumb: 'images/ElephantsDream.jpg',
      title: 'Elephant Dream',
    },
    {
      description:
        'HBO GO now works with Chromecast -- the easiest way to enjoy online video on your TV. For when you want to settle into your Iron Throne to watch the latest episodes. For $35.\nLearn how to use Chromecast with HBO GO and more at google.com/chromecast.',
      sources: [
        'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
      ],
      subtitle: 'By Google',
      thumb: 'images/ForBiggerBlazes.jpg',
      title: 'For Bigger Blazes',
    },
    {
      description:
        "Introducing Chromecast. The easiest way to enjoy online video and music on your TV—for when Batman's escapes aren't quite big enough. For $35. Learn how to use Chromecast with Google Play Movies and more at google.com/chromecast.",
      sources: [
        'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
      ],
      subtitle: 'By Google',
      thumb: 'images/ForBiggerEscapes.jpg',
      title: 'For Bigger Escape',
    },
    {
      description:
        'Introducing Chromecast. The easiest way to enjoy online video and music on your TV. For $35.  Find out more at google.com/chromecast.',
      sources: [
        'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
      ],
      subtitle: 'By Google',
      thumb: 'images/ForBiggerFun.jpg',
      title: 'For Bigger Fun',
    },
    {
      description:
        'Introducing Chromecast. The easiest way to enjoy online video and music on your TV—for the times that call for bigger joyrides. For $35. Learn how to use Chromecast with YouTube and more at google.com/chromecast.',
      sources: [
        'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
      ],
      subtitle: 'By Google',
      thumb: 'images/ForBiggerJoyrides.jpg',
      title: 'For Bigger Joyrides',
    },
    {
      description:
        "Introducing Chromecast. The easiest way to enjoy online video and music on your TV—for when you want to make Buster's big meltdowns even bigger. For $35. Learn how to use Chromecast with Netflix and more at google.com/chromecast.",
      sources: [
        'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4',
      ],
      subtitle: 'By Google',
      thumb: 'images/ForBiggerMeltdowns.jpg',
      title: 'For Bigger Meltdowns',
    },
    {
      description:
        'Sintel is an independently produced short film, initiated by the Blender Foundation as a means to further improve and validate the free/open source 3D creation suite Blender. With initial funding provided by 1000s of donations via the internet community, it has again proven to be a viable development model for both open 3D technology as for independent animation film.\nThis 15 minute film has been realized in the studio of the Amsterdam Blender Institute, by an international team of artists and developers. In addition to that, several crucial technical and creative targets have been realized online, by developers and artists and teams all over the world.\nwww.sintel.org',
      sources: [
        'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4',
      ],
      subtitle: 'By Blender Foundation',
      thumb: 'images/Sintel.jpg',
      title: 'Sintel',
    },
    {
      description:
        'Smoking Tire takes the all-new Subaru Outback to the highest point we can find in hopes our customer-appreciation Balloon Launch will get some free T-shirts into the hands of our viewers.',
      sources: [
        'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4',
      ],
      subtitle: 'By Garage419',
      thumb: 'images/SubaruOutbackOnStreetAndDirt.jpg',
      title: 'Subaru Outback On Street And Dirt',
    },
    {
      description:
        'Tears of Steel was realized with crowd-funding by users of the open source 3D creation tool Blender. Target was to improve and test a complete open and free pipeline for visual effects in film - and to make a compelling sci-fi film in Amsterdam, the Netherlands.  The film itself, and all raw material used for making it, have been released under the Creatieve Commons 3.0 Attribution license. Visit the tearsofsteel.org website to find out more about this, or to purchase the 4-DVD box with a lot of extras.  (CC) Blender Foundation - http://www.tearsofsteel.org',
      sources: [
        'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4',
      ],
      subtitle: 'By Blender Foundation',
      thumb: 'images/TearsOfSteel.jpg',
      title: 'Tears of Steel',
    },
    {
      description:
        "The Smoking Tire heads out to Adams Motorsports Park in Riverside, CA to test the most requested car of 2010, the Volkswagen GTI. Will it beat the Mazdaspeed3's standard-setting lap time? Watch and see...",
      sources: [
        'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/VolkswagenGTIReview.mp4',
      ],
      subtitle: 'By Garage419',
      thumb: 'images/VolkswagenGTIReview.jpg',
      title: 'Volkswagen GTI Review',
    },
    {
      description:
        'The Smoking Tire is going on the 2010 Bullrun Live Rally in a 2011 Shelby GT500, and posting a video from the road every single day! The only place to watch them is by subscribing to The Smoking Tire or watching at BlackMagicShine.com',
      sources: [
        'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4',
      ],
      subtitle: 'By Garage419',
      thumb: 'images/WeAreGoingOnBullrun.jpg',
      title: 'We Are Going On Bullrun',
    },
    {
      description:
        'The Smoking Tire meets up with Chris and Jorge from CarsForAGrand.com to see just how far $1,000 can go when looking for a car.The Smoking Tire meets up with Chris and Jorge from CarsForAGrand.com to see just how far $1,000 can go when looking for a car.',
      sources: [
        'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WhatCarCanYouGetForAGrand.mp4',
      ],
      subtitle: 'By Garage419',
      thumb: 'images/WhatCarCanYouGetForAGrand.jpg',
      title: 'What care can you get for a grand?',
    },
  ];

  // Video Type
  const [type, setType] = useState('Internal');

  // Video State
  const [pause, setPause] = useState(false);

  // Internal Video
  const [file, setFile] = useState('');

  // Open Camera
  const [cameraPermission, setCameraPermission] = useState(true); // Use Redux Next Time

  const requestCameraPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: 'App Camera Permission',
          message: 'App needs access to your camera ',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        setCameraPermission(granted);
      } else {
        setCameraPermission(false);
      }
    } catch (err) {
      console.warn(err);
    }
  };

  const openCamera = () => {
    if (!cameraPermission) {
      requestCameraPermission();
    } else {
      const options = {
        title: 'Open Gallery',
        saveToPhotos: true,
        mediaType: 'video',
        path: 'video',
      };
      launchCamera(options, response => {
        if (response.assets) {
          setFile(response.assets[0].uri);
        } else {
          setFile(currState => currState);
        }
      });
    }
  };

  // Open Gallery
  const openStorage = async () => {
    try {
      const response = await DocumentPicker.pick();
      setFile(response[0].uri);
    } catch (err) {
      setFile(currState => currState);
    }
    // const options = {
    //   title: 'Open Gallery',
    //   mediaType: 'video',
    //   path: 'video',
    // };
    // launchImageLibrary(options, response => {
    //   if (response.assets) {
    //     setFile(response.assets[0].uri);
    //   } else {
    //     setFile('');
    //   }
    // });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Video Player</Text>
      <View style={styles.typeControl}>
        <TouchableOpacity
          onPress={() => setType('Internal')}
          style={styles.internalButton}>
          <Text style={styles.buttonText}>Internal</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setType('External')}
          style={styles.externalButton}>
          <Text style={styles.buttonText}>External</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.textHelper}>You're viewing {type} Video</Text>
      <View style={styles.contentContainer}>
        {type === 'Internal' ? (
          file ? (
            <View style={styles.controlBanner}>
              <VideoPlayer
                source={{
                  uri: file,
                }}
                style={styles.controlBanner}
                videoStyle={styles.videoBanner}
                volume={0.1}
                resizeMode="cover"
                showOnStart={false}
                paused={pause}
                onBack={() => setFile('')}
                onPlay={() => setPause(false)}
                onEnd={() => setPause(true)}
                controlTimeout={5000}
                scrubbing={30}
              />
            </View>
          ) : (
            <View style={styles.controlContainer}>
              <TouchableOpacity
                style={styles.pickButton}
                onPress={() => openCamera()}>
                <Text style={styles.pickButtonText}>Take Video</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.pickButton}
                onPress={() => openStorage()}>
                <Text style={styles.pickButtonText}>Pick Videos</Text>
              </TouchableOpacity>
            </View>
          )
        ) : (
          <View style={styles.movieContainer}>
            <VideoPlayer
              source={{
                uri: Videos[videoIndex].sources[0],
              }}
              style={styles.controlBanner}
              videoStyle={styles.videoBanner}
              volume={0.1}
              disableBack
              resizeMode="cover"
              showOnStart={false}
              paused={pause}
              onBack={() => setFile('')}
              onPlay={() => setPause(false)}
              onEnd={() => setPause(true)}
              controlTimeout={5000}
              scrubbing={30}
            />
            <Text style={styles.videoTitle}>{Videos[videoIndex].title}</Text>
            <Text style={styles.videoTitle}>
              ({videoIndex + 1}/{Videos.length})
            </Text>
            <View style={styles.buttonControl}>
              <TouchableOpacity
                style={styles.pickButton}
                onPress={() => {
                  if (videoIndex > 0) {
                    setVideoIndex(currState => currState - 1);
                  }
                }}>
                <Text style={styles.pickButtonText}>Prev Video</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.pickButton}>
                <Text
                  style={styles.pickButtonText}
                  onPress={() => {
                    if (videoIndex < Videos.length - 1) {
                      setVideoIndex(currState => currState + 1);
                    }
                  }}>
                  Next Video
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </View>
    </View>
  );
};

export default VideoScreen;

const styles = StyleSheet.create({
  container: {
    paddingVertical: ms(20),
    paddingHorizontal: ms(20),
    backgroundColor: Color.BACKGROUND_COLOR,
    borderRadius: ms(20),
    marginTop: ms(30),
    marginHorizontal: ms(20),
    elevation: ms(6),
  },
  title: {
    color: Color.MAIN_COLOR,
    textAlign: 'left',
    fontSize: ms(18),
    fontWeight: 'bold',
  },
  typeControl: {
    flexDirection: 'row',
    marginVertical: ms(12),
  },
  internalButton: {
    backgroundColor: Color.NON_ACTIVE_COLOR,
    paddingVertical: ms(5),
    paddingHorizontal: ms(12),
    marginRight: ms(10),
    borderRadius: ms(4),
  },
  externalButton: {
    backgroundColor: Color.NON_ACTIVE_COLOR,
    paddingVertical: ms(5),
    paddingHorizontal: ms(12),
    borderRadius: ms(4),
  },
  buttonText: {
    color: Color.BACKGROUND_COLOR,
    fontSize: ms(12),
    fontWeight: '500',
  },
  textHelper: {
    color: Color.DISABLE_BUTTON_COLOR,
    fontWeight: '500',
    marginBottom: ms(10),
  },
  pickButton: {
    backgroundColor: Color.MAIN_COLOR,
    paddingVertical: ms(5),
    paddingHorizontal: ms(12),
    borderRadius: ms(4),
    marginVertical: ms(15),
    marginHorizontal: ms(5),
  },
  pickButtonText: {
    color: Color.BACKGROUND_COLOR,
    fontWeight: '500',
  },
  contentContainer: {
    alignItems: 'center',
  },
  controlBanner: {
    borderRadius: ms(10),
    height: ms(290),
    width: ms(290),
  },
  videoBanner: {
    height: ms(290),
    width: ms(290),
  },
  buttonControl: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: ms(300),
  },
  movieContainer: {
    alignItems: 'center',
    height: ms(380),
    width: ms(300),
  },
  videoTitle: {
    color: Color.NON_ACTIVE_COLOR,
    textAlign: 'center',
    marginTop: ms(10),
    fontSize: ms(12),
    fontWeight: '500',
  },
  takeButton: {
    backgroundColor: Color.MAIN_COLOR,
    paddingVertical: ms(5),
    paddingHorizontal: ms(12),
    borderRadius: ms(4),
    marginTop: ms(15),
  },
  takeButtonText: {
    color: Color.BACKGROUND_COLOR,
    fontWeight: '500',
    textAlign: 'center',
  },
  controlContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
});
