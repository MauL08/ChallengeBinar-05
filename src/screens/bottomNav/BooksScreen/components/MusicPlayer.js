import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import React, { useState } from 'react';
import { ms } from 'react-native-size-matters';
import SoundPlayer from 'react-native-sound-player';

import DocumentPicker from 'react-native-document-picker';

import Color from '../../../../config/utils/color';

const MusicPlayer = () => {
  // External Sound
  const [musicIndex, setMusicIndex] = useState(0);

  const [type, setType] = useState('Internal');
  const [file, setFile] = useState('');

  const randSoundLogo =
    'https://cdn.dribbble.com/users/3547568/screenshots/14395014/media/0b94c75b97182946d495f34c16eab987.jpg?compress=1&resize=400x300&vertical=top';

  const TRACKS = [
    {
      title: 'Kalimba Beat',
      artist: '-',
      albumArtUrl: 'https://img.fruugo.com/product/5/11/161329115_max.jpg',
      audioUrl:
        'https://www.learningcontainer.com/wp-content/uploads/2020/02/Kalimba.mp3',
    },
    {
      title: 'Star Wars Theme',
      artist: '-',
      albumArtUrl:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/1200px-Star_Wars_Logo.svg.png',
      audioUrl: 'https://www2.cs.uic.edu/~i101/SoundFiles/StarWars60.wav',
    },
    {
      title: 'Pink Panther Theme',
      artist: '-',
      albumArtUrl:
        'https://assets1.ignimgs.com/2020/11/19/pink-panther-reboot-1605813320129_160w.jpg?width=1280',
      audioUrl: 'https://www2.cs.uic.edu/~i101/SoundFiles/PinkPanther60.wav',
    },
    {
      title: 'Random Beat Music',
      artist: '-',
      albumArtUrl:
        'https://cdn.dribbble.com/users/3547568/screenshots/14395014/media/0b94c75b97182946d495f34c16eab987.jpg?compress=1&resize=400x300&vertical=top',
      audioUrl: 'https://dl.espressif.com/dl/audio/ff-16b-2c-44100hz.mp3',
    },
  ];

  // Internal Sound
  const openStorage = async () => {
    try {
      const res = await DocumentPicker.pick();
      setFile(res[0]);
    } catch (error) {
      setFile(currState => currState);
    }
  };

  // Sound State
  const [musicStatus, setMusicStatus] = useState('Play');

  // Sound Function
  const playSong = () => {
    SoundPlayer.playUrl(file.uri);
    setMusicStatus('Pause');
  };

  const stopSong = () => {
    SoundPlayer.stop();
    setMusicStatus('Play');
  };

  const pauseSong = () => {
    SoundPlayer.pause();
    setMusicStatus('Resume');
  };

  const resumeSong = () => {
    SoundPlayer.resume();
    setMusicStatus('Pause');
  };

  const prevSong = () => {
    stopSong();
    if (musicIndex > 0) {
      setMusicIndex(currState => currState - 1);
    }
  };

  const nextSong = () => {
    stopSong();
    if (musicIndex < TRACKS.length - 1) {
      setMusicIndex(currState => currState + 1);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Music Player</Text>
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
      <Text style={styles.textHelper}>You're listening to {type} Music</Text>
      <View style={styles.contentContainer}>
        {type === 'Internal' ? (
          file ? (
            <View style={styles.musicContainer}>
              <TouchableOpacity
                style={styles.pickButton}
                onPress={() => {
                  stopSong();
                  openStorage();
                }}>
                <Text style={styles.pickButtonText}>Choose another Music</Text>
              </TouchableOpacity>
              <Image
                source={{ uri: randSoundLogo }}
                style={styles.posterImage}
              />
              <Text style={styles.musicTitle}>Playing {file.name}</Text>
              <View style={styles.buttonControl}>
                <TouchableOpacity
                  style={styles.pickButton}
                  onPress={() => {
                    switch (musicStatus) {
                      case 'Play':
                        playSong();
                        break;
                      case 'Pause':
                        pauseSong();
                        break;
                      case 'Resume':
                        resumeSong();
                        break;
                    }
                  }}>
                  <Text style={styles.pickButtonText}>{musicStatus}</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={stopSong} style={styles.pickButton}>
                  <Text style={styles.pickButtonText}>Stop</Text>
                </TouchableOpacity>
              </View>
            </View>
          ) : (
            <View>
              <TouchableOpacity
                style={styles.pickButton}
                onPress={() => openStorage()}>
                <Text style={styles.pickButtonText}>Pick a Music</Text>
              </TouchableOpacity>
            </View>
          )
        ) : (
          <View style={styles.songContainer}>
            <View style={styles.songInfo}>
              <Image
                source={{ uri: TRACKS[musicIndex].albumArtUrl }}
                style={styles.posterImage}
              />
              <Text style={styles.musicTitle}>{TRACKS[musicIndex].title}</Text>
              <Text style={styles.musicArtist}>
                {TRACKS[musicIndex].artist}
              </Text>
              <Text style={styles.musicCountTitle}>
                ({musicIndex + 1}/{TRACKS.length})
              </Text>
            </View>
            <View style={styles.buttonControl}>
              <TouchableOpacity onPress={prevSong} style={styles.pickButton}>
                <Text style={styles.pickButtonText}>Prev</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.pickButton}
                onPress={() => {
                  switch (musicStatus) {
                    case 'Play':
                      playSong();
                      break;
                    case 'Stop':
                      stopSong();
                      break;
                    case 'Pause':
                      pauseSong();
                      break;
                    case 'Resume':
                      resumeSong();
                      break;
                  }
                }}>
                <Text style={styles.pickButtonText}>{musicStatus}</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={stopSong} style={styles.pickButton}>
                <Text style={styles.pickButtonText}>Stop</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={nextSong} style={styles.pickButton}>
                <Text style={styles.pickButtonText}>Next</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </View>
    </View>
  );
};

export default MusicPlayer;

const styles = StyleSheet.create({
  container: {
    paddingVertical: ms(20),
    paddingHorizontal: ms(20),

    backgroundColor: Color.BACKGROUND_COLOR,
    borderRadius: ms(20),
    marginTop: ms(20),
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
  contentContainer: {
    alignItems: 'center',
  },
  pickButton: {
    backgroundColor: Color.MAIN_COLOR,
    paddingVertical: ms(5),
    paddingHorizontal: ms(12),
    borderRadius: ms(4),
    marginVertical: ms(20),
  },
  pickButtonText: {
    color: Color.BACKGROUND_COLOR,
    fontWeight: '500',
  },
  buttonControl: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: ms(280),
  },
  songContainer: {
    alignItems: 'center',
  },
  songInfo: {
    marginTop: ms(10),
    alignItems: 'center',
  },
  posterImage: {
    borderRadius: ms(10),
    height: ms(200),
    width: ms(280),
  },
  musicTitle: {
    marginTop: ms(15),
    marginHorizontal: ms(20),
    fontWeight: 'bold',
    color: Color.DISABLE_BUTTON_COLOR,
    textAlign: 'center',
  },
  musicArtist: {
    fontWeight: '500',
    color: Color.NON_ACTIVE_COLOR,
    fontSize: ms(12),
  },
  musicCountTitle: {
    color: Color.NON_ACTIVE_COLOR,
    textAlign: 'center',
    marginTop: ms(5),
    fontSize: ms(12),
    fontWeight: '500',
  },
  musicContainer: {
    alignItems: 'center',
  },
});
